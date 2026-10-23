# 07 · Directions

Drag the A and B markers to get a route with distance, travel time and turn-by-turn instructions.

**[Live demo](https://examples.tmaps.tn/07-directions/)** · [Directions docs](https://www.tmaps.tn/documentation/api/routing/direction)

## API request

```http
GET https://api.tmaps.tn/routing/direction?from=36.7992,10.1709&to=36.8528,10.3261&profile=driving&geometry=geojson&steps=true&api_key=YOUR_API_KEY
```

## Notes

- `geometry=geojson` returns a LineString Leaflet draws directly, with no polyline decoder.
- Profiles: `driving`, `walking`, `cycling`, `truck`. Use POST with `waypoints` for more than two points.
