# React.js and Next.js Mastering Course

## Session 14

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

### 2. [Metadata Object](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object)

Metadata provides additional information about your application, such as the page title, description, and SEO-related tags. Properly managing metadata improves the discoverability and usability of your application.

- **How to Implement**: Use the built-in metadata management features of Next.js, such as the `<Head>` component or the `metadata` configuration in the `app` directory. Dynamically set metadata for each page to ensure it is relevant and descriptive.

### 3. [Caching in Next.js](https://nextjs.org/docs/app/deep-dive/caching)

Caching in Next.js can significantly enhance the performance of your application by reducing redundant data fetching and improving load times. Next.js provides several built-in mechanisms and integrations to handle caching effectively.

- **How to Implement**:
  - **Static Generation (SSG)**: Use `getStaticProps` to fetch data at build time. The generated static pages are cached and served directly from the CDN, ensuring fast load times.
  - **Incremental Static Regeneration (ISR)**: Update static pages at runtime by specifying a `revalidate` interval in `getStaticProps`. This allows you to serve cached pages while keeping the data fresh.
  - **Server-Side Rendering (SSR) Caching**: Use caching headers like `Cache-Control` in API routes or server responses to control how long the data should be cached by the browser or CDN.
  - **Client-Side Caching**: Leverage libraries like `react-query` or `SWR` for caching API responses on the client side. These libraries provide features like automatic revalidation and stale-while-revalidate for efficient data fetching.
  - **Image Optimization Caching**: Use the Next.js `<Image>` component, which automatically caches optimized images for better performance.

By combining these caching strategies, you can ensure a seamless and efficient user experience while maintaining up-to-date data.

### 4. User Nav Dropdown Implementation

### 5. Next.js Image Optimization

---

#### References:

- [Fetching & Caching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching)
