'use client';

import Link from 'next/link';

/* ── GTM dataLayer helper ──────────────────────────────────────────────────── */
function pushGTM(event, payload) {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...payload });
  }
}

export default function ContactClient() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)', padding: '4rem 0 2.5rem' }}>
        <div className="container">
          <div style={{ maxWidth: '44rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1rem' }}>Get in Touch</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              How can we help?
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', lineHeight: 1.7 }}>
              Whether you want to see Verafye in action or explore a partnership, select the path that fits your situation.
            </p>
          </div>
        </div>
      </section>

      {/* ── TWO-CARD ROUTING ─────────────────────────────────────────────────── */}
      <section style={{ padding: '3rem 0 4.5rem', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '2rem', maxWidth: '56rem', margin: '0 auto' }}>

            {/* Card 1 - Request Demo */}
            <div className="card card-elevated" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '3px solid var(--primary)' }}>
              <div className="card-icon gradient-bg-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                  Request a Demo
                </h2>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.7, marginBottom: '0' }}>
                  See Verafye in action. We'll walk you through a tailored session showing how the platform connects fraud, AML, and payment signals into explainable investigations relevant to your environment.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--muted)' }}>
                {['Graph-based fraud and network detection', 'Alert clustering and case intelligence', 'Audit-ready investigation workflows'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    {f}
                  </div>
                ))}
              </div>
              <Link
                href="/request-demo"
                className="btn-primary"
                style={{ marginTop: 'auto', width: '100%' }}
                onClick={() => pushGTM('contact_cta_click', {
                  cta_label: 'Request Demo',
                  cta_href: '/request-demo',
                  cta_type: 'primary',
                  page_section: 'contact_routing',
                })}
              >
                Request Demo
                <span style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
            </div>

            {/* Card 2 - Become a Partner */}
            <div className="card card-elevated" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '3px solid #7C3AED' }}>
              <div className="card-icon" style={{ background: 'linear-gradient(135deg,#7C3AED,#a855f7)', borderRadius: '10px', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/>
                  <path d="M8 12h8M16 7l-6 4M16 17l-6-4"/>
                </svg>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                  Become a Partner
                </h2>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.7, marginBottom: '0' }}>
                  Explore how we can work together to bring Verafye to regulated financial platforms in your market. We partner with system integrators, channel partners, technology providers, and consulting firms.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--muted)' }}>
                {['Channel, reseller, and co-sell models', 'Technology and API integration partnerships', 'Joint go-to-market and strategic alliances'].map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    {f}
                  </div>
                ))}
              </div>
              <Link
                href="/become-a-partner"
                className="btn-secondary"
                style={{ marginTop: 'auto', width: '100%' }}
                onClick={() => pushGTM('contact_cta_click', {
                  cta_label: 'Partner with Verafye',
                  cta_href: '/become-a-partner',
                  cta_type: 'secondary',
                  page_section: 'contact_routing',
                })}
              >
                Partner with Verafye
                <span style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── PRIVACY NOTE ─────────────────────────────────────────────────────── */}
      <section style={{ padding: '2rem 0', background: 'var(--bg-light)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)', maxWidth: '44rem', margin: '0 auto', lineHeight: 1.7 }}>
            Information submitted through the forms linked from this page is handled in accordance with our{' '}
            <a href="/privacy-policy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Privacy Policy</a>.
            {' '}We process contact data to respond to your enquiry and for related business communications. We do not sell personal data.
            {' '}GDPR-aligned and DPDP-aware practices apply for EU and India visitors. To exercise your data rights, contact{' '}
            <a href="mailto:privacy@verafye.com" style={{ color: 'var(--primary)' }}>privacy@verafye.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
