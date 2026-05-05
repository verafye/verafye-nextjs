import Link from 'next/link';

export const metadata = {
  title: 'Intelligent Investigation Layer for Banking, Payments & Fintechs | Verafye',
  description: 'Verafye helps regulated payment platforms investigate fraud and AML risk faster through alert clustering, case workflows, and AI-assisted decision support.',
  openGraph: {
    title: 'Intelligent Investigation Layer for Banking, Payments & Fintechs | Verafye',
    description: 'Verafye helps regulated payment platforms investigate fraud and AML risk faster through alert clustering, case workflows, and AI-assisted decision support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intelligent Investigation Layer for Banking, Payments & Fintechs | Verafye',
    description: 'Verafye helps regulated payment platforms investigate fraud and AML risk faster through alert clustering, case workflows, and AI-assisted decision support.',
  },
};

export default function Page() {
  return (
    <>

{/* ─── HERO ──────────────────────────────────────────────────────────────── */}
<section style={{'background':'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)','overflow':'hidden'}}>
  <div className="container" style={{'paddingTop':'3rem','paddingBottom':'5rem'}}>
    <div className="hero-grid" style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'2.5rem','alignItems':'center'}}>
      <div style={{'maxWidth':'36rem'}}>

        {/* Eyebrow */}
        <p className="eyebrow animate-fade-up" style={{'marginBottom':'1.25rem'}}>
          For Regulated Payment, Lending &amp; Banking Teams
        </p>

        {/* H1 */}
        <h1 className="animate-fade-up delay-100" style={{'fontSize':'clamp(1.875rem,5vw,3.5rem)','fontWeight':'700','marginBottom':'1.5rem','lineHeight':'1.15','letterSpacing':'-0.025em'}}>
          <span style={{'color':'var(--dark)','display':'block'}}>Intelligent Investigation Layer</span>
          <span style={{'color':'var(--primary)','display':'block'}}>for Regulated Payment Platforms</span>
        </h1>

        {/* Body */}
        <p className="animate-fade-up delay-200" style={{'fontSize':'clamp(0.875rem,2vw,1.125rem)','color':'var(--body)','marginBottom':'2rem'}}>
          Regulated payment and fintech teams are overwhelmed by alerts across fragmented fraud, AML, and payments systems - spending more time gathering context than acting on risk.{' '}
          Verafye aggregates signals, clusters alerts, and structures investigation workflows so your team moves from alerts to decisions faster, with full context and audit-ready case documentation.
        </p>

        {/* CTAs  -  Task 1: Primary = Request Demo, Secondary = Explore Platform */}
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
          Trusted by regulated payment environments operating under FINTRAC, FCA, FinCEN and RBI obligations.
        </p>

        {/* Tags */}
        <div className="animate-fade-up delay-500" style={{'display':'flex','flexWrap':'wrap','gap':'0.625rem'}}>
          <span className="tag">Investigation Layer</span>
          <span className="tag">Unified Fraud + AML</span>
          <span className="tag">Alert Prioritisation</span>
          <span className="tag">Audit-Ready Case Management</span>
        </div>

      </div>
      <div className="animate-fade-right delay-300 hero-image" style={{'position':'relative','display':'flex','justifyContent':'flex-end'}}>
        <img src="/images/hero-network.png" alt="Signal convergence visualization" loading="eager" style={{'width':'100%','maxWidth':'640px','height':'auto','objectFit':'contain'}}/>
      </div>
    </div>
  </div>
</section>

{/* ─── REGULATORY CONTEXT STRIP ─────────────────────────────────────────── */}
<section style={{'padding':'2rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)','borderBottom':'1px solid var(--border)'}}>
  <div className="container" style={{'maxWidth':'56rem','textAlign':'center'}}>
    <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--body)','lineHeight':1.75,'margin':0}}>
      Payment platforms, PSPs, and MSBs operating under <strong style={{'color':'var(--dark)','fontWeight':600}}>FINTRAC</strong>, <strong style={{'color':'var(--dark)','fontWeight':600}}>FCA</strong>, <strong style={{'color':'var(--dark)','fontWeight':600}}>FinCEN</strong>, <strong style={{'color':'var(--dark)','fontWeight':600}}>RBI</strong> and <strong style={{'color':'var(--dark)','fontWeight':600}}>EU AMLR</strong> obligations face rising fraud complexity and growing AML requirements - with investigation teams expected to move faster on less.{' '}
      Most still run separate fraud, AML, and payments tools with no shared context, creating alert fatigue, investigation bottlenecks, and audit documentation that takes too long to produce.{' '}
      Verafye closes that gap: a unified investigation layer that connects signals, prioritises cases, and generates audit-ready documentation - without replacing your existing stack.
    </p>
  </div>
</section>

