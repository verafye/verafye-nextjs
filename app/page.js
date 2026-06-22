import Link from 'next/link';
import { ProductTrialHeroPanel } from '../components/HomepageHeroPanel';

export const metadata = {
  title: { absolute: "Network Risk Intelligence for Fraud, AML and Payments Risk Teams | Verafye" },
  description: "Verafye helps payment-led regulated platforms detect hidden network risk, connect fragmented fraud, AML, payment, identity, device, and behavior signals, and produce audit-ready investigations.",
  keywords: ["network risk intelligence platform", "payment risk intelligence", "psp payfac fraud", "msb remittance aml", "financial crime investigation platform", "graph intelligence platform", "entity resolution", "mule network detection", "alert clustering", "audit-ready investigations"],
  openGraph: {
    title: "Network Risk Intelligence for Fraud, AML and Payments Risk Teams | Verafye",
    description: "Verafye helps payment-led regulated platforms detect hidden network risk, connect fragmented fraud, AML, payment, identity, device, and behavior signals, and produce audit-ready investigations.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Network Risk Intelligence for Fraud, AML and Payments Risk Teams | Verafye",
    description: "Verafye helps payment-led regulated platforms detect hidden network risk, connect fragmented fraud, AML, payment, identity, device, and behavior signals, and produce audit-ready investigations.",
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
          Built for payment-led regulated financial platforms and lean financial crime teams.
        </p>

        {/* Body */}
        <p className="animate-fade-up delay-200" style={{'fontSize':'clamp(0.875rem,2vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem'}}>
          Verafye helps PSPs, PayFacs, MSBs, remittance platforms, BaaS providers, embedded finance platforms, digital banks, NBFCs, and selected banks detect hidden network risk, connect fragmented fraud, AML, payment, identity, device, and behavior signals, and turn them into explainable, audit-ready investigations.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300" style={{'display':'flex','flexWrap':'wrap','gap':'0.75rem','marginBottom':'1.5rem'}}>
          <Link href="/risk-shadowing-review" className="btn-primary">
            Explore Risk Shadowing Review
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
{/* Certification logos. GDPR shown as "Compliant" (legislative framework, not a certification scheme). */}
<section style={{'padding':'2.5rem 0','background':'#fff','borderBottom':'1px solid var(--border)'}}>
  <style>{`
    .cert-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; max-width: 60rem; margin: 0 auto; align-items: stretch; }
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
        { src: '/certifications/iso-27001.png', alt: 'ISO/IEC 27001:2022 certified' },
        { src: '/certifications/soc-aicpa.png', alt: 'AICPA SOC 2 Type I' },
        { src: '/certifications/pci-dss.png',   alt: 'PCI DSS SAQ-D compliant' },
        { src: '/certifications/gdpr.png',      alt: 'GDPR compliant' },
      ].map((b) => (
        <div key={b.src} style={{'display':'flex','alignItems':'center','justifyContent':'center','minHeight':'7rem','padding':'1.25rem 1rem','border':'1px solid var(--border)','borderRadius':'10px','background':'#fff'}}>
          <img src={b.src} alt={b.alt} loading="lazy" style={{'maxHeight':'64px','maxWidth':'100%','width':'auto','height':'auto','objectFit':'contain'}} />
        </div>
      ))}
    </div>
    <p style={{'textAlign':'center','fontSize':'0.75rem','color':'var(--muted)','marginTop':'1.25rem','lineHeight':1.6,'maxWidth':'44rem','marginLeft':'auto','marginRight':'auto'}}>
      Verafye holds ISO/IEC 27001:2022, SOC 2 Type I, and PCI DSS SAQ-D, and maintains GDPR-compliant and DPDP-aware data practices. Certificates are available on request.
    </p>
  </div>
</section>

{/* ─── WHY VERAFYE IS DIFFERENT ──────────────────────────────────────────── */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.75rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>WHY VERAFYE</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>Detection that does not stop at alerts</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','maxWidth':'48rem','margin':'0 auto'}}>
        Most risk tools stop at alert generation. Verafye goes further - detecting hidden network risk, connecting fragmented alerts and signals, clustering them into investigation-ready cases, and helping teams make faster, explainable, audit-ready decisions.
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
        { n:1, title:'Ingest Alerts & Signals', body:'Alerts, transactions, events, and fraud, AML, payment, identity, device, and behavior signals arrive through APIs and integrations.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
        { n:2, title:'Resolve Entities & Relationships', body:'Users, accounts, devices, merchants, and counterparties are resolved and linked across sources.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
        { n:3, title:'Detect Network Risk', body:'Graph-native analysis surfaces hidden networks, linked entities, mule patterns, and coordinated risk that rule-based tools miss.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg> },
        { n:4, title:'Cluster into Cases',  body:'Related alerts and detected activity across fraud, AML, and payments are grouped into connected, investigation-ready cases.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg> },
        { n:5, title:'Prioritize Investigations', body:'Analysts start with risk-scored cases, structured context, and suggested next steps - not raw alert queues.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
        { n:6, title:'Decide & Document',   body:'Every action is logged with audit trails, evidence, and case notes - producing explainable, audit-ready decision records.', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg> },
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
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>WHO WE SERVE</p>
      <h2 style={{'fontSize':'clamp(1.25rem,3.5vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Where Verafye Fits</h2>
      <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':1.7,'marginTop':'1rem','maxWidth':'48rem','marginLeft':'auto','marginRight':'auto'}}>Verafye helps teams connect fragmented fraud, AML, payment, identity, device, merchant, account, wallet, ledger, beneficiary, and case signals across regulated and payment-led environments.</p>
    </div>

    <div className="grid-2" style={{'maxWidth':'72rem','margin':'0 auto'}}>

      <Link href="/industries/payment-processors-psps-payfacs" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>PSPs, PayFacs &amp; Payment Processors</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Connect merchant, sub-merchant, transaction, and payout risk signals into faster, explainable investigations.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      <Link href="/industries/msbs-remittance-platforms" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>MSBs &amp; Remittance Platforms</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Connect sender, beneficiary, agent, and corridor signals into investigation-grade evidence for cross-border compliance teams.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      <Link href="/industries/baas-embedded-finance" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>BaaS &amp; Embedded Finance Providers</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>An independent Network Risk Intelligence layer across fintech programs, sponsor-bank relationships, payment, identity, device, ledger, and case signals.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      <Link href="/industries/digital-banks" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><path d="M7 15h.01"/><path d="M11 15h2"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>Digital Banks &amp; Neo Banks</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Connected risk intelligence covering mule detection, scam investigation, account abuse, and beneficiary-linked risk.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      <Link href="/industries/fintech-platforms" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>FinTech Payment Platforms</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Investigation intelligence for payment-enabled fintechs, wallets, and cross-border flows built for lean, API-led teams.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      <Link href="/industries/digital-lending-bnpl" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>NBFCs &amp; Digital Lending</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Surface mule-linked borrower networks, synthetic identity clusters, and coordinated application rings for investigation.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      <Link href="/industries/banks" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>Selected Banks &amp; Credit Unions</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Connect fraud, AML, and payment risk signals into explainable case workflows that support audit readiness and governance.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      <Link href="/industries/marketplaces" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>Marketplaces &amp; Commerce Platforms</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Surface seller, buyer, payout, and device-linked network risk where commerce risk resembles financial crime network risk.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

    </div>

    <div style={{'textAlign':'center','marginTop':'3rem'}}>
      <Link href="/customers" className="btn-secondary">
        View Who We Serve
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
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>THE NETWORK RISK INTELLIGENCE LAYER FOR LEAN RISK TEAMS</p>
      <h2 style={{'fontSize':'clamp(1.25rem,3.5vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Detect. Connect. Investigate. Decide.</h2>
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
        <p style={{'fontSize':'0.75rem','color':'rgba(255,255,255,0.6)','marginBottom':'1.75rem'}}>Graph-native · Detection-capable · Audit-ready</p>
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
      <Link href="/risk-shadowing-review" className="btn-primary">
        Explore Risk Shadowing Review
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
