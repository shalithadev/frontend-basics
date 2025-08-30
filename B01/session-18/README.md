# React.js and Next.js Mastering Course

## Session 18

### 1. Enhance User Experience with `nextjs-toploader`

- Integrate [`nextjs-toploader`](https://www.npmjs.com/package/nextjs-toploader) to display a progress bar at the top of the page during route changes, providing users with visual feedback and improving perceived performance.

### 2. Debounced Search in Admin Movies Table

- Use the [`use-debounce`](https://www.npmjs.com/package/use-debounce) hook to optimize search functionality in the admin movies table. Debouncing prevents excessive API calls by delaying the search action until the user stops typing, resulting in better performance and reduced server load.

### 3. Layout Font Customization with Inter

- Apply the [Inter font](https://nextjs.org/docs/app/api-reference/components/font) using Next.js built-in font optimization. This ensures consistent typography and improved text rendering across your application.

### 4. Loading UI with `loading.jsx`, React Suspense, and Code Splitting

- Implement a `loading.jsx` component to show a loading indicator while components or data are being fetched.
- Leverage React Suspense and code splitting to load only the necessary code for each route, reducing initial load times and enhancing user experience.

### 5. Error Handling with `error.jsx` and Error Boundaries

- Add an `error.jsx` component to gracefully handle runtime errors in your application.
- Utilize React error boundaries to catch and display errors without crashing the entire app, improving reliability and user trust.

### 6. Build Process & Vercel Deployment

- Address and resolve unexpected build errors to ensure smooth deployment.
- Deploy your application to [Vercel](https://vercel.com/) for fast, reliable hosting and seamless integration with Next.js features.

### 8. [Caching in Next.js](https://nextjs.org/docs/app/deep-dive/caching)

Caching in Next.js can significantly enhance the performance of your application by reducing redundant data fetching and improving load times. Next.js provides several built-in mechanisms and integrations to handle caching effectively.

- **How to Implement**:
  - **Static Generation (SSG)**: Use `getStaticProps` to fetch data at build time. The generated static pages are cached and served directly from the CDN, ensuring fast load times.
  - **Incremental Static Regeneration (ISR)**: Update static pages at runtime by specifying a `revalidate` interval in `getStaticProps`. This allows you to serve cached pages while keeping the data fresh.
  - **Server-Side Rendering (SSR) Caching**: Use caching headers like `Cache-Control` in API routes or server responses to control how long the data should be cached by the browser or CDN.
  - **Client-Side Caching**: Leverage libraries like `react-query` or `SWR` for caching API responses on the client side. These libraries provide features like automatic revalidation and stale-while-revalidate for efficient data fetching.
  - **Image Optimization Caching**: Use the Next.js `<Image>` component, which automatically caches optimized images for better performance.

By combining these caching strategies, you can ensure a seamless and efficient user experience while maintaining up-to-date data.

### 9. Next.js Image Optimization

Next.js provides a powerful built-in `<Image>` component that automatically optimizes images for faster load times and better performance. Image optimization includes resizing, lazy loading, and serving images in modern formats like WebP when supported by the browser.

- **Automatic Resizing:** The `<Image>` component allows you to specify width and height, and Next.js will serve appropriately sized images for different devices.
- **Lazy Loading:** Images are loaded only when they enter the viewport, reducing initial page load time.
- **Format Optimization:** Next.js automatically serves images in the most efficient format supported by the user's browser.
- **Caching:** Optimized images are cached at the edge, ensuring fast delivery on subsequent requests.

**Example usage:**

```jsx
import Image from "next/image";

<Image src="/images/example.jpg" alt="Description" width={600} height={400} />;
```

By leveraging Next.js image optimization, you can significantly improve your application's performance and user experience.

---

#### References:

- [Data Fetching & Caching in Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching) — Official documentation on fetching strategies and caching mechanisms in Next.js.
- [Incremental Static Regeneration: Route Segment Config](https://nextjs.org/docs/app/guides/incremental-static-regeneration#route-segment-config) — Guide on configuring ISR for specific route segments.
- [Next.js Caching Guide](https://nextjs.org/docs/app/guides/caching) — In-depth explanation of caching strategies and best practices in Next.js applications.
