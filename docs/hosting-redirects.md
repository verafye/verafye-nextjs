# Hosting Redirects

**Date:** 2026-07-24
**Scope:** Permanent (301) URL redirects required for the Verafye static deployment

---

## Required Redirects

| From | To | Status |
|---|---|---|
| `/industries/ecommerce-retail/` | `/industries/marketplaces/` | 301 Permanent |
| `/risk-shadowing-review/request/` | `/request-demo/?intent=risk-shadowing-review` | 301 Permanent |
| `/solutions/mule-account-detection/` | `/use-cases/mule-network-detection/` | 301 Permanent |

---

## Implementation

### Option A — `public/_redirects` (Netlify / Cloudflare Pages)

The file `public/_redirects` in this repository contains the redirect rules in Netlify/Cloudflare Pages syntax. When deploying to either platform, this file is automatically served from the site root and the hosting platform processes it before serving pages.

```
/industries/ecommerce-retail/         /industries/marketplaces/                    301
/industries/ecommerce-retail          /industries/marketplaces/                    301
/risk-shadowing-review/request/       /request-demo/?intent=risk-shadowing-review  301
/risk-shadowing-review/request        /request-demo/?intent=risk-shadowing-review  301
/solutions/mule-account-detection/    /use-cases/mule-network-detection/           301
/solutions/mule-account-detection     /use-cases/mule-network-detection/           301
```

No additional configuration is required on Netlify or Cloudflare Pages — the file is picked up automatically.

### Option B — Vercel (`vercel.json`)

If deploying to Vercel, add a `vercel.json` at the repository root:

```json
{
  "redirects": [
    {
      "source": "/industries/ecommerce-retail/",
      "destination": "/industries/marketplaces/",
      "permanent": true
    },
    {
      "source": "/risk-shadowing-review/request/",
      "destination": "/request-demo/?intent=risk-shadowing-review",
      "permanent": true
    },
    {
      "source": "/solutions/mule-account-detection/",
      "destination": "/use-cases/mule-network-detection/",
      "permanent": true
    }
  ]
}
```

### Option C — AWS CloudFront / S3

Configure CloudFront Functions or a Lambda@Edge handler to return 301 responses for the above source paths before the request reaches the S3 origin. Alternatively, use S3 Static Website Hosting redirect rules in the bucket configuration.

### Option D — Other static hosts (GitHub Pages, etc.)

GitHub Pages does not support server-side redirects for static sites. The fallback pages at these routes will handle client-side redirection via `<meta http-equiv="refresh">` and `window.location.replace()`. This is not a true 301 and does not pass link equity — use a host that supports `_redirects` or equivalent if possible.

---

## Fallback Pages

Both redirect source paths have static fallback pages that provide client-side redirection for hosting environments that do not process `_redirects`:

| Route | File | Behaviour |
|---|---|---|
| `/industries/ecommerce-retail/` | `app/industries/ecommerce-retail/page.js` | `<meta http-equiv="refresh">` + `window.location.replace()` to `/industries/marketplaces/` |
| `/risk-shadowing-review/request/` | `app/risk-shadowing-review/request/page.js` | Client-side redirect to `/request-demo/?intent=risk-shadowing-review` |
| `/solutions/mule-account-detection/` | `app/solutions/mule-account-detection/page.js` | `<meta http-equiv="refresh">` to `/use-cases/mule-network-detection/`, canonical pointing to destination, `robots: noindex` |

Both fallback pages have:
- `robots: { index: false, follow: true }` — crawlers will not index, but will follow outbound links
- `alternates: { canonical: <destination URL> }` — signals to search engines that the canonical version is the destination
- Titles clearly indicating the page has moved (not the destination title — do not change these)

These pages are excluded from `public/sitemap.xml`.

---

## Sitemap

Neither redirect source route appears in `public/sitemap.xml`. Only the destination routes are listed:
- `/industries/marketplaces/` — in sitemap
- `/request-demo/` — in sitemap

---

## Testing Redirects

After deployment, verify with:

```bash
# Should return 301 with Location: /industries/marketplaces/
curl -I https://www.verafye.com/industries/ecommerce-retail/

# Should return 301 with Location: /request-demo/?intent=risk-shadowing-review
curl -I https://www.verafye.com/risk-shadowing-review/request/

# Should return 301 with Location: /use-cases/mule-network-detection/
curl -I https://www.verafye.com/solutions/mule-account-detection/
```

If the hosting platform is processing `_redirects`, both should return `HTTP/2 301` before the fallback page HTML is served.

---

## Hosting Provider Detection

No hosting provider configuration files (`netlify.toml`, `vercel.json`, `cloudflare-pages.json`, `.firebaserc`) were found in the repository at the time of writing. The deployment target is unknown. Confirm with the founder before deployment and implement Option A, B, C, or D accordingly.

The `public/_redirects` file covers Netlify and Cloudflare Pages (the two most common static hosts) and adds no overhead for other platforms (unrecognised files are simply served as static assets and not processed as redirects).
