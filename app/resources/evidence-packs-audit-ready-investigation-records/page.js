import Link from 'next/link';
import PdfDownloadButton from '../PdfDownloadButton';

export const metadata = {
  title: "Build Audit-Ready Investigation Records",
  description: "Learn how structured evidence packs improve investigation transparency, regulatory reporting and audit readiness for financial crime teams.",
  keywords: ["audit ready investigations", "investigation evidence management", "compliance reporting", "regulatory audit trails", "investigation documentation"],
  openGraph: {
    title: "Build Audit-Ready Investigation Records",
    description: "Learn how structured evidence packs improve investigation transparency, regulatory reporting and audit readiness for financial crime teams.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Build Audit-Ready Investigation Records",
    description: "Learn how structured evidence packs improve investigation transparency, regulatory reporting and audit readiness for financial crime teams.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/resources/evidence-packs-audit-ready-investigation-records',
  },
};

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const relatedResources = [
  {
    title: 'The Missing Layer in Modern Financial Crime Investigations',
    category: 'Product Insights',
    readingTime: '5 min read',
    href: '/resources/what-is-investigation-intelligence/',
    ctaLabel: 'Read Article',
  },
  {
    title: 'Mule Account Investigations: Why Connected Signals Matter',
    category: 'Use Case Deep Dives',
    readingTime: '7 min read',
    href: '/resources/mule-account-investigations-connected-signals/',
    ctaLabel: 'Explore Use Case',
  },
];

