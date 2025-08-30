# Role-based Authentication with better-auth

This document describes a compact, pragmatic approach to implementing role-based authentication (RBAC) using the hypothetical library `better-auth`. Examples use Node/Express and React/Next.js, with TypeScript notes.

Goals:

- Keep authentication logic centralized and testable
- Allow simple role checks (hasRole, hasAnyRole, hasPermission)
- Protect API routes and UI components
- Provide clear error handling and auditability

---

## Quick overview

- Authentication produces a principal (user) object, typically from a JWT or session.
- The principal includes roles and optionally permissions:
  ```json
  {
    "sub": "user-id",
    "email": "alice@example.com",
    "roles": ["user", "editor"],
    "permissions": ["post:create", "post:edit"]
  }
  ```
- `better-auth` offers middleware/guards to assert required roles or permissions.

---

## Installation

npm:

```bash
npm install better-auth
```

yarn:

```bash
yarn add better-auth
```

---

## Core concepts

- Role: coarse-grained label (e.g., admin, editor, user).
- Permission: fine-grained capability (e.g., post:delete).
- Guard: function that allows/denies access based on principal.
- Policy: reusable rule expressing allowed actions for roles/attributes.

Prefer declaring policies and reusing guards rather than scattering role strings around the codebase.

---

## Server: Express + TypeScript example

1. Initialize `better-auth` and attach an authentication middleware:

```ts
import express from "express";
import { BetterAuth, requireRoles } from "better-auth";

const app = express();

const betterAuth = new BetterAuth({
  // for example: verify JWT, fetch user record, attach principal
  jwtSecret: process.env.JWT_SECRET,
  getUser: async (payload) => {
    // fetch extra info if needed
    return {
      id: payload.sub,
      email: payload.email,
      roles: payload.roles || [],
      permissions: payload.permissions || [],
    };
  },
});

// global auth middleware: populates req.principal
app.use(betterAuth.middleware());
```

2. Protect routes by role:

```ts
// require a single role
app.get("/admin", requireRoles("admin"), (req, res) => {
  res.send("admin console");
});

// require any of multiple roles
app.post("/editor/save", requireRoles("editor", "admin"), (req, res) => {
  res.json({ ok: true });
});
```

3. Require permission instead of role:

```ts
import { requirePermission } from "better-auth";

app.delete("/posts/:id", requirePermission("post:delete"), (req, res) => {
  // permission guard already validated principal.permissions
  res.status(204).send();
});
```

4. Implement custom guard / policy:

```ts
import { createPolicy } from "better-auth";

// example policy: owner or admin can edit
const canEditPost = createPolicy(async (principal, { resource }) => {
  if (principal.roles.includes("admin")) return true;
  return principal.id === resource.ownerId;
});

app.put(
  "/posts/:id",
  betterAuth.guard(canEditPost, async (req, res) => {
    // update post
  })
);
```

---

## Next.js API routes

Use `better-auth` middleware with API routes:

```ts
// pages/api/protected.ts
import { withAuth, requireRoles } from "better-auth";

export default withAuth(requireRoles("user"), async (req, res) => {
  const user = req.principal;
  res.json({ message: `Hello ${user.email}` });
});
```

---

## Client-side: Protecting React components

Provide a simple guard component or hook consuming principal from client auth state.

Example hook:

```ts
import { useAuth } from "better-auth/react";

function useHasRole(...needed: string[]) {
  const { principal } = useAuth();
  if (!principal) return false;
  return needed.some((r) => principal.roles.includes(r));
}
```

Guard component:

```tsx
import React from "react";
import { useHasRole } from "./useHasRole";

export function RequireRole({ roles, children }) {
  const ok = useHasRole(...roles);
  if (!ok) return <div>Access denied</div>;
  return <>{children}</>;
}
```

Usage:

```tsx
<RequireRole roles={["admin"]}>
  <AdminPanel />
</RequireRole>
```

---

## TypeScript types (recommended)

Define strong types for roles/permissions:

```ts
type Role = "admin" | "editor" | "user";
type Permission = "post:create" | "post:edit" | "post:delete";

interface Principal {
  id: string;
  email: string;
  roles: Role[];
  permissions?: Permission[];
}
```

Use these types in guards/policies for compile-time safety.

---

## Testing

- Unit test policies by constructing fake principals.
- Test middleware by injecting a mock `req` principal.
  Example with Jest:

```ts
test("editor can edit", async () => {
  const principal = { id: "1", roles: ["editor"] };
  const allowed = await canEditPost(principal, { resource: { ownerId: "2" } });
  expect(allowed).toBe(true);
});
```

---

## Best practices

- Centralize role and permission lists (avoid magic strings).
- Prefer permission checks for fine-grained control; use roles for coarse grouping.
- Deny by default: always ensure missing principal leads to 401/403.
- Log authorization failures for auditing.
- Keep policies small and composable.
- Avoid putting business-sensitive checks only on the client — always validate on server.

---

## Troubleshooting

- If roles aren't recognized: confirm JWT includes roles and the auth verifier maps them to principal.roles.
- For hierarchical roles (admin > editor > user), implement a role hierarchy lookup or assign multiple roles to the principal.
- For slow guard checks, cache resolved user privileges for the request lifecycle.

---

## Summary

- Use better-auth to centralize authentication and RBAC logic.
- Define reusable policies and middleware: requireRoles, requirePermission, createPolicy.
- Protect both API routes and UI components.
- Type and test your guards for robust security.

For more examples, extend the policy pattern shown above and keep the role/permission catalog in a single source of truth.
