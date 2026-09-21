# Suvatsalya website

The Suvatsalya website is a Vite/React frontend with an Express and MongoDB API.

- Live website: <https://suvatsalya.in>
- Local frontend: <http://127.0.0.1:5173>
- Local API: <http://127.0.0.1:5002>

## Project layout

```text
childcentre/
├── client/                 React + Vite public site and admin panel
└── suvatsalya-backend/     Express API, MongoDB models and uploads
```

## Run locally

Prerequisites: Node.js 20.19+ and either a local MongoDB instance or a MongoDB connection string.

1. Configure and start MongoDB. For a local instance, one option is:

   ```bash
   mongod --dbpath /private/tmp/suvatsalya-mongodb --bind_ip 127.0.0.1 --port 27017
   ```

2. In a second terminal, configure and start the API:

   ```bash
   cd childcentre/suvatsalya-backend
   cp env.example .env
   npm ci
   npm run dev
   ```

   For local MongoDB, set this in `suvatsalya-backend/.env`:

   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/suvatsalya_local
   PORT=5002
   CORS_ORIGIN=http://127.0.0.1:5173,http://localhost:5173
   ```

   Fill in the remaining `JWT_SECRET`, Cloudinary, and reset-secret values with development-only secrets. Cloudinary is required for image uploads.

3. In a third terminal, configure and start the frontend:

   ```bash
   cd childcentre/client
   cp .env.example .env
   npm ci
   npm run dev
   ```

   Ensure `client/.env` contains:

   ```env
   VITE_API_BASE_URL=http://127.0.0.1:5002
   ```

Open <http://127.0.0.1:5173>. The admin panel is available at `/admin/login`.

## First local admin account

On a new local database, create the initial administrator once:

```bash
curl -X POST http://127.0.0.1:5002/api/auth/setup
```

This development-only setup creates the initial account described by the API response. Change its password before using a shared environment. Never use local credentials or a local database as production credentials/data.

## Content authoring

Blog articles and parent stories use a rich-text editor in the admin panel. Authors can paste content from ChatGPT, Word, or other sources, then format headings, emphasis, links, quotations, and lists with the toolbar. Content is sanitized on the API and rendered safely on the public pages.

Article, story, and government-benefit links use human-readable slugs. Legacy MongoDB-ID links remain supported by the API while existing records receive slugs.

## SEO and discoverability

- Each public route has an appropriate title, description, canonical URL, and social preview metadata.
- Articles, parent stories, and government-benefit pages generate their own metadata and structured data.
- Static URLs are listed in `client/public/sitemap.xml`.
- Dynamic content is published at `/api/seo/sitemap.xml` by the backend.
- `client/public/robots.txt` references both sitemaps.

After publishing content, verify the sitemap endpoints in the deployed environment and submit/refresh them in Google Search Console. Search-engine recrawling is controlled by the search engine and is not immediate.

## Quality checks

Run these from `childcentre/client` before a frontend release:

```bash
npm run format:check
npm run lint
npm run build
```

For a quick backend syntax check:

```bash
cd childcentre/suvatsalya-backend
node --check server.js
```

## Environment variables

Do not commit `.env` files, private keys, JWT secrets, Cloudinary credentials, or reset secrets.

| Location | Variable | Purpose |
| --- | --- | --- |
| Backend | `MONGO_URI` | MongoDB database connection |
| Backend | `JWT_SECRET` | Signs admin sessions |
| Backend | `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` | Image uploads |
| Backend | `PORT` | API port (use `5002` locally) |
| Backend | `CORS_ORIGIN` | Comma-separated allowed frontend origins |
| Backend | `ADMIN_RESET_SECRET` | Emergency admin password reset protection |
| Frontend | `VITE_API_BASE_URL` | API root; use `http://127.0.0.1:5002` locally |

## Releasing site changes

This repository does not prescribe a hosting provider. A release must publish the frontend build, run the API with the required private environment variables, and use the approved production configuration. Deploy backend changes with frontend changes when they affect API routes, dynamic content, SEO metadata, or sitemap output. See `DEPLOYMENT_GUIDE.txt` for the provider-neutral release checklist.
