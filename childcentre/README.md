# Suvatsalya — Child Development Centre Website

Full-stack CMS site: React (Vite) frontend + Node/Express API + MongoDB + Cloudinary.

| Part | Folder | Default local URL |
|------|--------|-------------------|
| Frontend | `client/` | http://localhost:5173 |
| Backend | `suvatsalya-backend/` | http://localhost:5002 (or `PORT` in `.env`) |
| Admin panel | — | http://localhost:5173/admin/login |

Production (typical): **Netlify** (frontend) + **Render** (backend) + **MongoDB Atlas** + **Cloudinary**.

---

## 1. Local setup guide

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm
- MongoDB Atlas cluster (or local MongoDB)
- Cloudinary account (images + benefit PDFs)

### Backend

```bash
cd suvatsalya-backend
cp env.example .env
```

Edit `.env` (see [Environment variables](#environment-variables)). If port **5001** is in use (e.g. Docker), set `PORT=5002`.

```bash
npm install
npm run dev
```

You should see: `Server running on port …` and `MongoDB Connected`.

### Frontend

```bash
cd client
```

Create `client/.env`:

```env
VITE_API_BASE_URL=http://localhost:5002
```

Use the same port as your backend `PORT`.

```bash
npm install
npm run dev
```

Open http://localhost:5173

### Create the admin user (first time only)

The admin account is **not** created automatically. Run **once** after the backend is up:

```bash
curl -X POST http://localhost:5002/api/auth/setup
```

Default credentials after setup:

| Field | Value |
|-------|--------|
| Username | `Admin` |
| Password | `suvatsalya` |

Then log in at `/admin/login`.

> If setup returns `Admin user already exists`, the account was created earlier — use the password you set last, or use [Password reset](#admin-password-reset) below.

---

## 2. Hosting / deployment guide

### Architecture

```
Visitors → Netlify (static React build)
              ↓ API calls
           Render (Express API)
              ↓
    MongoDB Atlas + Cloudinary
```

### Backend — Render

1. Connect the repo; set **root directory** to `childcentre/suvatsalya-backend` (or deploy that folder).
2. **Build command:** `npm install`
3. **Start command:** `npm start`
4. Add environment variables (same as `.env`, production values):

   | Variable | Example / notes |
   |----------|-----------------|
   | `MONGO_URI` | Atlas connection string |
   | `JWT_SECRET` | Long random string (32+ chars) |
   | `CLOUDINARY_CLOUD_NAME` | From Cloudinary dashboard |
   | `CLOUDINARY_API_KEY` | |
   | `CLOUDINARY_API_SECRET` | |
   | `PORT` | Render sets this automatically; often `10000` — you can omit and use `process.env.PORT` |
   | `CORS_ORIGIN` | Your live site URL(s), comma-separated, e.g. `https://suvatsalya.in,https://www.suvatsalya.in` |
   | `ADMIN_RESET_SECRET` | Long random secret (see password section) |

5. Note the service URL, e.g. `https://your-app.onrender.com`

6. **One-time on production:** create admin user:

   ```bash
   curl -X POST https://your-app.onrender.com/api/auth/setup
   ```

7. Redeploy after code changes; ensure new routes (benefits, social links, etc.) are on this service.

### Frontend — Netlify

1. Connect repo; **base directory:** `childcentre/client`
2. **Build command:** `npm run build`
3. **Publish directory:** `dist`
4. Environment variable:

   | Variable | Value |
   |----------|--------|
   | `VITE_API_BASE_URL` | Your Render backend URL (no trailing slash) |

5. `public/_redirects` is already set for SPA routing (`/* → /index.html`).

### Cloudinary

- Enable **PDF delivery** in Cloudinary Console → **Settings → Security** if benefit PDFs fail to open.
- Folders used: `suvatsalya/articles`, `suvatsalya/stories`, `suvatsalya/benefits/images`, `suvatsalya/benefits/pdfs`.

### MongoDB Atlas

- Allow network access from Render (or `0.0.0.0/0` for simplicity).
- Use the same `MONGO_URI` on Render as in local `.env` (different DB name in the URI if you want separate dev/prod DBs).

### Post-deploy checklist

- [ ] `CORS_ORIGIN` includes production frontend URL(s)
- [ ] `VITE_API_BASE_URL` points to Render backend
- [ ] Admin setup (`POST /api/auth/setup`) run once on production
- [ ] `ADMIN_RESET_SECRET` set on Render (not in git)
- [ ] Change default password after first login (via reset API — see below)

---

## 3. Admin password — where it is and how to reset

### Important: you cannot “look up” the current password

Passwords are stored **hashed** in MongoDB (bcrypt). There is no file or dashboard that shows the live admin password. You only know it if:

- You still use the default from first setup (`suvatsalya`), or  
- You saved the password from the last **reset** response (below).

### Default password (after first `POST /api/auth/setup`)

| Username | Password |
|----------|----------|
| `Admin` | `suvatsalya` |

Change this in production as soon as possible.

### Password reset API (emergency / not in the UI)

Configured with `ADMIN_RESET_SECRET` in backend `.env` / Render env.

**Endpoint:** `POST /api/auth/reset-password`  
**Not linked** from the website — use curl, Postman, or similar.

**Body (JSON):**

```json
{
  "resetSecret": "YOUR_ADMIN_RESET_SECRET_FROM_ENV",
  "username": "Admin",
  "newPassword": "YourNewSecurePassword123!"
}
```

- `username` — optional, defaults to `Admin`
- `newPassword` — optional; if omitted, the server **generates** a random 16-character password and returns it **once** in the response

**Example — set your own password (local):**

```bash
curl -X POST http://localhost:5002/api/auth/reset-password \
  -H "Content-Type: application/json" \
  -d '{
    "resetSecret": "paste-from-your-.env-ADMIN_RESET_SECRET",
    "username": "Admin",
    "newPassword": "MyNewAdminPass2024!"
  }'
```

**Example — auto-generate password:**

```bash
curl -X POST http://localhost:5002/api/auth/reset-password \
  -H "Content-Type: application/json" \
  -d '{
    "resetSecret": "paste-from-your-.env-ADMIN_RESET_SECRET"
  }'
```

**Success response:**

```json
{
  "message": "Password updated successfully",
  "username": "Admin",
  "newPassword": "the-password-to-use-for-login"
}
```

Copy `newPassword` immediately — it is **not** stored in plain text anywhere else.

**Production:** replace `http://localhost:5002` with your Render URL.

### Where to find `ADMIN_RESET_SECRET`

| Environment | Location |
|-------------|----------|
| Local | `suvatsalya-backend/.env` → `ADMIN_RESET_SECRET=...` |
| Production | Render dashboard → your service → **Environment** |

Template only (do not commit real secrets): `suvatsalya-backend/env.example`

### Verify login works

1. Open `/admin/login`
2. Username: `Admin`
3. Password: value from setup default, your manual reset, or `newPassword` from the reset response

### Common errors

| Response | Cause |
|----------|--------|
| `Password reset is not configured` | `ADMIN_RESET_SECRET` missing on server |
| `Invalid reset secret` | Wrong `resetSecret` in request body |
| `Admin user not found` | Run `POST /api/auth/setup` first |
| `Invalid username or password` at login | Wrong password; run reset again and save `newPassword` |

---

## Environment variables

### Backend (`suvatsalya-backend/.env`)

Copy from `env.example`. Never commit `.env`.

### Frontend (`client/.env`)

| Variable | Purpose |
|----------|---------|
| `VITE_API_BASE_URL` | Backend API root (local or Render) |

---

## Useful commands

```bash
# Backend
cd suvatsalya-backend && npm run dev

# Frontend
cd client && npm run dev

# Lint frontend
cd client && npm run lint

# Production build (frontend)
cd client && npm run build
```

---

## Admin features (routes)

| Path | Purpose |
|------|---------|
| `/admin/login` | Login |
| `/admin` | Dashboard |
| `/admin/articles` | Blog articles |
| `/admin/stories` | Parent testimonials |
| `/admin/benefits` | Government benefits |
| `/admin/social` | Footer social links |
| `/admin/queries` | Contact form submissions |
| `/admin/career` | Career page content |
