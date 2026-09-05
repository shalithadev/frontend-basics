// Single parameter
const square = (x) => x * x;
console.log("Square of 5 is:", square(5));

// Multiple parameters
const add = (a, b) => a + b;
console.log("Sum of 3 and 7 is:", add(3, 7));

// No parameters
const getCurrentTime = () => new Date().toLocaleTimeString();
console.log("Current Time is:", getCurrentTime());

// Multi-line function body
const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log("Factorial of 5 is:", factorial(5));

// Returning object literals
const createUser = (name, age) => ({ name: name, age: age });
console.log("User Object:", createUser("Bob", 25));

// Arrow functions do not have their own 'arguments' object
const showArguments = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};
// showArguments(1, 2, 3);

// Using rest parameters to achieve similar functionality
const showRestParameters = (...args) => {
  console.log(args); // Output: [1, 2, 3]
};

showRestParameters(1, 2, 3);
