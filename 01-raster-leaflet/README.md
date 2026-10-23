# 01 · Raster tiles with Leaflet

Display a map of Tunisia with [Leaflet](https://leafletjs.com) and TMaps raster tiles (PNG, XYZ).

**[Live demo](https://tmaps-tn.github.io/tmaps-snippets/01-raster-leaflet/)** · [Raster tiles docs](https://www.tmaps.tn/documentation/api/raster-tiles)

```js
L.tileLayer('https://tiles.tmaps.tn/r-tile/{z}/{x}/{y}?api_key=YOUR_API_KEY', {
  maxZoom: 18,
  attribution: '© TMaps',
}).addTo(map);
```

- Zoom range: 0 → 18 (set `maxZoom: 18`)
- Tile size: 256 × 256
