// Method 01: Name module import
// import * as math from "./math.js"; // import all at once
// import { user, add } from "./math.js"; // import only what's required
// Method 02: Default module import
// import message from "./message.js";

// console.log(user);

// console.log("Result of 1 + 3 =", math.add(1, 3));
// console.log("Result of 1 + 3 =", add(1, 3));
// console.log("Result of 10 + 35 =", add("10", "35"));
// console.log("Result of 10 + 35 =", add("10", 35));
// console.log("Result of 10 + 35 =", add("BB", 35));

// console.log(message("Hashan", 29));

// We cannot define variables using javascript keywords

// const break = "Break";

// console.log(breaK);

// const myUniqueId = Symbol("description for my unique ID");
// const anotherUniqueId = Symbol("description for another unique ID");

// console.log(myUniqueId, anotherUniqueId);
// console.log(myUniqueId === anotherUniqueId); // Output: false (even with the same description, symbols are unique)

// const userIdSymbol = Symbol("user ID");

// const user = {
//   name: "Alice",
//   age: 30,
//   [userIdSymbol]: 12345, // Using the symbol as a computed property key
// };

// console.log(user.name); // Output: Alice
// console.log(user[userIdSymbol]); // Output: 12345

// let bigNumber = 1234567890123456789012345678901234567890n;

// console.log(bigNumber);
// console.log("Type::", typeof bigNumber);

// JavaScript Promises

// const myPromise = new Promise((resolve, reject) => {
//   // Simulate an asynchronous operation (e.g., fetching data, a timer)
//   const success = false; // This could be based on an actual operation's outcome

//   setTimeout(() => {
//     if (success) {
//       resolve("Data successfully fetched!"); // Resolve the promise with a value
//     } else {
//       reject("Failed to fetch data."); // Reject the promise with an error
//     }
//   }, 3000); // Simulate a 3-second delay
// });

// Handle the promise

// myPromise
//   .then((message) => {
//     console.log("Then:", message);
//   })
//   .catch((error) => {
//     console.log("Catch:", error);
//   });

// console.log("Operation started!");

// async function checkPromise() {
//   console.log(myPromise);
//   try {
//     const message = await myPromise;
//     console.log(message);
//   } catch (error) {
//     console.log("ERROR::", error);
//   }
// }

// checkPromise();

// Real world example

// async function initApp() {
//   try {
//     const userResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );

//     const user = await userResponse.json();

//     console.log("(1) User: ", user);

//     if (user?.id) {
//       const postsResponse = await fetch(
//         `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
//       );

//       const posts = await postsResponse.json();

//       console.log("(2) Posts: ", posts);
//     }
//   } catch (error) {
//     console.log("Error fetching data:", error);
//   }
// }

// initApp();

// JavaScript Callbacks

// // Function that takes a callback
// function fetchData(callbackfn) {
//   console.log("Fetch Data Function Triggered!");
//   setTimeout(() => {
//     let data = { name: "John", age: 30 };
//     callbackfn(data);
//   }, 2000);
// }

// // Callback function
// function handleData(data) {
//   console.log("Callback Function Triggered!");
//   // Output
//   console.log("Data received!", data);
// }

// // Call the function with the callback function
// fetchData(handleData);

// console.time("Loop Time");

// // Function that accepts a callback
// function performAction(data, callback) {
//   console.log("Performing action with data: (2)", data);
//   // Simulate some asynchronous operation or a delay
//   setTimeout(() => {
//     const result = data * 2;
//     console.log("Action completed. Calling callback with result:(4)", result);
//     callback(result); // Execute the callback function
//   }, 2000); // Simulate a 2-second delay
// }

// // Callback function to be executed after performAction completes
// function handleResult(finalResult) {
//   console.log("Callback executed! Final result:(5)", finalResult);
//   console.timeEnd("Loop Time");
// }

// // Call performAction, passing handleResult as the callback
// console.log("Initiating action... (1)");
// performAction(5, handleResult);
// console.log("Action initiated. Continuing with other tasks...(3)");

// Local Storage

// // Setting a value to local storage
// const username = "John";

// // localStorage.setItem("username", username);

// const storedUsername = localStorage.getItem("username");

// console.log("Username from localstorage :", storedUsername);

// // Session Storage

// const token = "ieutiewjfnich";

// // sessionStorage.setItem("token", token);

// const storedToken = sessionStorage.getItem("token");

// console.log("Token from session storage :", storedToken);

// JavaScript Arrow Function

// Before ES 06
// function operation1(name) {
//   console.log(`Hello, my name is ${name}`);
// }

// After ES 06
// Concise syntax
// Lexical this binding
// const person = {
//   name: "Alice",
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// const dog = {
//   name: "Shadow",
//   greet: () => {
//     // Arrow functions do not have their own 'this', so 'this.name' is undefined
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// Regular function: 'this' refers to the object, can be changed with bind
// const unboundGreet = person.greet;
// unboundGreet(); // Output: Hello, my name is undefined (not bound)

// const boundGreet = person.greet.bind(person);
// boundGreet(); // Output: Hello, my name is Alice

// // Arrow function: 'this' is lexically scoped, bind has no effect
// const unboundDogGreet = dog.greet;
// unboundDogGreet(); // Output: Hello, my name is undefined

// const boundDogGreet = dog.greet.bind(dog);
// boundDogGreet(); // Output: Hello, my name is undefined

// JavaScript Classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Regular method
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  // Arrow function as a method (not recommended for class methods)
  displayInfoArrow = () => {
    console.log(`(Arrow) Name: ${this.name}, Age: ${this.age}`);
  };

  static species() {
    return "Homo sapiens";
  }

  static getSpeciesInfo() {
    return `Species: ${this.species()}`;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Example: bind with regular function vs arrow function
const p = new Person("Charlie", 40);

// Regular function: 'this' can be rebound
const regularDisplay = p.displayInfo;
const boundRegularDisplay = p.displayInfo.bind({ name: "BoundName", age: 99 });
// regularDisplay(); // 'this' is undefined, so output may be incorrect
boundRegularDisplay(); // Output: Name: BoundName, Age: 99

// Arrow function: 'this' is lexically scoped, bind has no effect
const arrowDisplay = p.displayInfoArrow;
// Bind data by a mistake
const boundArrowDisplay = p.displayInfoArrow.bind({
  name: "BoundName",
  age: 99,
});

arrowDisplay(); // Output: (Arrow) Name: Charlie, Age: 40
boundArrowDisplay(); // Output: (Arrow) Name: Charlie, Age: 40
