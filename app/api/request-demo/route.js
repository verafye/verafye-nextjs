/**
 * app/api/request-demo/route.js
 *
 * DEAD CODE — not reachable in static export deployments.
 *
 * next.config.js sets `output: 'export'`. Next.js excludes API routes from
 * static exports entirely — this file is never compiled into the output bundle
 * and never runs in production.
 *
 * All form submissions post directly from the browser to the external endpoint
 * configured via NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT. See:
 *   - app/lib/endpoints.js           — endpoint resolution utility
 *   - app/request-demo/RequestDemoClient.js — Request Demo form
 *   - app/become-a-partner/BecomeAPartnerClient.js — Partner Enquiry form
 *   - docs/form-endpoint-configuration.md — full architecture documentation
 *
 * This file is retained as a reference implementation in case the project
 * is migrated to a server-rendered deployment in future. If that happens,
 * update VERAFYE_REQUEST_DEMO_API_URL to the correct backend URL and wire
 * the clients to POST to /api/request-demo instead of the external endpoint.
 *
 * DO NOT remove this comment or the dead-code designation without confirming
 * that output: 'export' has been removed from next.config.js.
 */

const VERAFYE_REQUEST_DEMO_API_URL = process.env.VERAFYE_REQUEST_DEMO_API_URL;

export const runtime = 'nodejs';

export async function POST(request) {
  if (!VERAFYE_REQUEST_DEMO_API_URL) {
    return Response.json(
      { status: 0, data: null, error: 'VERAFYE_REQUEST_DEMO_API_URL is not configured' },
      { status: 500 }
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { status: 0, data: null, error: 'Invalid JSON payload' },
      { status: 400 }
    );
  }

  try {
    const upstreamResponse = await fetch(VERAFYE_REQUEST_DEMO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain;q=0.9, */*;q=0.8',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    const contentType = upstreamResponse.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const data = await upstreamResponse.json();
      return Response.json(data, { status: upstreamResponse.status });
    }

    const text = await upstreamResponse.text();
    return new Response(text, {
      status: upstreamResponse.status,
      headers: contentType ? { 'content-type': contentType } : undefined,
    });
  } catch {
    return Response.json(
      { status: 0, data: null, error: 'Upstream request failed' },
      { status: 502 }
    );
  }
}
