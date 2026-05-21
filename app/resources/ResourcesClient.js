'use client';
import { useState } from 'react';
import Link from 'next/link';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'industry-insights', label: 'Industry Insights' },
  { id: 'product-insights', label: 'Product Insights' },
  { id: 'use-case-deep-dives', label: 'Use Case Deep Dives' },
  { id: 'regulatory-perspectives', label: 'Regulatory Perspectives' },
];

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const resources = [
  /* ── LIVE — article pages exist ── */
  {
    category: 'product-insights',
    categoryLabel: 'Product Insights',
    title: 'The Missing Layer in Modern Financial Crime Investigations',
    summary: 'Understand why modern financial crime teams need investigation intelligence to connect fragmented alerts, risk signals, workflows, and evidence trails into explainable decisions.',
    readingTime: '5 min read',
    ctaLabel: 'Read Article',
    href: '/resources/what-is-investigation-intelligence/',
    status: 'live',
    gradient: 'gradient-bg-2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        <path d="M11 8v6"/><path d="M8 11h6"/>
      </svg>
    ),
  },
  {
    category: 'industry-insights',
    categoryLabel: 'Industry Insights',
    title: 'Why Fraud and AML Investigations Break Down in Payment Platforms',
    summary: 'Explore why fraud and AML investigations in payment platforms break down when alerts, payment activity, identity, device, and beneficiary context remain disconnected.',
    readingTime: '6 min read',
    ctaLabel: 'Read Insight',
    href: '/resources/why-fraud-and-aml-investigations-break-down-in-payment-platforms/',
    status: 'live',
    gradient: 'gradient-bg-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    category: 'use-case-deep-dives',
    categoryLabel: 'Use Case Deep Dives',
    title: 'Mule Account Investigations: Why Connected Signals Matter',
    summary: 'See why mule account investigations require connected visibility across accounts, transactions, beneficiaries, devices, identities, behavior, and case history.',
    readingTime: '7 min read',
    ctaLabel: 'Explore Use Case',
    href: '/resources/mule-account-investigations-connected-signals/',
    status: 'live',
    gradient: 'gradient-bg-3',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
      </svg>
    ),
  },
  /* ── LIVE — article pages exist ── */
  {
    category: 'product-insights',
    categoryLabel: 'Product Insights',
    title: 'From Alerts to Decisions: The New Operating Model for Risk Teams',
    summary: 'Understand why modern risk teams need to move beyond alert queues toward structured, explainable, and evidence-ready investigation workflows.',
    readingTime: '6 min read',
    ctaLabel: 'Read Article',
    href: '/resources/from-alerts-to-decisions-risk-team-operating-model/',
    status: 'live',
    gradient: 'gradient-bg-4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    category: 'industry-insights',
    categoryLabel: 'Industry Insights',
    title: 'Why Digital Banks Need Investigation-Ready Risk Workflows',
    summary: 'Learn why digital and neo banks need investigation-ready workflows that connect fraud, AML, account, payment, identity, and device context.',
    readingTime: '6 min read',
    ctaLabel: 'Read Insight',
    href: '/resources/why-digital-banks-need-investigation-ready-risk-workflows/',
    status: 'live',
    gradient: 'gradient-bg-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2"/>
        <line x1="2" x2="22" y1="10" y2="10"/>
      </svg>
    ),
  },
  {
    category: 'regulatory-perspectives',
    categoryLabel: 'Regulatory Perspectives',
    title: 'Evidence Packs: Building Audit-Ready Investigation Records',
    summary: 'Understand how evidence packs help financial crime teams maintain structured, traceable, and review-ready investigation records.',
    readingTime: '5 min read',
    ctaLabel: 'Read Perspective',
    href: '/resources/evidence-packs-audit-ready-investigation-records/',
    status: 'live',
    gradient: 'gradient-bg-2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  /* ── BACKLOG — hidden pending editorial review ──
  {
    category: 'industry-insights',
    categoryLabel: 'Industry Insights',
    title: 'Modernizing Financial Crime Infrastructure',
    summary: 'Financial institutions are under pressure to upgrade fraud and AML infrastructure in response to evolving regulatory expectations and increasingly sophisticated financial crime.',
    readingTime: '5 min read',
    ctaLabel: 'Read Insight',
    href: null,
    status: 'coming-soon',
    gradient: 'gradient-bg-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    category: 'product-insights',
    categoryLabel: 'Product Insights',
    title: 'Understanding Graph-Based Fraud Detection',
    summary: 'Graph intelligence represents a fundamental shift in how financial crime is detected - moving from event-level scoring to relationship-aware, network-level analysis.',
    readingTime: '6 min read',
    ctaLabel: 'Read Article',
    href: null,
    status: 'coming-soon',
    gradient: 'gradient-bg-2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/>
        <path d="M8 12h8M16 7l-6 4M16 17l-6-4"/>
      </svg>
    ),
  },
  {
    category: 'industry-insights',
    categoryLabel: 'Industry Insights',
    title: 'Reducing False Positives in Transaction Monitoring',
    summary: 'High false positive rates in transaction monitoring remain one of the most persistent and costly challenges in financial crime operations.',
    readingTime: '5 min read',
    ctaLabel: 'Read Insight',
    href: null,
    status: 'coming-soon',
    gradient: 'gradient-bg-3',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2"/>
        <line x1="2" x2="22" y1="10" y2="10"/>
      </svg>
    ),
  },
  {
    category: 'use-case-deep-dives',
    categoryLabel: 'Use Case Deep Dives',
    title: 'Investigation Workflows in Financial Crime Operations',
    summary: 'Modern financial crime investigation requires more than alert handling - it demands structured, context-rich workflows that connect detection to resolution.',
    readingTime: '7 min read',
    ctaLabel: 'Explore Use Case',
    href: null,
    status: 'coming-soon',
    gradient: 'gradient-bg-4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" x2="8" y1="13" y2="13"/>
        <line x1="16" x2="8" y1="17" y2="17"/>
      </svg>
    ),
  },
  {
    category: 'regulatory-perspectives',
    categoryLabel: 'Regulatory Perspectives',
    title: 'Evolving Regulatory Expectations in Financial Crime',
    summary: 'Global regulatory frameworks are raising the bar for financial crime monitoring, investigation quality, and cross-domain risk management.',
    readingTime: '5 min read',
    ctaLabel: 'Read Perspective',
    href: null,
    status: 'coming-soon',
    gradient: 'gradient-bg-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    category: 'use-case-deep-dives',
    categoryLabel: 'Use Case Deep Dives',
    title: 'Network-Based Detection of Mule Activity',
    summary: 'Mule networks are structured to evade transaction-level detection - operating across connected accounts, shared devices, and coordinated money movement patterns.',
    readingTime: '7 min read',
    ctaLabel: 'Explore Use Case',
    href: null,
    status: 'coming-soon',
    gradient: 'gradient-bg-2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
      </svg>
    ),
  },
  ── end backlog ── */
];

