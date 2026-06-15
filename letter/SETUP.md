# Setup Guide

Two services, both free: **Supabase** (database) + **Netlify** (hosting + serverless functions).
Your credentials never touch the browser or the GitHub repo — they live only in Netlify's environment variables.

---

## Step 1 — Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and sign up for free
2. Click **New Project**, give it a name (e.g. "project-sonder"), pick a region
3. Wait ~1 minute for it to provision

---

## Step 2 — Create the letters table

1. In your Supabase project, go to **SQL Editor** (left sidebar)
2. Paste and run this:

```sql
create table letters (
  id          bigserial primary key,
  name        text not null default 'Anonymous',
  message     text not null,
  created_at  timestamptz not null default now()
);

-- Lock down the table — only your serverless function can access it
-- (using the service role key stored safely in Netlify env vars)
alter table letters enable row level security;
```

> No public RLS policies needed — all access goes through your serverless functions.

---

## Step 3 — Get your Supabase credentials

1. Go to **Project Settings → API**
2. Copy:
   - **Project URL** (e.g. `https://xxxxxxxxxxxx.supabase.co`)
   - **service_role** key (under "Project API keys" — click to reveal) ← NOT the anon key

---

## Step 4 — Deploy to Netlify

1. Push this repo to GitHub (if you haven't already)
2. Go to [netlify.com](https://netlify.com), sign up, click **Add new site → Import from Git**
3. Connect your GitHub repo and deploy

---

## Step 5 — Add environment variables in Netlify

1. In Netlify, go to **Site configuration → Environment variables**
2. Add these three variables:

| Key | Value |
|-----|-------|
| `SUPABASE_URL` | your Supabase project URL |
| `SUPABASE_KEY` | your Supabase **service_role** key |
| `VIEW_PASSWORD` | any password you want for the inbox |

3. Click **Save**, then go to **Deploys** and trigger a redeploy

---

## Step 6 — Program the NFC tag

Use any NFC writing app (e.g. **NFC Tools** on iOS/Android):
- Write a **URL** record pointing to your Netlify site URL
- e.g. `https://project-sonder.netlify.app`

---

## Viewing letters

Go to `https://your-site.netlify.app/view.html` and enter your `VIEW_PASSWORD`.
The password is checked server-side — it's never exposed in the browser.
