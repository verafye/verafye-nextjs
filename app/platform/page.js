import Link from 'next/link';

export const metadata = {
  title: 'Platform  -  Connected FRAML Intelligence Infrastructure',
  description: 'Verafye connects fraud, AML, and payments signals into a unified intelligence layer  -  graph-native detection, investigation intelligence, and cross-system connectivity for financial institutions and payment platforms.',
  openGraph: {
    title: 'Platform  -  Connected FRAML Intelligence Infrastructure | Verafye',
    description: 'Verafye connects fraud, AML, and payments signals into a unified intelligence layer  -  graph-native detection, investigation intelligence, and cross-system connectivity for financial institutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform  -  Connected FRAML Intelligence Infrastructure | Verafye',
    description: 'Verafye connects fraud, AML, and payments signals into a unified intelligence layer  -  graph-native detection, investigation intelligence, and cross-system connectivity.',
  },
};

export default function Page() {
  return (
    <>

{/* ─── HERO ──────────────────────────────────────────────────────────────── */}
<section style={{'background':'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)','padding':'5rem 0'}}>
  <div className="container" style={{'maxWidth':'56rem','textAlign':'center'}}>
    <p className="eyebrow animate-fade-up" style={{'marginBottom':'1.25rem'}}>PLATFORM</p>
    <h1 className="animate-fade-up delay-100" style={{'fontSize':'clamp(1.875rem,5vw,3.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'2rem','letterSpacing':'-0.025em'}}>Connected Intelligence Infrastructure for Modern Financial Crime Operations</h1>
    <p className="animate-fade-up delay-200" style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)','marginBottom':'2.5rem','maxWidth':'48rem','marginLeft':'auto','marginRight':'auto'}}>Verafye is an AI-native FRAML intelligence platform that connects fraud, AML, and payments signals into a unified operating layer. Designed for financial institutions and payment platforms operating under growing regulatory and operational complexity, it enables connected detection, investigation, and decisioning across systems.</p>
    {/* Hero now has two CTAs: primary demo conversion + secondary deeper exploration */}
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

{/* ─── THE CHALLENGE ─────────────────────────────────────────────────────── */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','marginBottom':'3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>THE CHALLENGE</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.5rem'}}>Why Fragmented Systems No Longer Work</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)','maxWidth':'48rem','margin':'0 auto'}}>Most institutions still manage fraud, AML, and payments risk across disconnected systems, workflows, and datasets. That fragmentation slows investigations, reduces signal clarity, and makes it harder to operate under evolving regulatory expectations.</p>
    </div>
    <div className="grid-4" style={{'marginBottom':'3rem'}}>
      <div style={{'background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'0.75rem','padding':'1.5rem','textAlign':'center'}}>
        <div style={{'width':'3rem','height':'3rem','background':'var(--error-light)','borderRadius':'0.5rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 0.75rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></div>
        <h3 style={{'fontSize':'0.938rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.375rem'}}>Fraud Detection</h3>
        <p style={{'fontSize':'0.813rem','color':'var(--muted)'}}>Isolated rule-based systems</p>
      </div>
      <div style={{'background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'0.75rem','padding':'1.5rem','textAlign':'center'}}>
        <div style={{'width':'3rem','height':'3rem','background':'var(--error-light)','borderRadius':'0.5rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 0.75rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></div>
        <h3 style={{'fontSize':'0.938rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.375rem'}}>AML Monitoring</h3>
        <p style={{'fontSize':'0.813rem','color':'var(--muted)'}}>Separate transaction screening</p>
      </div>
      <div style={{'background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'0.75rem','padding':'1.5rem','textAlign':'center'}}>
        <div style={{'width':'3rem','height':'3rem','background':'var(--error-light)','borderRadius':'0.5rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 0.75rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></div>
        <h3 style={{'fontSize':'0.938rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.375rem'}}>Case Management</h3>
        <p style={{'fontSize':'0.813rem','color':'var(--muted)'}}>Disconnected workflows</p>
      </div>
      <div style={{'background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'0.75rem','padding':'1.5rem','textAlign':'center'}}>
        <div style={{'width':'3rem','height':'3rem','background':'var(--error-light)','borderRadius':'0.5rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 0.75rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></div>
        <h3 style={{'fontSize':'0.938rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.375rem'}}>Payment Signals</h3>
        <p style={{'fontSize':'0.813rem','color':'var(--muted)'}}>Siloed data streams</p>
      </div>
    </div>
    <div style={{'background':'linear-gradient(90deg,var(--error-bg),var(--error-light))','borderRadius':'1rem','padding':'2.5rem','border':'1px solid var(--error-border)','display':'flex','alignItems':'center','gap':'1.5rem','flexWrap':'wrap'}}>
      <div style={{'width':'3.5rem','height':'3.5rem','background':'#fff','borderRadius':'0.75rem','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0','boxShadow':'0 1px 3px rgba(0,0,0,0.05)'}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
      <div>
        <p style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Financial crime operates across connected networks  -  not isolated transactions.</p>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)'}}>The result: investigators face alert overload, limited traceability, and disconnected workflows that are increasingly difficult to sustain under regulatory scrutiny.</p>
      </div>
    </div>
  </div>
</section>

{/* ─── PLATFORM ARCHITECTURE ─────────────────────────────────────────────── */}
<section className="section-light" style={{'padding':'5rem 0'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>PLATFORM ARCHITECTURE</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.5rem'}}>How the Verafye Platform Works</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)'}}>Verafye brings fraud, AML, and payments domains together through graph-native detection, investigation intelligence, and cross-system correlation  -  creating a more connected, traceable, and operationally effective financial crime infrastructure. By connecting signals across systems, Verafye helps institutions move from fragmented monitoring to intelligence-led operations.</p>
    </div>
    <div style={{'maxWidth':'64rem','margin':'0 auto','background':'#fff','borderRadius':'1.5rem','boxShadow':'0 20px 25px -5px rgba(0,0,0,0.1)','padding':'2.5rem','border':'1px solid #f3f4f6'}}>
      <div className="arch-flow" style={{'justifyContent':'center'}}>
        <div style={{'width':'7.5rem','background':'linear-gradient(180deg,var(--bg-tint),var(--bg-blue))','borderRadius':'0.75rem','padding':'1rem','border':'1px solid rgba(30,111,183,0.2)'}}>
          <div style={{'textAlign':'center','marginBottom':'0.75rem','fontSize':'0.625rem','fontWeight':'700','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.05em'}}>Signals</div>
          <div style={{'display':'flex','flexDirection':'column','gap':'0.375rem'}}>
            <div style={{'background':'#fff','border':'1px solid #e5e7eb','borderRadius':'0.25rem','padding':'0.375rem','fontSize':'0.625rem','fontWeight':'500','color':'var(--body)','textAlign':'center'}}>Transactions</div>
            <div style={{'background':'#fff','border':'1px solid #e5e7eb','borderRadius':'0.25rem','padding':'0.375rem','fontSize':'0.625rem','fontWeight':'500','color':'var(--body)','textAlign':'center'}}>Devices</div>
            <div style={{'background':'#fff','border':'1px solid #e5e7eb','borderRadius':'0.25rem','padding':'0.375rem','fontSize':'0.625rem','fontWeight':'500','color':'var(--body)','textAlign':'center'}}>Identity</div>
            <div style={{'background':'#fff','border':'1px solid #e5e7eb','borderRadius':'0.25rem','padding':'0.375rem','fontSize':'0.625rem','fontWeight':'500','color':'var(--body)','textAlign':'center'}}>Behavior</div>
          </div>
        </div>
        <svg width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        <div style={{'width':'10rem','background':'linear-gradient(135deg,var(--primary),var(--secondary))','borderRadius':'0.75rem','padding':'1.5rem','boxShadow':'0 10px 25px rgba(30,111,183,0.3)','textAlign':'center'}}>
          <div style={{'width':'3rem','height':'3rem','background':'rgba(255,255,255,0.2)','borderRadius':'0.75rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 0.75rem','border':'1px solid rgba(255,255,255,0.3)'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
          <div style={{'color':'#fff','fontWeight':'700','fontSize':'0.75rem'}}>Graph Intelligence</div>
          <div style={{'color':'rgba(255,255,255,0.7)','fontSize':'0.625rem'}}>Core Engine</div>
        </div>
        <svg width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        <div style={{'width':'8rem','background':'var(--bg-blue)','border':'2px solid rgba(30,111,183,0.3)','borderRadius':'0.75rem','padding':'1rem','textAlign':'center'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','background':'linear-gradient(135deg,var(--primary),var(--secondary))','borderRadius':'0.5rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 0.5rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
          <div style={{'fontWeight':'700','fontSize':'0.625rem','color':'var(--dark)'}}>Detection</div>
          <div style={{'fontSize':'0.5625rem','color':'var(--body)'}}>Engine</div>
        </div>
        <svg width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        <div style={{'width':'8rem','background':'#fff','border':'1px solid #e5e7eb','borderRadius':'0.75rem','padding':'1rem','textAlign':'center','boxShadow':'0 1px 3px rgba(0,0,0,0.05)'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','background':'var(--primary)','borderRadius':'0.5rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 0.5rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg></div>
          <div style={{'fontWeight':'700','fontSize':'0.625rem','color':'var(--dark)'}}>Investigation</div>
          <div style={{'fontSize':'0.5625rem','color':'var(--body)'}}>Intelligence</div>
        </div>
        <svg width="30" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        <div style={{'width':'7.5rem','background':'#fff','border':'1px solid #e5e7eb','borderRadius':'0.75rem','padding':'1rem','textAlign':'center','boxShadow':'0 1px 3px rgba(0,0,0,0.05)'}}>
          <div style={{'width':'2.5rem','height':'2.5rem','background':'var(--body)','borderRadius':'0.5rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 0.5rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg></div>
          <div style={{'fontWeight':'700','fontSize':'0.625rem','color':'var(--dark)'}}>Case</div>
          <div style={{'fontSize':'0.5625rem','color':'var(--body)'}}>Management</div>
        </div>
      </div>
      <div style={{'marginTop':'1.5rem','paddingTop':'1.5rem','borderTop':'1px solid #e5e7eb','textAlign':'center','display':'flex','alignItems':'center','justifyContent':'center','gap':'0.5rem'}}>
        <div style={{'width':'0.5rem','height':'0.5rem','background':'var(--primary)','borderRadius':'50%','animation':'pulse 2s infinite'}}></div>
        <span style={{'fontSize':'0.875rem','fontWeight':'500','color':'var(--body)'}}>Real-time Intelligence Flow</span>
      </div>
    </div>

    {/* Task 1 + Task 2: Three ghost-button links below the architecture diagram.
        A visitor who has just traced the signal → graph → detection → investigation
        flow is primed to explore each layer in detail. These buttons give them
        three precise exits rather than one vague "Learn More". */}
    <div style={{'maxWidth':'64rem','margin':'2rem auto 0','display':'flex','flexWrap':'wrap','justifyContent':'center','gap':'0.75rem'}}>
      <Link href="/solutions/graph-intelligence" style={{
        'display':'inline-flex','alignItems':'center','gap':'0.4rem',
        'fontSize':'0.8125rem','fontWeight':600,'color':'var(--primary)',
        'border':'1px solid rgba(30,111,183,0.25)','borderRadius':'8px',
        'padding':'0.55rem 1rem','background':'#fff',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
        Explore Graph Intelligence
      </Link>
      <Link href="/solutions/investigation-intelligence" style={{
        'display':'inline-flex','alignItems':'center','gap':'0.4rem',
        'fontSize':'0.8125rem','fontWeight':600,'color':'var(--primary)',
        'border':'1px solid rgba(30,111,183,0.25)','borderRadius':'8px',
        'padding':'0.55rem 1rem','background':'#fff',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
        See Investigation Intelligence
      </Link>
      <Link href="/solutions/mule-account-detection" style={{
        'display':'inline-flex','alignItems':'center','gap':'0.4rem',
        'fontSize':'0.8125rem','fontWeight':600,'color':'var(--primary)',
        'border':'1px solid rgba(30,111,183,0.25)','borderRadius':'8px',
        'padding':'0.55rem 1rem','background':'#fff',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
        Mule Account Detection
      </Link>
    </div>
  </div>
</section>

{/* ─── GRAPH-NATIVE INTELLIGENCE ─────────────────────────────────────────── */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>CORE DIFFERENTIATION</p>
        <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.5rem'}}>Graph-Native Intelligence</h2>
        <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','marginBottom':'2rem'}}>Graph intelligence helps institutions move beyond isolated alerts to connected entity and network analysis. This makes it easier to identify coordinated activity, uncover hidden relationships, and prioritize investigations based on broader patterns of risk  -  across accounts, devices, and transaction flows.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'1.25rem','marginBottom':'2rem'}}>
          <div style={{'display':'flex','gap':'1rem'}}><div style={{'flexShrink':'0','width':'2.5rem','height':'2.5rem','background':'var(--primary)','borderRadius':'0.5rem','display':'flex','alignItems':'center','justifyContent':'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></div><div><h3 style={{'fontSize':'0.938rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Network-Based Detection</h3><p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Identify fraud rings and mule networks through relationship analysis, not rule thresholds</p></div></div>
          <div style={{'display':'flex','gap':'1rem'}}><div style={{'flexShrink':'0','width':'2.5rem','height':'2.5rem','background':'var(--primary)','borderRadius':'0.5rem','display':'flex','alignItems':'center','justifyContent':'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></div><div><h3 style={{'fontSize':'0.938rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Entity Relationships</h3><p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Map connections between accounts, devices, and identities to surface hidden coordination</p></div></div>
          <div style={{'display':'flex','gap':'1rem'}}><div style={{'flexShrink':'0','width':'2.5rem','height':'2.5rem','background':'var(--primary)','borderRadius':'0.5rem','display':'flex','alignItems':'center','justifyContent':'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></div><div><h3 style={{'fontSize':'0.938rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Signal Correlation</h3><p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Connect signals across fraud, AML, and payments into a single intelligence view</p></div></div>
          <div style={{'display':'flex','gap':'1rem'}}><div style={{'flexShrink':'0','width':'2.5rem','height':'2.5rem','background':'var(--primary)','borderRadius':'0.5rem','display':'flex','alignItems':'center','justifyContent':'center'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></div><div><h3 style={{'fontSize':'0.938rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Cross-System Intelligence</h3><p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Eliminate the silos between fraud, AML, and payments that allow coordinated crime to go undetected</p></div></div>
        </div>
        {/* Task 1: Primary contextual CTA placed directly after the feature list.
            The visitor has just absorbed the core differentiation argument  - 
            this is the highest-intent moment on this section to send them to
            the full Graph Intelligence solution page. */}
        <Link href="/solutions/graph-intelligence" style={{
          'display':'inline-flex','alignItems':'center','gap':'0.4rem',
          'fontSize':'0.8125rem','fontWeight':600,'color':'var(--primary)',
          'border':'1px solid rgba(30,111,183,0.25)','borderRadius':'8px',
          'padding':'0.55rem 1rem','background':'#fff','textDecoration':'none',
        }}>
          Explore Graph Intelligence
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
      <div style={{'background':'linear-gradient(135deg,var(--primary),var(--accent),var(--secondary))','borderRadius':'1.5rem','padding':'3rem','boxShadow':'0 25px 50px rgba(30,111,183,0.3)','textAlign':'center','position':'relative'}}>
        <div style={{'position':'absolute','inset':'0','borderRadius':'1.5rem','opacity':'0.1','backgroundImage':'radial-gradient(circle at 2px 2px,#fff 1px,transparent 0)','backgroundSize':'24px 24px'}}></div>
        <div style={{'position':'relative'}}>
          <div style={{'width':'6rem','height':'6rem','background':'rgba(255,255,255,0.2)','borderRadius':'1rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 1.5rem','border':'1px solid rgba(255,255,255,0.3)'}}><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
          <h3 style={{'fontSize':'1.5rem','fontWeight':'700','color':'#fff','marginBottom':'0.75rem'}}>Graph Intelligence Layer</h3>
          <p style={{'fontSize':'1rem','color':'rgba(255,255,255,0.8)','maxWidth':'20rem','margin':'0 auto'}}>The core engine connecting signals, resolving entities, and surfacing network-level risk across fraud, AML, and payments.</p>
          <div style={{'marginTop':'2rem','display':'flex','justifyContent':'center','gap':'0.5rem'}}>
            <div style={{'width':'0.5rem','height':'0.5rem','background':'rgba(255,255,255,0.6)','borderRadius':'50%','animation':'pulse 2s infinite'}}></div>
            <div style={{'width':'0.5rem','height':'0.5rem','background':'rgba(255,255,255,0.6)','borderRadius':'50%','animation':'pulse 2s infinite 0.3s'}}></div>
            <div style={{'width':'0.5rem','height':'0.5rem','background':'rgba(255,255,255,0.6)','borderRadius':'50%','animation':'pulse 2s infinite 0.6s'}}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ─── INVESTIGATION INTELLIGENCE ────────────────────────────────────────── */}
<section className="section-light" style={{'padding':'5rem 0'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>INVESTIGATION EFFICIENCY</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.5rem'}}>Investigation Intelligence</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)'}}>Investigation intelligence reduces analyst burden by clustering related signals, improving prioritization, and supporting more structured, traceable case workflows. The result is faster resolution, clearer escalation paths, and stronger operational readiness.</p>
    </div>
    <div className="grid-2" style={{'maxWidth':'64rem','margin':'0 auto'}}>
      <div className="card" style={{'padding':'2rem'}}><div style={{'display':'flex','gap':'1.25rem'}}><div className="card-icon gradient-bg-4" style={{'width':'3.5rem','height':'3.5rem','borderRadius':'0.75rem','flexShrink':'0'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg></div><div><h3 style={{'fontSize':'1.125rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Alert Clustering</h3><p style={{'fontSize':'0.938rem','color':'var(--body)'}}>Group related alerts into coherent cases  -  reducing noise and surfacing genuine risk patterns</p></div></div></div>
      <div className="card" style={{'padding':'2rem'}}><div style={{'display':'flex','gap':'1.25rem'}}><div className="card-icon gradient-bg-4" style={{'width':'3.5rem','height':'3.5rem','borderRadius':'0.75rem','flexShrink':'0'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div><div><h3 style={{'fontSize':'1.125rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Entity Correlation</h3><p style={{'fontSize':'0.938rem','color':'var(--body)'}}>Automatically link related entities across investigations to build a complete picture of connected activity</p></div></div></div>
      <div className="card" style={{'padding':'2rem'}}><div style={{'display':'flex','gap':'1.25rem'}}><div className="card-icon gradient-bg-4" style={{'width':'3.5rem','height':'3.5rem','borderRadius':'0.75rem','flexShrink':'0'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><div><h3 style={{'fontSize':'1.125rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Investigation Prioritization</h3><p style={{'fontSize':'0.938rem','color':'var(--body)'}}>Risk-scored queues ensure analysts focus on the cases that matter most  -  not just the most recent</p></div></div></div>
      <div className="card" style={{'padding':'2rem'}}><div style={{'display':'flex','gap':'1.25rem'}}><div className="card-icon gradient-bg-4" style={{'width':'3.5rem','height':'3.5rem','borderRadius':'0.75rem','flexShrink':'0'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg></div><div><h3 style={{'fontSize':'1.125rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Case Orchestration</h3><p style={{'fontSize':'0.938rem','color':'var(--body)'}}>Structured workflows with clear escalation paths, audit trails, and traceable decision records</p></div></div></div>
    </div>

    {/* Task 1: CTA placed immediately after the four feature cards.
        The visitor has just read the investigation intelligence case  - 
        the solution page is the natural next step. Centred placement matches
        the section's centred heading style. */}
    <div style={{'textAlign':'center','marginTop':'2.5rem'}}>
      <Link href="/solutions/investigation-intelligence" style={{
        'display':'inline-flex','alignItems':'center','gap':'0.4rem',
        'fontSize':'0.8125rem','fontWeight':600,'color':'var(--primary)',
        'border':'1px solid rgba(30,111,183,0.25)','borderRadius':'8px',
        'padding':'0.55rem 1rem','background':'#fff','textDecoration':'none',
      }}>
        See Investigation Intelligence
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </Link>
    </div>
  </div>
</section>

{/* ─── REGULATORY-AWARE ARCHITECTURE ────────────────────────────────────── */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'56rem'}}>
    <div style={{'textAlign':'center','marginBottom':'3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>REGULATORY ALIGNMENT</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem'}}>Built for Regulatory-Driven Environments</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)','maxWidth':'48rem','margin':'0 auto'}}>By connecting signals across fraud, AML, and payments environments, Verafye helps institutions operate with a more unified view of risk. This improves visibility, reduces fragmentation, and supports intelligence-led financial crime operations aligned with evolving expectations across jurisdictions.</p>
    </div>
    <div style={{'background':'linear-gradient(135deg,var(--bg-tint),#fff)','borderRadius':'1.5rem','padding':'2.5rem','border':'1px solid var(--border)','boxShadow':'0 4px 24px rgba(0,0,0,0.04)'}}>
      <div className="grid-3" style={{'gap':'2rem'}}>
        <div style={{'textAlign':'center'}}>
          <div style={{'width':'3.5rem','height':'3.5rem','background':'rgba(30,111,183,0.08)','borderRadius':'0.75rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 1rem'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg></div>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Audit-Ready</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Complete investigation trails and decision documentation that support regulatory review and examiner inquiries</p>
        </div>
        <div style={{'textAlign':'center'}}>
          <div style={{'width':'3.5rem','height':'3.5rem','background':'rgba(30,111,183,0.08)','borderRadius':'0.75rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 1rem'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></div>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Explainable Decisioning</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Traceable model outputs with documented reasoning for every detection, score, and recommendation</p>
        </div>
        <div style={{'textAlign':'center'}}>
          <div style={{'width':'3.5rem','height':'3.5rem','background':'rgba(30,111,183,0.08)','borderRadius':'0.75rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 1rem'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></div>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Multi-Jurisdiction Support</h3>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Designed to support institutions operating across multiple regulatory environments and reporting frameworks</p>
        </div>
      </div>
    </div>
    <p style={{'textAlign':'center','fontSize':'0.8125rem','color':'var(--muted)','marginTop':'1.5rem','fontStyle':'italic'}}>Verafye is designed to align with evolving regulatory expectations. We do not claim formal compliance with specific regulations.</p>

    {/* Task 2: Security & Trust link anchored directly to the regulatory content.
        Enterprise buyers evaluating compliance posture will want to verify security
        claims before progressing toward a demo. This placement converts
        the regulatory section from a dead end into a trust deepening step. */}
    <div style={{'textAlign':'center','marginTop':'1.5rem'}}>
      <Link href="/security-trust" style={{
        'display':'inline-flex','alignItems':'center','gap':'0.5rem',
        'fontSize':'0.8125rem','fontWeight':600,'color':'var(--primary)',
        'border':'1px solid var(--border)','borderRadius':'8px',
        'padding':'0.6rem 1.25rem','background':'#fff',
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        View Security &amp; Trust
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </Link>
    </div>
  </div>
</section>

{/* ─── CAPABILITIES BRIDGE ───────────────────────────────────────────────── */}
{/* Task 2 + Task 4: New section  -  the original page had no link to /capabilities.
    Sits here in the Platform → Capabilities → Solutions content progression,
    after the platform is fully explained and before the conversion push.
    Gives visitors who want full feature depth a clear next step,
    and visitors who are ready a direct path to use cases. */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container" style={{'maxWidth':'56rem','textAlign':'center'}}>
    <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>CAPABILITIES</p>
    <h2 style={{'fontSize':'clamp(1.25rem,3vw,2rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem','letterSpacing':'-0.02em'}}>
      Explore the Full Platform
    </h2>
    <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.125rem)','color':'var(--body)','maxWidth':'40rem','margin':'0 auto 2rem'}}>
      Explore the complete set of detection, investigation, and cross-system intelligence capabilities built into Verafye.
    </p>
    <div style={{'display':'flex','flexWrap':'wrap','justifyContent':'center','gap':'0.75rem'}}>
      <Link href="/capabilities" className="btn-primary" style={{'display':'inline-flex','alignItems':'center','gap':'0.5rem'}}>
        Explore All Capabilities
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </Link>
      <Link href="/use-cases" className="btn-secondary">View Use Cases</Link>
    </div>
  </div>
</section>

{/* ─── RESULTS ───────────────────────────────────────────────────────────── */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>PLATFORM OUTCOMES</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)'}}>Measurable Results</h2>
    </div>
    <div className="grid-4" style={{'maxWidth':'64rem','margin':'0 auto'}}>
      <div className="card" style={{'padding':'2rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.75rem'}}>30–50%</div><p style={{'fontSize':'0.813rem','fontWeight':'500','color':'var(--body)'}}>Reduce investigator workload</p></div>
      <div className="card" style={{'padding':'2rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.75rem'}}>3x</div><p style={{'fontSize':'0.813rem','fontWeight':'500','color':'var(--body)'}}>Detect fraud networks earlier</p></div>
      <div className="card" style={{'padding':'2rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.75rem'}}>40%</div><p style={{'fontSize':'0.813rem','fontWeight':'500','color':'var(--body)'}}>Improve alert precision</p></div>
      <div className="card" style={{'padding':'2rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.75rem'}}>100%</div><p style={{'fontSize':'0.813rem','fontWeight':'500','color':'var(--body)'}}>Connect fraud and AML signals</p></div>
    </div>
    <p style={{'textAlign':'center','fontSize':'0.813rem','color':'var(--muted)','marginTop':'2rem','fontStyle':'italic','maxWidth':'40rem','marginLeft':'auto','marginRight':'auto'}}>Metrics presented as indicative outcomes based on platform capabilities.</p>
  </div>
</section>

{/* ─── FINAL CTA BAND ────────────────────────────────────────────────────── */}
{/* Task 3: Replaces <CTA /> with a fully controlled inline band.
    Heading matches the site-wide "See Verafye in Action" pattern established
    on the homepage  -  consistent language reduces cognitive load across pages.
    Secondary button links to Graph Intelligence rather than a generic page,
    giving undecided visitors a relevant product path instead of a dead end. */}
<div style={{'textAlign':'center','padding':'2.5rem 1.5rem 0','background':'var(--bg-tint)'}}>
  <p style={{'fontSize':'0.9375rem','color':'var(--muted-dark)','fontWeight':500,'maxWidth':'52rem','margin':'0 auto','lineHeight':1.65}}>
    As financial crime and regulatory complexity continue to grow, connected infrastructure becomes a strategic requirement  -  not an optional upgrade.
  </p>
</div>
<section style={{'padding':'5rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)'}}>
  <div className="container" style={{'textAlign':'center','maxWidth':'48rem'}}>
    <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1.25rem'}}>
      Explore the Verafye Platform
    </h2>
    <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','maxWidth':'36rem','margin':'0 auto 2.5rem'}}>
      See how Verafye supports intelligence-led operations across fraud, AML, and payments  -  designed for institutions operating under growing regulatory and operational complexity.
    </p>
    <div style={{'display':'flex','flexWrap':'wrap','justifyContent':'center','gap':'1rem'}}>
      <Link href="/request-demo" className="btn-primary">
        Request Demo
        <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </Link>
      <Link href="/solutions/graph-intelligence" className="btn-secondary">Explore Graph Intelligence</Link>
    </div>
    <p style={{'fontSize':'0.8125rem','color':'var(--muted)','marginTop':'1.5rem'}}>
      No commitment required. Speak directly with our solutions team.
    </p>
  </div>
</section>

    </>
  );
}
