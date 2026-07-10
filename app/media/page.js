import Link from 'next/link';

export const metadata = {
  title: "Media & Press",
  description: "Verafye in the news - interviews, press coverage and media features on graph-native Network Risk Intelligence for payment and compliance teams.",
  openGraph: {
    title: "Media & Press",
    description: "Verafye in the news - interviews, press coverage and media features on graph-native Network Risk Intelligence for payment and compliance teams.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Media & Press",
    description: "Verafye in the news - interviews, press coverage and media features on graph-native Network Risk Intelligence for payment and compliance teams.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/media',
  },
};

// ─── Media items - add new coverage here (newest first) ─────────────────────
const mediaItems = [
  {
    slug: '/media/ibsi-fintech-journal-interview',
    type: 'Interview',
    publication: 'IBSi FinTech Journal',
    date: 'June 2026',
    title: "Why Digital Trust Is Becoming FinTech's New Growth Engine",
    excerpt: 'Abhishek Tuppada, Co-Founder and CEO of FinFusion Solutions, speaks with IBS Intelligence about the shift from one-time verification to continuous digital trust - and why the future of fraud prevention is better context, not more alerts.',
  },
];

export default function MediaPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>MEDIA &amp; PRESS</h1>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Verafye in the News
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Interviews, press coverage and media features on Network Risk Intelligence, financial crime investigation, and digital trust.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. COVERAGE LIST ────────────────────────────────────────────────── */}
      <section style={{ padding: '3rem 0 4rem', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {mediaItems.map(item => (
              <Link key={item.slug} href={item.slug} style={{ textDecoration: 'none', display: 'block' }}>
                <div className="card card-elevated card-hover" style={{ padding: '2.25rem 2.5rem', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--primary)', background: 'rgba(30,111,183,0.07)', border: '1px solid rgba(30,111,183,0.15)', borderRadius: '4px', padding: '0.25rem 0.6rem' }}>{item.type}</span>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--dark)' }}>{item.publication}</span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>&middot; {item.date}</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.125rem,2.2vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', letterSpacing: '-0.02em', lineHeight: 1.3 }}>{item.title}</h2>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1rem' }}>{item.excerpt}</p>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    Read the feature
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PRESS CONTACT ────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Press &amp; Analyst Enquiries</p>
          <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.25rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            Writing about financial crime, payments risk, or Network Risk Intelligence?
          </h2>
          <p style={{ fontSize: 'clamp(0.9375rem,1.8vw,1.0625rem)', color: 'var(--body)', maxWidth: '38rem', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            We are happy to contribute perspective on financial crime networks, investigation workflows, and the evolution of digital trust in regulated financial platforms.
          </p>
          <Link href="/contact" className="btn-primary" style={{ display: 'inline-flex' }}>
            Contact Us
            <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </Link>
        </div>
      </section>

    </>
  );
}
