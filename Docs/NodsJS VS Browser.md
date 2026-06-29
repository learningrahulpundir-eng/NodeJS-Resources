# Node.js vs Browser JavaScript

Node.js and browser JavaScript use the same core language, but they run in different environments and are used for different tasks.

## Quick Summary
- Use Node.js for backend development.
- Use browser JavaScript for frontend development.

## Main Differences

| Feature | Node.js | Browser JavaScript |
|---|---|---|
| Where it runs | On the server (local machine or cloud) | Inside web browsers like Chrome or Edge |
| Main purpose | Backend development, APIs, servers | Frontend UI and user interaction |
| Access to system | Full access to files, OS, and network | Limited for security reasons |
| Common APIs | Node APIs such as `fs`, `http`, and `path` | Browser APIs such as `DOM`, `window`, and `fetch` |
| Security level | Less restricted | Highly restricted because of sandboxing |
| Module system | CommonJS and ES Modules | ES Modules |
| Global object | `global` | `window` |
| File system access | Yes, using the `fs` module | No direct access |
| Typical use cases | APIs, servers, backend logic | UI handling, DOM manipulation, forms |

## In Simple Terms
- Node.js helps you build the server-side part of an application.
- Browser JavaScript helps you build what users see and interact with in the browser.
