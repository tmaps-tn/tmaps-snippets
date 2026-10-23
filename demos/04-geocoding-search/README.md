# 04 · Address search

Type an address, a street or a place in Tunisia and get its GPS coordinates, a confidence score and the commune, delegation and governorate.

**[Live demo](https://examples.tmaps.tn/04-geocoding-search/)** · [Forward geocoding docs](https://www.tmaps.tn/documentation/api/geocoding/forward)

## API request

```http
GET https://api.tmaps.tn/geocoding/forward?q=Avenue%20Habib%20Bourguiba%2C%20Tunis&country=TN&limit=5&api_key=YOUR_API_KEY
```

## Notes

- Results update as you type (300 ms debounce) and favour places near the map center with `proximity`.
- Old requests are cancelled with `AbortController` so they never overwrite newer results.
- Only save coordinates when `confidence` is at least 0.85.
- The point is in `geometry.location` (`lat`, `lng`).
- Arabic: `lang=ar` returns addresses in Arabic; results use `dir="auto"` to display right-to-left.
- Tunisian Arabizi and dialect (`9asr said`, `3in zaghouan`, `nahj`, `zan9a`, `chare3`) are normalized on the client and searched in parallel with the raw text.
