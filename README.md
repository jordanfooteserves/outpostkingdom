# Project Starter

A pre-wired starting point for a new web project on the standard stack: **Next.js + Airtable + Vercel** (deployed via GitHub). Copy this folder for each new project and you begin with the framework already in place.

## What's inside
```
app/
  page.js            ← the home page (edit this to start building)
  layout.js          ← page shell / metadata
  globals.css        ← base styles (rebrand via the CSS variables at the top)
  api/example/       ← sample Airtable-backed data route (copy/rename per endpoint)
lib/airtable.js      ← small helper that talks to Airtable (delete if no database needed)
.env.example         ← template of the environment variables (safe to commit)
.gitignore           ← keeps node_modules, build output, and secrets out of git
```

## Start a new project from this template
1. **Copy** this folder and rename it (e.g. `my-new-project`). Edit the `name` in `package.json`.
2. `npm install`
3. `npm run dev` → open http://localhost:3000. It runs immediately on demo data.
4. **If it needs a database:** create an Airtable base + token, then `cp .env.example .env.local` and fill in `AIRTABLE_API_TOKEN`, `AIRTABLE_BASE_ID`, and `AIRTABLE_TABLE`. (If it doesn't need data, you can delete `lib/airtable.js` and `app/api/`.)
5. Create a **GitHub** repo and push:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
6. Import the repo in **Vercel** → confirm **Framework Preset = Next.js** → add the same env vars → **Deploy**.
7. (Optional) Attach a custom domain in Vercel; leave your email (MX) records untouched.

## Everyday workflow
- **Change data →** edit Airtable directly (no deploy).
- **Change the app →** edit code → `git add . && git commit -m "..." && git push` → Vercel auto-deploys (~1 min), same URL.

See your **New Project Foundation playbook** for the full conventions, security rules, and per-project checklist.
