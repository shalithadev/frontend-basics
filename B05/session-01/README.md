# React.js and Next.js Mastering Course (Students Onboarding Week)

## Session 01

### 1. Student Expectations from the Course

- Ask about the student expectations from this course
- Level of the students fundamental knowledge

### 2. Introduction to React Course

- Content Coverage of Syllabus

### 3. Basic HTML

- What is HTML?
  - HTML (HyperText Markup Language) is the standard language for creating web pages and web applications.
- Structure of an HTML document
  - `<!DOCTYPE html>`
  - `<html>`, `<head>`, `<body>`
- Common HTML elements
  - Headings (`<h1>` to `<h6>`)
  - Paragraphs (`<p>`)
  - Links (`<a>`)
  - Images (`<img>`)
  - Lists (`<ul>`, `<ol>`, `<li>`)
  - Tables (`<table>`, `<tr>`, `<td>`)
  - Forms (`<form>`, `<input>`, `<button>`)
- Semantic HTML
  - Using elements like `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` for better structure and accessibility
- Example:

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>My First Web Page</title>
    </head>
    <body>
      <h1>Welcome!</h1>
      <p>This is a simple HTML page.</p>
    </body>
  </html>
  ```

### 4. Basic CSS

- What is CSS?
  - CSS (Cascading Style Sheets) is used to style and layout web pages.
- Ways to add CSS
  - Inline styles (`style` attribute)
  - Internal styles (`<style>` tag in `<head>`)
  - External stylesheets (`<link rel="stylesheet" href="styles.css">`)
- Selectors and properties
  - Select elements by tag, class, or id
  - Example: `h1 { color: blue; }`
- Box model
  - Content, padding, border, margin
- Responsive design basics
  - Using media queries to adapt layouts for different devices
- Example:

  ```css
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
  }

  h1 {
    color: #0070f3;
  }
  ```

  ```html
  <h1 class="title">Hello, CSS!</h1>
  ```

### 5. Other Sections

- **Frameworks and Libraries**

  - Frameworks and libraries help speed up web development by providing pre-written code, components, and utilities.
  - **Frameworks** (like React, Angular, Vue) provide a structure and set of rules for building applications.
  - **Libraries** (like jQuery, Lodash) offer reusable functions or components that you can use as needed.

- **[Bootstrap](https://getbootstrap.com/) vs [TailwindCSS](https://tailwindcss.com/)**

  - **Bootstrap** is a popular CSS framework that provides ready-made UI components (buttons, navbars, modals, etc.) and a responsive grid system.
  - **TailwindCSS** is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.
  - **Comparison:**
    - Bootstrap is component-based and opinionated in design.
    - TailwindCSS is utility-based and highly customizable.

- **UI Components vs Utility Classes**

  - **UI Components:** Pre-built, reusable pieces of UI (e.g., buttons, cards, modals) that encapsulate structure and style.
  - **Utility Classes:** Single-purpose classes that apply specific styles (e.g., `p-4` for padding, `text-center` for text alignment).
  - Utility classes allow for rapid prototyping and fine-grained control, while components provide consistency and reusability.

- **PX vs REM vs EM**
  - **PX (Pixels):** Absolute unit; always the same size regardless of user settings.
  - **REM (Root EM):** Relative to the root (`<html>`) font size. Makes scaling and accessibility easier.
  - **EM:** Relative to the font size of the current element. Useful for scaling within components, but can be affected by nesting.
  - **Best Practice:** Use `rem` for font sizes and spacing to improve accessibility and consistency across devices.

### 6. Version Controlling

- **Introduction to Version Control Systems (VCS)**

  - A Version Control System is a tool that helps track changes to files and coordinate work among multiple people.
  - It allows you to revert files to a previous state, compare changes over time, and collaborate efficiently.
  - Essential for software development, documentation, and any project where tracking changes is important.

- **Popular VCS Providers**

  - [GitHub](https://github.com): The most popular platform for hosting and collaborating on Git repositories.
  - [GitLab](https://gitlab.com): Offers Git repository management, CI/CD, and DevOps tools.
  - [Bitbucket](https://bitbucket.com): Supports Git and Mercurial repositories, often used for private projects.

- **Why Use Version Control?**

  - Enables collaboration among team members.
  - Maintains a history of changes (who, what, when, and why).
  - Facilitates experimentation with new features using branches.
  - Helps resolve conflicts when multiple people edit the same files.

- **Basic Git Workflow**

  1. **Initialize a repository:** `git init`
  2. **Check status:** `git status`
  3. **Add files:** `git add <filename>`
  4. **Commit changes:** `git commit -m "Your message"`
  5. **Push to remote:** `git push origin main`
  6. **Pull updates:** `git pull origin main`

- **Common Terminology**

  - **Repository (repo):** A directory tracked by VCS.
  - **Commit:** A snapshot of your changes.
  - **Branch:** A parallel version of the repository.
  - **Merge:** Combining changes from different branches.
  - **Clone:** Copying a remote repository to your local machine.

- **Example: Creating a New Repository on GitHub**

  1. Create a new repository on GitHub.
  2. On your computer:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/your-username/your-repo.git
     git push -u origin main
     ```

