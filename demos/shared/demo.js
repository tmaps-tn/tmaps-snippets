// Petits utilitaires d'interface communs aux démos.
// Rien ici n'est nécessaire pour utiliser l'API TMaps : les appels API sont
// écrits en clair dans chaque démo.
window.demo = {
  // Affiche la requête envoyée, clé masquée, dans le bloc « API request »
  showRequest(method, url, body) {
    const shown = String(url).replace(/api_key=[^&]+/, 'api_key=YOUR_API_KEY');
    let text = `${method} ${shown}`;
    if (body) text += `\nContent-Type: application/json\n\n${JSON.stringify(body, null, 2)}`;
    document.getElementById('request').textContent = text;
  },

  showError(error) {
    // Sans en-tête CORS, le navigateur ne laisse pas lire la réponse : fetch lève une TypeError
    const keyMissing = !window.TMAPS_API_KEY || window.TMAPS_API_KEY === 'YOUR_API_KEY';
    const apiFailure = error instanceof TypeError || /^40[13]\b/.test(error.message);
    let message = error.message;
    if (apiFailure && keyMissing) {
      message = 'No API key configured. Set TMAPS_API_KEY (see shared/config.js) to run this demo.';
    } else if (error instanceof TypeError) {
      message = 'Request blocked by the browser. Check your API key and that this domain is in its authorized domains.';
    }
    document.getElementById('error').textContent = message;
  },

  clearError() {
    document.getElementById('error').textContent = '';
  },

  formatDistance(meters) {
    return meters < 1000 ? `${Math.round(meters)} m` : `${(meters / 1000).toFixed(1)} km`;
  },

  formatDuration(seconds) {
    const minutes = Math.round(seconds / 60);
    return minutes < 60 ? `${minutes} min` : `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, '0')}`;
  },

  // Marqueur Leaflet coloré avec un libellé court (A, B, 1, 2…)
  pin(label = '', color = '#2e47f0') {
    return L.divIcon({
      className: '',
      html: `<div class="pin" style="--pin:${color}"><span>${label}</span></div>`,
      iconSize: [26, 26],
      iconAnchor: [13, 26],
      popupAnchor: [0, -24],
    });
  },

  escape(text) {
    return String(text ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  },
};
