'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconMenu, IconX } from './Icons';

// ─── Nav structure ────────────────────────────────────────────────────────────
const navItems = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      { href: '/platform',                              label: 'Platform Overview' },
      { href: '/capabilities',                          label: 'Capabilities' },
      { href: '/solutions/investigation-intelligence',  label: 'Investigation Intelligence' },
      { href: '/solutions/graph-intelligence',          label: 'Graph Intelligence' },
      { href: '/solutions/mule-account-detection',      label: 'Mule Account Detection' },
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
    href: '/industries/payment-processors-psps-payfacs',
    children: [
      { href: '/industries/payment-processors-psps-payfacs',  label: 'PSPs, PayFacs & Payment Processors' },
      { href: '/industries/msbs-remittance-platforms',        label: 'MSBs & Remittance Platforms' },
      { href: '/industries/baas-embedded-finance',           label: 'BaaS / Embedded Finance' },
      { href: '/industries/digital-banks',                    label: 'Digital Banks & Neo Banks' },
      { href: '/industries/fintech-platforms',                label: 'FinTech Payment Platforms' },
      { href: '/industries/digital-lending-bnpl',             label: 'NBFCs & Digital Lending' },
      { href: '/industries/banks',                            label: 'Selected Banks & Credit Unions' },
      { href: '/industries/marketplaces',                     label: 'Marketplaces' },
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
      { href: '/media',           label: 'Media & Press' },
      { href: '/security-trust',  label: 'Security & Trust' },
    ],
  },
];

