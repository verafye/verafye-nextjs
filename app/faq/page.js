'use client';
import { useState } from 'react';
import Link from 'next/link';

const faqCategories = [
  {
    id: 'product',
    label: 'Product',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
      </svg>
    ),
    items: [
      {
        q: 'What is Verafye?',
        a: 'Verafye is an AI-native FRAML intelligence infrastructure platform designed for mid-market financial institutions, payment processors, PSPs, PayFacs, and fintech platforms. It connects fraud, AML, and payments signals into a unified intelligence layer  -  enabling graph-based detection of coordinated financial crime networks, investigation-centric workflows, and cross-system signal aggregation across the existing technology stack.',
      },
      {
        q: 'Does Verafye replace existing fraud or AML systems?',
        a: 'Verafye is designed as an intelligence layer that connects across and enhances existing fraud and AML systems  -  not as a wholesale replacement. It aggregates signals from the tools already in place, resolves entities, maps relationships, and delivers unified intelligence to investigation workflows. This approach reduces implementation risk, shortens time to value, and allows institutions to modernise their financial crime capabilities without replacing fully functional existing infrastructure.',
      },
      {
        q: 'What makes Verafye different from traditional fraud and AML platforms?',
        a: 'The core architectural difference is graph-native intelligence. Traditional platforms evaluate events at the transaction or account level  -  in isolation and against static rules. Verafye connects entities, transactions, devices, and behaviours across the graph, surfacing coordinated patterns and network-level risk that point-in-time monitoring cannot detect. Combined with investigation-centric workflows and cross-system signal aggregation, this delivers a fundamentally different quality of financial crime intelligence.',
      },
    ],
  },
  {
    id: 'deployment',
    label: 'Deployment & Integration',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/>
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>
      </svg>
    ),
    items: [
      {
        q: 'How is Verafye deployed?',
        a: 'Verafye supports deployment configurations appropriate to the operating requirements and data governance policies of different institution types. Specific deployment options  -  including cloud, private cloud, and on-premises considerations  -  are discussed directly with prospective customers as part of the evaluation process to ensure alignment with internal infrastructure, data residency, and security standards.',
      },
      {
        q: 'Can Verafye integrate with existing fraud, AML, and payments systems?',
        a: 'Yes. Verafye is designed from the outset to integrate with the fraud monitoring, AML transaction monitoring, payments infrastructure, and case management systems that institutions already operate. The platform connects signals across these systems into a unified intelligence layer rather than requiring their replacement  -  enabling cross-domain detection and investigation without disrupting existing operational workflows.',
      },
      {
        q: 'How long does a typical deployment take?',
        a: 'Deployment timelines depend on the complexity of the existing environment, the number of systems being integrated, and the specific use cases being addressed. Because Verafye connects across existing infrastructure rather than replacing it, implementation complexity is generally lower than platform replacement programmes. Specific timelines are scoped and discussed during the evaluation and onboarding process.',
      },
    ],
  },
  {
    id: 'security',
    label: 'Security & Trust',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    items: [
      {
        q: 'How is data handled within Verafye?',
        a: 'Verafye applies controlled access patterns, secure system boundaries, and auditable data flows throughout the platform. Data handling is designed to meet the sensitivity requirements of financial crime operations  -  including fraud, AML, compliance, and investigation functions that process regulated and sensitive financial data. Specific data handling practices, including residency, retention, and access controls, are discussed directly with customers during the evaluation process.',
      },
      {
        q: 'Is Verafye compliant with relevant regulatory requirements?',
        a: 'Verafye is designed to support the operational and governance requirements that financial institutions face under evolving regulatory frameworks  -  including support for explainability, audit trails, investigation traceability, and structured workflows. We do not make categorical claims of regulatory certification or approval, as compliance obligations are specific to each institution, jurisdiction, and operating context. Our team works with customers to understand their specific requirements during evaluation.',
      },
      {
        q: 'Does Verafye support explainability for AI-assisted decisions?',
        a: 'Yes. Explainability is a core design principle within Verafye. Every risk score, alert, and case recommendation is backed by traceable, documented reasoning  -  enabling institutions to review, understand, and justify outputs to internal stakeholders and regulators without relying on opaque, black-box outputs. This is particularly important for institutions operating under frameworks that require documented justification for automated or AI-assisted financial crime decisions.',
      },
    ],
  },
  {
    id: 'use-cases',
    label: 'Use Cases & Capabilities',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/>
        <path d="M8 12h8M16 7l-6 4M16 17l-6-4"/>
      </svg>
    ),
    items: [
      {
        q: 'What use cases does Verafye support?',
        a: 'Verafye is purpose-built for financial crime detection and investigation across three primary use case clusters: mule network detection and connected fraud discovery, transaction monitoring enrichment and signal quality improvement, and investigation workflow modernisation. The platform is applicable across banks, payment processors, PSPs, PayFacs, and fintech platforms  -  and can be scoped to the most relevant use cases for each institution during evaluation.',
      },
      {
        q: 'How does Verafye improve investigation workflows?',
        a: 'Verafye restructures the investigation experience from alert-centric triage to structured, context-rich case management. Alerts are automatically clustered into coherent cases, enriched with entity profiles, relationship maps, and cross-system signals before reaching the analyst. Structured investigation workflows then guide analysts through consistent, auditable steps  -  reducing the time spent on manual data gathering, improving decision consistency, and increasing case throughput without adding headcount.',
      },
      {
        q: 'Does Verafye support both fraud and AML teams?',
        a: 'Yes. Verafye is specifically designed to bridge the gap between fraud and AML operations  -  connecting signals from both domains into a single intelligence layer. This cross-domain intelligence is particularly valuable for detecting financial crime that spans both functions, such as mule account networks where fraud proceeds feed into AML-relevant money movement patterns. Both fraud and AML teams benefit from the unified investigation view and shared network context.',
      },
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial & Engagement',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    items: [
      {
        q: 'How can we evaluate Verafye?',
        a: 'The evaluation process typically begins with a tailored product demonstration scoped to your institution type and use case priorities  -  followed by a deeper technical and commercial discussion. We work with prospective customers to design an evaluation approach appropriate to their environment, timeline, and internal decision-making process. To initiate an evaluation, the best starting point is requesting a demo through our website.',
      },
      {
        q: 'What does onboarding look like?',
        a: 'Onboarding begins with a structured discovery process to understand your existing stack, data landscape, and priority use cases. This informs the integration scope and implementation plan, which is developed collaboratively with your team. Verafye provides onboarding support throughout  -  covering system integration, data connectivity, workflow configuration, and analyst enablement. Specific onboarding timelines and activities are agreed during the commercial engagement.',
      },
      {
        q: 'Does Verafye work with partners and system integrators?',
        a: 'Yes. Verafye works with system integrators, technology partners, channel partners, and consulting firms to deliver financial crime intelligence solutions to financial institutions and payment platforms. If you represent an organisation interested in partnering with Verafye, please visit our Partners page or contact us directly through the demo request form.',
      },
    ],
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="card"
      style={{
        borderRadius: '10px',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer',
          padding: '1.375rem 1.5rem', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '1rem', textAlign: 'left',
        }}
      >
        <span style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.0625rem)', fontWeight: 600, color: 'var(--dark)', lineHeight: 1.4 }}>
          {item.q}
        </span>
        <span style={{
          flexShrink: 0, width: '1.625rem', height: '1.625rem',
          borderRadius: '50%', background: isOpen ? 'var(--primary)' : 'var(--bg-blue)',
          border: `1px solid ${isOpen ? 'var(--primary)' : 'rgba(30,111,183,0.15)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s',
        }}>
          <svg
            width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke={isOpen ? '#fff' : 'var(--primary)'} strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: '0 1.5rem 1.375rem', borderTop: '1px solid var(--border-light)' }}>
          <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.8, paddingTop: '1rem', margin: 0 }}>
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});

  function toggle(categoryId, index) {
    const key = `${categoryId}-${index}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  }

  function isOpen(categoryId, index) {
    return !!openItems[`${categoryId}-${index}`];
  }

  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>FAQ</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Frequently Asked Questions
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Answers to common questions about Verafye's platform, capabilities, deployment, and engagement approach.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. INTRO ────────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0 2rem', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Getting Started</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
              Understanding Verafye
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
              This section provides clarity on how Verafye works, how it integrates into existing environments, and how organisations can evaluate and adopt the platform.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. FAQ SECTIONS ─────────────────────────────────────────────────── */}
      <section style={{ padding: '2rem 0 5rem', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {faqCategories.map(category => (
              <div key={category.id}>
                {/* Category heading */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: '2rem', height: '2rem', borderRadius: '8px', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {category.icon}
                  </div>
                  <h2 style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', fontWeight: 700, color: 'var(--dark)', margin: 0, letterSpacing: '-0.015em' }}>
                    {category.label}
                  </h2>
                </div>
                {/* FAQ items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {category.items.map((item, index) => (
                    <FAQItem
                      key={index}
                      item={item}
                      isOpen={isOpen(category.id, index)}
                      onToggle={() => toggle(category.id, index)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions nudge */}
          <div style={{ maxWidth: '56rem', margin: '3rem auto 0', textAlign: 'center' }}>
            <div className="card" style={{ padding: '2rem', background: 'var(--bg-light)' }}>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', marginBottom: '1rem' }}>
                Can't find what you're looking for? Speak directly with our team.
              </p>
              <Link href="/request-demo" className="btn-primary" style={{ display: 'inline-flex' }}>
                Request Demo
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            See Verafye in Action
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            Speak with our team to understand how Verafye supports fraud, AML, and payments intelligence operations for your institution.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/request-demo" className="btn-primary">
              Request Demo
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/platform" className="btn-secondary">Explore Platform</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem' }}>
            No commitment required. Speak directly with our solutions team.
          </p>
        </div>
      </section>

    </>
  );
}
