/**
 * Redirect shell — /solutions/mule-account-detection/
 *
 * This page has been consolidated into /use-cases/mule-network-detection/.
 * The canonical tag and meta refresh ensure search engines and browsers
 * are redirected to the authoritative page.
 * A 301 redirect at the hosting layer is configured in docs/hosting-redirects.md.
 */

export const metadata = {
  title: "Mule Account & Network Detection",
  description: "Detect mule accounts and coordinated mule networks using Connected-Risk Intelligence.",
  alternates: {
    canonical: 'https://www.verafye.com/use-cases/mule-network-detection',
  },
  robots: { index: false, follow: true },
};

export default function MuleAccountDetectionRedirect() {
  return (
    <>
      {/* Meta refresh for browsers where JS is disabled */}
      <meta httpEquiv="refresh" content="0; url=/use-cases/mule-network-detection/" />

      <section style={{ padding: '6rem 1.5rem', textAlign: 'center', background: '#fff' }}>
        <div style={{ maxWidth: '36rem', margin: '0 auto' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '1rem' }}>
            This page has moved.
          </p>
          <a
            href="/use-cases/mule-network-detection/"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '1rem', fontWeight: 600, color: 'var(--primary)',
            }}
          >
            Go to Mule Account &amp; Network Detection
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
