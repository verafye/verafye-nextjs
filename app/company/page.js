import Link from 'next/link';

export const metadata = {
  title: 'Company — Verafye',
  description: 'Verafye is AI-native FRAML intelligence infrastructure built for financial institutions and payment platforms operating under evolving regulatory and operational demands.',
  openGraph: {
    title: 'Company — Verafye',
    description: 'Verafye is AI-native FRAML intelligence infrastructure built for financial institutions and payment platforms operating under evolving regulatory and operational demands.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company — Verafye',
    description: 'Verafye is AI-native FRAML intelligence infrastructure built for financial institutions and payment platforms operating under evolving regulatory and operational demands.',
  },
};

export default function Page() {
  return (
    <>
<section style={{'background':'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)','padding':'5rem 0'}}>
  <div className="container" style={{'maxWidth':'56rem','textAlign':'center'}}>
    <p className="eyebrow animate-fade-up" style={{'marginBottom':'1.25rem'}}>Company</p>
    <h1 className="animate-fade-up delay-100" style={{'fontSize':'clamp(1.875rem,5vw,3.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'2rem','letterSpacing':'-0.025em'}}>Intelligence Infrastructure for Financial Crime Operations</h1>
    <p className="animate-fade-up delay-200" style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)','maxWidth':'48rem','margin':'0 auto'}}>Verafye is AI-native FRAML intelligence infrastructure  -  built for financial institutions and payment platforms operating under evolving regulatory and operational demands.</p>
  </div>
</section>

{/* NAMING STORY */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'maxWidth':'72rem','margin':'0 auto','display':'grid','gridTemplateColumns':'1fr 1fr','gap':'4rem','alignItems':'center'}}>
      <div>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>What's in a Name</p>
        <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.75rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.5rem','letterSpacing':'-0.025em'}}>Truth, Made Actionable</h2>
        <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75','marginBottom':'1.25rem'}}>The word <em>Vera</em> is Latin for truth.</p>
        <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75','marginBottom':'1.25rem'}}>In financial crime, where signals are obscured across identities, transactions, and systems, truth is not abstract. It is the outcome institutions rely on.</p>
        <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75','marginBottom':'1.25rem'}}><em>Fye</em> reflects transformation  -  to identify, clarify, and make something actionable.</p>
        <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75'}}>Verafye is built to do exactly that: turn fragmented signals into clear, actionable intelligence.</p>
      </div>
      <div style={{'background':'linear-gradient(135deg,var(--primary),var(--accent),var(--secondary))','borderRadius':'1.5rem','padding':'3rem','boxShadow':'0 25px 50px rgba(30,111,183,0.3)','textAlign':'center','position':'relative'}}>
        <div style={{'position':'absolute','inset':'0','borderRadius':'1.5rem','opacity':'0.1','backgroundImage':'radial-gradient(circle at 2px 2px,#fff 1px,transparent 0)','backgroundSize':'24px 24px'}}></div>
        <div style={{'position':'relative'}}>
          <div style={{'fontSize':'3.5rem','fontWeight':'700','color':'#fff','marginBottom':'0.5rem'}}>AI-Native</div>
          <div style={{'fontSize':'1.25rem','color':'rgba(255,255,255,0.9)','marginBottom':'2rem'}}>FRAML Intelligence</div>
          <div style={{'display':'flex','justifyContent':'center','gap':'2rem'}}>
            <div style={{'textAlign':'center'}}><div style={{'fontSize':'1.75rem','fontWeight':'700','color':'#fff'}}>Graph</div><div style={{'fontSize':'0.75rem','color':'rgba(255,255,255,0.7)'}}>Native Detection</div></div>
            <div style={{'textAlign':'center'}}><div style={{'fontSize':'1.75rem','fontWeight':'700','color':'#fff'}}>Cross</div><div style={{'fontSize':'0.75rem','color':'rgba(255,255,255,0.7)'}}>System Intelligence</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* WHY VERAFYE EXISTS */}
<section className="section-light" style={{'padding':'5rem 0'}}>
  <div className="container">
    <div style={{'maxWidth':'72rem','margin':'0 auto'}}>
      <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Why Verafye Exists</p>
        <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.75rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>Built for the Mid-Market Gap</h2>
      </div>
      <div style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'3rem','alignItems':'start'}}>
        <div>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75','marginBottom':'1.25rem'}}>Financial institutions are entering a regulatory-driven upgrade cycle.</p>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75','marginBottom':'1.25rem'}}>Across fraud, AML, and payments, expectations are shifting toward connected monitoring, explainable decisioning, and traceable investigations. While large institutions have invested in complex legacy systems, mid-market banks, payment platforms, and fintechs face the same requirements without access to infrastructure built for that scale.</p>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','fontWeight':'600','color':'var(--dark)','lineHeight':'1.75'}}>Verafye was built for this gap.</p>
        </div>
        <div>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75','marginBottom':'1.25rem'}}>The platform brings together graph-native intelligence, investigation workflows, and cross-system signal correlation into a unified layer  -  designed for environments where regulatory expectations and operational complexity are both increasing.</p>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--body)','lineHeight':'1.75'}}>This is not a point solution. It is infrastructure for intelligence-led financial crime operations.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* VISION AND MISSION */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'maxWidth':'72rem','margin':'0 auto'}}>
      <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
        <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Vision &amp; Mission</p>
        <h2 style={{'fontSize':'clamp(1.375rem,3.5vw,2.75rem)','fontWeight':'700','color':'var(--dark)','letterSpacing':'-0.025em'}}>What We Are Building Toward</h2>
      </div>
      <div style={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'2rem'}}>
        <div className="card card-elevated" style={{'padding':'2.5rem'}}>
          <p style={{'fontSize':'0.6875rem','fontWeight':'700','color':'var(--secondary)','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.75rem'}}>Vision</p>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--dark)','lineHeight':'1.75','fontWeight':'500'}}>To enable financial institutions to operate with clarity, confidence, and control in an increasingly complex financial crime landscape.</p>
        </div>
        <div className="card card-elevated" style={{'padding':'2.5rem'}}>
          <p style={{'fontSize':'0.6875rem','fontWeight':'700','color':'var(--secondary)','textTransform':'uppercase','letterSpacing':'0.1em','marginBottom':'0.75rem'}}>Mission</p>
          <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.125rem)','color':'var(--dark)','lineHeight':'1.75','fontWeight':'500'}}>To build intelligence infrastructure that connects fraud, AML, and payments systems  -  enabling faster, more structured, and more traceable financial crime operations.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* VALUES */}
