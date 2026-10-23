# 02 · Raster tiles with OpenLayers

Display a map of Tunisia with [OpenLayers](https://openlayers.org) and TMaps raster tiles. The current view is kept in the URL (`#zoom,lat,lng`) so it can be shared.

**[Live demo](https://examples.tmaps.tn/02-raster-openlayers/)** · [Raster tiles docs](https://www.tmaps.tn/documentation/api/raster-tiles)

```js
new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'https://tiles.tmaps.tn/r-tile/{z}/{x}/{y}?api_key=YOUR_API_KEY',
    maxZoom: 18,
  }),
});
```
