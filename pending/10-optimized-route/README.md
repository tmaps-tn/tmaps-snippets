# 10 · Optimized delivery route

Find the visiting order that minimizes the total time or distance for a driver with several stops.

**[Live demo](https://examples.tmaps.tn/10-optimized-route/)** · [Optimized routing docs](https://www.tmaps.tn/documentation/api/routing/optimized)

## API request

```http
POST https://api.tmaps.tn/routing/optimized?api_key=YOUR_API_KEY

{ "origin": { "lat": 36.8355, "lng": 10.2261 }, "waypoints": [ … ], "optimize": "duration", "roundtrip": true }
```

## Notes

- `order` lists the zero-based waypoint indexes in the best order: `order.map(i => waypoints[i])`.
- Up to 50 waypoints, single vehicle, no time windows in this version.
