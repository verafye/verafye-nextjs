import Link from 'next/link';
import PdfDownloadButton from '../PdfDownloadButton';

export const metadata = {
  title: { absolute: "Modernize Risk Investigations Beyond Alert Queues" },
  description: "Discover how risk teams replace fragmented alerts with connected investigations, explainable decisions and stronger governance.",
  keywords: [
    "investigation workflow modernization",
    "risk operations",
    "investigation management",
    "fraud operations",
    "aml operations",
  ],
  openGraph: {
    title: "Modernize Risk Investigations Beyond Alert Queues",
    description: "Discover how risk teams replace fragmented alerts with connected investigations, explainable decisions and stronger governance.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Modernize Risk Investigations Beyond Alert Queues",
    description: "Discover how risk teams replace fragmented alerts with connected investigations, explainable decisions and stronger governance.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/resources/from-alerts-to-decisions-risk-team-operating-model',
  },
};

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const relatedResources = [
  {
    title: 'What Is Investigation Intelligence?',
    category: 'Product Insights',
    readingTime: '5 min read',
    href: '/resources/what-is-investigation-intelligence/',
    ctaLabel: 'Read Article',
  },
  {
    title: 'Why Fraud and AML Investigations Break Down in Payment Platforms',
    category: 'Industry Insights',
    readingTime: '6 min read',
    href: '/resources/why-fraud-and-aml-investigations-break-down-in-payment-platforms/',
    ctaLabel: 'Read Insight',
  },
];

