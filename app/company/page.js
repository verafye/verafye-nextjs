import Link from 'next/link';

export const metadata = {
  title: { absolute: "Meet the Financial Crime Intelligence Experts" },
  description: "Learn how Verafye helps fraud, AML and payments teams uncover hidden financial crime using graph-native Network Risk Intelligence.",
  keywords: [
    "financial crime technology company",
    "network risk intelligence company",
    "fraud investigation platform provider",
    "aml technology company",
    "compliance technology",
    "risk intelligence solutions",
    "graph analytics company",
  ],
  openGraph: {
    title: "Meet the Financial Crime Intelligence Experts",
    description: "Learn how Verafye helps fraud, AML and payments teams uncover hidden financial crime using graph-native Network Risk Intelligence.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Meet the Financial Crime Intelligence Experts",
    description: "Learn how Verafye helps fraud, AML and payments teams uncover hidden financial crime using graph-native Network Risk Intelligence.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/company',
  },
};

export default function Page() {
  return (
    <>
<section style={{'background':'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)','padding':'4rem 0'}}>
  <div className="container" style={{'maxWidth':'56rem','textAlign':'center'}}>
    <p className="eyebrow animate-fade-up" style={{'marginBottom':'1.25rem'}}>Company</p>
    <h1 className="animate-fade-up delay-100" style={{'fontSize':'clamp(1.875rem,5vw,3.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'2rem','letterSpacing':'-0.025em'}}>Building Network Risk Intelligence for Regulated Financial Platforms</h1>
    <p className="animate-fade-up delay-200" style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)','maxWidth':'48rem','margin':'0 auto'}}>Verafye helps fraud, AML, and risk teams connect alerts, explain risk, and close cases faster - without enterprise-heavy complexity.</p>
  </div>
</section>

{/* NAMING STORY */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'maxWidth':'72rem','margin':'0 auto','display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>What's in a Name</p>
        <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.5rem','letterSpacing':'-0.025em'}}>Truth, Made Actionable</h2>
        <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75','marginBottom':'1.25rem'}}>The word <em>Vera</em> is Latin for truth.</p>
        <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75','marginBottom':'1.25rem'}}>In financial crime, where signals are obscured across identities, transactions, and systems, truth is not abstract. It is the outcome institutions rely on.</p>
        <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75','marginBottom':'1.25rem'}}><em>Fye</em> reflects transformation - to identify, clarify, and make something actionable.</p>
        <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75'}}>Verafye is built to do exactly that: turn fragmented signals into clear, actionable intelligence.</p>
      </div>
      <div style={{'borderRadius':'1.5rem','padding':'1rem 0.75rem','background':'#F8FBFF','border':'1px solid rgba(30,111,183,0.1)','boxShadow':'0 4px 24px rgba(30,111,183,0.07)','overflow':'hidden'}}>
        <svg viewBox="0 0 560 415" fill="none" xmlns="http://www.w3.org/2000/svg" style={{'width':'100%','display':'block'}} role="img" aria-label="Verafye Connected-Risk Intelligence platform connecting fragmented risk signals into explainable case outcomes">
          <defs>
            <radialGradient id="wn_amb" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1E6FB7" stopOpacity="0.09"/>
              <stop offset="100%" stopColor="#1E6FB7" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="wn_blu" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B8FE0"/>
              <stop offset="100%" stopColor="#1A65A8"/>
            </linearGradient>
            <filter id="wn_c" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="3" stdDeviation="8" floodColor="#1E6FB7" floodOpacity="0.3"/>
            </filter>
            <filter id="wn_p" x="-10%" y="-12%" width="120%" height="135%">
              <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#000000" floodOpacity="0.06"/>
            </filter>
            <filter id="wn_o" x="-10%" y="-12%" width="125%" height="135%">
              <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#1E6FB7" floodOpacity="0.08"/>
            </filter>
          </defs>

          {/* Ambient glow at core */}
          <circle cx="280" cy="215" r="140" fill="url(#wn_amb)"/>

          {/* ── FLOW LINES: signals → core ── */}
          <path d="M140 85  C190 85,  248 148, 248 215" stroke="#DC2626" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="5,4"/>
          <path d="M140 137 C186 137, 248 175, 248 215" stroke="#D97706" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="5,4"/>
          <path d="M140 189 C182 189, 248 200, 248 215" stroke="#1E6FB7" strokeWidth="1.5" strokeOpacity="0.22" strokeDasharray="5,4"/>
          <path d="M140 241 C182 241, 248 230, 248 215" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="5,4"/>
          <path d="M140 293 C186 293, 248 255, 248 215" stroke="#0891B2" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="5,4"/>
          <path d="M140 345 C190 345, 248 282, 248 215" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="5,4"/>

          {/* ── FLOW LINES: core → outputs ── */}
          <path d="M312 215 C354 215, 374 145, 400 110" stroke="#1E6FB7" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="5,4"/>
          <path d="M312 215 C352 215, 370 190, 400 180" stroke="#1E6FB7" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="5,4"/>
          <path d="M312 215 C352 215, 370 240, 400 250" stroke="#1E6FB7" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="5,4"/>
          <path d="M312 215 C354 215, 374 285, 400 320" stroke="#1E6FB7" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="5,4"/>

          {/* ── VERAFYE CORE HUB ── */}
          <circle cx="280" cy="215" r="76" stroke="#1E6FB7" strokeWidth="1" strokeOpacity="0.08" fill="none"/>
          <circle cx="280" cy="215" r="60" stroke="#1E6FB7" strokeWidth="1.5" strokeOpacity="0.15" fill="none" strokeDasharray="8,6"/>
          <circle cx="280" cy="215" r="46" fill="rgba(30,111,183,0.05)" stroke="#1E6FB7" strokeWidth="2" strokeOpacity="0.2"/>
          <circle cx="280" cy="215" r="32" fill="url(#wn_blu)" filter="url(#wn_c)"/>
          <path d="M269 215 L278 224 L294 203" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="280" y="264" textAnchor="middle" fontSize="9" fill="#1E6FB7" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" letterSpacing="0.1em">VERAFYE</text>
          <text x="280" y="277" textAnchor="middle" fontSize="7.5" fill="#64748B" fontFamily="system-ui,-apple-system,sans-serif" letterSpacing="0.04em">Risk Intelligence Platform</text>

          {/* ── SIGNAL SOURCE PILLS ── */}
          <text x="72" y="26" textAnchor="middle" fontSize="8" fill="#94A3B8" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" letterSpacing="0.09em">SIGNAL SOURCES</text>

          {/* Fraud - y=63 */}
          <rect x="5" y="63" width="135" height="44" rx="9" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" filter="url(#wn_p)"/>
          <rect x="5" y="63" width="3.5" height="44" rx="1.5" fill="#DC2626" opacity="0.75"/>
          <circle cx="20" cy="85" r="5" fill="#DC2626" fillOpacity="0.12"/>
          <circle cx="20" cy="85" r="2.5" fill="#DC2626"/>
          <text x="32" y="80" fontSize="9.5" fill="#991B1B" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700">Fraud</text>
          <text x="32" y="94" fontSize="8" fill="#6B7280" fontFamily="system-ui,-apple-system,sans-serif">Transaction signals</text>
          <circle cx="133" cy="71" r="3" fill="#DC2626" fillOpacity="0.3"/>

          {/* AML - y=115 */}
          <rect x="5" y="115" width="135" height="44" rx="9" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" filter="url(#wn_p)"/>
          <rect x="5" y="115" width="3.5" height="44" rx="1.5" fill="#D97706" opacity="0.75"/>
          <circle cx="20" cy="137" r="5" fill="#D97706" fillOpacity="0.12"/>
          <circle cx="20" cy="137" r="2.5" fill="#D97706"/>
          <text x="32" y="132" fontSize="9.5" fill="#92400E" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700">AML</text>
          <text x="32" y="146" fontSize="8" fill="#6B7280" fontFamily="system-ui,-apple-system,sans-serif">Monitoring alerts</text>
          <circle cx="133" cy="123" r="3" fill="#D97706" fillOpacity="0.3"/>

          {/* Payments - y=167 */}
          <rect x="5" y="167" width="135" height="44" rx="9" fill="#EFF6FF" stroke="rgba(30,111,183,0.2)" strokeWidth="1" filter="url(#wn_p)"/>
          <rect x="5" y="167" width="3.5" height="44" rx="1.5" fill="#1E6FB7" opacity="0.75"/>
          <circle cx="20" cy="189" r="5" fill="#1E6FB7" fillOpacity="0.12"/>
          <circle cx="20" cy="189" r="2.5" fill="#1E6FB7"/>
          <text x="32" y="184" fontSize="9.5" fill="#1E4D80" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700">Payments</text>
          <text x="32" y="198" fontSize="8" fill="#6B7280" fontFamily="system-ui,-apple-system,sans-serif">Flow patterns</text>
          <circle cx="133" cy="175" r="3" fill="#1E6FB7" fillOpacity="0.3"/>

          {/* Identity - y=219 */}
          <rect x="5" y="219" width="135" height="44" rx="9" fill="#F5F3FF" stroke="#DDD6FE" strokeWidth="1" filter="url(#wn_p)"/>
          <rect x="5" y="219" width="3.5" height="44" rx="1.5" fill="#7C3AED" opacity="0.75"/>
          <circle cx="20" cy="241" r="5" fill="#7C3AED" fillOpacity="0.12"/>
          <circle cx="20" cy="241" r="2.5" fill="#7C3AED"/>
          <text x="32" y="236" fontSize="9.5" fill="#4C1D95" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700">Identity</text>
          <text x="32" y="250" fontSize="8" fill="#6B7280" fontFamily="system-ui,-apple-system,sans-serif">KYC / KYB signals</text>
          <circle cx="133" cy="227" r="3" fill="#7C3AED" fillOpacity="0.3"/>

          {/* Device - y=271 */}
          <rect x="5" y="271" width="135" height="44" rx="9" fill="#ECFEFF" stroke="#A5F3FC" strokeWidth="1" filter="url(#wn_p)"/>
          <rect x="5" y="271" width="3.5" height="44" rx="1.5" fill="#0891B2" opacity="0.75"/>
          <circle cx="20" cy="293" r="5" fill="#0891B2" fillOpacity="0.12"/>
          <circle cx="20" cy="293" r="2.5" fill="#0891B2"/>
          <text x="32" y="288" fontSize="9.5" fill="#164E63" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700">Device</text>
          <text x="32" y="302" fontSize="8" fill="#6B7280" fontFamily="system-ui,-apple-system,sans-serif">{'Fingerprint & risk'}</text>
          <circle cx="133" cy="279" r="3" fill="#0891B2" fillOpacity="0.3"/>

          {/* Behavior - y=323 */}
          <rect x="5" y="323" width="135" height="44" rx="9" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" filter="url(#wn_p)"/>
          <rect x="5" y="323" width="3.5" height="44" rx="1.5" fill="#059669" opacity="0.75"/>
          <circle cx="20" cy="345" r="5" fill="#059669" fillOpacity="0.12"/>
          <circle cx="20" cy="345" r="2.5" fill="#059669"/>
          <text x="32" y="340" fontSize="9.5" fill="#064E3B" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700">Behavior</text>
          <text x="32" y="354" fontSize="8" fill="#6B7280" fontFamily="system-ui,-apple-system,sans-serif">Pattern analytics</text>
          <circle cx="133" cy="331" r="3" fill="#059669" fillOpacity="0.3"/>

          {/* ── INTELLIGENCE OUTPUT CARDS ── */}
          <text x="477" y="26" textAnchor="middle" fontSize="8" fill="#94A3B8" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" letterSpacing="0.09em">INTELLIGENCE OUTPUTS</text>

          {/* Graph Intelligence - y=81 center=110 */}
          <rect x="400" y="81" width="155" height="58" rx="10" fill="#ffffff" stroke="rgba(30,111,183,0.12)" strokeWidth="1" filter="url(#wn_o)"/>
          <rect x="408" y="90" width="28" height="28" rx="7" fill="rgba(30,111,183,0.08)" stroke="rgba(30,111,183,0.15)" strokeWidth="1"/>
          <circle cx="418" cy="101" r="3" fill="#1E6FB7"/>
          <circle cx="426" cy="96" r="2.5" fill="#3B82F6"/>
          <circle cx="427" cy="107" r="2.5" fill="#3B82F6"/>
          <line x1="421" y1="101" x2="423" y2="97" stroke="#1E6FB7" strokeWidth="1.3"/>
          <line x1="421" y1="101" x2="424" y2="106" stroke="#1E6FB7" strokeWidth="1.3"/>
          <text x="444" y="101" fontSize="9.5" fill="#0F172A" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700">Graph Intelligence</text>
          <text x="444" y="115" fontSize="8" fill="#64748B" fontFamily="system-ui,-apple-system,sans-serif">{'Entity & network detection'}</text>
          <circle cx="548" cy="89" r="3.5" fill="#1E6FB7" fillOpacity="0.2" stroke="#1E6FB7" strokeWidth="0.75" strokeOpacity="0.4"/>

          {/* Case Context - y=151 center=180 */}
          <rect x="400" y="151" width="155" height="58" rx="10" fill="#ffffff" stroke="rgba(30,111,183,0.12)" strokeWidth="1" filter="url(#wn_o)"/>
          <rect x="408" y="160" width="28" height="28" rx="7" fill="rgba(124,58,237,0.07)" stroke="rgba(124,58,237,0.15)" strokeWidth="1"/>
          <rect x="415" y="165" width="14" height="17" rx="2" fill="none" stroke="#7C3AED" strokeWidth="1.5"/>
          <line x1="418" y1="171" x2="425" y2="171" stroke="#7C3AED" strokeWidth="1"/>
          <line x1="418" y1="175" x2="425" y2="175" stroke="#7C3AED" strokeWidth="1"/>
          <line x1="418" y1="179" x2="423" y2="179" stroke="#7C3AED" strokeWidth="1"/>
          <text x="444" y="171" fontSize="9.5" fill="#0F172A" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700">Case Context</text>
          <text x="444" y="185" fontSize="8" fill="#64748B" fontFamily="system-ui,-apple-system,sans-serif">Investigation summaries</text>
          <circle cx="548" cy="159" r="3.5" fill="#7C3AED" fillOpacity="0.2" stroke="#7C3AED" strokeWidth="0.75" strokeOpacity="0.4"/>

          {/* Decision Support - y=221 center=250 */}
          <rect x="400" y="221" width="155" height="58" rx="10" fill="#ffffff" stroke="rgba(30,111,183,0.12)" strokeWidth="1" filter="url(#wn_o)"/>
          <rect x="408" y="230" width="28" height="28" rx="7" fill="rgba(5,150,105,0.07)" stroke="rgba(5,150,105,0.14)" strokeWidth="1"/>
          <path d="M415 244 L420 249 L431 237" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <text x="444" y="241" fontSize="9.5" fill="#0F172A" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700">Decision Support</text>
          <text x="444" y="255" fontSize="8" fill="#64748B" fontFamily="system-ui,-apple-system,sans-serif">Explainable risk scoring</text>
          <circle cx="548" cy="229" r="3.5" fill="#059669" fillOpacity="0.2" stroke="#059669" strokeWidth="0.75" strokeOpacity="0.4"/>

          {/* Audit Trail - y=291 center=320 */}
          <rect x="400" y="291" width="155" height="58" rx="10" fill="#ffffff" stroke="rgba(30,111,183,0.12)" strokeWidth="1" filter="url(#wn_o)"/>
          <rect x="408" y="300" width="28" height="28" rx="7" fill="rgba(8,145,178,0.07)" stroke="rgba(8,145,178,0.14)" strokeWidth="1"/>
          <line x1="415" y1="308" x2="431" y2="308" stroke="#0891B2" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="415" y1="313" x2="431" y2="313" stroke="#0891B2" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="415" y1="318" x2="425" y2="318" stroke="#0891B2" strokeWidth="1.8" strokeLinecap="round"/>
          <text x="444" y="311" fontSize="9.5" fill="#0F172A" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700">Audit Trail</text>
          <text x="444" y="325" fontSize="8" fill="#64748B" fontFamily="system-ui,-apple-system,sans-serif">Traceable case records</text>
          <circle cx="548" cy="299" r="3.5" fill="#0891B2" fillOpacity="0.2" stroke="#0891B2" strokeWidth="0.75" strokeOpacity="0.4"/>

          {/* ── STATUS BAR ── */}
          <rect x="5" y="380" width="550" height="30" rx="8" fill="rgba(30,111,183,0.04)" stroke="rgba(30,111,183,0.1)" strokeWidth="1"/>
          <circle cx="22" cy="395" r="4" fill="#1E6FB7" fillOpacity="0.15"/>
          <circle cx="22" cy="395" r="2.2" fill="#1E6FB7"/>
          <text x="33" y="399" fontSize="8" fill="#1E6FB7" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600">6 signal types connected</text>
          <line x1="157" y1="385" x2="157" y2="405" stroke="rgba(30,111,183,0.15)" strokeWidth="1"/>
          <text x="167" y="399" fontSize="8" fill="#64748B" fontFamily="system-ui,-apple-system,sans-serif">4 intelligence outputs</text>
          <line x1="281" y1="385" x2="281" y2="405" stroke="rgba(30,111,183,0.15)" strokeWidth="1"/>
          <text x="291" y="399" fontSize="8" fill="#64748B" fontFamily="system-ui,-apple-system,sans-serif">Investigation ready</text>
          <line x1="397" y1="385" x2="397" y2="405" stroke="rgba(30,111,183,0.15)" strokeWidth="1"/>
          <text x="407" y="399" fontSize="8" fill="#64748B" fontFamily="system-ui,-apple-system,sans-serif">Audit-trail complete</text>
        </svg>
      </div>
    </div>
  </div>
</section>

{/* WHY VERAFYE EXISTS */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container">
    <div style={{'maxWidth':'72rem','margin':'0 auto'}}>
      <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Why Verafye Exists</p>
        <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.75rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Built for Regulated Payment Platforms Operating Under Real Compliance Pressure</h2>
      </div>
      <div style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'3rem','alignItems':'start'}}>
        <div>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75','marginBottom':'1.25rem'}}>Regulated payment platforms, fintechs, and financial institutions operate across fragmented fraud, AML, payment, identity, and case systems - each generating signals that rarely reach investigators in a connected, actionable form.</p>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75','marginBottom':'1.25rem'}}>Lean risk teams face growing alert volumes, rising regulatory expectations, and the pressure to investigate faster and more thoroughly - without the time or resources to manually assemble context from disconnected systems.</p>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','fontWeight':'600','color':'var(--dark)','lineHeight':'1.75'}}>Verafye was built to change that.</p>
        </div>
        <div>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75','marginBottom':'1.25rem'}}>Verafye connects signals from existing fraud, AML, payment, identity, device, and case systems into investigation-ready workflows built on the Verafye platform — giving fraud and AML teams a connected investigation workspace with network-level detection, structured case management, and full audit trails.</p>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75'}}>This is not a point solution. Verafye is a Connected-Risk Intelligence platform built for regulated payment platforms and financial institutions operating under real compliance pressure.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* VISION AND MISSION */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'maxWidth':'72rem','margin':'0 auto'}}>
      <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Vision &amp; Mission</p>
        <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.75rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>What We Are Building Toward</h2>
      </div>
      <div style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'2rem'}}>
        <div className="card card-elevated" style={{'padding':'2.5rem'}}>
          <p style={{'fontSize':'0.6875rem','fontWeight':'700','color':'var(--secondary)','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.75rem'}}>Vision</p>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--dark)','lineHeight':'1.75','fontWeight':'500'}}>To enable regulated financial institutions to operate with clarity, confidence, and control in an increasingly complex financial crime landscape.</p>
        </div>
        <div className="card card-elevated" style={{'padding':'2.5rem'}}>
          <p style={{'fontSize':'0.6875rem','fontWeight':'700','color':'var(--secondary)','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.75rem'}}>Mission</p>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--dark)','lineHeight':'1.75','fontWeight':'500'}}>To build Connected-Risk Intelligence that helps fraud, AML, and payments teams turn fragmented signals into traceable, evidence-backed financial crime decisions.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* VALUES */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Our Values</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)'}}>What Drives Us</h2>
    </div>
    <div className="grid-3" style={{'maxWidth':'72rem','margin':'0 auto'}}>
      <div className="card" style={{'padding':'2.5rem'}}>
        <div className="card-icon gradient-bg-1"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg></div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'700','marginBottom':'0.75rem'}}>Transparency</h3>
        <p style={{'color':'var(--body)'}}>We believe AI-driven decisions should be explainable and auditable. Every detection, score, and recommendation comes with transparent reasoning.</p>
      </div>
      <div className="card" style={{'padding':'2.5rem'}}>
        <div className="card-icon gradient-bg-2"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg></div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'700','marginBottom':'0.75rem'}}>Innovation</h3>
        <p style={{'color':'var(--body)'}}>We apply graph intelligence, AI, and cross-system signal correlation to financial crime detection - building connected risk intelligence that improves as the problems it addresses evolve.</p>
      </div>
      <div className="card" style={{'padding':'2.5rem'}}>
        <div className="card-icon gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'700','marginBottom':'0.75rem'}}>Trust</h3>
        <p style={{'color':'var(--body)'}}>Financial institutions trust us with their most sensitive data and critical operations. We take that responsibility seriously in everything we build.</p>
      </div>
    </div>
  </div>
