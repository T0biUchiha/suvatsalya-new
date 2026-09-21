# Suvatsalya

Website and admin CMS for Suvatsalya Child Growth and Development Center.

- Live website: <https://suvatsalya.in>

The application lives in [`childcentre`](./childcentre):

- `client` — React/Vite public website and admin panel
- `suvatsalya-backend` — Express/MongoDB API

## Local development

Run the backend on port `5002` and the frontend on port `5173`. The complete setup, environment variables, initial local admin setup, authoring workflow, SEO sitemap details, checks, and release checklist are in [childcentre/README.md](./childcentre/README.md).

For local development, set `VITE_API_BASE_URL=http://127.0.0.1:5002` in `childcentre/client/.env`.

Never commit `.env` files or credentials.
