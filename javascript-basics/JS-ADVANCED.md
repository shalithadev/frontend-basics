### 1. JavaScript APIs

- JavaScript [`new Set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) Object API
  - A `Set` in JavaScript is a collection of values where duplicates are automatically removed. If you try to add the same value multiple times, it will only store one instance of that value.
- JavaScript `Sort()` API

  - `.sort():` This is the array method being called to sort the array
  - **Comparison Function:** The function (a, b) => b - a is passed as an argument to .sort(). This function determines the order of elements in the array:
    - `a` and `b` are two elements being compared.
    - `b` - `a` calculates the difference between `b` and `a`.
  - Descending Order:
    - If `b` - `a` is positive, b is placed before a (i.e., b is larger).
    - If `b` - `a` is negative, a is placed before b.
    - If `b` - `a` is zero, their order remains unchanged.
