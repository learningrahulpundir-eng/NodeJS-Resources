# REST API Basics in Node.js

## Introduction

REST (Representational State Transfer) is a popular architectural style
for building web services. REST APIs allow clients and servers to
communicate using HTTP.

## What is an API?

An API (Application Programming Interface) allows two applications to
exchange data.

## HTTP Methods

  Method   Purpose
  -------- -----------------------
  GET      Retrieve data
  POST     Create data
  PUT      Replace data
  PATCH    Partially update data
.  DELETE   Delete data

## Common Endpoints

-   GET /users
-   GET /users/1
-   POST /users
-   PUT /users/1
-   DELETE /users/1

## JSON Response Example

``` javascript
const users=[{id:1,name:'Rahul'}];
res.setHeader('Content-Type','application/json');
res.end(JSON.stringify(users));
```

## Status Codes

200 OK 
201 Created 
400 Bad Request 
404 Not Found 
500 Internal Server
Error

## Complete Example

``` javascript
const http=require('http');
const users=[{id:1,name:'Rahul'}];
const server=http.createServer((req,res)=>{
 if(req.url==='/users' && req.method==='GET'){
  res.setHeader('Content-Type','application/json');
  res.end(JSON.stringify(users));
 } else {
  res.statusCode=404;
  res.end('Route Not Found');
 }
});
server.listen(3000);
```

## Best Practices

-   Use nouns for resources.
-   Return JSON.
-   Use correct status codes.
-   Use proper HTTP methods.

## Summary

REST APIs expose resources using URLs and HTTP methods. JSON is the
standard response format.
