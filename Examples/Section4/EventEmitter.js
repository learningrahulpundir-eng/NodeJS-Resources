const fs = require('fs');

const EventEmitter = require('events');

const myEmitter= new EventEmitter();


// Register the event listener
myEmitter.on('testEvent', ()=>{
    console.log('testEvent has been triggered');
})

// Trigger the Event

myEmitter.emit('testEvent');


myEmitter.on('dataReceived', (data)=>{
    console.log(`Data received: ${data}`);
});

myEmitter.emit('dataReceived', 'Hello, World!');

myemitter.on("ParmterizedEvent", (param1, param2)=>{
    console.log(`Parameterized event triggered with parameters: ${param1}, ${param2}`);
});

myEmitter.emit('ParameterizedEvent', 'Value1', 'Value2');


myEmitter.on('OrderPlaced', (orderId)=>{
    console.log(`Order received with ID: ${orderId}`);
});
myEmitter.on('OrderPlaced', (orderId)=>{
    console.log(`Payment processed for order ID: ${orderId}`);
});

myEmitter.on('OrderPlaced', (orderId)=>{
    console.log(`Sending email for order ID: ${orderId}`);
});

myEmitter.emit('OrderPlaced', orderId);

