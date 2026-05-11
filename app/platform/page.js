import Link from 'next/link';

export const metadata = {
  title: "Financial Crime Detection Platform | AI Fraud & AML",
  description: "Financial crime detection platform unifying fraud & AML. Detect hidden risks, ensure regulatory compliance, and reduce false positives with Verafye.",
  openGraph: {
    title: "Financial Crime Detection Platform | AI Fraud & AML",
    description: "Financial crime detection platform unifying fraud & AML. Detect hidden risks, ensure regulatory compliance, and reduce false positives with Verafye.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Financial Crime Detection Platform | AI Fraud & AML",
    description: "Financial crime detection platform unifying fraud & AML. Detect hidden risks, ensure regulatory compliance, and reduce false positives with Verafye.",
  },
};

export default function PlatformPage() {
  return (
    <>

{/* HERO */}
<section style={{'background':'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)','padding':'4rem 0'}}>
  <div className="container" style={{'maxWidth':'56rem','textAlign':'center'}}>
    <p className="eyebrow animate-fade-up" style={{'marginBottom':'1.25rem'}}>VERAFYE PLATFORM</p>
    <h1 className="animate-fade-up delay-100" style={{'fontSize':'clamp(1.875rem,5vw,3.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.5rem','letterSpacing':'-0.025em','lineHeight':'1.15'}}>One investigation layer for connected financial crime operations</h1>
    <p className="animate-fade-up delay-200" style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--dark)','fontWeight':'600','marginBottom':'1rem','lineHeight':'1.4'}}>Unify fraud, AML, payments, identity, device, and behavior signals into investigation-ready cases, explainable decisions, and audit-ready workflows.</p>
    <p className="animate-fade-up delay-250" style={{'fontSize':'clamp(0.875rem,2vw,1.0625rem)','color':'var(--body)','marginBottom':'2.5rem','maxWidth':'48rem','marginLeft':'auto','marginRight':'auto'}}>Verafye sits across existing systems to help lean risk teams connect fragmented alerts, surface hidden relationships, prioritize cases, and close investigations faster - without replacing their entire stack.</p>
    <div className="animate-fade-up delay-300" style={{'display':'flex','flexWrap':'wrap','justifyContent':'center','gap':'0.75rem'}}>
      <Link href="/request-demo" className="btn-primary">
        Request Demo
        <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </Link>
      <Link href="/capabilities" className="btn-secondary">Explore Capabilities</Link>
    </div>
  </div>
</section>

{/* INVESTIGATION LAYER OVERVIEW */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>INVESTIGATION LAYER OVERVIEW</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.5rem','letterSpacing':'-0.025em'}}>Built to connect the systems risk teams already use</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','lineHeight':1.75}}>Fraud alerts, AML monitoring, payment events, identity checks, device signals, behavioral patterns, and third-party enrichment often live in separate tools. Verafye brings these signals into one investigation layer so analysts can see the full risk story before making a decision.</p>
    </div>
    <div className="grid-3" style={{'maxWidth':'72rem','margin':'0 auto'}}>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Signal aggregation</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Connect alerts and data from fraud, AML, payment, identity, device, behavior, and third-party systems.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Investigation context</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Cluster related alerts, entities, accounts, devices, merchants, and transactions into case-ready context.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Decision support</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Use explainable AI assistance, summaries, suggested next steps, notes, and audit trails to support faster decisions.</p>
      </div>
    </div>
  </div>
</section>

