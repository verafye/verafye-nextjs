# Form Backend Requirements

**Date:** 2026-07-24
**Audience:** Backend / infrastructure team responsible for `dashboard.verafye.com`

---

## Overview

The Verafye website is a static export. All form submissions are made directly from the browser to external API endpoints. This document specifies what the backend must support.

---

## Endpoints Required

### 1. Request Demo / Partner Enquiry Endpoint

| Field | Value |
|---|---|
| **URL** | `NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT` (configured in build) |
| **Default production value** | `https://dashboard.verafye.com/api/external-email/send` |
| **Method** | POST |
| **Content-Type** | `application/json` |
| **Called by** | `RequestDemoClient.js` (Request Demo form), `BecomeAPartnerClient.js` (Partner Enquiry form) |

### 2. Lead Capture Endpoint

| Field | Value |
|---|---|
| **URL** | `NEXT_PUBLIC_VERAFYE_LEAD_CAPTURE_ENDPOINT` (configured in build) |
| **Default production value** | `https://dashboard.verafye.com/api/lead-capture` |
| **Method** | POST |
| **Content-Type** | `application/json` |
| **Called by** | `PdfDownloadModal.js` (PDF gated download form) |

---

## CORS Requirements

Both endpoints must return CORS headers that allow requests from the production domain:

```
Access-Control-Allow-Origin: https://www.verafye.com
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Accept
```

For staging/dev, also allow:
```
Access-Control-Allow-Origin: https://staging.verafye.com
```

Without these headers, all form submissions fail in production with a CORS network error (no user-visible error message from the endpoint — the browser blocks the request before it completes).

---

## Request Payload — Request Demo

The `RequestDemoClient.js` sends a JSON body with the following structure. Exact field names depend on the `buildRequestDemoPayload` function in the client — confirm the current payload by inspecting the network request during a test submission.

Key fields expected by the upstream email service:
- `clientName` — company name
- `emailAddress` — submitter email
- `subject` — inquiry type (e.g. "Request Demo" or "Risk Shadowing Review")
- `message` — formatted message body including all form fields

---

## Request Payload — Lead Capture

The `PdfDownloadModal.js` sends a JSON body including:
- Submitter name and email
- Resource title, category, and article slug
- UTM attribution fields
- Download timestamp

---

## Expected Response

The client expects one of:
- `200 OK` with `{ "status": 1 }` or `{ "success": true }` — treated as success
- `200 OK` with no body — treated as success
- Any non-2xx status — treated as error; generic error message shown to user
- Network failure or CORS block — treated as error; generic error message shown to user

The client does not rely on a specific response body shape beyond the `status` field. If the backend returns a non-JSON response (e.g. plain text `"OK"`), the client handles this gracefully.

---

## Timeout Behaviour

The client does not implement an explicit request timeout. The browser default timeout applies (typically 30–60 seconds). If the backend is slow to respond, the form submit button will remain in loading state until the request resolves or the browser times out.

**Recommended:** The backend should respond within 5 seconds. If sending emails asynchronously, return a `200 OK` immediately after queuing and process in the background.

---

## Security Notes

- No authentication token is required for form submission (public endpoint)
- Rate limiting should be implemented on the backend to prevent abuse
- The backend should validate all required fields server-side regardless of client-side validation
- Email addresses are syntactically validated client-side but not domain-qualified — the backend may apply additional qualification logic
- Payloads do not contain cardholder data, passwords, or session tokens
