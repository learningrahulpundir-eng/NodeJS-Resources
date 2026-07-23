### Exmaple of Error Middleware

```javascript
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
});

app.get("/users/:id", (req, res, next) => {
  const user = null;

  if (!user) {
    return next(new Error("User not found"));
  }

  res.json(user);
});

app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong!");
  next(error);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    success: false,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Third Party Middleware
npm install morgan

```javascript
const express = require("express");
const morgan = require("morgan");

const app = express();

// Third-party Middleware
app.use(morgan("dev")); // The "dev" format displays request information in a readable format.

app.get("/", (req, res) => {
  res.send("Welcome to Express.js!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```