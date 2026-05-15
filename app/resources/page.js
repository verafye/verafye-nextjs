import Link from 'next/link';
import CTA from '@/components/CTA';

export const metadata = {
  title: "Fraud & AML Resources | Guides & Insights | Verafye",
  description: "Explore fraud and AML resources, guides, and insights to detect financial crime and improve risk management strategies.",
  openGraph: {
    title: "Fraud & AML Resources | Guides & Insights | Verafye",
    description: "Explore fraud and AML resources, guides, and insights to detect financial crime and improve risk management strategies.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fraud & AML Resources | Guides & Insights | Verafye",
    description: "Explore fraud and AML resources, guides, and insights to detect financial crime and improve risk management strategies.",
  },
};

const categories = [
  {
    id: 'industry-insights',
    label: 'Industry Insights',
    description: 'Perspectives on evolving fraud patterns, financial crime typologies, and emerging risk across banking, payments, and fintech.',
  },
  {
    id: 'product-insights',
    label: 'Product Insights',
    description: 'Deep dives into Verafye capabilities, product intelligence approaches, and the connected detection and investigation methods behind our platform.',
  },
  {
    id: 'use-case-deep-dives',
    label: 'Use Case Deep Dives',
    description: 'Applied content examining how connected intelligence addresses specific financial crime detection and investigation challenges.',
  },
  {
    id: 'regulatory-perspectives',
    label: 'Regulatory Perspectives',
    description: 'Analysis of evolving regulatory frameworks and how regulated payment platforms and financial institutions can align their investigation workflows with changing expectations.',
  },
];

const resources = [
  {
    category: 'industry-insights',
    categoryLabel: 'Industry Insights',
    type: 'Article',
    title: 'Modernizing Financial Crime Infrastructure',
    description: 'Financial institutions are under pressure to upgrade fraud and AML infrastructure in response to evolving regulatory expectations and increasingly sophisticated financial crime. This piece examines the drivers behind infrastructure modernisation and what it means in practice.',
    gradient: 'gradient-bg-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
      </svg>
    ),
    tags: ['Infrastructure', 'Modernisation', 'Investigation Intelligence'],
  },
  {
    category: 'product-insights',
    categoryLabel: 'Product Insights',
    type: 'Article',
    title: 'Understanding Graph-Based Fraud Detection',
    description: 'Graph intelligence represents a fundamental shift in how financial crime is detected - moving from event-level scoring to relationship-aware, network-level analysis. This piece explains the core concepts behind graph-based detection and why it matters for fraud and AML operations.',
    gradient: 'gradient-bg-2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/>
        <path d="M8 12h8M16 7l-6 4M16 17l-6-4"/>
      </svg>
    ),
    tags: ['Graph Intelligence', 'Detection', 'Product'],
  },
  {
    category: 'industry-insights',
    categoryLabel: 'Industry Insights',
    type: 'Insight',
    title: 'Reducing False Positives in Transaction Monitoring',
    description: 'High false positive rates in transaction monitoring remain one of the most persistent and costly challenges in financial crime operations. This insight examines the root causes of false positive inflation and how contextual, connected intelligence can improve signal quality without sacrificing detection coverage.',
    gradient: 'gradient-bg-3',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
      </svg>
    ),
    tags: ['Transaction Monitoring', 'False Positives', 'Signal Quality'],
  },
  {
    category: 'use-case-deep-dives',
    categoryLabel: 'Use Case Deep Dives',
    type: 'Guide',
    title: 'Investigation Workflows in Financial Crime Operations',
    description: 'Modern financial crime investigation requires more than alert handling - it demands structured, context-rich workflows that connect detection to resolution. This guide examines the components of effective investigation workflow design and how intelligence-driven approaches improve analyst productivity and case outcomes.',
    gradient: 'gradient-bg-4',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" x2="8" y1="13" y2="13"/>
        <line x1="16" x2="8" y1="17" y2="17"/>
      </svg>
    ),
    tags: ['Investigation', 'Workflows', 'Operations'],
  },
  {
    category: 'regulatory-perspectives',
    categoryLabel: 'Regulatory Perspectives',
    type: 'Perspective',
    title: 'Evolving Regulatory Expectations in Financial Crime',
    description: 'Global regulatory frameworks are raising the bar for financial crime monitoring, investigation quality, and cross-domain risk management. This perspective examines the direction of travel across key frameworks and what evolving expectations mean for fraud, AML, and payments investigation workflows.',
    gradient: 'gradient-bg-1',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    tags: ['Regulatory', 'Compliance', 'AML'],
  },
  {
    category: 'use-case-deep-dives',
    categoryLabel: 'Use Case Deep Dives',
    type: 'Use Case',
    title: 'Network-Based Detection of Mule Activity',
    description: 'Mule networks are structured to evade transaction-level detection - operating across connected accounts, shared devices, and coordinated money movement patterns. This deep dive examines how graph intelligence and network clustering enable earlier, more complete detection of mule activity across banking and payment portfolios.',
    gradient: 'gradient-bg-2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
      </svg>
    ),
    tags: ['Mule Detection', 'Graph Intelligence', 'AML'],
  },
];

function ResourceCard({ resource }) {
  return (
    <div className="card card-elevated" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem', gap: '1rem' }}>
        <div className={`card-icon ${resource.gradient}`} style={{ flexShrink: 0 }}>{resource.icon}</div>
        <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.12)', borderRadius: '4px', padding: '0.25rem 0.625rem', whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>
          {resource.type}
        </span>
      </div>
      <p className="eyebrow" style={{ marginBottom: '0.375rem' }}>{resource.categoryLabel}</p>
      <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
        {resource.title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>
        {resource.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
        {resource.tags.map(tag => (
          <span key={tag} className="tag" style={{ fontSize: '0.75rem' }}>{tag}</span>
        ))}
      </div>
      <Link
        href="/request-demo"
        style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', marginTop: 'auto' }}
      >
        Request access
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
      </Link>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Resources</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Resources and Insights
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Explore perspectives, product insights, and industry trends across fraud, AML, and payment intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO ────────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0 2rem', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Insights Library</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
              Insights Across Financial Crime and Risk Intelligence
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
              Access content designed to help regulated payment platforms, fintechs, digital banks, and financial institutions understand evolving fraud patterns, regulatory expectations, and modern approaches to financial crime intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3 + 4. CATEGORY SECTIONS WITH RESOURCE CARDS ────────────────────── */}

      {/* Categories overview strip */}
      <section style={{ padding: '2rem 0 3rem', background: '#fff' }}>
        <div className="container">
          <div className="grid-4" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {categories.map(cat => (
              <div key={cat.id} className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>{cat.label}</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.65 }}>{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All resources grid */}
      <section className="section-light" style={{ padding: '3.5rem 0 4rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>All Resources</p>
            <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2.25rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Latest Insights and Perspectives
            </h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {resources.map(resource => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ──────────────────────────────────────────────────────────── */}
      <CTA
        title="Stay Ahead of Financial Crime Trends"
        subtitle="Explore how Verafye helps regulated payment platforms, fintechs, and financial institutions adapt to evolving fraud, AML, and payment risk challenges."
      />

    </>
  );
}
