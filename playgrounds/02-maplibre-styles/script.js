// TMaps: maps and geocoding API for Tunisia. https://www.tmaps.tn
// 1. Create a free API key on https://app.tmaps.tn
// 2. Add cdpn.io and codepen.io to its authorized domains
// 3. Paste it below
const API_KEY = 'YOUR_API_KEY';

const STYLES = ['streets', 'dark', 'terrain', 'sunny'];
const styleUrl = (name) => `https://tiles.tmaps.tn/v-tile/${name}.json?api_key=${API_KEY}`;

const map = new maplibregl.Map({
  container: 'map',
  style: styleUrl('streets'),
  center: [10.1815, 36.8002], // Tunis, as [lng, lat]
  zoom: 12,
  maxZoom: 18,
});
map.addControl(new maplibregl.NavigationControl(), 'top-right');

// setStyle() swaps the style without recreating the map
const bar = document.getElementById('styles');
for (const name of STYLES) {
  const button = document.createElement('button');
  button.textContent = name;
  button.setAttribute('aria-pressed', name === 'streets');
  button.addEventListener('click', () => {
    map.setStyle(styleUrl(name));
    bar.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', b === button));
  });
  bar.append(button);
}

// Tilt over the Medina of Tunis
document.getElementById('tilt').addEventListener('change', (event) => {
  map.easeTo(event.target.checked
    ? { center: [10.179, 36.799], zoom: 15.5, pitch: 60, bearing: -25 }
    : { center: [10.1815, 36.8002], zoom: 12, pitch: 0, bearing: 0 });
});
