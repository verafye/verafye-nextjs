import Link from 'next/link';
import CookiePreferencesLink from './CookiePreferencesLink';

// ─── Footer link columns ──────────────────────────────────────────────────────
const footerColumns = [
  {
    heading: 'Platform',
    links: [
      { label: 'Platform Overview',          href: '/platform' },
      { label: 'Capabilities',               href: '/capabilities' },
      { label: 'Investigation Intelligence', href: '/solutions/investigation-intelligence' },
      { label: 'Graph Intelligence',         href: '/solutions/graph-intelligence' },
      { label: 'Mule Account Detection',     href: '/solutions/mule-account-detection' },
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
      { label: 'PSPs, PayFacs & Payment Processors', href: '/industries/payment-processors-psps-payfacs' },
      { label: 'MSBs & Remittance Platforms',        href: '/industries/msbs-remittance-platforms' },
      { label: 'Digital Banks & Neo Banks',          href: '/industries/digital-banks' },
      { label: 'FinTech Payment Platforms',          href: '/industries/fintech-platforms' },
      { label: 'NBFCs & Digital Lending',            href: '/industries/digital-lending-bnpl' },
      { label: 'Selected Banks & Credit Unions',     href: '/industries/banks' },
      { label: 'Marketplaces',                       href: '/industries/marketplaces' },
    ],
  },
  {
    heading: 'Regions',
    links: [
      { label: 'Global', href: '/' },
      { label: 'India',  href: '/in' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',            href: '/company' },
      { label: 'Customers',        href: '/customers' },
      { label: 'Partners',         href: '/partners' },
      { label: 'Resources',        href: '/resources' },
      { label: 'Media & Press',    href: '/media' },
      { label: 'FAQ',              href: '/faq' },
      { label: 'Security & Trust', href: '/security-trust' },
      { label: 'Contact',          href: '/contact' },
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

          {/* Col 1 - Brand */}
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
              Built for payment-led regulated platforms and lean financial crime teams - detecting hidden network risk, connecting fragmented signals, and producing audit-ready investigations.
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
              Request a Risk Shadowing Review →
            </Link>
            {/* LinkedIn */}
            <div style={{ marginTop: '1.25rem' }}>
              <a
                href="https://www.linkedin.com/company/104417539"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verafye on LinkedIn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  color: '#6b7b8d',
                  transition: 'color 0.15s',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Cols 2–5 - Nav columns */}
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
            &copy; 2026 Verafye, a product of FinFusion Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/security-trust">Security &amp; Trust</Link>
            <Link href="/request-demo">Risk Shadowing Review</Link>
            <CookiePreferencesLink />
          </div>
        </div>

      </div>

      {/* ── SCOPED STYLES ────────────────────────────────────────────────────
          CSS-only hover - no JS handlers, no 'use client' needed.
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
          grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1fr;
          gap: 2rem 2.5rem;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1.4fr 1fr 1fr 1fr;
            gap: 2rem 1.5rem;
          }
        }
        @media (max-width: 768px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2rem 1.25rem;
          }
        }
        @media (max-width: 540px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.75rem 1rem;
          }
        }
        @media (max-width: 380px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
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
      `}
    </style>
  </footer>
  );
}
