import Link from 'next/link';

// ─── Footer link columns ──────────────────────────────────────────────────────
const footerColumns = [
  {
    heading: 'Platform',
    links: [
      { label: 'Platform Overview',          href: '/platform' },
      { label: 'Graph Intelligence',         href: '/solutions/graph-intelligence' },
      { label: 'Investigation Intelligence', href: '/solutions/investigation-intelligence' },
      { label: 'Mule Account Detection',     href: '/solutions/mule-account-detection' },
      { label: 'Capabilities',              href: '/capabilities' },
    ],
  },
  {
    heading: 'Use Cases',
    links: [
      { label: 'All Use Cases',               href: '/use-cases' },
      { label: 'Mule Network Detection',      href: '/use-cases/mule-network-detection' },
      { label: 'Transaction Monitoring',      href: '/use-cases/transaction-monitoring' },
      { label: 'Investigation Workflow Modernization', href: '/use-cases/investigation-workflow-modernization' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Banks',                                href: '/industries/banks' },
      { label: 'Payment Processors / PSPs',            href: '/industries/payment-processors-psps-payfacs' },
      { label: 'Fintech Platforms',                    href: '/industries/fintech-platforms' },
      { label: 'Credit Unions / Regional',             href: '/industries/credit-unions' },
      { label: 'Digital Banks',                        href: '/industries/digital-banks' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',            href: '/company' },
      { label: 'Customers',        href: '/customers' },
      { label: 'Partners',         href: '/partners' },
      { label: 'Resources',        href: '/resources' },
      { label: 'FAQ',              href: '/faq' },
      { label: 'Security & Trust', href: '/security-trust' },
    ],
  },
];

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3.5rem 1.5rem 0' }}>

        {/* ── MAIN 5-COLUMN GRID ──────────────────────────────────────────── */}
        <div className="footer-main-grid">

          {/* Col 1 — Brand */}
          <div className="footer-brand-col">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <img
                src="/images/verafye-logo-white.png"
                alt="Verafye"
                style={{ height: '22px', width: 'auto', display: 'block' }}
              />
            </Link>
            <p style={{
              fontSize: '0.8rem',
              lineHeight: 1.65,
              color: '#6b7b8d',
              maxWidth: '16rem',
              margin: '0 0 1.5rem 0',
            }}>
              AI-Native FRAML Intelligence Infrastructure for financial institutions and payment platforms.
            </p>
            {/* Trust badge / CTA */}
            <Link
              href="/request-demo"
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#5AB2FF',
                border: '1px solid rgba(90,178,255,0.25)',
                borderRadius: '6px',
                padding: '0.45rem 0.875rem',
                transition: 'border-color 0.15s, color 0.15s',
                letterSpacing: '0.01em',
              }}
            >
              Request a Demo →
            </Link>
          </div>

          {/* Cols 2–5 — Nav columns */}
          {footerColumns.map(col => (
            <div key={col.heading}>
              <p style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: '#b0bec9',
                textTransform: 'uppercase',
                letterSpacing: '0.09em',
                margin: '0 0 0.875rem 0',
              }}>
                {col.heading}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {col.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-nav-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ── BOTTOM BAR ──────────────────────────────────────────────────── */}
        <div className="footer-bottom">
          <p style={{ fontSize: '0.8125rem', color: '#6b7b8d', margin: 0 }}>
            &copy; 2026 Verafye. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/security-trust">Security &amp; Trust</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/request-demo">Request Demo</Link>
          </div>
        </div>

      </div>

      {/* ── SCOPED STYLES ────────────────────────────────────────────────────
          CSS-only hover — no JS handlers, no 'use client' needed.
      ───────────────────────────────────────────────────────────────────────── */}
      <style>{`
        .footer-nav-link {
          font-size: 0.8125rem;
          color: #6b7b8d;
          display: inline-block;
          line-height: 1.5;
          transition: color 0.15s;
        }
        .footer-nav-link:hover {
          color: #5AB2FF;
        }
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr;
          gap: 2rem 2.5rem;
          align-items: start;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 1.5rem 0 2rem;
          margin-top: 3rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-bottom-links a {
          font-size: 0.8125rem;
          color: #6b7b8d;
          transition: color 0.15s;
        }
        .footer-bottom-links a:hover {
          color: #5AB2FF;
        }
        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .footer-brand-col {
            grid-column: span 2;
          }
        }
        @media (max-width: 640px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.75rem;
          }
          .footer-brand-col {
            grid-column: span 2;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-bottom-links {
            gap: 1rem;
          }
        }
        @media (max-width: 400px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
          }
          .footer-brand-col {
            grid-column: span 1;
          }
        }
      `}</style>
    </footer>
  );
}
