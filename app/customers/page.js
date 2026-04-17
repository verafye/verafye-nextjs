import Link from 'next/link';

export const metadata = {
  title: 'Verafye Customers | Fraud & AML Success Stories',
  description: 'Discover how financial institutions use Verafye to detect fraud, reduce false positives, and improve AML outcomes. Explore success stories.',
  openGraph: {
    title: 'Verafye Customers | Fraud & AML Success Stories',
    description: 'Discover how financial institutions use Verafye to detect fraud, reduce false positives, and improve AML outcomes. Explore success stories.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verafye Customers | Fraud & AML Success Stories',
    description: 'Discover how financial institutions use Verafye to detect fraud, reduce false positives, and improve AML outcomes. Explore success stories.',
  },
};

export default function Page() {
  return (
    <>
{/* HERO */}
<section style={{'background':'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)','padding':'5rem 0'}}>
  <div className="container" style={{'maxWidth':'56rem','textAlign':'center'}}>
    <p className="eyebrow animate-fade-up" style={{'marginBottom':'1.25rem'}}>Customers</p>
    <h1 className="animate-fade-up delay-100" style={{'fontSize':'clamp(1.875rem,5vw,3.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'2rem','letterSpacing':'-0.035em'}}>Built for Financial Institutions Operating Under Real Pressure</h1>
    <p className="animate-fade-up delay-200" style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)','maxWidth':'48rem','margin':'0 auto 2.5rem'}}>Verafye serves mid-market banks, payment processors, PSPs, PayFacs, fintech platforms, credit unions, and digital banks  -  connecting fraud, AML, and payments intelligence into unified infrastructure designed for regulatory-driven environments.</p>
    <div className="animate-fade-up delay-300"><Link href="/request-demo" className="btn-primary">Request Demo <span className="btn-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></Link></div>
  </div>
</section>

{/* CUSTOMER SEGMENTS */}
<section style={{'padding':'5rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Who We Serve</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','letterSpacing':'-0.03em'}}>Mid-Market Institutions and Payment Platforms</h2>
    </div>
    <div className="grid-3" style={{'maxWidth':'72rem','margin':'0 auto','gap':'1.5rem'}}>

      {/* BANKS */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon lg gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></div>
        <h3 style={{'fontSize':'1.375rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>Banks</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>Banks face increasing regulatory expectations around AML monitoring, fraud detection, and decision traceability. Verafye connects signals across fraud, AML, and payments systems into a unified intelligence layer  -  without replacing existing infrastructure.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Unified fraud and AML monitoring</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Network-level detection capabilities</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Regulatory-aligned architecture</span></div>
        </div>
      </div>

      {/* PAYMENT PROCESSORS */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon lg gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
        <h3 style={{'fontSize':'1.375rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>Payment Processors</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>Payment processors operate at high volume across multiple rails and merchant ecosystems  -  where disconnected fraud and risk tools create coverage gaps. Verafye connects those signals into a single intelligence layer for consistent, real-time detection.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Real-time transaction monitoring</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Merchant risk scoring</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Cross-rail pattern detection</span></div>
        </div>
      </div>

      {/* PAYFACS */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon lg gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></div>
        <h3 style={{'fontSize':'1.375rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>PayFacs</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>PayFacs carry liability across their sub-merchant portfolios and need connected visibility across transaction patterns, merchant behaviour, and payment flows  -  not isolated checks at onboarding alone.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Sub-merchant risk monitoring</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Transaction laundering detection</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Compliance violation alerts</span></div>
        </div>
      </div>

      {/* FINTECH PLATFORMS */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon lg gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg></div>
        <h3 style={{'fontSize':'1.375rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>Fintech Platforms</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>Fintech platforms scale fast  -  often faster than risk infrastructure can keep pace. Verafye provides graph-native detection and structured investigation workflows that scale with the platform, not against it.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>API-first integration</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Scalable infrastructure</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Compliance-ready from launch</span></div>
        </div>
      </div>

      {/* CREDIT UNIONS */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon lg gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></svg></div>
        <h3 style={{'fontSize':'1.375rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>Credit Unions</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>Credit unions face the same AML and fraud obligations as larger institutions  -  without the same internal resources. Verafye delivers enterprise-grade FRAML intelligence designed for mid-market scale and operational reality.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Right-sized for mid-market</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Reduced investigation burden</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Fast deployment timeline</span></div>
        </div>
      </div>

      {/* DIGITAL BANKS */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div className="card-icon lg gradient-bg-4"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
        <h3 style={{'fontSize':'1.375rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>Digital Banks</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>Digital banks operate across multi-channel, API-led environments where risk signals are fragmented from day one. Verafye connects those signals into a unified intelligence layer aligned with evolving regulatory expectations.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Cloud-native architecture</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Real-time digital channel monitoring</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Scale with rapid customer growth</span></div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* OUTCOMES */}
<section className="section-light" style={{'padding':'5rem 0'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Platform Impact</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','letterSpacing':'-0.03em'}}>Indicative Outcomes</h2>
    </div>
    <div className="grid-4" style={{'maxWidth':'64rem','margin':'0 auto'}}>
      <div className="card" style={{'padding':'1.75rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.5rem'}}>30-50%</div><p style={{'fontSize':'0.8125rem','fontWeight':'500','color':'var(--body)'}}>Reduction in investigator workload</p></div>
      <div className="card" style={{'padding':'1.75rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.5rem'}}>20-40%</div><p style={{'fontSize':'0.8125rem','fontWeight':'500','color':'var(--body)'}}>Earlier fraud network detection</p></div>
      <div className="card" style={{'padding':'1.75rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.5rem'}}>25-40%</div><p style={{'fontSize':'0.8125rem','fontWeight':'500','color':'var(--body)'}}>Improved alert precision</p></div>
      <div className="card" style={{'padding':'1.75rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.5rem'}}>100%</div><p style={{'fontSize':'0.8125rem','fontWeight':'500','color':'var(--body)'}}>Unified FRAML intelligence</p></div>
    </div>
    <p style={{'textAlign':'center','fontSize':'0.8125rem','color':'var(--muted)','marginTop':'2rem','fontStyle':'italic'}}>Metrics presented as indicative outcomes based on platform capabilities.</p>
  </div>
</section>

{/* CTA */}
<section style={{'padding':'5rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)'}}>
  <div className="container" style={{'textAlign':'center','maxWidth':'48rem'}}>
    <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.03em'}}>See Verafye in Action</h2>
    <p style={{'fontSize':'clamp(0.938rem,2vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem','maxWidth':'40rem','marginLeft':'auto','marginRight':'auto'}}>Talk to our team about connecting fraud, AML, and payments intelligence for your institution  -  designed for financial institutions operating in regulatory-driven environments.</p>
    <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--muted)','maxWidth':'34rem','margin':'0 auto 2.5rem'}}>Mid-market banks, payment platforms, and fintechs are investing in infrastructure ahead of regulatory review cycles. Verafye is built for that transition.</p>
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
