// Serveur Node.js des démos TMaps : sert le dossier demos/ et génère
// /shared/config.js à partir de la variable d'environnement TMAPS_API_KEY.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = process.env.PORT || 8080;
const DEMOS_DIR = resolve(process.env.DEMOS_DIR || fileURLToPath(new URL('../../demos', import.meta.url)));
const CONFIG_JS = `window.TMAPS_API_KEY = ${JSON.stringify(process.env.TMAPS_API_KEY || 'YOUR_API_KEY')};\n`;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');

  if (pathname === '/shared/config.js') {
    res.writeHead(200, { 'Content-Type': TYPES['.js'], 'Cache-Control': 'no-store' });
    return res.end(CONFIG_JS);
  }

  try {
    // Le chemin résolu doit rester dans DEMOS_DIR
    let file = join(DEMOS_DIR, decodeURIComponent(pathname));
    if (file !== DEMOS_DIR && !file.startsWith(DEMOS_DIR + sep)) throw new Error('outside DEMOS_DIR');

    if ((await stat(file)).isDirectory()) {
      // Redirige /01-demo vers /01-demo/ pour que les chemins relatifs (../shared) fonctionnent
      if (!pathname.endsWith('/')) {
        res.writeHead(301, { Location: `${pathname}/` });
        return res.end();
      }
      file = join(file, 'index.html');
    }

    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': TYPES['.txt'] });
    res.end('Not found');
  }
}).listen(PORT, () => console.log(`TMaps demos (Node.js) listening on :${PORT}, serving ${DEMOS_DIR}`));
