/**
 * app/lib/endpoints.js
 * Centralised form endpoint configuration.
 *
 * NEXT_PUBLIC_ variables are baked into the static JS bundle at build time.
 * If a variable is not set, process.env.NEXT_PUBLIC_* will be undefined in
 * the built bundle. These functions throw with a clear message so that any
 * misconfigured build fails loudly at the point of use rather than silently
 * posting to an unintended endpoint.
 *
 * DO NOT add || 'https://...' fallbacks here. If the variable is missing,
 * the build was run without the required configuration — that is a deployment
 * error that must be fixed before going live.
 *
 * See .env.local.example for variable documentation.
 * See docs/form-endpoint-configuration.md for the full form architecture.
 */

/**
 * Returns the Request Demo form endpoint URL.
 * Used by: RequestDemoClient.js, BecomeAPartnerClient.js
 * @throws {Error} if NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT is not set
 */
export function getRequestDemoEndpoint() {
  const url = process.env.NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT;
  if (!url) {
    throw new Error(
      '[Verafye] NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT is not set. ' +
      'The production build must be run with this variable defined. ' +
      'See .env.local.example and docs/form-endpoint-configuration.md.'
    );
  }
  return url;
}

/**
 * Returns the Lead Capture (PDF download) form endpoint URL.
 * Used by: PdfDownloadModal.js
 * @throws {Error} if NEXT_PUBLIC_VERAFYE_LEAD_CAPTURE_ENDPOINT is not set
 */
export function getLeadCaptureEndpoint() {
  const url = process.env.NEXT_PUBLIC_VERAFYE_LEAD_CAPTURE_ENDPOINT;
  if (!url) {
    throw new Error(
      '[Verafye] NEXT_PUBLIC_VERAFYE_LEAD_CAPTURE_ENDPOINT is not set. ' +
      'The production build must be run with this variable defined. ' +
      'See .env.local.example and docs/form-endpoint-configuration.md.'
    );
  }
  return url;
}
