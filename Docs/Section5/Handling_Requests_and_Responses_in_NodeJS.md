# Handling Requests and Responses in Node.js

## Introduction

In the previous lesson, we created our first HTTP server using Node.js.

``` javascript
const http = require('http');
const server=http.createServer((req,res)=>{res.end('Hello World');});
server.listen(3000);
```

## Request-Response Cycle

Every client request creates two objects: - **req** (Request Object) -
**res** (Response Object)

## Request Object

### req.url

``` javascript
console.log(req.url);
```

### req.method

``` javascript
console.log(req.method);
```

### req.headers

``` javascript
console.log(req.headers);
```

### req.httpVersion

``` javascript
console.log(req.httpVersion);
```

## Response Object

### res.write()

``` javascript
res.write('Hello ');
res.write('World');
res.end();
```

### res.end()

``` javascript
res.end('Hello World');
```

### setHeader()

#### for plain text
``` javascript
res.setHeader('Content-Type','text/plain');
res.end('Hello');
```

#### for html 
``` javascript
res.setHeader('Content-Type','text/html');
res.end('<h1>Hello Html<h1>');
```


#### for Json 
``` javascript
res.setHeader('Content-Type','text/Json');
const user = {
    id: 1,
    name: "Rahul"
}
const result = JSON.Stringify(user)
res.end(result);
```

### statusCode

``` javascript
res.statusCode=200;
res.end('Success');
```

## Complete Example

``` javascript
const http=require('http');
const server=http.createServer((req,res)=>{
 console.log(req.url);
 console.log(req.method);
 console.log(req.headers);
 res.statusCode=200;
 res.setHeader('Content-Type','text/plain');
 res.end('Request Received Successfully');
});
server.listen(3000,()=>console.log('Server running'));
```

## Best Practices

-   Always call `res.end()`.
-   Set headers before sending the response.
-   Use proper HTTP status codes.
-   Keep request handling simple.
