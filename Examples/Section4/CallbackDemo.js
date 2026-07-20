// What is callback
// Why is callback
// What are various ways of using callback in node js
// What is the problem of using callback
// What is the soluation for those problem


// what is callback?
// call back is simple function which is passed as an arguments to another function and it gets executed later once a task is completed.


// why is callback?


// const fs = require('fs');

// // if this file is very long 
// const result = fs.readFileSync("data.txt", "utf-8")

// // node code here...
// fs.readFile("data.txt", (error,data)=>{
//     console.log("jsfkjsdfk")
// })
//node code here...


// what are the various ways of callback

// simple callback


// function greet(name, callback){
//     console.log(`Hello ${name}`)
//     callback(null, "Welcome to my Node JS Tutorial");
// }

// // Normal callback 
// function sayHi(){
//     console.log("GoodBye");
// }

// greet("Rahul",(error, data)=>{
//     console.log("welcome to node js");
//     console.log(data);
// });



// how you can create custom call back

function fetchUser(id, callback){
    const userDetails = {
        id: id,
        name: "Rahul"
    }
    callback(null, userDetails);
}

fetchUser(1, (error, data)=>{
    console.log(data);

})


// callback hell

getUser(userId, (user) => {

    getOrders(user.id, (orders) => {

        getPayment(orders[0].id, (payment) => {

            getInvoice(payment.id, (invoice) => {

                console.log(invoice);

            });
        });
    });
});


// Promisses 

getUser(userId)
    .then(user => getOrders(user.id))
    .then(orders => getPayment(orders[0].id))
    .then(payment => getInvoice(payment.id))
    .then(invoice => console.log(invoice))
    .catch(err => console.log(err));
// Better Solution: Async/Await





//or Async/Await
async function processOrder() {

    try {

        const user = await getUser(userId);

        const orders = await getOrders(user.id);

        const payment = await getPayment(orders[0].id);

        const invoice = await getInvoice(payment.id);

        console.log(invoice);

    } catch (err) {

        console.log(err);
    }
}