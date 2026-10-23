// TMaps: maps and geocoding API for Tunisia. https://www.tmaps.tn
// 1. Create a free API key on https://app.tmaps.tn
// 2. Add cdpn.io and codepen.io to its authorized domains
// 3. Paste it below
const API_KEY = 'YOUR_API_KEY';

const map = L.map('map').setView([36.7985, 10.1700], 15); // Medina of Tunis

L.tileLayer(`https://tiles.tmaps.tn/r-tile/{z}/{x}/{y}?api_key=${API_KEY}`, {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.tmaps.tn">TMaps</a>',
}).addTo(map);

L.marker([36.7976, 10.1712])
  .addTo(map)
  .bindPopup('<b>Zitouna Mosque</b><br>Medina of Tunis')
  .openPopup();
