import Link from 'next/link';

export const metadata = {
  title: "IBSi FinTech Journal Interview - Digital Trust & Network Risk",
  description: "Verafye CEO Abhishek Tuppada speaks with the IBSi FinTech Journal on why digital trust is becoming FinTech's new growth engine - and why fraud prevention needs better context, not more alerts.",
  openGraph: {
    title: "IBSi FinTech Journal Interview - Digital Trust & Network Risk",
    description: "Verafye CEO Abhishek Tuppada speaks with the IBSi FinTech Journal on why digital trust is becoming FinTech's new growth engine - and why fraud prevention needs better context, not more alerts.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "IBSi FinTech Journal Interview - Digital Trust & Network Risk",
    description: "Verafye CEO Abhishek Tuppada speaks with the IBSi FinTech Journal on why digital trust is becoming FinTech's new growth engine - and why fraud prevention needs better context, not more alerts.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/media/ibsi-fintech-journal-interview',
  },
};

const pullQuotes = [
  {
    quote: 'Identity verification is moving from a one-time onboarding checkpoint to a continuous digital trust capability.',
    context: 'On how identity verification evolves over the next five years',
  },
  {
    quote: 'Compliance should not be seen as a brake on innovation. Done well, it becomes a trust infrastructure for responsible scale.',
    context: 'On how FinTech startups should balance innovation with compliance',
  },
  {
    quote: 'The real gap is not always the absence of tools. It is the absence of a connected context.',
    context: 'On where the real gap sits in fraud and AML operations today',
  },
  {
    quote: 'Where alerts become context, context becomes decisions, and decisions become auditable outcomes.',
    context: 'On the connective layer Verafye aims to build for financial institutions',
  },
];

export default function IBSiInterviewPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>MEDIA &middot; THE BIG INTERVIEW</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.75rem,4.5vw,3rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Why Digital Trust Is Becoming FinTech's New Growth Engine
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: '0.9375rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Abhishek Tuppada, Co-Founder &amp; CEO, FinFusion Solutions &middot; Interviewed by Puja Sharma, Assistant Editor, IBS Intelligence &middot; IBSi FinTech Journal, June 2026
            </p>
            <div className="animate-fade-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="/media/verafye-ibsi-fintech-journal-interview-june-2026.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Read the Full Interview (PDF)
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </span>
              </a>
              <a href="https://ibsintelligence.com/ibsi-india-fintech-journal/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Visit the IBSi FinTech Journal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. HERO QUOTE ───────────────────────────────────────────────────── */}
      <section style={{ padding: '2.5rem 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '48rem' }}>
          <blockquote style={{ margin: 0, padding: '2.5rem 2.75rem', background: 'linear-gradient(165deg,#EFF6FF 0%,#F8FBFF 100%)', border: '1px solid rgba(30,111,183,0.15)', borderRadius: '14px', textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(1.25rem,2.6vw,1.75rem)', fontWeight: 700, color: 'var(--dark)', lineHeight: 1.4, letterSpacing: '-0.02em', margin: 0 }}>
              &ldquo;The future of fraud prevention is not more alerts, but better context behind every decision.&rdquo;
            </p>
            <footer style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.25rem' }}>
              Abhishek Tuppada, in the IBSi FinTech Journal, June 2026
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── 3. ABOUT THE INTERVIEW ──────────────────────────────────────────── */}
      <section style={{ padding: '2.5rem 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '48rem' }}>
          <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            In the June 2026 edition of the IBSi FinTech Journal, our Co-Founder and CEO Abhishek Tuppada sat down with IBS Intelligence to discuss why digital trust is shifting from a one-time onboarding checkpoint to a continuous capability - and what that shift demands from fraud, AML, and compliance operations.
          </p>
          <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.8 }}>
            The conversation covers the coordinated nature of modern financial crime - mule networks, synthetic identities, and AI-assisted attacks that cannot be understood through isolated alerts - and the thinking behind Verafye's graph-native Network Risk Intelligence: resolving entities, mapping cross-entity transaction networks, and giving lean risk teams investigation-grade evidence behind every decision.
          </p>
        </div>
      </section>

      {/* ── 4. PULL QUOTES ──────────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 2.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>From the Interview</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.25rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Highlights from the Conversation
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '64rem', margin: '0 auto' }}>
            {pullQuotes.map(item => (
              <div key={item.quote} className="card card-elevated" style={{ padding: '2rem' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="rgba(30,111,183,0.25)" style={{ marginBottom: '0.9rem' }}><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--dark)', lineHeight: 1.6, marginBottom: '0.9rem' }}>&ldquo;{item.quote}&rdquo;</p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', margin: 0 }}>{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ATTRIBUTION + CTA ────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.25rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            Read the Full Interview
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
            <a href="/media/verafye-ibsi-fintech-journal-interview-june-2026.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download the PDF
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              </span>
            </a>
            <Link href="/media" className="btn-secondary">All Media Coverage</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', fontStyle: 'italic', lineHeight: 1.7, maxWidth: '40rem', margin: '0 auto' }}>
            This interview first appeared in the <a href="https://ibsintelligence.com/ibsi-india-fintech-journal/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>IBSi FinTech Journal</a>, June 2026 edition (pages 8-9). &copy; IBS Intelligence 2026. Republished here with permission. Quotes reflect the interview as published.
          </p>
        </div>
      </section>

    </>
  );
}