</section>

{/* LEADERSHIP */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Leadership</p>
      <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.75rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em','marginBottom':'1rem'}}>Leadership Team</h2>
      <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.0625rem)','color':'var(--body)','lineHeight':'1.7'}}>Built by operators across payments, banking infrastructure, and large-scale financial platforms.</p>
    </div>
    <div style={{'display':'grid','gridTemplateColumns':'repeat(4,1fr)','gap':'1.5rem','maxWidth':'72rem','margin':'0 auto'}} className="team-grid-4">
      <style>{`
        @media (max-width: 900px) { .team-grid-4 { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .team-grid-4 { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; } }
      `}</style>
      <div className="card card-elevated" style={{'padding':'2rem','textAlign':'center'}}>
        <div style={{'width':'5rem','height':'5rem','borderRadius':'50%','overflow':'hidden','margin':'0 auto 1.25rem','border':'2px solid rgba(30,111,183,0.15)','flexShrink':'0'}}>
          <img src="/images/team/abhishek-tuppada.jpeg" alt="Abhishek Tuppada - Founder, Verafye" style={{'width':'100%','height':'100%','objectFit':'cover','objectPosition':'center top'}} />
        </div>
        <div style={{'display':'flex','alignItems':'center','justifyContent':'center','gap':'0.4rem','marginBottom':'0.25rem'}}>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','margin':'0'}}>Abhishek Tuppada</h3>
          <a href="https://www.linkedin.com/in/abhishektuppada/" target="_blank" rel="noopener noreferrer" aria-label="View Abhishek Tuppada on LinkedIn" style={{'display':'flex','alignItems':'center','color':'#0A66C2','flexShrink':'0'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <p style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','marginBottom':'0.875rem'}}>Co-Founder &amp; CEO</p>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':'1.6'}}>20+ years in fintech and payments. Serial IP builder across regulated markets.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem','textAlign':'center'}}>
        <div style={{'width':'5rem','height':'5rem','borderRadius':'50%','overflow':'hidden','margin':'0 auto 1.25rem','border':'2px solid rgba(30,111,183,0.15)','flexShrink':'0'}}>
          <img src="/images/team/vasuki-raghavendra.jpeg" alt="Vasuki Raghavendra - Founder, Verafye" style={{'width':'100%','height':'100%','objectFit':'cover','objectPosition':'center top'}} />
        </div>
        <div style={{'display':'flex','alignItems':'center','justifyContent':'center','gap':'0.4rem','marginBottom':'0.25rem'}}>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','margin':'0'}}>Vasuki Raghavendra</h3>
          <a href="https://www.linkedin.com/in/vasuki-br/" target="_blank" rel="noopener noreferrer" aria-label="View Vasuki Raghavendra on LinkedIn" style={{'display':'flex','alignItems':'center','color':'#0A66C2','flexShrink':'0'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <p style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','marginBottom':'0.875rem'}}>Co-Founder &amp; CPO</p>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':'1.6'}}>Pioneered early digital wallet infrastructure and large-scale payment ecosystems.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem','textAlign':'center'}}>
        <div style={{'width':'5rem','height':'5rem','borderRadius':'50%','overflow':'hidden','margin':'0 auto 1.25rem','border':'2px solid rgba(30,111,183,0.15)','flexShrink':'0'}}>
          <img src="/images/team/pradeep-jalisatgi.jpeg" alt="Pradeep Jalisatgi - Founder, Verafye" style={{'width':'100%','height':'100%','objectFit':'cover','objectPosition':'center top'}} />
        </div>
        <div style={{'display':'flex','alignItems':'center','justifyContent':'center','gap':'0.4rem','marginBottom':'0.25rem'}}>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','margin':'0'}}>Pradeep Jalisatgi</h3>
          <a href="https://www.linkedin.com/in/pradeep-jalisatgi/" target="_blank" rel="noopener noreferrer" aria-label="View Pradeep Jalisatgi on LinkedIn" style={{'display':'flex','alignItems':'center','color':'#0A66C2','flexShrink':'0'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <p style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','marginBottom':'0.875rem'}}>Co-Founder &amp; CTO</p>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':'1.6'}}>Architected real-time, high-scale systems across global technology environments.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem','textAlign':'center'}}>
        <div style={{'width':'5rem','height':'5rem','borderRadius':'50%','overflow':'hidden','margin':'0 auto 1.25rem','border':'2px solid rgba(30,111,183,0.15)','flexShrink':'0'}}>
          <img src="/images/team/sudeendra-sadashiv.jpeg" alt="Sudeendra Sadashiva - Founder, Verafye" style={{'width':'100%','height':'100%','objectFit':'cover','objectPosition':'center top'}} />
        </div>
        <div style={{'display':'flex','alignItems':'center','justifyContent':'center','gap':'0.4rem','marginBottom':'0.25rem'}}>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','margin':'0'}}>Sudeendra Sadashiva</h3>
          <a href="https://www.linkedin.com/in/sudeendra-sadashiva/" target="_blank" rel="noopener noreferrer" aria-label="View Sudeendra Sadashiva on LinkedIn" style={{'display':'flex','alignItems':'center','color':'#0A66C2','flexShrink':'0'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <p style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','marginBottom':'0.875rem'}}>Co-Founder &amp; COO</p>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':'1.6'}}>Built and operated large-scale payment ecosystems across Southeast Asia.</p>
      </div>
    </div>
  </div>
