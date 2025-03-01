// Method 2:
// Import named exports from the file math.js:
import { add } from "./math.js";
// Import a default export from the file message.js:
import message from "./message.js";

// using add function from math.js
console.log("Result of 200 + 350 :", add(200, 350));
// using message function from message.js
console.log(message("Hashan", 29));

// SessionStorage
if (sessionStorage.getItem("name") === null) {
  console.log("Name is not set in sessionStorage");
  //   sessionStorage.setItem("name", "Hashan");
  //   sessionStorage.setItem("age", 29);
} else {
  console.log("Name is :", sessionStorage.getItem("name"));
}
