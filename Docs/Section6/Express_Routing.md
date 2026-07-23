# Express.js Routing Explained | GET, POST, PUT & DELETE Routes

## Introduction
Routing determines how an Express application responds to client requests based on the URL and HTTP method.

## What is Routing?
A route consists of an HTTP method, a URL path, and a callback function.

```javascript
app.get('/users',(req,res)=>{res.send('All Users');});
```

## Why Express Routing?
Express routing is cleaner and easier to maintain than using multiple if...else statements with the Node.js HTTP module.

## HTTP Methods
- GET: Read data
- POST: Create data
- PUT: Replace data
- PATCH: Update partial data
- DELETE: Delete data

## Examples
```javascript
app.get('/',(req,res)=>res.send('Home'));
app.post('/users',(req,res)=>res.send('User Created'));
app.put('/users/:id',(req,res)=>res.send('User Updated'));
app.delete('/users/:id',(req,res)=>res.send('User Deleted'));
```

## Complete Example
```javascript
const express=require('express');
const app=express();
app.get('/',(req,res)=>res.send('Home'));
app.get('/about',(req,res)=>res.send('About'));
app.get('/contact',(req,res)=>res.send('Contact'));
app.listen(3000);
```

## Route Parameters Preview
```javascript
app.get('/users/:id',(req,res)=>{res.send(req.params.id);});
```

## Best Practices
- Use meaningful routes.
- Use correct HTTP methods.
- Keep handlers small.
- Organize routes.

## Common Mistakes
- Wrong HTTP method.
- Duplicate routes.
- Ignoring status codes.

## Interview Questions
1. What is routing?
2. What is app.get()?
3. Difference between GET and POST?
4. Why use Express routing?

## Summary
Express routing maps URLs and HTTP methods to handler functions, making applications easier to build and maintain.