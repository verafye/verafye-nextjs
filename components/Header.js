'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconMenu, IconX } from './Icons';

// ─── Desktop nav structure ────────────────────────────────────────────────────
const navItems = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      { href: '/platform',                              label: 'Platform Overview' },
      { href: '/solutions/graph-intelligence',          label: 'Graph Intelligence' },
      { href: '/solutions/investigation-intelligence',  label: 'Investigation Intelligence' },
      { href: '/solutions/mule-account-detection',      label: 'Mule Account Detection' },
      { href: '/capabilities',                          label: 'Capabilities' },
    ],
  },
  {
    label: 'Use Cases',
    href: '/use-cases',
    children: [
      { href: '/use-cases',                                         label: 'All Use Cases' },
      { href: '/use-cases/mule-network-detection',                  label: 'Mule Network Detection' },
      { href: '/use-cases/transaction-monitoring',                  label: 'Transaction Monitoring' },
      { href: '/use-cases/investigation-workflow-modernization',    label: 'Investigation Workflow Modernization' },
    ],
  },
  {
    label: 'Industries',
    href: null,
    children: [
      { href: '/industries/banks',                           label: 'Banks' },
      { href: '/industries/payment-processors-psps-payfacs', label: 'Payment Processors / PSPs / PayFacs' },
      { href: '/industries/fintech-platforms',               label: 'Fintech Platforms' },
      { href: '/industries/credit-unions',                   label: 'Credit Unions / Regional Institutions' },
      { href: '/industries/digital-banks',                   label: 'Digital Banks' },
    ],
  },
  {
    label: 'Customers',
    href: '/customers',
    children: null,
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { href: '/resources',   label: 'All Resources' },
      { href: '/faq',         label: 'FAQ' },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    children: [
      { href: '/company',         label: 'About' },
      { href: '/partners',        label: 'Partners' },
      { href: '/security-trust',  label: 'Security & Trust' },
    ],
  },
];

// ─── Mobile nav — grouped flat list ──────────────────────────────────────────
const mobileNavGroups = [
  {
    heading: 'Platform',
    headingHref: '/platform',
    items: [
      { href: '/platform',                             label: 'Overview' },
      { href: '/solutions/graph-intelligence',         label: 'Graph Intelligence' },
      { href: '/solutions/investigation-intelligence', label: 'Investigation Intelligence' },
      { href: '/solutions/mule-account-detection',     label: 'Mule Account Detection' },
      { href: '/capabilities',                         label: 'Capabilities' },
    ],
  },
  {
    heading: 'Use Cases',
    headingHref: '/use-cases',
    items: [
      { href: '/use-cases',                                       label: 'All Use Cases' },
      { href: '/use-cases/mule-network-detection',                label: 'Mule Network Detection' },
      { href: '/use-cases/transaction-monitoring',                label: 'Transaction Monitoring' },
      { href: '/use-cases/investigation-workflow-modernization',  label: 'Investigation Workflow Modernization' },
    ],
  },
  {
    heading: 'Industries',
    headingHref: null,
    items: [
      { href: '/industries/banks',                            label: 'Banks' },
      { href: '/industries/payment-processors-psps-payfacs',  label: 'Payment Processors / PSPs / PayFacs' },
      { href: '/industries/fintech-platforms',                label: 'Fintech Platforms' },
      { href: '/industries/credit-unions',                    label: 'Credit Unions / Regional Institutions' },
      { href: '/industries/digital-banks',                    label: 'Digital Banks' },
    ],
  },
  {
    heading: 'Customers',
    headingHref: '/customers',
    items: [],
  },
  {
    heading: 'Resources',
    headingHref: '/resources',
    items: [
      { href: '/resources', label: 'All Resources' },
      { href: '/faq',       label: 'FAQ' },
    ],
  },
  {
    heading: 'Company',
    headingHref: '/company',
    items: [
      { href: '/company',        label: 'About' },
      { href: '/partners',       label: 'Partners' },
      { href: '/security-trust', label: 'Security & Trust' },
    ],
  },
];