<section className="section-light" style={{'padding':'5rem 0'}}>
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
        <p style={{'color':'var(--body)'}}>We apply graph intelligence, AI, and cross-system signal correlation to financial crime detection  -  building infrastructure that improves as the problems it addresses evolve.</p>
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
<section style={{'padding':'5rem 0','background':'#fff'}}>
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
          <img src="/images/team/abhishek-tuppada.jpeg" alt="Abhishek Tuppada" style={{'width':'100%','height':'100%','objectFit':'cover','objectPosition':'center top'}} />
        </div>
        <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Abhishek Tuppada</h3>
        <p style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','marginBottom':'0.875rem'}}>Co-Founder &amp; CEO</p>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':'1.6'}}>20+ years in fintech and payments. Serial IP builder across regulated markets.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem','textAlign':'center'}}>
        <div style={{'width':'5rem','height':'5rem','borderRadius':'50%','overflow':'hidden','margin':'0 auto 1.25rem','border':'2px solid rgba(30,111,183,0.15)','flexShrink':'0'}}>
          <img src="/images/team/vasuki-raghavendra.jpeg" alt="Vasuki Raghavendra" style={{'width':'100%','height':'100%','objectFit':'cover','objectPosition':'center top'}} />
        </div>
        <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Vasuki Raghavendra</h3>
        <p style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','marginBottom':'0.875rem'}}>Co-Founder &amp; CPO</p>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':'1.6'}}>Pioneered early digital wallet infrastructure and large-scale payment ecosystems.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem','textAlign':'center'}}>
        <div style={{'width':'5rem','height':'5rem','borderRadius':'50%','overflow':'hidden','margin':'0 auto 1.25rem','border':'2px solid rgba(30,111,183,0.15)','flexShrink':'0'}}>
          <img src="/images/team/pradeep-jalisatgi.jpeg" alt="Pradeep Jalisatgi" style={{'width':'100%','height':'100%','objectFit':'cover','objectPosition':'center top'}} />
        </div>
        <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Pradeep Jalisatgi</h3>
        <p style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','marginBottom':'0.875rem'}}>Co-Founder &amp; CTO</p>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':'1.6'}}>Architected real-time, high-scale systems across global technology environments.</p>
      </div>
      <div className="card card-elevated" style={{'padding':'2rem','textAlign':'center'}}>
        <div style={{'width':'5rem','height':'5rem','borderRadius':'50%','overflow':'hidden','margin':'0 auto 1.25rem','border':'2px solid rgba(30,111,183,0.15)','flexShrink':'0'}}>
          <img src="/images/team/sudeendra-sadashiv.jpeg" alt="Sudeendra Sadashiv" style={{'width':'100%','height':'100%','objectFit':'cover','objectPosition':'center top'}} />
        </div>
        <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Sudeendra Sadashiv</h3>
        <p style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','marginBottom':'0.875rem'}}>Co-Founder &amp; COO</p>
        <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':'1.6'}}>Built and operated large-scale payment ecosystems across Southeast Asia.</p>
      </div>
    </div>
  </div>
