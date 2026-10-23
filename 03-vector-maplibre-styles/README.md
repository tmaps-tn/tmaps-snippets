# 03 · Vector tiles with MapLibre GL (4 styles)

Vector map with [MapLibre GL JS](https://maplibre.org) and the four TMaps styles: `streets`, `dark`, `terrain`, `sunny`. Styles are switched live with `map.setStyle()`.

**[Live demo](https://tmaps-tn.github.io/tmaps-snippets/03-vector-maplibre-styles/)** · [Vector tiles docs](https://www.tmaps.tn/documentation/api/vector-tiles)

```js
const map = new maplibregl.Map({
  container: 'map',
  style: 'https://tiles.tmaps.tn/v-tile/streets.json?api_key=YOUR_API_KEY',
  center: [10.1815, 36.8002],
  zoom: 12,
});
```
