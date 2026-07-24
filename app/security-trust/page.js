import Link from 'next/link';

export const metadata = {
  title: "Enterprise Security & Trust for Fraud & AML Teams",
  description: "Protect sensitive investigation data with enterprise-grade security, compliance controls and governance built for regulated institutions.",
  keywords: ["enterprise security", "compliance controls", "data protection", "information security", "governance and risk management"],
  openGraph: {
    title: "Enterprise Security & Trust for Fraud & AML Teams",
    description: "Protect sensitive investigation data with enterprise-grade security, compliance controls and governance built for regulated institutions.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Enterprise Security & Trust for Fraud & AML Teams",
    description: "Protect sensitive investigation data with enterprise-grade security, compliance controls and governance built for regulated institutions.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/security-trust',
  },
};

export default function SecurityTrustPage() {
  return (
    <>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Security &amp; Trust</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Security, Trust, and Regulatory-Aligned Infrastructure
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Built for regulated payment platforms and financial institutions that require strong security foundations, controlled data handling, and infrastructure aligned with evolving regulatory expectations.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Verafye is designed for environments where security, operational integrity, and data protection are non-negotiable. The platform supports controlled access, reviewer controls, evidence packs, audit-ready case records, and privacy-conscious investigation workflows - helping regulated payment platforms, fintechs, and financial institutions handle sensitive investigation data responsibly.
            </p>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <Link href="/risk-shadowing-review" className="btn-primary">
                Explore Risk Shadowing Review
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/platform" className="btn-secondary">Explore Platform</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SECURITY AND TRUST PRINCIPLES ────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Trust Foundations</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Security, Integrity, and Auditability by Design
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                title: 'Security-First Architecture',
                body: 'Verafye is designed from the ground up with security as a foundational requirement - not a layer added after the fact. System boundaries, access controls, and data handling patterns are built to meet the operating standards of financial institutions and regulated payment platforms.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/>
                  </svg>
                ),
                title: 'Controlled Access and Auditability',
                body: 'Access to data, decisions, and workflows is controlled, logged, and auditable throughout the platform. Every action taken within an investigation, every alert disposition, and every system interaction is traceable - supporting the governance requirements of enterprise financial crime operations.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                ),
                title: 'Explainable Decision Support',
                body: 'Verafye is designed to provide traceable context for alerts, scores, recommendations, and case actions - helping teams review and justify investigation outcomes to internal stakeholders and regulators.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                  </svg>
                ),
                title: 'Infrastructure Designed for Sensitive Financial Workflows',
                body: 'Verafye is purpose-built for the operational and data sensitivity requirements of financial crime teams - including fraud, AML, compliance, and investigation functions that handle regulated data across complex, multi-system environments.',
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2.5rem' }}>
                <div className={`card-icon ${item.gradient}`}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(1rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. DATA PROTECTION AND ARCHITECTURE APPROACH ────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Data and Architecture</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                Designed for Secure and Controlled Data Handling
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye's architecture reflects the data handling requirements of regulated payment platforms and financial institutions - with controlled access patterns, clearly defined system boundaries, and auditable data flows maintained consistently across the platform.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  ),
                  title: 'Controlled Access Patterns',
                  body: 'Data access within Verafye follows controlled, role-based patterns - ensuring that analysts, investigators, and system processes access only the data and functions appropriate to their role and workflow context. Reviewer controls support decision approval workflows, controlled case escalation, and audit-log integrity across investigation teams.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/>
                    </svg>
                  ),
                  title: 'Comprehensive Audit Trails',
                  body: 'All actions taken within the platform - investigations opened, alerts dispositioned, cases escalated, and data accessed - are logged and auditable. Evidence packs preserve linked signals, analyst notes, decision rationale, and supporting records inside each case, providing the audit-ready documentation that compliance and governance functions require.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  ),
                  title: 'Secure System Boundaries',
                  body: 'Verafye maintains clearly defined and secured system boundaries - controlling how data flows between internal components, external systems, and third-party integrations in a manner consistent with financial institution security requirements.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/>
                    </svg>
                  ),
                  title: 'Controlled Data Flows',
                  body: 'Data flows through the platform along defined, controlled pathways - with consistent handling standards applied across ingestion, processing, storage, and output to support data governance obligations.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>
                    </svg>
                  ),
                  title: 'Deployment Flexibility',
                  body: 'Verafye supports deployment models appropriate to the operating requirements of different institutions - enabling institutions to evaluate deployment options that align with their internal data residency, infrastructure, and security policies.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
                    </svg>
                  ),
                  title: 'Operational Transparency',
                  body: 'Investigation context, reviewer actions, and workflow steps are designed to be transparent and reviewable for internal compliance, risk, and governance teams.',
                },
              ].map(item => (
                <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                  <div className="card-icon-sm" style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. REGULATORY ALIGNMENT APPROACH ────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Regulatory Approach</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
                Aligned with Evolving Financial Crime Expectations
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye is designed to support financial institutions as they modernise fraud and AML infrastructure in response to evolving regulatory expectations - improving traceability, explainability, and operational effectiveness across financial crime workflows.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                {
                  step: '01',
                  title: 'Supports Modern Fraud, AML, and Investigation Workflows',
                  body: 'Verafye is purpose-built to support the operational workflows that regulators increasingly expect from financial crime functions - including structured investigation processes, documented decision trails, alert prioritisation, and cross-domain signal correlation across fraud and AML.',
                },
                {
                  step: '02',
                  title: 'Improves Traceability and Explainability',
                  body: 'Risk scores, alerts, and case recommendations within Verafye are designed to include traceable, documented reasoning - supporting the explainability obligations that regulators apply to automated decision-making in financial crime contexts.',
                },
                {
                  step: '03',
                  title: 'Helps Institutions Modernise Legacy Infrastructure',
                  body: 'Verafye connects signals from existing fraud, AML, payment, identity, device, and case systems into investigation-ready workflows built on the Verafye platform - helping organisations modernise their financial crime intelligence capabilities as they expand into Verafye-led investigation workflows over time.',
                },
                {
                  step: '04',
                  title: 'Aligned with Evolving Regulatory Expectations',
                  body: 'Regulatory expectations for financial crime infrastructure are moving in a consistent direction - toward greater connectivity, more explainable decisioning, and more structured investigation processes. Verafye is built with that direction in mind, supporting institutions as they align operations with evolving expectations across jurisdictions.',
                },
              ].map(item => (
                <div key={item.step} className="card" style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{item.step}</div>
                  <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4b. REGULATORY ALIGNMENT ────────────────────────────────────────── */}
      {/*
        NEW SECTION: Placed between the existing "Regulatory Approach" steps (Section 4)
        and "Operational Trust" (Section 5). Deepens regulatory narrative with
        multi-jurisdiction framing, SAR/STR workflow support, and alignment positioning
        without making certification-heavy claims.
      */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Regulatory Alignment</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
              Network Risk Intelligence Platform Aligned to Regulatory Change
            </h2>
            <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75, maxWidth: '48rem', margin: '0 auto' }}>
              Financial institutions operate across regulatory environments that differ by jurisdiction, institution type, and product - but share a common direction: greater transparency, stronger detection, and more structured investigation processes. Verafye is designed with that direction in mind.
            </p>
          </div>

          {/* Multi-jurisdiction support row */}
          <div style={{ maxWidth: '72rem', margin: '0 auto 3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                    </svg>
                  ),
                  title: 'Multi-Jurisdiction Support',
                  body: 'Verafye is designed to support risk and compliance teams operating under frameworks and supervisory expectations such as FINTRAC (Canada), FCA (UK), FinCEN (US), RBI (India), and other relevant regulators - depending on customer geography and configuration. The platform supports the investigation, documentation, and evidence-trail workflows that different regulatory contexts require, without claiming formal certification under any specific framework.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/>
                    </svg>
                  ),
                  title: 'SAR and STR Reporting Workflows',
                  body: 'Structured investigation workflows within Verafye are designed to support the evidence-gathering, case documentation, and decision-trail requirements that underpin SAR and STR filings across jurisdictions. Analysts work within a structured process that assembles the context regulators expect to see in high-quality filings - reducing reliance on manual reconstruction and improving consistency across the compliance team.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    </svg>
                  ),
                  title: 'Alignment Without Overclaiming',
                  body: 'Verafye does not position itself as a compliance solution or make claims of formal regulatory certification. It is infrastructure - designed to improve the detection, investigation, and documentation capabilities that help institutions operate within their own regulatory obligations, whatever those obligations are and wherever they apply.',
                },
              ].map(item => (
                <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                  <div className="card-icon-sm" style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Regulatory capability strips */}
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                {
                  label: 'Detection aligned to examiner expectations',
                  desc: 'Graph-native detection and cross-system signal correlation support the network-level risk visibility that financial crime examiners increasingly expect institutions to demonstrate - across fraud, AML, and payments monitoring functions.',
                },
                {
                  label: 'Audit-ready investigation records',
                  desc: 'Every case opened, progressed, escalated, and closed within Verafye generates a complete, traceable record - providing the documented evidence trail that supports both internal governance and external regulatory review.',
                },
                {
                  label: 'Explainability built into the decisioning layer',
                  desc: 'Risk scores, alert outputs, and case recommendations are backed by documented, traceable reasoning - supporting the explainability obligations that regulators apply to automated decision-making in AML and fraud contexts.',
                },
                {
                  label: 'Workflow consistency across teams and jurisdictions',
                  desc: 'Structured investigation workflows standardise how cases are assessed and resolved across different teams and operating environments - supporting consistency of outcome and quality of documentation for teams operating under frameworks such as FINTRAC (Canada), FCA (UK), FinCEN (US), and RBI (India), depending on customer geography and configuration.',
                },
              ].map(item => (
                <div key={item.label} className="card" style={{ padding: '1.75rem 2rem', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <div style={{ flexShrink: 0, marginTop: '0.2rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.4rem', lineHeight: 1.4 }}>{item.label}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer note */}
          <p style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '2.5rem', maxWidth: '44rem', margin: '2.5rem auto 0' }}>
            Verafye is designed to support institutions operating within their regulatory obligations. It does not constitute legal or compliance advice, and does not claim formal certification under any specific regulatory framework.
          </p>
        </div>
      </section>

      {/* ── 4c. CERTIFICATIONS AND TRUST POSTURE ────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <style>{`
          .sec-cert-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 1rem; max-width: 72rem; margin: 0 auto 2.5rem; }
          @media (max-width: 900px) { .sec-cert-grid { grid-template-columns: repeat(3,1fr); } }
          @media (max-width: 540px) { .sec-cert-grid { grid-template-columns: repeat(2,1fr); } }
          @media (max-width: 380px) { .sec-cert-grid { grid-template-columns: 1fr; } }
        `}</style>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Security Posture</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
              Security Frameworks and Trust Posture
            </h2>
            <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
              Verafye holds ISO/IEC 27001:2022, SOC 2 Type I, and PCI DSS SAQ-D, maintains GDPR-compliant data practices, and follows a privacy-by-design approach for personal data under India's DPDP framework. Certificates and audit reports are available on request during enterprise evaluation.
            </p>
          </div>

          {/* 5-block trust grid */}
          <div className="sec-cert-grid">
            {[
              {
                label: 'ISO/IEC 27001:2022 certified',
                logo: '/certifications/iso-27001.png',
                sub: 'Information Security Management',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                body: 'Security controls and information risk management practices aligned to ISO/IEC 27001 principles across platform design and operations.',
              },
              {
                label: 'SOC 2 Type I',
                logo: '/certifications/soc-aicpa.png',
                sub: 'Security & Availability Controls',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                ),
                body: 'Service organisation controls covering the security and availability trust service criteria relevant to enterprise SaaS platforms handling sensitive financial data.',
              },
              {
                label: 'PCI DSS SAQ-D',
                logo: '/certifications/pci-dss.png',
                sub: 'Payment Data Security',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" x2="23" y1="10" y2="10"/>
                  </svg>
                ),
                body: 'Payment Card Industry Data Security Standard self-assessment controls applicable to service providers storing, processing, or transmitting cardholder data.',
              },
              {
                label: 'GDPR-compliant',
                logo: '/certifications/gdpr.png',
                sub: 'EU Data Protection',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                ),
                body: 'Data handling, access controls, and processing practices implemented to meet GDPR principles for EU data protection. Verafye is GDPR-compliant; GDPR is a legislative framework, not a certification scheme.',
              },
              {
                label: 'India DPDP',
                sub: 'Privacy-by-Design Approach',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                  </svg>
                ),
                body: 'Privacy-by-design data handling, access controls, and transparency practices intended to support compliance with applicable Indian data protection requirements, reviewed as the DPDP framework continues its phased implementation.',
              },
            ].map(item => (
              <div key={item.label} className="card card-elevated" style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {item.logo ? (
                  <div style={{ height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '0.25rem' }}>
                    <img src={item.logo} alt={item.label} loading="lazy" style={{ maxHeight: '3rem', maxWidth: '130px', width: 'auto', height: 'auto', objectFit: 'contain' }} />
                  </div>
                ) : (
                  <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '8px', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.25rem' }}>
                    {item.icon}
                  </div>
                )}
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', lineHeight: 1.2 }}>{item.label}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)', lineHeight: 1.3 }}>{item.sub}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.65 }}>{item.body}</div>
              </div>
            ))}
          </div>

          {/* DPDP contextual note */}
          <div style={{ maxWidth: '72rem', margin: '0 auto 2rem', background: 'linear-gradient(135deg,#F5F9FF,#EEF4FF)', border: '1px solid rgba(30,111,183,0.12)', borderRadius: '12px', padding: '1.75rem 2rem' }}>
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, marginTop: '0.1rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>India Data Protection: Privacy-by-Design Approach</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>
                  Verafye follows a privacy-by-design approach for personal data processing, with access controls, transparency practices, and security measures intended to support compliance with applicable Indian data protection requirements. Our controls and policies are reviewed and updated as the DPDP framework continues its phased implementation.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)', maxWidth: '56rem', margin: '0 auto', lineHeight: 1.65 }}>
            Verafye holds ISO/IEC 27001:2022, SOC 2 Type I, and PCI DSS SAQ-D. Certificates and audit reports are available on request during enterprise evaluation. GDPR-compliant means our data handling practices are implemented to meet GDPR principles; GDPR is a legislative framework, not a certification scheme. For India, Verafye follows a privacy-by-design approach for personal data processing intended to support compliance with applicable Indian data protection requirements; controls and policies are reviewed and updated as the DPDP framework continues its phased implementation.
          </p>
        </div>
      </section>

      {/* ── 5. OPERATIONAL TRUST AND DEPLOYMENT MODEL ───────────────────────── */}
      <section className="section-light" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Operational Trust</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Reliable, Consistent Operations at Institutional Scale
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>
                  </svg>
                ),
                title: 'Flexible Deployment Models',
                body: 'Verafye supports deployment configurations appropriate to the operating requirements and data governance policies of different institution types - enabling enterprise buyers to evaluate options aligned with their internal infrastructure, residency, and security standards.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
                title: 'Operational Segregation',
                body: 'Verafye maintains clear separation between operational functions, data domains, and access scopes - ensuring that fraud, AML, compliance, and investigation workflows operate within appropriately segregated environments consistent with enterprise governance requirements.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                ),
                title: 'Investigation Workflow Transparency',
                body: 'Investigation workflows within Verafye are structured, documented, and auditable end to end - providing compliance and operations leaders with full visibility into how cases are opened, progressed, escalated, and closed across fraud and AML functions.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                ),
                title: 'Scalable Platform Architecture',
                body: 'Verafye is architected to handle increasing data volumes, user growth, and signal complexity without degrading performance or requiring proportional platform investment - supporting the operational scale requirements of regulated payment platforms, fintechs, and growing financial institutions.',
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2.5rem' }}>
                <div className={`card-icon ${item.gradient}`}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(1rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ / ASSURANCE POINTS ───────────────────────────────────────── */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Common Questions</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Common Questions
            </h2>
          </div>
          <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: 'How does Verafye work with existing risk, fraud, AML, and payment systems?',
                a: 'Verafye begins with selected data feeds from your existing fraud, AML, payment, identity, device, and case systems - connecting those signals into one network risk view. As outcomes are proven, teams expand into Verafye-led investigation workflows where fragmented signals are resolved, entities mapped, and investigation cases built and closed.',
              },
              {
                q: 'Can Verafye connect to our existing fraud, AML, and payments infrastructure?',
                a: 'Verafye works with the data your fraud monitoring, AML transaction monitoring, payments, identity, and case management systems can provide - through exports, event streams, or APIs where available. Integration scope is defined during evaluation: a scoped pilot with agreed data feeds, defined use cases, and clean target outcomes, expanding once outcomes are proven.',
              },
              {
                q: 'Is Verafye designed for investigation auditability?',
                a: 'Auditability is a core design principle. All investigation actions, alert dispositions, case progressions, and system decisions within Verafye are logged and traceable - providing the documented record that compliance, governance, and regulatory review functions require.',
              },
              {
                q: 'Can Verafye support different deployment models?',
                a: 'Verafye supports deployment configurations appropriate to the operating requirements of different institution types. Enterprise buyers are encouraged to engage directly to discuss deployment options that align with their specific infrastructure, data residency, and security policies.',
              },
              {
                q: 'How does Verafye handle explainability for AI-assisted decisions?',
                a: 'Verafye is designed so that risk scores, alerts, and case recommendations can be reviewed with traceable, documented context - enabling institutions to review, understand, and justify outputs to internal stakeholders and regulators without relying on black-box outputs.',
              },
              {
                q: 'How does Verafye approach data handling for sensitive financial workflows?',
                a: 'Verafye applies controlled access patterns, secure system boundaries, and auditable data flows throughout the platform. Data handling is designed to meet the sensitivity requirements of financial crime operations - including fraud, AML, compliance, and investigation functions that handle regulated and sensitive financial data.',
              },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.0625rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', lineHeight: 1.4 }}>{item.q}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ────────────────────────────────────────────────────── */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            Trusted Network Risk Intelligence Platform for Financial Crime Operations
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 1.25rem' }}>
            Explore how Verafye supports secure, reliable, and intelligence-led financial crime operations across fraud, AML, and payments.
          </p>
          <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', maxWidth: '34rem', margin: '0 auto 2.5rem' }}>
            Regulated payment platforms, fintechs, and financial institutions operating across jurisdictions are building connected risk intelligence that supports both operational excellence and regulatory alignment. Verafye is designed for that environment.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/risk-shadowing-review" className="btn-primary">
              Explore Risk Shadowing Review
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
