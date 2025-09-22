# Rims Commerce (ecomstarter)

A starter e-commerce application built with Next.js (App Router), TypeScript and TailwindCSS. It includes server-side JWT authentication using HTTP-only cookies, product/category APIs, and PostgreSQL integration.

First experiment with next and typescipt

---

## Table of contents

- Features
- Quick start (development)
- Environment variables
- Project structure (key files)
- Authentication flow
- Database
- Testing
- Deployment notes
- Contributing and next steps

---

## Features

- Next.js 15 (App Router) with TypeScript
- Tailwind CSS for styling
- Server-side JWT authentication using `jose` and HTTP-only cookies
- Register / Login / Logout API routes
- Middleware-based route protection (example: `/list`)
- Product & category services (client-side fetch wrappers)
- PostgreSQL integration via `pg` and a small `db` helper
- Client-side `useAuth` hook and `ProtectedRoute` component
- Example SQL and seed data in `database/`

---

## Quick Start (Development)

### Prerequisites

- Node.js 18+ (Node 20 recommended)
- PostgreSQL 12+

### Install and run

```bash
git clone <your-repo-url>
cd e-Commerce
npm install
```

Create a `.env.local` file in the project root with the variables described below (`.env.example` is recommended but not included by default):

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=shopperdb
DB_USER=postgres
DB_PASSWORD=your-db-password

# JWT / Cookies
JWT_SECRET=replace-with-a-secure-secret-min-32-chars
JWT_EXPIRES_IN=7d
JWT_COOKIE_NAME=auth_token
COOKIE_SECURE=false # set true in production (requires HTTPS)
COOKIE_SAME_SITE=lax
COOKIE_MAX_AGE=604800

# Optional
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Start the dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Scripts

- `npm run dev` — run Next.js in development (Turbopack)
- `npm run build` — build for production
- `npm run start` — run production server (after build)
- `npm run lint` — run ESLint

---

## Environment Variables (summary)

- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` — Postgres connection configuration
- `JWT_SECRET` — Secret used to sign JWTs; keep this private (production: >=32 chars)
- `JWT_EXPIRES_IN` — Token TTL (e.g. `7d`, `1h`)
- `JWT_COOKIE_NAME` — Name of the auth cookie
- `COOKIE_SECURE` — `true` to set cookie Secure flag (HTTPS required)
- `COOKIE_SAME_SITE` — `lax` | `strict` | `none`
- `COOKIE_MAX_AGE` — Cookie lifetime in seconds
- `NEXT_PUBLIC_API_URL` — Optional external API base URL
- `NEXT_PUBLIC_BASE_URL` — Optional base URL used by some pages

---

## Project Structure (key files)

- `src/app/` — Next.js App Router pages and API routes
  - `src/app/login` — Login page (client)
  - `src/app/register` — Registration page
  - `src/app/list` — Product listing (protected)
  - `src/app/api/auth` — Auth routes: `login`, `logout`, `register`, `me`
  - `src/app/api/products` — Product API endpoint(s)
- `src/lib/auth.ts` — JWT sign/verify + cookie helpers
- `src/lib/db.ts` — Postgres pool and query helper
- `src/lib/currentUser.ts` — Server helper to retrieve current user from cookie
- `src/hooks/useAuth.tsx` — Client hook for auth state and helpers
- `src/components/ProtectedRoute.tsx` — Client-side wrapper for protected content
- `middleware.ts` — Route protection middleware (example: `/list`)
- `docs/JWT_AUTH_REFERENCE.md` — Authentication notes and best practices

---

## Authentication Flow

1. Register: `POST /api/auth/register` (server stores hashed password)
2. Login: `POST /api/auth/login` — server signs JWT and sets an HTTP-only cookie
3. Middleware protects configured routes and redirects to `/login` if not authenticated
4. Server components use `getCurrentUser()` to check the cookie and load user data
5. Client can use `useAuth` for real-time auth status and logout

---

## Database

This project uses PostgreSQL. Example SQL files are included in the `database/` folder (schema, seed data, slider data, etc.).

Typical setup:

1. Create the database (example name `shopperdb`)
2. Import `database/schema.sql` and `database/seed_data.sql` if needed
3. Update `.env.local` with your DB credentials

`src/lib/db.ts` exposes `testConnection()` and `closePool()` helpers for convenience.

---

## Testing

Manual endpoints to test:

- `POST /api/auth/register` — register a user
- `POST /api/auth/login` — login and set auth cookie
- `GET /api/auth/me` — return the current user (or null)
- `POST /api/auth/logout` — clear auth cookie

---

## Deployment Notes

- Use a strong `JWT_SECRET` and enable `COOKIE_SECURE=true` when deploying to production with HTTPS.
- Configure environment variables in your hosting platform (Vercel, Railway, Render, etc.).
- Ensure database credentials are set in secrets and never committed to the repo.

Suggested production checklist:

1. Set secure env vars and secrets
2. Use a managed Postgres instance
3. Turn on monitoring and logs for DB and server
4. Add CI (recommended: GitHub Actions) to run lint/build/tests on push

---

## Future Updates

- Implemet Admin panel
- Router protection for correct routes
- Filter feature for products list page

---
