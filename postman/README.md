# TMaps API – Postman collection

Ready-to-run Postman collection for the [TMaps](https://www.tmaps.tn) APIs: map tiles, forward geocoding, reverse geocoding and nearby search for Tunisia.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/59164577-39c61a9a-5dec-4a19-bfb0-78e040babbe5?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D59164577-39c61a9a-5dec-4a19-bfb0-78e040babbe5%26entityType%3Dcollection%26workspaceId%3Dd930590d-cd34-4179-bf0c-14ef875c22af)

Public workspace: https://www.postman.com/tmaps-tn/tmaps-api

## Import

The quickest way is the **Run in Postman** button above: it forks the collection and environment into your workspace. To import the files instead:

1. In Postman, click **Import** and drop both files:
   - [`TMaps-API.postman_collection.json`](TMaps-API.postman_collection.json)
   - [`TMaps.postman_environment.json`](TMaps.postman_environment.json)
2. Select the **TMaps** environment and set `api_key` to your key from the [TMaps console](https://app.tmaps.tn).
3. Run **Geocoding → Forward geocoding**. It saves the result's coordinates in the `lat` / `lng` collection variables used by the other requests.

You can also import straight from GitHub with **Import → Link** and the raw URL of the collection:

```
https://raw.githubusercontent.com/tmaps-tn/tmaps-snippets/main/postman/TMaps-API.postman_collection.json
```

## What's inside

| Folder | Request | Endpoint |
|--------|---------|----------|
| Maps | Raster tile (PNG) | `GET https://tiles.tmaps.tn/r-tile/{z}/{x}/{y}` |
| Maps | Vector style (MapLibre) | `GET https://tiles.tmaps.tn/v-tile/{style}.json` |
| Geocoding | Forward geocoding | `GET https://api.tmaps.tn/geocoding/forward` |
| Geocoding | Reverse geocoding | `GET https://api.tmaps.tn/geocoding/reverse` |
| Geocoding | Nearby search | `GET https://api.tmaps.tn/geocoding/nearby` |

Each request has its parameters documented, saved example responses and tests. Optional parameters are included but disabled: tick them to try them.

## Run from the command line

```bash
npx newman run postman/TMaps-API.postman_collection.json \
  -e postman/TMaps.postman_environment.json \
  --env-var "api_key=$TMAPS_API_KEY"
```

## About the API key

The key is sent in the `api_key` query parameter, set once on the collection and inherited by every request. Postman calls the API from a server context (no `Origin` header), so the key's authorized domains don't apply. For backend use, create a dedicated key with no authorized domain: it works from your servers and is rejected in browsers if it ever leaks.

Directions, isochrones, route optimization, distance matrix and static maps will be added when these endpoints are available.
