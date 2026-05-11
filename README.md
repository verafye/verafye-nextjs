# Verafye Website — Next.js

The Intelligent Investigation Layer for Regulated Financial Platforms.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Plain CSS (globals.css — preserved from static site)
- **Fonts**: Montserrat (body), Avenir LT Pro (headings), Nunito Sans (fallback)
- **Export**: Static site generation (`output: 'export'`)
- **Deployment**: Vercel, Netlify, Cloudflare Pages, or any static host

## Project Structure

```
verafye-nextjs/
├── app/
│   ├── layout.js              # Shared layout (Header + Footer)
│   ├── globals.css             # All styles (preserved from static site)
│   ├── page.js                 # Homepage (/)
│   ├── platform/page.js        # /platform
│   ├── capabilities/page.js    # /capabilities
│   ├── customers/page.js       # /customers
│   ├── use-cases/page.js       # /use-cases
│   ├── resources/page.js       # /resources
│   ├── request-demo/page.js    # /request-demo (client component)
│   ├── company/page.js         # /company
│   ├── privacy-policy/page.js  # /privacy-policy
│   └── terms/page.js           # /terms
├── components/
│   ├── Header.js               # Sticky header with mobile menu
│   ├── Footer.js               # Footer with nav links
│   └── Icons.js                # SVG icon components
├── public/
│   └── images/
│       ├── verafye-logo-blue.png
│       └── verafye-logo-white.png
├── package.json
├── next.config.js
└── jsconfig.json
```

## Routes

| Route             | Page                    |
|-------------------|-------------------------|
| `/`               | Homepage                |
| `/platform`       | Platform                |
| `/capabilities`   | Capabilities            |
| `/customers`      | Customers               |
| `/use-cases`      | Use Cases               |
| `/resources`      | Resources               |
| `/request-demo`   | Request Demo (form)     |
| `/company`        | Company                 |
| `/privacy-policy` | Privacy Policy          |
| `/terms`          | Terms of Service        |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# The static export will be in the /out directory
```

## Deployment

### Static Hosting
```bash
npm run build
# Deploy the /out directory
```

## Form Integration

The Request Demo form submits to `NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT` when that public env var is set. Otherwise it falls back to [`/api/request-demo`](app/api/request-demo/route.js), which proxies to the upstream email API.

The server-side proxy defaults to `https://dashboard.verafye.com/api/external-email/send` in production. You can override that with `VERAFYE_REQUEST_DEMO_API_URL` if needed.

When you deploy the static `/out` build, Next.js does not export `/api/request-demo`.

For S3/CloudFront or other static hosts without a reverse proxy, build with:

```bash
NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT=https://dashboard.verafye.com/api/external-email/send npm run build
```

As verified on March 24, 2026, `https://www.verafye.com/api/request-demo` returns `404` from AmazonS3/CloudFront, while the upstream email API responds to CORS preflight with `Access-Control-Allow-Origin: *`. On that host, a public endpoint override is required unless you add a real reverse proxy in front of `/api/request-demo`.

## Notes

- All original content, copy, and visual design preserved exactly
- Header and Footer extracted as shared React components
- Mobile menu uses React state (no vanilla JS DOM manipulation)
- SEO metadata (title, description, OG, Twitter) on every page
- Request Demo can use a public endpoint override in static deployments
