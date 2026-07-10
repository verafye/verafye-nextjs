'use client';

/**
 * SplitHeroWithVisualCard
 *
 * Approved Option 1 inner-page hero layout: left-aligned text + right-side
 * abstract visual card.
 *
 * Exports:
 *   default            SplitHeroWithVisualCard   - full hero section wrapper
 *   named              PlatformVisualCard         - platform flow card
 *   named              InvestigationVisualCard    - investigation workflow card
 *   named              ResourcesVisualCard        - resources category preview card
 *
 * Usage:
 *   import SplitHeroWithVisualCard, { PlatformVisualCard }
 *     from '../../components/SplitHeroWithVisualCard';
 *
 *   <SplitHeroWithVisualCard
 *     eyebrow="VERAFYE PLATFORM"
 *     title="One investigation layer..."
 *     description="Unify fraud, AML..."
 *     body="The Verafye platform..."
 *     primaryCTA={{ label: 'Request a Risk Shadowing Review', href: '/request-demo' }}
 *     secondaryCTA={{ label: 'Explore Capabilities', href: '/capabilities' }}
 *     visualCard={<PlatformVisualCard />}
 *   />
 *
 * Design rules (enforced here):
 *   - No em dashes - use " - " in visible copy
 *   - No proprietary mechanics, rule thresholds, or scoring logic
 *   - No real screenshots or live product data
 *   - Mobile: text stacks first, card below
 */

import Link from 'next/link';

/* ── GTM dataLayer helper ──────────────────────────────────────────────────── */
function pushGTM(event, payload) {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...payload });
  }
}

/* ─── Shared: down-arrow connector between flow steps ───────────────────── */
function DownConnector() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '0.25rem 0' }} aria-hidden="true">
      <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
        <line x1="5" y1="0" x2="5" y2="9" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 7l3 5 3-5" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/* ─── Shared: right-facing arrow for CTA buttons ────────────────────────── */
function ArrowRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* ─── Shared: card chrome header ─────────────────────────────────────────── */
function CardHeader({ label, gradient = 'linear-gradient(135deg, var(--primary) 0%, #3B82F6 100%)' }) {
  return (
    <div style={{
      background: gradient,
      padding: '0.875rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    }}>
      <div style={{ display: 'flex', gap: '0.375rem' }}>
        {[0.3, 0.55, 0.9].map((o, i) => (
          <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: `rgba(255,255,255,${o})` }} />
        ))}
      </div>
      <span style={{
        fontSize: '0.6875rem', fontWeight: 700,
        color: 'rgba(255,255,255,0.9)',
        letterSpacing: '0.08em', textTransform: 'uppercase',
      }}>
        {label}
      </span>
    </div>
  );
}

/* ─── Shared: flow step row ──────────────────────────────────────────────── */
function FlowStep({ num, label, desc, accent, bg }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      padding: '0.8125rem 0.875rem',
      borderRadius: '10px',
      background: bg,
      border: `1px solid ${accent}22`,
    }}>
      <div style={{
        flexShrink: 0,
        width: '1.625rem', height: '1.625rem',
        borderRadius: '50%',
        background: accent,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.5625rem', fontWeight: 700, color: '#fff',
        letterSpacing: '0.02em',
      }}>
        {num}
      </div>
      <div>
        <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.1875rem' }}>
          {label}
        </div>
        <div style={{ fontSize: '0.6875rem', color: 'var(--muted)', lineHeight: 1.5 }}>
          {desc}
        </div>
      </div>
    </div>
  );
}

/* ─── Shared: outer card shell ───────────────────────────────────────────── */
const cardShell = {
  background: '#fff',
  borderRadius: '16px',
  border: '1px solid #E2E8F0',
  boxShadow: '0 20px 60px -12px rgba(30,111,183,0.12), 0 4px 16px -4px rgba(0,0,0,0.06)',
  overflow: 'hidden',
};


/* ════════════════════════════════════════════════════════════════════════════
   PLATFORM VISUAL CARD
   Abstract flow: Signals In → Connected Risk Layer → Case Workflow → Evidence Trail
   ════════════════════════════════════════════════════════════════════════════ */
