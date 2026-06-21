import Link from 'next/link';
import SplitHeroWithVisualCard, { PlatformVisualCard } from '../../components/SplitHeroWithVisualCard';

export const metadata = {
  title: "Graph-Native Network Risk Intelligence Platform",
  description: "Resolve entities, map transaction networks and uncover hidden financial crime risks with investigation-grade intelligence for fraud and AML teams.",
  keywords: ["graph native risk intelligence platform", "network risk intelligence software", "entity resolution platform", "transaction network analysis", "financial crime intelligence platform", "investigation intelligence"],
  openGraph: {
    title: "Graph-Native Network Risk Intelligence Platform | Verafye",
    description: "Resolve entities, map transaction networks and uncover hidden financial crime risks with investigation-grade intelligence for fraud and AML teams.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Graph-Native Network Risk Intelligence Platform | Verafye",
    description: "Resolve entities, map transaction networks and uncover hidden financial crime risks with investigation-grade intelligence for fraud and AML teams.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/platform',
  },
};

export default function PlatformPage() {
  return (
    <>

{/* HERO - Option 1: Split Hero with Visual Card (approved) */}
<SplitHeroWithVisualCard
  eyebrow="VERAFYE PLATFORM"
  title="Network Risk Intelligence for Modern Financial Crime Operations"
  description="Verafye is a graph-native Network Risk Intelligence platform for payment, remittance, digital banking and financial crime investigation teams. It resolves entities, maps cross-entity transaction networks and scores risk in real time - converting alert noise into investigation-grade evidence that compliance teams can act on and regulators can audit."
  body="Built for teams operating under growing regulatory and operational complexity - start with a scoped pilot alongside existing systems and expand network coverage as outcomes are proven."
  primaryCTA={{ label: 'Explore Risk Shadowing Review', href: '/risk-shadowing-review' }}
  secondaryCTA={{ label: 'Explore Capabilities', href: '/capabilities' }}
  visualCard={<PlatformVisualCard />}
/>

{/* INVESTIGATION LAYER OVERVIEW */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.75rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>BUILT FOR TRANSACTION-LED RISK ENVIRONMENTS</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.5rem','letterSpacing':'-0.025em'}}>Built to connect the systems risk teams already use</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','lineHeight':1.75}}>Verafye is built for transaction-led financial crime environments where payments, accounts, merchants, devices, identities, beneficiaries, and counterparties create network-level risk. Fraud alerts, AML monitoring, payment events, identity checks, device signals, and behavioral patterns often live in separate tools - Verafye brings them into one network view so analysts see the full risk story before making a decision.</p>
      <div style={{'display':'flex','flexWrap':'wrap','gap':'0.5rem','justifyContent':'center','marginTop':'1.5rem'}}>
        {['Merchant risk','Payment risk','Mule-account risk','Beneficiary risk','Device & identity linkage','Cross-account networks','Cross-merchant networks','Remittance & corridor risk','Digital-bank & wallet risk','Lending & disbursement risk'].map(t => (
          <span key={t} style={{'fontSize':'0.75rem','fontWeight':'600','color':'var(--primary)','background':'rgba(30,111,183,0.07)','border':'1px solid rgba(30,111,183,0.15)','borderRadius':'999px','padding':'0.35rem 0.8rem'}}>{t}</span>
        ))}
      </div>
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
<section className="section-light" style={{'padding':'3.5rem 0'}}>
  <div className="container" style={{'maxWidth':'80rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>HOW IT WORKS</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'0.875rem'}}>From signals to outcomes - one connected flow</h2>
      <p style={{'fontSize':'clamp(0.9375rem,1.8vw,1.0625rem)','color':'var(--body)','lineHeight':1.7}}>Verafye detects hidden network risk through graph-native intelligence, risk scoring, relationship analysis, and signal correlation - then carries that risk through clustering, investigation, and audit-ready decisions in one connected flow. Detection-capable and investigation-first, working alongside the systems you already run.</p>
    </div>

    {/* Horizontal flow - scrollable on mobile */}
    <div style={{'overflowX':'auto','paddingBottom':'0.5rem'}}>
      <div className="plat-flow-row">

        {/* Stage 1 - Ingest Signals */}
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

        {/* Stage 2 - Connect Risk Context */}
        <div className="plat-flow-card" style={{'borderTopColor':'#7C3AED'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'10px','background':'rgba(124,58,237,0.08)','border':'1px solid rgba(124,58,237,0.18)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </div>
          <div style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#7C3AED','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.5rem'}}>02 · Resolve</div>
          <h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.3}}>Resolve Entities</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Resolve accounts, devices, merchants, beneficiaries, and counterparties into linked entities and relationships across sources.</p>
        </div>

        {/* Arrow */}
        <div className="plat-flow-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 3 - Cluster Alerts */}
        <div className="plat-flow-card" style={{'borderTopColor':'#0891B2'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'10px','background':'rgba(8,145,178,0.08)','border':'1px solid rgba(8,145,178,0.18)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <div style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#0891B2','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.5rem'}}>03 · Detect</div>
          <h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.3}}>Detect Network Risk</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Graph-native intelligence, risk scoring, relationship analysis, and signal correlation surface hidden networks, mule patterns, and coordinated risk that rule-based tools miss.</p>
        </div>

        {/* Arrow */}
        <div className="plat-flow-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 4 - Surface Investigation Context */}
        <div className="plat-flow-card" style={{'borderTopColor':'#D97706'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'10px','background':'rgba(217,119,6,0.08)','border':'1px solid rgba(217,119,6,0.18)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </div>
          <div style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#D97706','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.5rem'}}>04 · Cluster</div>
          <h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.3}}>Cluster Cases</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Related alerts and detected activity are grouped into connected, investigation-ready cases - not isolated queues.</p>
        </div>

        {/* Arrow */}
        <div className="plat-flow-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 5 - Support Decisions */}
        <div className="plat-flow-card" style={{'borderTopColor':'#059669'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'10px','background':'rgba(5,150,105,0.08)','border':'1px solid rgba(5,150,105,0.18)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <div style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#059669','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.5rem'}}>05 · Investigate</div>
          <h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.3}}>Investigate Context</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Case context, graph views, AI-assisted summaries, and evidence are surfaced before analysts take any action.</p>
        </div>

        {/* Arrow */}
        <div className="plat-flow-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 6 - Preserve Audit Trails */}
        <div className="plat-flow-card" style={{'borderTopColor':'#1E6FB7','background':'linear-gradient(135deg,#EFF6FF,#fff)'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'10px','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.18)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <div style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#1E6FB7','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.5rem'}}>06 · Decide</div>
          <h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.3}}>Decide & Record</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Analysts reach faster, explainable outcomes - with every action, rationale, and evidence reference captured in structured, audit-ready records.</p>
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
    @media (max-width: 900px) {
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

{/* FLEXIBLE ADOPTION */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container" style={{'maxWidth':'64rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>FLEXIBLE ADOPTION</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1.25rem'}}>Two ways to adopt Verafye</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','lineHeight':1.75,'maxWidth':'48rem','margin':'0 auto'}}>
        Verafye is designed for flexible adoption. Start alongside existing systems by ingesting alerts, transactions, events, entities, device signals, identity signals, payment data, behavioral signals, and case data. Expand into graph-native detection, risk scoring, clustering, case workflow, evidence management, and decisioning as value is proven.
      </p>
      <p style={{'fontSize':'clamp(0.9375rem,1.8vw,1.0625rem)','color':'var(--body)','lineHeight':1.75,'maxWidth':'48rem','margin':'1.25rem auto 0'}}>
        BaaS and embedded finance providers can use Verafye as an independent Network Risk Intelligence layer to connect payment, ledger, identity, KYC/KYB, device, program, partner, and case signals across fragmented systems - supporting cross-program and sponsor-bank ecosystem oversight workflows without replacing existing systems. Inputs are configurable based on use case and available data.
      </p>
    </div>
    <blockquote style={{'margin':'0 auto','maxWidth':'46rem','padding':'2rem 2.5rem','background':'linear-gradient(165deg,#EFF6FF 0%,#F8FBFF 100%)','border':'1px solid rgba(30,111,183,0.15)','borderRadius':'14px','textAlign':'center'}}>
      <p style={{'fontSize':'clamp(1.0625rem,2.2vw,1.375rem)','fontWeight':'700','color':'var(--dark)','lineHeight':1.4,'letterSpacing':'-0.02em','margin':0}}>
        Start alongside existing systems. Expand into broader detection, investigation, and decisioning workflows as value is proven.
      </p>
    </blockquote>
  </div>
</section>

{/* CORE PLATFORM MODULES */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.75rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>CORE MODULES</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Core platform modules</h2>
    </div>
    <div className="grid-3" style={{'maxWidth':'72rem','margin':'0 auto','gap':'1.5rem'}}>

      <div className="card card-elevated" style={{'padding':'2rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Signal Ingestion</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Ingest fraud, AML, payment, transaction, identity, device, behavior, sanctions, watchlist, and third-party enrichment signals from existing systems into one connected investigation context.</p>
      </div>

      <div className="card card-elevated" style={{'padding':'2rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Alert Clustering</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Group related alerts, entities, accounts, merchants, beneficiaries, devices, and transactions into investigation-ready clusters - reducing alert noise and surfacing coordinated risk as a single reviewable case.</p>
      </div>

      <div className="card card-elevated" style={{'padding':'2rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Graph Intelligence</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Surface hidden relationships across customers, merchants, accounts, beneficiaries, devices, identities, and transactions - revealing coordinated fraud networks, mule rings, and suspicious entity clusters.</p>
      </div>

      <div className="card card-elevated" style={{'padding':'2rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Case Workflows</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Support case creation, assignment, review, notes, prioritization, escalation, and closure workflows - with pre-assembled entity context, relationship maps, and transaction history delivered to analysts before review begins.</p>
      </div>

      <div className="card card-elevated" style={{'padding':'2rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Evidence Packs &amp; Reviewer Controls</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Preserve linked signals, case context, analyst notes, decision rationale, and supporting records for internal review and audit readiness. Reviewer controls support controlled access, decision history, audit logs, and investigation records.</p>
      </div>

      <div className="card card-elevated" style={{'padding':'2rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6H4z"/><path d="M14 14h6v6h-6z"/><path d="M7 10v4"/><path d="M17 10v4"/><path d="M10 7h4"/><path d="M10 17h4"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Integrations &amp; Orchestration</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Connect third-party KYC, KYB, sanctions, watchlist, device, banking, and enrichment providers through flexible integration paths and pre-built connectors.</p>
      </div>

    </div>
  </div>
</section>

{/* INVESTIGATION INTELLIGENCE ARCHITECTURE */}
<section style={{'padding':'4rem 0','background':'linear-gradient(180deg,#F8FBFF 0%,#ffffff 100%)'}}>
  <div className="container" style={{'maxWidth':'80rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>ARCHITECTURE</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1.25rem'}}>Investigation Intelligence Architecture</h2>
      <p style={{'fontSize':'clamp(0.9375rem,1.8vw,1.0625rem)','color':'var(--body)','lineHeight':1.75}}>The Verafye platform brings signals, alerts, relationships, evidence, and workflows into a single Investigation Intelligence Layer - helping risk teams understand entity relationships, prioritize cases, make explainable decisions, and preserve audit-ready investigation records.</p>
    </div>

    {/* Architecture 4-stage flow */}
    <div style={{'overflowX':'auto','paddingBottom':'1rem'}}>
      <div className="arch-flow-row">

        {/* Stage 1 - Signals In */}
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
            <p style={{'fontSize':'0.75rem','color':'#1E6FB7','lineHeight':1.55,'margin':0}}>Fragmented signals from multiple systems connected through flexible integration paths and connectors</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="arch-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 2 - Connected Risk Layer */}
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
            <p style={{'fontSize':'0.75rem','color':'#7C3AED','lineHeight':1.55,'margin':0}}>Signals connected, entities resolved, and alerts clustered into connected risk context</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="arch-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>

        {/* Stage 3 - Investigation Intelligence */}
        <div className="arch-card" style={{'borderTopColor':'#0891B2'}}>
          <div style={{'display':'flex','alignItems':'center','gap':'0.625rem','marginBottom':'1.25rem'}}>
            <div style={{'width':'1.75rem','height':'1.75rem','borderRadius':'50%','background':'#0891B2','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
              <span style={{'fontSize':'0.5625rem','fontWeight':'800','color':'#fff','letterSpacing':'-0.02em'}}>03</span>
            </div>
            <span style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#0891B2','textTransform':'uppercase','letterSpacing':'0.1em'}}>Investigation Intelligence</span>
          </div>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem','lineHeight':1.35}}>Case-ready intelligence</h3>
          <div style={{'display':'flex','flexDirection':'column','gap':'0.5rem','marginBottom':'1.25rem'}}>
            {['Case context','Prioritization','Reviewer controls','Explainable decision support','Analyst workflows','Evidence packs & audit trail'].map((item,i) => (
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

        {/* Stage 4 - Case Outcomes */}
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
    <div style={{'textAlign':'center','marginTop':'2.5rem'}}>
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
    @media (max-width: 860px) {
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
<section className="section-light" style={{'padding':'3.5rem 0'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>CONFIGURABLE WORKFLOWS</p>
        <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>Governed investigation configuration for risk teams</h2>
        <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem','lineHeight':1.7}}>Verafye supports governed investigation configuration, helping risk teams adapt review logic, workflows, and prioritization paths with appropriate controls - without requiring engineering dependency for routine adjustments.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.875rem'}}>
          {['Governed workflow and review logic configuration','Prioritization and escalation path controls','Rule review and approval workflows','Audit-ready change records for governance teams','Human review before any configuration goes live'].map((item, i) => (
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
        <div style={{'fontSize':'0.6875rem','fontWeight':'700','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.08em','marginBottom':'1.25rem'}}>Governed configuration</div>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.75rem'}}>
          <div className="card" style={{'padding':'1.25rem'}}>
            <div style={{'fontSize':'0.75rem','fontWeight':'600','color':'var(--dark)','marginBottom':'0.375rem'}}>Investigation workflow configuration</div>
            <div style={{'fontSize':'0.8125rem','color':'var(--muted)','lineHeight':1.6}}>Risk teams can adapt review logic, escalation paths, and prioritization settings with appropriate governance controls in place.</div>
          </div>
          <div className="card" style={{'padding':'1.25rem'}}>
            <div style={{'fontSize':'0.75rem','fontWeight':'600','color':'var(--dark)','marginBottom':'0.375rem'}}>Approval and review workflows</div>
            <div style={{'fontSize':'0.8125rem','color':'var(--muted)','lineHeight':1.6}}>Configuration changes follow governed review workflows before going live - maintaining auditability and operational oversight.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* DEVICE AND BEHAVIOR SIGNALS */}
<section style={{'padding':'3.5rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div style={{'background':'linear-gradient(135deg,var(--bg-blue),#fff)','border':'1px solid rgba(30,111,183,0.12)','borderRadius':'1.25rem','padding':'2rem','order':'1'}}>
        <div style={{'fontSize':'0.6875rem','fontWeight':'700','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.08em','marginBottom':'1rem'}}>Device &amp; Behavior Signals</div>
        <div style={{'display':'flex','flexWrap':'wrap','gap':'0.5rem','marginBottom':'1.25rem'}}>
          {['Device context','Session signals','Identity signals','Behavior patterns','Account activity'].map(tag => (
            <span key={tag} style={{'display':'inline-flex','padding':'0.3rem 0.7rem','borderRadius':'9999px','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.15)','fontSize':'0.6875rem','fontWeight':'500','color':'var(--primary)'}}>{tag}</span>
          ))}
        </div>
        <div style={{'height':'1px','background':'var(--border)','marginBottom':'1.25rem'}}></div>
        <div style={{'display':'flex','alignItems':'center','gap':'0.75rem','background':'#fff','border':'1px solid var(--border)','borderRadius':'0.75rem','padding':'1rem'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'0.5rem','background':'var(--primary)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
          </div>
          <div>
            <div style={{'fontSize':'0.8125rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.125rem'}}>Connected to case context</div>
            <div style={{'fontSize':'0.75rem','color':'var(--muted)'}}>Device and behavior signals surface in investigation workflows</div>
          </div>
        </div>
      </div>
      <div style={{'order':'2'}}>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>DEVICE &amp; BEHAVIOR</p>
        <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>Connect device and behavior context into investigations</h2>
        <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem','lineHeight':1.7}}>Verafye can connect device, session, identity, and behavior signals into investigation workflows where available, helping teams review suspicious activity with broader context across account, payment, and behavioral signals.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.875rem'}}>
          {['Device and session signal ingestion where available','Behavior context connected to account and transaction signals','Suspicious activity patterns surfaced for investigator review','Device and behavior signals linked into case and graph context','Human reviewer controls for investigation outcomes'].map((item, i) => (
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
<section className="section-light" style={{'padding':'3.5rem 0'}}>
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
<section style={{'padding':'3.5rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.75rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>APIS &amp; INTEGRATIONS</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>Connect through flexible integrations and pre-built connectors</h2>
      <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.125rem)','color':'var(--body)','lineHeight':1.75}}>Verafye can connect with third-party KYC, KYB, sanctions, watchlist, device, email, phone, banking, enrichment, and ecosystem providers through flexible integration paths and pre-built connectors.</p>
    </div>
    <div className="grid-3" style={{'maxWidth':'72rem','margin':'0 auto 2.5rem','gap':'1.5rem'}}>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>REST APIs</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Connect Verafye to your existing systems and data pipelines through documented REST APIs.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.0625rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>Integration support</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Integration support for device and behavior signal capture across web and mobile surfaces where available.</p>
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
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.75rem'}}>
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
<section style={{'padding':'3rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>SECURITY, PRIVACY & CONTROL</p>
      <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem','letterSpacing':'-0.025em'}}>Built for regulated environments that require security and auditability by design</h2>
      <p style={{'fontSize':'clamp(0.875rem,1.75vw,1.0625rem)','color':'var(--body)','lineHeight':1.75}}>
        Verafye is designed for financial institutions and payment platforms where data sensitivity, audit traceability, and privacy controls are non-negotiable requirements.
      </p>
    </div>
    <div style={{'display':'grid','gridTemplateColumns':'repeat(5,1fr)','gap':'1rem'}}>
      {[
        { label: 'ISO/IEC 27001-aligned controls', sub: 'Information Security Management' },
        { label: 'SOC 2 readiness posture',  sub: 'Security & Availability Controls' },
        { label: 'PCI DSS SAQ-D aligned', sub: 'Payment Data Security' },
        { label: 'GDPR-aligned',  sub: 'EU Data Protection' },
        { label: 'DPDP-aware',    sub: 'India Data Protection Readiness' },
      ].map(b => (
        <div key={b.label} style={{'display':'flex','flexDirection':'column','alignItems':'center','justifyContent':'center','gap':'0.25rem','padding':'1rem 1.25rem','border':'1px solid var(--border)','borderRadius':'10px','background':'var(--bg-light)','textAlign':'center'}}>
          <span style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.01em','lineHeight':1.2}}>{b.label}</span>
          <span style={{'fontSize':'0.75rem','color':'var(--muted)','lineHeight':1.3}}>{b.sub}</span>
        </div>
      ))}
    </div>
    <div style={{'display':'grid','gridTemplateColumns':'1fr 1fr 1fr','gap':'1.25rem','marginTop':'1.5rem'}}>
      {[
        { title: 'Role-based access controls', body: 'Data access follows controlled, role-based patterns - analysts, investigators, and system processes access only what is appropriate to their workflow context.' },
        { title: 'End-to-end audit trails', body: 'All investigation actions, alert dispositions, and case progressions are logged and auditable - providing the traceable record compliance and governance functions require.' },
        { title: 'Explainable decisioning', body: 'Verafye is designed so that risk scores and case recommendations can be reviewed with documented, traceable context - supporting explainability requirements for regulated financial crime workflows.' },
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
<section style={{'padding':'3.5rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)'}}>
  <div className="container" style={{'textAlign':'center','maxWidth':'48rem'}}>
    <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1.25rem'}}>See how Verafye connects your risk operations</h2>
    <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','maxWidth':'36rem','margin':'0 auto 2.5rem'}}>Explore how Verafye helps fraud, AML, and risk teams connect signals from existing systems into investigation-ready workflows - starting with a scoped pilot and expanding coverage as outcomes are proven.</p>
    <div style={{'display':'flex','flexWrap':'wrap','justifyContent':'center','gap':'1rem'}}>
      <Link href="/risk-shadowing-review" className="btn-primary">
        Explore Risk Shadowing Review
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
