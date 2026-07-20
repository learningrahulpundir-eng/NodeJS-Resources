// Synchornous Code (Blocking Code)
// Asynchronous Code (Non-Blocking Code);

const fs = require('fs');
console.log("Task Started")
const result = fs.readFileSync("data.txt", "utf-8");
console.log(result);
console.log("Task Ended");

//Output
// Task Started
// Content from the file
// Task Ended

// Asynchornous Code (Un-Blocking Code)
console.log("Task Started")
fs.readFile("data.txt", (error, data)=>{
    console.log(data)
})
console.log("Task Ended");

//output
//Task Started
// Task Ended
// content of the file

// Async/Await
// It is very important feature in modern javascript which allows you to write the asynchornous code
// that look and behavie like synchornous code and it is easier to write, debug and mantain.

// Why async code.. 
// By default, Javascript is single threaded language which means a single task can be executate at a time.
// Howevere, Node JS provides Non-Blocking Input/Ouput which is used to write operations like
// setTimeout, reading the file, writing the file, queries from the database, http request etc.

console.log("start");
setTimeout(()=>{
    console.log("callback fn code");
}, 2000);
console.log("end");

// output

// start
// end
// callback fn code

// Evaluation of Node JS
// callback

// Order Operation => fetchUser(userId) => prepreOrder(orderId)=>makePayment(paymentId)=>makeInvoice(invoiceId)=>SendEmail()

// callback Hell Problem
// Promisses and Async/Await


// What are the Prmoisses

// Create method with Prmosses
const fetchUser = ()=>{
    return Promise.resolve(100);
}

fetchUser().then((data)=> console.log(data));

// output 100;

fetchData()
.then(data => processData(data))
.then(result => saveData(result))
.then(() => console.log("Done"))
.catch(err => console.log(err));

// it is better than callback but sometime diffcult to read, manage, debug and error handling

// async and await
// Array fn way
const fetchUser =async()=>{
    return 100;
}

async function fetchUser(){
    return 100
}


const result = fetchUser();

// Promise 100 

const result = await fetchUser();
console.log(result);

// output : 100

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

