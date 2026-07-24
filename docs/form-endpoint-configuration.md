# Form Endpoint Configuration

**Date:** 2026-07-24
**Scope:** All contact and lead-capture forms in the Verafye Next.js static export

---

## Architecture Overview

This project uses `output: 'export'` in `next.config.js`. The build produces a fully static HTML/JS/CSS bundle with no server-side execution. There are no API routes available at runtime.

All form submissions post directly from the browser to external endpoints hosted on `dashboard.verafye.com`. The endpoint URLs are baked into the static JS bundle at build time via `NEXT_PUBLIC_` environment variables.

```
Browser → [form submit] → dashboard.verafye.com/api/...
```

---

## Environment Variables

Both variables are **required**. See `.env.local.example` for values.

| Variable | Purpose | Used by |
|---|---|---|
| `NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT` | Request Demo and Partner Enquiry submissions | `RequestDemoClient.js`, `BecomeAPartnerClient.js` |
| `NEXT_PUBLIC_VERAFYE_LEAD_CAPTURE_ENDPOINT` | PDF gated download lead capture | `PdfDownloadModal.js` |

### How to set them

**Local development:** Copy `.env.local.example` to `.env.local` and set both values.

**Production build:** Use `npm run build:prod`. This script sets both variables:
```bash
npm run build:prod
# Equivalent to:
# NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT=https://dashboard.verafye.com/api/external-email/send \
# NEXT_PUBLIC_VERAFYE_LEAD_CAPTURE_ENDPOINT=https://dashboard.verafye.com/api/lead-capture \
# next build
```

**Hosting provider:** Set both variables in your hosting platform's environment settings (Netlify, Cloudflare Pages, Vercel, etc.). The build must run with these values set — they cannot be injected at runtime after deployment.

---

## Endpoint Resolution

Endpoints are resolved via `app/lib/endpoints.js`:

```js
import { getRequestDemoEndpoint } from '@/app/lib/endpoints';
import { getLeadCaptureEndpoint } from '@/app/lib/endpoints';
```

These functions throw with a descriptive error if the variable is undefined. There are **no silent fallbacks** — a missing variable produces a visible error at form submission time rather than silently posting to the wrong endpoint.

---

## Form Matrix

| Form | Route | Component | Endpoint variable | Submit action |
|---|---|---|---|---|
| Request Demo | `/request-demo/` | `RequestDemoClient.js` | `REQUEST_DEMO_ENDPOINT` | POST to external endpoint |
| Risk Shadowing Review | `/risk-shadowing-review/request/` → redirects to `/request-demo/?intent=risk-shadowing-review` | `RequestDemoClient.js` | `REQUEST_DEMO_ENDPOINT` | POST to external endpoint |
| Partner Enquiry | `/become-a-partner/` | `BecomeAPartnerClient.js` | `REQUEST_DEMO_ENDPOINT` | POST to external endpoint |
| PDF Download Lead Capture | All `/resources/` pages | `PdfDownloadModal.js` | `LEAD_CAPTURE_ENDPOINT` | POST to external endpoint |

---

## Email Validation Policy

All forms accept any syntactically valid email address (format: `name@domain.tld`). There is no hard-blocking of consumer email domains (Gmail, Yahoo, Outlook, etc.).

The Request Demo form shows a non-blocking helper text: "Work email preferred for faster qualification."

Domain-based blocking was removed in the second closure pass per founder instruction. The backend may apply its own qualification logic without client-side restrictions.

---

## Dead API Route

`app/api/request-demo/route.js` exists in the source tree but is **not reachable** in static export deployments. Next.js excludes API routes from `output: 'export'` builds. The file is retained as a reference implementation for potential future server-rendered deployments. See the file header comments for details.

---

## CORS Requirement

The external endpoints at `dashboard.verafye.com` must be configured to allow cross-origin requests from `https://www.verafye.com`. Without CORS headers, form submissions will fail in production with a network error.

Required CORS configuration on `dashboard.verafye.com`:
```
Access-Control-Allow-Origin: https://www.verafye.com
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

See `docs/form-backend-requirements.md` for full backend specification.
