# package.json vs package-lock.json

## 1. Create a Node.js project
```bash
npm init -y
```
This creates `package.json`:
```json
{
  "name": "my-app",
  "version": "1.0.0"
}
```

### What is `package.json`?
- The project's blueprint.
- Lists project information, scripts, and the dependencies you want.
- Example: express, lodash, react.

## 2. Install Express
```bash
npm install express
```
This updates `package.json` and creates `package-lock.json`.

### `package.json` after install
```json
{
  "dependencies": {
    "express": "^4.18.2"
  }
}
```
- `^4.18.2` means install `4.18.2` or any compatible newer `4.x` version.
- It is a request: “I need express.”
- Think of it as a wishlist.

### `package-lock.json`
Example simplified:
```json
{
  "dependencies": {
    "express": {
      "version": "4.18.2",
      "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz"
    }
  }
}
```
- Stores the exact version installed.
- Stores sub-dependencies and exact package sources.
- Think of it as a snapshot of the installed dependency tree.

## 3. The real difference
| File | Purpose | Version type | Editable |
|---|---|---|---|
| `package.json` | Define what you want | Flexible (`^`, `~`, exact) | Yes |
| `package-lock.json` | Lock exact installed versions | Exact | No (auto-managed) |

### `package.json`
- Flexible.
- Defines what your project needs.
- Example:
```json
"express": "^4.18.2"
```
- Allows updates to newer compatible versions.

### `package-lock.json`
- Strict.
- Defines exactly what was installed.
- Example:
```json
"express": "4.18.2"
```
- Ensures the same install on every machine.

## 4. Why both matter
- You install today: `npm install express` → `4.18.2`
- Your teammate installs later:
  - Without `package-lock.json`, npm may install a newer patch or minor version.
  - With `package-lock.json`, npm installs the same exact version.

### Result
- `package.json` = “I want this dependency.”
- `package-lock.json` = “This is exactly what was installed.”

## 5. Simple analogy
- `package.json` = "I want pizza 🍕"
- `package-lock.json` = "I got Domino’s medium cheese pizza at 2pm"

## Summary
- `package.json` declares dependencies.
- `package-lock.json` locks installed versions.
- Commit both files to Git.
- Do not manually edit `package-lock.json`.
