# React.js and Next.js Mastering Course

## Session 07

1. **TailwindCSS 4: `flex` vs `block`**

   - Understanding the difference between `flex` and `block` display utilities in TailwindCSS
   - When to use `flex` for flexible layouts and `block` for standard block-level elements
   - Practical examples demonstrating layout changes with `flex` and `block`

2. **TailwindCSS 4: `flex-col` vs `flex-row` and `flex-1`**

   - How `flex-col` and `flex-row` control the direction of flex items
   - Using `flex-1` to make elements grow and fill available space
   - Example layouts showing combinations of `flex-col`, `flex-row`, and `flex-1`

3. **TailwindCSS 4: `global.css` with Theme Directive**

   - Understanding the purpose of `global.css` in a Next.js project
   - How to use the `@theme` directive in TailwindCSS 4
   - Organizing and customizing global styles with Tailwind's theme configuration
   - Example: Adding custom colors and fonts using the theme directive in `global.css`

4. **[`sRGB Color Space`](https://developer.mozilla.org/en-US/docs/Glossary/RGB)**

   - `Red-Green-Blue (RGB)` is a color model that represents colors as mixtures of three underlying components (or channels), namely: red, green, and blue.

5. **[`hsl()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl)**

   - The **`hsl()`** functional notation expresses a color in the `sRGB color space` according to its hue, saturation, and lightness components.
   - An optional alpha component represents the color's transparency.

6. **[`Oklab Color Space`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklab) (New)**

   - `Uniform color space` for `device independent color` designed to improve `perceptual uniformity`, `hue` and `lightness` prediction, `color blending`, and usability while ensuring `numerical stability` and ease of implementation.

7. **[`oklch()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)**

   - The `oklch` functional notation expresses a given color in the `Oklab` color space.
   - Cylindrical counterpart of `Oklab()`

8. **[`color-mix()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix)**

   - The `color-mix()` functional notation takes two color values and returns the result of mixing them in a given `colorspace` by a given amount.

9. **Next.js Components Folder Structure and `shadcn/ui` Primitives**

   - Organizing your components in a dedicated `components` folder within your Next.js project.
   - Creating a `components/ui` subfolder for reusable UI primitives.
   - Introduction to [shadcn/ui](https://ui.shadcn.com/) primitives for building consistent and accessible UI elements.
   - Example: Adding a `Button` component from shadcn/ui to your `components/ui` folder and using it in your application.

10. **Creating React Components**

    - Creating our `First React Component` **(Main Nav Bar)**
    - Creating reusable components
    - Reusing the `Main Nav Bar` component in the `Root Layout`

11. **Next.js Custom Tags**

    - Using `<Link>` tag from `next/link`
    - Using `<Image>` tag from `next/image`
