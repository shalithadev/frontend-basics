# React.js and Next.js Mastering Course

## Session 08

### 1. Understanding CSS `inset` Property

The `inset` property in CSS is a shorthand for setting the `top`, `right`, `bottom`, and `left` properties in a single declaration. It is often used to position an element within its containing block.

In the provided code:

```css
.inset-0 {
  inset: calc(var(--spacing) * 0); /* 0rem = 0px */
}
```

- `inset: calc(var(--spacing) * 0)` calculates the inset value based on a CSS custom property `--spacing`, multiplied by `0`. This results in `0px` or `0rem`, effectively positioning the element at the edges of its container.
- The comment `/* 0rem = 0px */` clarifies that the computed value is equivalent to `0px`.

This utility class can be used to reset the position of an element to its default state.

### 2. How to Breakdown Components Before Development

1. **Understand the Requirements**

   - Carefully review the project requirements or user stories.
   - Identify the key features and functionalities that need to be implemented.

2. **Identify Core Components**

   - Break down the application into logical components or modules.
   - Think about reusable components that can be shared across the application.

3. **Define Responsibilities**

   - Assign a single responsibility to each component to follow the Single Responsibility Principle (SRP).
   - Ensure each component has a clear and focused purpose.

4. **Plan Component Hierarchy**

   - Organize components into a hierarchy (parent-child relationships).
   - Decide which components will manage state and which will be purely presentational.

5. **Consider Data Flow**

   - Map out how data will flow between components (e.g., props, state, or context).
   - Identify where state should be managed and how it will be passed down.

6. **Account for Edge Cases**

   - Think about potential edge cases or errors each component might encounter.
   - Plan how to handle these scenarios gracefully.

7. **Document the Plan**
   - Create a visual diagram or a written document outlining the component structure.
   - Share the plan with your team for feedback and alignment.

By following these steps, you can ensure a well-structured and maintainable component architecture before starting development.

### 3. Layout Components (Home Page)

- **`<FeaturedMovies />`**: Displays a curated list of featured movies.
- **`<HeroBanner />`**: Serves as the main banner with prominent visuals and key information.

### 4. Reusable Components

- **`<MoviesList />`**: A flexible component to render a list of movies dynamically.

### 5. Reusable Primitives (shadcn/ui)

- **`<Input />`**: A customizable input field for user interactions.
- **`<Card />`**: A versatile card component for displaying grouped content.

### 6. Dummy Data Arrays

#### Movies Data Array

The `MOVIES` array is a sample dataset used for development and testing purposes. It contains objects representing movie details, such as:

```javascript
const MOVIES = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    rating: 8.8,
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    rating: 9.0,
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    releaseYear: 2014,
    rating: 8.6,
  },
];
```

- **Purpose**: This array is used to simulate API responses or populate UI components during development.
- **Structure**: Each object includes properties like `id`, `title`, `genre`, `releaseYear`, and `rating`.
- **Usage**: Can be passed as props to components like `<MoviesList />` for rendering.

By leveraging dummy data, you can prototype and test components without relying on a backend.
