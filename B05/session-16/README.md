# React.js and Next.js Mastering Course

## Session 16

### 1. Lifting State Up

- Learn how to share state between components by moving it to their closest common ancestor.
- Refactor components to "lift state up" when multiple components need access to the same data.
- Pass state and state-updating functions down as props to child components.

### 2. Smart and Dumb Components in React

- **Smart components** (_container_ or _stateful_ components):
  - Responsible for managing state and handling business logic.
  - Fetch data, interact with APIs, and manage side effects.
  - Pass data and event handlers to child components via props.
  - Example: A component that fetches a list of movies and manages loading/error states.

- **Dumb components** (_presentational_ or _stateless_ components):
  - Focus solely on rendering UI based on the props they receive.
  - Do not manage application state (except for simple UI state, like toggling a dropdown).
  - Highly reusable and easy to test.
  - Example: A component that displays movie details using props provided by a parent.

- **Best Practice:** Separate concerns by using smart components for data fetching and logic, and dumb components for UI rendering. This pattern improves maintainability, testability, and reusability of your codebase.

### 3. Next.js Middleware -> Proxy

- Learn about the `middleware()` function in Next.js.
- Configure route matching using the `matcher` option.

Next.js Middleware (recently renamed to `Proxy` in Next.js 16) allows you to run code on the server before a request is completed, intercepting the request and modifying the response based on specific conditions. It's a powerful tool for implementing logic that needs to run globally or on specific routes without impacting client-side bundle sizes.

**Primary Use Cases:**

Middleware is typically used for "cross-cutting concerns" that affect many parts of an application.

- **Authentication and Authorization:** The most common use case is verifying user identity and permissions by checking cookies or session tokens, redirecting unauthenticated users to a login page or blocking access to protected routes.
- **Internationalization (i18n) & Localization:** Detecting a user's locale or language from headers or cookies and rewriting the URL or redirecting to the correct language version of the site (e.g., /en or /es).
- **Logging and Analytics:** Logging request details like URL, headers, or IP addresses for monitoring, analytics, or security auditing purposes.
- **A/B Testing and Feature Flagging:** Dynamically serving different versions of a UI or enabling/disabling features for specific users or user groups based on cookies or other criteria.
- **Security & Bot Protection:** Implementing basic rate limiting, blocking specific IP addresses, or filtering malicious traffic before it reaches resource-intensive parts of the application.
- **Rewriting and Redirecting URLs:** Modifying the incoming request's URL (rewriting) to serve an alternate route internally, or sending the user to a completely different URL (redirecting).

### 4. Middleware Configuration with BetterAuth

- Secure admin routes using the `matcher` configuration.
- Redirect users to the `/login` page if `sessionCookie` is invalid, utilizing `getSessionCookie`.

### 5. User Navigation Dropdown ✅

- Implement the `Avatar` component from shadcn/ui for user profile display.
- Show a fallback image or text when the user image is not available.
- Use the shadcn/ui `DropdownMenu` component for navigation options.

### 6. User Logout Feature with BetterAuth ✅

- Implement user logout functionality using `betterAuth.signOut()`.

### 7. Admin Dashboard with Nested Routes ✅

- Create nested routes for admin sections:
  - `/admin/movies`
  - `/admin/users`

### 8. Movie Details Page

- Update the movie list using `next/link` for navigation.
- Implement dynamic routing for the movie details page.
- Use route params and search params to display movie details.
- Access the movie ID via route params: `/movie/[id]`.

### 9. Fetching a Single Movie from the Database

- Create an action to fetch a single movie by ID: `getMovieById(movieId)`.
- Return the movie data object on success.
- Render the fetched movie data on the details page.

### 10. React `useEffect` Hook

- Review legacy React lifecycle methods: `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- Understand how these methods managed side effects and data fetching in class components.
- Compare these lifecycle methods with the modern `useEffect` hook used in functional components.
- Explore why React encourages using hooks like `useEffect` in new projects.
- Learn the main purposes and common use cases for `useEffect`, such as data fetching and cleanup.
- Practice simulating a loading state on the movie details page by using `useEffect` to mimic asynchronous data fetching.
- Show a loading indicator while fetching, and display movie details once the data is loaded.
