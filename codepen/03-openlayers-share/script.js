// TMaps: maps and geocoding API for Tunisia. https://www.tmaps.tn
// 1. Create a free API key on https://app.tmaps.tn
// 2. Add cdpn.io and codepen.io to its authorized domains
// 3. Paste it below
const API_KEY = 'YOUR_API_KEY';

const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: `https://tiles.tmaps.tn/r-tile/{z}/{x}/{y}?api_key=${API_KEY}`,
        maxZoom: 18,
        attributions: '&copy; <a href="https://www.tmaps.tn">TMaps</a>',
      }),
    }),
  ],
  // OpenLayers works in Web Mercator: convert [lng, lat] with fromLonLat
  view: new ol.View({ center: ol.proj.fromLonLat([10.6369, 35.8256]), zoom: 13, maxZoom: 18 }), // Sousse
});

// Build a link to the live demo that reopens exactly this view (#zoom,lat,lng)
const share = document.getElementById('share');
map.on('moveend', () => {
  const view = map.getView();
  const [lng, lat] = ol.proj.toLonLat(view.getCenter());
  share.href = `https://examples.tmaps.tn/02-raster-openlayers/#${view.getZoom().toFixed(2)},${lat.toFixed(5)},${lng.toFixed(5)}`;
  share.textContent = share.href;
});
