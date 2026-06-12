
export const metadata = {
  title: "Cookie Policy & Data Transparency",
  description: "Learn how Verafye uses cookies and tracking technologies to improve security, user experience and website performance while protecting privacy.",
  keywords: ["cookie policy", "website cookies", "privacy controls", "data governance", "website tracking", "cookie management", "privacy compliance"],
  openGraph: {
    title: "Cookie Policy & Data Transparency | Verafye",
    description: "Learn how Verafye uses cookies and tracking technologies to improve security, user experience and website performance while protecting privacy.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cookie Policy & Data Transparency | Verafye",
    description: "Learn how Verafye uses cookies and tracking technologies to improve security, user experience and website performance while protecting privacy.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/cookie-policy',
  },
};

const h2 = { fontSize: '1.375rem', fontWeight: '700', color: 'var(--dark)', margin: '1.5rem 0 0.5rem', lineHeight: 1.3 };
const h3 = { fontSize: '1.0625rem', fontWeight: '700', color: 'var(--dark)', margin: '1rem 0 0.375rem', lineHeight: 1.4 };
const p  = { margin: '0 0 0.875rem 0' };

export default function Page() {
  return (
    <>
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)', padding: '3.5rem 0 1.5rem' }}>
        <div className="container" style={{ maxWidth: '68rem' }}>
          <h1 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: '700', color: 'var(--dark)', marginBottom: '0.75rem' }}>Cookie Policy</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Last updated: May 2026</p>
          <p style={{ color: 'var(--body)', fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '52rem' }}>
            This Cookie Policy explains how Verafye, a product of FinFusion Solutions Pvt. Ltd. (&ldquo;Verafye,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), uses cookies and similar technologies when you visit our website. This policy should be read together with our{' '}
            <a href="/privacy-policy" style={{ color: 'var(--primary)' }}>Privacy Policy</a>.
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 0 3rem', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto', fontSize: '1rem', color: 'var(--body)', lineHeight: '1.75' }}>

            {/* ── 1. What are cookies? ──────────────────────────────────────── */}
            <h2 style={h2}>1. What Are Cookies?</h2>
            <p style={p}>Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember certain preferences, understand how visitors use the site, and support relevant communications.</p>
            <p style={p}>We may also use similar technologies such as pixels, tags, scripts, local storage, and analytics identifiers.</p>

            {/* ── 2. How we use cookies ─────────────────────────────────────── */}
            <h2 style={h2}>2. How We Use Cookies</h2>
            <p style={p}>We may use cookies and similar technologies for the following purposes:</p>

            <h3 style={h3}>Essential website functionality</h3>
            <p style={p}>To enable core website features, improve security, support navigation, and ensure the website works as intended.</p>

            <h3 style={h3}>Analytics and performance</h3>
            <p style={p}>To understand how visitors use our website, which pages are visited, how users navigate the site, and how we can improve website performance and user experience.</p>

            <h3 style={h3}>Personalization</h3>
            <p style={p}>To remember certain choices or preferences and support a more relevant website experience where applicable.</p>

            <h3 style={h3}>Marketing and communications</h3>
            <p style={p}>To understand interest in Verafye&apos;s products and services, measure campaign effectiveness, and support relevant business communications.</p>

            {/* ── 3. Types of cookies ───────────────────────────────────────── */}
            <h2 style={h2}>3. Types of Cookies We May Use</h2>

            <h3 style={h3}>Essential cookies</h3>
            <p style={p}>These are necessary for the website to function and cannot usually be disabled through our website systems.</p>

            <h3 style={h3}>Analytics cookies</h3>
            <p style={p}>These help us understand website usage and improve the content, structure, and performance of our website.</p>

            <h3 style={h3}>Personalization cookies</h3>
            <p style={p}>These help remember preferences and support a more relevant website experience where applicable.</p>

            <h3 style={h3}>Advertising cookies</h3>
            <p style={p}>These may help us measure marketing campaigns and support relevant business communications.</p>

            {/* ── 4. Third-party technologies ───────────────────────────────── */}
            <h2 style={h2}>4. Third-Party Technologies</h2>
            <p style={p}>We may use third-party services to support website analytics, tag management, advertising measurement, or business communications. These providers may use cookies or similar technologies according to their own policies.</p>
            <p style={p}>Where applicable, these technologies may include analytics, tag management, advertising, or customer communication tools.</p>

            {/* ── 5. Managing cookies ───────────────────────────────────────── */}
            <h2 style={h2}>5. Managing Cookies</h2>
            <p style={p}>You can manage or block cookies through your browser settings. Most browsers allow you to delete cookies, block cookies, or receive alerts when cookies are being used.</p>
            <p style={p}>Where available, you may also use our cookie preference tool to manage non-essential cookie categories such as analytics, personalization, and advertising cookies. You can access your cookie preferences at any time using the Cookie Preferences link in the website footer.</p>
            <p style={p}>Please note that blocking or disabling some cookies may affect how the website functions.</p>

            {/* ── 6. Do Not Track ───────────────────────────────────────────── */}
            <h2 style={h2}>6. Do Not Track Signals</h2>
            <p style={p}>Some browsers may send &ldquo;Do Not Track&rdquo; signals. Our website may not currently respond to all such signals. You can manage cookie preferences through your browser settings or available cookie preference tools.</p>

            {/* ── 7. Updates ────────────────────────────────────────────────── */}
            <h2 style={h2}>7. Updates to This Cookie Policy</h2>
            <p style={p}>We may update this Cookie Policy from time to time to reflect changes in our website, technology, legal requirements, or business practices. The updated version will be posted on this page with a revised &ldquo;Last updated&rdquo; date.</p>

            {/* ── 8. Contact ────────────────────────────────────────────────── */}
            <h2 style={h2}>8. Contact Us</h2>
            <p style={p}>If you have questions about this Cookie Policy or how we use cookies, please contact us at:</p>
            <div style={{ background: 'var(--bg-light)', borderRadius: '10px', border: '1px solid var(--border)', padding: '1.5rem 2rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              <p style={{ margin: '0 0 0.375rem', fontWeight: 700, color: 'var(--dark)' }}>Verafye</p>
              {/* TODO: Confirm privacy@verafye.com is active before go-live */}
              <p style={{ margin: '0 0 0.25rem' }}>Email: <a href="mailto:privacy@verafye.com" style={{ color: 'var(--primary)' }}>privacy@verafye.com</a></p>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--muted)' }}>We aim to respond to all privacy-related requests within 30 days.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
