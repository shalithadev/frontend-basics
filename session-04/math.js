// JavaScript modules allow you to break up your code into separate files.
// This makes it easier to maintain a code-base.
// Modules are imported from external files with the import statement.
// Modules also rely on type="module" in the <script> tag.

// Named function export
export function add(a, b) {
  return a + b;
}

const user = {
  name: "Hashan",
  age: 29,
};

// Named object export
export { user };
