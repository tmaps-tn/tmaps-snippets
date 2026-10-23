# 11 · Nearest driver

Compare real travel times from several drivers to a customer and dispatch the nearest one.

**[Live demo](https://examples.tmaps.tn/11-distance-matrix/)** · [Distance matrix docs](https://www.tmaps.tn/documentation/api/distance-matrix)

## API request

```http
POST https://api.tmaps.tn/distance-matrix?api_key=YOUR_API_KEY

{ "origins": [ …drivers ], "destinations": [ customer ], "profile": "driving" }
```

## Notes

- `durations[i][j]` is the time in seconds from `origins[i]` to `destinations[j]`.
- Up to 25 × 25 points per request.
