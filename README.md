# TMaps API Examples – Maps, Geocoding & Routing for Tunisia

Ready-to-run, client-side code examples for the [TMaps](https://www.tmaps.tn) APIs: map tiles, geocoding, routing, isochrones, distance matrix and static maps. Each example is a single HTML file with no build step, using Leaflet, OpenLayers or MapLibre GL.

> 🇫🇷 Exemples de code prêts à l'emploi pour les API TMaps : cartes, géocodage, itinéraires et isochrones en Tunisie. Chaque exemple est un fichier HTML autonome, sans build.

**[▶ Browse all live demos](https://tmaps-tn.github.io/tmaps-snippets/)** · [API documentation](https://www.tmaps.tn/documentation)

## Examples

| # | Example | API | Library | Demo |
|---|---------|-----|---------|------|
| 01 | [Raster tiles with Leaflet](01-raster-leaflet/) | Raster tiles | Leaflet | [Live](https://tmaps-tn.github.io/tmaps-snippets/01-raster-leaflet/) |
| 02 | [Raster tiles with OpenLayers](02-raster-openlayers/) | Raster tiles | OpenLayers | [Live](https://tmaps-tn.github.io/tmaps-snippets/02-raster-openlayers/) |
| 03 | [Vector tiles, 4 styles](03-vector-maplibre-styles/) | Vector tiles | MapLibre GL | [Live](https://tmaps-tn.github.io/tmaps-snippets/03-vector-maplibre-styles/) |

Coming soon: address search, reverse geocoding on click, static maps, directions, nearby search, delivery zone (isochrone), optimized route, nearest driver (distance matrix), checkout address form.

## Run locally

1. Get an API key from the [TMaps console](https://app.tmaps.tn) and add `localhost` to its [authorized domains](https://www.tmaps.tn/documentation/console/authorized-domains).
2. Put your key in [`shared/config.js`](shared/config.js).
3. Serve the folder over HTTP (opening the files directly with `file://` won't work):

```bash
npx serve .
# or
python3 -m http.server 8000
```

## About API keys in client-side code

A key used in the browser is always visible in the page source. Protect it by restricting it to your own domains in the TMaps console: requests from any other origin are rejected with `403`. See [Authentication](https://www.tmaps.tn/documentation/authentication).

## License

[MIT](LICENSE) © MapWay
