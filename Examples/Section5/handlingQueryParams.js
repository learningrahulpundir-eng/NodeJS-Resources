// this is request send by the browser(client)
//http://localhost:3000/products?id=101&category=mobile

// Backend wants to fetch the id and category and based on that
// it will do some maniupulation and than it well send response back the client.
// So query params are id and category, 

//http://localhost:3000/products?id=101&category=mobile

// Urls Component
// Protocols: http
// Host: localhost
// Path : products
// Query Parameters : id and category..




const http = require("http");
const { json } = require("stream/consumers");

const server = http.createServer((req, res)=>{
    // http://localhost:3000/products
    // req.url: /products
    console.log(req.headers.host)
     const url = new URL(req.url, `http://${req.headers.host}`);
     console.log(url.pathname);
     console.log(url.searchParams);
     const id = url.searchParams.get("id");
     const category = url.searchParams.get("category");
     const queryParams = {
        id: id,
        category: category
     };

     res.end(JSON.stringify(queryParams));

    // if(req.url == "/products" && req.method == "GET"){

    // }
    
});

server.listen(3000, ()=>{
    console.log("server is running on the port 3000");
})

