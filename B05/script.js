// Method 01: Name module import
// import * as math from "./math.js";
import { user, add } from "./math.js";
// Method 02: Default module import
// import message from "./message.js";

// console.log(user);

// console.log("Result of 1 + 3 =", math.add(1, 3));
console.log("Result of 1 + 3 =", add(1, 3));
console.log("Result of 10 + 35 =", add("10", "35"));
console.log("Result of 10 + 35 =", add("10", 35));
console.log("Result of 10 + 35 =", add("BB", 35));

// console.log(message("Hashan", 29));

// We cannot define variables using javascript keywords

// const break = "Break";

// console.log(breaK);

// const myUniqueId = Symbol("description for my unique ID");
// const anotherUniqueId = Symbol("description for another unique ID");

// console.log(myUniqueId, anotherUniqueId);
// console.log(myUniqueId === anotherUniqueId); // Output: false (even with the same description, symbols are unique)

// const userIdSymbol = Symbol("user ID");

// const user = {
//   name: "Alice",
//   age: 30,
//   [userIdSymbol]: 12345, // Using the symbol as a computed property key
// };

// console.log(user.name); // Output: Alice
// console.log(user[userIdSymbol]); // Output: 12345

let bigNumber = 1234567890123456789012345678901234567890n;

console.log(bigNumber);
console.log("Type::", typeof bigNumber);
