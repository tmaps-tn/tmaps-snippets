# TMaps API Examples – Maps, Geocoding & Routing for Tunisia

Ready-to-run, client-side code examples for the [TMaps](https://www.tmaps.tn) APIs: map tiles, geocoding, routing, isochrones, distance matrix and static maps. Each example is a single HTML file with no build step, using Leaflet, OpenLayers or MapLibre GL.

> 🇫🇷 Exemples de code prêts à l'emploi pour les API TMaps : cartes, géocodage, itinéraires et isochrones en Tunisie. Chaque exemple est un fichier HTML autonome, sans build.

**[▶ Browse all live demos](https://tmaps-tn.github.io/tmaps-snippets/)** · [API documentation](https://www.tmaps.tn/documentation)

## Examples

| # | Example | API | Library | Demo |
|---|---------|-----|---------|------|
| 01 | [Raster tiles with Leaflet](demos/01-raster-leaflet/) | Raster tiles | Leaflet | [Live](https://tmaps-tn.github.io/tmaps-snippets/01-raster-leaflet/) |
| 02 | [Raster tiles with OpenLayers](demos/02-raster-openlayers/) | Raster tiles | OpenLayers | [Live](https://tmaps-tn.github.io/tmaps-snippets/02-raster-openlayers/) |
| 03 | [Vector tiles, 4 styles](demos/03-vector-maplibre-styles/) | Vector tiles | MapLibre GL | [Live](https://tmaps-tn.github.io/tmaps-snippets/03-vector-maplibre-styles/) |

Coming soon: address search, reverse geocoding on click, static maps, directions, nearby search, delivery zone (isochrone), optimized route, nearest driver (distance matrix), checkout address form.

## Repository layout

```
demos/            Client-side examples (plain HTML, no build), published on GitHub Pages
servers/go/       Go server (standard library only)
servers/node/     Node.js server (no dependencies)
servers/python/   Python server (standard library only)
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
