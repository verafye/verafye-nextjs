# Verafye Website — Next.js

AI-Native FRAML Intelligence Infrastructure for Mid-Market Financial Institutions.

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

### Vercel (recommended)
```bash
npx vercel
```

### Netlify
Upload the `/out` directory after running `npm run build`.

### GitHub Pages
```bash
npm run build
# Deploy the /out directory
```

## Form Integration

The Request Demo form uses [Formspree](https://formspree.io).
Replace `YOUR_FORM_ID` in `app/request-demo/page.js` with your actual Formspree form ID.

## Notes

- All original content, copy, and visual design preserved exactly
- Header and Footer extracted as shared React components
- Mobile menu uses React state (no vanilla JS DOM manipulation)
- SEO metadata (title, description, OG, Twitter) on every page
- Static export enabled for maximum deployment flexibility
