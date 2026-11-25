# Pending examples

These examples are written but not published yet: the API endpoints they use are not available in production.

| Example | Endpoint | Status |
|---------|----------|--------|
| 06-static-map | `GET` / `POST /maps/static` | 404: implemented, not deployed yet |

To publish one, move its folder back to `demos/` and add it to `demos/index.html`, `demos/sitemap.xml`, `demos/llms.txt` and the README table.

The **Static maps** folder of the Postman collection already targets `/maps/static`: its requests fail until the endpoint is deployed. When it is, remove the "not live yet" notes from that folder (its description and each request) and from `postman/README.md`.
