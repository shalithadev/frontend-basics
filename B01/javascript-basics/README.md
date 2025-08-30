# JavaScript APIs to Know Before React Development

## 1. ES6+ Features (Modern JavaScript)

### **Arrow Functions (`=>`)**

```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### **Destructuring**

```js
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name, age); // Alice 25
```

### **Spread & Rest Operator (`...`)**

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

### **Template Literals**

```js
const name = "Bob";
console.log(`Hello, ${name}!`); // Hello, Bob!
```

### **Modules (`import/export`)**

```js
// file: math.js
export const add = (a, b) => a + b;
// file: main.js
import { add } from "./math.js";
console.log(add(2, 3)); // 5
```

### **Optional Chaining (`?.`)**

```js
const user = { address: { city: "Paris" } };
console.log(user?.address?.city); // Paris
console.log(user?.contact?.email); // undefined
```

### **Nullish Coalescing (`??`)**

```js
const input = null;
const value = input ?? "default";
console.log(value); // 'default'
```

---

## 2. DOM & BOM (Browser APIs)

### **Selecting Elements**

```js
const element = document.querySelector("#myElement");
console.log(element.textContent);
```

### **Event Listener**

```js
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});
```

### **Local Storage**

```js
localStorage.setItem("username", "Alice");
console.log(localStorage.getItem("username")); // Alice
```

### **Fetch API**

```js
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### **Timeout & Interval**

```js
setTimeout(() => console.log("Hello after 2 seconds"), 2000);
setInterval(() => console.log("Repeating every second"), 1000);
```

---

## 3. Promises & Async/Await

### **Using Promises**

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

### **Using Async/Await**

```js
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();
```

---

## 4. Event Loop & Asynchronous JavaScript

```js
console.log("Start");
setTimeout(() => console.log("Timeout Callback"), 0);
Promise.resolve().then(() => console.log("Promise Resolved"));
console.log("End");
```

**Output:**

```
Start
End
Promise Resolved
Timeout Callback
```

---

## 5. Functional Programming Concepts

### **Higher-Order Functions**

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

---

## 6. ES Modules & Import/Export

```js
// math.js
export function add(a, b) {
  return a + b;
}
// main.js
import { add } from "./math.js";
console.log(add(3, 5)); // 8
```

---

## 7. Error Handling

```js
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.error(error.message);
}
```

---

## 8. Closures & Scope

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

---

## 9. Prototypes & `this` Keyword

### **Understanding `this` in Arrow Functions**

```js
const obj = {
  value: 42,
  arrowFunc: () => console.log(this.value), // undefined
  normalFunc() {
    console.log(this.value);
  }, // 42
};
obj.arrowFunc();
obj.normalFunc();
```

---

## 10. Web APIs (Useful for React Apps)

### **Geolocation API**

```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});
```

### **Notifications API**

```js
if (Notification.permission === "granted") {
  new Notification("Hello, World!");
} else {
  Notification.requestPermission();
}
```

### **Clipboard API**

```js
navigator.clipboard.writeText("Copied text!").then(() => {
  console.log("Text copied!");
});
```

---

## Bonus: React-Specific JavaScript Concepts

### **Understanding `useEffect()` in React**

```js
import { useEffect } from "react";
function Component() {
  useEffect(() => {
    console.log("Component Mounted");
    return () => console.log("Component Unmounted");
  }, []);
  return <div>Hello, React!</div>;
}
```

### **Virtual DOM Explanation**

React uses a virtual representation of the DOM to minimize direct updates, improving performance.

```js
const element = <h1>Hello, Virtual DOM!</h1>;
ReactDOM.render(element, document.getElementById("root"));
```
