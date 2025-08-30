# React.js and Next.js Mastering Course

## Session 17

### 1. Movies Search UI

- Refactored the movie search into a smart React component (`movie-selectors.jsx`) with dedicated search handling.
- When a user searches for a movie, update the URL search parameters to enable SSR output.
- Use `useSearchParams`, `usePathname`, and `useRouter` to update the browser URL with the search term.
- Optimize search performance with `useDeferredValue`, `useRef`, and `useEffect` to minimize unnecessary action calls.

### 2. Movie Search Action (MongoDB with Regex)

- Implement a `searchMovie` action to filter movies in MongoDB using the search term from the URL search params.
- Move movie data fetching logic into the new `searchMovies` action instead of fetching directly in the component.

### 3. Metadata Management

- [Metadata Object](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object): Metadata enhances SEO and usability by providing information like page title and description.
- **Implementation**: Use Next.js metadata features (e.g., `<Head>`, `metadata` config, or `generateMetadata` function) to dynamically set metadata per page.
- **Practical Example**: Use `generateMetadata` with `prop.params.id` to fetch the movie title and set it as the page title on the movie detail page.

### 4. Traditional Search Handling vs URL Search Params

Traditionally, search functionality in client components manages the search term in local state, which does not update the URL. This approach limits features like sharing search results via URL, browser navigation, and SSR/SEO benefits.

**Benefits of using URL search params:**

- Enables server-side rendering (SSR) and static site generation (SSG) for search results.
- Allows users to share or bookmark specific search queries.
- Improves browser navigation (back/forward) and state persistence.
- Enhances SEO by exposing search queries in the URL.

**Reference:** [Next.js Search and Pagination](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination)
