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
//   2. POST /api/lead-capture 400s on missing name / missing phone.
//   3. POST /api/lead-capture returns 201 and resolves quickly when
//      Twilio + LEAD_WEBHOOK_URL env vars are all unset (no-op fire path).
//   4. POST /api/lead-capture still returns 201 — and is bounded by the 6s
//      per-call timeout, not left hanging — when LEAD_WEBHOOK_URL points at
//      an unreachable host.

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

  await test('rejects non-POST requests', async () => {
    // eslint-disable-next-line global-require
    const chatHandler = require(path.join(__dirname, '..', 'api', 'chat.js'));
    const req = mockReq({ method: 'GET' });
    const res = mockRes();
    await chatHandler(req, res);
    assert.strictEqual(res.statusCode, 405);
  });

  console.log('\napi/lead-capture.js');
  await test('400s when name is missing', async () => {
    // eslint-disable-next-line global-require
    const leadHandler = require(path.join(__dirname, '..', 'api', 'lead-capture.js'));
    const req = mockReq({ body: { phone: '5551234567' } });
    const res = mockRes();
    await leadHandler(req, res);
    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.body.success, false);
  });

  await test('400s when phone is missing/invalid', async () => {
    // eslint-disable-next-line global-require
    const leadHandler = require(path.join(__dirname, '..', 'api', 'lead-capture.js'));
    const req = mockReq({ body: { name: 'Jane Doe', phone: '123' } });
    const res = mockRes();
    await leadHandler(req, res);
    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.body.success, false);
  });

  await test('400s on an invalid email when one is provided', async () => {
    // eslint-disable-next-line global-require
    const leadHandler = require(path.join(__dirname, '..', 'api', 'lead-capture.js'));
    const req = mockReq({ body: { name: 'Jane Doe', phone: '5551234567', email: 'not-an-email' } });
    const res = mockRes();
    await leadHandler(req, res);
    assert.strictEqual(res.statusCode, 400);
  });

  await test('201s quickly with valid input and no Twilio/webhook env vars set', async () => {
    delete process.env.TWILIO_ACCOUNT_SID;
    delete process.env.TWILIO_AUTH_TOKEN;
    delete process.env.TWILIO_FROM_NUMBER;
    delete process.env.ALERT_PHONE_NUMBER;
    delete process.env.LEAD_WEBHOOK_URL;
    // eslint-disable-next-line global-require
    const leadHandler = require(path.join(__dirname, '..', 'api', 'lead-capture.js'));
    const req = mockReq({ body: { name: 'Jane Doe', phone: '5551234567', email: 'jane@example.com' } });
    const res = mockRes();
    const start = Date.now();
    await leadHandler(req, res);
    const ms = Date.now() - start;
    assert.strictEqual(res.statusCode, 201);
    assert.strictEqual(res.body.success, true);
    assert.ok(ms < 2000, `expected the no-op SMS/webhook path to resolve fast, took ${ms}ms`);
  });

  await test('201s and stays bounded by the timeout when LEAD_WEBHOOK_URL is unreachable', async () => {
    // A non-routable address: the connection attempt either hangs (bounded
    // by the 6s AbortController timeout in lib/leadWebhook.js) or fails fast
    // with a network error — either way this must never throw, never return
    // anything but 201, and never take meaningfully longer than the timeout.
    process.env.LEAD_WEBHOOK_URL = 'http://10.255.255.1:1234/unreachable';
    // eslint-disable-next-line global-require
    const leadHandler = require(path.join(__dirname, '..', 'api', 'lead-capture.js'));
    const req = mockReq({ body: { name: 'Jane Doe', phone: '5551234567' } });
    const res = mockRes();
    const start = Date.now();
    await leadHandler(req, res);
    const ms = Date.now() - start;
    assert.strictEqual(res.statusCode, 201);
    assert.strictEqual(res.body.success, true);
    assert.ok(ms < 7000, `expected the webhook timeout (6s) to bound the call, took ${ms}ms`);
    delete process.env.LEAD_WEBHOOK_URL;
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
