# 05 · Address from a map click

Click anywhere on the map to get the postal address, commune, delegation and governorate of that point.

**[Live demo](https://examples.tmaps.tn/05-reverse-geocoding/)** · [Reverse geocoding docs](https://www.tmaps.tn/documentation/api/geocoding/reverse)

## API request

```http
GET https://api.tmaps.tn/geocoding/reverse?lat=36.8002&lng=10.1815&lang=fr&api_key=YOUR_API_KEY
```

## Notes

- The API snaps to the nearest street or building; `distance` tells you how far it is from the clicked point.
- A `404` means no address was found near the point.
- The point is in `geometry.location` (`lat`, `lng`).