function StatusBadge({ status }) {
  if (status === 'live') return null;
  const label = status === 'planned' ? 'Planned' : 'Coming Soon';
  return (
    <span style={{
      fontSize: '0.6875rem',
      fontWeight: 600,
      color: 'var(--muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      background: 'var(--bg-slate)',
      border: '1px solid var(--border)',
      borderRadius: '4px',
      padding: '0.25rem 0.625rem',
      whiteSpace: 'nowrap',
      alignSelf: 'flex-start',
    }}>
      {label}
    </span>
  );
}

function ResourceCard({ resource }) {
  const isLive = resource.status === 'live';

  const inner = (
    <div
      className="card card-elevated"
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        opacity: isLive ? 1 : 0.82,
        transition: 'opacity 0.2s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem', gap: '1rem' }}>
        <div className={`card-icon ${resource.gradient}`} style={{ flexShrink: 0 }}>{resource.icon}</div>
        <StatusBadge status={resource.status} />
      </div>
      <p className="eyebrow" style={{ marginBottom: '0.375rem' }}>{resource.categoryLabel}</p>
      <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
        {resource.title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>
        {resource.summary}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>{resource.readingTime}</span>
        {isLive ? (
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
            {resource.ctaLabel}
            {ARROW}
          </span>
        ) : (
          <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--muted-light)' }}>
            {resource.ctaLabel}
          </span>
        )}
      </div>
    </div>
  );

  if (isLive && resource.href) {
    return (
      <Link
        href={resource.href}
        style={{ textDecoration: 'none', display: 'block' }}
        className="card-hover"
        onClick={() => pushEvent('resource_card_click', {
          resource_title: resource.title,
          resource_category: resource.category,
          resource_slug: resource.href,
        })}
      >
        {inner}
      </Link>
    );
  }
  return <div style={{ cursor: 'default' }}>{inner}</div>;
}


// ── Analytics helper — pushes to GTM dataLayer if available ──────────────
function pushEvent(event, payload) {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...payload });
  }
}

export default function ResourcesClient() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? resources
      : resources.filter(r => r.category === activeFilter);

  return (
    <>
      {/* ── Filter tabs ── */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
        {FILTERS.map(f => {
          const active = activeFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => { setActiveFilter(f.id); pushEvent('resource_category_filter_click', { resource_category: f.id, cta_label: f.label }); }}
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                padding: '0.5rem 1.25rem',
                borderRadius: '2rem',
                border: active ? '1.5px solid var(--primary)' : '1px solid var(--border)',
                background: active ? 'var(--primary)' : '#fff',
                color: active ? '#fff' : 'var(--body)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* ── Resource grid ── */}
      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.9375rem', padding: '3rem 0' }}>
          No resources in this category yet - check back soon.
        </p>
      ) : (
        <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
          {filtered.map(resource => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      )}
    </>
  );
}
