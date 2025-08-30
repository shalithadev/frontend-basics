# React.js and Next.js Mastering Course

## Session 11

### 1. BetterAuth Configuration with MongoDB Adapter

- Set up BetterAuth with the MongoDB adapter.
- Walk through the configuration process step-by-step.

### 2. Create Login/Sign-Up Pages

- Design and implement user-friendly login and sign-up pages.
- Use React.js components for form handling.

### 3. Add Login Handlers with Validation

- Implement front-end handlers for login functionality.
- Add client-side and server-side validation for user inputs.

### References:

- [BetterAuth Installation](https://www.better-auth.com/docs/installation)

### Fetching Data in JavaScript

JavaScript offers several methods for fetching data from external resources, such as APIs or local files. The most common approaches include:

#### 1. Fetch API

The `fetch()` method is a modern, promise-based API for making asynchronous network requests.

- Returns a `Promise` that resolves to a `Response` object.
- Supports various HTTP methods (`GET`, `POST`, `PUT`, `DELETE`, etc.).
- Allows configuration of headers, body, and other request options.
- Network errors are handled with `.catch()`, while HTTP errors (like 404 or 500) require manual checking of `response.ok`.

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));
```

#### 2. XMLHttpRequest (XHR)

An older, callback-based API for making HTTP requests.

- Uses event listeners for handling request stages (`onload`, `onerror`, etc.).
- More verbose and complex than Fetch API, but still functional.

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data");
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error("Error fetching data:", xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error("Network error occurred");
};
xhr.send();
```

#### 3. Third-party Libraries (e.g., Axios)

Libraries like Axios provide a more convenient and feature-rich interface for HTTP requests.

- Automatic JSON parsing.
- Request/response interceptors.
- Improved error handling.

```javascript
// Assuming Axios is installed and imported
// import axios from 'axios';

axios
  .get("https://api.example.com/data")
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error fetching data:", error));
```

#### 4. Async/Await with Fetch

Async/await syntax makes asynchronous code more readable and maintainable.

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```