{/* HOW THE PLATFORM WORKS */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container" style={{'maxWidth':'80rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>HOW IT WORKS</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'0.875rem'}}>From signals to outcomes — one connected flow</h2>
      <p style={{'fontSize':'clamp(0.9375rem,1.8vw,1.0625rem)','color':'var(--body)','lineHeight':1.7}}>Verafye sits across existing infrastructure and moves risk signals through a connected investigation layer — from raw data to case decisions.</p>
    </div>

    {/* Horizontal flow — scrollable on mobile */}
    <div style={{'overflowX':'auto','paddingBottom':'0.5rem'}}>
      <div className="plat-flow-row">

        {/* Stage 1 — Ingest Signals */}
        <div className="plat-flow-card" style={{'borderTopColor':'#1E6FB7'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'10px','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.18)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </div>
          <div style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#1E6FB7','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.5rem'}}>01 · Ingest</div>
          <h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.3}}>Ingest Signals</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Fraud alerts, transactions, identity, device, and behavioral signals pulled from existing systems via API.</p>
        </div>

        {/* Arrow */}
        <div className="plat-flow-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 2 — Connect Risk Context */}
        <div className="plat-flow-card" style={{'borderTopColor':'#7C3AED'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'10px','background':'rgba(124,58,237,0.08)','border':'1px solid rgba(124,58,237,0.18)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </div>
          <div style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#7C3AED','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.5rem'}}>02 · Connect</div>
          <h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.3}}>Connect Risk Context</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Map signals to accounts, devices, entities, and counterparties — building a connected risk picture per case.</p>
        </div>

        {/* Arrow */}
        <div className="plat-flow-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 3 — Cluster Alerts */}
        <div className="plat-flow-card" style={{'borderTopColor':'#0891B2'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'10px','background':'rgba(8,145,178,0.08)','border':'1px solid rgba(8,145,178,0.18)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <div style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#0891B2','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.5rem'}}>03 · Cluster</div>
          <h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.3}}>Cluster Alerts</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Group related alerts and entity signals into investigation-ready cases — replacing isolated queues with connected clusters.</p>
        </div>

        {/* Arrow */}
        <div className="plat-flow-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 4 — Surface Investigation Context */}
        <div className="plat-flow-card" style={{'borderTopColor':'#D97706'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'10px','background':'rgba(217,119,6,0.08)','border':'1px solid rgba(217,119,6,0.18)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </div>
          <div style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#D97706','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.5rem'}}>04 · Investigate</div>
          <h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.3}}>Surface Investigation Context</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Case context, graph views, AI-assisted summaries, and evidence surfaced before analysts take any action.</p>
        </div>

        {/* Arrow */}
        <div className="plat-flow-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 5 — Support Decisions */}
        <div className="plat-flow-card" style={{'borderTopColor':'#059669'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'10px','background':'rgba(5,150,105,0.08)','border':'1px solid rgba(5,150,105,0.18)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <div style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#059669','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.5rem'}}>05 · Decide</div>
          <h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.3}}>Support Decisions</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Structured workflows, risk scoring, and suggested next steps help analysts reach faster, explainable outcomes.</p>
        </div>

        {/* Arrow */}
        <div className="plat-flow-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 6 — Preserve Audit Trails */}
        <div className="plat-flow-card" style={{'borderTopColor':'#1E6FB7','background':'linear-gradient(135deg,#EFF6FF,#fff)'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'10px','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.18)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#1E6FB7','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.5rem'}}>06 · Record</div>
          <h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.3}}>Preserve Audit Trails</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Every action, decision rationale, and evidence reference captured in structured audit trails for compliance and regulatory review.</p>
        </div>

      </div>
    </div>
  </div>

  <style>{`
    .plat-flow-row {
      display: flex;
      align-items: stretch;
      gap: 0;
      min-width: 900px;
    }
    .plat-flow-card {
      flex: 1;
      background: #fff;
      border: 1px solid var(--border);
      border-top-width: 3px;
      border-radius: 10px;
      padding: 1.5rem 1.25rem;
    }
    .plat-flow-arrow {
      display: flex;
      align-items: center;
      padding: 0 0.375rem;
      flex-shrink: 0;
    }
    @media (max-width: 767px) {
      .plat-flow-row {
        flex-direction: column;
        min-width: 0;
      }
      .plat-flow-arrow {
        transform: rotate(90deg);
        padding: 0.25rem 0;
        justify-content: center;
      }
      .plat-flow-card {
        border-top-width: 1px;
        border-left-width: 3px;
      }
    }
  `}</style>
</section>

