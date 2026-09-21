/* eslint-disable */
/**
 * Post-build prerender step.
 *
 * CRA produces a client-side SPA: without this step every URL serves the same
 * shell — homepage <title>, a canonical pointing at "/", and no content — so
 * crawlers that don't execute JavaScript see every page as a copy of the home
 * page.
 *
 * Pages here set their title / description / canonical / JSON-LD imperatively
 * in effects (src/lib/seo.js), so rather than a string renderer this boots the
 * real <App> inside jsdom (shipped with react-scripts — no browser needed) for
 * every route in public/sitemap-static.xml (lazy page chunks included), lets the effects run, and writes
 * the resulting document to build/<route>/index.html. Vercel serves those
 * files ahead of the SPA rewrite; in the browser React re-renders over them.
 *
 * A route that fails is skipped (it stays an SPA route) and the build never
 * fails because of prerendering.
 */
const fs = require("fs");
const path = require("path");
const Module = require("module");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const BUILD_DIR = path.join(ROOT, "build");
const ORIGIN = "https://msylimoservice.com";

function installCompiler() {
  const babel = require("@babel/core");
  const opts = {
    babelrc: false,
    configFile: false,
    presets: [[require.resolve("@babel/preset-react"), { runtime: "automatic" }]],
    plugins: [
      // React.lazy(() => import("@/pages/X")): native import() would bypass the
      // require hooks below, so rewrite it to a promise around require().
      ({ types: t }) => ({
        visitor: {
          CallExpression(p) {
            if (p.node.callee.type !== "Import") return;
            p.replaceWith(
              t.callExpression(
                t.memberExpression(t.callExpression(t.memberExpression(t.identifier("Promise"), t.identifier("resolve")), []), t.identifier("then")),
                [t.arrowFunctionExpression([], t.callExpression(t.identifier("require"), p.node.arguments))]
              )
            );
          },
        },
      }),
      require.resolve("@babel/plugin-transform-modules-commonjs"),
    ],
  };
  const compile = (module, filename) =>
    module._compile(babel.transformSync(fs.readFileSync(filename, "utf8"), { ...opts, filename }).code, filename);
  const origJs = Module._extensions[".js"];
  Module._extensions[".jsx"] = compile;
  Module._extensions[".js"] = (module, filename) =>
    filename.startsWith(SRC + path.sep) ? compile(module, filename) : origJs(module, filename);
  for (const ext of [".css", ".scss"]) Module._extensions[ext] = () => {};
  for (const ext of [".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif"])
    Module._extensions[ext] = (module, filename) => { module.exports = "/" + path.basename(filename); };
  const origResolve = Module._resolveFilename;
  Module._resolveFilename = function (request, ...rest) {
    if (request.startsWith("@/")) request = path.join(SRC, request.slice(2));
    return origResolve.call(this, request, ...rest);
  };
}

function routesFromSitemap() {
  const xml = fs.readFileSync(path.join(BUILD_DIR, "sitemap-static.xml"), "utf8");
  const seen = new Set();
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    try { seen.add(new URL(m[1]).pathname.replace(/(.)\/+$/, "$1")); } catch {}
  }
  return [...seen];
}

const tick = () => new Promise((r) => setTimeout(r, 0));

async function main() {
  const shellPath = path.join(BUILD_DIR, "index.html");
  if (!fs.existsSync(shellPath)) throw new Error(`No build found at ${BUILD_DIR}. Run the build first.`);
  const shell = fs.readFileSync(shellPath, "utf8");
  // Untouched SPA shell for routes without a static file (vercel.json rewrites
  // to it). Its canonical is dropped: a hard-coded "/" canonical on an unknown
  // URL tells crawlers the page is a copy of the homepage.
  fs.writeFileSync(path.join(BUILD_DIR, "shell.html"), shell.replace(/\s*<link rel="canonical"[^>]*>/, ""), "utf8");

  const { JSDOM } = require("jsdom");
  const dom = new JSDOM(shell, { url: `${ORIGIN}/`, pretendToBeVisual: true });
  const { window } = dom;
  const noop = () => {};
  window.scrollTo = noop;
  window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener: noop, removeListener: noop, addEventListener: noop, removeEventListener: noop }));
  class Observer { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
  window.IntersectionObserver = window.ResizeObserver = Observer;
  window.fetch = () => new Promise(noop); // runtime-only data never resolves at build time
  // Expose browser globals (document, SVGElement, …) to the app code and its libraries.
  for (const k of ["window", "document", "navigator", "location", "history", ...Object.getOwnPropertyNames(window)]) {
    if (k in globalThis && !["window", "document", "navigator", "location", "history", "fetch"].includes(k)) continue;
    try { Object.defineProperty(globalThis, k, { value: window[k], configurable: true, writable: true }); } catch {}
  }

  installCompiler();
  const origError = console.error;
  console.error = process.env.PRERENDER_DEBUG ? origError : noop;
  const React = require("react");
  const { createRoot } = require("react-dom/client");
  const { flushSync } = require("react-dom");
  const App = require(path.join(SRC, "App.js")).default;

  const pristineHead = window.document.head.innerHTML;
  const container = window.document.getElementById("root");
  const routes = routesFromSitemap();
  let ok = 0;
  const failed = [];
  // "/" last: it overwrites the shell file.
  for (const route of [...routes.filter((r) => r !== "/"), "/"]) {
    let root;
    try {
      window.document.head.innerHTML = pristineHead;
      window.history.pushState({}, "", route);
      root = createRoot(container);
      flushSync(() => root.render(React.createElement(App)));
      // Pages are React.lazy() chunks: wait until Suspense has resolved to real content.
      // React throttles revealing suspended content (~300 ms), so poll in real time.
      for (let i = 0; i < 150 && !container.querySelector("h1"); i++) await new Promise((r) => setTimeout(r, 20));
      await tick();
      if (!container.querySelector("h1")) throw new Error("no <h1> rendered");
      if (window.location.pathname.replace(/(.)\/+$/, "$1") !== route) throw new Error(`redirected to ${window.location.pathname}`);
      const html = "<!doctype html>\n" + window.document.documentElement.outerHTML;
      const file = route === "/" ? shellPath : path.join(BUILD_DIR, route, "index.html");
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html, "utf8");
      ok++;
    } catch (err) {
      failed.push(`${route}: ${err && err.message}`);
    } finally {
      try { flushSync(() => root && root.unmount()); } catch {}
      container.innerHTML = "";
    }
  }
  console.error = origError;
  console.log(`[prerender] wrote ${ok} static pages (of ${routes.length} routes).`);
  if (failed.length) console.warn("[prerender] skipped:\n  " + failed.join("\n  "));
}

main()
  .catch((err) => {
    console.warn("\n[prerender] WARNING: prerendering was skipped:", err && err.stack ? err.stack : err);
  })
  .finally(() => process.exit(0));