</section>

{/* STRATEGIC ADVISORS */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Strategic Advisors</p>
      <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.25rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Experienced operators behind the platform</h2>
    </div>
    {/* Advisor cards grid */}
    <div style={{'display':'grid','gridTemplateColumns':'repeat(auto-fit,minmax(20rem,1fr))','gap':'1.5rem','maxWidth':'56rem','margin':'0 auto'}}>

      {/* Aditya Menon */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','alignItems':'flex-start','gap':'1.25rem'}}>
          <div style={{'width':'3rem','height':'3rem','borderRadius':'50%','background':'linear-gradient(135deg,var(--primary),var(--accent))','display':'flex','alignItems':'center','justifyContent':'center','fontSize':'0.9rem','fontWeight':'700','color':'#fff','flexShrink':'0'}}>AM</div>
          <div>
            <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.2rem'}}>Aditya Menon</h3>
            <p style={{'fontSize':'0.75rem','fontWeight':'600','color':'var(--primary)','marginBottom':'0.125rem'}}>Strategic Advisor</p>
            <p style={{'fontSize':'0.6875rem','color':'var(--muted)','marginBottom':'0.75rem','textTransform':'uppercase','letterSpacing':'0.05em'}}>Payments · Digital Banking · Transaction Banking</p>
            <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':'1.65'}}>Former Managing Director, Global Digital Strategy at Citi. Former Global Head of Product Management at Obopay. CEO, Tallyx.</p>
          </div>
        </div>
      </div>

      {/* Ryan Linton */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','alignItems':'flex-start','gap':'1.25rem'}}>
          <div style={{'width':'3rem','height':'3rem','borderRadius':'50%','background':'linear-gradient(135deg,var(--primary),var(--accent))','display':'flex','alignItems':'center','justifyContent':'center','fontSize':'0.9rem','fontWeight':'700','color':'#fff','flexShrink':'0'}}>RL</div>
          <div>
            <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.2rem'}}>Ryan Linton</h3>
            <p style={{'fontSize':'0.75rem','fontWeight':'600','color':'var(--primary)','marginBottom':'0.125rem'}}>Strategic Advisor</p>
            <p style={{'fontSize':'0.6875rem','color':'var(--muted)','marginBottom':'0.75rem','textTransform':'uppercase','letterSpacing':'0.05em'}}>BaaS · Payments · Compliance</p>
            <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':'1.65'}}>Former Chairman, MVB Bank. Ex-CEO Betable. Ex-Zynga revenue operations and fraud prevention.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* CONTACT */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container" style={{'maxWidth':'56rem'}}>
    <div style={{'textAlign':'center','marginBottom':'3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Contact</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,3rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1rem'}}>Get in Touch</h2>
      <p style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)'}}>Ready to learn more about Verafye? We'd love to hear from you.</p>
    </div>
    <div className="grid-3" style={{'maxWidth':'48rem','margin':'0 auto'}}>
      <div style={{'textAlign':'center'}}>
        <div style={{'width':'3rem','height':'3rem','background':'var(--bg-blue)','borderRadius':'0.75rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 1rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div>
        <h3 style={{'fontSize':'1rem','fontWeight':'600','color':'var(--dark)','marginBottom':'0.25rem'}}>Email</h3>
        <a href="mailto:contact@verafye.com" style={{'fontSize':'0.875rem','color':'var(--primary)','textDecoration':'none'}}>contact@verafye.com</a>
      </div>
      <div style={{'textAlign':'center'}}>
        <div style={{'width':'3rem','height':'3rem','background':'var(--bg-blue)','borderRadius':'0.75rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 1rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></div>
        <h3 style={{'fontSize':'1rem','fontWeight':'600','color':'var(--dark)','marginBottom':'0.25rem'}}>Location</h3>
        <p style={{'fontSize':'0.875rem','color':'var(--muted)'}}>Global Operations</p>
      </div>
      <div style={{'textAlign':'center'}}>
        <div style={{'width':'3rem','height':'3rem','background':'var(--bg-blue)','borderRadius':'0.75rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 1rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></div>
        <h3 style={{'fontSize':'1rem','fontWeight':'600','color':'var(--dark)','marginBottom':'0.25rem'}}>LinkedIn</h3>
        <a href="https://www.linkedin.com/company/104417539" target="_blank" rel="noopener noreferrer" aria-label="Visit Verafye on LinkedIn" style={{'fontSize':'0.875rem','color':'var(--primary)','textDecoration':'none'}}>Follow us</a>
      </div>
    </div>
  </div>
</section>

{/* CAREERS */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'48rem','textAlign':'center'}}>
    <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Careers</p>
    <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.5rem'}}>Join Our Team</h2>
    <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','marginBottom':'2rem'}}>We are building connected investigation intelligence for financial crime operations. If you are motivated by applying technology to serious problems in regulated markets, we would like to hear from you.</p>
    <a href="mailto:careers@verafye.com?subject=Resume%20Submission%20for%20Verafye" className="btn-primary">Submit your Resume <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></a>
  </div>
</section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            Explore Risk Shadowing
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            Talk to our team about how Verafye supports fraud, AML, and payment risk operations for regulated payment platforms, fintechs, and financial institutions.
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
            No platform-replacement commitment required. Speak directly with our solutions team.
          </p>
        </div>
      </section>
    </>
  );
}
