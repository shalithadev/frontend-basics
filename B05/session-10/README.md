# Session 10 - Next.js Authentication with MongoDB

## ✅ TODO List

1. **Create MongoDB Account**

   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas).
   - Create a free cluster.
   - Setup a database user and password.
   - Whitelist your IP (or allow access from anywhere).
   - Copy the connection string.

2. **Initiate Sample Movies Dataset**

   - Go to **Database Deployment** → **Collections** → **Browse Collections**.
   - Click **Load Sample Dataset** (includes Movies, Users, etc.).
   - Confirm movies dataset is available.

3. **Setup Better Auth**

   - Install Better Auth:
     ```bash
     npm install better-auth
     ```
   - Configure basic authentication provider (e.g., email/password).
   - Setup API route for auth.

     ```javascript
     // ./app/api/auth/[...all]/route.js
     import { auth } from "@/lib/auth";
     import { toNextJsHandler } from "better-auth/next-js";

     export const { POST, GET } = toNextJsHandler(auth);
     ```

4. **Setup Better Auth + MongoDB Adapter**

   - Initiate MongoDB adapter:

     ```javascript
     // ./lib/auth.js
     import { betterAuth } from "better-auth";
     import { mongodbAdapter } from "better-auth/adapters/mongodb";
     import { db } from "@/db";

     export const auth = betterAuth({
       database: mongodbAdapter(db),
     });
     ```

   - Configure Better Auth with MongoDB connection string.

     ```javascript
     // ./db/index.js
     import { MongoClient } from "mongodb";

     const OPTIONS = {};
     const MONGODB_URI = process.env.MONGODB_URI || "";

     const client = new MongoClient(MONGODB_URI, OPTIONS);

     export const db = client.db("sample_mflix");
     ```

   - Verify BetterAuth has stored user sessions and credentials in MongoDB correctly.

5. **Next.js Middleware (TODO)**

   - Create a `middleware.js` file at the root of project folder.
   - Add route protection using Better Auth middleware.
   - Example:

     ```javascript
     // ./middleware.js
     export { authMiddleware as middleware } from "better-auth/next";

     export const config = {
       matcher: ["/dashboard/:path*", "/profile/:path*"],
     };
     ```

---

## 📌 Summary

- Created MongoDB Atlas account and dataset. ✅
- Integrated **Better Auth** into Next.js project. ✅
- Connected Better Auth with MongoDB adapter for persistent sessions. ✅
- Added **Next.js Middleware** to protect routes. (TODO)

---

## 🏠 Homework

- Complete MongoDB + Better Auth setup in your `CineScope` Next.js project.
- Protect a sample route `/dashboard` using middleware.
- Push your project to GitHub and share the repo link.

### Reference

- [Better Auth Installation](https://www.better-auth.com/docs/installation)
- [BetterAuth Next.js Integration](https://www.better-auth.com/docs/integrations/next)
- [BetterAuth MongoDB Adapter](https://www.better-auth.com/docs/adapters/mongo)
