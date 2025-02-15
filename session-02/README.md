# JavaScript Data Types

JavaScript offers three primary ways to declare variables: var, let, and const. Below is an overview of each along with formatted examples.

## 1. var

- **Scope:** Function-scoped.
- **Re-declaration:** Allowed within the same scope.
- **Usage:** Historically used for variable declarations but now often replaced by let and const for clearer scoping.

**Example:**

```js
var message = "Hello, world!";
console.log(message);
```

**Hoisting Example:**

```js
console.log(greeting); // Outputs: undefined (variable is hoisted)
var greeting = "Hello, world!";
console.log(greeting); // Outputs: Hello, world!
```

## 2. let

- **Scope:** Block-scoped.
- **Re-declaration:** Not allowed in the same block.
- **Usage:** Preferred for values that may change over time.

**Example:**

```js
let count = 10;
count = 15;
console.log(count);
```

## 3. const

- **Scope:** Block-scoped.
- **Re-declaration:** Not allowed in the same block.
- **Immutability:** The binding cannot be reassigned once set, making it ideal for constants.

**Example:**

```js
const pi = 3.14159;
console.log(pi);
```

## Variable Initialization

Variable initialization is the process of assigning an initial value to a variable at the time of declaration. This avoids unexpected undefined values and clarifies the intended usage.

**Key Points:**

- If a variable declared with var or let is not initialized, it defaults to undefined.
- A const variable must be initialized during declaration.
- Initialization improves code readability and helps prevent runtime errors due to uninitialized values.

**Examples:**

```js
// var initialization without value
var myVar;
console.log(myVar); // Outputs: undefined

// let initialization without value
let myLet;
console.log(myLet); // Outputs: undefined

// var initialization with value
var myVarInitialized = "Hello";
console.log(myVarInitialized); // Outputs: Hello

// let initialization with value
let myLetInitialized = 42;
console.log(myLetInitialized); // Outputs: 42

// const must be initialized
const myConst = true;
console.log(myConst); // Outputs: true
```

## Understanding Hoisting

- **Hoisting Concept:**  
   Variable declarations with var are hoisted to the top of their scope (global or function), meaning the declaration is processed before code execution, but the assignment remains in place. This can sometimes lead to unexpected behavior.

**Example of Hoisting with var:**

```js
console.log(greeting); // Undefined because only the declaration is hoisted
var greeting = "Hello, world!";
console.log(greeting); // Outputs: Hello, world!
```

This is why using let and const is generally recommended, as they provide block scoping and avoid such pitfalls.

## Understanding Block Scopes

In JavaScript, a block scope is created with a pair of curly braces { } and confines variables declared with let and const to that block. This means that these variables are only accessible within the nearest enclosing { }.

**Example:**

```js
{
  let a = 10;
  const b = 20;
  console.log(a, b); // Outputs: 10 20
}
console.log(a, b); // ReferenceError: a is not defined, b is not defined
```

Block scoping helps prevent accidental variable reassignments or conflicts by limiting the lifespan of variables, making the code cleaner and more maintainable.

### For Your Reference

[MDN - Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

## JavaScript Keywords

JavaScript keywords are reserved words that have special meanings in the language and cannot be used as identifiers (such as variable or function names). Below are some common keywords along with brief explanations:

- **break**: Terminates the current loop or switch statement.
- **case**: Specifies a block of code in a switch statement.
- **catch**: Handles errors in try...catch blocks.
- **class**: Declares a class (introduced in ES6).
- **const**: Declares a read-only variable.
- **continue**: Skips the current iteration in loops.
- **debugger**: Invokes any available debugging functionality.
- **default**: Specifies the default block in a switch statement.
- **delete**: Removes a property from an object.
- **do**: Used with while for do...while loops.
- **else**: Specifies an alternative block of code in if...else statements.
- **export**: Exports functions, objects, or primitives from a module.
- **extends**: Creates a class that is a child of another class.
- **finally**: Executes code after try...catch regardless of the outcome.
- **if**: Executes a block of code based on a condition.
- **import**: Imports functions, objects, or primitives from another module.
- **in**: Checks if a property exists in an object.
- **instanceof**: Tests whether an object is an instance of a specific constructor.
- **new**: Creates an instance of an object.
- **return**: Exits a function and optionally returns a value.
- **super**: Refers to the parent class in class declarations.
- **switch**: Executes different blocks of code based on conditions.
- **this**: Refers to the current context object.
- **throw**: Throws a custom error.
- **try**: Defines a block of code to test for errors.
- **typeof**: Returns a string indicating the type of a variable.
- **var**: Declares a variable.
- **void**: Discards the return value of an expression.
- **while**: Creates a loop that runs as long as a condition is true.
- **with**: Extends the scope chain for a statement (usage is discouraged).
- **yield**: Pauses and resumes a generator function.

Note: Some keywords may have contextual uses or behave differently in various environments and versions of JavaScript. Always refer to official documentation for detailed behavior.

## 4. Basic Git Commands

Git is a distributed version control system that helps you track and manage changes to your code. Follow these steps to set up a Git repository and push your code to a remote service like GitHub.

### 1. Initialize a Git Repository

In your project directory, initialize a new Git repository:

```bash
git init
```

### 2. Add Files to the Staging Area

Stage all changes by running:

```bash
git add .
```

Or add individual files:

```bash
git add path/to/your/file
```

### 3. Commit Your Changes

After staging your files, create a commit with a descriptive message:

```bash
git commit -m "Initial commit"
```

### 4. Add a Remote Repository

Link your local repository to a remote repository:

```bash
git remote add origin https://github.com/your-username/your-repo.git
```

### 5. Push to the Remote Repository

Push your commits to the remote repository’s main branch:

```bash
git push -u origin main
```

Adjust the branch name if you're using a different branch.