export default function ArticlePage() {
  return (
    <>
      {/* ── BREADCRUMB ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '1.5rem 0 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav style={{ fontSize: '0.8125rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/resources/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Resources</Link>
            <span>/</span>
            <span style={{ color: 'var(--body)' }}>Evidence Packs: Building Audit-Ready Investigation Records</span>
          </nav>
        </div>
      </section>

      {/* ── ARTICLE HEADER ─────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 70%)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '4px', padding: '0.25rem 0.625rem' }}>
                Regulatory Perspectives
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>5 min read</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>May 2026</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.625rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.025em' }}>
              Evidence Packs: Building Audit-Ready Investigation Records
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', lineHeight: 1.8, fontWeight: 400, borderLeft: '3px solid var(--primary)', paddingLeft: '1.25rem', marginLeft: 0 }}>
              Every financial crime investigation leaves a trail - or it should. The quality of that trail determines whether a decision can be explained, defended, and trusted when it is examined later.
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ───────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '3rem 0 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>

            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Financial crime teams make hundreds of risk decisions every day. Each one needs to be defensible - not just in the moment, but when an auditor, regulator, or senior leader asks about it weeks or months later. The evidence pack is what makes that defensibility possible: a structured record of what was reviewed, what was found, and why a decision was made.
            </p>

            {/* ── Section 1 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              1. Why Investigation Records Matter
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Regulators and internal auditors are increasingly focused not just on outcomes - whether a suspicious transaction was blocked or a case was filed - but on process. How was the investigation conducted? What signals were considered? Who reviewed the case? What rationale supported the final decision?
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              For financial institutions and regulated platforms, the ability to reconstruct an investigation - to show what happened, in what order, and why - is as important as the decision itself. When a regulatory examination arrives, or when an internal audit review is triggered, the investigation record is what gets evaluated.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Teams that document well are in a position to defend their decisions clearly. Teams that do not are in a position where good decisions look indistinguishable from poor ones - because the evidence trail that would demonstrate quality is absent.
            </p>

            {/* ── Section 2 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              2. Why Manual Documentation Creates Risk
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              In many investigation environments, documentation is treated as an administrative task - something that happens after the real work is done. An analyst reaches a decision, then types up notes, then moves to the next alert. Under pressure, those notes get shorter. Under more pressure, they do not get written at all.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Manual documentation creates three categories of risk. First, it is inconsistent - different analysts document at different levels of detail, which means the record of two identical cases may look very different. Second, it is incomplete - under time pressure, documentation is the first thing cut. Third, it is unreliable - notes written after the fact may not accurately reflect the reasoning that drove the decision in the moment.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              When documentation is a separate step, it is also a step that can be skipped. And when it is skipped, the investigation record is a gap - not just a weakness, but an absence.
            </p>

            {/* ── Section 3 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              3. What an Evidence Pack Should Include
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              A strong evidence pack is not simply a collection of notes. It is a structured record that captures the full context of an investigation - from the triggering signal through to the final decision. That record should include:
            </p>
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem 1.75rem', marginBottom: '1.5rem' }}>
              {[
                'Alert context - what triggered the investigation, the signal type, and the system that generated it.',
                'Entity profile - account history, customer information, and relevant prior activity.',
                'Entity links - connections to related accounts, devices, identities, beneficiaries, or transactions that are relevant to the investigation.',
                'Analyst notes - the rationale for review steps taken and the reasoning behind the decision.',
                'Reviewer actions - what was reviewed, what was escalated, what was closed, and by whom.',
                'Decision rationale - a clear record of why the final outcome was reached.',
                'Timestamps - when each step occurred, creating a traceable timeline of the investigation.',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.625rem' }}>
                  <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem' }} />
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Together, these elements create a record that is complete enough to reconstruct the investigation from scratch - which is exactly what regulatory examination readiness requires.
            </p>

            {/* ── Section 4 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              4. Why Audit-Ready Does Not Mean Audit-Proof
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              This distinction matters. Audit-ready means that when an examination or review occurs, the team has the records to support it - structured, complete, and accessible. Audit-proof is not a real concept in financial crime operations, and any claim to the contrary should be treated with skepticism.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Regulators and auditors evaluate judgment, process, and documentation quality. A well-documented investigation where the analyst made a reasonable decision based on available evidence will withstand scrutiny even if hindsight later reveals additional context. A poorly documented investigation - even one that reached the right outcome - may not.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              The goal of strong evidence packs is not to prevent all scrutiny. It is to ensure that scrutiny finds a clear, honest record of how each decision was made - and that the record demonstrates a consistent, professional standard of investigation.
            </p>

            {/* ── Section 5 ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              5. How Evidence Packs Support Internal Governance and Regulatory Examination Readiness
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Evidence packs serve two audiences: external examiners and internal governance functions. Both matter.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              For external examiners - regulators, auditors, or reviewing bodies - evidence packs provide the structured record that demonstrates the institution took financial crime obligations seriously. They show that investigations were conducted systematically, decisions were documented, and the team operated within a defined and consistent process.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              For internal governance, evidence packs give compliance leadership and management visibility into how investigations are actually being conducted. Review quality can be assessed. Patterns in decision-making can be identified. Analysts who consistently document at a high standard can be recognized. Gaps in process can be identified before they become examination findings.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              That internal visibility is itself a risk management function. Teams that can see how investigations are progressing - not just whether cases are closed - are in a much stronger position to identify and address operational risk before it becomes a compliance problem.
            </p>

            {/* ── Where Verafye Fits ── */}
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              Where Verafye Fits
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Verafye is designed to help regulated financial platforms create structured, explainable, and evidence-ready investigation workflows. By connecting fraud, AML, payment, identity, device, and case signals into a single investigation view, Verafye helps risk teams:
            </p>
            <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem 1.75rem', marginBottom: '1.5rem' }}>
              {[
                'Build investigation records as a natural by-product of the review workflow - not as a separate documentation step.',
                'Capture entity context, reviewer actions, and decision rationale in a structured, timestamped format.',
                'Maintain consistent documentation standards across every analyst on the team.',
                'Surface evidence packs that are complete enough to support internal governance reviews and regulatory examination readiness.',
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
                Audit-ready investigation records are not a documentation exercise - they are a reflection of how well a team is operating. The teams that build evidence packs into their standard workflow are the ones that can explain every decision, at any time, to anyone who asks.
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
                Build stronger investigation records with Verafye
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0, maxWidth: '36rem' }}>
                Verafye helps regulated financial platforms create structured, explainable, and evidence-ready investigation workflows built on the Verafye platform.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', flexShrink: 0 }}>
              <Link href="/risk-shadowing-review" className="btn-primary">Explore Risk Shadowing Review</Link>
              <Link href="/platform/" className="btn-secondary">Explore Platform</Link>
              <PdfDownloadButton
                pdfPath="/downloads/resources/evidence-packs-audit-ready-investigation-records.pdf"
                pdfFilename="evidence-packs-audit-ready-investigation-records.pdf"
                resourceTitle="Evidence Packs: Building Audit-Ready Investigation Records"
                resourceCategory="Regulatory Perspectives"
                articleSlug="evidence-packs-audit-ready-investigation-records"
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
  );
}