// ─── Mobile nav groups ────────────────────────────────────────────────────────
const mobileNavGroups = [
  {
    heading: 'Platform',
    headingHref: '/platform',
    items: [
      { href: '/platform',                             label: 'Overview' },
      { href: '/capabilities',                         label: 'Capabilities' },
      { href: '/solutions/investigation-intelligence', label: 'Investigation Intelligence' },
      { href: '/solutions/graph-intelligence',         label: 'Graph Intelligence' },
      { href: '/solutions/mule-account-detection',     label: 'Mule Account Detection' },
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
    headingHref: '/industries/payment-processors-psps-payfacs',
    items: [
      { href: '/industries/payment-processors-psps-payfacs',  label: 'PSPs, PayFacs & Payment Processors' },
      { href: '/industries/msbs-remittance-platforms',        label: 'MSBs & Remittance Platforms' },
      { href: '/industries/baas-embedded-finance',           label: 'BaaS / Embedded Finance' },
      { href: '/industries/digital-banks',                    label: 'Digital Banks & Neo Banks' },
      { href: '/industries/fintech-platforms',                label: 'FinTech Payment Platforms' },
      { href: '/industries/digital-lending-bnpl',             label: 'NBFCs & Digital Lending' },
      { href: '/industries/banks',                            label: 'Selected Banks & Credit Unions' },
      { href: '/industries/marketplaces',                     label: 'Marketplaces' },
    ],
  },
  {
    heading: 'Region',
    headingHref: null,
    items: [
      { href: '/',   label: 'Global' },
      { href: '/in', label: 'India' },
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
      { href: '/media',          label: 'Media & Press' },
      { href: '/security-trust', label: 'Security & Trust' },
    ],
  },
];

// ─── Normalise pathname: strip trailing slash so /platform/ === /platform ─────
function normalisePath(p) {
  if (!p) return '/';
  return p === '/' ? '/' : p.replace(/\/$/, '');
}

// ─── Dropdown item (desktop) ─────────────────────────────────────────────────
function DropdownItem({ item }) {
  const [open, setOpen] = useState(false);
  const rawPathname = usePathname();
  const pathname = normalisePath(rawPathname);
  const ref = useRef(null);
  const timerRef = useRef(null);
  const canHoverRef = useRef(false);

  // Detect true hover capability once on mount.
  // Avoids broken flicker on touch: browsers synthesise mouseenter/mouseleave
  // around a tap, which was causing the dropdown to open then immediately close.
  useEffect(() => {
    canHoverRef.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }, []);

  // Close on outside click/touch
  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, []);

  const isActive = item.href
    ? pathname === item.href || pathname.startsWith(item.href + '/')
    : item.children?.some(c => pathname === c.href || pathname.startsWith(c.href + '/'));

  const handleMouseEnter = useCallback(() => {
    if (!canHoverRef.current) return;
    clearTimeout(timerRef.current);
    setOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!canHoverRef.current) return;
    timerRef.current = setTimeout(() => setOpen(false), 120);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        style={{
          fontSize: '0.9375rem', fontWeight: 500,
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
        aria-expanded={open}
        aria-haspopup="true"
        style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem 0',
          display: 'flex', alignItems: 'center', gap: '0.3rem',
          fontSize: '0.9375rem', fontWeight: 500,
          color: isActive ? 'var(--primary)' : 'var(--muted-dark)',
          transition: 'color 0.15s', letterSpacing: '-0.005em', fontFamily: 'inherit',
        }}
      >
        {item.label}
        <svg
          width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{
            transition: 'transform 0.18s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            opacity: 0.5,
          }}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          style={{
            position: 'absolute', top: 'calc(100% + 0.75rem)', left: '50%',
            transform: 'translateX(-50%)',
            background: '#fff', borderRadius: '10px',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
            padding: '0.5rem', minWidth: '240px', zIndex: 100,
            animation: 'fadeInUp 0.15s ease forwards',
          }}
        >
          {item.children.map(child => {
            const childActive = pathname === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                style={{
                  display: 'block', padding: '0.6rem 0.875rem',
                  fontSize: '0.9rem', fontWeight: childActive ? 600 : 500,
                  color: childActive ? 'var(--primary)' : 'var(--dark)',
                  borderRadius: '6px', transition: 'background 0.12s, color 0.12s',
                  background: childActive ? 'var(--bg-blue)' : 'transparent',
                  lineHeight: 1.4,
                }}
                onMouseEnter={e => {
                  if (!childActive) {
                    e.currentTarget.style.background = 'var(--bg-light)';
                    e.currentTarget.style.color = 'var(--primary)';
                  }
                }}
                onMouseLeave={e => {
                  if (!childActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--dark)';
                  }
                }}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Geo Selector ─────────────────────────────────────────────────────────────
function GeoSelector() {
  const [open, setOpen] = useState(false);
  const rawPathname = usePathname();
  const pathname = normalisePath(rawPathname);
  const ref = useRef(null);

  const currentRegion = pathname.startsWith('/in') ? 'India' : 'Global';

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, []);

  const regions = [
    { label: 'Global', href: '/' },
    { label: 'India',  href: '/in' },
  ];

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Region: ${currentRegion}. Click to change.`}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.3rem',
          background: 'none', border: '1px solid var(--border)',
          borderRadius: '6px', padding: '0.3rem 0.625rem',
          cursor: 'pointer', fontSize: '0.75rem', fontWeight: 500,
          color: 'var(--muted-dark)', fontFamily: 'inherit',
          transition: 'border-color 0.15s, color 0.15s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--primary)';
          e.currentTarget.style.color = 'var(--primary)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.color = 'var(--muted-dark)';
        }}
      >
        {/* Globe icon */}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        {currentRegion}
        <svg
          width="10" height="10" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ opacity: 0.5, transition: 'transform 0.15s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Select region"
          style={{
            position: 'absolute', top: 'calc(100% + 0.5rem)', right: 0,
            background: '#fff', borderRadius: '8px',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
            padding: '0.375rem', minWidth: '130px', zIndex: 100,
            animation: 'fadeInUp 0.15s ease forwards',
          }}
        >
          {regions.map(r => {
            const isSelected = r.label === currentRegion;
            return (
              <Link
                key={r.href}
                href={r.href}
                role="option"
                aria-selected={isSelected}
                onClick={() => setOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.5rem 0.75rem', fontSize: '0.8125rem',
                  fontWeight: isSelected ? 600 : 400,
                  color: isSelected ? 'var(--primary)' : 'var(--dark)',
                  borderRadius: '5px',
                  background: isSelected ? 'var(--bg-blue)' : 'transparent',
                  transition: 'background 0.12s, color 0.12s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  if (!isSelected) {
                    e.currentTarget.style.background = 'var(--bg-light)';
                    e.currentTarget.style.color = 'var(--primary)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isSelected) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--dark)';
                  }
                }}
              >
                <span style={{ width: '12px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  {isSelected && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  )}
                </span>
                {r.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const rawPathname = usePathname();
  const pathname = normalisePath(rawPathname);

  // Wait for client mount before rendering portal
  useEffect(() => { setMounted(true); }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [rawPathname]);

  // Prevent body scroll while mobile menu is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = mobileOpen ? 'hidden' : '';
    }
    return () => {
      if (typeof document !== 'undefined') document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
    <header className="site-header">
      <div className="container">
        <div className="header-inner">

          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <Link href="/" className="logo" onClick={() => setMobileOpen(false)}>
              <img
                src="/images/verafye-logo-blue.png"
                alt="Verafye"
                style={{ height: '28px', width: 'auto', display: 'block' }}
              />
            </Link>
            <nav className="nav-links" aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
              {navItems.map(item => (
                <DropdownItem key={item.label} item={item} />
              ))}
            </nav>
          </div>

          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <GeoSelector />
            <Link
              href="/request-demo"
              className="btn-primary btn-sm"
              onClick={() =>
                typeof window !== 'undefined' &&
                window.trackEvent &&
                window.trackEvent('demo_cta_click', { location: 'header' })
              }
            >
              Request Demo
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

    </header>

    {/* ── Mobile menu rendered via portal to escape header's backdrop-filter stacking context ── */}
    {mounted && createPortal(
      <>
        {/* Backdrop overlay */}
        {mobileOpen && (
          <div
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.25)',
              zIndex: 998,
            }}
            aria-hidden="true"
          />
        )}

        <div
          id="mobile-menu"
          className={`mobile-menu${mobileOpen ? ' open' : ''}`}
          aria-hidden={!mobileOpen}
          style={{ zIndex: 999 }}
        >
          {mobileNavGroups.map(group => (
            <div key={group.heading} style={{ marginBottom: '0.25rem' }}>
              {group.headingHref ? (
                <Link
                  href={group.headingHref}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block', fontSize: '0.9375rem', fontWeight: 600,
                    color: pathname.startsWith(group.headingHref) ? 'var(--primary)' : 'var(--dark)',
                    padding: '0.6rem 0 0.35rem',
                  }}
                >
                  {group.heading}
                </Link>
              ) : (
                <p style={{
                  fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase',
                  letterSpacing: '0.08em', color: 'var(--muted)', margin: '0.75rem 0 0.35rem',
                }}>
                  {group.heading}
                </p>
              )}
              {group.items.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block', fontSize: '0.9rem', fontWeight: 400,
                    color: pathname === item.href ? 'var(--primary)' : 'var(--muted-dark)',
                    padding: '0.35rem 0 0.35rem 0.875rem', lineHeight: 1.5,
                  }}
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
            onClick={() => {
              setMobileOpen(false);
              typeof window !== 'undefined' &&
                window.trackEvent &&
                window.trackEvent('demo_cta_click', { location: 'mobile_menu' });
            }}
          >
            Request Demo
          </Link>
        </div>
      </>,
      document.body
    )}
    </>
  );
}
