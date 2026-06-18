# Webgen Preview App

This is the public preview renderer that can be deployed separately to Vercel.

The local/admin project creates and stores generated website JSON in Supabase.
This preview app only needs a preview id:

```text
https://your-preview-domain.vercel.app/p/<website_generation_id>
```

## Image strategy

The renderer chooses related images in this order:

1. `website_generations.content.media.heroImage`
2. `website_generations.assets` item with `type: "hero"` or `role: "hero"`
3. Category fallback image from the preview app

Gallery and service images follow the same pattern:

```json
{
  "content": {
    "media": {
      "heroImage": "https://...",
      "gallery": ["https://...", "https://..."],
      "serviceImages": ["https://..."]
    },
    "services": [
      {
        "title": "Signature Coffee Bar",
        "description": "Espresso, pour-over, and seasonal drinks.",
        "imageUrl": "https://..."
      }
    ]
  },
  "assets": [
    {
      "type": "hero",
      "url": "https://...",
      "source": "google_places_photo"
    }
  ]
}
```

For production generation, prefer images in this order:

1. Business-owned website images.
2. Google Places photos.
3. Social profile images.
4. Category fallback images.

## Section and theme contract

Generated websites can be fully controlled with high-level design tokens and an
ordered section list:

```json
{
  "content": {
    "design": {
      "variant": "premium-cafe",
      "tokens": {
        "color": {
          "background": "#fbf3e5",
          "ink": "#211911",
          "muted": "#746658",
          "primary": "#6f4a24",
          "deep": "#24160d",
          "accent": "#c4863a",
          "panel": "#fffaf1",
          "line": "#e4d4bd",
          "warm": "#efe0c6"
        },
        "typography": {
          "bodyFont": "Arial, Helvetica, sans-serif",
          "displayFont": "Georgia, 'Times New Roman', serif"
        },
        "radius": {
          "card": "8px",
          "button": "8px"
        },
        "layout": {
          "maxWidth": "1140px"
        }
      }
    },
    "sections": [
      {
        "type": "hero",
        "props": {
          "businessName": "Urban Leaf Cafe",
          "headline": "Urban Leaf Cafe",
          "subheadline": "Small-batch coffee and plated brunch.",
          "primaryCta": "Reserve a table",
          "secondaryCta": "Explore the menu",
          "phone": "+91 99999 99999"
        }
      },
      {
        "type": "services",
        "props": {
          "title": "What customers can book or request",
          "items": [
            {
              "title": "Signature Coffee Bar",
              "description": "Espresso, pour-over, cold brew.",
              "imageUrl": "https://..."
            }
          ]
        }
      }
    ]
  }
}
```

Supported section types:

- `hero`
- `stats`
- `trust-bar`
- `info-strip`
- `story`
- `signature-menu`
- `services`
- `offer`
- `pricing`
- `packages`
- `catalog`
- `team`
- `booking-cta`
- `lead-form`
- `schedule`
- `before-after`
- `process`
- `facilities`
- `events`
- `staff-picks`
- `membership`
- `insurance-payments`
- `locations`
- `cta-band`
- `gallery`
- `testimonials`
- `faq`
- `contact`
- `footer`
- `sticky-mobile-action`

If `content.sections` is missing, the renderer falls back to the older structured
fields like `hero`, `about`, `services`, `testimonials`, `faq`, and `contact`.

## Environment

Set these in Vercel project settings:

```env
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

`SUPABASE_SERVICE_ROLE_KEY` is used only on the server to fetch preview content
from Supabase. Do not expose it in client components.

## Local development

```bash
npm install
npm run dev
```

## Section review with Storybook

Run Storybook to review each section independently:

```bash
npm run storybook
```

Open:

```text
http://localhost:6006
```

Stories are grouped under `Preview Sections/All Sections` and include:

- each individual section
- a full-page composition using the same ordered section list
