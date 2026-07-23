# Introduction to Express.js | Why Express.js? Installation & First App

## Introduction

Express.js is the most popular web framework for Node.js. It simplifies building web servers and REST APIs.

## What is Express.js?

- Fast and lightweight framework built on Node.js
- Used for Web Apps and REST APIs
- Simplifies routing and request handling

## Why Express.js?

### HTTP Module
```js
if(req.url==='/'){}
else if(req.url==='/about'){}
```

### Express
```js
app.get('/',(req,res)=>res.send('Home'));
app.get('/about',(req,res)=>res.send('About'));
```

## Features
- Simple Routing
- Middleware
- Static Files
- REST APIs
- Large Ecosystem

## Installation
```bash
npm init -y
npm install express
npm install --save-dev nodemon
```

## First Express App
```js
const express=require('express');
const app=express();
app.get('/',(req,res)=>res.send('Welcome to Express.js'));
app.listen(3000,()=>console.log('Server running'));
```

## Understanding
- `express()` creates the application.
- `app.get()` creates a GET route.
- `res.send()` sends the response.
- `app.listen()` starts the server.

## HTTP vs Express
- Less code
- Cleaner routing
- Middleware support

## Best Practices
- Use nodemon
- Organize routes
- Handle errors

## Common Mistakes
- Forgetting to install Express
- Forgetting app.listen()
- Using Express() instead of express()

## Interview Questions
1. What is Express.js?
2. Why Express?
3. What is app.listen()?
4. What does express() return?

## Summary
Express.js makes backend development faster, cleaner, and easier than the built-in HTTP module.