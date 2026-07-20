### What is HTTP?

HTTP (HyperText Transfer Protocol) is the protocol used for communication between a client and a server.

Whenever you:

Open a website
Call an API
Submit a form
Download a file

your browser sends an HTTP Request, and the server returns an HTTP Response.

Example:

```text
Browser  ---------- HTTP Request ---------> Server
Browser <--------- HTTP Response ---------- Server
```


### What is a Web Server?

A web server is simply a program that listens for incoming HTTP requests and sends responses back to the client.

### Examples of web servers include:

Node.js HTTP Server
Nginx
Apache
IIS

In this course, we'll build our own web server using Node.js.

Node.js HTTP Module

Node.js provides a built-in module called http.

This module allows you to:

Create HTTP servers
Receive requests
Send responses
Handle different URLs
Build APIs

Since it is built into Node.js, no installation is required.

Import it using:

```javascript
const http = require("http");
```

### Creating Your First HTTP Server

Create a file named:

server.js

Add the following code:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

### Understanding the Code

#### Step 1

Import the HTTP module.

const http = require("http");
#### Step 2

Create a server.

const server = http.createServer();

The createServer() method creates a new HTTP server.

It accepts a callback function that executes whenever a request arrives.

#### Step 3

Handle incoming requests.

(req, res) => {}

Node.js automatically provides two objects:

Request (req)

Contains information about the incoming request.

Examples:

URL
HTTP Method
Headers
Query Parameters
Response (res)

Used to send data back to the client.

Examples:

HTML
JSON
Text
Files
Status Codes
#### Step 4

Send a response.

res.end("Hello World");

res.end() finishes the response and sends the data to the client.

#### Step 5

Start the server.

server.listen(3000, () => {
    console.log("Server is running...");
});

The server starts listening on port 3000.

Running the Server

Open the terminal and execute:

node server.js

Output:

Server is running on port 3000

Now open your browser.

http://localhost:3000

You should see:

Hello World

#### Understanding the Request Flow
```txt
User Opens Browser
        │
        ▼
http://localhost:3000
        │
        ▼
Node HTTP Server
        │
        ▼
createServer Callback
        │
        ▼
res.end("Hello World")
        │
        ▼
Browser Displays Response
```
How listen() Works
server.listen(PORT);

This tells Node.js to:
Start the server.
Listen on the specified port.
Wait for incoming requests.
Execute the callback whenever a request arrives.

### Common Ports
```txt
Port	Usage
3000	Local development
5000	APIs
8080	Alternative HTTP server
80	Default HTTP
443	HTTPS
```