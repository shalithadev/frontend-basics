# React.js and Next.js Mastering Course

## Session 04

## 1. JavaScript Promises

### What is a Promise?

A `Promise` is an object representing the eventual completion or failure of an asynchronous operation. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This enables asynchronous methods to return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

### States of a Promise

A `Promise` can be in one of three states:

- **Pending**: The initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

### Example

Here is a simple example to illustrate the use of `Promise`:

```javascript
// Create a new Promise
let promise = new Promise((resolve, reject) => {
  let success = true; // Simulate success or failure
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

// Handle the Promise
promise
  .then((message) => {
    console.log(message); // "Operation was successful!"
  })
  .catch((error) => {
    console.error(error); // "Operation failed."
  });
```

In this example, the `Promise` is created with a function that takes `resolve` and `reject` as arguments. Depending on the condition, it either resolves with a success message or rejects with an error message. The `then` method is used to handle the resolved value, and the `catch` method is used to handle any errors.

## 2. Async and Await

### Why Use Async and Await?

`async` and `await` are used in programming to handle asynchronous operations more easily and readably. They allow you to write asynchronous code that looks and behaves like synchronous code, making it easier to understand and maintain. Asynchronous operations are essential for tasks that take an unknown amount of time to complete, such as network requests, file I/O, or any operation that involves waiting.

### Differences Between Async and Await

- **`async`**: This keyword is used to declare a function as asynchronous. An `async` function always returns a `Promise`. If the function returns a value, the `Promise` is resolved with that value. If the function throws an error, the `Promise` is rejected with that error.

- **`await`**: This keyword can only be used inside an `async` function. It pauses the execution of the `async` function and waits for the `Promise` to resolve or reject. Once the `Promise` is settled, it resumes the execution of the function and returns the resolved value. If the `Promise` is rejected, it throws the error.

### Example

Here is a simple example to illustrate the use of `async` and `await`:

```javascript
// Define an async function
async function fetchData() {
  try {
    // Use await to wait for the Promise to resolve
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the async function
fetchData();
```

## 3. Callbacks

### What is a Callback?

A `callback` is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are used to handle asynchronous operations in JavaScript, allowing you to continue executing code while waiting for an operation to complete.

### Example

Here is a simple example to illustrate the use of callbacks:

```javascript
// Define a function that takes a callback
function fetchData(callback) {
  setTimeout(() => {
    let data = { name: "John", age: 30 };
    callback(data);
  }, 1000); // Simulate a network request with a 1-second delay
}

// Define a callback function
function handleData(data) {
  console.log("Data received:", data);
}

// Call the function with the callback
fetchData(handleData);
```

In this example, the `fetchData` function simulates a network request using `setTimeout`. After a 1-second delay, it calls the `callback` function with the fetched data. The `handleData` function is passed as the callback and logs the received data to the console.

## 4. Event Loop

### What is the Event Loop?

The `Event Loop` is a fundamental concept in JavaScript that allows for non-blocking, asynchronous operations. It is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. The event loop enables JavaScript to perform asynchronous operations without blocking the main thread, making it possible to handle multiple tasks concurrently.

### How the Event Loop Works

1. **Call Stack**: This is where the code is executed. Functions are pushed onto the stack when they are called and popped off when they return.
2. **Web APIs**: These are browser-provided APIs like `setTimeout`, `DOM events`, `fetch`, etc., that handle asynchronous operations.
3. **Callback Queue**: This is where the callbacks from asynchronous operations are queued to be executed.
4. **Event Loop**: This continuously checks the call stack and the callback queue. If the call stack is empty, it pushes the first callback from the queue onto the call stack for execution.

### Example

Here is a simple example to illustrate the event loop in action:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 1000);

console.log("End");
```

In this example, the `console.log("Start")` and `console.log("End")` statements are executed immediately and synchronously. The `setTimeout` function schedules the callback to be executed after 1 second. The event loop ensures that the callback is executed after the main code has finished executing.

Output:

```
Start
End
Timeout callback
```

The event loop allows JavaScript to handle asynchronous operations efficiently, ensuring that the main thread is not blocked and can continue executing other tasks.

## 5. Modules (`import/export`)

### What are Modules?

Modules in JavaScript allow you to break your code into separate files, making it easier to maintain and reuse. Each module has its own scope, and you can export variables, functions, or classes from one module and import them into another.

### Exporting and Importing

- **Exporting**: Use the `export` keyword to make variables, functions, or classes available outside the module.
- **Importing**: Use the `import` keyword to bring exported members into another file.

#### Example

**math.js**

```javascript
// Exporting functions
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

**app.js**

```javascript
// Importing functions
import { add, subtract } from "./math.js";

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
```

You can also use `export default` to export a single value from a module:

**greet.js**

```javascript
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

**main.js**

```javascript
import greet from "./greet.js";

console.log(greet("Alice")); // Hello, Alice!
```

---

## 6. Session Storage vs LocalStorage

### What are Session Storage and LocalStorage?

Both `sessionStorage` and `localStorage` are web storage APIs that allow you to store key-value pairs in a user's browser. They are useful for persisting data on the client side.

| Feature          | sessionStorage          | localStorage               |
| ---------------- | ----------------------- | -------------------------- |
| Lifetime         | Until tab/window closes | Until explicitly cleared   |
| Scope            | Per tab/window          | Shared across tabs/windows |
| Storage Capacity | ~5MB                    | ~5MB                       |

### Example

```javascript
// localStorage example
localStorage.setItem("username", "john");
console.log(localStorage.getItem("username")); // 'john'
localStorage.removeItem("username");

// sessionStorage example
sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token")); // 'abc123'
sessionStorage.clear();
```

---
