Node.js uses a single-threaded event loop to handle multiple requests efficiently by using async operations and a thread pool for heavy tasks.

Node.js Architecture – Simple Explanation
👉 Node.js works on a single-threaded event-driven model using an Event Loop.

🔹 1. Request Flow

Client sends a request
Request goes into the Event Queue
Event Loop picks requests one by one


🔹 2. Event Loop – The Brain

The Event Loop decides how to process each request
It checks:
👉 Is it blocking or non-blocking?


🔹 3. Non-Blocking Operations (Fast ✅)

Sent to Async APIs (OS / Network / Timers)
Event Loop does NOT wait
When task completes → comes back via callback
Then response is sent to client

👉 Example: API calls, database queries, timers

🔹 4. Blocking Operations (Heavy ⚙️)

Sent to Thread Pool
Worker threads handle the task
Result comes back to Event Loop
Then response is sent to client

👉 Example: File system, encryption, CPU-heavy tasks

🔹 5. Final Response

Event Loop sends the response back to the client