export default function ArticlePage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "Article", "headline": "Modernize Risk Investigations Beyond Alert Queues", "description": "How risk teams can move from alert queue management to investigation-led operating models using connected risk intelligence.", "url": "https://www.verafye.com/resources/from-alerts-to-decisions-risk-team-operating-model/", "publisher": {"@id": "https://www.verafye.com/#organization"}, "author": {"@id": "https://www.verafye.com/#organization"}}' }} />
      <>
      {/* ── BREADCRUMB ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '1.5rem 0 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav style={{ fontSize: '0.8125rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/resources/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Resources</Link>
            <span>/</span>
            <span style={{ color: 'var(--body)' }}>From Alerts to Decisions: The New Operating Model for Risk Teams</span>
          </nav>
        </div>
      </section>

      {/* ── ARTICLE HEADER ─────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 70%)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '4px', padding: '0.25rem 0.625rem' }}>
                Product Insights
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>6 min read</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>May 2026</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.625rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.025em' }}>
              From Alerts to Decisions: The New Operating Model for Risk Teams
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', lineHeight: 1.8, fontWeight: 400, borderLeft: '3px solid var(--primary)', paddingLeft: '1.25rem', marginLeft: 0 }}>
              Modern risk teams face an operational reality that detection alone cannot solve: the volume of alerts has outpaced the capacity for structured, explainable investigation.
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ───────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '3rem 0 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>

            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              For most fraud, AML, compliance, and payment risk teams, the daily challenge is not detecting risk - it is deciding what to do about it. Detection systems surface signals. Alert queues fill up. But the work of connecting those signals, building context, reviewing rationale, and reaching a defensible decision is often left to individual analysts working in isolation, without a consistent operating model.
            </p>

            {/* ── Section 1 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              1. Why Alert Queues Are No Longer Enough
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Alert queues were designed for a simpler environment. A transaction fires a rule. An analyst reviews it. A decision is made. That model worked when transaction volumes were lower, fraud patterns were more predictable, and regulatory expectations were less demanding.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Today, that model is under strain. Fraud and AML alerts arrive in higher volumes. Payment monitoring generates additional signals. Identity, device, and behavioral signals add further complexity. And regulators are increasingly focused not just on outcomes, but on how decisions were made and whether teams can explain them.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              An alert queue tells a team what needs attention. It does not tell them how to investigate it, what context matters, or how to document the outcome. That gap is where operational pressure builds.
            </p>

            {/* ── Section 2 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              2. The Gap Between Detection and Decisioning
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Detection and decisioning are different problems. Detection identifies that something may be wrong. Decisioning determines what is actually wrong, whether action is required, and what that action should be.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              The gap between them is where investigations live. And that gap is often filled informally - by analysts who know the right questions to ask, know which systems to check, and know how to piece together context from disconnected sources. That knowledge is valuable, but it is also fragile. It depends on individual experience, not a repeatable operating model.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              When experienced analysts leave, that institutional knowledge goes with them. When teams grow, the gap between how different people investigate the same type of case widens. The result is inconsistency - in review quality, in documentation, and in the decisions that reach the final record.
            </p>

            {/* ── Section 3 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              3. What Happens After an Alert Is Generated
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              When an alert fires, the investigation that follows typically involves several steps that most systems do not support in a structured way:
            </p>
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem 1.75rem', marginBottom: '1.5rem' }}>
              {[
                'Pulling account history from one system.',
                'Checking transaction detail from another.',
                'Reviewing prior alerts from a case management tool.',
                'Cross-referencing identity and device data from a third source.',
                'Manually documenting findings in a notes field or spreadsheet.',
                'Making a decision - and hoping it is explainable later.',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.625rem' }}>
                  <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem' }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              This is not a technology problem in isolation. It is an operating model problem. The systems exist. The data exists. What is missing is a structured way to connect them into a coherent investigation path.
            </p>

            {/* ── Section 4 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              4. Why Fragmented Context Slows Risk Teams
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              When investigation context is spread across multiple systems and has to be assembled manually, every review takes longer than it should. Analysts spend time gathering information rather than evaluating it. Time-to-decision stretches. Alert backlogs grow.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              More importantly, fragmented context creates blind spots. An analyst reviewing a payment alert may not see that the same account triggered an AML alert two weeks ago. A reviewer looking at an account may not see that the same device was flagged across three other accounts. These connections exist in the data - but they are invisible in a fragmented system.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Those blind spots are where risk accumulates without being seen, and where decisions are made without the full picture.
            </p>

            {/* ── Section 5 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              5. Moving from Analyst-Dependent Review to Structured Workflows
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              The new operating model for risk teams is built around structured investigation workflows that give every analyst a consistent path from alert to decision - regardless of experience level.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              A structured workflow does not replace analyst judgment. It supports it by ensuring that:
            </p>
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem 1.75rem', marginBottom: '1.5rem' }}>
              {[
                'Relevant context is surfaced at the point of review.',
                'Related alerts and prior cases are visible before a decision is made.',
                'Entity relationships - accounts, devices, identities, beneficiaries - are connected rather than siloed.',
                'Documentation is built into the workflow, not added as an afterthought.',
                'Escalation paths are defined and consistent.',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.625rem' }}>
                  <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem' }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              When investigation steps are structured, reviews become more consistent, faster, and more defensible - across every analyst on the team.
            </p>

            {/* ── Section 6 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              6. The Role of Entity Context, Reviewer Controls, and Evidence Trails
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Three elements define investigation quality in the new operating model: entity context, reviewer controls, and evidence trails.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Entity context means that when an analyst opens an alert, they can immediately see the full picture of the account or entity in question - not just the triggering event, but the account history, connected devices, linked identities, related transactions, prior alerts, and any existing case activity. That visibility is what transforms an alert from a data point into an investigation.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Reviewer controls mean that analysts have structured options for how to progress a case - not just a notes field. Clear actions, defined escalation paths, and documented decision points create a review record that can be audited and explained.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Evidence trails mean that every step in the investigation is captured - what was reviewed, what actions were taken, what rationale was documented, and when. That trail is what makes a decision audit-ready.
            </p>

            {/* ── Section 7 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              7. Why Lean Teams Need Operational Leverage
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Most fraud, AML, and payment risk teams are not large. They operate with limited headcount against growing alert volumes, increasing regulatory scrutiny, and expanding product surfaces. Hiring more analysts is rarely a scalable answer.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Operational leverage comes from structure. When investigation workflows surface the right context, reduce manual data gathering, and build documentation into the review process, teams can handle more cases with the same headcount - and handle them better.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              That is what the new operating model is built for: not more alerts reviewed, but better decisions made - consistently, at scale, with a clear record behind each one.
            </p>

            {/* ── Where Verafye Fits ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              Where Verafye Fits
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Verafye is built to support the shift from alert-centric operations to investigation-ready workflows. It connects fragmented fraud, AML, payment, identity, device, transaction, and case signals into structured review paths so teams can:
            </p>
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem 1.75rem', marginBottom: '1.5rem' }}>
              {[
                'Surface entity context at the point of investigation.',
                'Connect related alerts, cases, and prior activity automatically.',
                'Build documentation into the review workflow rather than adding it afterward.',
                'Maintain evidence-ready records that support internal governance and regulatory examination readiness.',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.625rem' }}>
                  <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem' }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '0.75rem', padding: '1.75rem 2rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Takeaway</p>
              <p style={{ fontSize: '1rem', color: 'var(--dark)', lineHeight: 1.75, fontWeight: 500, margin: 0 }}>
                The teams that will operate most effectively in the years ahead are not those with the most alerts suppressed - they are those with the clearest path from alert to decision, and the strongest record behind each one.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SOFT CTA ───────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-blue)', borderTop: '1px solid rgba(30,111,183,0.1)', borderBottom: '1px solid rgba(30,111,183,0.1)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem', letterSpacing: '-0.015em' }}>
                See how Verafye helps risk teams move from alerts to decisions faster
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0, maxWidth: '36rem' }}>
                Verafye connects fragmented fraud, AML, payment, identity, device, transaction, and case signals into investigation-ready workflows built on the Verafye platform.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', flexShrink: 0 }}>
              <Link href="/risk-shadowing-review" className="btn-primary">Explore Risk Shadowing Review</Link>
              <Link href="/platform/" className="btn-secondary">Explore Platform</Link>
              <PdfDownloadButton
                pdfPath="/downloads/resources/from-alerts-to-decisions-risk-team-operating-model.pdf"
                pdfFilename="from-alerts-to-decisions-risk-team-operating-model.pdf"
                resourceTitle="From Alerts to Decisions: The New Operating Model for Risk Teams"
                resourceCategory="Product Insights"
                articleSlug="from-alerts-to-decisions-risk-team-operating-model"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED RESOURCES ──────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Related Resources</p>
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '2rem', letterSpacing: '-0.015em' }}>
              Continue reading
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(18rem,1fr))', gap: '1.5rem' }}>
              {relatedResources.map(r => (
                <Link key={r.title} href={r.href} style={{ textDecoration: 'none', display: 'block' }} className="card-hover">
                  <div className="card card-elevated" style={{ padding: '1.75rem' }}>
                    <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{r.category}</p>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', lineHeight: 1.35 }}>{r.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>{r.readingTime}</span>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>{r.ctaLabel} {ARROW}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/resources/" style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}>
                Back to all resources {ARROW}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
    </>
  );
}