{/* ─── WHY NOW ───────────────────────────────────────────────────────────── */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'52rem','margin':'0 auto 3rem'}}>
      <div className="badge" style={{'marginBottom':'2rem'}}><div className="badge-dot pulse"></div><span className="badge-text">Why Now</span></div>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'2rem','letterSpacing':'-0.025em','lineHeight':1.2}}>Payment platforms are managing more fraud and AML complexity with the same team size</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.2rem)','color':'var(--body)','marginBottom':'2rem','lineHeight':1.7}}>Alert volumes are rising. Investigation capacity is not keeping pace. Regulatory expectations are not waiting.</p>
      <p style={{'fontSize':'clamp(1.125rem,2.5vw,1.5rem)','color':'var(--dark)','fontWeight':700,'marginBottom':'1rem','lineHeight':1.4,'letterSpacing':'-0.02em'}}>Detection is not the problem. Investigation is the bottleneck.</p>
      <p style={{'fontSize':'clamp(1rem,2vw,1.3rem)','color':'var(--dark)','fontWeight':600,'marginBottom':'2rem','lineHeight':1.6}}>Siloed fraud and AML systems, manual analyst effort, and the lack of unified context are what slow teams down. A connected investigation layer removes the bottleneck.</p>
      <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--muted-dark)','fontWeight':500,'lineHeight':1.7}}>
        This is not a tooling upgrade cycle. It is a structural gap between what payment risk teams are expected to deliver and what fragmented, single-domain tools can support.
      </p>
    </div>
    <div className="grid-2" style={{'maxWidth':'72rem','margin':'0 auto'}}>
      <div className="card" style={{'padding':'2.5rem'}}>
        <div className="card-icon gradient-bg-1"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="7" height="7"/><rect x="15" y="3" width="7" height="7"/><rect x="15" y="14" width="7" height="7"/><rect x="2" y="14" width="7" height="7"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','marginBottom':'0.75rem'}}>Siloed Fraud and AML Systems</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)'}}>Separate fraud detection, AML monitoring, and payments risk tools generate uncoordinated alerts with no shared context - forcing analysts to manually stitch together the full picture on every case.</p>
      </div>
      <div className="card" style={{'padding':'2.5rem'}}>
        <div className="card-icon gradient-bg-2"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','marginBottom':'0.75rem'}}>Linked Accounts Hidden Across Systems</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)'}}>Coordinated fraud rings, mule networks, and multi-account abuse hide in plain sight when fraud and AML tools operate in isolation. Network-level risk is invisible at the individual-tool level.</p>
      </div>
      <div className="card" style={{'padding':'2.5rem'}}>
        <div className="card-icon gradient-bg-3"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','marginBottom':'0.75rem'}}>Alert Volumes Exceeding Team Capacity</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)'}}>High transaction throughput and rule-based monitoring combine to produce alert queues that compliance teams cannot meaningfully review. Genuine risk is buried under noise, and prioritisation becomes guesswork.</p>
      </div>
      <div className="card" style={{'padding':'2.5rem'}}>
        <div className="card-icon gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg></div>
        <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','marginBottom':'0.75rem'}}>Investigation Evidence Takes Too Long to Produce</h3>
        <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)'}}>When regulators request documentation, assembling investigation trails manually from multiple platforms is slow and inconsistent - creating compliance exposure that goes well beyond the underlying risk event.</p>
      </div>
    </div>
  </div>
</section>

{/* ─── REGULATORY ────────────────────────────────────────────────────────── */}
<section className="section-light" style={{'padding':'5rem 0'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <h2 style={{'fontSize':'clamp(1.25rem,3.5vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Global Financial Crime Regulation Is Driving Infrastructure Change</h2>
    </div>
    <div className="grid-5" style={{'maxWidth':'80rem','margin':'0 auto'}}>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
        </div>
        <h3 style={{'fontSize':'clamp(1rem,1.5vw,1.25rem)','fontWeight':'700','color':'var(--primary)','marginBottom':'0.75rem'}}>EU AMLR</h3>
        <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Enhanced supervision and network-level risk assessment aligned with evolving regulatory expectations.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
        </div>
        <h3 style={{'fontSize':'clamp(1rem,1.5vw,1.25rem)','fontWeight':'700','color':'var(--primary)','marginBottom':'0.75rem'}}>MiCA</h3>
        <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Transaction monitoring and fraud detection capabilities supporting digital asset compliance frameworks.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
        </div>
        <h3 style={{'fontSize':'clamp(1rem,1.5vw,1.25rem)','fontWeight':'700','color':'var(--primary)','marginBottom':'0.75rem'}}>EU AI Act</h3>
        <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Explainable AI governance enabling transparency in automated decision-making.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
        </div>
        <h3 style={{'fontSize':'clamp(1rem,1.5vw,1.25rem)','fontWeight':'700','color':'var(--primary)','marginBottom':'0.75rem'}}>FATF Guidance</h3>
        <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Network-level detection and investigation intelligence aligned with global standards.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,rgba(30,111,183,0.1),rgba(90,178,255,0.1))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
        </div>
        <h3 style={{'fontSize':'clamp(1rem,1.5vw,1.25rem)','fontWeight':'700','color':'var(--primary)','marginBottom':'0.75rem'}}>RBI Fraud Monitoring</h3>
        <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Real-time monitoring and investigation prioritization supporting regulatory requirements.</p>
      </div>
    </div>
    <p style={{'textAlign':'center','fontSize':'0.813rem','color':'var(--body)','marginTop':'2.5rem','fontStyle':'italic','maxWidth':'48rem','marginLeft':'auto','marginRight':'auto'}}>Verafye is designed to align with evolving regulatory expectations. We do not claim formal compliance with specific regulations.</p>
  </div>
</section>

{/* ─── VALUE PROPOSITION ─────────────────────────────────────────────────── */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <div className="badge" style={{'marginBottom':'2rem'}}><div className="badge-dot pulse"></div><span className="badge-text">From Alerts to Decisions</span></div>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.025em'}}>One Investigation Layer Across Fraud, AML, and Payments</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)','maxWidth':'52rem','margin':'0 auto'}}>Verafye connects signals, clusters alerts, and structures investigation workflows - so regulated payment teams move from fragmented monitoring to intelligence-led operations. No rip-and-replace. API-first. Modular adoption that works alongside your existing systems.</p>
    </div>
    <div className="grid-3" style={{'maxWidth':'72rem','margin':'0 auto'}}>
      <div className="card card-elevated" style={{'padding':'2rem','textAlign':'center'}}>
        <div style={{'fontSize':'0.75rem','fontWeight':'700','color':'var(--muted)','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.75rem'}}>Problem</div>
        <div style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','fontWeight':'600','color':'var(--dark)','marginBottom':'0.5rem'}}>Fragmented alerts</div>
        <div style={{'fontSize':'1.5rem','color':'var(--primary)','marginBottom':'0.5rem'}}>→</div>
        <div style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','fontWeight':'600','color':'var(--primary)'}}>Unified investigation context</div>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem','textAlign':'center'}}>
        <div style={{'fontSize':'0.75rem','fontWeight':'700','color':'var(--muted)','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.75rem'}}>Problem</div>
        <div style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','fontWeight':'600','color':'var(--dark)','marginBottom':'0.5rem'}}>Manual investigations</div>
        <div style={{'fontSize':'1.5rem','color':'var(--primary)','marginBottom':'0.5rem'}}>→</div>
        <div style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','fontWeight':'600','color':'var(--primary)'}}>Structured workflows</div>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem','textAlign':'center'}}>
        <div style={{'fontSize':'0.75rem','fontWeight':'700','color':'var(--muted)','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.75rem'}}>Problem</div>
        <div style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','fontWeight':'600','color':'var(--dark)','marginBottom':'0.5rem'}}>Slow decisions</div>
        <div style={{'fontSize':'1.5rem','color':'var(--primary)','marginBottom':'0.5rem'}}>→</div>
        <div style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','fontWeight':'600','color':'var(--primary)'}}>AI-assisted decision support</div>
      </div>
    </div>
  </div>