// ─── Dropdown item (desktop) ─────────────────────────────────────────────────
function DropdownItem({ item }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isActive = item.href
    ? pathname === item.href || pathname.startsWith(item.href + '/')
    : item.children?.some(c => pathname === c.href || pathname.startsWith(c.href + '/'));

  function handleMouseEnter() { clearTimeout(timerRef.current); setOpen(true); }
  function handleMouseLeave() { timerRef.current = setTimeout(() => setOpen(false), 120); }

  if (!item.children) {
    return (
      <Link
        href={item.href}
        style={{
          fontSize: '0.8125rem', fontWeight: 500,
          color: isActive ? 'var(--primary)' : 'var(--muted-dark)',
          transition: 'color 0.15s', letterSpacing: '-0.005em',
          padding: '0.25rem 0', display: 'block',
        }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      style={{ position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem 0',
          display: 'flex', alignItems: 'center', gap: '0.3rem',
          fontSize: '0.8125rem', fontWeight: 500,
          color: isActive ? 'var(--primary)' : 'var(--muted-dark)',
          transition: 'color 0.15s', letterSpacing: '-0.005em', fontFamily: 'inherit',
        }}
        aria-expanded={open}
      >
        {item.label}
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: 'transform 0.18s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.5 }}
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 0.75rem)', left: '50%',
          transform: 'translateX(-50%)',
          background: '#fff', borderRadius: '10px',
          border: '1px solid var(--border)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
          padding: '0.5rem', minWidth: '240px', zIndex: 100,
          animation: 'fadeInUp 0.15s ease forwards',
        }}>
          {item.children.map(child => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '0.6rem 0.875rem',
                fontSize: '0.8125rem', fontWeight: pathname === child.href ? 600 : 500,
                color: pathname === child.href ? 'var(--primary)' : 'var(--dark)',
                borderRadius: '6px', transition: 'background 0.12s, color 0.12s',
                background: pathname === child.href ? 'var(--bg-blue)' : 'transparent',
                lineHeight: 1.4,
              }}
              onMouseEnter={e => { if (pathname !== child.href) { e.currentTarget.style.background = 'var(--bg-light)'; e.currentTarget.style.color = 'var(--primary)'; }}}
              onMouseLeave={e => { if (pathname !== child.href) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--dark)'; }}}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">

          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <Link href="/" className="logo" onClick={() => setMobileOpen(false)}>
              <img src="/images/verafye-logo-blue.png" alt="Verafye" style={{ height: '28px', width: 'auto', display: 'block' }} />
            </Link>
            <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
              {navItems.map(item => (
                <DropdownItem key={item.label} item={item} />
              ))}
            </nav>
          </div>

          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              href="/request-demo"
              className="btn-primary btn-sm"
              onClick={() => typeof window !== 'undefined' && window.trackEvent && window.trackEvent('demo_cta_click', { location: 'header' })}
            >
              Request Demo
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {mobileNavGroups.map(group => (
          <div key={group.heading} style={{ marginBottom: '0.25rem' }}>
            {group.headingHref ? (
              <Link
                href={group.headingHref}
                onClick={() => setMobileOpen(false)}
                style={{ display: 'block', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--dark)', padding: '0.6rem 0 0.35rem' }}
              >
                {group.heading}
              </Link>
            ) : (
              <p style={{ fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', margin: '0.75rem 0 0.35rem' }}>
                {group.heading}
              </p>
            )}
            {group.items.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{ display: 'block', fontSize: '0.875rem', fontWeight: 400, color: pathname === item.href ? 'var(--primary)' : 'var(--muted-dark)', padding: '0.35rem 0 0.35rem 0.875rem', lineHeight: 1.5 }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
        <Link
          href="/request-demo"
          className="btn-primary"
          style={{ marginTop: '1.5rem', textAlign: 'center', display: 'block' }}
          onClick={() => { setMobileOpen(false); typeof window !== 'undefined' && window.trackEvent && window.trackEvent('demo_cta_click', { location: 'mobile_menu' }); }}
        >
          Request Demo
        </Link>
      </div>
    </header>
  );
}
