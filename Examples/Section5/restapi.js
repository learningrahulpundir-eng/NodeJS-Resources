// Rest API Basic

// REST
// Represtenational state Transfer. 
// It allows to communicated between client and server using HTTP.
// It is most popular archetuctural style as well.


// API
// Application Program Interface
// API is used to exachanged the data between applications.

//API Methods
// GET - Reterive the data
// Post - Create the data
// Delete - Delete the data
// PUT - Update the data
// PATCH - Partially update data

/* Examples
 /User - returns all the details of the users
 /User/1 - return specfic user details
 /Users - Single User/Multiple Users
 / User/1 - Delete the user
*/


const http = require("http");

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method)
     if(req.url == "/users" && req.method == "GET"){
        const user = {
            id: 1,
            name: "Rahul"
        }
        const result = JSON.stringify(user);
        res.end(result);
     }
     res.end("Not found");
     
});

server.listen(3000, ()=>{
    console.log("server is running on the port 3000");
})