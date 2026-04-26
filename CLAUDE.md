# Solid Rock Studios — Claude Context File

This file gives Claude full context for managing Rick's website. It is loaded automatically by Claude Code and is accessible via the GitHub connector in claude.ai chats.

---

## Who This Is For

**Owner:** Rick Swanson (rickswanson1956@gmail.com)  
**Business:** Solid Rock Studios — custom laser engraving on stone, vinyl, and wood. Located in Rogers, MN.

---

## The Website

- **Live URL:** https://solidrockstudios.art/
- **Stack:** Single-page static HTML/CSS/JS (`index.html`) — no framework, no build step
- **Hosting:** Namecheap shared hosting, files served from `public_html/`

---

## GitHub Repository

- **Repo:** https://github.com/rickswanson1956/Solid-Rock-Studios-Website
- **Branch:** `main` is the live branch — any push here triggers an automatic deploy
- **Local clone (Rick's Mac):** `/Users/grantswanson/Solid-Rock-Studios-Website/`

---

## Deployment Pipeline

Pushes to `main` trigger a GitHub Action (`.github/workflows/deploy.yml`) that FTP-deploys the repo contents directly to `public_html/` on Namecheap using stored secrets:

- `FTP_SERVER` — Namecheap FTP host
- `FTP_USERNAME` — FTP username
- `FTP_PASSWORD` — FTP password

The FTP root for this account already lands inside `public_html/`, so `server-dir` in the workflow is set to `/` to avoid double-nesting.

There is no staging environment — a push goes live immediately.

---

## Rules for Claude

1. **Demo before push.** Before committing and pushing any change, save a local preview copy (e.g. `preview.html` in the repo root) and tell Rick to open it in his browser. Only push after he gives the go-ahead.
2. **Pull before editing.** Always `git pull origin main` before making changes to avoid conflicts.
3. **Single file site.** All content lives in `index.html`. There are no separate CSS or JS files — styles and scripts are inline.
4. **Commits auto-publish.** Remind Rick before pushing that the change will go live within ~60 seconds of the push.

---

## Picking Up Mid-Project

If this is a new conversation, here is the fastest way to get oriented:

1. Read this file — you now have full context.
2. Read `index.html` to see the current state of the site.
3. Ask Rick what he wants to change.
4. Make the edit, save `preview.html`, have Rick approve, then push.
