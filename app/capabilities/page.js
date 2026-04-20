import CTA from '@/components/CTA';

export const metadata = {
  title: 'Fraud & AML Capabilities | Verafye Platform',
  description: "Explore Verafye's fraud and AML capabilities. Detect financial crime networks using AI-driven intelligence across transactions and payments.",
  openGraph: {
    title: 'Fraud & AML Capabilities | Verafye Platform',
    description: "Explore Verafye's fraud and AML capabilities. Detect financial crime networks using AI-driven intelligence across transactions and payments.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fraud & AML Capabilities | Verafye Platform',
    description: "Explore Verafye's fraud and AML capabilities. Detect financial crime networks using AI-driven intelligence across transactions and payments.",
  },
};

export default function Page() {
  return (
    <>
{/* HERO */}
<section style={{'background':'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)','padding':'5rem 0'}}>
  <div className="container" style={{'maxWidth':'56rem','textAlign':'center'}}>
    <p className="eyebrow animate-fade-up" style={{'marginBottom':'1.25rem'}}>CAPABILITIES</p>
    <h1 className="animate-fade-up delay-100" style={{'fontSize':'clamp(1.875rem,5vw,3.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'2rem','letterSpacing':'-0.035em'}}>Platform Capabilities</h1>
    <p className="animate-fade-up delay-200" style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)','maxWidth':'48rem','margin':'0 auto 2.5rem'}}>Purpose-built detection, investigation, and intelligence capabilities designed for modern financial crime across fraud, AML, and payments ecosystems.</p>
    <div className="animate-fade-up delay-300" style={{'display':'flex','flexWrap':'wrap','gap':'0.75rem','justifyContent':'center'}}>
      <a href="/request-demo" className="btn-primary">Request Demo <span className="btn-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></a>
      <a href="/platform" className="btn-secondary">View Platform</a>
    </div>
  </div>
</section>

{/* ═══════════════════════════════════════════ */}
{/* CAPABILITY 1: GRAPH INTELLIGENCE */}
{/* ═══════════════════════════════════════════ */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>CORE ENGINE</p>
        <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.03em'}}>Graph Intelligence</h2>
        <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem','lineHeight':'1.7'}}>Verafye&apos;s graph intelligence engine maps relationships between accounts, devices, identities, and transactions to detect coordinated financial crime networks that rule-based systems miss entirely.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'1rem'}}>
          <div style={{'display':'flex','gap':'0.875rem','alignItems':'start'}}>
            <div style={{'flexShrink':'0','width':'2.25rem','height':'2.25rem','background':'var(--primary)','borderRadius':'8px','display':'flex','alignItems':'center','justifyContent':'center','marginTop':'2px'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
            <div><h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Entity Resolution</h3><p style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Automatically resolve and link entities across fragmented data sources into a unified identity graph</p></div>
          </div>
          <div style={{'display':'flex','gap':'0.875rem','alignItems':'start'}}>
            <div style={{'flexShrink':'0','width':'2.25rem','height':'2.25rem','background':'var(--primary)','borderRadius':'8px','display':'flex','alignItems':'center','justifyContent':'center','marginTop':'2px'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
            <div><h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Network Analysis</h3><p style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Detect hidden relationships and patterns across accounts, devices, and transaction flows</p></div>
          </div>
          <div style={{'display':'flex','gap':'0.875rem','alignItems':'start'}}>
            <div style={{'flexShrink':'0','width':'2.25rem','height':'2.25rem','background':'var(--primary)','borderRadius':'8px','display':'flex','alignItems':'center','justifyContent':'center','marginTop':'2px'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
            <div><h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Link Discovery</h3><p style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Uncover multi-hop connections between seemingly unrelated entities to reveal fraud rings</p></div>
          </div>
        </div>
      </div>
      <div style={{'background':'linear-gradient(135deg,var(--primary),var(--accent),var(--secondary))','borderRadius':'1.25rem','padding':'3rem','boxShadow':'0 20px 40px rgba(30,111,183,0.25)','textAlign':'center','position':'relative'}}>
        <div style={{'position':'absolute','inset':'0','borderRadius':'1.25rem','opacity':'0.08','backgroundImage':'radial-gradient(circle at 2px 2px,#fff 1px,transparent 0)','backgroundSize':'20px 20px'}}></div>
        <div style={{'position':'relative'}}>
          <svg viewBox="0 0 200 160" style={{'width':'100%','maxWidth':'240px','margin':'0 auto','display':'block'}}>
            <line x1="50" y1="40" x2="100" y2="80" stroke="#fff" strokeWidth="1.5" opacity="0.4"/>
            <line x1="150" y1="40" x2="100" y2="80" stroke="#fff" strokeWidth="1.5" opacity="0.4"/>
            <line x1="50" y1="120" x2="100" y2="80" stroke="#fff" strokeWidth="1.5" opacity="0.4"/>
            <line x1="150" y1="120" x2="100" y2="80" stroke="#fff" strokeWidth="1.5" opacity="0.4"/>
            <line x1="50" y1="40" x2="50" y2="120" stroke="#fff" strokeWidth="1" opacity="0.2"/>
            <line x1="150" y1="40" x2="150" y2="120" stroke="#fff" strokeWidth="1" opacity="0.2"/>
            <line x1="50" y1="40" x2="150" y2="120" stroke="#fff" strokeWidth="1" opacity="0.15"/>
            <circle cx="100" cy="80" r="20" fill="rgba(255,255,255,0.25)"/>
            <circle cx="100" cy="80" r="14" fill="rgba(255,255,255,0.35)"/>
            <circle cx="100" cy="80" r="7" fill="#fff"/>
            <circle cx="50" cy="40" r="10" fill="rgba(255,255,255,0.3)"/>
            <circle cx="150" cy="40" r="10" fill="rgba(255,255,255,0.3)"/>
            <circle cx="50" cy="120" r="10" fill="rgba(255,255,255,0.3)"/>
            <circle cx="150" cy="120" r="10" fill="rgba(255,255,255,0.3)"/>
            <circle cx="100" cy="30" r="6" fill="rgba(255,255,255,0.2)"/>
            <circle cx="100" cy="130" r="6" fill="rgba(255,255,255,0.2)"/>
          </svg>
          <h3 style={{'fontSize':'1.25rem','fontWeight':'700','color':'#fff','marginTop':'1.5rem','marginBottom':'0.5rem'}}>Graph Intelligence Engine</h3>
          <p style={{'fontSize':'0.875rem','color':'rgba(255,255,255,0.75)'}}>Entity Resolution · Network Analysis · Link Discovery</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ═══════════════════════════════════════════ */}
{/* CAPABILITY 2: ALERT CLUSTERING */}
{/* ═══════════════════════════════════════════ */}
<section className="section-light" style={{'padding':'5rem 0'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div style={{'background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'1.25rem','padding':'2.5rem','order':'1'}}>
        <div style={{'display':'flex','flexDirection':'column','gap':'1rem'}}>
          <div style={{'display':'flex','gap':'0.75rem','alignItems':'center'}}>
            <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'50%','background':'rgba(220,38,38,0.08)','border':'2px solid rgba(220,38,38,0.15)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></div>
            <div style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Alert: Unusual transaction pattern – Account #4521</div>
          </div>
          <div style={{'display':'flex','gap':'0.75rem','alignItems':'center'}}>
            <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'50%','background':'rgba(220,38,38,0.08)','border':'2px solid rgba(220,38,38,0.15)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></div>
            <div style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Alert: Device anomaly – Shared device cluster</div>
          </div>
          <div style={{'display':'flex','gap':'0.75rem','alignItems':'center'}}>
            <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'50%','background':'rgba(220,38,38,0.08)','border':'2px solid rgba(220,38,38,0.15)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></div>
            <div style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Alert: Velocity breach – Rapid fund movement</div>
          </div>
        </div>
        <div style={{'margin':'1.25rem 0','display':'flex','alignItems':'center','justifyContent':'center','gap':'0.5rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          <span style={{'fontSize':'0.6875rem','fontWeight':'600','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.08em'}}>Clustered into 1 investigation</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </div>
        <div style={{'background':'#fff','border':'2px solid var(--primary)','borderRadius':'0.75rem','padding':'1rem','display':'flex','alignItems':'center','gap':'0.75rem'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','borderRadius':'8px','background':'var(--primary)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg></div>
          <div>
            <div style={{'fontSize':'0.875rem','fontWeight':'700','color':'var(--dark)'}}>Unified Case: Network Fraud Ring</div>
            <div style={{'fontSize':'0.75rem','color':'var(--muted)'}}>3 alerts · 5 linked entities · High priority</div>
          </div>
        </div>
      </div>
      <div style={{'order':'2'}}>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>INVESTIGATION EFFICIENCY</p>
        <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.03em'}}>Alert Clustering</h2>
        <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem','lineHeight':'1.7'}}>Automatically group related alerts into unified investigation packages. Instead of reviewing hundreds of individual alerts, investigators see clustered cases with full context - reducing noise and surfacing genuine threats.</p>
        <div style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'1rem'}}>
          <div className="card" style={{'padding':'1.25rem','textAlign':'center'}}><div className="stat-value" style={{'fontSize':'1.5rem','marginBottom':'0.25rem'}}>30-50%</div><p style={{'fontSize':'0.75rem','fontWeight':'500','color':'var(--body)'}}>Alert volume reduction</p></div>
          <div className="card" style={{'padding':'1.25rem','textAlign':'center'}}><div className="stat-value" style={{'fontSize':'1.5rem','marginBottom':'0.25rem'}}>3x</div><p style={{'fontSize':'0.75rem','fontWeight':'500','color':'var(--body)'}}>Faster case resolution</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ═══════════════════════════════════════════ */}
{/* CAPABILITY 3: NETWORK FRAUD DETECTION */}
{/* ═══════════════════════════════════════════ */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>DETECTION</p>
        <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.03em'}}>Network Fraud Detection</h2>
        <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem','lineHeight':'1.7'}}>Detect organized fraud rings, mule networks, and synthetic identity schemes by mapping the relationships between entities, devices, and transaction patterns across your entire ecosystem.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'1rem'}}>
          <div style={{'display':'flex','gap':'0.875rem','alignItems':'start'}}>
            <div style={{'flexShrink':'0','width':'2.25rem','height':'2.25rem','background':'var(--primary)','borderRadius':'8px','display':'flex','alignItems':'center','justifyContent':'center','marginTop':'2px'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
            <div><h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Fraud Ring Detection</h3><p style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Identify coordinated groups of fraudsters operating across multiple accounts and institutions</p></div>
          </div>
          <div style={{'display':'flex','gap':'0.875rem','alignItems':'start'}}>
            <div style={{'flexShrink':'0','width':'2.25rem','height':'2.25rem','background':'var(--primary)','borderRadius':'8px','display':'flex','alignItems':'center','justifyContent':'center','marginTop':'2px'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
            <div><h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Mule Network Mapping</h3><p style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Track money mule recruitment chains and rapid fund movement patterns through layered accounts</p></div>
          </div>
          <div style={{'display':'flex','gap':'0.875rem','alignItems':'start'}}>
            <div style={{'flexShrink':'0','width':'2.25rem','height':'2.25rem','background':'var(--primary)','borderRadius':'8px','display':'flex','alignItems':'center','justifyContent':'center','marginTop':'2px'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
            <div><h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Synthetic Identity Schemes</h3><p style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Uncover fabricated identities combining real and fictitious information to establish fraudulent accounts</p></div>
          </div>
        </div>
      </div>
      <div style={{'background':'linear-gradient(135deg,#1a2630,var(--dark))','borderRadius':'1.25rem','padding':'2.5rem','position':'relative','overflow':'hidden'}}>
        <div style={{'position':'absolute','inset':'0','opacity':'0.06','backgroundImage':'radial-gradient(circle at 2px 2px,#5AB2FF 1px,transparent 0)','backgroundSize':'16px 16px'}}></div>
        <div style={{'position':'relative','textAlign':'center'}}>
          <svg viewBox="0 0 200 160" style={{'width':'100%','maxWidth':'220px','margin':'0 auto','display':'block'}}>
            <line x1="100" y1="30" x2="50" y2="80" stroke="#DC2626" strokeWidth="2" opacity="0.6"/>
            <line x1="100" y1="30" x2="150" y2="80" stroke="#DC2626" strokeWidth="2" opacity="0.6"/>
            <line x1="50" y1="80" x2="80" y2="140" stroke="#5AB2FF" strokeWidth="1.5" opacity="0.4"/>
            <line x1="50" y1="80" x2="30" y2="140" stroke="#5AB2FF" strokeWidth="1.5" opacity="0.4"/>
            <line x1="150" y1="80" x2="130" y2="140" stroke="#5AB2FF" strokeWidth="1.5" opacity="0.4"/>
            <line x1="150" y1="80" x2="170" y2="140" stroke="#5AB2FF" strokeWidth="1.5" opacity="0.4"/>
            <circle cx="100" cy="30" r="12" fill="#DC2626" opacity="0.8"/><text x="100" y="34" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="600">R</text>
            <circle cx="50" cy="80" r="10" fill="#EF9F27" opacity="0.7"/><text x="50" y="84" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">M</text>
            <circle cx="150" cy="80" r="10" fill="#EF9F27" opacity="0.7"/><text x="150" y="84" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">M</text>
            <circle cx="30" cy="140" r="8" fill="#5AB2FF" opacity="0.5"/>
            <circle cx="80" cy="140" r="8" fill="#5AB2FF" opacity="0.5"/>
            <circle cx="130" cy="140" r="8" fill="#5AB2FF" opacity="0.5"/>
            <circle cx="170" cy="140" r="8" fill="#5AB2FF" opacity="0.5"/>
          </svg>
          <div style={{'marginTop':'1.5rem','display':'flex','justifyContent':'center','gap':'1.5rem'}}>
            <div style={{'display':'flex','alignItems':'center','gap':'0.375rem'}}><div style={{'width':'8px','height':'8px','borderRadius':'50%','background':'#DC2626'}}></div><span style={{'fontSize':'0.6875rem','color':'rgba(255,255,255,0.6)'}}>Ring leader</span></div>
            <div style={{'display':'flex','alignItems':'center','gap':'0.375rem'}}><div style={{'width':'8px','height':'8px','borderRadius':'50%','background':'#EF9F27'}}></div><span style={{'fontSize':'0.6875rem','color':'rgba(255,255,255,0.6)'}}>Mules</span></div>
            <div style={{'display':'flex','alignItems':'center','gap':'0.375rem'}}><div style={{'width':'8px','height':'8px','borderRadius':'50%','background':'#5AB2FF'}}></div><span style={{'fontSize':'0.6875rem','color':'rgba(255,255,255,0.6)'}}>Accounts</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ═══════════════════════════════════════════ */}
{/* CAPABILITY 4: UNIFIED FRAUD + AML SIGNALS */}
{/* ═══════════════════════════════════════════ */}
<section className="section-light" style={{'padding':'5rem 0'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div style={{'order':'1'}}>
        <div style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'1rem'}}>
          <div className="card" style={{'padding':'1.5rem','borderLeft':'3px solid var(--primary)'}}>
            <div style={{'fontSize':'0.625rem','fontWeight':'600','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.08em','marginBottom':'0.75rem'}}>Fraud Signals</div>
            <div style={{'display':'flex','flexDirection':'column','gap':'0.5rem'}}>
              <div style={{'fontSize':'0.75rem','color':'var(--body)','display':'flex','alignItems':'center','gap':'0.375rem'}}><div style={{'width':'5px','height':'5px','borderRadius':'50%','background':'var(--primary)'}}></div>Transaction velocity</div>
              <div style={{'fontSize':'0.75rem','color':'var(--body)','display':'flex','alignItems':'center','gap':'0.375rem'}}><div style={{'width':'5px','height':'5px','borderRadius':'50%','background':'var(--primary)'}}></div>Device fingerprints</div>
              <div style={{'fontSize':'0.75rem','color':'var(--body)','display':'flex','alignItems':'center','gap':'0.375rem'}}><div style={{'width':'5px','height':'5px','borderRadius':'50%','background':'var(--primary)'}}></div>Behavioral anomalies</div>
            </div>
          </div>
          <div className="card" style={{'padding':'1.5rem','borderLeft':'3px solid var(--secondary)'}}>
            <div style={{'fontSize':'0.625rem','fontWeight':'600','color':'var(--secondary)','textTransform':'uppercase','letterSpacing':'0.08em','marginBottom':'0.75rem'}}>AML Signals</div>
            <div style={{'display':'flex','flexDirection':'column','gap':'0.5rem'}}>
              <div style={{'fontSize':'0.75rem','color':'var(--body)','display':'flex','alignItems':'center','gap':'0.375rem'}}><div style={{'width':'5px','height':'5px','borderRadius':'50%','background':'var(--secondary)'}}></div>Sanctions screening</div>
              <div style={{'fontSize':'0.75rem','color':'var(--body)','display':'flex','alignItems':'center','gap':'0.375rem'}}><div style={{'width':'5px','height':'5px','borderRadius':'50%','background':'var(--secondary)'}}></div>PEP monitoring</div>
              <div style={{'fontSize':'0.75rem','color':'var(--body)','display':'flex','alignItems':'center','gap':'0.375rem'}}><div style={{'width':'5px','height':'5px','borderRadius':'50%','background':'var(--secondary)'}}></div>Suspicious patterns</div>
            </div>
          </div>
          <div className="card" style={{'padding':'1.5rem','gridColumn':'span 2','borderLeft':'3px solid var(--accent)','textAlign':'center'}}>
            <div style={{'fontSize':'0.625rem','fontWeight':'600','color':'var(--accent)','textTransform':'uppercase','letterSpacing':'0.08em','marginBottom':'0.5rem'}}>Payments Intelligence</div>
            <div style={{'fontSize':'0.75rem','color':'var(--body)'}}>Cross-rail monitoring · Merchant risk · Authorization patterns</div>
          </div>
        </div>
      </div>
      <div style={{'order':'2'}}>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>CROSS-SYSTEM</p>
        <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.03em'}}>Unified Fraud + AML Signals</h2>
        <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem','lineHeight':'1.7'}}>Break down the silos between fraud and AML monitoring. Verafye unifies signals from fraud detection, AML screening, and payments monitoring into a single intelligence layer - enabling cross-system correlation that catches threats any single system would miss.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'1rem'}}>
          <div style={{'display':'flex','gap':'0.875rem','alignItems':'start'}}>
            <div style={{'flexShrink':'0','width':'2.25rem','height':'2.25rem','background':'var(--primary)','borderRadius':'8px','display':'flex','alignItems':'center','justifyContent':'center','marginTop':'2px'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
            <div><h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Signal Correlation</h3><p style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Connect fraud, AML, and payments signals into unified risk intelligence</p></div>
          </div>
          <div style={{'display':'flex','gap':'0.875rem','alignItems':'start'}}>
            <div style={{'flexShrink':'0','width':'2.25rem','height':'2.25rem','background':'var(--primary)','borderRadius':'8px','display':'flex','alignItems':'center','justifyContent':'center','marginTop':'2px'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
            <div><h3 style={{'fontSize':'0.9375rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Eliminate Blind Spots</h3><p style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Detect threats that exist at the intersection of fraud and AML activity</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ═══════════════════════════════════════════ */}
{/* CAPABILITY 5: DEVICE & BEHAVIORAL INTEL */}
{/* ═══════════════════════════════════════════ */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>INTELLIGENCE LAYER</p>
        <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.03em'}}>Device and Behavioral Intelligence</h2>
        <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.0625rem)','color':'var(--body)','marginBottom':'2rem','lineHeight':'1.7'}}>Track device fingerprints, session patterns, and behavioral signals across your transaction network. Detect anomalies at network scale and correlate device-sharing patterns to uncover coordinated fraud operations.</p>
        <div style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'1rem'}}>
          <div className="card" style={{'padding':'1.25rem'}}>
            <div className="card-icon-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
            <h3 style={{'fontSize':'0.875rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Device Fingerprinting</h3>
            <p style={{'fontSize':'0.75rem','color':'var(--body)'}}>Track and analyze device patterns across transaction networks</p>
          </div>
          <div className="card" style={{'padding':'1.25rem'}}>
            <div className="card-icon-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></div>
            <h3 style={{'fontSize':'0.875rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Behavioral Baselines</h3>
            <p style={{'fontSize':'0.75rem','color':'var(--body)'}}>Establish and monitor normal patterns to detect anomalies</p>
          </div>
          <div className="card" style={{'padding':'1.25rem'}}>
            <div className="card-icon-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg></div>
            <h3 style={{'fontSize':'0.875rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Session Intelligence</h3>
            <p style={{'fontSize':'0.75rem','color':'var(--body)'}}>Analyze session behavior patterns across user journeys</p>
          </div>
          <div className="card" style={{'padding':'1.25rem'}}>
            <div className="card-icon-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
            <h3 style={{'fontSize':'0.875rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Network Correlation</h3>
            <p style={{'fontSize':'0.75rem','color':'var(--body)'}}>Correlate device and behavior signals across the network</p>
          </div>
        </div>
      </div>
      <div style={{'background':'linear-gradient(180deg,var(--bg-blue),#fff)','border':'2px solid rgba(30,111,183,0.12)','borderRadius':'1.25rem','padding':'2.5rem'}}>
        <div style={{'textAlign':'center','marginBottom':'1.5rem'}}>
          <div style={{'fontSize':'0.625rem','fontWeight':'600','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'1rem'}}>Device & Behavior Signal Processing</div>
          <div style={{'display':'flex','justifyContent':'center','gap':'0.75rem','flexWrap':'wrap'}}>
            <span style={{'display':'inline-flex','alignItems':'center','padding':'0.375rem 0.75rem','borderRadius':'9999px','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.12)','fontSize':'0.6875rem','fontWeight':'500','color':'var(--primary)'}}>IP Address</span>
            <span style={{'display':'inline-flex','alignItems':'center','padding':'0.375rem 0.75rem','borderRadius':'9999px','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.12)','fontSize':'0.6875rem','fontWeight':'500','color':'var(--primary)'}}>Browser</span>
            <span style={{'display':'inline-flex','alignItems':'center','padding':'0.375rem 0.75rem','borderRadius':'9999px','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.12)','fontSize':'0.6875rem','fontWeight':'500','color':'var(--primary)'}}>OS</span>
            <span style={{'display':'inline-flex','alignItems':'center','padding':'0.375rem 0.75rem','borderRadius':'9999px','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.12)','fontSize':'0.6875rem','fontWeight':'500','color':'var(--primary)'}}>Geolocation</span>
            <span style={{'display':'inline-flex','alignItems':'center','padding':'0.375rem 0.75rem','borderRadius':'9999px','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.12)','fontSize':'0.6875rem','fontWeight':'500','color':'var(--primary)'}}>Session Time</span>
            <span style={{'display':'inline-flex','alignItems':'center','padding':'0.375rem 0.75rem','borderRadius':'9999px','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.12)','fontSize':'0.6875rem','fontWeight':'500','color':'var(--primary)'}}>Click Patterns</span>
          </div>
        </div>
        <div style={{'textAlign':'center'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </div>
        <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'0.75rem','padding':'1rem','marginTop':'0.75rem','textAlign':'center'}}>
          <div style={{'fontSize':'0.8125rem','fontWeight':'700','color':'var(--dark)'}}>Risk Score: 87/100</div>
          <div style={{'marginTop':'0.5rem','height':'6px','background':'var(--bg-tag)','borderRadius':'3px','overflow':'hidden'}}>
            <div style={{'width':'87%','height':'100%','background':'linear-gradient(90deg,var(--primary),var(--secondary))','borderRadius':'3px'}}></div>
          </div>
          <div style={{'fontSize':'0.6875rem','color':'var(--muted)','marginTop':'0.5rem'}}>High confidence · Device cluster detected</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ═══════════════════════════════════════════ */}
{/* CAPABILITY 6: INVESTIGATION INTELLIGENCE */}
{/* ═══════════════════════════════════════════ */}
<section className="section-light" style={{'padding':'5rem 0'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','maxWidth':'48rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>WORKFLOW</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.03em'}}>Investigation Intelligence</h2>
      <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.0625rem)','color':'var(--body)'}}>Empower investigation teams with intelligent tools that surface insights, prioritize high-risk cases, and streamline workflows from detection to resolution.</p>
    </div>
    <div className="grid-2" style={{'maxWidth':'64rem','margin':'0 auto','gap':'1.5rem'}}>
      <div className="card" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','gap':'1rem','alignItems':'start'}}>
          <div className="card-icon gradient-bg-4" style={{'flexShrink':'0'}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
          <div><h3 style={{'fontSize':'1.0625rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Investigation Prioritization</h3><p style={{'fontSize':'0.875rem','color':'var(--body)','lineHeight':'1.65'}}>ML-driven case scoring ensures investigators focus on highest-risk cases first, reducing time wasted on false positives and low-priority alerts.</p></div>
        </div>
      </div>
      <div className="card" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','gap':'1rem','alignItems':'start'}}>
          <div className="card-icon gradient-bg-4" style={{'flexShrink':'0'}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
          <div><h3 style={{'fontSize':'1.0625rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Entity Correlation</h3><p style={{'fontSize':'0.875rem','color':'var(--body)','lineHeight':'1.65'}}>Automatically link related entities and evidence across investigations, building comprehensive case files with full network context.</p></div>
        </div>
      </div>
      <div className="card" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','gap':'1rem','alignItems':'start'}}>
          <div className="card-icon gradient-bg-4" style={{'flexShrink':'0'}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg></div>
          <div><h3 style={{'fontSize':'1.0625rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Case Orchestration</h3><p style={{'fontSize':'0.875rem','color':'var(--body)','lineHeight':'1.65'}}>Streamline workflows from alert generation through investigation to resolution with automated routing, assignment, and escalation.</p></div>
        </div>
      </div>
      <div className="card" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','gap':'1rem','alignItems':'start'}}>
          <div className="card-icon gradient-bg-4" style={{'flexShrink':'0'}}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg></div>
          <div><h3 style={{'fontSize':'1.0625rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Explainable AI</h3><p style={{'fontSize':'0.875rem','color':'var(--body)','lineHeight':'1.65'}}>Every AI-driven decision comes with transparent reasoning and full audit trails, supporting regulatory compliance and examiner review.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ═══════════════════════════════════════════ */}
{/* ALL CAPABILITIES AT A GLANCE (summary grid) */}
{/* ═══════════════════════════════════════════ */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>OVERVIEW</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','letterSpacing':'-0.03em'}}>All Capabilities at a Glance</h2>
    </div>
    <div className="grid-4" style={{'maxWidth':'72rem','margin':'0 auto'}}>
      <div className="card card-elevated" style={{'padding':'1.5rem'}}>
        <div className="card-icon-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
        <h3 style={{'fontSize':'0.875rem','fontWeight':'700','marginBottom':'0.375rem'}}>Graph Intelligence</h3>
        <p style={{'fontSize':'0.75rem','color':'var(--body)'}}>Entity resolution and network analysis</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.5rem'}}>
        <div className="card-icon-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg></div>
        <h3 style={{'fontSize':'0.875rem','fontWeight':'700','marginBottom':'0.375rem'}}>Alert Clustering</h3>
        <p style={{'fontSize':'0.75rem','color':'var(--body)'}}>Group related alerts into unified cases</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.5rem'}}>
        <div className="card-icon-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg></div>
        <h3 style={{'fontSize':'0.875rem','fontWeight':'700','marginBottom':'0.375rem'}}>Mule Detection</h3>
        <p style={{'fontSize':'0.75rem','color':'var(--body)'}}>Identify coordinated mule networks</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.5rem'}}>
        <div className="card-icon-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" x2="22" y1="8" y2="13"/><line x1="22" x2="17" y1="8" y2="13"/></svg></div>
        <h3 style={{'fontSize':'0.875rem','fontWeight':'700','marginBottom':'0.375rem'}}>Synthetic Identity</h3>
        <p style={{'fontSize':'0.75rem','color':'var(--body)'}}>Uncover fabricated identity fraud</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.5rem'}}>
        <div className="card-icon-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
        <h3 style={{'fontSize':'0.875rem','fontWeight':'700','marginBottom':'0.375rem'}}>Device Intelligence</h3>
        <p style={{'fontSize':'0.75rem','color':'var(--body)'}}>Track device patterns across networks</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.5rem'}}>
        <div className="card-icon-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></div>
        <h3 style={{'fontSize':'0.875rem','fontWeight':'700','marginBottom':'0.375rem'}}>Behavioral Intel</h3>
        <p style={{'fontSize':'0.75rem','color':'var(--body)'}}>Detect anomalous behavior at scale</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.5rem'}}>
        <div className="card-icon-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
        <h3 style={{'fontSize':'0.875rem','fontWeight':'700','marginBottom':'0.375rem'}}>Case Prioritization</h3>
        <p style={{'fontSize':'0.75rem','color':'var(--body)'}}>ML-driven risk scoring for investigations</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.5rem'}}>
        <div className="card-icon-sm"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg></div>
        <h3 style={{'fontSize':'0.875rem','fontWeight':'700','marginBottom':'0.375rem'}}>Explainable AI</h3>
        <p style={{'fontSize':'0.75rem','color':'var(--body)'}}>Transparent decisions with full audit trails</p>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="cta-section">
  <div className="container" style={{'textAlign':'center','maxWidth':'56rem'}}>
    <p className="eyebrow" style={{'marginBottom':'1.25rem'}}>Get Started</p>
    <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.03em'}}>See These Capabilities in Action</h2>
    <p style={{'fontSize':'clamp(0.938rem,2vw,1.125rem)','color':'var(--body)','marginBottom':'2rem','maxWidth':'40rem','marginLeft':'auto','marginRight':'auto'}}>Schedule a personalized demo to see how Verafye&apos;s graph-native intelligence detects financial crime networks and reduces investigation workload.</p>
    <div style={{'display':'flex','flexWrap':'wrap','gap':'1rem','justifyContent':'center'}}>
      <a href="/request-demo" className="btn-primary">Request Demo <span className="btn-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></a>
      <a href="/request-demo" className="btn-secondary">Contact Sales</a>
    </div>
  </div>
</section>


    </>
  );
}
