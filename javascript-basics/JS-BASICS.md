# JavaScript APIs You Should Know Before React

1. ES6+ Features (Modern JavaScript)

   - Arrow Functions (=>):
     - const add = (a, b) => a + b;
   - Destructuring:
     - const { name, age } = user;
   - Spread & Rest Operator (...):
     - const arr2 = [...arr1, newItem];
   - Template Literals:
     - console.log(`Hello, ${name}`);
   - Modules (import/export):
     - import Component from './Component.js';
   - Optional Chaining (?.):
     - const city = user?.address?.city;
   - Nullish Coalescing (??):
     - const value = input ?? 'default';

2. DOM & BOM (Browser APIs)

   - document.querySelector() / getElementById(): Selecting elements
   - addEventListener(): Handling events
   - localStorage / sessionStorage: Storing data
   - fetch() API: Making HTTP requests
   - setTimeout() & setInterval(): Delaying execution
   - history.pushState() & window.location: Managing navigation

3. Fetch & Promises

   - Promises: fetch(url).then(res => res.json()).catch(err => console.error(err));
   - Async/Await: const data = await fetchData();
   - Axios (Alternative to Fetch): const res = await axios.get(url);

4. Event Loop & Asynchronous JavaScript

   - Call Stack & Task Queue
   - Microtasks (Promise.then) vs. Macrotasks (setTimeout)
   - Understanding how React handles state updates asynchronously

5. Functional Programming Concepts

   - Higher-Order Functions: map(), filter(), reduce()
   - Immutability: Avoiding direct mutation (const newArr = [...oldArr, newItem];)
   - Pure Functions & Side Effects

6. ES Modules & Import/Export

   - Named Exports: export const value = 10;
   - Default Exports: export default Component;
   - Dynamic Imports: import('./module.js').then(module => module.default());

7. Error Handling

   - Try-Catch Blocks: try { riskyFunction(); } catch (error) { console.error(error); }
   - Error Boundaries in React (later on)

8. Closures & Scope

   - Lexical Scope & this binding
   - Closures in Functional Components

9. Prototypes & this Keyword

   - Understanding JavaScript Prototypes
   - Arrow Functions vs. Regular Functions (this behavior)

10. Web APIs (Useful for React Apps)
    - Geolocation API
    - Notifications API
    - Clipboard API
    - WebSockets (for real-time apps)
    - Bonus: React-Specific JavaScript Concepts
    - Understanding how useEffect() mimics lifecycle methods
    - Virtual DOM and reconciliation
    - How React handles synthetic events
