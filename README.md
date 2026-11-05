# World of Purpose pages

The Discover My Purpose page at worldofpurpose.com/discovermypurpose loads `discover.js` from here.

- `discover.js` builds the whole page inside the `#wop-root` box on the GoHighLevel page.
- `data.json` is a saved copy of the public declarations (first names, cities, purposes), refreshed every 15 minutes by the workflow in `.github/workflows/data.yml`. The page shows it instantly, then checks the live numbers in the background.
- `index.html` is a test copy of the page: https://kusudi-hub.github.io/wop-pages/

New declarations still go straight to the Google sheet and to GoHighLevel. Nothing private lives in this repository.
