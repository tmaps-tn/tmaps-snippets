# 08 · Nearby places

Find pharmacies, hospitals, restaurants, banks or fuel stations around a point, sorted by distance.

**[Live demo](https://examples.tmaps.tn/08-nearby-search/)** · [Nearby search docs](https://www.tmaps.tn/documentation/api/geocoding/nearby)

## API request

```http
GET https://api.tmaps.tn/geocoding/nearby?lat=36.8002&lng=10.1815&radius=1500&categories=pharmacy&api_key=YOUR_API_KEY
```

## Notes

- Several categories separated by commas are combined with OR.
- Radius up to 10,000 m. `phone` and `opening_hours` are optional fields.
