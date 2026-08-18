import Link from 'next/link';
import SplitHeroWithVisualCard, { PlatformVisualCard } from '../../components/SplitHeroWithVisualCard';

export const metadata = {
  title: { absolute: "Financial Crime Detection Platform | AI Fraud & AML" },
  description: "Uncover fraud, AML and payment risk with Verafye's graph-native financial crime detection platform. Transform fragmented data into investigation-ready intelligence.",
  keywords: [
    "graph native risk intelligence platform",
    "network risk intelligence software",
    "entity resolution platform",
    "transaction network analysis",
    "financial crime intelligence platform",
    "investigation intelligence",
  ],
  openGraph: {
    title: "Financial Crime Detection Platform | AI Fraud & AML",
    description: "Uncover fraud, AML and payment risk with Verafye's graph-native financial crime detection platform. Transform fragmented data into investigation-ready intelligence.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Financial Crime Detection Platform | AI Fraud & AML",
    description: "Uncover fraud, AML and payment risk with Verafye's graph-native financial crime detection platform. Transform fragmented data into investigation-ready intelligence.",
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
  seoH1="Financial Crime Detection Platform"
  title="Connected-Risk Intelligence for fraud, AML, and payment risk teams"
  description="Verafye is a Connected-Risk Intelligence platform that originates risk signals through native detection or begins with suspicion from existing controls — turning either into network-mapped, investigation-ready intelligence, built for PSPs, MSBs, and payment fintechs operating under regulatory complexity."
  body="Connect selected data sources or ingest existing alerts and suspicions, resolve entities, map network-level risk across relevant relationships, and carry that context into investigation and decisioning — without replacing your existing control stack first."
  primaryCTA={{ label: 'Explore Risk Shadowing', href: '/risk-shadowing-review' }}
  secondaryCTA={{ label: 'Explore Capabilities', href: '/capabilities' }}
  visualCard={<PlatformVisualCard />}
/>

{/* PLATFORM CAPABILITY OVERVIEW */}
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
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Use explainable AI assistance, summaries, suggested next steps, notes, and audit trails to support confident, audit-ready decisions.</p>
      </div>
    </div>
  </div>
</section>

{/* ─── BEFORE / AFTER CONCEPT DIAGRAM ────────────────────────────────────── */}
<section style={{'padding':'4rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)'}}>
  <style>{`
    @keyframes concept-pulse {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50%       { opacity: 0.85; transform: scale(1.1); }
    }
    .concept-pulse { animation: concept-pulse 2.8s ease-in-out infinite; transform-origin: 150px 110px; transform-box: fill-box; }
    .concept-grid { display: grid; grid-template-columns: 1fr 72px 1fr; align-items: center; }
    @media (max-width: 680px) {
      .concept-grid { grid-template-columns: 1fr; gap: 1rem; }
      .concept-arrow-col { transform: rotate(90deg); }
    }
  `}</style>
  <div className="container" style={{'maxWidth':'60rem'}}>
    <div style={{'textAlign':'center','maxWidth':'48rem','margin':'0 auto 2.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>THE TRANSFORMATION</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.5rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1rem'}}>
        From fragmented alerts to connected risk
      </h2>
      <p style={{'fontSize':'clamp(0.9375rem,1.8vw,1.0625rem)','color':'var(--body)','lineHeight':1.75}}>
        Alerts from across your fraud, AML, payment, and identity systems arrive as isolated signals. Verafye connects them into a single, investigation-ready risk picture.
      </p>
    </div>

    <div className="concept-grid">

      {/* ── BEFORE panel ── */}
      <div style={{'background':'#fff','border':'1.5px solid var(--border)','borderRadius':'14px','padding':'1.25rem','overflow':'hidden'}}>
        <div style={{'fontSize':'0.625rem','fontWeight':'700','textTransform':'uppercase','letterSpacing':'0.1em','color':'#94A3B8','marginBottom':'0.875rem','display':'flex','alignItems':'center','gap':'6px'}}>
          <div style={{'width':'7px','height':'7px','borderRadius':'50%','background':'#CBD5E1'}}></div>
          Before — Fragmented signals
        </div>
        <svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" width="100%" style={{'display':'block'}}>
          {/* Silo backgrounds */}
          <rect x="8"   y="8"   width="84" height="96" rx="8" fill="#F8FAFC" stroke="#E2EAF4" strokeWidth="1" strokeDasharray="4,3"/>
          <rect x="108" y="8"   width="84" height="96" rx="8" fill="#F8FAFC" stroke="#E2EAF4" strokeWidth="1" strokeDasharray="4,3"/>
          <rect x="208" y="8"   width="84" height="96" rx="8" fill="#F8FAFC" stroke="#E2EAF4" strokeWidth="1" strokeDasharray="4,3"/>
          <rect x="8"   y="118" width="84" height="96" rx="8" fill="#F8FAFC" stroke="#E2EAF4" strokeWidth="1" strokeDasharray="4,3"/>
          <rect x="108" y="118" width="84" height="96" rx="8" fill="#F8FAFC" stroke="#E2EAF4" strokeWidth="1" strokeDasharray="4,3"/>
          <rect x="208" y="118" width="84" height="96" rx="8" fill="#F8FAFC" stroke="#E2EAF4" strokeWidth="1" strokeDasharray="4,3"/>
          {/* Silo labels */}
          <text x="50"  y="22" textAnchor="middle" fontSize="7" fontWeight="700" fill="#CBD5E1" letterSpacing="0.06em">FRAUD</text>
          <text x="150" y="22" textAnchor="middle" fontSize="7" fontWeight="700" fill="#CBD5E1" letterSpacing="0.06em">AML</text>
          <text x="250" y="22" textAnchor="middle" fontSize="7" fontWeight="700" fill="#CBD5E1" letterSpacing="0.06em">PAYMENTS</text>
          <text x="50"  y="132" textAnchor="middle" fontSize="7" fontWeight="700" fill="#CBD5E1" letterSpacing="0.06em">IDENTITY</text>
          <text x="150" y="132" textAnchor="middle" fontSize="7" fontWeight="700" fill="#CBD5E1" letterSpacing="0.06em">DEVICE</text>
          <text x="250" y="132" textAnchor="middle" fontSize="7" fontWeight="700" fill="#CBD5E1" letterSpacing="0.06em">CASE MGMT</text>
          {/* Isolated alert nodes */}
          <circle cx="35"  cy="62" r="16" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"/>
          <text x="35"  y="66" textAnchor="middle" fontSize="8" fontWeight="700" fill="#EF4444">Alert</text>
          <circle cx="66"  cy="78" r="12" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"/>
          <text x="66"  y="82" textAnchor="middle" fontSize="7" fill="#EF4444">Alert</text>
          <circle cx="140" cy="55" r="16" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1.5"/>
          <text x="140" y="59" textAnchor="middle" fontSize="8" fontWeight="700" fill="#F97316">Alert</text>
          <circle cx="168" cy="76" r="11" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1.5"/>
          <text x="168" y="80" textAnchor="middle" fontSize="7" fill="#F97316">Alert</text>
          <circle cx="238" cy="60" r="14" fill="#FAFAFA" stroke="#D4D4D8" strokeWidth="1.5"/>
          <text x="238" y="64" textAnchor="middle" fontSize="8" fontWeight="700" fill="#71717A">Event</text>
          <circle cx="265" cy="78" r="11" fill="#FAFAFA" stroke="#D4D4D8" strokeWidth="1.5"/>
          <text x="265" y="82" textAnchor="middle" fontSize="7" fill="#71717A">Event</text>
          <circle cx="42"  cy="172" r="14" fill="#F5F3FF" stroke="#DDD6FE" strokeWidth="1.5"/>
          <text x="42"  y="176" textAnchor="middle" fontSize="8" fontWeight="700" fill="#8B5CF6">Signal</text>
          <circle cx="142" cy="168" r="15" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5"/>
          <text x="142" y="172" textAnchor="middle" fontSize="8" fontWeight="700" fill="#059669">Signal</text>
          <circle cx="165" cy="190" r="10" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5"/>
          <text x="165" y="194" textAnchor="middle" fontSize="7" fill="#059669">Data</text>
          <circle cx="244" cy="170" r="13" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1.5"/>
          <text x="244" y="174" textAnchor="middle" fontSize="8" fontWeight="700" fill="#0891B2">Case</text>
          {/* Warning badges */}
          <circle cx="51"  cy="46" r="7" fill="#EF4444"/>
          <text x="51" y="50" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff">!</text>
          <circle cx="155" cy="39" r="7" fill="#F97316"/>
          <text x="155" y="43" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff">!</text>
          {/* Dashed non-connection lines between silos */}
          <line x1="92"  y1="65"  x2="108" y2="65"  stroke="#E2EAF4" strokeWidth="1.5" strokeDasharray="3,3"/>
          <line x1="192" y1="65"  x2="208" y2="65"  stroke="#E2EAF4" strokeWidth="1.5" strokeDasharray="3,3"/>
          <line x1="50"  y1="104" x2="50"  y2="118" stroke="#E2EAF4" strokeWidth="1.5" strokeDasharray="3,3"/>
          <line x1="150" y1="104" x2="150" y2="118" stroke="#E2EAF4" strokeWidth="1.5" strokeDasharray="3,3"/>
          <line x1="250" y1="104" x2="250" y2="118" stroke="#E2EAF4" strokeWidth="1.5" strokeDasharray="3,3"/>
          {/* Count label */}
          <rect x="60" y="216" width="180" height="14" rx="7" fill="#F1F5F9"/>
          <text x="150" y="226" textAnchor="middle" fontSize="9" fontWeight="600" fill="#94A3B8">42 isolated alerts across 6 systems</text>
        </svg>
      </div>

      {/* ── Arrow column ── */}
      <div className="concept-arrow-col" style={{'display':'flex','flexDirection':'column','alignItems':'center','justifyContent':'center','gap':'6px'}}>
        <div style={{'width':'2px','height':'28px','background':'linear-gradient(to bottom,#BFDBFE,#1E6FB7)','borderRadius':'2px'}}></div>
        <div style={{'width':'44px','height':'44px','borderRadius':'50%','background':'linear-gradient(135deg,var(--primary),#3B82F6)','display':'flex','alignItems':'center','justifyContent':'center','boxShadow':'0 4px 16px rgba(30,111,183,0.3)','flexShrink':0}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
        <div style={{'fontSize':'0.5rem','fontWeight':'700','color':'var(--primary)','textAlign':'center','letterSpacing':'0.05em','textTransform':'uppercase','lineHeight':1.4}}>Connected-Risk<br/>Intelligence</div>
        <div style={{'width':'2px','height':'28px','background':'linear-gradient(to bottom,#1E6FB7,#BFDBFE)','borderRadius':'2px'}}></div>
      </div>

      {/* ── AFTER panel ── */}
      <div style={{'background':'linear-gradient(145deg,#EFF6FF 0%,#F0F9FF 60%,#F8FBFF 100%)','border':'1.5px solid #BFDBFE','borderRadius':'14px','padding':'1.25rem','overflow':'hidden'}}>
        <div style={{'fontSize':'0.625rem','fontWeight':'700','textTransform':'uppercase','letterSpacing':'0.1em','color':'var(--primary)','marginBottom':'0.875rem','display':'flex','alignItems':'center','gap':'6px'}}>
          <div style={{'width':'7px','height':'7px','borderRadius':'50%','background':'var(--primary)'}}></div>
          After — Connected risk picture
        </div>
        <svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" width="100%" style={{'display':'block'}}>
          <defs>
            <radialGradient id="cg-bg" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#1E6FB7" stopOpacity="0.12"/>
              <stop offset="100%" stopColor="#1E6FB7" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Background glow */}
          <ellipse cx="150" cy="115" rx="110" ry="85" fill="url(#cg-bg)"/>
          {/* Edges from centre */}
          <line x1="150" y1="115" x2="42"  y2="55"  stroke="#1E6FB7" strokeWidth="1.5" opacity="0.35"/>
          <line x1="150" y1="115" x2="148" y2="34"  stroke="#1E6FB7" strokeWidth="1.5" opacity="0.35"/>
          <line x1="150" y1="115" x2="256" y2="55"  stroke="#1E6FB7" strokeWidth="1.5" opacity="0.35"/>
          <line x1="150" y1="115" x2="40"  y2="145" stroke="#1E6FB7" strokeWidth="1.5" opacity="0.35"/>
          <line x1="150" y1="115" x2="260" y2="145" stroke="#1E6FB7" strokeWidth="1.5" opacity="0.35"/>
          <line x1="150" y1="115" x2="82"  y2="190" stroke="#1E6FB7" strokeWidth="1.5" opacity="0.35"/>
          <line x1="150" y1="115" x2="220" y2="190" stroke="#1E6FB7" strokeWidth="1.5" opacity="0.35"/>
          <line x1="150" y1="115" x2="150" y2="196" stroke="#1E6FB7" strokeWidth="1.5" opacity="0.35"/>
          {/* Cross-connections */}
          <line x1="42"  y1="55"  x2="148" y2="34"  stroke="#7C3AED" strokeWidth="1" strokeDasharray="3,3" opacity="0.35"/>
          <line x1="42"  y1="55"  x2="40"  y2="145" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3,3" opacity="0.35"/>
          <line x1="256" y1="55"  x2="260" y2="145" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3,3" opacity="0.35"/>
          <line x1="82"  y1="190" x2="150" y2="196" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3,3" opacity="0.35"/>
          <line x1="220" y1="190" x2="150" y2="196" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3,3" opacity="0.35"/>
          {/* Outer signal nodes (same signals, now connected) */}
          <circle cx="42"  cy="55"  r="18" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"/>
          <text x="42"  y="59"  textAnchor="middle" fontSize="8" fontWeight="700" fill="#EF4444">Alert</text>
          <circle cx="148" cy="34"  r="15" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1.5"/>
          <text x="148" y="38"  textAnchor="middle" fontSize="8" fontWeight="700" fill="#F97316">Alert</text>
          <circle cx="258" cy="55"  r="16" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1.5"/>
          <text x="258" y="59"  textAnchor="middle" fontSize="8" fontWeight="700" fill="#EF4444">Alert</text>
          <circle cx="40"  cy="145" r="16" fill="#F5F3FF" stroke="#DDD6FE" strokeWidth="1.5"/>
          <text x="40"  y="149" textAnchor="middle" fontSize="8" fontWeight="700" fill="#8B5CF6">Signal</text>
          <circle cx="260" cy="145" r="15" fill="#FAFAFA" stroke="#D4D4D8" strokeWidth="1.5"/>
          <text x="260" y="149" textAnchor="middle" fontSize="8" fontWeight="700" fill="#71717A">Event</text>
          <circle cx="82"  cy="190" r="14" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5"/>
          <text x="82"  y="194" textAnchor="middle" fontSize="8" fontWeight="700" fill="#059669">Signal</text>
          <circle cx="150" cy="196" r="13" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1.5"/>
          <text x="150" y="200" textAnchor="middle" fontSize="8" fontWeight="700" fill="#F97316">Alert</text>
          <circle cx="220" cy="190" r="13" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1.5"/>
          <text x="220" y="194" textAnchor="middle" fontSize="8" fontWeight="700" fill="#0891B2">Case</text>
          {/* Central hub */}
          <circle cx="150" cy="115" r="36" fill="#EFF6FF" stroke="#1E6FB7" strokeWidth="2.5"/>
          <circle cx="150" cy="115" r="36" fill="rgba(30,111,183,0.06)" className="concept-pulse"/>
          <text x="150" y="108" textAnchor="middle" fontSize="9"  fontWeight="800" fill="#1E6FB7">Risk</text>
          <text x="150" y="121" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1E6FB7">Cluster</text>
          <text x="150" y="133" textAnchor="middle" fontSize="8"  fill="#64748B">1 connected case</text>
          {/* Checkmark badge */}
          <circle cx="178" cy="89" r="11" fill="#059669"/>
          <path d="M172 89 l4 4 l8-8" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Count label */}
          <rect x="58" y="216" width="184" height="14" rx="7" fill="rgba(30,111,183,0.08)"/>
          <text x="150" y="226" textAnchor="middle" fontSize="9" fontWeight="600" fill="#1E6FB7">42 alerts → 1 investigation-ready case</text>
        </svg>
      </div>
    </div>

    {/* Outcome strip */}
    <div style={{'marginTop':'1.25rem','background':'linear-gradient(135deg,var(--primary) 0%,#2563EB 100%)','borderRadius':'12px','padding':'1rem 1.5rem','display':'flex','alignItems':'center','justifyContent':'space-between','flexWrap':'wrap','gap':'1rem'}}>
      <div style={{'display':'flex','alignItems':'center','gap':'0.875rem'}}>
        <div style={{'width':'36px','height':'36px','background':'rgba(255,255,255,0.15)','borderRadius':'8px','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </div>
        <div>
          <p style={{'fontSize':'0.875rem','fontWeight':'700','color':'#fff','marginBottom':'0.125rem'}}>Investigation-ready evidence pack — first outputs within 1–2 weeks, subject to data readiness</p>
          <p style={{'fontSize':'0.75rem','color':'rgba(255,255,255,0.7)'}}>Linked entities · Risk indicators · Analyst review steps · Audit-ready summary</p>
        </div>
      </div>
      <div style={{'display':'flex','gap':'0.5rem','flexWrap':'wrap'}}>
        <span style={{'background':'rgba(255,255,255,0.15)','border':'1px solid rgba(255,255,255,0.2)','borderRadius':'6px','padding':'0.25rem 0.75rem','fontSize':'0.6875rem','fontWeight':'600','color':'#fff'}}>No deployment required</span>
        <span style={{'background':'rgba(255,255,255,0.15)','border':'1px solid rgba(255,255,255,0.2)','borderRadius':'6px','padding':'0.25rem 0.75rem','fontSize':'0.6875rem','fontWeight':'600','color':'#fff'}}>API-connected</span>
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
      <p style={{'fontSize':'clamp(0.9375rem,1.8vw,1.0625rem)','color':'var(--body)','lineHeight':1.7}}>Verafye surfaces Connected-Risk Intelligence through entity resolution, risk scoring, relationship mapping, and signal correlation — then carries that context through clustering, investigation, and audit-ready decisioning in one connected flow. Detection-capable and investigation-first, built to connect selected data sources into a unified risk intelligence workflow.</p>
    </div>

    {/* Horizontal flow - scrollable on mobile */}
    <div style={{'overflowX':'auto','paddingBottom':'0.5rem'}}>
      <div className="plat-flow-row">

        {/* Stage 1 - Ingest Signals */}
        <div className="plat-flow-card" style={{'borderTopColor':'#1E6FB7'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'10px','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.18)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </div>
          <div style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#1E6FB7','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.5rem'}}>01 · Signal Origin</div>
          <h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.3}}>Originate or Ingest Risk Signals</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Start with raw transaction, account, device and behavioural events for Verafye-native detection — or ingest alerts and suspicions from existing fraud, AML, KYC, screening and risk systems via API.</p>
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
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Network-level intelligence, risk scoring, relationship analysis, and signal correlation surface relevant connected relationships and network context — including mule patterns and coordinated risk across connected entities.</p>
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
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Case context, graph views, embedded intelligence summaries, and evidence are surfaced before analysts take any action.</p>
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
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.6}}>Analysts carry connected context into review and decision — with every action, rationale, and evidence reference captured in structured, audit-ready records.</p>
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
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1.25rem'}}>A phased path to Verafye-led workflows</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','lineHeight':1.75,'maxWidth':'48rem','margin':'0 auto'}}>
        Verafye is designed for outcome-led adoption. Begin with a scoped Risk Shadowing Review on selected data sources, then expand detection, investigation, and decisioning coverage as value is proven at each stage.
      </p>
    </div>
    <div style={{'display':'grid','gridTemplateColumns':'repeat(auto-fit,minmax(13rem,1fr))','gap':'1.25rem','maxWidth':'56rem','margin':'0 auto 2rem'}}>
      {[
        { stage: '01', label: 'Shadow', desc: 'Connect selected data feeds. Run Verafye in observation mode. Receive an investigation-ready evidence pack with network risk findings from your live data.' },
        { stage: '02', label: 'Augment', desc: 'Verafye risk context surfaces within investigation workflows. Teams begin actioning Verafye-led clusters and investigation-ready cases.' },
        { stage: '03', label: 'Operate', desc: 'Verafye becomes the primary investigation workspace. Detection, case formation, and audit-ready decisions run through the Verafye platform.' },
        { stage: '04', label: 'Consolidate', desc: 'Expand Verafye into the primary investigation and evidence environment for selected, agreed use cases — an optional destination, not a universal replacement.' },
      ].map(item => (
        <div key={item.stage} style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'12px','padding':'1.5rem'}}>
          <div style={{'fontSize':'0.5625rem','fontWeight':'800','color':'var(--primary)','letterSpacing':'0.1em','textTransform':'uppercase','marginBottom':'0.5rem'}}>{item.stage}</div>
          <div style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>{item.label}</div>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':1.65,'margin':0}}>{item.desc}</p>
        </div>
      ))}
    </div>
    <div style={{'margin':'0 auto','maxWidth':'46rem','padding':'1.5rem 2rem','background':'linear-gradient(165deg,#EFF6FF 0%,#F8FBFF 100%)','border':'1px solid rgba(30,111,183,0.15)','borderRadius':'12px','display':'flex','alignItems':'center','gap':'1.25rem'}}>
      <div style={{'width':'3px','minHeight':'3rem','background':'var(--primary)','borderRadius':'2px','flexShrink':0,'alignSelf':'stretch'}}></div>
      <p style={{'fontSize':'clamp(0.9375rem,1.8vw,1.0625rem)','fontWeight':'400','fontStyle':'italic','color':'var(--dark)','lineHeight':1.65,'letterSpacing':'-0.01em','margin':0}}>
        Start with a Risk Shadowing Review on selected data sources. Expand into detection, investigation, and decisioning workflows as outcomes are proven at each stage.
      </p>
    </div>
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
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>INVESTIGATION INTELLIGENCE</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1.25rem'}}>Investigation Intelligence Architecture</h2>
      <p style={{'fontSize':'clamp(0.9375rem,1.8vw,1.0625rem)','color':'var(--body)','lineHeight':1.75,'marginBottom':'1.5rem'}}>
        Most platforms add intelligence as a separate layer. Verafye builds it in — at signal ingestion, entity resolution, graph reasoning, detection, investigation, and evidence generation. Graph reasoning, alert correlation, case context, and audit trails are native capabilities at every stage, not bolt-ons.
      </p>

    </div>

    {/* Architecture 4-stage flow — 1×4 grid, no scroll */}
    <div className="arch-card-grid" style={{'display':'grid','gridTemplateColumns':'repeat(4,1fr)','gap':'1.25rem','maxWidth':'80rem','margin':'0 auto'}}>

      {/* Stage 1 - Signals In */}
      <div className="arch-card" style={{'borderTopColor':'#1E6FB7'}}>
        <div style={{'display':'flex','alignItems':'center','gap':'0.625rem','marginBottom':'1.25rem'}}>
          <div style={{'width':'1.75rem','height':'1.75rem','borderRadius':'50%','background':'#1E6FB7','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
            <span style={{'fontSize':'0.5625rem','fontWeight':'800','color':'#fff','letterSpacing':'-0.02em'}}>01</span>
          </div>
          <span style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#1E6FB7','textTransform':'uppercase','letterSpacing':'0.1em'}}>Signals In</span>
        </div>
        <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','lineHeight':1.35}}>Signal inputs</h3>
        <p style={{'fontSize':'0.8rem','color':'var(--muted)','lineHeight':1.5,'marginBottom':'0.875rem'}}>Native detection from raw activity, or external suspicion from existing controls.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.375rem','marginBottom':'1.25rem'}}>
          {['Transactions & account activity','Device & behavioural signals','Fraud & AML alerts','KYC & screening signals','Payment-risk & third-party signals'].map((item,i) => (
            <div key={i} style={{'display':'flex','alignItems':'center','gap':'0.5rem'}}>
              <div style={{'width':'5px','height':'5px','borderRadius':'50%','background':'#1E6FB7','opacity':0.45,'flexShrink':0}}></div>
              <span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>{item}</span>
            </div>
          ))}
        </div>
        <div style={{'padding':'0.75rem','background':'rgba(30,111,183,0.05)','borderRadius':'8px','border':'1px solid rgba(30,111,183,0.1)','marginTop':'auto'}}>
          <p style={{'fontSize':'0.75rem','color':'#1E6FB7','lineHeight':1.55,'margin':0}}>Both paths feed the same Connected-Risk Intelligence architecture</p>
        </div>
      </div>

      {/* Stage 2 - Entity and Network Intelligence */}
      <div className="arch-card" style={{'borderTopColor':'#7C3AED'}}>
        <div style={{'display':'flex','alignItems':'center','gap':'0.625rem','marginBottom':'1.25rem'}}>
          <div style={{'width':'1.75rem','height':'1.75rem','borderRadius':'50%','background':'#7C3AED','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':0}}>
            <span style={{'fontSize':'0.5625rem','fontWeight':'800','color':'#fff','letterSpacing':'-0.02em'}}>02</span>
          </div>
          <span style={{'fontSize':'0.5625rem','fontWeight':'700','color':'#7C3AED','textTransform':'uppercase','letterSpacing':'0.1em'}}>Entity and Network Intelligence</span>
        </div>
        <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem','lineHeight':1.35}}>Connected-Risk Intelligence</h3>
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
          <p style={{'fontSize':'0.75rem','color':'#059669','lineHeight':1.55,'margin':0}}>Designed to reduce manual context assembly, with greater clarity and full audit-readiness</p>
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
    .arch-card {
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
    @media (max-width: 900px) {
      .arch-card-grid { grid-template-columns: repeat(2,1fr) !important; }
    }
    @media (max-width: 560px) {
      .arch-card-grid { grid-template-columns: 1fr !important; }
      .arch-card { padding: 1.25rem 1rem; }
    }
  `}</style>
</section>

{/* ─── EVIDENCE PACK STRUCTURE ──────────────────────────────────────────── */}
<section style={{'padding':'4rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>

    <div style={{'textAlign':'center','maxWidth':'52rem','margin':'0 auto 2.75rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>INVESTIGATION OUTPUT</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em','lineHeight':1.15}}>
        What an evidence pack looks like
      </h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','lineHeight':1.75}}>
        Each case Verafye surfaces includes a connected entity cluster, a time-ordered event trail, and a structured escalation rationale — so analysts start with a connected, investigation-ready view, not a stack of disconnected alerts.
      </p>
    </div>

    {/* Evidence pack card */}
    <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'14px','overflow':'hidden','maxWidth':'52rem','margin':'0 auto','boxShadow':'0 4px 24px rgba(0,0,0,0.06)'}}>

      {/* Pack header */}
      <div style={{'background':'var(--bg-tint)','borderBottom':'1px solid var(--border)','padding':'0.875rem 1.5rem','display':'flex','alignItems':'center','justifyContent':'space-between','flexWrap':'wrap','gap':'0.75rem'}}>
        <div style={{'display':'flex','alignItems':'center','gap':'0.75rem','flexWrap':'wrap'}}>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--dark)'}}>Case #2847 — Evidence Pack</span>
          <span style={{'fontSize':'0.6875rem','fontWeight':'600','padding':'0.2rem 0.625rem','borderRadius':'999px','background':'rgba(30,111,183,0.08)','color':'var(--primary)','border':'1px solid rgba(30,111,183,0.15)'}}>Mule network</span>
          <span style={{'fontSize':'0.6875rem','fontWeight':'600','padding':'0.2rem 0.625rem','borderRadius':'999px','background':'rgba(220,38,38,0.07)','color':'#DC2626','border':'1px solid rgba(220,38,38,0.15)'}}>High risk</span>
          <span style={{'fontSize':'0.6875rem','fontWeight':'600','padding':'0.2rem 0.625rem','borderRadius':'999px','background':'rgba(5,150,105,0.07)','color':'#059669','border':'1px solid rgba(5,150,105,0.15)'}}>Investigation-ready</span>
        </div>
        <div style={{'display':'flex','gap':'1rem','fontSize':'0.6875rem','color':'var(--muted)'}}>
          <span>7 entities</span>
          <span>23 signals</span>
          <span>4 alerts</span>
        </div>
      </div>

      {/* Three-panel layout */}
      <div style={{'display':'grid','gridTemplateColumns':'repeat(3,1fr)','borderBottom':'1px solid var(--border)'}}>

        {/* Panel 1 — Entity cluster */}
        <div style={{'borderRight':'1px solid var(--border)','padding':'1.25rem'}}>
          <p style={{'fontSize':'0.625rem','fontWeight':'700','textTransform':'uppercase','letterSpacing':'0.09em','color':'var(--muted)','marginBottom':'0.875rem','display':'flex','alignItems':'center','gap':'0.375rem'}}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
            Entity cluster · 7 connected
          </p>
          <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" width="100%" style={{'display':'block','marginBottom':'0.75rem'}}>
            {/* Edges */}
            <line x1="100" y1="60" x2="50"  y2="24" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 3"/>
            <line x1="100" y1="60" x2="150" y2="24" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="4 3"/>
            <line x1="100" y1="60" x2="24"  y2="90" stroke="#E2E8F0" strokeWidth="1"   strokeDasharray="3 3"/>
            <line x1="100" y1="60" x2="176" y2="90" stroke="#E2E8F0" strokeWidth="1"   strokeDasharray="3 3"/>
            <line x1="100" y1="60" x2="64"  y2="116" stroke="#FCA5A5" strokeWidth="1.5" strokeDasharray="4 3"/>
            <line x1="100" y1="60" x2="136" y2="116" stroke="#FCA5A5" strokeWidth="1.5" strokeDasharray="4 3"/>
            <line x1="24"  y1="90" x2="64"  y2="116" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="2 4"/>
            {/* Primary node */}
            <circle cx="100" cy="60" r="14" fill="#EFF6FF" stroke="#1E6FB7" strokeWidth="2"/>
            <text x="100" y="64" textAnchor="middle" fontSize="8" fontWeight="700" fill="#1E6FB7">A</text>
            {/* Linked senders */}
            <circle cx="50"  cy="24"  r="11" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5"/>
            <text x="50"  y="28"  textAnchor="middle" fontSize="7" fontWeight="600" fill="#1D4ED8">B</text>
            <circle cx="150" cy="24"  r="11" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5"/>
            <text x="150" y="28"  textAnchor="middle" fontSize="7" fontWeight="600" fill="#1D4ED8">C</text>
            {/* Shared device + corridor */}
            <circle cx="24"  cy="90" r="9" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1"/>
            <text x="24"  y="93" textAnchor="middle" fontSize="6" fill="#64748B">Dev</text>
            <circle cx="176" cy="90" r="9" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1"/>
            <text x="176" y="93" textAnchor="middle" fontSize="6" fill="#64748B">Cor</text>
            {/* Flagged beneficiaries */}
            <circle cx="64"  cy="116" r="11" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5"/>
            <text x="64"  y="120" textAnchor="middle" fontSize="7" fontWeight="600" fill="#DC2626">X</text>
            <circle cx="136" cy="116" r="11" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1.5"/>
            <text x="136" y="120" textAnchor="middle" fontSize="7" fontWeight="600" fill="#DC2626">X</text>
          </svg>
          <div style={{'display':'flex','flexDirection':'column','gap':'0.3rem'}}>
            <div style={{'display':'flex','alignItems':'center','gap':'0.375rem','fontSize':'0.625rem','color':'var(--muted)'}}><span style={{'display':'inline-block','width':'14px','height':'1.5px','background':'#93C5FD','borderTop':'1.5px dashed #93C5FD'}}></span>Linked signal</div>
            <div style={{'display':'flex','alignItems':'center','gap':'0.375rem','fontSize':'0.625rem','color':'var(--muted)'}}><span style={{'display':'inline-block','width':'14px','height':'1.5px','background':'#FCA5A5','borderTop':'1.5px dashed #FCA5A5'}}></span>Flagged relationship</div>
          </div>
        </div>

        {/* Panel 2 — Case timeline */}
        <div style={{'borderRight':'1px solid var(--border)','padding':'1.25rem'}}>
          <p style={{'fontSize':'0.625rem','fontWeight':'700','textTransform':'uppercase','letterSpacing':'0.09em','color':'var(--muted)','marginBottom':'0.875rem','display':'flex','alignItems':'center','gap':'0.375rem'}}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Case timeline · 14-day window
          </p>
          <div style={{'display':'flex','flexDirection':'column','gap':'0'}}>
            {[
              { dot: '#DC2626', day: 'Day 1 · 09:14', title: 'Alert triggered — velocity threshold', sub: 'Sender A · £4,800 · GBP→PKR' },
              { dot: '#1E6FB7', day: 'Day 3 · 14:02', title: 'Entity link — shared device fingerprint', sub: 'Sender B · 3 txns · same beneficiary' },
              { dot: '#D97706', day: 'Day 7 · 11:30', title: 'Sender C identified — shared beneficiary', sub: '3 senders → 1 beneficiary confirmed' },
              { dot: '#059669', day: 'Day 9 · 08:45', title: 'Case escalated for SAR review', sub: 'Evidence pack generated' },
            ].map((ev, i, arr) => (
              <div key={i} style={{'display':'flex','gap':'0.625rem','alignItems':'flex-start'}}>
                <div style={{'display':'flex','flexDirection':'column','alignItems':'center','flexShrink':0}}>
                  <div style={{'width':'8px','height':'8px','borderRadius':'50%','background':ev.dot,'marginTop':'3px','flexShrink':0}}></div>
                  {i < arr.length - 1 && <div style={{'width':'1px','background':'var(--border)','flex':1,'minHeight':'28px'}}></div>}
                </div>
                <div style={{'paddingBottom': i < arr.length - 1 ? '0.625rem' : 0}}>
                  <p style={{'fontSize':'0.5625rem','color':'var(--muted)','marginBottom':'0.125rem'}}>{ev.day}</p>
                  <p style={{'fontSize':'0.6875rem','fontWeight':'600','color':'var(--dark)','lineHeight':1.4,'marginBottom':'0.125rem'}}>{ev.title}</p>
                  <p style={{'fontSize':'0.625rem','color':'var(--body)','lineHeight':1.4}}>{ev.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel 3 — Escalation rationale */}
        <div style={{'padding':'1.25rem'}}>
          <p style={{'fontSize':'0.625rem','fontWeight':'700','textTransform':'uppercase','letterSpacing':'0.09em','color':'var(--muted)','marginBottom':'0.875rem','display':'flex','alignItems':'center','gap':'0.375rem'}}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Escalation rationale · 3 findings
          </p>
          <div style={{'display':'flex','flexDirection':'column','gap':'0.75rem'}}>
            {[
              { n:'F1', title:'Multi-sender → single beneficiary', detail:'Aggregate £14,200 across 3 senders over 9 days. Individual amounts sub-threshold.' },
              { n:'F2', title:'Shared device fingerprint', detail:'Sender A and Sender B share device and IP. Onboarded 6 days apart with different documents.' },
              { n:'F3', title:'Beneficiary in prior SAR', detail:'Beneficiary X referenced in SAR #1934 (4 months prior). Reappearance meets re-escalation threshold.' },
            ].map((f, i) => (
              <div key={i} style={{'display':'flex','gap':'0.5rem','alignItems':'flex-start'}}>
                <span style={{'flexShrink':0,'fontSize':'0.5625rem','fontWeight':'700','padding':'0.15rem 0.45rem','borderRadius':'4px','background':'rgba(30,111,183,0.08)','color':'var(--primary)','marginTop':'1px'}}>{f.n}</span>
                <div>
                  <p style={{'fontSize':'0.6875rem','fontWeight':'600','color':'var(--dark)','marginBottom':'0.2rem','lineHeight':1.35}}>{f.title}</p>
                  <p style={{'fontSize':'0.5625rem','color':'var(--body)','lineHeight':1.55}}>{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Pack footer */}
      <div style={{'background':'var(--bg-tint)','padding':'0.75rem 1.5rem','display':'flex','alignItems':'center','justifyContent':'space-between','flexWrap':'wrap','gap':'0.5rem'}}>
        <span style={{'fontSize':'0.6875rem','color':'var(--muted)','display':'flex','alignItems':'center','gap':'0.375rem'}}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Audit-ready · time-stamped · reviewer-attributed
        </span>
        <span style={{'fontSize':'0.6875rem','fontWeight':'600','color':'#059669','display':'flex','alignItems':'center','gap':'0.375rem'}}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          Ready for SAR review
        </span>
      </div>

    </div>

  </div>
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
        { label: 'ISO/IEC 27001:2022 certified', sub: 'Information Security Management' },
        { label: 'SOC 2 Type I',  sub: 'Security & Availability Controls' },
        { label: 'PCI DSS SAQ-D', sub: 'Payment Data Security' },
        { label: 'GDPR-compliant',  sub: 'EU Data Protection' },
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
    <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','maxWidth':'36rem','margin':'0 auto 2.5rem'}}>Explore how Verafye helps fraud, AML, and risk teams connect signals from existing systems into investigation-ready workflows - beginning with a Risk Shadowing engagement and expanding coverage as outcomes are proven.</p>
    <div style={{'display':'flex','flexWrap':'wrap','justifyContent':'center','gap':'1rem'}}>
      <Link href="/risk-shadowing-review" className="btn-primary">
        Explore Risk Shadowing Review
        <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </Link>
      <Link href="/capabilities" className="btn-secondary">View Capabilities</Link>
    </div>
    <p style={{'fontSize':'0.8125rem','color':'var(--muted)','marginTop':'1.5rem'}}>No platform-replacement commitment required. Speak directly with our solutions team.</p>
  </div>
</section>

    </>
  );
}