export function PlatformVisualCard() {
  const steps = [
    {
      num: '01', label: 'Signals In',
      desc: 'Fraud, AML, payment, identity, device, and behavior signals',
      accent: 'var(--primary)', bg: '#EEF6FF',
    },
    {
      num: '02', label: 'Connected Risk Layer',
      desc: 'Alerts clustered and enriched with entity and relationship context',
      accent: '#7C3AED', bg: '#F5F3FF',
    },
    {
      num: '03', label: 'Case Workflow',
      desc: 'Investigation-ready cases with structured evidence and review steps',
      accent: '#059669', bg: '#ECFDF5',
    },
    {
      num: '04', label: 'Evidence Trail',
      desc: 'Audit-ready records for decisions and regulatory documentation',
      accent: '#D97706', bg: '#FFFBEB',
    },
  ];

  return (
    <div style={cardShell}>
      <CardHeader label="Platform Flow" />
      <div style={{ padding: '1.25rem' }}>
        {steps.map((step, i) => (
          <div key={i}>
            <FlowStep {...step} />
            {i < steps.length - 1 && <DownConnector />}
          </div>
        ))}
      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════════════════════════════
   INVESTIGATION VISUAL CARD
   Abstract flow: Alerts → Entity Context → Review Workflow → Decision Record
   ════════════════════════════════════════════════════════════════════════════ */
export function InvestigationVisualCard() {
  const steps = [
    {
      num: '01', label: 'Alerts',
      desc: 'Fraud, AML, and payment alerts connected across signal sources',
      accent: '#DC2626', bg: '#FEF2F2',
    },
    {
      num: '02', label: 'Entity Context',
      desc: 'Accounts, devices, identities, and relationships enriched for review',
      accent: 'var(--primary)', bg: '#EEF6FF',
    },
    {
      num: '03', label: 'Review Workflow',
      desc: 'Structured investigation steps with actions, notes, and timeline',
      accent: '#7C3AED', bg: '#F5F3FF',
    },
    {
      num: '04', label: 'Decision Record',
      desc: 'Audit-ready case decision with traceable evidence and documentation',
      accent: '#059669', bg: '#ECFDF5',
    },
  ];

  return (
    <div style={cardShell}>
      <CardHeader
        label="Investigation Workflow"
        gradient="linear-gradient(135deg, #1E6FB7 0%, #7C3AED 100%)"
      />
      <div style={{ padding: '1.25rem' }}>
        {steps.map((step, i) => (
          <div key={i}>
            <FlowStep {...step} />
            {i < steps.length - 1 && <DownConnector />}
          </div>
        ))}
      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════════════════════════════
   RESOURCES VISUAL CARD
   Abstract insight-category preview - not a functional grid.
   ════════════════════════════════════════════════════════════════════════════ */
export function ResourcesVisualCard() {
  const categories = [
    { label: 'Product Insights',        tag: '8 briefs',  color: 'var(--primary)', bg: '#EEF6FF' },
    { label: 'Industry Insights',       tag: '6 briefs',  color: '#7C3AED',        bg: '#F5F3FF' },
    { label: 'Use Case Deep Dives',     tag: '5 guides',  color: '#059669',        bg: '#ECFDF5' },
    { label: 'Regulatory Perspectives', tag: '4 briefs',  color: '#D97706',        bg: '#FFFBEB' },
  ];

  return (
    <div style={cardShell}>
      {/* Featured Insight */}
      <div style={{
        background: 'linear-gradient(135deg, #EEF6FF 0%, #F5F3FF 100%)',
        padding: '1.25rem',
        borderBottom: '1px solid #E2E8F0',
      }}>
        <div style={{
          fontSize: '0.5625rem', fontWeight: 700,
          letterSpacing: '0.1em', color: 'var(--primary)',
          textTransform: 'uppercase', marginBottom: '0.5rem',
        }}>
          Featured Insight
        </div>
        <div style={{
          fontSize: '0.875rem', fontWeight: 700,
          color: 'var(--dark)', marginBottom: '0.375rem', lineHeight: 1.4,
        }}>
          Building Investigation Intelligence for Lean Risk Teams
        </div>
        <div style={{ fontSize: '0.6875rem', color: 'var(--muted)', lineHeight: 1.55 }}>
          How connected signal workflows improve fraud and AML case quality
        </div>

      </div>

      {/* Category rows */}
      <div style={{ padding: '1rem 1.25rem' }}>
        <div style={{
          fontSize: '0.5625rem', fontWeight: 700,
          letterSpacing: '0.1em', color: 'var(--muted)',
          textTransform: 'uppercase', marginBottom: '0.625rem',
        }}>
          Browse by category
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {categories.map((cat, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.5625rem 0.75rem',
              borderRadius: '8px',
              background: cat.bg,
              border: `1px solid ${cat.color}1A`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: cat.color, flexShrink: 0,
                }} />
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--dark)' }}>
                  {cat.label}
                </span>
              </div>
              <span style={{
                fontSize: '0.625rem', fontWeight: 600, color: cat.color,
                background: '#fff', border: `1px solid ${cat.color}22`,
                borderRadius: '100px', padding: '0.125rem 0.5rem',
                whiteSpace: 'nowrap',
              }}>
                {cat.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




/* ════════════════════════════════════════════════════════════════════════════
   GRAPH INTELLIGENCE VISUAL CARD
   Abstract flow: Signals - Linked Entities - Relationship Context - Investigation View
   Entity chips: Accounts, Devices, Identities, Transactions, Beneficiaries, Cases
   ════════════════════════════════════════════════════════════════════════════ */
export function GraphIntelligenceVisualCard() {
  const steps = [
    {
      num: '01', label: 'Signals',
      desc: 'Fraud, AML, payment, transaction, and behavioral signals connected',
      accent: 'var(--primary)', bg: '#EEF6FF',
    },
    {
      num: '02', label: 'Linked Entities',
      desc: 'Accounts, devices, identities, and counterparties resolved and linked',
      accent: '#7C3AED', bg: '#F5F3FF',
    },
    {
      num: '03', label: 'Relationship Context',
      desc: 'Hidden connections across entities and time windows surfaced for review',
      accent: '#0891B2', bg: '#F0F9FF',
    },
    {
      num: '04', label: 'Investigation View',
      desc: 'Network-level context delivered into structured case workflow',
      accent: '#059669', bg: '#ECFDF5',
    },
  ];

  const chips = ['Accounts', 'Devices', 'Identities', 'Transactions', 'Beneficiaries', 'Cases'];

  return (
    <div style={cardShell}>
      <CardHeader
        label="Relationship View"
        gradient="linear-gradient(135deg, var(--primary) 0%, #0891B2 100%)"
      />
      <div style={{ padding: '1.25rem' }}>
        {steps.map((step, i) => (
          <div key={i}>
            <FlowStep {...step} />
            {i < steps.length - 1 && <DownConnector />}
          </div>
        ))}
        <div style={{
          marginTop: '1rem',
          paddingTop: '0.875rem',
          borderTop: '1px solid var(--border-light)',
          display: 'flex', flexWrap: 'wrap', gap: '0.375rem',
        }}>
          {chips.map((chip, i) => (
            <span key={i} style={{
              fontSize: '0.625rem', fontWeight: 600,
              color: 'var(--primary)',
              background: 'rgba(30,111,183,0.07)',
              border: '1px solid rgba(30,111,183,0.14)',
              borderRadius: '100px',
              padding: '0.1875rem 0.5rem',
              whiteSpace: 'nowrap',
            }}>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════════════════════════════
   MULE ACCOUNT VISUAL CARD
   Abstract flow: Account Activity - Beneficiary Links - Device/Identity Signals - Case Review
   Entity chips: Account, Device, Beneficiary, Transaction, Identity, Case Review
   ════════════════════════════════════════════════════════════════════════════ */
export function MuleAccountVisualCard() {
  const steps = [
    {
      num: '01', label: 'Account Activity',
      desc: 'Transaction patterns and account behavior signals connected',
      accent: '#DC2626', bg: '#FEF2F2',
    },
    {
      num: '02', label: 'Beneficiary Links',
      desc: 'Receiving accounts, counterparties, and transfer routes mapped',
      accent: '#D97706', bg: '#FFFBEB',
    },
    {
      num: '03', label: 'Device / Identity Signals',
      desc: 'Device fingerprints, identity flags, and shared infrastructure surfaced',
      accent: 'var(--primary)', bg: '#EEF6FF',
    },
    {
      num: '04', label: 'Case Review',
      desc: 'Suspected mule activity structured into reviewable case context',
      accent: '#059669', bg: '#ECFDF5',
    },
  ];

  const chips = ['Account', 'Device', 'Beneficiary', 'Transaction', 'Identity', 'Case Review'];

  return (
    <div style={cardShell}>
      <CardHeader
        label="Mule Risk Review"
        gradient="linear-gradient(135deg, #DC2626 0%, #1E6FB7 100%)"
      />
      <div style={{ padding: '1.25rem' }}>
        {steps.map((step, i) => (
          <div key={i}>
            <FlowStep {...step} />
            {i < steps.length - 1 && <DownConnector />}
          </div>
        ))}
        <div style={{
          marginTop: '1rem',
          paddingTop: '0.875rem',
          borderTop: '1px solid var(--border-light)',
          display: 'flex', flexWrap: 'wrap', gap: '0.375rem',
        }}>
          {chips.map((chip, i) => (
            <span key={i} style={{
              fontSize: '0.625rem', fontWeight: 600,
              color: '#DC2626',
              background: 'rgba(220,38,38,0.06)',
              border: '1px solid rgba(220,38,38,0.14)',
              borderRadius: '100px',
              padding: '0.1875rem 0.5rem',
              whiteSpace: 'nowrap',
            }}>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════════════════════════════
   CAPABILITIES VISUAL CARD
   Capability stack: Signal Connectivity - Graph Context - Case Workflow - Evidence Records
   Capability chips: Signal Ingestion, Alert Clustering, Graph Intelligence,
                     Reviewer Controls, Evidence Trails
   ════════════════════════════════════════════════════════════════════════════ */
export function CapabilitiesVisualCard() {
  const layers = [
    {
      label: 'Signal Connectivity',
      desc: 'Fraud, AML, payment, identity, and device signals ingested',
      accent: 'var(--primary)', bg: '#EEF6FF',
    },
    {
      label: 'Alert Clustering',
      desc: 'Related alerts grouped into coherent investigation clusters',
      accent: '#7C3AED', bg: '#F5F3FF',
    },
    {
      label: 'Graph Intelligence',
      desc: 'Hidden entity relationships and networks surfaced for review',
      accent: '#0891B2', bg: '#F0F9FF',
    },
    {
      label: 'Case Workflow',
      desc: 'Reviewer controls, decisions, notes, and actions tracked',
      accent: '#059669', bg: '#ECFDF5',
    },
    {
      label: 'Evidence Records',
      desc: 'Audit-ready trails preserved for every investigation decision',
      accent: '#D97706', bg: '#FFFBEB',
    },
  ];

  const chips = ['Signal Ingestion', 'Alert Clustering', 'Graph Intelligence', 'Reviewer Controls', 'Evidence Trails'];

  return (
    <div style={cardShell}>
      <CardHeader label="Capability Stack" />
      <div style={{ padding: '1.125rem 1.25rem' }}>
        {layers.map((layer, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.625rem',
            padding: '0.625rem 0.75rem',
            borderRadius: '8px',
            background: layer.bg,
            border: `1px solid ${layer.accent}1A`,
            marginBottom: i < layers.length - 1 ? '0.4375rem' : 0,
          }}>
            <div style={{
              flexShrink: 0,
              width: '0.25rem', height: 'auto', alignSelf: 'stretch',
              borderRadius: '2px', background: layer.accent, minHeight: '2rem',
            }} />
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.125rem' }}>
                {layer.label}
              </div>
              <div style={{ fontSize: '0.625rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                {layer.desc}
              </div>
            </div>
          </div>
        ))}
        <div style={{
          marginTop: '0.875rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid var(--border-light)',
          display: 'flex', flexWrap: 'wrap', gap: '0.375rem',
        }}>
          {chips.map((chip, i) => (
            <span key={i} style={{
              fontSize: '0.5625rem', fontWeight: 600,
              color: 'var(--muted-dark)',
              background: 'var(--bg-tag)',
              border: '1px solid var(--border-light)',
              borderRadius: '100px',
              padding: '0.1875rem 0.5rem',
              whiteSpace: 'nowrap',
            }}>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT - SplitHeroWithVisualCard
   ════════════════════════════════════════════════════════════════════════════ */

/**
 * @param {object}  props
 * @param {string}  props.eyebrow          Uppercase label above H1
 * @param {string}  [props.seoH1]          SEO-targeted H1 text (rendered small, eyebrow style). When provided, title is demoted to h2.
 * @param {string}  props.title            Visual heading text (h1 when no seoH1, h2 when seoH1 present)
 * @param {string}  [props.description]    Bold subtitle beneath heading
 * @param {string}  [props.body]           Secondary paragraph beneath subtitle
 * @param {object}  props.primaryCTA       { label, href } - use href="#anchor" for anchor links
 * @param {object}  [props.secondaryCTA]   { label, href }
 * @param {ReactNode} props.visualCard     Right-side visual card JSX
 * @param {string}  [props.background]     Section background CSS value
 * @param {string}  [props.padding]        Section padding CSS value
 */
export default function SplitHeroWithVisualCard({
  eyebrow,
  seoH1,
  title,
  description,
  body,
  primaryCTA,
  secondaryCTA,
  visualCard,
  background = 'linear-gradient(135deg, #F8FBFF 0%, #EEF6FF 40%, #fff 100%)',
  padding = '5rem 0',
}) {
  /* Anchor links (#section) should use <a>, router links use <Link> */
  const PrimaryBtn = primaryCTA?.href?.startsWith('#')
    ? ({ children, ...rest }) => <a href={primaryCTA.href} {...rest}>{children}</a>
    : ({ children, ...rest }) => <Link href={primaryCTA?.href || '#'} {...rest}>{children}</Link>;

  const handlePrimaryCTA = () => {
    pushGTM('hero_cta_click', {
      cta_label: primaryCTA?.label,
      cta_href: primaryCTA?.href,
      cta_type: 'primary',
      page_section: 'hero',
      hero_eyebrow: eyebrow,
    });
  };

  const handleSecondaryCTA = () => {
    pushGTM('hero_cta_click', {
      cta_label: secondaryCTA?.label,
      cta_href: secondaryCTA?.href,
      cta_type: 'secondary',
      page_section: 'hero',
      hero_eyebrow: eyebrow,
    });
  };

  return (
    <section style={{ background, padding, overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="split-hero-grid">

          {/* ── Left column: text ───────────────────────────────────────────── */}
          <div>
            {/* Eyebrow / SEO H1 — always an <h1> for semantic correctness.
                When seoH1 is provided it replaces the eyebrow text entirely.
                When no seoH1, the eyebrow label itself becomes the h1. */}
            <h1 className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>
              {seoH1 || eyebrow}
            </h1>

            {/* Visual heading — h1 when no seoH1 present, h2 when seoH1 takes the h1 role */}
            {seoH1 ? (
              <h2
                className="animate-fade-up delay-100"
                style={{
                  fontSize: 'clamp(1.875rem,4.5vw,3.25rem)',
                  fontWeight: 700,
                  color: 'var(--dark)',
                  marginBottom: '1.25rem',
                  lineHeight: 1.12,
                  letterSpacing: '-0.03em',
                }}
              >
                {title}
              </h2>
            ) : (
              <h1
                className="animate-fade-up delay-100"
                style={{
                  fontSize: 'clamp(1.875rem,4.5vw,3.25rem)',
                  fontWeight: 700,
                  color: 'var(--dark)',
                  marginBottom: '1.25rem',
                  lineHeight: 1.12,
                  letterSpacing: '-0.03em',
                }}
              >
                {title}
              </h1>
            )}

            {description && (
              <p
                className="animate-fade-up delay-200"
                style={{
                  fontSize: 'clamp(1rem,1.8vw,1.1875rem)',
                  color: 'var(--body)',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  lineHeight: 1.55,
                }}
              >
                {description}
              </p>
            )}

            {body && (
              <p
                className="animate-fade-up delay-250"
                style={{
                  fontSize: 'clamp(0.875rem,1.5vw,1rem)',
                  color: 'var(--body)',
                  marginBottom: '2rem',
                  lineHeight: 1.75,
                  maxWidth: '38rem',
                }}
              >
                {body}
              </p>
            )}

            {!body && description && (
              <div style={{ marginBottom: '0.75rem' }} />
            )}

            <div
              className="animate-fade-up delay-300"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: body ? 0 : '1.25rem' }}
            >
              {primaryCTA && (
                <PrimaryBtn className="btn-primary" onClick={handlePrimaryCTA}>
                  {primaryCTA.label}
                  <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                    <ArrowRight />
                  </span>
                </PrimaryBtn>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="btn-secondary" onClick={handleSecondaryCTA}>
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          </div>

          {/* ── Right column: visual card ────────────────────────────────────── */}
          <div className="split-hero-card-col animate-fade-right delay-300">
            {visualCard}
          </div>

        </div>
      </div>
    </section>
  );
}
