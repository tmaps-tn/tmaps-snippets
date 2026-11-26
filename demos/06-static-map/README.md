# 06 · Static map image

Turn a place or a route into a PNG map image for a property listing, an order confirmation email or a PDF report.

**[Live demo](https://examples.tmaps.tn/06-static-map/)** · [Static Maps docs](https://www.tmaps.tn/documentation/api/static-maps)

## API requests

Listing thumbnail, one place with a pin:

```http
GET https://api.tmaps.tn/maps/static?center=36.8708,10.3417&zoom=16&size=800x500&style=streets&lang=fr&marker=36.8708,10.3417|red&api_key=YOUR_API_KEY
```

Route thumbnail: take the `geometry` of `GET /routing/direction` (encoded polyline, precision 5) and put it, URL-encoded, after `enc:`. Without `center` and `zoom`, the image is framed on the overlays.

```http
GET https://api.tmaps.tn/routing/direction?from=36.7987,10.1713&to=36.8528,10.3261&profile=driving&geometry=polyline&api_key=YOUR_API_KEY
GET https://api.tmaps.tn/maps/static?size=800x500&style=streets&lang=fr&marker=36.7987,10.1713|0x2e47f0|A&marker=36.8528,10.3261|0xd92d20|B&path=weight:5|color:0x2e47f0|enc:<geometry>&api_key=YOUR_API_KEY
```

In a page, serve the retina version with `srcset`:

```html
<img src="https://api.tmaps.tn/maps/static?...&amp;api_key=YOUR_API_KEY"
     srcset="https://api.tmaps.tn/maps/static?...&amp;api_key=YOUR_API_KEY 1x, https://api.tmaps.tn/maps/static?...&amp;scale=2&amp;api_key=YOUR_API_KEY 2x"
     width="800" height="500" alt="Map of Sidi Bou Saïd" loading="lazy">
```

## Notes

- `size` is required, up to 1280 × 1280. `scale=2` for retina, `format` `png`, `webp` or `jpg`, `style` `streets`, `dark`, `terrain`, `sunny` or `classic`, `lang=ar` for Arabic labels.
- Frame the image with `center` + `zoom` (1 to 20), `bbox=minLng,minLat,maxLng,maxLat`, or nothing to fit the markers, paths and polygons (`padding`, 40 px by default).
- Repeat `marker` (up to 50), `path` and `polygon` (up to 20 each). `enc:` is always the last part of a `path`.
- `POST /maps/static` takes the same options as JSON (`markers`, `paths` with `polyline`, `coordinates` or `geojson`, `polygons`): use it for long routes.
- Errors are JSON: `{"error": {"code": "INVALID_REQUEST", "message": "size is required, e.g. size=800x500"}}`.
