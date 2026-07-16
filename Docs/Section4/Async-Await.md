### Async/Await in Node.js 

async/await is one of the most important features in modern JavaScript. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read, debug, and maintain.


### What is Asynchronous Programming?

JavaScript is single-threaded, meaning it executes one statement at a time.

Node.js, however, provides non-blocking I/O, allowing operations like:

Reading files
Writing files
Database queries
HTTP requests
Timers

to run without blocking the main thread.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Task Completed");
}, 2000);

console.log("End");
```

 Output
 Start
 End
 Task Completed
The program doesn't wait for 2 seconds.

### The Evolution of Asynchronous Code

Before async/await, developers used:

1. Callbacks

```javascript
readFile("data.txt", (err, data) => {
    if(err) return console.log(err);

    console.log(data);
});
```
Problem:

Callback Hell
Difficult debugging
Poor readability



2. Promises (.then().catch())

```javascript
fetchData()
.then(data => processData(data))
.then(result => saveData(result))
.then(() => console.log("Done"))
.catch(err => console.log(err));
```

Better, but long promise chains become difficult to read.

3. Async/Await

```javascript
async function start() {
    try {
        const data = await fetchData();
        const result = await processData(data);

        await saveData(result);

        console.log(result);
    } catch(err) {
        console.log(err);
    }
}
```

### What is an Async Function?

Adding the async keyword before a function automatically makes it return a Promise.

```javascript
async function greet() {
    return "Hello";
}

Equivalent to:

function greet() {
    return Promise.resolve("Hello");
}

Example

async function add(a, b) {
    return a + b;
}

add(10,20)
.then(console.log);

```
Output

30

### What is Await?

await pauses the execution of the async function until the Promise settles.

```javascript
const data = await fetchData();
```

Without await:
```javascript
const data = fetchData();
console.log(data);
```

Output

Promise { <pending> }

With await
```javascript
const data = await fetchData();

console.log(data);
```
Output

Actual Data
Rules of Await

✅ Can only be used

Inside async functions
At top-level in ES Modules

❌ Cannot be used inside normal functions.

Wrong
```javascript
function test() {
    await fetchData();
}
```

Correct
```javascript
async function test() {
    await fetchData();
}
```

### How Async/Await Works Internally

Suppose

```javascript
async function getData() {
    const user = await fetchUser();

    console.log(user);
}
```

Internally it behaves like

```javascript
function getData() {
    return fetchUser()
    .then(user => {
        console.log(user);
    });
}
```

### Async/Await is syntactic sugar over Promises.

Async Functions Always Return Promises

Example
```javascript
async function demo() {
    return 100;
}

console.log(demo());
```
Output

Promise { 100 }

You can use
```javascript
demo().then(console.log);
```
Output

100

Await Doesn't Block the Entire Program

Many beginners think await blocks Node.js.

It only pauses that async function.

Example
```javascript
async function work() {
    console.log("Start");

    await new Promise(resolve =>
        setTimeout(resolve,2000)
    );

    console.log("End");
}

work();

console.log("Outside");
```

Output

Start
Outside
End

### Node.js continues executing other code.

Sequential Execution
```javascript
const user = await getUser();

const orders = await getOrders(user.id);

const payment = await getPayment(orders.id);
```

Each waits for the previous one.

Timeline

2 sec
+
2 sec
+
2 sec

= 6 seconds
Parallel Execution

Independent operations should run together.

Wrong
```javascript
const user = await getUser();

const products = await getProducts();

const categories = await getCategories();
```
Total

6 seconds

Better
```javascript
const [user, products, categories] =
await Promise.all([
    getUser(),
    getProducts(),
    getCategories()
]);
```

Now

≈2 seconds

Huge performance improvement.

### Promise.all()

Runs multiple promises simultaneously.

```javascript
const results = await Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]);

console.log(results);
```

Output

[1,2,3]