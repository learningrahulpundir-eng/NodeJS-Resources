
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log("url " +req.url)
    if(req.url==  "/"){
        res.end("Home page");
    }
    else if(req.url =="/aboutus"){
        res.end("About Us");
    }
    else if(req.url =="/contactus"){
        res.end("Contact us")
    }
    else{
        res.statusCode =404;
        res.end("Not found")
    }
})

server.listen(3000, ()=>{
  console.log("server is running on the port 3000");
})


// what is Routing

// Routing is the process which is used to decide  the response based on the url send by the client.

// Browser (Client)
// localhost: 3000 - / Home Page
// localhost: 3000/aboutus - / About Us
// localhost: 3000/contactus - // Contact us




