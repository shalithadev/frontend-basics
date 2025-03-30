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

    - You can have only one default export in a module, whereas you can have as many named exports as you like.
    - If you provide a default export, the programmer using it has to come up with a name for it. This can lead to inconsistency in a codebase, where Mary does.

    - ```js
      import example from "./example";
      ```
    - but Joe does
    - ```js
      import ex from "./example";
      ```
    - In contrast, with a named export, the programmer doesn't have to think about what to call it unless there's a conflict with another identifier in their module.¹ It's just
    - ```js
      import { example } from "./example";
      ```
    - With a named export, the person importing it has to specify the name of what they're importing. They get a nice early error if they try to import something that doesn't exist.
    - If you consistently only use named exports, programmers importing from modules in the project don't have to think about whether what they want is the default or a named export.
    - If there is a conflict (for instance, you want example from two different modules), you can use as to rename:
    - ```js
      import { example as widgetExample } from "./widget/example";
      import { example as gadgetExample } from "./gadget/example";
      ```
