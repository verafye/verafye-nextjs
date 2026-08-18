import Link from 'next/link';

export const metadata = {
  title: { absolute: "Fraud Detection Platform for Payment Aggregators, PSPs and NBFCs in India" },
  description: "Verafye helps Indian payment aggregators, PSPs, NBFCs, and digital lenders detect mule accounts, merchant fraud, and network-level financial crime risk.",
  keywords: [
    "payment aggregator risk india",
    "psp fraud india",
    "payment gateway aml india",
    "nbfc fraud detection india",
    "mule account detection india",
    "upi fraud investigation",
    "digital lending fraud india",
  ],
  openGraph: {
    title: "Fraud Detection Platform for Payment Aggregators, PSPs and NBFCs in India",
    description: "Verafye helps Indian payment aggregators, PSPs, NBFCs, and digital lenders detect mule accounts, merchant fraud, and network-level financial crime risk.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fraud Detection Platform for Payment Aggregators, PSPs and NBFCs in India",
    description: "Verafye helps Indian payment aggregators, PSPs, NBFCs, and digital lenders detect mule accounts, merchant fraud, and network-level financial crime risk.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/in',
  },
};

// ─── India-localised product hero panel ──────────────────────────────────────
// Mirrors the global ProductTrialHeroPanel with India-specific signal labels.
function IndiaHeroPanel() {
  const card = {
    background: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 4px 20px rgba(30,111,183,0.07), 0 1px 4px rgba(0,0,0,0.05)',
    overflow: 'hidden',
  };

  const alerts = [
    { id: 'MUL-81204', label: 'Mule Account Pattern',   level: 'HIGH',   source: 'AML',     accentColor: '#DC2626', levelBg: 'rgba(220,38,38,0.07)', levelBorder: 'rgba(220,38,38,0.18)' },
    { id: 'PAY-33917', label: 'Payment Risk Signal',     level: 'HIGH',   source: 'Fraud',   accentColor: '#DC2626', levelBg: 'rgba(220,38,38,0.07)', levelBorder: 'rgba(220,38,38,0.18)' },
    { id: 'LND-00582', label: 'Lending Risk Case',       level: 'MEDIUM', source: 'Lending', accentColor: '#D97706', levelBg: 'rgba(217,119,6,0.07)',  levelBorder: 'rgba(217,119,6,0.18)' },
  ];

  const signalSources = [
    { label: 'Payment',  dot: '#1E6FB7' },
    { label: 'Identity', dot: '#7C3AED' },
    { label: 'EWS',      dot: '#DC2626' },
    { label: 'Device',   dot: '#0891B2' },
    { label: 'AML',      dot: '#D97706' },
    { label: 'Behavior', dot: '#059669' },
  ];

  const auditEntries = [
    { time: '10:02', action: 'Case opened · Mule account cluster detected' },
    { time: '10:03', action: 'Entity enrichment · 5 linked accounts resolved' },
    { time: '10:04', action: 'Graph intelligence · Network of 9 nodes surfaced' },
  ];

  return (
    <div
      className="animate-fade-right delay-300 hero-image"
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', maxWidth: '580px', alignSelf: 'center' }}
    >

      {/* Card 1 - Alert Cluster */}
      <div style={card}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 1rem', borderBottom: '1px solid #F1F5F9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '1.75rem', height: '1.75rem', borderRadius: '6px', background: 'linear-gradient(135deg,rgba(30,111,183,0.12),rgba(90,178,255,0.12))', border: '1px solid rgba(30,111,183,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/>
                <path d="M8 12h8M16 7l-6 4M16 17l-6-4"/>
              </svg>
            </div>
            <span style={{ fontSize: '0.8125rem', fontWeight: '700', color: '#1E293B', letterSpacing: '-0.01em' }}>Alert Cluster</span>
          </div>
          <span style={{ fontSize: '0.6875rem', fontWeight: '700', color: '#DC2626', background: 'rgba(220,38,38,0.07)', border: '1px solid rgba(220,38,38,0.18)', borderRadius: '20px', padding: '0.2rem 0.625rem' }}>
            3 Alerts · HIGH
          </span>
        </div>
        {alerts.map((a) => (
          <div key={a.id} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.625rem 1rem', borderBottom: '1px solid #F8FAFC', borderLeft: `3px solid ${a.accentColor}` }}>
            <span style={{ fontSize: '0.625rem', fontFamily: 'monospace', fontWeight: '600', color: '#64748B', minWidth: '5.5rem' }}>{a.id}</span>
            <span style={{ fontSize: '0.75rem', color: '#475569', flex: 1, lineHeight: 1.3 }}>{a.label}</span>
            <span style={{ fontSize: '0.5625rem', fontWeight: '700', color: a.accentColor, background: a.levelBg, border: `1px solid ${a.levelBorder}`, borderRadius: '4px', padding: '0.175rem 0.5rem', letterSpacing: '0.05em' }}>{a.level}</span>
            <span style={{ fontSize: '0.5625rem', fontWeight: '600', color: '#94A3B8', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '0.175rem 0.5rem' }}>{a.source}</span>
          </div>
        ))}
        <div style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FAFBFD' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="76" height="26" viewBox="0 0 76 26" aria-hidden="true">
              <line x1="12" y1="13" x2="36" y2="7"  stroke="#CBD5E1" strokeWidth="1.5"/>
              <line x1="12" y1="13" x2="36" y2="20" stroke="#CBD5E1" strokeWidth="1.5"/>
              <line x1="36" y1="7"  x2="62" y2="13" stroke="#1E6FB7" strokeWidth="1.5" strokeDasharray="3,2"/>
              <circle cx="12" cy="13" r="5"   fill="#1E6FB7" opacity="0.9"/>
              <circle cx="36" cy="7"  r="3.5" fill="#3B82F6" opacity="0.7"/>
              <circle cx="36" cy="20" r="3.5" fill="#3B82F6" opacity="0.7"/>
              <circle cx="62" cy="13" r="3"   fill="#94A3B8" opacity="0.55"/>
            </svg>
            <span style={{ fontSize: '0.625rem', color: '#94A3B8' }}>5 entities linked</span>
          </div>
          <div style={{ display: 'flex', gap: '0.3rem' }}>
            {['AML', 'Fraud', 'Lending'].map((s) => (
              <span key={s} style={{ fontSize: '0.5625rem', fontWeight: '600', color: '#1E6FB7', background: 'rgba(30,111,183,0.07)', border: '1px solid rgba(30,111,183,0.12)', borderRadius: '3px', padding: '0.15rem 0.375rem' }}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Cards 2 + 3 - Case Intelligence + Signal Sources */}
      <div className="product-trial-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>

        {/* Case Intelligence */}
        <div style={{ ...card, padding: '0.875rem 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: '700', color: '#1E293B', letterSpacing: '-0.01em' }}>Case Intelligence</span>
            <span style={{ fontSize: '0.5625rem', fontWeight: '700', color: '#059669', background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.2)', borderRadius: '20px', padding: '0.15rem 0.5rem' }}>ACTIVE</span>
          </div>
          <div style={{ fontSize: '0.5625rem', fontFamily: 'monospace', color: '#94A3B8', marginBottom: '0.5rem' }}>CASE-IN-0582 · Investigation</div>
          <div style={{ background: '#F1F5F9', borderRadius: '4px', height: '5px', marginBottom: '0.4rem', overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(90deg,#1E6FB7,#3B82F6)', borderRadius: '4px', height: '5px', width: '50%' }}/>
          </div>
          <div style={{ fontSize: '0.5rem', color: '#94A3B8', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>Stage 2 of 4 · In Progress</div>
          <div style={{ display: 'flex', gap: '0.875rem' }}>
            {[['4','Entities'],['9','Signals'],['3','Linked']].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: '700', color: '#1E293B', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: '0.5rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.2rem' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Signal Sources */}
        <div style={{ ...card, padding: '0.875rem 1rem' }}>
          <div style={{ marginBottom: '0.625rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: '700', color: '#1E293B', letterSpacing: '-0.01em' }}>Signal Sources</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {signalSources.map((s) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.6rem', fontWeight: '600', color: '#475569', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '5px', padding: '0.25rem 0.5rem' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: s.dot, display: 'inline-block', flexShrink: 0 }}/>
                {s.label}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '0.625rem', paddingTop: '0.625rem', borderTop: '1px solid #F1F5F9' }}>
            <span style={{ fontSize: '0.5625rem', color: '#94A3B8' }}>India risk signals connected</span>
          </div>
        </div>

      </div>

      {/* Card 4 - Audit Trail */}
      <div style={{ ...card, padding: '0.75rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.6875rem', fontWeight: '700', color: '#1E293B' }}>Audit Trail</span>
          <span style={{ fontSize: '0.5625rem', color: '#94A3B8', fontFamily: 'monospace' }}>CASE-IN-0582</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {auditEntries.map((e) => (
            <div key={e.time} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
              <span style={{ fontSize: '0.5625rem', fontFamily: 'monospace', color: '#94A3B8', minWidth: '2.25rem' }}>{e.time}</span>
              <span style={{ fontSize: '0.5625rem', color: '#64748B', lineHeight: 1.5 }}>{e.action}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default function IndiaPage() {
  return (
    <>

{/* ─── HERO ──────────────────────────────────────────────────────────────── */}
<section style={{'background':'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)','overflow':'hidden'}}>
  <div className="container" style={{'paddingTop':'3rem','paddingBottom':'5rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'2.5rem','alignItems':'center'}}>
      <div style={{'maxWidth':'36rem'}}>

        {/* Eyebrow */}
        <h1 className="eyebrow animate-fade-up" style={{'marginBottom':'1.25rem'}}>Fraud Prevention Solution for Payment Aggregators, PSPs and NBFCs in India</h1>

        {/* H1 */}
        <h2 className="animate-fade-up delay-100" style={{'fontSize':'clamp(1.875rem,5vw,3.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem','lineHeight':'1.15','letterSpacing':'-0.025em'}}>
          Connected-Risk Intelligence for India's Payment-Led Financial Platforms
        </h2>

        {/* Sub-line */}
        <p className="animate-fade-up delay-150" style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--dark)','fontWeight':'600','marginBottom':'1rem','lineHeight':'1.4'}}>
          Network intelligence across merchants, customers, devices, accounts, and beneficiaries - built for payment aggregator due diligence, mule account detection, and UPI and payment-scale investigation pressure on lean compliance teams.
        </p>

        {/* Supporting line */}
        <p className="animate-fade-up delay-200" style={{'fontSize':'clamp(0.875rem,2vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem'}}>
          Connect suspicious activity to the wider risk context investigators need to understand—with evidence-backed workflows designed for India's regulated financial ecosystem.
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
          Built for PSPs, PAs, fintechs, NBFCs, lenders, digital banks, and banks operating across India's financial ecosystem.
        </p>

        {/* Tags */}
        <div className="animate-fade-up delay-500" style={{'display':'flex','flexWrap':'wrap','gap':'0.625rem'}}>
          <span className="tag">PSP / PA Risk Ops</span>
          <span className="tag">NBFC & Lending Fraud</span>
          <span className="tag">Mule Detection</span>
          <span className="tag">RBI-Aware Workflows</span>
        </div>

      </div>
      <IndiaHeroPanel />
    </div>
  </div>
</section>

{/* ─── OUTCOMES FOR INDIA RISK TEAMS ─────────────────────────────────────── */}
<section style={{'padding':'2rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)','borderBottom':'1px solid var(--border)'}}>
  <div className="container">
    <div style={{'display':'grid','gridTemplateColumns':'repeat(4,1fr)','gap':'1.5rem','maxWidth':'72rem','margin':'0 auto'}}>

      <div style={{'display':'flex','alignItems':'center','gap':'0.875rem','padding':'1rem 1.25rem','background':'#fff','borderRadius':'10px','border':'1px solid var(--border)','boxShadow':'0 1px 4px rgba(0,0,0,0.04)'}}>
        <div style={{'flexShrink':0,'width':'2.25rem','height':'2.25rem','borderRadius':'8px','background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.15)','display':'flex','alignItems':'center','justifyContent':'center'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <span style={{'fontSize':'0.875rem','fontWeight':'600','color':'var(--dark)','lineHeight':1.3}}>Investigate PSP & PA risk faster</span>
      </div>

      <div style={{'display':'flex','alignItems':'center','gap':'0.875rem','padding':'1rem 1.25rem','background':'#fff','borderRadius':'10px','border':'1px solid var(--border)','boxShadow':'0 1px 4px rgba(0,0,0,0.04)'}}>
        <div style={{'flexShrink':0,'width':'2.25rem','height':'2.25rem','borderRadius':'8px','background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.15)','display':'flex','alignItems':'center','justifyContent':'center'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
        </div>
        <span style={{'fontSize':'0.875rem','fontWeight':'600','color':'var(--dark)','lineHeight':1.3}}>Detect mule account networks</span>
      </div>

      <div style={{'display':'flex','alignItems':'center','gap':'0.875rem','padding':'1rem 1.25rem','background':'#fff','borderRadius':'10px','border':'1px solid var(--border)','boxShadow':'0 1px 4px rgba(0,0,0,0.04)'}}>
        <div style={{'flexShrink':0,'width':'2.25rem','height':'2.25rem','borderRadius':'8px','background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.15)','display':'flex','alignItems':'center','justifyContent':'center'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
        </div>
        <span style={{'fontSize':'0.875rem','fontWeight':'600','color':'var(--dark)','lineHeight':1.3}}>Surface synthetic identity risk</span>
      </div>

      <div style={{'display':'flex','alignItems':'center','gap':'0.875rem','padding':'1rem 1.25rem','background':'#fff','borderRadius':'10px','border':'1px solid var(--border)','boxShadow':'0 1px 4px rgba(0,0,0,0.04)'}}>
        <div style={{'flexShrink':0,'width':'2.25rem','height':'2.25rem','borderRadius':'8px','background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.15)','display':'flex','alignItems':'center','justifyContent':'center'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        <span style={{'fontSize':'0.875rem','fontWeight':'600','color':'var(--dark)','lineHeight':1.3}}>Maintain audit-ready case trails</span>
      </div>

    </div>
  </div>
</section>

{/* ─── BUILT FOR INDIA'S REGULATED FINANCIAL ECOSYSTEM ──────────────────── */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>BUILT FOR INDIA'S REGULATED FINANCIAL ECOSYSTEM</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>Investigation intelligence across India's financial stack</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','maxWidth':'48rem','margin':'0 auto'}}>
        Verafye helps India's fraud, AML, and risk teams connect fragmented signals into explainable investigations - without months of configuration or enterprise-heavy overhead.
      </p>
    </div>

    <div className="grid-2" style={{'maxWidth':'72rem','margin':'0 auto'}}>

      {/* 1. PSPs, PAs, Processors & FinTechs */}
      <Link href="/industries/payment-processors-psps-payfacs" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'4rem','height':'4rem','borderRadius':'0.875rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.75rem'}}>PSPs, PAs, Processors &amp; FinTechs</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.0625rem)','color':'var(--body)','lineHeight':1.7,'marginBottom':'1.25rem'}}>Connect payment fraud signals, monitor merchant risk, and investigate PA-level patterns with explainable case intelligence aligned to India's payment ecosystem.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            Explore PSP and payment aggregator investigation workflows
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      {/* 2. MSBs & Remittance Platforms */}
      <Link href="/industries/msbs-remittance-platforms" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'4rem','height':'4rem','borderRadius':'0.875rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.75rem'}}>MSBs &amp; Remittance Platforms</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.0625rem)','color':'var(--body)','lineHeight':1.7,'marginBottom':'1.25rem'}}>Connect sender, beneficiary, agent and corridor signals into investigation-grade evidence across inbound and outbound remittance flows - supporting the documentation and reporting workflows that RBI and FIU-IND expectations increasingly demand.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            Explore MSB and remittance investigation workflows
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      {/* 3. Digital Banks, Neo Banks & Small Finance Banks */}
      <Link href="/industries/digital-banks" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'4rem','height':'4rem','borderRadius':'0.875rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><path d="M7 15h.01"/><path d="M11 15h2"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.75rem'}}>Digital Banks, Neo Banks &amp; Small Finance Banks</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.0625rem)','color':'var(--body)','lineHeight':1.7,'marginBottom':'1.25rem'}}>Scale fraud and AML investigation capabilities alongside your customer growth - without enterprise-heavy operational overhead.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            Explore digital bank and neo bank investigation workflows
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      {/* 4. Banks */}
      <Link href="/industries/banks" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'4rem','height':'4rem','borderRadius':'0.875rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.75rem'}}>Banks</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.0625rem)','color':'var(--body)','lineHeight':1.7,'marginBottom':'1.25rem'}}>Modernize fraud and AML investigation infrastructure with connected signal intelligence and explainable case workflows across business lines.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            Explore bank fraud and AML investigation workflows
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

    </div>

    {/* 5. Marketplaces */}
    <div style={{'maxWidth':'72rem','margin':'1.5rem auto 0'}}>
      <div className="card" style={{'padding':'2rem 2.5rem','border':'1px solid var(--border)','background':'#F8FAFB','display':'flex','alignItems':'flex-start','gap':'1.5rem','flexWrap':'wrap'}}>
        <div style={{'flexShrink':0,'width':'2.75rem','height':'2.75rem','borderRadius':'0.75rem','background':'rgba(90,178,255,0.08)','border':'1px solid rgba(90,178,255,0.18)','display':'flex','alignItems':'center','justifyContent':'center'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5AB2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        </div>
        <div style={{'flex':1,'minWidth':'16rem'}}>
          <h3 style={{'fontSize':'clamp(1rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Marketplaces</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7,'maxWidth':'52rem'}}>For marketplace platforms with payment, identity, and fraud-risk exposure, Verafye can bring seller, buyer, transaction, and behavior signals into investigation workflows.</p>
        </div>
      </div>
    </div>

    {/* 6. Lending & NBFCs - ALWAYS LAST */}
    <div style={{'maxWidth':'72rem','margin':'1.5rem auto 0'}}>
      <div className="card" style={{'padding':'2rem 2.5rem','border':'1px solid var(--border)','background':'#F8FAFB','display':'flex','alignItems':'flex-start','gap':'1.5rem','flexWrap':'wrap'}}>
        <div style={{'flexShrink':0,'width':'2.75rem','height':'2.75rem','borderRadius':'0.75rem','background':'rgba(90,178,255,0.08)','border':'1px solid rgba(90,178,255,0.18)','display':'flex','alignItems':'center','justifyContent':'center'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5AB2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
        </div>
        <div style={{'flex':1,'minWidth':'16rem'}}>
          <h3 style={{'fontSize':'clamp(1rem,1.8vw,1.25rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Lending &amp; NBFCs</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7,'maxWidth':'52rem'}}>Detect synthetic identity fraud and mule activity across application review and post-booking stages for lending fraud risk teams. Applicable where lending flows create linked fraud risk. Verafye supports fraud investigation around lending flows; it does not score creditworthiness or decide applications.</p>
        </div>
      </div>
    </div>

  </div>
</section>

{/* ─── HOW VERAFYE SUPPORTS INVESTIGATIONS IN INDIA ──────────────────────── */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>HOW VERAFYE SUPPORTS INVESTIGATIONS</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>From fragmented signals to explainable investigations</h2>
    </div>

    <div className="grid-2" style={{'maxWidth':'72rem','margin':'0 auto','gap':'2rem'}}>

      <div className="card" style={{'padding':'2.5rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.375rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.75rem'}}>PSP / PA risk operations</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Connect payment signals, merchant activity, counterparty data, and device signals into investigation-ready cases for PSP and PA risk teams.</p>
      </div>

      <div className="card" style={{'padding':'2.5rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.375rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.75rem'}}>Mule account patterns</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Surface mule account networks and coordinated fraud rings through network-level relationship analysis across accounts, devices, and transaction flows.</p>
      </div>

      <div className="card" style={{'padding':'2.5rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.375rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.75rem'}}>Synthetic identity risk</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Detect synthetic identity patterns at lending origination and account opening - connecting identity, device, behavior, and bureau signals into a single case view.</p>
      </div>

      <div className="card" style={{'padding':'2.5rem','position':'relative','overflow':'hidden'}}>
        <div className="card-corner"></div>
        <div className="card-icon gradient-bg-4" style={{'marginBottom':'1.25rem'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.375rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.75rem'}}>EWS / early warning signal workflows</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.7}}>Build early warning signal workflows that surface risk indicators before they escalate - with structured investigation queues and explainable decision trails.</p>
      </div>

    </div>
  </div>
</section>

{/* ─── RBI-AWARE INVESTIGATION READINESS ───────────────────────────────── */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>RBI-AWARE INVESTIGATION READINESS</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>Investigation workflows aligned to India's regulatory expectations</h2>
      <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.125rem)','color':'var(--body)','maxWidth':'44rem','margin':'0 auto','lineHeight':1.75}}>
        Verafye helps fraud, AML, and risk teams in India maintain investigation context, decision history, audit logs, and case evidence trails - aligned to evolving RBI expectations for fraud monitoring and reporting. For India-focused deployments, Verafye can support EWS and Red Flagged Account investigation workflows where configured, with reviewer controls, evidence trails, and audit-ready case records.
      </p>
    </div>

    <div className="grid-3" style={{'maxWidth':'80rem','margin':'0 auto'}}>

      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
        </div>
        <h3 style={{'fontSize':'clamp(1rem,1.5vw,1.125rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','marginTop':'1rem'}}>Audit-ready case trails</h3>
        <p style={{'fontSize':'0.813rem','color':'var(--body)','lineHeight':1.65}}>Every investigation decision is documented with notes, evidence, and case history - supporting examination-ready reporting.</p>
      </div>

      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
        </div>
        <h3 style={{'fontSize':'clamp(1rem,1.5vw,1.125rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','marginTop':'1rem'}}>Fraud monitoring & Red Flagged Account workflows</h3>
        <p style={{'fontSize':'0.813rem','color':'var(--body)','lineHeight':1.65}}>Investigation workflows designed to support fraud monitoring expectations - including EWS review, Red Flagged Account investigation, alert triage, case escalation, and decision documentation where configured.</p>
      </div>

      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <h3 style={{'fontSize':'clamp(1rem,1.5vw,1.125rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem','marginTop':'1rem'}}>Explainable decisions</h3>
        <p style={{'fontSize':'0.813rem','color':'var(--body)','lineHeight':1.65}}>Every case decision is explainable and traceable - supporting governance expectations for AI-assisted fraud and AML workflows.</p>
      </div>

    </div>

    <p style={{'textAlign':'center','fontSize':'0.813rem','color':'var(--body)','marginTop':'2.5rem','fontStyle':'italic','maxWidth':'52rem','marginLeft':'auto','marginRight':'auto','lineHeight':1.7}}>
      Verafye supports investigation workflows aligned to evolving RBI expectations. We do not claim RBI certification, approval, endorsement, or formal compliance with specific regulatory regimes unless separately documented.
    </p>
  </div>
</section>

{/* ─── DPDP-AWARE DATA PROTECTION ───────────────────────────────────────── */}
<section style={{'padding':'4rem 0','background':'var(--bg-light)'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>DATA PROTECTION & PRIVACY</p>
      <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>DPDP-Aware Platform Design for India</h2>
      <p style={{'fontSize':'clamp(0.875rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':1.75,'maxWidth':'48rem','margin':'0 auto'}}>
        India&apos;s Digital Personal Data Protection Act (DPDP Act, 2023) establishes a data protection framework for personal data processed in India. Verafye&apos;s platform is designed to be DPDP-aware, with data handling practices and processing transparency built to align with the Act&apos;s principles as its implementing rules mature. For India-focused deployments, Verafye can support DPDP-aware implementation practices including controlled access, audit logs, purpose-based workflows, and retention policies configured to customer requirements.
      </p>
    </div>
    <div style={{'display':'grid','gridTemplateColumns':'repeat(3,1fr)','gap':'1.5rem','maxWidth':'72rem','margin':'0 auto 2rem'}}>
      {[
        {
          title: 'Lawful Purpose & Data Minimisation',
          body: 'Verafye processes personal data only for documented, specific fraud and AML investigation purposes. Data handling is scoped to what is necessary for the stated use case - consistent with the DPDP Act\'s lawful purpose and minimisation principles.',
        },
        {
          title: 'Controlled Access & Transparency',
          body: 'Access to personal data within the platform follows role-based controls and audit logging - supporting the transparency and accountability principles that underpin India\'s data protection framework.',
        },
        {
          title: 'Security Safeguards',
          body: 'Verafye applies security controls and architectural patterns aligned to ISO/IEC 27001 principles, designed to protect personal data from breach or unauthorised access - aligned with the DPDP Act\'s reasonable security obligation.',
        },
      ].map(item => (
        <div key={item.title} className="card card-elevated" style={{'padding':'2rem'}}>
          <div style={{'width':'2rem','height':'2rem','borderRadius':'8px','background':'var(--bg-blue)','border':'1px solid rgba(30,111,183,0.12)','display':'flex','alignItems':'center','justifyContent':'center','marginBottom':'1rem'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.625rem'}}>{item.title}</h3>
          <p style={{'fontSize':'0.875rem','color':'var(--body)','lineHeight':1.7,'margin':0}}>{item.body}</p>
        </div>
      ))}
    </div>
    <p style={{'textAlign':'center','fontSize':'0.8125rem','color':'var(--muted)','maxWidth':'52rem','margin':'0 auto','lineHeight':1.7}}>
      Verafye is DPDP-aware, not DPDP-certified or DPDP-compliant. The DPDP Act&apos;s implementing rules are still being finalised. We will update our practices as the regulatory framework matures. For data-related enquiries from India, contact <a href="mailto:privacy@verafye.com" style={{'color':'var(--primary)'}}>privacy@verafye.com</a>.
    </p>
  </div>
</section>

{/* ─── FINAL CTA ─────────────────────────────────────────────────────────── */}
<section style={{'padding':'4rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)'}}>
  <div className="container" style={{'textAlign':'center','maxWidth':'48rem'}}>
    <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1.25rem'}}>
      Build faster, explainable investigations for India's regulated financial ecosystem
    </h2>
    <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','marginBottom':'2.5rem','maxWidth':'36rem','margin':'0 auto 2.5rem'}}>
      See how Verafye helps PSPs, PAs, NBFCs, fintechs, and banks connect fragmented signals into investigation-ready cases.
    </p>
    <div style={{'display':'flex','flexWrap':'wrap','justifyContent':'center','gap':'1rem'}}>
      <Link href="/risk-shadowing-review" className="btn-primary">
        Explore Risk Shadowing Review
        <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </Link>
      <Link href="/solutions/investigation-intelligence" className="btn-secondary">Explore audit-ready case workflows</Link>
    </div>
    <p style={{'fontSize':'0.8125rem','color':'var(--muted)','marginTop':'1.5rem'}}>
      No commitment required. Speak directly with our solutions team.
    </p>
  </div>
</section>

    </>
  );
}
