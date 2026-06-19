// 301 redirect target: /industries/marketplaces/
// This page renders a client-side fallback for static export hosting.
// This static export cannot emit a server 301. A host-level 301 (S3 routing rule or
// CloudFront function) should be configured at deploy time; until then this page issues
// a client-side redirect plus a canonical tag to /industries/marketplaces/.
export const metadata = {
  title: 'Network Risk Intelligence for Marketplace Risk Teams',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://www.verafye.com/industries/marketplaces',
  },
};

export default function EcommerceRetailRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/industries/marketplaces/" />
      <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/industries/marketplaces/');" }} />
      <section style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: '1rem', color: 'var(--body)' }}>
            This page has moved. If you are not redirected automatically,{' '}
            <a href="/industries/marketplaces/" style={{ color: 'var(--primary)', fontWeight: 600 }}>
              continue to Marketplaces
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
