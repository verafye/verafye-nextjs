import Link from 'next/link';
import { ProductTrialHeroPanel } from '../components/HomepageHeroPanel';

export const metadata = {
  title: "Network Risk Intelligence for Fraud & AML Teams | Verafye",
  description: "Uncover hidden financial crime networks, accelerate investigations and improve AML readiness with graph-native Network Risk Intelligence from Verafye.",
  keywords: ["network risk intelligence platform", "financial crime investigation platform", "fraud detection software", "aml compliance software", "graph intelligence platform", "entity resolution", "transaction intelligence", "investigation intelligence", "financial crime intelligence", "risk analytics"],
  openGraph: {
    title: "Network Risk Intelligence for Fraud & AML Teams | Verafye",
    description: "Uncover hidden financial crime networks, accelerate investigations and improve AML readiness with graph-native Network Risk Intelligence from Verafye.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Network Risk Intelligence for Fraud & AML Teams | Verafye",
    description: "Uncover hidden financial crime networks, accelerate investigations and improve AML readiness with graph-native Network Risk Intelligence from Verafye.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/',
  },
};

export default function Page() {
  return (
    <>

{/* ─── HERO ──────────────────────────────────────────────────────────────── */}
<section style={{'background':'linear-gradient(155deg,#EFF6FF 0%,#F8FBFF 45%,#ffffff 100%)','overflow':'hidden'}}>
  <div className="container" style={{'paddingTop':'3rem','paddingBottom':'5rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'2.5rem','alignItems':'center'}}>
      <div style={{'maxWidth':'36rem'}}>

        {/* Eyebrow */}
        <p className="eyebrow animate-fade-up" style={{'marginBottom':'1.25rem'}}>
          Built for lean fraud, AML, and risk teams
        </p>

        {/* H1 */}
        <h1 className="animate-fade-up delay-100" style={{'fontSize':'clamp(1.875rem,5vw,3.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem','lineHeight':'1.15','letterSpacing':'-0.025em'}}>
          Graph-Native Network Risk Intelligence for Fraud, AML and Risk Teams
        </h1>

        {/* Sub-line */}
        <p className="animate-fade-up delay-150" style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--dark)','fontWeight':'600','marginBottom':'1.25rem','lineHeight':'1.4'}}>
          The intelligent investigation layer for regulated financial platforms - connect alerts, explain risk, and close cases faster, without enterprise-heavy complexity.
        </p>

        {/* Body */}
        <p className="animate-fade-up delay-200" style={{'fontSize':'clamp(0.875rem,2vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem'}}>
          Verafye connects fraud, AML, payment, identity, device and behavior signals into one network view - resolving entities, mapping cross-entity transaction networks and scoring risk in real time, so lean teams move from fragmented alerts to explainable, audit-ready cases faster.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300" style={{'display':'flex','flexWrap':'wrap','gap':'0.75rem','marginBottom':'1.5rem'}}>
          <Link href="/request-demo" className="btn-primary">
            Request Demo
            <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </Link>
          <Link href="/platform" className="btn-secondary">Explore Platform</Link>
        </div>

        {/* Trust micro-copy */}
        <p className="animate-fade-up delay-400" style={{'fontSize':'0.813rem','color':'var(--muted)','marginBottom':'1.5rem'}}>
          Built for fraud, AML, compliance, and risk teams operating across fragmented systems and growing regulatory expectations.
        </p>

        {/* Tags */}
        <div className="animate-fade-up delay-500" style={{'display':'flex','flexWrap':'wrap','gap':'0.625rem'}}>
          <span className="tag">Connected Signals</span>
          <span className="tag">Alert Clustering</span>
          <span className="tag">Graph Intelligence</span>
          <span className="tag">Case Intelligence</span>
        </div>

      </div>
      <ProductTrialHeroPanel />
    </div>
  </div>
</section>

{/* ─── OUTCOME STRIP ─────────────────────────────────────────────────────── */}
<section style={{'padding':'2rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)','borderBottom':'1px solid var(--border)'}}>
  <div className="container">
    <div style={{'display':'grid','gridTemplateColumns':'repeat(4,1fr)','gap':'1.5rem','maxWidth':'72rem','margin':'0 auto'}}>

      <div style={{'display':'flex','alignItems':'center','gap':'0.875rem','padding':'1rem 1.25rem','background':'#fff','borderRadius':'10px','border':'1px solid var(--border)','boxShadow':'0 1px 4px rgba(0,0,0,0.04)'}}>
        <div style={{'flexShrink':0,'width':'2.25rem','height':'2.25rem','borderRadius':'8px','background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.15)','display':'flex','alignItems':'center','justifyContent':'center'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <span style={{'fontSize':'0.875rem','fontWeight':'600','color':'var(--dark)','lineHeight':1.3}}>Investigate faster</span>
      </div>

      <div style={{'display':'flex','alignItems':'center','gap':'0.875rem','padding':'1rem 1.25rem','background':'#fff','borderRadius':'10px','border':'1px solid var(--border)','boxShadow':'0 1px 4px rgba(0,0,0,0.04)'}}>
        <div style={{'flexShrink':0,'width':'2.25rem','height':'2.25rem','borderRadius':'8px','background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.15)','display':'flex','alignItems':'center','justifyContent':'center'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
        </div>
        <span style={{'fontSize':'0.875rem','fontWeight':'600','color':'var(--dark)','lineHeight':1.3}}>Connect related alerts into cases</span>
      </div>

      <div style={{'display':'flex','alignItems':'center','gap':'0.875rem','padding':'1rem 1.25rem','background':'#fff','borderRadius':'10px','border':'1px solid var(--border)','boxShadow':'0 1px 4px rgba(0,0,0,0.04)'}}>
        <div style={{'flexShrink':0,'width':'2.25rem','height':'2.25rem','borderRadius':'8px','background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.15)','display':'flex','alignItems':'center','justifyContent':'center'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
        </div>
        <span style={{'fontSize':'0.875rem','fontWeight':'600','color':'var(--dark)','lineHeight':1.3}}>Surface hidden networks</span>
      </div>

      <div style={{'display':'flex','alignItems':'center','gap':'0.875rem','padding':'1rem 1.25rem','background':'#fff','borderRadius':'10px','border':'1px solid var(--border)','boxShadow':'0 1px 4px rgba(0,0,0,0.04)'}}>
        <div style={{'flexShrink':0,'width':'2.25rem','height':'2.25rem','borderRadius':'8px','background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.15)','display':'flex','alignItems':'center','justifyContent':'center'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        <span style={{'fontSize':'0.875rem','fontWeight':'600','color':'var(--dark)','lineHeight':1.3}}>Maintain audit-ready decisions</span>
      </div>

    </div>
  </div>
</section>

{/* ─── TRUST / SECURITY STRIP ───────────────────────────────────────────── */}
{/* GDPR is labelled "GDPR-aligned" - not "certified" - as GDPR is not a cert.
    4 blocks must always render in a single row on desktop (grid-template-columns: repeat(4,1fr)). */}
<section style={{'padding':'2.5rem 0','background':'#fff','borderBottom':'1px solid var(--border)'}}>
  <style>{`
    .cert-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 1rem; max-width: 72rem; margin: 0 auto; }
    @media (max-width: 900px) { .cert-grid { grid-template-columns: repeat(3,1fr); } }
    @media (max-width: 540px) { .cert-grid { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 380px) { .cert-grid { grid-template-columns: 1fr; } }
  `}</style>
  <div className="container">
    <p style={{'textAlign':'center','fontSize':'0.6875rem','fontWeight':'600','color':'var(--muted)','textTransform':'uppercase','letterSpacing':'0.09em','marginBottom':'0.75rem'}}>
      Designed for security-conscious regulated environments
    </p>
    <p style={{'textAlign':'center','fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.65,'maxWidth':'44rem','margin':'0 auto 1.75rem'}}>
      Verafye is built for regulated financial platforms where security, privacy, auditability, and operational control matter from day one.
    </p>
    <div className="cert-grid">
      {[
        { label: 'ISO/IEC 27001',  sub: 'Information Security Management' },
        { label: 'SOC 2 Type I',   sub: 'Security & Availability Controls' },
        { label: 'PCI DSS: SAQ-D', sub: 'Payment Data Security' },
        { label: 'GDPR-aligned',   sub: 'EU Data Protection' },
        { label: 'DPDP-aware',     sub: 'India Data Protection Readiness' },
      ].map((b) => (
        <div key={b.label} style={{'display':'flex','flexDirection':'column','alignItems':'center','justifyContent':'center','gap':'0.25rem','padding':'1rem 1.25rem','border':'1px solid var(--border)','borderRadius':'10px','background':'#FAFBFD','textAlign':'center'}}>
          <span style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.01em','lineHeight':1.2}}>{b.label}</span>
          <span style={{'fontSize':'0.75rem','color':'var(--muted)','lineHeight':1.3}}>{b.sub}</span>
        </div>
      ))}
    </div>
    <p style={{'textAlign':'center','fontSize':'0.75rem','color':'var(--muted)','marginTop':'1.25rem','lineHeight':1.6,'maxWidth':'44rem','marginLeft':'auto','marginRight':'auto'}}>
      Verafye is designed with security controls and architectural patterns aligned to these frameworks. Framework certification status is available on request.
    </p>
  </div>
</section>

{/* ─── WHY VERAFYE IS DIFFERENT ──────────────────────────────────────────── */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.75rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>WHY VERAFYE</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>Investigation intelligence, not another detection engine</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','maxWidth':'48rem','margin':'0 auto'}}>
        Most tools generate more alerts. Verafye connects the alerts you already have, clusters related signals, builds entity and network context, and helps analysts move from review to decision with explainable case intelligence.
      </p>
    </div>
    <div className="grid-3" style={{'maxWidth':'80rem','margin':'0 auto'}}>

      <div className="card" style={{'padding':'2.5rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.375rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.75rem'}}>Built around investigations</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.0625rem)','color':'var(--body)','lineHeight':1.7}}>Verafye turns fragmented fraud, AML, payment, identity, device, and behavior signals into connected case context.</p>
      </div>

      <div className="card" style={{'padding':'2.5rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.375rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.75rem'}}>Graph-native by design</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.0625rem)','color':'var(--body)','lineHeight':1.7}}>Surface relationships across users, accounts, merchants, devices, transactions, and counterparties to expose hidden networks.</p>
      </div>

      <div className="card" style={{'padding':'2.5rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.375rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.75rem'}}>Designed for lean teams</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.0625rem)','color':'var(--body)','lineHeight':1.7}}>Help risk teams investigate faster without months of configuration, excessive manual review, or enterprise-heavy operational overhead.</p>
      </div>

    </div>
  </div>
</section>

{/* ─── BEFORE / AFTER VERAFYE ───────────────────────────────────────────── */}
<section style={{'padding':'4rem 0','background':'var(--bg-tint)'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.75rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>BEFORE VERAFYE / AFTER VERAFYE</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>What changes when your alerts become investigations</h2>
    </div>
    <div className="grid-2" style={{'maxWidth':'72rem','margin':'0 auto','gap':'2rem'}}>

      {/* BEFORE */}
      <div style={{'padding':'2.5rem','background':'#FEF2F2','border':'1px solid #FECACA','borderRadius':'12px'}}>
        <p style={{'fontSize':'0.6875rem','fontWeight':'700','textTransform':'uppercase','letterSpacing':'0.1em','color':'#DC2626','marginBottom':'1.5rem'}}>Before Verafye</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'1.125rem'}}>
          {[
            'Fragmented alerts across fraud, AML, and payments tools - no shared context',
            'Analysts manually piecing together cases from disconnected systems',
            'Hidden networks and mule rings missed by single-signal rule sets',
            'No structured case trail - decisions are hard to explain or audit',
            'High alert volumes, slow triage, and stretched lean risk teams',
          ].map((item, i) => (
            <div key={i} style={{'display':'flex','gap':'0.75rem','alignItems':'flex-start'}}>
              <div style={{'flexShrink':0,'marginTop':'0.2rem','width':'1.25rem','height':'1.25rem','borderRadius':'50%','background':'rgba(220,38,38,0.1)','border':'1px solid rgba(220,38,38,0.3)','display':'flex','alignItems':'center','justifyContent':'center'}}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </div>
              <p style={{'fontSize':'0.9375rem','color':'var(--body)','lineHeight':1.65,'margin':0}}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AFTER */}
      <div style={{'padding':'2.5rem','background':'#EFF6FF','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'12px'}}>
        <p style={{'fontSize':'0.6875rem','fontWeight':'700','textTransform':'uppercase','letterSpacing':'0.1em','color':'var(--primary)','marginBottom':'1.5rem'}}>After Verafye</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'1.125rem'}}>
          {[
            'Fraud, AML, payment, identity, device, and behavior signals connected in one investigation layer',
            'Analysts start with structured case context, summaries, and suggested next steps',
            'Graph intelligence surfaces hidden networks across accounts, devices, and counterparties',
            'Every decision is documented with audit logs, notes, and case evidence trails',
            'Alert clustering reduces noise - teams investigate faster with less manual effort',
          ].map((item, i) => (
            <div key={i} style={{'display':'flex','gap':'0.75rem','alignItems':'flex-start'}}>
              <div style={{'flexShrink':0,'marginTop':'0.2rem','width':'1.25rem','height':'1.25rem','borderRadius':'50%','background':'rgba(30,111,183,0.1)','border':'1px solid rgba(30,111,183,0.25)','display':'flex','alignItems':'center','justifyContent':'center'}}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <p style={{'fontSize':'0.9375rem','color':'var(--dark)','lineHeight':1.65,'margin':0,'fontWeight':500}}>{item}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

{/* ─── HOW VERAFYE WORKS ─────────────────────────────────────────────────── */}
<section className="section-light" style={{'padding':'3.5rem 0','overflow':'hidden'}}>
  <style>{`
    .hvw-flow { display: flex; align-items: stretch; max-width: 84rem; margin: 0 auto; gap: 0; }
    .hvw-step { flex: 1; min-width: 7.5rem; display: flex; flex-direction: column; align-items: center; text-align: center; background: #fff; border: 1px solid #E4EAF2; border-radius: 14px; padding: 1.625rem 0.875rem; }
    .hvw-arrow { display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 1.25rem; }
    @media (max-width: 800px) {
      .hvw-flow { flex-direction: column; align-items: stretch; gap: 0.5rem; }
      .hvw-arrow { transform: rotate(90deg); align-self: center; width: auto; margin: 0.1rem 0; }
    }
  `}</style>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>HOW VERAFYE WORKS</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>From fragmented alerts to explainable investigations</h2>
    </div>

    <div className="hvw-flow">
      {[
        { n:1, title:'Ingest Signals',      body:'Fraud, AML, payment, identity, device, and behavior signals arrive through APIs and integrations.',                 icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
        { n:2, title:'Resolve Entities',    body:'Users, accounts, devices, merchants, and counterparties are identified and normalized across sources.',             icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
        { n:3, title:'Cluster Alerts',      body:'Related alerts across fraud, AML, and payments are grouped into connected cases - not isolated queues.',          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg> },
        { n:4, title:'Build Graph Context', body:'Hidden relationships across entities, transactions, and counterparties are surfaced automatically.',               icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg> },
        { n:5, title:'Form Cases',          body:'Analysts start with structured context, risk summaries, and suggested next steps - not raw alert queues.',       icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
        { n:6, title:'Document Decisions',  body:'Every action is logged with audit trails, evidence, and case notes - built for compliance review.',               icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg> },
      ].flatMap((step, idx, arr) => {
        const stepEl = (
          <div key={`step-${step.n}`} className="hvw-step">
            <div style={{'width':'1.875rem','height':'1.875rem','borderRadius':'50%','background':'var(--primary)','color':'#fff','display':'flex','alignItems':'center','justifyContent':'center','fontSize':'0.75rem','fontWeight':'700','marginBottom':'0.75rem','flexShrink':0}}>{step.n}</div>
            <div style={{'width':'2.25rem','height':'2.25rem','borderRadius':'10px','background':'linear-gradient(135deg,rgba(30,111,183,0.08),rgba(90,178,255,0.08))','border':'1px solid rgba(30,111,183,0.14)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'0.75rem'}}>{step.icon}</div>
            <h3 style={{'fontSize':'clamp(0.8125rem,1.2vw,0.9375rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.375rem','lineHeight':1.2}}>{step.title}</h3>
            <p style={{'fontSize':'clamp(0.6875rem,0.95vw,0.75rem)','color':'var(--body)','lineHeight':1.6,'margin':0}}>{step.body}</p>
          </div>
        );
        if (idx < arr.length - 1) {
          return [stepEl, (
            <div key={`arrow-${idx}`} className="hvw-arrow">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C4D0E0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          )];
        }
        return [stepEl];
      })}
    </div>

    <div style={{'textAlign':'center','marginTop':'2rem'}}>
      <Link href="/platform" className="btn-secondary">
        Explore the Platform
        <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </Link>
    </div>
  </div>
</section>

{/* ─── TESTIMONIALS ──────────────────────────────────────────────────────── */}
<section style={{'padding':'3.5rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>RISK TEAM WORKFLOWS</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.5rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Common investigation challenges Verafye addresses</h2>
    </div>
    <div className="grid-3" style={{'maxWidth':'80rem','margin':'0 auto'}}>

      <div className="card" style={{'padding':'2rem','borderTop':'3px solid var(--primary)'}}>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.75,'marginBottom':'1.5rem'}}>
          Our analysts were spending more time pulling together context than actually investigating. Having alerts, entity relationships, and case history in one place changed the way the team works.
        </p>
        <div style={{'display':'flex','alignItems':'center','gap':'0.75rem'}}>
          <div style={{'width':'2.25rem','height':'2.25rem','borderRadius':'50%','background':'linear-gradient(135deg,rgba(30,111,183,0.12),rgba(90,178,255,0.12))','border':'1px solid rgba(30,111,183,0.2)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div>
            <p style={{'fontSize':'0.8125rem','fontWeight':'700','color':'var(--dark)','margin':0}}>Investigation Team Scenario</p>
            <p style={{'fontSize':'0.75rem','color':'var(--muted)','margin':0}}>Digital Bank</p>
          </div>
        </div>
      </div>

      <div className="card" style={{'padding':'2rem','borderTop':'3px solid var(--primary)'}}>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.75,'marginBottom':'1.5rem'}}>
          The graph view made it immediately obvious that what looked like three separate cases was actually one mule network. That kind of visibility used to take days of manual digging.
        </p>
        <div style={{'display':'flex','alignItems':'center','gap':'0.75rem'}}>
          <div style={{'width':'2.25rem','height':'2.25rem','borderRadius':'50%','background':'linear-gradient(135deg,rgba(30,111,183,0.12),rgba(90,178,255,0.12))','border':'1px solid rgba(30,111,183,0.2)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div>
            <p style={{'fontSize':'0.8125rem','fontWeight':'700','color':'var(--dark)','margin':0}}>Compliance Team Scenario</p>
            <p style={{'fontSize':'0.75rem','color':'var(--muted)','margin':0}}>Payment Services Provider</p>
          </div>
        </div>
      </div>

      <div className="card" style={{'padding':'2rem','borderTop':'3px solid var(--primary)'}}>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.75,'marginBottom':'1.5rem'}}>
          We run a lean risk team. What Verafye gives us is the ability to handle investigation volumes we couldn&apos;t have managed with the same headcount before.
        </p>
        <div style={{'display':'flex','alignItems':'center','gap':'0.75rem'}}>
          <div style={{'width':'2.25rem','height':'2.25rem','borderRadius':'50%','background':'linear-gradient(135deg,rgba(30,111,183,0.12),rgba(90,178,255,0.12))','border':'1px solid rgba(30,111,183,0.2)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div>
            <p style={{'fontSize':'0.8125rem','fontWeight':'700','color':'var(--dark)','margin':0}}>Risk Operations Scenario</p>
            <p style={{'fontSize':'0.75rem','color':'var(--muted)','margin':0}}>MSB - Crossborder Services</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ─── BUILT FOR REGULATED FINANCIAL PLATFORMS ───────────────────────────── */}
<section style={{'padding':'4rem 0','background':'var(--bg-tint)'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>BUILT FOR REGULATED FINANCIAL PLATFORMS</p>
      <h2 style={{'fontSize':'clamp(1.25rem,3.5vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Investigation intelligence across the financial ecosystem</h2>
    </div>
    <div className="grid-2" style={{'maxWidth':'72rem','margin':'0 auto'}}>

      {/* 1. PSPs, PayFacs & Processors - PRIMARY ICP */}
      <Link href="/industries/payment-processors-psps-payfacs" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>PSPs, PayFacs &amp; Processors</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Connect merchant, sub-merchant, transaction, and payment risk signals into faster, explainable investigations.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View Payments solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      {/* 2. MSBs & Remittance Platforms */}
      <Link href="/industries/msbs-remittance-platforms" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>MSBs &amp; Remittance Platforms</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Connect sender, beneficiary, agent and corridor signals into investigation-grade evidence - built for MSBs and remittance platforms under FINTRAC, FinCEN and FCA expectations.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View MSBs &amp; Remittance solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      {/* 3. Digital Banks / Neo Banks */}
      <Link href="/industries/digital-banks" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><path d="M7 15h.01"/><path d="M11 15h2"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>Digital Banks &amp; Neo Banks</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Connected risk intelligence for digital banking risk teams - covering mule detection, scam investigation, account abuse, payment fraud, and beneficiary-linked risk.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View Digital Banks solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      {/* 4. FinTech Payment Platforms */}
      <Link href="/industries/fintech-platforms" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>FinTech Payment Platforms</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Investigation intelligence for payment-enabled fintechs - embedded finance, wallets, cross-border, and BaaS platforms.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View FinTech Payment Platforms solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      {/* 5. Banks */}
      <Link href="/industries/banks" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>Banks</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Connect fraud, AML, and payment risk signals into explainable case workflows that support audit readiness and governance.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View Banks solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      {/* 6. Marketplaces */}
      <Link href="/industries/marketplaces" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Marketplaces</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Network risk intelligence for marketplace risk teams - seller fraud rings, buyer-seller collusion and mule-linked payout networks.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View Marketplaces solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      {/* 7. Digital Lending & BNPL - ALWAYS LAST */}
      <Link href="/industries/digital-lending-bnpl" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>Digital Lending &amp; BNPL</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Investigation intelligence for investigation-led lending and BNPL risk teams - surfacing mule-linked borrower networks, synthetic identity clusters and coordinated application rings. Verafye does not make credit or origination decisions.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View Lending &amp; BNPL solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      {/* 8. Don't see your segment - CTA card */}
      <Link href="/request-demo" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%','background':'linear-gradient(160deg,#EFF6FF 0%,#F8FBFF 100%)','border':'1px solid rgba(30,111,183,0.18)'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>Don't See Your Segment?</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Verafye adapts to regulated money movement of all kinds. Tell us about your risk and compliance workflows - we'll show you how connected investigations fit.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            Talk to our solutions team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

    </div>

    <div style={{'textAlign':'center','marginTop':'3rem'}}>
      <Link href="/customers" className="btn-secondary">
        View Customer Stories
        <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </Link>
    </div>
  </div>
</section>

{/* ─── PLATFORM CAPABILITY VALUE MAP ─────────────────────────────────────── */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <style>{`
    .inv-map { display: grid; grid-template-columns: 1fr 2.75rem 1.2fr 2.75rem 1fr; align-items: center; max-width: 80rem; margin: 0 auto; gap: 0; }
    .inv-arrow { display: flex; align-items: center; justify-content: center; }
    @media (max-width: 860px) {
      .inv-map { grid-template-columns: 1fr; gap: 0; }
      .inv-arrow { transform: rotate(90deg); justify-self: center; padding: 0.375rem 0; }
    }
  `}</style>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.75rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>THE INVESTIGATION LAYER FOR LEAN RISK TEAMS</p>
      <h2 style={{'fontSize':'clamp(1.25rem,3.5vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Inputs in. Intelligence out. Decisions made.</h2>
    </div>

    <div className="inv-map">

      {/* LEFT: Signal Inputs */}
      <div style={{'background':'#F7FAFD','border':'1px solid #E2EAF4','borderRadius':'16px','padding':'2rem'}}>
        <p style={{'fontSize':'0.5875rem','fontWeight':'700','color':'var(--muted)','textTransform':'uppercase','letterSpacing':'0.12em','marginBottom':'1.25rem'}}>Signal Inputs</p>
        {[
          { label: 'Fraud Alerts',          dot: '#DC2626' },
          { label: 'AML Alerts',            dot: '#D97706' },
          { label: 'Payment Events',        dot: '#1E6FB7' },
          { label: 'Identity &amp; KYC',    dot: '#7C3AED' },
          { label: 'Device &amp; Behavior', dot: '#0891B2' },
          { label: 'External Enrichment',   dot: '#059669' },
        ].map((item, i, arr) => (
          <div key={item.label} style={{'display':'flex','alignItems':'center','gap':'0.625rem','padding':'0.5rem 0','borderBottom': i < arr.length - 1 ? '1px solid #EBF1F8' : 'none'}}>
            <span style={{'width':'7px','height':'7px','borderRadius':'50%','background':item.dot,'flexShrink':0,'display':'inline-block'}}/>
            <span style={{'fontSize':'0.8125rem','color':'var(--dark)','fontWeight':'500'}} dangerouslySetInnerHTML={{__html: item.label}}/>
          </div>
        ))}
      </div>

      {/* ARROW left → center */}
      <div className="inv-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8C8DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>

      {/* CENTER: Verafye Intelligence Layer */}
      <div style={{'background':'linear-gradient(160deg,#0F2B5B 0%,#1A5EA0 100%)','borderRadius':'20px','padding':'2.5rem 1.75rem','color':'#fff','boxShadow':'0 8px 36px rgba(30,111,183,0.22), 0 2px 8px rgba(0,0,0,0.1)'}}>
        <p style={{'fontSize':'0.5625rem','fontWeight':'700','letterSpacing':'0.14em','textTransform':'uppercase','color':'rgba(255,255,255,0.5)','marginBottom':'0.375rem'}}>Verafye</p>
        <p style={{'fontSize':'clamp(1rem,2vw,1.25rem)','fontWeight':'700','marginBottom':'0.25rem','lineHeight':1.2}}>Intelligence Layer</p>
        <p style={{'fontSize':'0.75rem','color':'rgba(255,255,255,0.6)','marginBottom':'1.75rem'}}>Cross-functional · Explainable · Audit-ready</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.5rem'}}>
          {[
            { label: 'Connected Signals',     icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
            { label: 'Alert Clustering',      icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg> },
            { label: 'Graph Intelligence',    icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg> },
            { label: 'Case Intelligence',     icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
            { label: 'Audit-Ready Decisions', icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg> },
          ].map(mod => (
            <div key={mod.label} style={{'display':'flex','alignItems':'center','gap':'0.625rem','background':'rgba(255,255,255,0.09)','border':'1px solid rgba(255,255,255,0.13)','borderRadius':'8px','padding':'0.5rem 0.875rem'}}>
              {mod.icon}
              <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'rgba(255,255,255,0.92)'}}>{mod.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ARROW center → right */}
      <div className="inv-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8C8DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>

      {/* RIGHT: Analyst Outcomes */}
      <div style={{'background':'#F7FAFD','border':'1px solid #E2EAF4','borderRadius':'16px','padding':'2rem'}}>
        <p style={{'fontSize':'0.5875rem','fontWeight':'700','color':'var(--muted)','textTransform':'uppercase','letterSpacing':'0.12em','marginBottom':'1.25rem'}}>Analyst Outcomes</p>
        {[
          { label: 'Faster Investigation Cycles',   icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
          { label: 'Less Noise per Analyst',         icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> },
          { label: 'Hidden Network Visibility',      icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg> },
          { label: 'Compliance-Ready Audit Trails',  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg> },
          { label: 'Lean Team Scalability',           icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
        ].map((outcome, i, arr) => (
          <div key={outcome.label} style={{'display':'flex','alignItems':'center','gap':'0.625rem','padding':'0.5rem 0','borderBottom': i < arr.length - 1 ? '1px solid #EBF1F8' : 'none'}}>
            {outcome.icon}
            <span style={{'fontSize':'0.8125rem','color':'var(--dark)','fontWeight':'500'}}>{outcome.label}</span>
          </div>
        ))}
      </div>

    </div>

    <div style={{'textAlign':'center','marginTop':'2.5rem'}}>
      <Link href="/capabilities" className="btn-secondary">
        Explore All Capabilities
        <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </Link>
    </div>
  </div>
</section>


{/* ─── REGULATORY CONFIDENCE ─────────────────────────────────────────────── */}
<section className="section-light" style={{'padding':'3rem 0'}}>
  <div className="container" style={{'maxWidth':'52rem','margin':'0 auto','textAlign':'center'}}>
    <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>REGULATORY CONFIDENCE</p>
    <h2 style={{'fontSize':'clamp(1.25rem,3.5vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1.5rem'}}>Explainable investigations for regulated environments</h2>
    <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.125rem)','color':'var(--body)','lineHeight':1.8,'marginBottom':'2rem'}}>
      Verafye helps fraud, AML, compliance, and risk teams maintain investigation context, decision history, audit logs, and case evidence across fragmented systems - supporting investigation workflows aligned to expectations from <strong style={{'color':'var(--dark)','fontWeight':600}}>FINTRAC (Canada)</strong>, <strong style={{'color':'var(--dark)','fontWeight':600}}>FCA (UK)</strong>, <strong style={{'color':'var(--dark)','fontWeight':600}}>FinCEN (US)</strong>, and <strong style={{'color':'var(--dark)','fontWeight':600}}>RBI (India)</strong>.
    </p>
    <p style={{'fontSize':'0.813rem','color':'var(--body)','fontStyle':'italic','lineHeight':1.7}}>
      Verafye is designed to support investigation workflows aligned to evolving regulatory expectations. We do not claim regulator certification, approval, endorsement, or formal compliance with specific regulatory regimes unless separately documented.
    </p>
    <div style={{'marginTop':'2rem'}}>
      <Link
        href="/security-trust"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)',
          border: '1px solid var(--border)', borderRadius: '8px',
          padding: '0.6rem 1.25rem', transition: 'border-color 0.15s, background 0.15s',
          background: '#fff',
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Security &amp; Trust
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </Link>
    </div>
  </div>
</section>

{/* ─── FINAL CTA BAND ────────────────────────────────────────────────────── */}
<section style={{'padding':'3.5rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)'}}>
  <div className="container" style={{'textAlign':'center','maxWidth':'48rem'}}>
    <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1.25rem'}}>
      See how Verafye connects your investigations
    </h2>
    <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','marginBottom':'2.5rem','maxWidth':'36rem','margin':'0 auto 2.5rem'}}>
      Discover how Verafye helps lean fraud, AML, and risk teams connect alerts, explain risk, and close cases faster. Start with a scoped pilot - and expand network coverage across teams, products and payment flows as outcomes are proven.
    </p>
    <div style={{'display':'flex','flexWrap':'wrap','justifyContent':'center','gap':'1rem'}}>
      <Link href="/request-demo" className="btn-primary">
        Request Demo
        <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </Link>
      <Link href="/platform" className="btn-secondary">Explore Platform</Link>
    </div>
    <p style={{'fontSize':'0.8125rem','color':'var(--muted)','marginTop':'1.5rem'}}>
      No commitment required. Speak directly with our solutions team.
    </p>
  </div>
</section>

    </>
  );
}
