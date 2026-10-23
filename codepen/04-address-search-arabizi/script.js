// TMaps: maps and geocoding API for Tunisia. https://www.tmaps.tn
// 1. Create a free API key on https://app.tmaps.tn
// 2. Add cdpn.io and codepen.io to its authorized domains
// 3. Paste it below
const API_KEY = 'YOUR_API_KEY';

const map = L.map('map').setView([36.8002, 10.1815], 12); // Tunis
L.tileLayer(`https://tiles.tmaps.tn/r-tile/{z}/{x}/{y}?api_key=${API_KEY}`, {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.tmaps.tn">TMaps</a>',
}).addTo(map);

const input = document.getElementById('q');
const list = document.getElementById('results');
const marker = L.marker([0, 0]);
let timer;
let controller;

// Tunisian dialect words and Arabizi digits, rewritten the way addresses are spelled
const DIALECT = {
  nahj: 'rue', nhej: 'rue', zan9a: 'impasse', zan9et: 'impasse', zanket: 'impasse',
  chare3: 'avenue', chara3: 'avenue', hay: 'cité', '7ay': 'cité',
};
const ARABIZI = { 3: 'a', 5: 'kh', 7: 'h', 9: 'k' };

function normalizeTunisian(text) {
  return text.toLowerCase().split(/\s+/).map((word) => {
    if (DIALECT[word]) return DIALECT[word];
    // Leave numbers (4014) and road codes (rn9, c27) alone
    if (!/[a-z]/.test(word) || /^[a-z]{1,2}\d+$/.test(word)) return word;
    return word.replace(/3a/g, 'a').replace(/[3579]/g, (digit) => ARABIZI[digit]);
  }).join(' ');
}

async function geocode(q, signal) {
  const center = map.getCenter();
  const url = new URL('https://api.tmaps.tn/geocoding/forward');
  url.search = new URLSearchParams({
    q,
    country: 'TN',
    limit: 5,
    lang: document.getElementById('lang').value,
    proximity: `${center.lat.toFixed(5)},${center.lng.toFixed(5)}`,
    api_key: API_KEY,
  });
  const res = await fetch(url, { signal });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`${res.status}: ${data.error ?? res.statusText}`);
  return data.results;
}

// Search the raw input and its normalized version in parallel, then merge without duplicates
async function search() {
  const q = input.value.trim();
  if (q.length < 3) return;
  controller?.abort();
  controller = new AbortController();
  const normalized = normalizeTunisian(q);
  const queries = normalized === q.toLowerCase() ? [q] : [q, normalized];
  try {
    const lists = await Promise.all(queries.map((text) => geocode(text, controller.signal)));
    const seen = new Set();
    render(lists.reverse().flat().filter((r) => !seen.has(r.formatted) && seen.add(r.formatted)).slice(0, 5));
  } catch (error) {
    if (error.name !== 'AbortError') list.innerHTML = `<li>${error.message}</li>`;
  }
}

function render(results) {
  list.innerHTML = results.length ? '' : '<li>No result.</li>';
  results.forEach((result, index) => {
    const { commune, delegation, governorate } = result.components ?? {};
    const li = document.createElement('li');
    li.dir = 'auto'; // Arabic results are shown right to left
    li.textContent = result.formatted;
    const meta = document.createElement('small');
    meta.textContent = ` · ${[commune, delegation, governorate].filter(Boolean).join(', ')}`;
    li.append(document.createElement('br'), meta);
    li.addEventListener('click', () => select(result, li));
    list.append(li);
    if (index === 0) select(result, li);
  });
}

function select(result, li) {
  list.querySelectorAll('li').forEach((item) => item.classList.toggle('active', item === li));
  const { lat, lng } = result.geometry.location;
  marker.setLatLng([lat, lng]).bindPopup(result.formatted).addTo(map).openPopup();
  map.setView([lat, lng], 16);
}

input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(search, 300); });
document.getElementById('lang').addEventListener('change', search);
document.getElementById('form').addEventListener('submit', (event) => { event.preventDefault(); search(); });
search();
