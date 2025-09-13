// console.log("Hello World!");

// console.log("Start");

// // JS Event Loop Example
// setTimeout(() => {
//     console.log("Timeout Callback!");
// }, 0);

// console.log("End");

// // 1. Var
// var userName = "Hashan";
// // 

// // ES6: Let, Const
// let institute = "EpicLearn";
// const userEmail = "shalitha@gmail.com";

// // Scoped, Cannot access before initialization
// console.log(userEmail);

// const defaultCurrency = "USD";
// let displayName = "Hashan Shalitha"

// Global Scope
// let email = "shalithadev@gmail.com";

// var email; Ok
// let email; Ok
// const email; X

// Function Scope 1
// function init() {
//     email = "shalithadev@gmail.com";
//     // let email = "hashan@gmail.com";

//     // Modify email variable in the middle
//     // email = "shalithadev2@gmail.com";

//     // console.log("Init Function Executed!", email);

//     // Block scope
//     if (email === "shalithadev@gmail.com") {
//         // let email = "uwehtoiw@example.com";
//         // console.log(email);
//     }
// };

// Function Scope 1
// function init2() {
//     let email = "hashan@gmail.com";
//     const userName = "Hashan Shalitha";

//     // Try to modify in the middle of execution
//     userName = "Evotech";

//     console.log("Init 2 Function Executed!", email);
// }

// init();
// init2();


// Global Scope
// console.log(email);


// JavaScript Hoisting


// var
// console.log(myVar)

// var myVar = 10;
// // Possible redeclarations leads unexpected errors and behaviors
// var myVar = 20;
// var myVar = 40;
// var myVar = 50;

// console.log(myVar);

// let
// console.log(myLet);

// let myLet = 10;

// console.log(myLet);

// Anonymous function
// (function() {
//     let message = "Hello from Anonymous!";
//     console.log(message);
// })();


// Named function
// Method 1:
// Before ES6:
// var myFunction = function () {
//     console.log("Hello from myFunction!");
// }

// myFunction();

// Method 2:
// After ES6 Version
// const myFunction = () => {
//     console.log("Hello from Arrow Function!");
// }

// myFunction();


// JavaScript Data Types

const auth = false; // Boolean
const lastName = null; // Null or No Value
const firstName = undefined; // Undefined or Not yet defined
let userName; // Undefined or Not yet defined or not yet initialized
const userData = {
    firstName: "Hashan",
    lastName: "Shalitha",
    age: 29,
    verified: true,
};
const fruits = ["banana", "apple", "orange"]; // String Array
const numbers = [1, 2, 3, 4, 5]; // Number Array
const users = [
    {id: "1", name: "Hashan"},
    {id: "2", name: "Shalitha"},
    {id: "3", name: "Chinthaka"},
]; // Object Array



// console.log(typeof users);
// console.log(userData["verified"]);
// console.log(userData.verified);

// Access a array element using array index

// console.log(users.length);

// console.log(users[0]);

// console.log(users.at(0));

// Based on user id
const userC = users.find(user => user.id === "3");
console.log(userC["name"]);

/**
 * This is s
 * Multi-line
 * comment
 */

