#!/usr/bin/env node
// Lightweight smoke tests for the serverless functions in ../api, run
// directly against the exported (req, res) handlers (no real HTTP server,
// no network dependency for the "happy path" tests). Run with:
//
//   node scripts/test-api.js
//
// Covers:
//   1. POST /api/chat falls back gracefully (no crash, 200) with no
//      ANTHROPIC_API_KEY configured.
//   2. GET /api/chat reports { enabled: false } with no ANTHROPIC_API_KEY,
//      which keeps the chat widget hidden.

const assert = require('assert');
const path = require('path');

let passed = 0;
let failed = 0;

async function test(name, fn) {
  const start = Date.now();
  try {
    await fn();
    const ms = Date.now() - start;
    console.log(`  ok  ${name} (${ms}ms)`);
    passed += 1;
  } catch (err) {
    console.log(`FAIL  ${name}`);
    console.log(`      ${err.message}`);
    failed += 1;
  }
}

function mockReq({ method = 'POST', body = {}, headers = {} } = {}) {
  return {
    method,
    body,
    headers: { host: 'localhost:3000', ...headers },
  };
}

function mockRes() {
  return {
    statusCode: null,
    headers: {},
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    setHeader(key, value) {
      this.headers[key] = value;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
  };
}

// Env vars every test starts clean, then restored at the end so this script
// doesn't leak state into anything that runs after it in the same process.
const ENV_KEYS = [
  'ANTHROPIC_API_KEY',
  'ANTHROPIC_CHAT_MODEL',
  'TWILIO_ACCOUNT_SID',
  'TWILIO_AUTH_TOKEN',
  'TWILIO_FROM_NUMBER',
  'ALERT_PHONE_NUMBER',
  'LEAD_WEBHOOK_URL',
];
const savedEnv = {};
for (const key of ENV_KEYS) {
  savedEnv[key] = process.env[key];
  delete process.env[key];
}

async function main() {
  console.log('api/chat.js');
  await test('returns a 200 fallback reply with no ANTHROPIC_API_KEY set', async () => {
    delete process.env.ANTHROPIC_API_KEY;
    // eslint-disable-next-line global-require
    const chatHandler = require(path.join(__dirname, '..', 'api', 'chat.js'));
    const req = mockReq({ body: { messages: [{ role: 'user', content: 'How much for airport pickup?' }] } });
    const res = mockRes();
    await chatHandler(req, res);
    assert.strictEqual(res.statusCode, 200, `expected 200, got ${res.statusCode}`);
    assert.strictEqual(typeof res.body.reply, 'string');
    assert.ok(res.body.reply.length > 0, 'reply should not be empty');
    assert.ok(res.body.reply.includes('877'), 'fallback reply should include the real phone number');
  });

  await test('GET status probe reports disabled with no ANTHROPIC_API_KEY', async () => {
    delete process.env.ANTHROPIC_API_KEY;
    // eslint-disable-next-line global-require
    const chatHandler = require(path.join(__dirname, '..', 'api', 'chat.js'));
    const req = mockReq({ method: 'GET' });
    const res = mockRes();
    await chatHandler(req, res);
    assert.strictEqual(res.statusCode, 200);
    assert.strictEqual(res.body.enabled, false);
  });

  await test('rejects other non-POST requests', async () => {
    // eslint-disable-next-line global-require
    const chatHandler = require(path.join(__dirname, '..', 'api', 'chat.js'));
    const req = mockReq({ method: 'PUT' });
    const res = mockRes();
    await chatHandler(req, res);
    assert.strictEqual(res.statusCode, 405);
  });

  console.log(`\n${passed} passed, ${failed} failed`);
  for (const key of ENV_KEYS) {
    if (savedEnv[key] === undefined) delete process.env[key];
    else process.env[key] = savedEnv[key];
  }
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error('Test runner crashed:', err);
  process.exit(1);
});
