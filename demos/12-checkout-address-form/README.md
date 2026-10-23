# 12 · Checkout address form

A delivery address form for e-commerce: autocomplete, auto-filled commune, delegation, governorate and postcode, and a draggable pin to confirm the exact location.

**[Live demo](https://examples.tmaps.tn/12-checkout-address-form/)** · [Forward + reverse geocoding docs](https://www.tmaps.tn/documentation/api/geocoding/forward)

## API request

```http
GET https://api.tmaps.tn/geocoding/forward?q=…&country=TN&limit=5&api_key=YOUR_API_KEY
GET https://api.tmaps.tn/geocoding/reverse?lat=…&lng=…&api_key=YOUR_API_KEY
```

## Notes

- Picking a suggestion fills the form from `components`.
- Dragging the pin calls reverse geocoding for the exact delivery point.
- Below a `confidence` of 0.85, the customer is asked to check the pin.
