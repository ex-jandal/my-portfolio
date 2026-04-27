### TL;DR
**Bun** is a fast, all-in-one **JavaScript runtime**, package manager, and bundler written in Zig. It was built from the ground up to replace Node.js, focusing on extreme performance, native TypeScript support, and a unified developer experience.

---

## The "Everything" Tool
Bun is designed to eliminate the "toolchain fatigue" of modern web development. Instead of installing five different tools for testing, bundling, and running code, you just use `bun`.

### Key Features
* **JavaScriptCore Engine:** Unlike Node.js and Deno (which use Google’s V8), Bun uses the **JavaScriptCore** engine (built for Safari), which generally starts faster and uses less memory.
* **Native TypeScript & JSX:** No need for `tsc` or `babel`. Bun runs `.ts`, `.tsx`, and `.jsx` files natively out of the box.
* **Extreme Speed:** Whether it's installing packages (`bun install`) or running a dev server, Bun is often **10x to 100x faster** than npm or Node.
* **Built-in APIs:** Bun includes high-performance APIs for HTTP servers, file I/O, and SQLite, alongside full compatibility with most Node.js `built-in` modules.

> Think of Node.js like a **workshop** where you have to buy the drill, the saw, and the hammer separately (npm, vite, jest, etc.). **Bun is the Swiss Army Knife**. You pull it out of your pocket, and it already has every tool you need attached to a single handle. Plus, because it’s written in **Zig**, that knife is made of aerospace-grade titanium!

---

### Snippet
Setting up a server in Bun is incredibly concise compared to traditional Node.js.

```javascript
// server.ts - Run this directly with `bun server.ts`
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") return new Response("Hello, Abu_Jandal!");
    return new Response("404!");
  },
});

console.log(`Listening on http://localhost:${server.port}`);
```
