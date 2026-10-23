# 06 · Static map image

Generate a PNG map image with a marker for emails, PDF reports or listing thumbnails.

**[Live demo](https://examples.tmaps.tn/06-static-map/)** · [Static Maps docs](https://www.tmaps.tn/documentation/api/static-maps)

## API request

```http
GET https://api.tmaps.tn/maps/static?center=36.8528,10.3261&zoom=15&size=800x500&style=streets&marker=36.8528,10.3261|red|A&api_key=YOUR_API_KEY
```

## Notes

- The image is a plain URL: put it in an `<img>` tag or an email template.
- Repeat `marker` for several pins (up to 20). Maximum size is 1280 × 1280.