</section>

{/* ─── CORE PLATFORM ─────────────────────────────────────────────────────── */}
{/* Task 2: Each card now links to its solution page */}
<section style={{'padding':'5rem 0','background':'var(--bg-tint)'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>CORE PLATFORM</p>
      <h2 style={{'fontSize':'clamp(1.25rem,3.5vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Platform Built for Financial Crime Intelligence</h2>
    </div>
    <div className="grid-3" style={{'maxWidth':'80rem','margin':'0 auto'}}>

      {/* Card 1  -  linked */}
      <Link href="/solutions/graph-intelligence" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-hover" style={{'padding':'2.5rem','position':'relative','overflow':'hidden','height':'100%','cursor':'pointer'}}>
          <div className="card-corner"></div>
          <div className="card-icon gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','marginBottom':'0.75rem','color':'var(--dark)'}}>Graph-Native Detection</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Detect coordinated financial crime networks through relationship intelligence.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            Explore Graph Intelligence
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      {/* Card 2  -  linked */}
      <Link href="/solutions/investigation-intelligence" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-hover" style={{'padding':'2.5rem','position':'relative','overflow':'hidden','height':'100%','cursor':'pointer'}}>
          <div className="card-corner"></div>
          <div className="card-icon gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','marginBottom':'0.75rem','color':'var(--dark)'}}>Investigation Intelligence</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Cluster alerts and prioritize investigations using network-level risk.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            Explore Investigation Intelligence
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      {/* Card 3  -  linked */}
      <Link href="/solutions/mule-account-detection" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-hover" style={{'padding':'2.5rem','position':'relative','overflow':'hidden','height':'100%','cursor':'pointer'}}>
          <div className="card-corner"></div>
          <div className="card-icon gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','marginBottom':'0.75rem','color':'var(--dark)'}}>Cross-System Intelligence</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Connect fraud, AML and payments monitoring signals.</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            Explore Mule Account Detection
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

    </div>

    {/* Section footer CTA  -  links to platform overview */}
    <div style={{'textAlign':'center','marginTop':'3rem'}}>
      <Link href="/platform" className="btn-secondary">
        View Full Platform
        <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </Link>
    </div>
  </div>
</section>

{/* ─── CAPABILITIES ──────────────────────────────────────────────────────── */}
{/* Task 2: Capability cards now link to /capabilities with anchor targets */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>CAPABILITIES</p>
      <h2 style={{'fontSize':'clamp(1.25rem,3.5vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Comprehensive Intelligence Capabilities</h2>
    </div>
    <div className="grid-4" style={{'maxWidth':'80rem','margin':'0 auto'}}>
      <Link href="/capabilities" style={{'textDecoration':'none'}}>
        <div className="card card-hover" style={{'padding':'2rem','cursor':'pointer'}}>
          <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,var(--bg-tint),var(--bg-blue))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
          <h3 style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','fontWeight':'700','marginBottom':'0.5rem','color':'var(--dark)'}}>Device Intelligence</h3>
          <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Track and analyze device patterns across transaction networks.</p>
        </div>
      </Link>
      <Link href="/capabilities" style={{'textDecoration':'none'}}>
        <div className="card card-hover" style={{'padding':'2rem','cursor':'pointer'}}>
          <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,var(--bg-tint),var(--bg-blue))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></div>
          <h3 style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','fontWeight':'700','marginBottom':'0.5rem','color':'var(--dark)'}}>Behavioral Intelligence</h3>
          <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Detect anomalous behavior patterns at network scale.</p>
        </div>
      </Link>
      <Link href="/use-cases/mule-network-detection" style={{'textDecoration':'none'}}>
        <div className="card card-hover" style={{'padding':'2rem','cursor':'pointer'}}>
          <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,var(--bg-tint),var(--bg-blue))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg></div>
          <h3 style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','fontWeight':'700','marginBottom':'0.5rem','color':'var(--dark)'}}>Mule Network Detection</h3>
          <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Identify coordinated mule account networks in real-time.</p>
        </div>
      </Link>
      <Link href="/capabilities" style={{'textDecoration':'none'}}>
        <div className="card card-hover" style={{'padding':'2rem','cursor':'pointer'}}>
          <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,var(--bg-tint),var(--bg-blue))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" x2="22" y1="8" y2="13"/><line x1="22" x2="17" y1="8" y2="13"/></svg></div>
          <h3 style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','fontWeight':'700','marginBottom':'0.5rem','color':'var(--dark)'}}>Synthetic Identity Detection</h3>
          <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Uncover synthetic identity fraud through graph intelligence.</p>
        </div>
      </Link>
      <Link href="/solutions/graph-intelligence" style={{'textDecoration':'none'}}>
        <div className="card card-hover" style={{'padding':'2rem','cursor':'pointer'}}>
          <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,var(--bg-tint),var(--bg-blue))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
          <h3 style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','fontWeight':'700','marginBottom':'0.5rem','color':'var(--dark)'}}>Graph Intelligence Engine</h3>
          <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Connect entities and uncover hidden relationships.</p>
        </div>
      </Link>
      <Link href="/solutions/investigation-intelligence" style={{'textDecoration':'none'}}>
        <div className="card card-hover" style={{'padding':'2rem','cursor':'pointer'}}>
          <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,var(--bg-tint),var(--bg-blue))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
          <h3 style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','fontWeight':'700','marginBottom':'0.5rem','color':'var(--dark)'}}>Investigation Intelligence</h3>
          <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Prioritize cases based on network-level risk.</p>
        </div>
      </Link>
      <Link href="/capabilities" style={{'textDecoration':'none'}}>
        <div className="card card-hover" style={{'padding':'2rem','cursor':'pointer'}}>
          <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,var(--bg-tint),var(--bg-blue))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg></div>
          <h3 style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','fontWeight':'700','marginBottom':'0.5rem','color':'var(--dark)'}}>Cross-System Intelligence</h3>
          <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Unify signals across fraud, AML and payments.</p>
        </div>
      </Link>
      <Link href="/platform" style={{'textDecoration':'none'}}>
        <div className="card card-hover" style={{'padding':'2rem','cursor':'pointer'}}>
          <div className="card-icon-sm" style={{'background':'linear-gradient(135deg,var(--bg-tint),var(--bg-blue))','border':'1px solid rgba(30,111,183,0.2)','borderRadius':'0.75rem'}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg></div>
          <h3 style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','fontWeight':'700','marginBottom':'0.5rem','color':'var(--dark)'}}>Explainable AI Governance</h3>
          <p style={{'fontSize':'0.813rem','color':'var(--body)'}}>Transparent AI decision-making with full auditability.</p>
        </div>
      </Link>
    </div>
    <div style={{'textAlign':'center','marginTop':'3rem'}}>
      <Link href="/capabilities" className="btn-secondary">
        Explore All Capabilities
        <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </Link>
    </div>
  </div>
</section>

{/* ─── WHY VERAFYE ───────────────────────────────────────────────────────── */}
{/* Task 3: Added Security & Trust link at bottom of this trust-building section */}
<section className="section-light" style={{'padding':'5rem 0'}}>
  <div className="container" style={{'maxWidth':'72rem'}}>
    <div style={{'textAlign':'center','marginBottom':'3.5rem'}}>
      <h2 style={{'fontSize':'clamp(1.25rem,3.5vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Why Verafye</h2>
      <p style={{'fontSize':'clamp(0.875rem,1.75vw,1.125rem)','color':'var(--body)','maxWidth':'44rem','margin':'1rem auto 0','lineHeight':1.75}}>Not another detection tool. Not a siloed point solution. Not a heavy Tier-1 platform. Verafye is the investigation layer that connects fraud and AML workflows - built for regulated payment teams that need to move faster without replacing their existing stack.</p>
    </div>
    <div className="grid-2" style={{'gap':'2.5rem 3rem'}}>
      <div style={{'display':'flex','gap':'1.5rem'}}>
        <div style={{'flexShrink':'0','width':'3rem','height':'3rem','borderRadius':'0.75rem','background':'var(--primary)','display':'flex','alignItems':'center','justifyContent':'center','boxShadow':'0 10px 15px -3px rgba(0,0,0,0.1)'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
        <div>
          <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Graph-native detection</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)'}}>Surfaces coordinated fraud networks and mule activity that transaction-level monitoring cannot see</p>
        </div>
      </div>
      <div style={{'display':'flex','gap':'1.5rem'}}>
        <div style={{'flexShrink':'0','width':'3rem','height':'3rem','borderRadius':'0.75rem','background':'var(--primary)','display':'flex','alignItems':'center','justifyContent':'center','boxShadow':'0 10px 15px -3px rgba(0,0,0,0.1)'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
        <div>
          <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Investigation intelligence</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)'}}>Faster case resolution with structured, audit-ready workflows that reduce analyst burden</p>
        </div>
      </div>
      <div style={{'display':'flex','gap':'1.5rem'}}>
        <div style={{'flexShrink':'0','width':'3rem','height':'3rem','borderRadius':'0.75rem','background':'var(--primary)','display':'flex','alignItems':'center','justifyContent':'center','boxShadow':'0 10px 15px -3px rgba(0,0,0,0.1)'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
        <div>
          <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Cross-system intelligence</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)'}}>Eliminates signal fragmentation across fraud, AML, and payments  -  one connected view of risk</p>
        </div>
      </div>
      <div style={{'display':'flex','gap':'1.5rem'}}>
        <div style={{'flexShrink':'0','width':'3rem','height':'3rem','borderRadius':'0.75rem','background':'var(--primary)','display':'flex','alignItems':'center','justifyContent':'center','boxShadow':'0 10px 15px -3px rgba(0,0,0,0.1)'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
        <div>
          <h3 style={{'fontSize':'clamp(1.125rem,2vw,1.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'0.5rem'}}>Explainable AI governance</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)'}}>Every decision is traceable and documented  -  supporting the auditability regulators and examiners expect</p>
        </div>
      </div>
    </div>

    {/* Task 3: Security & Trust link  -  placed naturally within this trust section */}
    <div style={{'textAlign':'center','marginTop':'3rem'}}>
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

{/* ─── RESULTS ───────────────────────────────────────────────────────────── */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>RESULTS</p>
      <h2 style={{'fontSize':'clamp(1.25rem,3.5vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Measurable Platform Outcomes</h2>
    </div>
    <div className="grid-5" style={{'maxWidth':'80rem','margin':'0 auto'}}>
      <div className="card card-elevated" style={{'padding':'1.5rem','textAlign':'center'}}>
        <div className="stat-value" style={{'marginBottom':'0.75rem'}}>30–50%</div>
        <p style={{'fontSize':'0.813rem','fontWeight':'500','color':'var(--body)'}}>Reduction in investigator workload</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.5rem','textAlign':'center'}}>
        <div className="stat-value" style={{'marginBottom':'0.75rem'}}>20–40%</div>
        <p style={{'fontSize':'0.813rem','fontWeight':'500','color':'var(--body)'}}>Earlier fraud network detection</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.5rem','textAlign':'center'}}>
        <div className="stat-value" style={{'marginBottom':'0.75rem'}}>25–40%</div>
        <p style={{'fontSize':'0.813rem','fontWeight':'500','color':'var(--body)'}}>Improved alert precision</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.5rem','textAlign':'center'}}>
        <div className="stat-value" style={{'marginBottom':'0.75rem'}}>Real-time</div>
        <p style={{'fontSize':'0.813rem','fontWeight':'500','color':'var(--body)'}}>Monitoring at scale</p>
      </div>
      <div className="card card-elevated" style={{'padding':'1.5rem','textAlign':'center'}}>
        <div className="stat-value" style={{'marginBottom':'0.75rem'}}>Enhanced</div>
        <p style={{'fontSize':'0.813rem','fontWeight':'500','color':'var(--body)'}}>Investigation transparency</p>
      </div>
    </div>
    <p style={{'textAlign':'center','fontSize':'0.813rem','color':'var(--body)','marginTop':'2.5rem','fontStyle':'italic','maxWidth':'48rem','marginLeft':'auto','marginRight':'auto'}}>Metrics presented as indicative outcomes based on platform capabilities.</p>
  </div>
</section>

{/* ─── PLATFORM ARCHITECTURE ─────────────────────────────────────────────── */}
{/* Unchanged  -  complex diagram block preserved exactly */}
<section style={{'padding':'5rem 0','background':'#fff','overflow':'hidden'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>PLATFORM ARCHITECTURE</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3.25rem)','fontWeight':'800','color':'var(--dark)','letterSpacing':'-0.035em','marginBottom':'1.25rem'}}>Intelligence-First Architecture</h2>
      <p style={{'fontSize':'clamp(0.938rem,1.8vw,1.125rem)','color':'var(--body)','maxWidth':'40rem','margin':'0 auto'}}>A layered intelligence architecture that processes signals through graph-native analysis to deliver actionable insights.</p>
    </div>

    {/* DESKTOP: Full horizontal flow diagram */}
    <div id="arch-diagram-desktop" style={{'maxWidth':'1200px','margin':'0 auto'}}>
      <div className="arch-flow" style={{'display':'flex','alignItems':'center','gap':'8px','justifyContent':'center'}}>

        {/* SIGNALS COLUMN */}
        <div style={{'width':'140px','flexShrink':'0'}}>
          <div style={{'fontSize':'10px','fontWeight':'600','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.1em','textAlign':'center','marginBottom':'12px'}}>Signals</div>
          <div style={{'display':'flex','flexDirection':'column','gap':'6px'}}>
            <div style={{'background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'6px','padding':'6px 12px','fontSize':'11px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center','transition':'all 0.2s','cursor':'default'}}>Transactions</div>
            <div style={{'background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'6px','padding':'6px 12px','fontSize':'11px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center','transition':'all 0.2s','cursor':'default'}}>Devices</div>
            <div style={{'background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'6px','padding':'6px 12px','fontSize':'11px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center','transition':'all 0.2s','cursor':'default'}}>Identity</div>
            <div style={{'background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'6px','padding':'6px 12px','fontSize':'11px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center','transition':'all 0.2s','cursor':'default'}}>Behavior</div>
            <div style={{'background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'6px','padding':'6px 12px','fontSize':'11px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center','transition':'all 0.2s','cursor':'default'}}>Payments</div>
            <div style={{'background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'6px','padding':'6px 12px','fontSize':'11px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center','transition':'all 0.2s','cursor':'default'}}>Sanctions</div>
          </div>
        </div>

        {/* CONNECTOR: Signals → Graph */}
        <div style={{'flexShrink':'0','display':'flex','alignItems':'center'}}>
          <svg width="40" height="120" style={{'overflow':'visible'}}>
            <defs>
              <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#CBD5E1"/><stop offset="100%" stopColor="#1E6FB7"/></linearGradient>
            </defs>
            <path d="M0,10 Q20,10 40,60" fill="none" stroke="url(#cg1)" strokeWidth="1.5" opacity="0.5"/>
            <path d="M0,30 Q20,30 40,60" fill="none" stroke="url(#cg1)" strokeWidth="1.5" opacity="0.5"/>
            <path d="M0,50 Q20,50 40,60" fill="none" stroke="url(#cg1)" strokeWidth="1.5" opacity="0.5"/>
            <path d="M0,70 Q20,70 40,60" fill="none" stroke="url(#cg1)" strokeWidth="1.5" opacity="0.5"/>
            <path d="M0,90 Q20,90 40,60" fill="none" stroke="url(#cg1)" strokeWidth="1.5" opacity="0.5"/>
            <path d="M0,110 Q20,110 40,60" fill="none" stroke="url(#cg1)" strokeWidth="1.5" opacity="0.5"/>
            <polygon points="38,55 44,60 38,65" fill="#1E6FB7"/>
          </svg>
        </div>

        {/* GRAPH INTELLIGENCE LAYER */}
        <div style={{'width':'200px','flexShrink':'0','position':'relative'}}>
          <div style={{'position':'absolute','inset':'-8px','background':'rgba(30,111,183,0.06)','borderRadius':'20px','filter':'blur(12px)'}}></div>
          <div style={{'position':'relative','background':'linear-gradient(180deg,#F0F7FF,#fff)','border':'2px solid rgba(30,111,183,0.18)','borderRadius':'16px','padding':'20px','boxShadow':'0 4px 24px rgba(30,111,183,0.06)'}}>
            <div style={{'fontSize':'10px','fontWeight':'600','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.08em','textAlign':'center','marginBottom':'16px'}}>Graph Intelligence Layer</div>
            <div style={{'textAlign':'center','marginBottom':'16px'}}>
              <svg viewBox="0 0 160 120" style={{'width':'100%','height':'auto','maxHeight':'140px'}}>
                <line x1="40" y1="30" x2="80" y2="60" stroke="#1E6FB7" strokeWidth="1.5" opacity="0.3"/>
                <line x1="120" y1="30" x2="80" y2="60" stroke="#1E6FB7" strokeWidth="1.5" opacity="0.3"/>
                <line x1="40" y1="90" x2="80" y2="60" stroke="#1E6FB7" strokeWidth="1.5" opacity="0.3"/>
                <line x1="120" y1="90" x2="80" y2="60" stroke="#1E6FB7" strokeWidth="1.5" opacity="0.3"/>
                <line x1="40" y1="30" x2="40" y2="90" stroke="#1E6FB7" strokeWidth="1" opacity="0.15"/>
                <line x1="120" y1="30" x2="120" y2="90" stroke="#1E6FB7" strokeWidth="1" opacity="0.15"/>
                <line x1="40" y1="30" x2="120" y2="90" stroke="#1E6FB7" strokeWidth="1" opacity="0.1"/>
                <line x1="120" y1="30" x2="40" y2="90" stroke="#1E6FB7" strokeWidth="1" opacity="0.1"/>
                <circle cx="80" cy="60" r="16" fill="#1E6FB7"/>
                <circle cx="80" cy="60" r="12" fill="#2B7EC5"/>
                <circle cx="80" cy="60" r="6" fill="#fff"/>
                <circle cx="40" cy="30" r="8" fill="#5AB2FF"/>
                <circle cx="120" cy="30" r="8" fill="#5AB2FF"/>
                <circle cx="40" cy="90" r="8" fill="#5AB2FF"/>
                <circle cx="120" cy="90" r="8" fill="#5AB2FF"/>
                <circle cx="80" cy="20" r="5" fill="#1E6FB7" opacity="0.4"/>
                <circle cx="80" cy="100" r="5" fill="#1E6FB7" opacity="0.4"/>
              </svg>
            </div>
            <div style={{'textAlign':'center'}}>
              <div style={{'fontSize':'14px','fontWeight':'600','color':'var(--dark)','letterSpacing':'-0.01em'}}>Entity Resolution</div>
              <div style={{'fontSize':'10px','color':'var(--muted)','marginTop':'4px'}}>Network Analysis · Link Discovery</div>
            </div>
          </div>
        </div>

        {/* ARROW: Graph → Detection */}
        <div style={{'flexShrink':'0','display':'flex','alignItems':'center','padding':'0 2px'}}>
          <svg width="50" height="20" style={{'overflow':'visible'}}>
            <defs><linearGradient id="cg2" x1="0%" y1="0%" x2="100%"><stop offset="0%" stopColor="#1E6FB7"/><stop offset="100%" stopColor="#5AB2FF"/></linearGradient></defs>
            <line x1="0" y1="10" x2="42" y2="10" stroke="url(#cg2)" strokeWidth="2"/>
            <polygon points="40,5 50,10 40,15" fill="#5AB2FF"/>
          </svg>
        </div>

        {/* DETECTION ENGINE */}
        <div style={{'width':'160px','flexShrink':'0','background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'12px','padding':'16px'}}>
          <div style={{'fontSize':'10px','fontWeight':'600','color':'#5AB2FF','textTransform':'uppercase','letterSpacing':'0.08em','textAlign':'center','marginBottom':'12px'}}>Detection Engine</div>
          <div style={{'display':'flex','flexDirection':'column','gap':'8px'}}>
            <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'8px','padding':'10px','display':'flex','alignItems':'center','gap':'8px'}}>
              <div style={{'width':'24px','height':'24px','borderRadius':'6px','background':'rgba(90,178,255,0.1)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5AB2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></div>
              <div style={{'fontSize':'11px','fontWeight':'500','color':'#334155'}}>Risk Scoring</div>
            </div>
            <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'8px','padding':'10px','display':'flex','alignItems':'center','gap':'8px'}}>
              <div style={{'width':'24px','height':'24px','borderRadius':'6px','background':'rgba(90,178,255,0.1)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5AB2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
              <div style={{'fontSize':'11px','fontWeight':'500','color':'#334155'}}>Rule Execution</div>
            </div>
            <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'8px','padding':'10px','display':'flex','alignItems':'center','gap':'8px'}}>
              <div style={{'width':'24px','height':'24px','borderRadius':'6px','background':'rgba(90,178,255,0.1)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5AB2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></div>
              <div style={{'fontSize':'11px','fontWeight':'500','color':'#334155'}}>Anomaly Detection</div>
            </div>
          </div>
        </div>

        {/* ARROW: Detection → Investigation */}
        <div style={{'flexShrink':'0','display':'flex','alignItems':'center','padding':'0 2px'}}>
          <svg width="50" height="20" style={{'overflow':'visible'}}>
            <defs><linearGradient id="cg3" x1="0%" y1="0%" x2="100%"><stop offset="0%" stopColor="#5AB2FF"/><stop offset="100%" stopColor="#1E6FB7"/></linearGradient></defs>
            <line x1="0" y1="10" x2="42" y2="10" stroke="url(#cg3)" strokeWidth="2"/>
            <polygon points="40,5 50,10 40,15" fill="#1E6FB7"/>
          </svg>
        </div>

        {/* INVESTIGATION INTELLIGENCE */}
        <div style={{'width':'160px','flexShrink':'0','background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'12px','padding':'16px'}}>
          <div style={{'fontSize':'10px','fontWeight':'600','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.08em','textAlign':'center','marginBottom':'12px'}}>Investigation Intelligence</div>
          <div style={{'display':'flex','flexDirection':'column','gap':'8px'}}>
            <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'8px','padding':'10px','display':'flex','alignItems':'center','gap':'8px'}}>
              <div style={{'width':'24px','height':'24px','borderRadius':'6px','background':'rgba(30,111,183,0.08)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg></div>
              <div style={{'fontSize':'11px','fontWeight':'500','color':'#334155'}}>Alert Clustering</div>
            </div>
            <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'8px','padding':'10px','display':'flex','alignItems':'center','gap':'8px'}}>
              <div style={{'width':'24px','height':'24px','borderRadius':'6px','background':'rgba(30,111,183,0.08)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
              <div style={{'fontSize':'11px','fontWeight':'500','color':'#334155'}}>Entity Correlation</div>
            </div>
            <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'8px','padding':'10px','display':'flex','alignItems':'center','gap':'8px'}}>
              <div style={{'width':'24px','height':'24px','borderRadius':'6px','background':'rgba(30,111,183,0.08)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg></div>
              <div style={{'fontSize':'11px','fontWeight':'500','color':'#334155'}}>Prioritization</div>
            </div>
          </div>
        </div>

        {/* ARROW: Investigation → Case Management */}
        <div style={{'flexShrink':'0','display':'flex','alignItems':'center','padding':'0 2px'}}>
          <svg width="50" height="20" style={{'overflow':'visible'}}>
            <defs><linearGradient id="cg4" x1="0%" y1="0%" x2="100%"><stop offset="0%" stopColor="#1E6FB7"/><stop offset="100%" stopColor="#475569"/></linearGradient></defs>
            <line x1="0" y1="10" x2="42" y2="10" stroke="url(#cg4)" strokeWidth="2"/>
            <polygon points="40,5 50,10 40,15" fill="#475569"/>
          </svg>
        </div>

        {/* CASE MANAGEMENT */}
        <div style={{'width':'160px','flexShrink':'0','background':'var(--bg-slate)','border':'1px solid var(--border)','borderRadius':'12px','padding':'16px'}}>
          <div style={{'fontSize':'10px','fontWeight':'600','color':'var(--muted-dark)','textTransform':'uppercase','letterSpacing':'0.08em','textAlign':'center','marginBottom':'12px'}}>Case Management</div>
          <div style={{'display':'flex','flexDirection':'column','gap':'8px'}}>
            <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'8px','padding':'10px','display':'flex','alignItems':'center','gap':'8px'}}>
              <div style={{'width':'24px','height':'24px','borderRadius':'6px','background':'rgba(71,85,105,0.08)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg></div>
              <div style={{'fontSize':'11px','fontWeight':'500','color':'#334155'}}>Case Workflow</div>
            </div>
            <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'8px','padding':'10px','display':'flex','alignItems':'center','gap':'8px'}}>
              <div style={{'width':'24px','height':'24px','borderRadius':'6px','background':'rgba(71,85,105,0.08)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg></div>
              <div style={{'fontSize':'11px','fontWeight':'500','color':'#334155'}}>Investigator Review</div>
            </div>
            <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'8px','padding':'10px','display':'flex','alignItems':'center','gap':'8px'}}>
              <div style={{'width':'24px','height':'24px','borderRadius':'6px','background':'rgba(71,85,105,0.08)','display':'flex','alignItems':'center','justifyContent':'center','flexShrink':'0'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></div>
              <div style={{'fontSize':'11px','fontWeight':'500','color':'#334155'}}>Escalation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow Direction label */}
      <div style={{'marginTop':'32px','display':'flex','alignItems':'center','justifyContent':'center','gap':'8px'}}>
        <div style={{'flex':'1','maxWidth':'100px','height':'1px','background':'linear-gradient(90deg,transparent,var(--border))'}}></div>
        <span style={{'fontSize':'10px','color':'var(--muted-light)','fontWeight':'500','textTransform':'uppercase','letterSpacing':'0.1em'}}>Data Flow Direction</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        <div style={{'flex':'1','maxWidth':'100px','height':'1px','background':'linear-gradient(90deg,var(--border),transparent)'}}></div>
      </div>
    </div>

    {/* MOBILE / TABLET: Compact grid version */}
    <div className="arch-mobile" style={{'display':'none'}}>
      <div style={{'background':'var(--bg-slate)','borderRadius':'16px','border':'1px solid var(--border)','padding':'24px'}}>
        <div style={{'display':'grid','gridTemplateColumns':'repeat(5,1fr)','gap':'12px','alignItems':'start'}}>
          <div>
            <div style={{'fontSize':'9px','fontWeight':'600','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.08em','textAlign':'center','marginBottom':'8px'}}>Signals</div>
            <div style={{'display':'flex','flexDirection':'column','gap':'4px'}}>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'4px 6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Trans.</div>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'4px 6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Devices</div>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'4px 6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Identity</div>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'4px 6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Behavior</div>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'4px 6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Payments</div>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'4px 6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Sanctions</div>
            </div>
          </div>
          <div>
            <div style={{'fontSize':'9px','fontWeight':'600','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.08em','textAlign':'center','marginBottom':'8px'}}>Graph Intel</div>
            <div style={{'background':'linear-gradient(180deg,var(--bg-blue),#fff)','border':'2px solid rgba(30,111,183,0.15)','borderRadius':'10px','padding':'12px','textAlign':'center'}}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{'marginBottom':'4px'}}><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
              <div style={{'fontSize':'9px','color':'var(--muted-dark)'}}>Entity Resolution</div>
            </div>
          </div>
          <div>
            <div style={{'fontSize':'9px','fontWeight':'600','color':'#5AB2FF','textTransform':'uppercase','letterSpacing':'0.08em','textAlign':'center','marginBottom':'8px'}}>Detection</div>
            <div style={{'display':'flex','flexDirection':'column','gap':'4px'}}>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Risk Scoring</div>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Rules</div>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Anomaly</div>
            </div>
          </div>
          <div>
            <div style={{'fontSize':'9px','fontWeight':'600','color':'var(--primary)','textTransform':'uppercase','letterSpacing':'0.08em','textAlign':'center','marginBottom':'8px'}}>Investigation</div>
            <div style={{'display':'flex','flexDirection':'column','gap':'4px'}}>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Clustering</div>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Correlation</div>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Priority</div>
            </div>
          </div>
          <div>
            <div style={{'fontSize':'9px','fontWeight':'600','color':'var(--muted-dark)','textTransform':'uppercase','letterSpacing':'0.08em','textAlign':'center','marginBottom':'8px'}}>Case Mgmt</div>
            <div style={{'display':'flex','flexDirection':'column','gap':'4px'}}>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Workflow</div>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Review</div>
              <div style={{'background':'#fff','border':'1px solid var(--border)','borderRadius':'4px','padding':'6px','fontSize':'9px','fontWeight':'500','color':'var(--muted-dark)','textAlign':'center'}}>Escalation</div>
            </div>
          </div>
        </div>
        <div style={{'marginTop':'16px','display':'flex','alignItems':'center','justifyContent':'center'}}>
          <span style={{'fontSize':'9px','color':'var(--muted-light)','fontWeight':'500'}}>Data Flow</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--muted-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{'marginLeft':'4px'}}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ─── CUSTOMER SEGMENTS ─────────────────────────────────────────────────── */}
{/* Task 2: Cards now link to industry pages. Task 5: CTA copy updated. */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>CUSTOMER SEGMENTS</p>
      <h2 style={{'fontSize':'clamp(1.25rem,3.5vw,3rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Built for Regulated Payment Platforms and the Teams That Operate Them</h2>
    </div>
    <div className="grid-2" style={{'maxWidth':'72rem','margin':'0 auto'}}>

      <Link href="/industries/payment-processors-psps-payfacs" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>Payment Processors / PSPs / PayFacs</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Unify fraud and AML investigations across high-volume, multi-merchant payment operations - from transaction anomalies to chargeback patterns and card network obligations</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View Payments solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      <Link href="/industries/msb" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><circle cx="19" cy="7" r="3"/><circle cx="5" cy="17" r="3"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>MSBs / Money Services Businesses</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Manage AML-heavy investigations across cross-border, high-velocity money movement with signal aggregation, case workflows, and investigation prioritisation</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View MSB solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      <Link href="/industries/fintech-platforms" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>FinTech Platforms</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Scale fraud, risk, and AML investigation operations across multi-product platforms without Tier-1 implementation overhead</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View FinTech solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      <Link href="/industries/lenders-consumer-finance" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>Lending &amp; Consumer Finance</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Investigate borrower risk, identity risk, and account fraud across the lending lifecycle - from origination through repayment - with AI-assisted decision support</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View Lenders solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      <Link href="/industries/digital-banks" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><path d="M7 15h.01"/><path d="M11 15h2"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>Digital Banks &amp; Regional Institutions</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Scale fraud and AML investigation operations across digital-first banks, regional institutions, and credit unions without scaling analyst headcount</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View Digital Banks solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

      <Link href="/industries/banks" style={{'textDecoration':'none','display':'block'}}>
        <div className="card card-elevated card-hover" style={{'padding':'2.5rem','cursor':'pointer','height':'100%'}}>
          <div className="card-icon gradient-bg-4" style={{'width':'5rem','height':'5rem','borderRadius':'1rem'}}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></div>
          <h3 style={{'fontSize':'clamp(1.125rem,2.5vw,1.875rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>Banks</h3>
          <p style={{'fontSize':'clamp(0.875rem,1.5vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem'}}>Connect fraud and AML investigation workflows across banking risk teams - with unified context, case orchestration, and decision support aligned with regulatory scrutiny</p>
          <span style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','display':'inline-flex','alignItems':'center','gap':'0.3rem'}}>
            View Banks solution
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>

    </div>

    {/* Task 5: Replaced "Learn More About Our Customers" with specific destination label */}
    <div style={{'textAlign':'c