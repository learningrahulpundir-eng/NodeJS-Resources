
const http = require("http");

const server = http.createServer((req, res)=>{
    // console.log("url "+req.url);
    // console.log(req.method)
    // console.log(req.httpVersion);
    // console.log(req.headers);
    //res.write("Hello");
   // res.write("World");
    res.statusCode = 200;
   // res.setHeader("content-type", "text/html")
   res.setHeader("content-type", "text/json")
   const user = {
    id: 1,
    name: "Rahul"
   }
    const result = JSON.stringify(user);
    res.end(result);
})

server.listen(3000, ()=>{
    console.log("server is running on the port 3000")
})

// Important attributes of the req object
// url : it is the path which is request by client: 
// localhost:3000 =  / i.e root
// localhost:3000/home = /home



// method
   // Get
   // Post
   //  Put
   // Delete
   // Patch

// httpversion
// headers

// res object
// end()
// write()
// setStatusCode
// set

