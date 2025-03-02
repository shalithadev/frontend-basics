// Method 2:
// Import named exports from the file math.js:
import { add } from "./math.js";
// Import a default export from the file message.js:
import message from "./message.js";

// using add function from math.js
console.log("Result of 200 + 350 :", add(200, 350));
// using message function from message.js
console.log(message("Hashan", 29));

// SessionStorage
if (sessionStorage.getItem("name") === null) {
  console.log("Name is not set in sessionStorage");
  //   sessionStorage.setItem("name", "Hashan");
  //   sessionStorage.setItem("age", 29);
} else {
  console.log("Name is :", sessionStorage.getItem("name"));
}

// Promises
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    // Simulate a delay of 3 seconds
    setTimeout(() => resolve("Operation is successful!"), 3000);
  } else {
    reject("Operation is failed!");
  }
});

myPromise
  .then((message) => {
    console.log(message); // Operation is successful!
  })
  .catch((error) => {
    console.log(error); // Operation is failed!
  })
  .finally(() => {
    console.log("Promise is completed!");
  });

// Async & Await
async function initializeApp() {
  try {
    const message = await myPromise;
    console.log("Message : ", message);

    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const user = await userResponse.json();

    // Check if the user object is not null
    if (user?.id) {
      console.log("(1) User : ", user);
      const postsResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      );
      const posts = await postsResponse.json();
      console.log("(2) Posts : ", posts);
    }
  } catch (error) {
    console.log("Error fetching data : ", error);
  }
}

// Call the async function
initializeApp();

// console.log("I'm here after the async function!");

// Define a function that accepts a callback
function fetchData(callback) {
  console.log("Fetching Started!");

  setTimeout(() => {
    let data = { name: "Hashan", age: 29 };
    callback(data);
    console.log("Timeout Completed!");
  }, 3000); // Simulate network request with a delay of 3 seconds

  console.log("Fetching Completed!");
}

// Define a callback function
function handleData(data) {
  // console.log("Data received : ", data);
}

// Call the function with the callback
// Pass a argument to the fetchData function
fetchData(handleData);
