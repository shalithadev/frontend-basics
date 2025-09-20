// Named function export
// export function add(a, b) {
//   return a + b;
// }

function add(a, b) {
  (a = Number(a)), (b = Number(b));
  return a + b;
}

const user = {
  name: "Hashan",
  email: "shalithadev@gmail.com",
};

// Named object export
export { add, user };
