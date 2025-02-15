// JavaScript Comments
// JavaScript Console Log

/*
Here's is
the
multiline comment
*/

// Global Variables
// snake-case (old)
var user_email = "user@epiclearn.com";
// snake-case capital for constant values
const APP_URL = "http://127.0.0.1:5502/";
// camel-case (New standard)
var userEmail = "user@epiclearn.com";
// pascal-case (not commonly used)
var UserEmail = "user@epiclearn.com";

// Variable declaration with var
// Global variable can be access from anywhere
// var message;

// ES6 (2015)
// Can be scoped local/function wise
// Variable declaration with let

// Block Scoping
{
  var message = "I'm a var variable";
  let message2;
  message2 = "I'm a let variable"; // Later Initialize
  // Variable declaration with const
  const message3 = "Hello! I'm a const variable";
  // Cannot re-assign vales to a const variable
  // Const variable values should be consistent
  // message3 = "123";

  // console.log("LOG", message3);
}

// Try to log the scoped var variable
// console.log("Log", message);

// Functional block
function myFunction() {
  let myVariable = 5000;
  // Use to return a value or a variable
  return "Value 1";
  // console.log("LOG 2:", message);
}

// Conditional Block
if (true) {
  let message2 = "I'm blocked-scoped message";
  // console.log("IF", message);
  var message = "I'm re-declared var variable";
  // console.log("IF", message);

  // userEmail = "hashan@evotech.com";
}

// Log myFunction()
// console.log("LOG 1:", myFunction());

// Later initialization
message = "Hello, world! 1";

// myFunction();

// Re-declaration
message = "Hello, world! 2";

// Cannot declare variables using below keywords
// var import = 3000;
// console.log(message);

/*
break: Terminates the current loop or switch statement.
case: Specifies a block of code in a switch statement.
catch: Handles errors in try...catch blocks.
class: Declares a class (introduced in ES6).
const: Declares a read-only variable.
continue: Skips the current iteration in loops.
debugger: Invokes any available debugging functionality.
default: Specifies the default block in a switch statement.
delete: Removes a property from an object.
do: Used with while for do...while loops.
else: Specifies an alternative block of code in if...else statements.
export: Exports functions, objects, or primitives from a module.
extends: Creates a class that is a child of another class.
finally: Executes code after try...catch regardless of the outcome.
if: Executes a block of code based on a condition.
import: Imports functions, objects, or primitives from another module.
in: Checks if a property exists in an object.
instanceof: Tests whether an object is an instance of a specific constructor.
new: Creates an instance of an object.
return: Exits a function and optionally returns a value.
super: Refers to the parent class in class declarations.
switch: Executes different blocks of code based on conditions.
this: Refers to the current context object.
throw: Throws a custom error.
try: Defines a block of code to test for errors.
typeof: Returns a string indicating the type of a variable.
var: Declares a variable.
void: Discards the return value of an expression.
while: Creates a loop that runs as long as a condition is true.
with: Extends the scope chain for a statement (usage is discouraged).
yield: Pauses and resumes a generator function.
*/

// Automatic declaration

// x = 100;

// console.log("LOG", x);
