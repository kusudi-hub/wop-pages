# World of Purpose pages

The Discover My Purpose page at worldofpurpose.com/discovermypurpose loads `discover.js` from here.

- `discover.js` builds the whole page inside the `#wop-root` box on the GoHighLevel page.
- `data.json` is a saved copy of the public declarations (first names, cities, purposes), refreshed every 15 minutes by the workflow in `.github/workflows/data.yml`. The page shows it instantly, then checks the live numbers in the background.
- `index.html` is a test copy of the page: https://kusudi-hub.github.io/wop-pages/

New declarations still go straight to the Google sheet and to GoHighLevel. Nothing private lives in this repository.

## Alignment page design layer

`alignment.js` adds the design to the Alignment page at join.worldofpurpose.com/alignment: white look, moving ripples, real faces by the count, the live declarations strip with real stats, motion, side margins on phones, and the video box before the real video is in. It only adds to the page. The checkout, Whop and the settings block on the GoHighLevel page are not touched. The GoHighLevel page loads it with:

`<script src="https://kusudi-hub.github.io/wop-pages/alignment.js" async></script>`