{/* CORE PLATFORM MODULES */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>CORE MODULES</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Core platform modules</h2>
    </div>
    <div className="grid-3" style={{'maxWidth':'72rem','margin':'0 auto','gap':'1.5rem'}}>

      <div className="card card-elevated" style={{'padding':'2rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Connected Signals</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Bring together fragmented fraud, AML, payment, identity, device, behavior, and enrichment signals.</p>
      </div>

      <div className="card card-elevated" style={{'padding':'2rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Alert Clustering</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Group related alerts into connected cases instead of forcing analysts to review isolated queues.</p>
      </div>

      <div className="card card-elevated" style={{'padding':'2rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Graph Intelligence</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Reveal hidden links across accounts, merchants, devices, transactions, counterparties, and entities.</p>
      </div>

      <div className="card card-elevated" style={{'padding':'2rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Case Intelligence</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Support analysts with structured case context, AI summaries, suggested resolutions, notes, evidence, and investigation workflows.</p>
      </div>

      <div className="card card-elevated" style={{'padding':'2rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Audit-Ready Decisions</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Maintain decision history, analyst actions, evidence, case notes, and audit logs for compliance review.</p>
      </div>

      <div className="card card-elevated" style={{'padding':'2rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6H4z"/><path d="M14 14h6v6h-6z"/><path d="M7 10v4"/><path d="M17 10v4"/><path d="M10 7h4"/><path d="M10 17h4"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Integrations &amp; Orchestration</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Connect third-party KYC, KYB, sanctions, watchlist, device, banking, and enrichment providers through flexible APIs, SDKs, and pre-built connectors.</p>
      </div>

    </div>
  </div>
</section>

{/* INVESTIGATION INTELLIGENCE ARCHITECTURE */}
<section style={{'padding':'4rem 0','background':'linear-gradient(180deg,#F8FBFF 0%,#ffffff 100%)'}}>
  <div className="container" style={{'maxWidth':'80rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>ARCHITECTURE</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1.25rem'}}>Investigation Intelligence Architecture</h2>
      <p style={{'fontSize':'clamp(0.9375rem,1.8vw,1.0625rem)','color':'var(--body)','lineHeight':1.75}}>Verafye connects fragmented fraud, AML, payment, identity, device, and behavior signals into one investigation intelligence layer — helping risk teams understand relationships, prioritize cases, explain decisions, and preserve audit-ready records.</p>
    </div>

    {/* Architecture 4-stage flow */}
    <div style={{'overflowX':'auto','paddingBottom':'1rem'}}>
      <div className="arch-flow-row">

        {/* Stage 1 — Signals In */}
        <div className="arch-card" style={{'borderTopColor':'#1E6FB7'}}>
          <div style={{'display':'flex','alignItems':'center','gap':'0.625rem','marginBottom':'1.25rem'}}>
            <div style={{'width':'1.75rem','height':'1.75rem','borderRadius':'50%','background':'#1E6FB7','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
              <span style={{'fontSize':'0.5625rem','fontWeight':'800','color':'#fff','letterSpacing':'-0.02em'}}>01</span>
            </div>
            <span style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#1E6FB7','textTransform':'uppercase','letterSpacing':'0.1em'}}>Signals In</span>
          </div>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem','lineHeight':1.35}}>Connected risk signals</h3>
          <div style={{'display':'flex','flexDirection':'column','gap':'0.5rem','marginBottom':'1.25rem'}}>
            {['Payments','Identity','Device','Behavior','AML / Watchlist','Transactions','Third-party signals'].map((item,i) => (
              <div key={i} style={{'display':'flex','alignItems':'center','gap':'0.5rem'}}>
                <div style={{'width':'5px','height':'5px','borderRadius':'50%','background':'#1E6FB7','opacity':0.45,'flexShrink':0}}></div>
                <span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{'padding':'0.75rem','background':'rgba(30,111,183,0.05)','borderRadius':'8px','border':'1px solid rgba(30,111,183,0.1)','marginTop':'auto'}}>
            <p style={{'fontSize':'0.75rem','color':'#1E6FB7','lineHeight':1.55,'margin':0}}>Fragmented signals from multiple systems pulled through APIs, SDKs, and connectors</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="arch-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 2 — Connected Risk Layer */}
        <div className="arch-card" style={{'borderTopColor':'#7C3AED'}}>
          <div style={{'display':'flex','alignItems':'center','gap':'0.625rem','marginBottom':'1.25rem'}}>
            <div style={{'width':'1.75rem','height':'1.75rem','borderRadius':'50%','background':'#7C3AED','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
              <span style={{'fontSize':'0.5625rem','fontWeight':'800','color':'#fff','letterSpacing':'-0.02em'}}>02</span>
            </div>
            <span style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#7C3AED','textTransform':'uppercase','letterSpacing':'0.1em'}}>Connected Risk Layer</span>
          </div>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem','lineHeight':1.35}}>Graph-native intelligence</h3>
          <div style={{'display':'flex','flexDirection':'column','gap':'0.5rem','marginBottom':'1.25rem'}}>
            {['Signal aggregation','Entity resolution','Alert clustering','Graph intelligence','Risk context'].map((item,i) => (
              <div key={i} style={{'display':'flex','alignItems':'center','gap':'0.5rem'}}>
                <div style={{'width':'5px','height':'5px','borderRadius':'50%','background':'#7C3AED','opacity':0.45,'flexShrink':0}}></div>
                <span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{'padding':'0.75rem','background':'rgba(124,58,237,0.05)','borderRadius':'8px','border':'1px solid rgba(124,58,237,0.1)','marginTop':'auto'}}>
            <p style={{'fontSize':'0.75rem','color':'#7C3AED','lineHeight':1.55,'margin':0}}>Signals unified, entities resolved, and alerts clustered into connected risk context</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="arch-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 3 — Investigation Intelligence */}
        <div className="arch-card" style={{'borderTopColor':'#0891B2'}}>
          <div style={{'display':'flex','alignItems':'center','gap':'0.625rem','marginBottom':'1.25rem'}}>
            <div style={{'width':'1.75rem','height':'1.75rem','borderRadius':'50%','background':'#0891B2','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
              <span style={{'fontSize':'0.5625rem','fontWeight':'800','color':'#fff','letterSpacing':'-0.02em'}}>03</span>
            </div>
            <span style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#0891B2','textTransform':'uppercase','letterSpacing':'0.1em'}}>Investigation Intelligence</span>
          </div>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem','lineHeight':1.35}}>Case-ready intelligence</h3>
          <div style={{'display':'flex','flexDirection':'column','gap':'0.5rem','marginBottom':'1.25rem'}}>
            {['Case context','Prioritization','Explainable decision support','Analyst workflows','Evidence & audit trail'].map((item,i) => (
              <div key={i} style={{'display':'flex','alignItems':'center','gap':'0.5rem'}}>
                <div style={{'width':'5px','height':'5px','borderRadius':'50%','background':'#0891B2','opacity':0.45,'flexShrink':0}}></div>
                <span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{'padding':'0.75rem','background':'rgba(8,145,178,0.05)','borderRadius':'8px','border':'1px solid rgba(8,145,178,0.1)','marginTop':'auto'}}>
            <p style={{'fontSize':'0.75rem','color':'#0891B2','lineHeight':1.55,'margin':0}}>Connected risk context transformed into structured, analyst-ready investigation workflows</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="arch-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 4 — Case Outcomes */}
        <div className="arch-card" style={{'borderTopColor':'#059669','background':'linear-gradient(145deg,#F0FDF9,#ffffff)'}}>
          <div style={{'display':'flex','alignItems':'center','gap':'0.625rem','marginBottom':'1.25rem'}}>
            <div style={{'width':'1.75rem','height':'1.75rem','borderRadius':'50%','background':'#059669','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
              <span style={{'fontSize':'0.5625rem','fontWeight':'800','color':'#fff','letterSpacing':'-0.02em'}}>04</span>
            </div>
            <span style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#059669','textTransform':'uppercase','letterSpacing':'0.1em'}}>Case Outcomes</span>
          </div>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem','lineHeight':1.35}}>Better investigations, less effort</h3>
          <div style={{'display':'flex','flexDirection':'column','gap':'0.5rem','marginBottom':'1.25rem'}}>
            {['Faster investigations','Clearer decisions','Audit-ready records','Better risk visibility','Lean team efficiency'].map((item,i) => (
              <div key={i} style={{'display':'flex','alignItems':'center','gap':'0.5rem'}}>
                <div style={{'width':'5px','height':'5px','borderRadius':'50%','background':'#059669','opacity':0.5,'flexShrink':0}}></div>
                <span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{'padding':'0.75rem','background':'rgba(5,150,105,0.05)','borderRadius':'8px','border':'1px solid rgba(5,150,105,0.1)','marginTop':'auto'}}>
            <p style={{'fontSize':'0.75rem','color':'#059669','lineHeight':1.55,'margin':0}}>Lean teams operating faster, with greater clarity and full audit-readiness</p>
          </div>
        </div>

      </div>
    </div>

    {/* Section CTA */}
    <div style={{'textAlign':'center','marginTop':'3rem'}}>
      <Link href="/solutions/investigation-intelligence/" className="btn-primary">
        Explore Investigation Intelligence
        <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </Link>
    </div>

  </div>

  <style>{`
    .arch-flow-row {
      display: flex;
      align-items: stretch;
      gap: 0;
      min-width: 860px;
    }
    .arch-card {
      flex: 1;
      background: #fff;
      border: 1px solid var(--border);
      border-top-width: 3px;
      border-radius: 12px;
      padding: 1.75rem 1.375rem;
      display: flex;
      flex-direction: column;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      transition: box-shadow 0.2s;
    }
    .arch-card:hover {
      box-shadow: 0 6px 24px rgba(0,0,0,0.08);
    }
    .arch-arrow {
      display: flex;
      align-items: center;
      padding: 0 0.5rem;
      flex-shrink: 0;
    }
    @media (max-width: 767px) {
      .arch-flow-row {
        flex-direction: column;
        min-width: 0;
      }
      .arch-arrow {
        transform: rotate(90deg);
        padding: 0.375rem 0;
        justify-content: center;
      }
    }
  `}</style>
</section>

{/* CONFIGURABLE RULES */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>CONFIGURABLE RULES</p>
        <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>Configure rules without engineering dependency</h2>
        <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem','lineHeight':1.7}}>Verafye supports configurable rule creation using predefined templates, parameters, conditions, thresholds, and outcomes - helping risk teams adapt monitoring and investigation logic without writing code.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.875rem'}}>
          {['Predefined rule templates','Parameter and condition selection','Outcome and action configuration','Threshold adjustments','Rule review and governance workflows'].map((item, i) => (
            <div key={i} style={{'display':'flex','alignItems':'center','gap':'0.75rem'}}>
              <div style={{'flexShrink':0,'width':'1.375rem','height':'1.375rem','borderRadius':'50%','background':'var(--primary)','display':'flex','alignItems':'center','justifyContent':'center'}}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <span style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)'}}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{'background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'1.25rem','padding':'2rem'}}>
        <div style={{'fontSize':'0.6875rem','fontWeight':'700','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.08em','marginBottom':'1.25rem'}}>Rule configuration</div>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.75rem'}}>
          <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'0.5rem','padding':'0.875rem'}}>
            <div style={{'fontSize':'0.6875rem','fontWeight':'600','color':'var(--muted)','marginBottom':'0.375rem','textTransform':'uppercase','letterSpacing':'0.06em'}}>Template</div>
            <div style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--dark)'}}>Velocity - Payment Threshold</div>
          </div>
          <div style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'0.5rem'}}>
            <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'0.5rem','padding':'0.75rem'}}>
              <div style={{'fontSize':'0.6875rem','color':'var(--muted)','marginBottom':'0.25rem'}}>Condition</div>
              <div style={{'fontSize':'0.75rem','fontWeight':'600','color':'var(--dark)'}}>Transactions &gt; 10</div>
            </div>
            <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'0.5rem','padding':'0.75rem'}}>
              <div style={{'fontSize':'0.6875rem','color':'var(--muted)','marginBottom':'0.25rem'}}>Window</div>
              <div style={{'fontSize':'0.75rem','fontWeight':'600','color':'var(--dark)'}}>24 hours</div>
            </div>
          </div>
          <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'0.5rem','padding':'0.875rem'}}>
            <div style={{'fontSize':'0.6875rem','fontWeight':'600','color':'var(--muted)','marginBottom':'0.375rem','textTransform':'uppercase','letterSpacing':'0.06em'}}>Outcome</div>
            <div style={{'display':'flex','gap':'0.5rem','alignItems':'center'}}>
              <div style={{'width':'0.5rem','height':'0.5rem','borderRadius':'50%','background':'#F59E0B','flexShrink':0}}></div>
              <div style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--dark)'}}>Flag for review - medium priority</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* DEVICE AND BEHAVIOR SIGNALS */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div style={{'background':'linear-gradient(135deg,var(--bg-blue),#fff)','border':'1px solid rgba(30,111,183,0.12)','borderRadius':'1.25rem','padding':'2rem','order':'1'}}>
        <div style={{'fontSize':'0.6875rem','fontWeight':'700','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.08em','marginBottom':'1rem'}}>Device &amp; Behavior Signal Capture</div>
        <div style={{'display':'flex','flexWrap':'wrap','gap':'0.5rem','marginBottom':'1.25rem'}}>
          {['JS SDK','Android SDK','iOS SDK','Device ID','Session','Browser','IP / Proxy','VPN / Emulator','Behavior patterns'].map(tag => (
            <span key={tag} style={{'display':'inline-flex','padding':'0.3rem 0.7rem','borderRadius':'9999px','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.15)','fontSize':'0.6875rem','fontWeight':'500','color':'var(--primary)'}}>{tag}</span>
          ))}
        </div>
        <div style={{'height':'1px','background':'var(--border)','marginBottom':'1.25rem'}}></div>
        <div style={{'display':'flex','alignItems':'center','gap':'0.75rem','background':'#fff','border':'1px solid var(--border)','borderRadius':'0.75rem','padding':'1rem'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'0.5rem','background':'var(--primary)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
          </div>
          <div>
            <div style={{'fontSize':'0.8125rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.125rem'}}>Connected to case graph</div>
            <div style={{'fontSize':'0.75rem','color':'var(--muted)'}}>Device + behavior signals surface in investigation context</div>
          </div>
        </div>
      </div>
      <div style={{'order':'2'}}>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>DEVICE &amp; BEHAVIOR</p>
        <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>Capture device and behavior signals for stronger investigations</h2>
        <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem','lineHeight':1.7}}>Verafye supports device and behavior signal capture through SDKs and integrations, helping teams connect session, device, browser, account, and activity patterns to fraud and AML investigations.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.875rem'}}>
          {['JS, Android, and iOS SDK support','Device and session signal capture','Behavior pattern analysis','Proxy, VPN, emulator, and suspicious environment indicators','Connection of device and behavior signals into cases and graph context'].map((item, i) => (
            <div key={i} style={{'display':'flex','alignItems':'flex-start','gap':'0.75rem'}}>
              <div style={{'flexShrink':0,'width':'1.375rem','height':'1.375rem','borderRadius':'50%','background':'var(--primary)','display':'flex','alignItems':'center','justifyContent':'center','marginTop':'0.125rem'}}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <span style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)'}}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* AML / WATCHLIST WORKFLOWS */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>AML &amp; WATCHLIST</p>
        <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>Support AML, watchlist, and screening workflows</h2>
        <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem','lineHeight':1.7}}>Verafye helps teams connect sanctions, PEP, watchlist, adverse media, transaction, identity, and behavioral signals into investigation-ready workflows.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.875rem'}}>
          {['Sanctions and watchlist screening workflows','PEP and adverse media review support','Fuzzy matching and entity similarity checks','Case evidence and review notes','Audit-ready investigation trails'].map((item, i) => (
            <div key={i} style={{'display':'flex','alignItems':'flex-start','gap':'0.75rem'}}>
              <div style={{'flexShrink':0,'width':'1.375rem','height':'1.375rem','borderRadius':'50%','background':'var(--primary)','display':'flex','alignItems':'center','justifyContent':'center','marginTop':'0.125rem'}}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <span style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)'}}>{item}</span>
            </div>
          ))}
        </div>
        <p style={{'fontSize':'0.8125rem','color':'var(--muted)','marginTop':'1.75rem','fontStyle':'italic'}}>Verafye is designed to support AML investigation workflows. We do not claim OFAC certification, sanctions list completeness, or regulatory approval.</p>
      </div>
      <div style={{'display':'flex','flexDirection':'column','gap':'1rem'}}>
        <div className="card card-elevated" style={{'padding':'1.25rem','display':'flex','alignItems':'center','gap':'1rem'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'0.625rem','background':'rgba(30,111,183,0.08)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <span style={{'fontSize':'0.9375rem','fontWeight':'600','color':'var(--dark)'}}>Sanctions screening</span>
          <div style={{'marginLeft':'auto','width':'1.25rem','height':'1.25rem','borderRadius':'50%','background':'rgba(16,185,129,0.1)','display':'flex','alignItems':'center','justifyContent':'center'}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
        </div>
        <div className="card card-elevated" style={{'padding':'1.25rem','display':'flex','alignItems':'center','gap':'1rem'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'0.625rem','background':'rgba(123,63,228,0.08)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7B3FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
          <span style={{'fontSize':'0.9375rem','fontWeight':'600','color':'var(--dark)'}}>PEP review</span>
          <div style={{'marginLeft':'auto','width':'1.25rem','height':'1.25rem','borderRadius':'50%','background':'rgba(16,185,129,0.1)','display':'flex','alignItems':'center','justifyContent':'center'}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
        </div>
        <div className="card card-elevated" style={{'padding':'1.25rem','display':'flex','alignItems':'center','gap':'1rem'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'0.625rem','background':'rgba(239,159,39,0.08)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg></div>
          <span style={{'fontSize':'0.9375rem','fontWeight':'600','color':'var(--dark)'}}>Adverse media</span>
          <div style={{'marginLeft':'auto','width':'1.25rem','height':'1.25rem','borderRadius':'50%','background':'rgba(16,185,129,0.1)','display':'flex','alignItems':'center','justifyContent':'center'}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
        </div>
        <div className="card card-elevated" style={{'padding':'1.25rem','display':'flex','alignItems':'center','gap':'1rem'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'0.625rem','background':'rgba(16,185,129,0.08)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
          <span style={{'fontSize':'0.9375rem','fontWeight':'600','color':'var(--dark)'}}>Fuzzy entity matching</span>
          <div style={{'marginLeft':'auto','width':'1.25rem','height':'1.25rem','borderRadius':'50%','background':'rgba(16,185,129,0.1)','display':'flex','alignItems':'center','justifyContent':'center'}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* APIS, SDKS, AND INTEGRATIONS */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>APIS &amp; INTEGRATIONS</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>Connect through APIs, SDKs, and pre-built integrations</h2>
      <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.125rem)','color':'var(--body)','lineHeight':1.75}}>Verafye can connect with third-party KYC, KYB, sanctions, watchlist, device, email, phone, banking, enrichment, and ecosystem providers through flexible APIs, SDKs, and pre-built connectors.</p>
    </div>
    <div className="grid-3" style={{'maxWidth':'72rem','margin':'0 auto 2.5rem','gap':'1.5rem'}}>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>REST APIs</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Connect Verafye to your existing systems and data pipelines through documented REST APIs.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>SDKs</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>JS, Android, and iOS SDKs for device and behavior signal capture across web and mobile surfaces.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Pre-built connectors</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Pre-built integrations for KYC, KYB, sanctions, watchlist, enrichment, and risk data providers.</p>
      </div>
    </div>
    <div style={{'background':'var(--bg-tint)','border':'1px solid var(--border)','borderRadius':'1rem','padding':'1.75rem 2rem','maxWidth':'72rem','margin':'0 auto'}}>
      <div style={{'display':'flex','alignItems':'flex-start','gap':'1rem','flexWrap':'wrap'}}>
        <div style={{'flexShrink':0,'width':'2.5rem','height':'2.5rem','borderRadius':'0.625rem','background':'rgba(90,178,255,0.1)','border':'1px solid rgba(90,178,255,0.2)','display':'flex','alignItems':'center','justifyContent':'center'}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5AB2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        </div>
        <div style={{'flex':1,'minWidth':'16rem'}}>
          <p style={{'fontSize':'0.6875rem','fontWeight':'700','color':'var(--muted)','textTransform':'uppercase','letterSpacing':'0.08em','marginBottom':'0.35rem'}}>Commerce ecosystem connectors</p>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>For retail and e-commerce risk use cases, Verafye can support commerce ecosystem integrations that bring storefront, transaction, and customer behavior signals into investigation workflows.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* AUDIT-READY GOVERNANCE */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>AUDIT-READY GOVERNANCE</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>Designed for explainable, audit-ready investigations</h2>
      <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.125rem)','color':'var(--body)','lineHeight':1.75}}>Verafye helps teams maintain investigation context, decision history, case evidence, analyst notes, and audit logs so decisions can be reviewed, explained, and governed.</p>
    </div>
    <div className="grid-3" style={{'maxWidth':'72rem','margin':'0 auto 2rem','gap':'1.5rem'}}>
      <div className="card card-elevated" style={{'padding':'1.75rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem','marginBottom':'1rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg></div>
        <h3 style={{'fontSize':'clamp(0.9375rem,1.5vw,1.0625rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Case evidence and notes</h3>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.65}}>Structured notes, attached evidence, and timeline context for every investigation.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.75rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem','marginBottom':'1rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/></svg></div>
        <h3 style={{'fontSize':'clamp(0.9375rem,1.5vw,1.0625rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Decision history</h3>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.65}}>Every analyst action and decision recorded with timestamps, rationale, and case context.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.75rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem','marginBottom':'1rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
        <h3 style={{'fontSize':'clamp(0.9375rem,1.5vw,1.0625rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Audit logs</h3>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.65}}>Comprehensive activity logs capturing who reviewed, actioned, and closed each case.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.75rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem','marginBottom':'1rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg></div>
        <h3 style={{'fontSize':'clamp(0.9375rem,1.5vw,1.0625rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Explainability support</h3>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.65}}>Traceable AI-assisted summaries and suggested resolutions with full reasoning context.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.75rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem','marginBottom':'1rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg></div>
        <h3 style={{'fontSize':'clamp(0.9375rem,1.5vw,1.0625rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Review and governance workflows</h3>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.65}}>Structured escalation paths and peer review workflows for high-stakes investigations.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.75rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem','marginBottom':'1rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/></svg></div>
        <h3 style={{'fontSize':'clamp(0.9375rem,1.5vw,1.0625rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Compliance-ready reporting context</h3>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.65}}>Investigation summaries and audit trails structured to support regulatory review and examiner inquiries.</p>
      </div>
    </div>
    <p style={{'textAlign':'center','fontSize':'0.8125rem','color':'var(--muted)','fontStyle':'italic','maxWidth':'48rem','margin':'0 auto 1.5rem'}}>Verafye is designed to support investigation workflows aligned to evolving regulatory expectations. We do not claim regulator certification, approval, endorsement, or formal compliance with specific regulatory regimes unless separately documented.</p>
    <div style={{'textAlign':'center'}}>
      <Link href="/security-trust" style={{'display':'inline-flex','alignItems':'center','gap':'0.5rem','fontSize':'0.8125rem','fontWeight':600,'color':'var(--primary)','border':'1px solid var(--border)','borderRadius':'8px','padding':'0.6rem 1.25rem','background':'#fff'}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Security &amp; Trust
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </Link>
    </div>
  </div>
</section>

{/* SECURITY, PRIVACY & CONTROL */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>SECURITY, PRIVACY & CONTROL</p>
      <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem','letterSpacing':'-0.025em'}}>Built for regulated environments that require security and auditability by design</h2>
      <p style={{'fontSize':'clamp(0.875rem,1.75vw,1.0625rem)','color':'var(--body)','lineHeight':1.75}}>
        Verafye is designed for financial institutions and payment platforms where data sensitivity, audit traceability, and privacy controls are non-negotiable requirements.
      </p>
    </div>
    <div style={{'display':'grid','gridTemplateColumns':'repeat(4,1fr)','gap':'1rem'}}>
      {[
        { label: 'ISO/IEC 27001', sub: 'Information Security Management' },
        { label: 'SOC 2 Type I',  sub: 'Security & Availability Controls' },
        { label: 'PCI DSS: SAQ-D', sub: 'Payment Data Security' },
        { label: 'GDPR-aligned',  sub: 'EU Data Protection' },
      ].map(b => (
        <div key={b.label} style={{'display':'flex','flexDirection':'column','alignItems':'center','justifyContent':'center','gap':'0.25rem','padding':'1rem 1.25rem','border':'1px solid var(--border)','borderRadius':'10px','background':'var(--bg-light)','textAlign':'center'}}>
          <span style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.01em','lineHeight':1.2}}>{b.label}</span>
          <span style={{'fontSize':'0.75rem','color':'var(--muted)','lineHeight':1.3}}>{b.sub}</span>
        </div>
      ))}
    </div>
    <div style={{'display':'grid','gridTemplateColumns':'1fr 1fr 1fr','gap':'1.25rem','marginTop':'1.5rem'}}>
      {[
        { title: 'Role-based access controls', body: 'Data access follows controlled, role-based patterns — analysts, investigators, and system processes access only what is appropriate to their workflow context.' },
        { title: 'End-to-end audit trails', body: 'All investigation actions, alert dispositions, and case progressions are logged and auditable — providing the traceable record compliance and governance functions require.' },
        { title: 'Explainable decisioning', body: 'Every risk score and case recommendation is backed by documented, traceable reasoning — supporting explainability obligations for regulated financial crime workflows.' },
      ].map(item => (
        <div key={item.title} className="card" style={{'padding':'1.5rem'}}>
          <div style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>{item.title}</div>
          <div style={{'fontSize':'0.875rem','color':'var(--body)','lineHeight':1.7}}>{item.body}</div>
        </div>
      ))}
    </div>
    <p style={{'textAlign':'center','fontSize':'0.75rem','color':'var(--muted)','marginTop':'2rem','maxWidth':'52rem','marginLeft':'auto','marginRight':'auto','lineHeight':1.65}}>
      Verafye is designed with controls aligned to the frameworks above. Certification status is available on request. <a href="/security-trust" style={{'color':'var(--primary)'}}>View our Security &amp; Trust page</a> for full details.
    </p>
  </div>
</section>

{/* FINAL CTA */}
<section style={{'padding':'4rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)'}}>
  <div className="container" style={{'textAlign':'center','maxWidth':'48rem'}}>
    <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1.25rem'}}>See how Verafye connects your risk operations</h2>
    <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','maxWidth':'36rem','margin':'0 auto 2.5rem'}}>Explore how Verafye helps lean fraud, AML, compliance, and risk teams connect alerts, explain risk, and close cases faster.</p>
    <div style={{'display':'flex','flexWrap':'wrap','justifyContent':'center','gap':'1rem'}}>
      <Link href="/request-demo" className="btn-primary">
        Request Demo
        <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </Link>
      <Link href="/capabilities" className="btn-secondary">View Capabilities</Link>
    </div>
    <p style={{'fontSize':'0.8125rem','color':'var(--muted)','marginTop':'1.5rem'}}>No commitment required. Speak directly with our solutions team.</p>
  </div>
</section>

    </>
  );
}
