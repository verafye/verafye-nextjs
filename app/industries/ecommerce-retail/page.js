// 301 redirect target: /industries/marketplaces/
// This page renders a client-side fallback for static export hosting.
// The true 301 is configured in vercel.json (Vercel) and public/_redirects (Netlify).
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
