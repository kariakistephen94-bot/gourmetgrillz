# Gourmet Grillz

A responsive restaurant website built with Next.js App Router, TypeScript, Tailwind CSS and Lucide icons.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production verification: `npm run build`.

## Content

- All 11 supplied images were inspected visually. `data/image-inventory.json` records each original filename, observed content, semantic filename and intended use.
- Original files remain untouched. Semantically named assets are in `public/images/gourmet-grillz/`; Next Image provides responsive optimization.
- `data/menu.ts` contains descriptive food labels based on visible content, not a verified commercial menu. Pricing and availability are demo-only until confirmed by the restaurant.
- `lib/business.ts` centralizes the supplied phone/address and contact links.
- The provided logo is used as-is. Phone numbers printed on drink cups differ from the brief; all contact links use the explicitly supplied 0705 890 5409.
- Google rating is supplied by the brief. No reviews or review count were invented. Set `googleListingUrl` once a verified listing URL is available to enable the listing link.
- Directions use a Google Maps address query; the decorative neighbourhood card is clearly marked as an illustration, not an exact map.
- No stock or generated imagery, backend, payments, authentication or invented opening hours.

## Ordering preview

WhatsApp ordering has been replaced by `/cart`, `/checkout` and `/track-order`.

- A persistent browser cart supports quantities, removal and menu filtering.
- Checkout collects delivery or pickup details and validates Nigerian phone numbers.
- `lib/orders.ts` contains **dummy** bank details, menu prices in NGN and a ₦2,000 demo delivery fee. Pickup is free. These values are not the restaurant's confirmed prices.
- Payment declaration is a simulation, not payment verification. Submission saves a demo order locally and routes to tracking.
- Tracking shows the saved order ID, summary and delivery details. It deliberately remains awaiting payment verification; it does not fabricate preparation or delivery progress.
- Orders and delivery information stay in this browser's local storage. Clear them using “Clear local history” on the tracking page. No data is sent to the restaurant.
- Before launch, replace local storage with a server-side order repository, validate prices server-side, add verified banking details, and connect staff status/payment verification to the tracking page. Never trust client-calculated totals or a customer's payment declaration as proof of payment.
