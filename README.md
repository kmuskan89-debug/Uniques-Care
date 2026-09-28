# Unicare (Ucare) — Full-Stack Vercel Ready Repository

Welcome to **Unicare (Ucare)**, a Smart Lab Maintenance & Automation System built for The Uniques Community.

This repository is optimized for **1-Click Vercel Deployment** as well as local development.

---

## 📁 Deployment-Ready Folder Structure

```text
.
├── api/                          # Vercel Serverless Function entry point
│   └── index.js                  # Express API serverless wrapper
│
├── frontend/                     # React + Vite Frontend Application
│   ├── public/                   # Static assets & public resources
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── services/             # API client & services layer
│   │   ├── App.tsx               # Main React Application
│   │   └── main.tsx              # Entry point
│   ├── index.html                # HTML Template
│   ├── package.json              # Frontend dependencies & scripts
│   ├── tsconfig.json             # TypeScript configuration
│   └── vite.config.ts            # Vite bundler configuration (with dev proxy)
│
├── backend/                      # Node.js + Express Backend Service
│   ├── src/
│   │   ├── app.js                # Express App setup & middleware
│   │   ├── server.js             # Local standalone server listener
│   │   ├── config/               # Database connection (Serverless re-use enabled)
│   │   ├── controllers/          # Request handlers
│   │   ├── routes/               # API routes (/api/health, /api/auth, /api/issues)
│   │   └── models/               # Mongoose DB models
│   └── package.json              # Backend dependencies
│
├── package.json                  # Root package.json (Vercel & npm scripts)
├── vercel.json                   # Vercel deployment config (Rewrites & build commands)
├── .gitignore                    # Global git ignore rules
└── README.md                     # Project documentation
```

---

## 🚀 Deploying to Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the repository in your [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect `vercel.json` and deploy:
   - **Frontend**: Built via Vite to `frontend/dist`
   - **Backend API**: Deployed as Vercel Serverless Function at `/api/*`
4. Set Environment Variables in Vercel settings if using MongoDB Atlas:
   - `MONGODB_URI`: `mongodb+srv://...`
   - `JWT_SECRET`: `your_jwt_secret_key`

---

## 💻 Local Development

### 1️⃣ Run Frontend & Dev Server
From project root:
```bash
npm run dev
```
Or directly inside `frontend`:
```bash
cd frontend
npm run dev
```

### 2️⃣ Run Standalone Express Backend (Optional for local API dev)
```bash
cd backend
npm run dev
```

---

## 📡 API Endpoints Summary

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health Check Endpoint |
| `POST` | `/api/auth/register` | User Registration |
| `POST` | `/api/auth/login` | User Login |
| `GET` | `/api/issues` | Fetch all logged lab issues |
| `POST` | `/api/issues` | Report a new lab issue |
| `PATCH` | `/api/issues/:id` | Update issue status (Technician / Admin) |
