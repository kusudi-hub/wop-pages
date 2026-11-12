# apple-pay-verify Worker

Cloudflare Worker on account `4c596aa22fb8a8167a83429b69699acd`.
It does four things, in this order:

1. Serves the Apple Pay domain association file by proxying Whop's copy.
   This is what made Apple Pay and Google Pay work on join.worldofpurpose.com.
2. Passes through anything not on join.worldofpurpose.com untouched.
3. Serves static pages from this repo (GitHub Pages) via the `PAGES` map.
   **To add a page: add it to `PAGES` and redeploy.** Add both `/name` and `/name/`.
4. Everything else proxies worldofpurpose.com, edge caches it, and rewrites
   the GoHighLevel merge fields so `?name=` and `?declaration=` work.

`worker.ORIGINAL.js` is the version that was live before `/scholarship`
was added, kept as a known-good rollback.

## Deploying
The dashboard code editor is a cross-origin iframe and is painful to automate.
The reliable path is the dashboard's own API from a logged-in browser tab:

- Read:  `GET  /api/v4/accounts/<acct>/workers/scripts/apple-pay-verify`
  (returns multipart; the source is the `worker.js` part)
- Write: `PUT` the same URL with FormData containing a `metadata` JSON blob
  (`main_module: "worker.js"`, `compatibility_date: "2026-11-11"`) and the
  `worker.js` file blob typed `application/javascript+module`.

After any deploy, check all of these before walking away:
`/scholarship`, `/manage`, `/alignment`, `/`, and the Apple Pay file.
