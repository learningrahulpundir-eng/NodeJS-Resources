# Understanding REPL in Node.js

REPL stands for Read, Evaluate, Print, and Loop.

It is an interactive environment where you can type JavaScript code and run it line by line directly in the terminal.

## How to Start REPL

Open Command Prompt or PowerShell and type:

```bash
node
```

You should see a prompt like:

```bash
>
```

That means the REPL is ready.

## How REPL Works

1. Read
   - Takes your input.

2. Evaluate
   - Executes the code.

3. Print
   - Shows the result.

4. Loop
   - Waits for the next input.

## Simple Examples

```javascript
> 10 + 5
15

> const name = "Rahul"
undefined

> name
'Rahul'
```

## Useful REPL Commands

- `.help` → shows available commands
- `.exit` → exits REPL
- `.clear` or `.cls` → clears the screen
- `.save file.js` → saves the current session to a file
- `.load file.js` → loads a file into REPL

## Special Variable

The `_` variable stores the result of the last expression.

```javascript
> 5 + 5
10

> _ + 20
30
```

## Multi-line Code

You can also write functions or loops:

```javascript
> function add(a, b) {
... return a + b;
... }
undefined

> add(2, 3)
5
```

## Why Use REPL?

- Quickly test JavaScript code
- Debug small pieces of logic
- Learn Node.js interactively
- Avoid creating a file for simple experiments

## When Not to Use REPL

- For large applications
- For production code

In these cases, use a `.js` file instead.

## In Short

REPL is an interactive Node.js shell that lets you run JavaScript instantly for learning and testing.