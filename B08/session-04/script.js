// Method 01: Check ./session-04/index.html file
// Method 02: Import named exports from the file math.js:
import { add, subtract, user } from "./math.js"; // Modular import
// Import a default export from the file message.js:
import message from "./message.js"; // default import

// console.log("Session 04 Here!");

// JavaScript Event Loop execution

// console.log("Start");

// setTimeout(() => console.log("Timeout callback"), 1000);

// console.log("End");

// JavaScript Promise

let myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulate success or failure
  if (success) {
    // Simulate a delay of 3 seconds
    setTimeout(() => resolve("Operation was successful!"), 3000);
  } else {
    reject("Operation is failed!");
  }
});

// console.log("Start"); // Main Thread: Task 01

// Async: Task 02

// myPromise.then(message => {
//     console.log(message); // Operation is successful!
// }).catch(error => {
//     console.error(error); // Operation is failed!
// }).finally(() => {
//     console.log("Promise is completed!"); // Final
// });

// console.log("End"); // Main Thread: Task 03

// JavaScript Async and Await

// ES05: Javascript Function
async function initializeApp() {
  try {
    const message = await myPromise;
    console.log("Message : ", message);

    let userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    let user = await userResponse.json();

    if (user?.id) {
      console.log("(1) User : ", user);

      const postsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      );
      const posts = await postsResponse.json();

      console.log("(2) Posts : ", posts);
    }
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

// Call the async initializeApp function
initializeApp();

console.log("I'm here after the async function!");

// Fetch Data with a JavaScript Promise
// function fetchDataPromise() {
//   return new Promise(async function (resolve, reject) {
//     try {
//       let response = await fetch("https://fakestoreapi.com/products");
//       let data = await response.json();
//       // console.log(data);
//       if (data) {
//         resolve(data);
//       } else {
//         reject({ error: true });
//       }
//     } catch (error) {
//       console.error("Error fetching data", error);
//       reject({ error: true });
//     }
//   });
// }

// console.log("Start");
// fetchDataPromise()
//   .then((response) => console.log("Then", response))
//   .catch((error) => console.error("Catch", error));
// console.log("End");

// JavaScript Callbacks

// Define a function that accepts a callback
function fetchDataCallback(myCallback) {
  console.log("Fetching Started!");

  setTimeout(() => {
    let data = { name: "John", age: 30 };
    myCallback(data);
    console.log("Timeout Completed!");
  }, 3000); // Simulate network request with a delay of 3 seconds

  console.log("Fetching Completed!");
}

// Define a callback function
function handleData(data) {
  console.log("Data received : ", data);
}

// fetchDataCallback(handleData);

// JavaScript Modules

// console.log("5 + 3 add", add(5, 3));
// console.log("5 - 3 subtract", subtract(5, 3));
// console.log("User", user);
// console.log("Message::", message("John", 30));

// Session Storage

const userName = sessionStorage.getItem("name");

if (userName === null) {
  // console.log("Name is not set in the session storage");
} else {
  // console.log("Name is :", userName);
}

// sessionStorage.setItem("name", "John");

// Local Storage

const userEmail = localStorage.getItem("email");

if (userEmail === null) {
  // console.log("Email is not set in the local storage");
} else {
  // console.log("Email is :", userEmail);
}

// localStorage.setItem("email", "john@gmail.com");
