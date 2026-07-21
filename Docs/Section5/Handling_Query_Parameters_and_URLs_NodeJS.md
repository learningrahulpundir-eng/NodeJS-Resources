# Handling Query Parameters and URLs in Node.js

## Introduction

Query parameters let clients send extra information in a URL.

Example:

    http://localhost:3000/products?id=101&category=laptop

## URL Components

-   Protocol
-   Host
-   Port
-   Path
-   Query Parameters

## Reading req.url

``` javascript
console.log(req.url);
```

## Parsing the URL

``` javascript
const url = new URL(req.url, `http://${req.headers.host}`);
console.log(url.pathname);
console.log(url.search);
```

## Reading Query Parameters

``` javascript
const id = url.searchParams.get('id');
const category = url.searchParams.get('category');
```

## Complete Example

``` javascript
const http=require('http');
http.createServer((req,res)=>{
 const url=new URL(req.url,`http://${req.headers.host}`);
 if(url.pathname==='/products'){
  const id=url.searchParams.get('id');
  res.setHeader('Content-Type','application/json');
  res.end(JSON.stringify({productId:id}));
 } else {
  res.statusCode=404;
  res.end('Route Not Found');
 }
}).listen(3000);
```

## Real-World Uses

-   Searching
-   Filtering
-   Pagination
-   Sorting

## Best Practices

-   Validate parameters.
-   Handle missing values.
-   Use the URL class.

## Summary

Use `req.url` and the `URL` class to parse paths and query parameters
safely.
