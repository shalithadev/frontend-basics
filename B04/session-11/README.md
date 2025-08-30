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

JavaScript provides several methods for fetching data from external resources, primarily from APIs or local files. The most common and modern approaches include:
Fetch API:
The fetch() method is a modern, promise-based API for making asynchronous network requests.
It returns a Promise that resolves to a Response object, from which you can extract the data in various formats (e.g., json(), text(), blob()).
It supports all standard HTTP methods (GET, POST, PUT, DELETE, etc.) and allows for configuration of headers, body, and other request options.
Error handling for network issues is done via .catch(), while HTTP errors (like 404 or 500) require manual checking of response.ok.
JavaScript

    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error));

XMLHttpRequest (XHR):
This is an older, more verbose API for making HTTP requests.
It uses event listeners to handle different stages of the request (e.g., onload, onerror, onprogress).
While still functional, it is generally superseded by the Fetch API due to its more complex syntax and callback-based nature.
JavaScript

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data');
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
      } else {
        console.error('Error fetching data:', xhr.statusText);
      }
    };
    xhr.onerror = function() {
      console.error('Network error occurred');
    };
    xhr.send();

Third-party Libraries (e.g., Axios):
Libraries like Axios provide a more convenient and feature-rich interface for making HTTP requests, often building upon the underlying Fetch API or XHR.
They typically offer features like automatic JSON parsing, request/response interceptors, and better error handling.
JavaScript

    // Assuming Axios is installed and imported
    // import axios from 'axios';

    axios.get('https://api.example.com/data')
      .then(response => console.log(response.data))
      .catch(error => console.error('Error fetching data:', error));

Async/Await with Fetch:
This modern syntax provides a more synchronous-looking way to handle promises, making asynchronous code more readable and maintainable, especially when dealing with multiple sequential requests.
