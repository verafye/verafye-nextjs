// This route is not used in static export deployments (output: 'export').
// The client posts directly to NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT (external endpoint).
// Retained only for reference in future non-static deployments.

const DEFAULT_REQUEST_DEMO_API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://dashboard.verafye.com/api/external-email/send'
    : 'https://dashboard.verafye.dev/api/external-email/send';

const REQUEST_DEMO_API_URL =
  process.env.VERAFYE_REQUEST_DEMO_API_URL ||
  process.env.NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_API_URL ||
  DEFAULT_REQUEST_DEMO_API_URL;

export const runtime = 'nodejs';

export async function POST(request) {
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
    const upstreamResponse = await fetch(REQUEST_DEMO_API_URL, {
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
      return Response.json(data, {
        status: upstreamResponse.status,
      });
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
