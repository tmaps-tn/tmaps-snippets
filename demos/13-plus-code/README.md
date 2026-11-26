# 13 · Plus Code from a map click

Click anywhere on the map to get the Plus Code of that point, a short address such as `8F8GR54J+JJ` that works in Google Maps. The cell the code covers is drawn on the map.

**[Live demo](https://examples.tmaps.tn/13-plus-code/)** · [API documentation](https://www.tmaps.tn/documentation)

## API request

```http
GET https://api.tmaps.tn/geocoding/pluscode?lat=36.8065&lng=10.1815&zoom=18&api_key=YOUR_API_KEY
```

```json
{ "lat": 36.8065, "lng": 10.1815, "plus_code": "8F8GR54J+JJ" }
```

## Notes

- `zoom` sets the precision: up to 14 gives 8 digits (about 275 m), up to 18 gives 10 digits (about 14 m), above 18 gives 11 digits (about 3 m). Without `zoom` the code has 14 characters.
- Tile mode: `?zoom=14&x=8655&y=6389` returns the 10 digit code of the tile center, with its `lat` and `lng`.
- The cell rectangle is decoded from the code in the page (no extra library): 10 digits are a 0.000125° × 0.000125° cell, each extra digit splits it into 5 rows × 4 columns.
- Errors: `400` with `{"error": "lat must be a number"}` for a bad parameter, `401` when the key is missing.
