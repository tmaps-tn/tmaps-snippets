# TMaps API Examples | Maps, Geocoding & Routing for Tunisia

Ready-to-run, client-side code examples for the [TMaps](https://www.tmaps.tn) APIs: map tiles, geocoding, routing, isochrones, distance matrix and static maps. Each example is one HTML page with no build step, using Leaflet, OpenLayers or MapLibre GL, and shows the exact API request it sends.

> 🇫🇷 Exemples de code prêts à l'emploi pour les API TMaps : cartes, géocodage, itinéraires et isochrones en Tunisie. Chaque exemple est une page HTML sans build qui affiche la requête API envoyée.

**[▶ Browse all live demos](https://examples.tmaps.tn/)** · [API documentation](https://www.tmaps.tn/documentation)

## Examples

| # | Example | API | Library | Demo |
|---|---------|-----|---------|------|
| 01 | [Map with Leaflet](demos/01-raster-leaflet/) | Raster tiles | Leaflet | [Live](https://examples.tmaps.tn/01-raster-leaflet/) |
| 02 | [Map with OpenLayers](demos/02-raster-openlayers/) | Raster tiles | OpenLayers | [Live](https://examples.tmaps.tn/02-raster-openlayers/) |
| 03 | [Vector map styles](demos/03-vector-maplibre-styles/) | Vector tiles | MapLibre GL | [Live](https://examples.tmaps.tn/03-vector-maplibre-styles/) |
| 04 | [Address search](demos/04-geocoding-search/) | Forward geocoding | Leaflet | [Live](https://examples.tmaps.tn/04-geocoding-search/) |
| 05 | [Address from a map click](demos/05-reverse-geocoding/) | Reverse geocoding | Leaflet | [Live](https://examples.tmaps.tn/05-reverse-geocoding/) |
| 08 | [Nearby places](demos/08-nearby-search/) | Nearby search | Leaflet | [Live](https://examples.tmaps.tn/08-nearby-search/) |
| 12 | [Checkout address form](demos/12-checkout-address-form/) | Forward + reverse geocoding | Leaflet | [Live](https://examples.tmaps.tn/12-checkout-address-form/) |

Coming soon: static map, directions, isochrone, optimized route and distance matrix examples ([pending/](pending/)).

## Postman collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/59164577-39c61a9a-5dec-4a19-bfb0-78e040babbe5?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D59164577-39c61a9a-5dec-4a19-bfb0-78e040babbe5%26entityType%3Dcollection%26workspaceId%3Dd930590d-cd34-4179-bf0c-14ef875c22af)

Try the API without writing code: fork the collection from the [TMaps public workspace](https://www.postman.com/tmaps-tn/tmaps-api) or import the [files in postman/](postman/) (tiles, forward and reverse geocoding, nearby search), set your key and send. Each request comes with documented parameters, example responses and tests.

## CodePen

Prefer to play in the browser? Four examples are on [CodePen](https://codepen.io/tmaps), ready to fork: a [Leaflet map](https://codepen.io/tmaps/pen/KwWBabZ), [vector styles with MapLibre](https://codepen.io/tmaps/pen/yyMqgGK), an [OpenLayers map with a shareable view](https://codepen.io/tmaps/pen/zxZLNyy) and an [address search in French, Arabic and Arabizi](https://codepen.io/tmaps/pen/vExagbN). Their code is in [codepen/](codepen/).

## Repository layout

```
demos/            Client-side examples (plain HTML, no build), published on GitHub Pages
servers/go/       Go server (standard library only)
servers/node/     Node.js server (no dependencies)
servers/python/   Python server (standard library only)
postman/          Postman collection and environment
codepen/          Code of the CodePen examples (HTML, CSS, JS panels)
pending/          Examples waiting for their API endpoint in production
docker-compose.yml
```

The three servers do the same thing: serve `demos/` and generate `/shared/config.js` from the `TMAPS_API_KEY` environment variable, so your key never has to be committed. Pick the one that matches your stack.

## Run locally

Get an API key from the [TMaps console](https://app.tmaps.tn) and add `localhost` to its [authorized domains](https://www.tmaps.tn/documentation/console/authorized-domains).

### With Docker Compose (all three servers)

```bash
cp .env.example .env   # then put your key in .env
docker compose up --build
```

| Server  | URL                    |
|---------|------------------------|
| Go      | http://localhost:8081  |
| Node.js | http://localhost:8082  |
| Python  | http://localhost:8083  |

### Without Docker

```bash
# Go 1.22+
cd servers/go && TMAPS_API_KEY=your_key go run .

# Node.js 20+
cd servers/node && TMAPS_API_KEY=your_key node server.js

# Python 3.8+
cd servers/python && TMAPS_API_KEY=your_key python3 server.py
```

Each server listens on http://localhost:8080 (change it with `PORT`).

### Single image

```bash
docker build -f servers/go/Dockerfile -t tmaps-snippets .
docker run --rm -p 8080:8080 -e TMAPS_API_KEY=your_key tmaps-snippets
```

## GitHub Pages

The [Pages workflow](.github/workflows/pages.yml) publishes `demos/` on every push to `main`. Add your test key as a repository secret named `TMAPS_API_KEY` and it is injected into `shared/config.js` at deploy time.

## About API keys in client-side code

A key used in the browser is always visible in the page source. Protect it by restricting it to your own domains in the TMaps console: requests from any other origin are rejected with `403`. See [Authentication](https://www.tmaps.tn/documentation/authentication).

## License

[MIT](LICENSE) © MapWay
