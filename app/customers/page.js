import Link from 'next/link';

export const metadata = {
  title: "Verafye Customers | Investigation Intelligence for Regulated Payment Platforms",
  description: "Verafye serves PSPs, PayFacs, FinTech payment platforms, digital banks, and regulated money movement businesses - connecting fraud, AML, payment, identity, and behavior signals into investigation-ready workflows.",
  openGraph: {
    title: "Verafye Customers | Investigation Intelligence for Regulated Payment Platforms",
    description: "Verafye serves PSPs, PayFacs, FinTech payment platforms, digital banks, and regulated money movement businesses - connecting fraud, AML, payment, identity, and behavior signals into investigation-ready workflows.",
  },
};

export default function Page() {
  return (
    <>
{/* HERO */}
<section style={{'background':'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)','padding':'4rem 0'}}>
  <div className="container" style={{'maxWidth':'56rem','textAlign':'center'}}>
    <p className="eyebrow animate-fade-up" style={{'marginBottom':'1.25rem'}}>Customers</p>
    <h1 className="animate-fade-up delay-100" style={{'fontSize':'clamp(1.875rem,5vw,3.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'2rem','letterSpacing':'-0.035em'}}>Built for Regulated Payment Platforms and Money Movement Risk Teams</h1>
    <p className="animate-fade-up delay-200" style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)','maxWidth':'48rem','margin':'0 auto 2.5rem'}}>Verafye serves PSPs, PayFacs, payment processors, FinTech payment platforms, digital banks, and regulated money movement businesses - connecting fraud, AML, payment, identity, device, and behavior signals into explainable investigation workflows designed for lean risk teams.</p>
    <div className="animate-fade-up delay-300"><Link href="/request-demo" className="btn-primary">Request Demo <span className="btn-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></Link></div>
  </div>
</section>

{/* CUSTOMER SEGMENTS */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Who We Serve</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','letterSpacing':'-0.03em'}}>Regulated Payment Platforms, FinTechs, and Digital Banks</h2>
    </div>
    <div className="grid-3" style={{'maxWidth':'72rem','margin':'0 auto','gap':'1.5rem'}}>

      {/* 1 — PSPs, PayFacs & Payment Processors — PRIMARY */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#1E6FB7','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Primary</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>PSPs, PayFacs &amp; Payment Processors</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>PSPs, PayFacs, and payment processors carry compliance and fraud liability across high-volume, multi-rail environments. Verafye connects merchant, sub-merchant, transaction, and beneficiary signals into investigation-ready workflows - without replacing existing detection infrastructure.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Sub-merchant and merchant risk investigation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Transaction and beneficiary signal correlation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>AML and fraud case workflows</span></div>
        </div>
      </div>

      {/* 2 — FinTech Payment Platforms — PRIMARY */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#1E6FB7','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Primary</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>FinTech Payment Platforms</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>FinTech payment platforms scale faster than risk infrastructure can keep pace. Verafye provides investigation intelligence that connects payment, account, identity, device, and beneficiary signals into reviewable cases - built for lean teams and API-led environments.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Payment and account signal investigation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Mule and scam-linked activity review</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Compliance-ready investigation workflows</span></div>
        </div>
      </div>

      {/* 3 — Digital Banks & Neo Banks — KEY SEGMENT */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#0D7A5F','background':'rgba(13,122,95,0.08)','border':'1px solid rgba(13,122,95,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Key Segment</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>Digital Banks &amp; Neo Banks</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>Digital and neo banks operate across wallet, payment, account, and lending surfaces where risk signals are fragmented from day one. Verafye connects account, device, identity, beneficiary, and transaction signals into a unified investigation layer designed for digital-first risk operations.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Mule account and scam investigation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Wallet, payment, and account signal correlation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Beneficiary and network risk review</span></div>
        </div>
      </div>

      {/* 4 — Banks & Regional Financial Institutions — SECONDARY */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#64748b','background':'rgba(100,116,139,0.08)','border':'1px solid rgba(100,116,139,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Secondary</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>Banks &amp; Regional Financial Institutions</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>Banks and regional institutions face increasing regulatory expectations around AML monitoring, fraud investigation, and decision traceability. Verafye connects fraud, AML, payments, and identity signals into a unified investigation layer - working alongside existing infrastructure.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Unified fraud and AML investigation layer</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Audit-ready case records and evidence trails</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Regulatory-aligned investigation workflows</span></div>
        </div>
      </div>

      {/* 5 — Digital Lending & BNPL — ADJACENCY */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 12v6"/><path d="M9 15h6"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#64748b','background':'rgba(100,116,139,0.08)','border':'1px solid rgba(100,116,139,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Adjacency</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>Digital Lending &amp; BNPL</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>Digital lenders and BNPL platforms face fraud network risk that spans borrower identity, device, beneficiary, and partner signals across the loan lifecycle. Verafye supports post-booking fraud investigation workflows - not credit underwriting or origination decisions.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Fraud network investigation across borrower and partner signals</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Identity, device, and beneficiary linkage review</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Evidence trails for disputed and suspicious accounts</span></div>
        </div>
      </div>

      {/* 6 — E-Commerce & Retail — ADJACENCY */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#64748b','background':'rgba(100,116,139,0.08)','border':'1px solid rgba(100,116,139,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Adjacency</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>E-Commerce &amp; Retail</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>E-commerce and retail platforms face chargeback-linked fraud, account takeover risk, and payment network abuse. Verafye helps risk teams connect transaction, account, device, and beneficiary signals into investigation-ready cases - supporting faster review and clearer evidence trails.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Chargeback and payment fraud investigation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Account takeover and identity signal review</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Transaction and device pattern correlation</span></div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* OUTCOMES */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Platform Impact</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','letterSpacing':'-0.03em'}}>Indicative Outcomes</h2>
    </div>
    <div className="grid-4" style={{'maxWidth':'64rem','margin':'0 auto'}}>
      <div className="card" style={{'padding':'1.75rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.5rem'}}>Up to 60%</div><p style={{'fontSize':'0.8125rem','fontWeight':'500','color':'var(--body)'}}>Reduction in per-case investigation time through connected alert clustering</p></div>
      <div className="card" style={{'padding':'1.75rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.5rem'}}>Up to 3x</div><p style={{'fontSize':'0.8125rem','fontWeight':'500','color':'var(--body)'}}>Faster alert-to-case closure for teams using connected investigation queues</p></div>
      <div className="card" style={{'padding':'1.75rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.5rem'}}>50%+</div><p style={{'fontSize':'0.8125rem','fontWeight':'500','color':'var(--body)'}}>Fewer false positive alerts reaching front-line analyst review</p></div>
      <div className="card" style={{'padding':'1.75rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.5rem'}}>Weeks</div><p style={{'fontSize':'0.8125rem','fontWeight':'500','color':'var(--body)'}}>Typical time to first connected investigation workflow - not months</p></div>
    </div>
    <p style={{'textAlign':'center','fontSize':'0.8125rem','color':'var(--muted)','marginTop':'2rem','fontStyle':'italic'}}>Indicative outcomes based on representative investigation workflow improvements. Actual results vary by environment, integration scope, and team configuration.</p>
  </div>
</section>

{/* CTA */}
<section style={{'padding':'4rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)'}}>
  <div className="container" style={{'textAlign':'center','maxWidth':'48rem'}}>
    <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.03em'}}>See Verafye in Action</h2>
    <p style={{'fontSize':'clamp(0.938rem,2vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem','maxWidth':'40rem','marginLeft':'auto','marginRight':'auto'}}>Talk to our team about connecting fraud, AML, and payment risk signals into investigation-ready cases - designed for regulated payment platforms, fintechs, and digital banks operating under real compliance pressure.</p>
    <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--muted)','maxWidth':'34rem','margin':'0 auto 2.5rem'}}>PSPs, PayFacs, FinTech payment platforms, digital banks, and regulated money movement businesses are building investigation intelligence ahead of regulatory review cycles. Verafye is built for that operating reality.</p>
    <div style={{'display':'flex','flexWrap':'wrap','gap':'1rem','justifyContent':'center'}}>
      <Link href="/request-demo" className="btn-primary">Request Demo <span className="btn-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></Link>
      <Link href="/platform" className="btn-secondary">Explore Platform</Link>
    </div>
    <p style={{'fontSize':'0.8125rem','color':'var(--muted)','marginTop':'1.5rem'}}>No commitment required. Speak directly with our solutions team.</p>
  </div>
</section>


    </>
  );
}
