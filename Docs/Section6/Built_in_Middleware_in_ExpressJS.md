# Built-in Middleware in Express.js

## Introduction
Express provides built-in middleware to handle common tasks.

## express.json()
Parses JSON request bodies.
```javascript
app.use(express.json());
```

## express.urlencoded()
Parses HTML form data.
```javascript
app.use(express.urlencoded({extended:true}));
```

## express.static()
Serves static files.
```javascript
app.use(express.static('public'));
```

## Complete Example
```javascript
const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.post('/users',(req,res)=>res.json(req.body));
app.listen(3000);
```

## Best Practices
- Register middleware before routes.
- Use only required middleware.
- Keep static assets in a public folder.

## Common Mistakes
- Forgetting express.json().
- Registering middleware after routes.
- Wrong static folder path.

## Interview Questions
1. What is express.json()?
2. What is express.urlencoded()?
3. What is express.static()?
4. Why is middleware order important?

## Summary
Built-in middleware simplifies parsing request bodies and serving static files.