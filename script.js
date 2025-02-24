// import { add } from "./math";
// console.log("I'm second javascript file here!", userEmail);

// Primitive Types

// Number
// let userId = 7602323129;
// console.log("Value of User ID : ", userId);
// console.log("Type of User ID : ", typeof userId);

// // String
// let userEmail = "hashan@evotech.com";
// console.log("Value of User Email : ", userEmail);
// console.log("Type of User Email : ", typeof userEmail);

// // Boolean
// let isAuthenticated = false;
// console.log("Value of Auth : ", isAuthenticated);
// console.log("Type of Auth : ", typeof isAuthenticated);

// // Null
// let phoneNumber = null;
// console.log("Value of Phone : ", phoneNumber);
// console.log("Type of Phone : ", typeof phoneNumber);

// // Undefined
// let dob;
// console.log("Value of DOB : ", dob);
// console.log("Type of DOB : ", typeof dob);

// let uniqueId = Symbol("id");
// console.log("Value of UID : ", uniqueId);
// console.log("Type of UID : ", typeof uniqueId);

// Object Types

// Object
// let person = { name: "Hashan", age: 29 };
// console.log("Value of Person : ", person);
// console.log("Type of Person : ", typeof person);

// let myArray = [1, 2, 3, 4, 5];
// console.log("Value of My Array : ", myArray);
// console.log("Type of My Array : ", typeof myArray);

// Before ES6
// function greet(name) {
//   //   return "Hello, " + name;
//   // Template Literals (ES6)
//   return `Hello, ${name}`;
// }

// // calling to a js function with a parameter
// console.log("Value of Greet : ", greet("Hashan"));
// console.log("Type of Greet : ", typeof greet);

// After ES6 (Arrow function)
// const greet2 = (name) => {
//   return `Hello, ${name}`;
// };

// console.log("Value of Greet 2 : ", greet2("Hashan"));
// console.log("Type of Greet 2 : ", typeof greet2);

// Destructuring

// Nested user object
// let user = {
//   name: "Hashan",
//   age: 29,
//   data2: {
//     uuid: "34782364892",
//     token: "reghjrewbg343-g34g34",
//     createdAt: "20-02-2025",
//     images: ["2141234", "234534", "3252352"],
//   },
// };

// const { name, age } = person;
// console.log("Name : ", user.name);
// console.log("Age : ", user.age);

// const { uuid } = user.data;

// console.log("UUID : ", uuid);
// Optional Chaining
// Nullish Coalescing
// console.log("updatedAt : ", user?.data?.updatedAt ?? "N/A");

// Spread & Rest Operator (ES6);

// const myArray = [1, 2, 3, 4, 5];
// const myArray2 = [...myArray, 6, 7];

// console.log(myArray);

// Import & Export
// TODO: Later
// console.log(math(100, 50));

const startTime = performance.now();

// console.log("I'm here before DOM Load!");

// Setting an item to the local storage
// localStorage.setItem("username", "hashanshalitha");

// Setting an item to the local storage
// sessionStorage.setItem("email", "shalithadev@gmail.com");

// Event listener
document.addEventListener("DOMContentLoaded", (event) => {
  const endTime = performance.now();
  //   const loadTime = (endTime - startTime).toFixed(2); // Calculate time in milliseconds

  //   console.log("DOM fully loaded and parsed");
  //   console.log(`DOM load time: ${loadTime} ms`);

  const mainTitle = document.querySelector("#main-title");
  // console.log(mainTitle);
  const mainButton = document.querySelector("#main-button");
  //   console.log(mainButton);

  // Bind click event to the main button
  mainButton.addEventListener("click", () => {
    // Change the main title
    mainTitle.textContent = "I'm the Changed Title!";

    // setTimeout(() => {
    //   window.location.reload(true);
    // }, 200);
  });
});

// console.log("I'm here after DOM Load!");

console.log("Username is : ", localStorage.getItem("username"));
console.log("Email is : ", sessionStorage.getItem("email"));
