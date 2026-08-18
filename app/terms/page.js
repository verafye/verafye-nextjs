
export const metadata = {
  title: { absolute: "Terms & Conditions for Verafye Platform Use" },
  description: "Review the terms governing access to Verafye's fraud, AML and Network Risk Intelligence platform and related services.",
  keywords: [
    "terms and conditions",
    "platform governance",
    "legal compliance",
    "software usage terms",
  ],
  openGraph: {
    title: "Terms & Conditions for Verafye Platform Use",
    description: "Review the terms governing access to Verafye's fraud, AML and Network Risk Intelligence platform and related services.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terms & Conditions for Verafye Platform Use",
    description: "Review the terms governing access to Verafye's fraud, AML and Network Risk Intelligence platform and related services.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/terms',
  },
};

const h2 = { fontSize: '1.375rem', fontWeight: '700', color: 'var(--dark)', margin: '1.5rem 0 0.5rem', lineHeight: 1.3 };
const p  = { margin: '0 0 0.875rem 0' };

export default function Page() {
  return (
    <>
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)', padding: '3.5rem 0 1.5rem' }}>
        <div className="container" style={{ maxWidth: '68rem' }}>
          <h1 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: '700', color: 'var(--dark)', marginBottom: '0.75rem' }}>Terms of Service</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Last updated: March 2026</p>
          <p style={{ color: 'var(--body)', fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '52rem' }}>
            Please read these Terms of Service carefully before using the Verafye website or engaging with our services. By accessing our website, you confirm that you have read and agree to these terms.
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 0 3rem', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto', fontSize: '1rem', color: 'var(--body)', lineHeight: '1.75' }}>

            {/* ── 1. Acceptance of Terms ────────────────────────────────────── */}
            <h2 style={h2}>1. Acceptance of Terms</h2>
            <p style={p}>By accessing and using the Verafye website and services, you accept and agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree to these terms, please do not use our website or services.</p>

            {/* ── 2. Description of Services ───────────────────────────────── */}
            <h2 style={h2}>2. Description of Services</h2>
            <p style={p}>Verafye provides investigation intelligence capabilities for regulated financial platforms, including Connected-Risk Intelligence, investigation workflows, and cross-system signal correlation. Our website is provided for informational purposes and to facilitate enquiries about our products and services.</p>

            {/* ── 3. Use of Services ───────────────────────────────────────── */}
            <h2 style={h2}>3. Use of Services</h2>
            <p style={p}>You agree to use our website and services only for lawful purposes and in a manner consistent with these Terms. You must not use our website in any way that causes, or may cause, damage to the website, or impairment of the availability or accessibility of the website.</p>
            <p style={p}>You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.</p>

            {/* ── 4. Intellectual Property ─────────────────────────────────── */}
            <h2 style={h2}>4. Intellectual Property</h2>
            <p style={p}>All content, features, and functionality of our website and services - including but not limited to text, graphics, logos, icons, images, and software - are owned by Verafye or its licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.</p>

            {/* ── 5. Disclaimer of Warranties ──────────────────────────────── */}
            <h2 style={h2}>5. Disclaimer of Warranties</h2>
            <p style={p}>Our website and services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied. Verafye does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
            <p style={p}>Platform metrics and outcomes referenced on our website are indicative and based on platform capabilities. Actual results may vary based on implementation, data quality, and operational factors.</p>

            {/* ── 6. Limitation of Liability ───────────────────────────────── */}
            <h2 style={h2}>6. Limitation of Liability</h2>
            <p style={p}>To the fullest extent permitted by applicable law, Verafye shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of, or inability to use, our website or services. Our total liability for any claim arising under these Terms shall not exceed the amount paid by you, if any, for access to our services in the preceding twelve months.</p>

            {/* ── 7. Third-Party Links ─────────────────────────────────────── */}
            <h2 style={h2}>7. Third-Party Links</h2>
            <p style={p}>Our website may contain links to third-party websites. These links are provided for your convenience only. Verafye has no control over the content of those websites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>

            {/* ── 8. Privacy ───────────────────────────────────────────────── */}
            <h2 style={h2}>8. Privacy</h2>
            <p style={p}>Your use of our website is also governed by our <a href="/privacy-policy" style={{ color: 'var(--primary)' }}>Privacy Policy</a> and <a href="/cookie-policy" style={{ color: 'var(--primary)' }}>Cookie Policy</a>, which are incorporated into these Terms by reference.</p>

            {/* ── 9. Changes to Terms ──────────────────────────────────────── */}
            <h2 style={h2}>9. Changes to These Terms</h2>
            <p style={p}>We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of our website or services after changes are posted constitutes your acceptance of the revised Terms.</p>

            {/* ── 10. Governing Law ────────────────────────────────────────── */}
            <h2 style={h2}>10. Governing Law</h2>
            <p style={p}>These Terms are governed by and construed in accordance with applicable law. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the relevant courts.</p>

            {/* ── 11. Contact ──────────────────────────────────────────────── */}
            <h2 style={h2}>11. Contact Us</h2>
            <p style={p}>If you have questions about these Terms of Service, please contact us at:</p>
            <div style={{ background: 'var(--bg-light)', borderRadius: '10px', border: '1px solid var(--border)', padding: '1.5rem 2rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              <p style={{ margin: '0 0 0.375rem', fontWeight: 700, color: 'var(--dark)' }}>Verafye</p>
              <p style={{ margin: '0 0 0.25rem' }}>Email: <a href="mailto:legal@verafye.com" style={{ color: 'var(--primary)' }}>legal@verafye.com</a></p>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--muted)' }}>A product of FinFusion Solutions Pvt. Ltd.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