- **Resources**
  - [Git Handbook](https://guides.github.com/introduction/git-handbook/)
  - [Learn Git Branching](https://learngitbranching.js.org/)

### 7. JavaScript Basics

- Java vs JavaScript
  - Java is an OOP programming language while Java Script is an OOP scripting language. Java creates applications that run in a virtual machine or browser while JavaScript code is run on a browser only
- How similar is Java and JavaScript?
  - JavaScript is a beginner-friendly programming language that allows developers to design interactive websites.
  - On the other hand, Java is a complex language used to build sophisticated applications like Android apps, chatbots, and financial software
- Is JavaScript influenced by Java?
  - JavaScript has no direct relation to Java besides being used for web technologies. The name choice was a marketing move to encourage adoption.
- ECMAScript (ES)
  - [ECMA International](https://ecma-international.org/) (formally European Computer Manufacturers Association) is a non-profit organization that develops standards in computer hardware, communications, and programming languages.
  - On the web it is famous for being the organization which maintain the `ECMA-262` specification
- Why was it called JavaScript?
  - In the beginning, the ECMAScript was called `Mocha`.
  - It was later changed as `LiveScript`, Netscape changed the name to `JavaScript` so they could position it as a companion for the Java language, a product of their partner, Sun Microsystems.
  - Apart from some superficial syntactic similarities, though, JavaScript is in no way related to the Java programming language.
- ECMAScript (ES) Versions

  - `ECMAScript 1` was released in `1997`
  - Most Popular ECMAScript version is `ES6` released in 2015. This version introduced several important features such as:
    - `Let` and `Const`
    - Arrow Functions
    - Template Literals
    - Classes
    - Destructuring
    - Default Parameters
    - Maps
    - Sets
  - ECMAScript 2016 `(ES7)`
  - ECMAScript 2024 `(ES15)` is the latest version
  - [Versions](https://webreference.com/javascript/basics/versions/)

- Event Loop

  The **Event Loop** is a core concept in JavaScript, especially in environments like browsers and Node.js. JavaScript is single-threaded, meaning it can execute only one task at a time. However, it can handle asynchronous operations (like timers, network requests, or user interactions) without blocking the main thread.

  The event loop works with the **call stack** and the **callback queue**:

  - The **call stack** is where JavaScript keeps track of function calls and executes them one by one.
  - The **callback queue** holds messages (callbacks) from asynchronous operations that are ready to be executed.

  The event loop constantly checks if the call stack is empty. If it is, it takes the first callback from the queue and pushes it onto the stack for execution. This process allows JavaScript to perform non-blocking operations and remain responsive.

  **Example:**

  ```js
  console.log("Start");

  setTimeout(() => {
    console.log("Timeout callback");
  }, 0);

  console.log("End");
  ```

  **Output:**

  ```
  Start
  End
  Timeout callback
  ```

  Even though the timeout is set to 0, the callback runs after the synchronous code, demonstrating how the event loop handles asynchronous tasks.

- Other Single Threaded Languages

  While JavaScript is well-known for its single-threaded nature, there are other programming languages that also operate primarily on a single thread by default:

  - **Python**: The standard implementation (CPython) uses a Global Interpreter Lock (GIL), which means only one thread executes Python bytecode at a time, making it effectively single-threaded for CPU-bound tasks.
  - **Lua**: Lua runs in a single thread unless explicitly extended with libraries for concurrency.
  - **Ruby (MRI)**: The main Ruby interpreter (MRI) also uses a GIL, so only one thread runs Ruby code at a time.
  - **PHP**: Each request is handled in a single thread or process; PHP scripts themselves are single-threaded unless using extensions.
  - **Swift (Playgrounds)**: Swift code in Playgrounds runs on a single thread unless concurrency is explicitly introduced.

  These languages can still perform asynchronous or concurrent operations using event loops, external libraries, or by spawning separate processes, but their default execution model is single-threaded, similar to JavaScript.

- Embedded JavaScript

- JavaScript Variable Types
  - Number
  - String
  - Boolean
  - Null
  - Undefined
  - BigInt
  - Symbol
  - Object
  - Array

### 8. Node Express API

### 9. Basic Course Requirements

- Github Account
- MongoDB Account
- Mongodb Compass
- node.js 22.x or above
- npm
- GIT CLI
- VS Code
- Chrome Web Browser
- Terminal (Microsoft CMD Prompt / Linux Bash)
