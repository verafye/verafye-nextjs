# Form Architecture — Static Export Notes

**Date:** 2026-07-24

## Overview

The Verafye website uses `output: 'export'` in `next.config.js`, producing a fully static HTML/CSS/JS build. This has direct implications for form submission.

## Request Demo Form

**Client file:** `app/request-demo/RequestDemoClient.js`

**Submission endpoint:** The client posts directly to the external endpoint defined by:

```
NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT
```

If the environment variable is not set, it defaults to:

```
https://dashboard.verafye.com/api/external-email/send
```

This external endpoint must:
- Accept `POST` with `Content-Type: application/json`
- Return a JSON body the client can inspect for success/failure
- Handle CORS for the production domain (`https://www.verafye.com`)

## Dead Code — `app/api/request-demo/route.js`

This API route is **unreachable** in static export deployments. `output: 'export'` excludes all API routes from the build. The file is retained as reference only — it documents the original proxy architecture and the upstream URL pattern.

**Action required before any future non-static deployment:** Review whether to restore this route as a production proxy, or delete it and rely solely on the direct external endpoint.

**No action required for current static deployment.**

## Become a Partner Form

**Client file:** `app/become-a-partner/BecomeAPartnerClient.js`

**Submission endpoint:** Uses the same `NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT` pattern. Confirm the external endpoint accepts the partner form payload shape (which differs from the request-demo payload).

## Environment Variable Checklist (deploy time)

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT` | Yes | External form submission URL |

Note: `NEXT_PUBLIC_` prefix is required so the variable is available in client-side JS after static compilation.
