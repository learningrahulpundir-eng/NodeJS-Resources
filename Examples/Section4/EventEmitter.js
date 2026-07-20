// What is Event Emiiter?
// Bind event lister, trigger the event
// Paramterized Events
// what is use of Once method
// remove the event listerner
// real world scenarios where event listerner will user and much more...


// What is Event Emiiter?
// it is an class in Node JS. It works on publisher and subscriber model.
// it comes under the events module

const EventEmiiter = require("events");

const eventEmiiter = new EventEmiiter();

// on is the method to define your event to bind with event emitter
// eventEmiiter.on('greet', ()=>{
//     console.log("Welcome to Event Emitter Tutorial");
    
// })

// // trigger the event emit method
// eventEmiiter.emit("greet");


// How you can pass paramter to the event.
// eventEmiiter.on('greet', (name, age)=>{
//     console.log("Welcome to Event Emitter Tutorial");
//     console.log("name is ="+ name + " age ="+ age)
    
// })

// // trigger the event emit method
// eventEmiiter.emit("greet", "Rahul", "30");


// Multiple Listerners

// eventEmiiter.on("order", (userId)=> console.log("Get User details"));
// eventEmiiter.on("order", ()=> console.log("Generate Order"));
// eventEmiiter.on("order", ()=> console.log("Make Payment"));
// eventEmiiter.on("order", ()=> console.log("Invoice Generated"));

// eventEmiiter.emit("order", 1)



// once  



// Multiple Listerners

// eventEmiiter.once("order", (userId)=> console.log("Get User details"));
// eventEmiiter.once("order", ()=> console.log("Generate Order"));
// eventEmiiter.once("order", ()=> console.log("Make Payment"));
// eventEmiiter.once("order", ()=> console.log("Invoice Generated"));

// eventEmiiter.emit("order")
// eventEmiiter.emit("order")
// eventEmiiter.emit("order")


// Remove EventListner


//eventEmiiter.on("order", (userId)=> console.log("Get User details"));

//eventEmiiter.removeListener("order");

//eventEmiiter.emit("order");


/// how you can extend event listern

class UserLogin extends EventEmiiter{
    login(){
        console.log("all the bussiness logic for login");
        this.emit("login")
    }
}

const userLogin = new UserLogin();
userLogin.on("login", ()=>{

    
    console.log("login successfully");
})

userLogin.login();





