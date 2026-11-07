## JavaScript Hoisting

JavaScript Hoisting is a concept where the JavaScript interpreter appears to move the declarations of functions, variables, classes, or imports to the top of their scope during the compilation phase, before the code is executed. This means you can sometimes use a variable or call a function before it's explicitly declared in your code.

Here's a breakdown of how hoisting applies to different types of declarations:
var variables: Declarations using var are hoisted to the top of their function or global scope. They are initialized with `undefined` during the hoisting phase.

This means you **can access a var variable before its declaration**, but its value **will be `undefined` until the assignment line is reached**.

```js
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10
```

let and const variables: Declarations using let and const are also hoisted, but they are not initialized. They enter a "temporal dead zone" (TDZ) from the beginning of their scope until their actual declaration. Attempting to access a let or const variable before its declaration will result in a ReferenceError.

```js
// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
console.log(myLet); // Output: 20
```

Function Declarations: Function declarations are fully hoisted, meaning both the function name and its body are moved to the top of their scope. This allows you to call a function declared in this way before its definition in the code.

```js
myFunction(); // Output: Hello from myFunction!
function myFunction() {
  console.log("Hello from myFunction!");
}
```

Function Expressions: Function expressions (including arrow functions) are not hoisted in the same way as function declarations. Only the variable holding the function expression is hoisted (following var, let, or const hoisting rules). The function itself is not available until the line where it's assigned.

```js
// myFuncExpression(); // ReferenceError: myFuncExpression is not a function (if declared with var)
// myFuncExpression(); // ReferenceError: Cannot access 'myFuncExpression' before initialization (if declared with let/const)
var myFuncExpression = function () {
  console.log("Hello from myFuncExpression!");
};
myFuncExpression(); // Output: Hello from myFuncExpression!
```

In essence, hoisting simplifies the mental model of how JavaScript code is processed, but it's important to understand the nuances of how different declaration types are affected to avoid unexpected behavior. Best practice often involves declaring variables and functions before their first use to ensure clarity and prevent potential errors.
