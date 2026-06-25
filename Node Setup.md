# Node.js Setup Guide (Windows)

This is a simple step-by-step guide to install Node.js and npm on Windows.

## 1. Download Node.js

1. Open your browser.
2. Go to https://nodejs.org.
3. Choose the LTS version.
   - LTS = recommended and stable
   - Current = latest, but may contain bugs

## 2. Install Node.js

1. Open the downloaded `.msi` file.
2. Click Next.
3. Accept the license agreement and click Next.
4. Keep the default settings.
5. Make sure "Automatically install npm" is selected.
6. Click Install.
7. Click Finish when the installation is complete.

## 3. Verify the Installation

Open Command Prompt or PowerShell and run:

```bash
node -v
```

You should see a version like:

```bash
v18.x.x
```

Now check npm:

```bash
npm -v
```

Example output:

```bash
9.x.x
```

## 4. Test Node.js

Create a file named `app.js` and add this code:

```javascript
console.log("Node.js is working!");
```

Run it with:

```bash
node app.js
```

Expected output:

```bash
Node.js is working!
```

## 5. Initialize a Project (Optional)

To create a `package.json` file:

```bash
npm init -y
```

## 6. Install a Package

Example:

```bash
npm install express
```

This installs the Express framework.

## Important Notes

- npm comes automatically with Node.js.
- You do not need to install npm separately.
- It is best to use the LTS version for stability.

## Common Issue

### "node is not recognized"

Try one of these fixes:

- Restart your computer
- Reinstall Node.js

## In Short

- Download Node.js (LTS)
- Install it
- Verify with `node -v` and `npm -v`
- Start building your project