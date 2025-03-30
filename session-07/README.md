# React.js and Next.js Mastering Course

## Session 07

1. **Understanding React Functional vs Class Components**

2. **Props: Passing data between components**

3. **State Management: useState Hook**

4. **Component Lifecycle (Intro to useEffect)**

5. **Understanding Client vs Server Components**

6. **[`sRGB Color Space`](https://developer.mozilla.org/en-US/docs/Glossary/RGB)**

   - `Red-Green-Blue (RGB)` is a color model that represents colors as mixtures of three underlying components (or channels), namely: red, green, and blue.

7. **[`hsl()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl)**

   - The **`hsl()`** functional notation expresses a color in the `sRGB color space` according to its hue, saturation, and lightness components.
   - An optional alpha component represents the color's transparency.

8. **[`Oklab Color Space`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklab) (New)**

   - `Uniform color space` for `device independent color` designed to improve `perceptual uniformity`, `hue` and `lightness` prediction, `color blending`, and usability while ensuring `numerical stability` and ease of implementation.

9. **[`oklch()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)**

   - The `oklch` functional notation expresses a given color in the `Oklab` color space.
   - Cylindrical counterpart of `Oklab()`

10. **[`color-mix()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)**

    - The `color-mix()` functional notation takes two color values and returns the result of mixing them in a given `colorspace` by a given amount.

11. **Default Export vs Named Export**

    - **Default Export**: A module can have only one default export. When importing a default export, the programmer can choose any name for it. This flexibility, however, can lead to inconsistency in naming across a codebase. For example:
      ```js
      import example from "./example"; // Mary
      import ex from "./example"; // Joe
      ```
    - **Named Export**: A module can have multiple named exports. When importing a named export, the programmer must use the exact name of the export, ensuring consistency and reducing ambiguity. For example:

      ```js
      import { example } from "./example";
      ```

      - Named exports provide early error detection if an import does not match an existing export.
      - Consistently using named exports eliminates the need to differentiate between default and named exports, simplifying the import process.

    - **Handling Conflicts**: If there are naming conflicts (e.g., importing `example` from multiple modules), the `as` keyword can be used to rename imports:

      ```js
      import { example as widgetExample } from "./widget/example";
      import { example as gadgetExample } from "./gadget/example";
      ```

    - **Best Practice**: Using named exports consistently can improve code readability and maintainability by avoiding the pitfalls of arbitrary naming and ensuring clear, explicit imports.

## Reference

- [Why and when to use default export over named exports in ES6 Modules?](https://stackoverflow.com/questions/46913851/why-and-when-to-use-default-export-over-named-exports-in-es6-modules)
- [ES Modules: Using Named Exports as the Default Export](https://medium.com/@timoxley/named-exports-as-the-default-export-api-670b1b554f65)