</section>

{/* STRATEGIC ADVISOR */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container">
    <div style={{'maxWidth':'56rem','margin':'0 auto','textAlign':'center'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Strategic Advisor</p>
      <div className="card card-elevated" style={{'padding':'2.5rem','display':'flex','alignItems':'center','gap':'2rem','textAlign':'left','maxWidth':'44rem','margin':'0 auto'}}>
        <div style={{'width':'3.5rem','height':'3.5rem','borderRadius':'50%','background':'linear-gradient(135deg,var(--primary),var(--accent))','display':'flex','alignItems':'center','justifyContent':'center','fontSize':'1rem','fontWeight':'700','color':'#fff','flexShrink':'0'}}>RL</div>
        <div>
          <h3 style={{'fontSize':'1rem','fontWeight':'700','color':'var(--dark)','marginBottom':'0.25rem'}}>Ryan Linton</h3>
          <p style={{'fontSize':'0.8125rem','fontWeight':'600','color':'var(--primary)','marginBottom':'0.625rem'}}>Strategic Advisor</p>
          <p style={{'fontSize':'0.8125rem','color':'var(--body)','lineHeight':'1.6'}}>BaaS, Payments &amp; Compliance. Former Chairman, MVB Bank. Ex-CEO Betable. Ex-Zynga revenue operations and fraud prevention.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CONTACT */}
<section className="section-light" style={{'padding':'5rem 0'}}>
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
        <p style={{'fontSize':'0.875rem','color':'var(--primary)'}}>info@verafye.com</p>
      </div>
      <div style={{'textAlign':'center'}}>
        <div style={{'width':'3rem','height':'3rem','background':'var(--bg-blue)','borderRadius':'0.75rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 1rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></div>
        <h3 style={{'fontSize':'1rem','fontWeight':'600','color':'var(--dark)','marginBottom':'0.25rem'}}>Location</h3>
        <p style={{'fontSize':'0.875rem','color':'var(--muted)'}}>Global Operations</p>
      </div>
      <div style={{'textAlign':'center'}}>
        <div style={{'width':'3rem','height':'3rem','background':'var(--bg-blue)','borderRadius':'0.75rem','display':'flex','alignItems':'center','justifyContent':'center','margin':'0 auto 1rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></div>
        <h3 style={{'fontSize':'1rem','fontWeight':'600','color':'var(--dark)','marginBottom':'0.25rem'}}>LinkedIn</h3>
        <p style={{'fontSize':'0.875rem','color':'var(--primary)'}}>Follow us</p>
      </div>
    </div>
  </div>
</section>

{/* CAREERS */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container" style={{'maxWidth':'48rem','textAlign':'center'}}>
    <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Careers</p>
    <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.5rem)','fontWeight':'700','color':'var(--dark)','marginBottom':'1.5rem'}}>Join Our Team</h2>
    <p style={{'fontSize':'clamp(1rem,2vw,1.125rem)','color':'var(--body)','marginBottom':'2rem'}}>We are building intelligence infrastructure for financial crime operations. If you are motivated by applying technology to serious problems in regulated markets, we would like to hear from you.</p>
    <a href="mailto:careers@verafye.com" className="btn-primary">View Open Positions <span className="btn-arrow" style={{'display':'inline-flex','marginLeft':'0.5rem'}}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></a>
  </div>
</section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-tint)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '48rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            See Verafye in Action
          </h2>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            Talk to our team about how Verafye supports fraud, AML, and payments intelligence operations for financial institutions and payment platforms.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/request-demo" className="btn-primary">
              Request Demo
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </Link>
            <Link href="/platform" className="btn-secondary">Explore Platform</Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem' }}>
            No commitment required. Speak directly with our solutions team.
          </p>
        </div>
      </section>
    </>
  );
}
