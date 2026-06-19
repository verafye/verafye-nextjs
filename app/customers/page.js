import Link from 'next/link';

export const metadata = {
  title: "Who Verafye Serves - Payment-Led Regulated Platforms",
  description: "Verafye's ICP hierarchy - PSPs, PayFacs, payment processors, MSBs and remittance platforms first; digital banks, NBFCs and selected banks as expansion; marketplaces as a network-risk adjacency.",
  keywords: ["psp payfac risk intelligence", "msb remittance aml", "payment-led financial platforms", "network risk intelligence customers", "fintech fraud investigation", "lean financial crime teams"],
  openGraph: {
    title: "Who Verafye Serves - Payment-Led Regulated Platforms | Verafye",
    description: "Verafye's ICP hierarchy - PSPs, PayFacs, payment processors, MSBs and remittance platforms first; digital banks, NBFCs and selected banks as expansion; marketplaces as a network-risk adjacency.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/customers',
  },
};

export default function Page() {
  return (
    <>
{/* HERO */}
<section style={{'background':'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)','padding':'4rem 0'}}>
  <div className="container" style={{'maxWidth':'56rem','textAlign':'center'}}>
    <p className="eyebrow animate-fade-up" style={{'marginBottom':'1.25rem'}}>Customers</p>
    <h1 className="animate-fade-up delay-100" style={{'fontSize':'clamp(1.875rem,5vw,3.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'2rem','letterSpacing':'-0.035em'}}>Built for Payment-Led Regulated Platforms and Lean Financial Crime Teams</h1>
    <p className="animate-fade-up delay-200" style={{'fontSize':'clamp(1rem,2vw,1.25rem)','color':'var(--body)','maxWidth':'48rem','margin':'0 auto 2.5rem'}}>Verafye leads with PSPs, PayFacs, payment processors, payment aggregators, MSBs, remittance platforms, and BaaS / embedded finance providers - and expands into digital banks, neo banks, NBFCs, digital lenders and selected banks. Same risk pattern, different buyer label by geography.</p>
    <div className="animate-fade-up delay-300"><Link href="/request-demo" className="btn-primary">Request a Risk Shadowing Review <span className="btn-arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></Link></div>
  </div>
</section>

{/* CUSTOMER SEGMENTS */}
<section style={{'padding':'4rem 0','background':'#fff'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Who We Serve</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','letterSpacing':'-0.03em'}}>An ICP hierarchy, not a flat list</h2>
      <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.0625rem)','color':'var(--body)','lineHeight':1.7,'marginTop':'1rem'}}>Primary markets are our wedge. Expansion markets are next. Banks are selective and region-specific, and commerce platforms are a controlled network-risk adjacency.</p>
    </div>
    <div className="grid-3" style={{'maxWidth':'72rem','margin':'0 auto','gap':'1.5rem'}}>

      {/* 1 - PSPs, PayFacs & Payment Processors - PRIMARY */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#1E6FB7','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Primary Market</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>PSPs, PayFacs &amp; Payment Processors</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>PSPs, PayFacs, and payment processors carry compliance and fraud liability across high-volume, multi-rail environments. Verafye connects merchant, sub-merchant, transaction, and beneficiary signals into investigation-ready workflows - without replacing existing detection infrastructure.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Sub-merchant and merchant risk investigation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Transaction and beneficiary signal correlation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>AML and fraud case workflows</span></div>
        </div>
      </div>

      {/* 1b - MSBs & Remittance Platforms - PRIMARY */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#1E6FB7','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Primary Market</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>MSBs &amp; Remittance Platforms</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>MSBs and remittance platforms carry corridor, agent, and beneficiary risk that event-level monitoring cannot connect. Verafye connects sender, receiver, corridor, transaction, device, identity, and beneficiary signals into investigation-ready network risk intelligence.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Corridor and agent-linked risk investigation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Mule beneficiary and structuring pattern review</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Cross-border AML case-ready evidence</span></div>
        </div>
      </div>

      {/* 1c - BaaS & Embedded Finance Providers - PRIMARY */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#1E6FB7','background':'rgba(30,111,183,0.08)','border':'1px solid rgba(30,111,183,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Primary Market</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>BaaS &amp; Embedded Finance Providers</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>BaaS and embedded finance providers operate across sponsor banks, fintech programs, payment flows, ledger events, identity signals, device patterns, and case workflows. Verafye helps connect fragmented program, payment, fraud, AML, identity, and partner-risk signals into investigation-ready Network Risk Intelligence.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Cross-program fraud and AML visibility</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Sponsor-bank ecosystem oversight support</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Ledger, account, wallet, identity, and device signal linkage</span></div>
        </div>
      </div>

      {/* 2 - FinTech Payment Platforms - KEY EXPANSION */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#0D7A5F','background':'rgba(13,122,95,0.08)','border':'1px solid rgba(13,122,95,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Key Expansion</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>FinTech Payment Platforms</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>FinTech payment platforms scale faster than risk infrastructure can keep pace. Verafye provides investigation intelligence that connects payment, account, identity, device, and beneficiary signals into reviewable cases - built for lean teams and API-led environments.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Payment and account signal investigation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Mule and scam-linked activity review</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Compliance-ready investigation workflows</span></div>
        </div>
      </div>

      {/* 3 - Digital Banks & Neo Banks - KEY SEGMENT */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#0D7A5F','background':'rgba(13,122,95,0.08)','border':'1px solid rgba(13,122,95,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Key Expansion</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>Digital Banks &amp; Neo Banks</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>Digital and neo banks operate across wallet, payment, account, and lending surfaces where risk signals are fragmented from day one. Verafye connects account, device, identity, beneficiary, and transaction signals into one connected network view designed for digital-first risk operations.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Mule account and scam investigation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Wallet, payment, and account signal correlation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Beneficiary and network risk review</span></div>
        </div>
      </div>

      {/* 4 - Banks & Regional Financial Institutions - SECONDARY */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#64748b','background':'rgba(100,116,139,0.08)','border':'1px solid rgba(100,116,139,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Selective Market</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>Selected Banks &amp; Credit Unions</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>A selective, region-specific segment. Verafye supports selected banks, community banks, credit unions, regional banks, and sponsor-bank ecosystems where lean teams, fragmented tools, and network-level financial crime risk create investigation bottlenecks.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Connected fraud and AML investigation view</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Audit-ready case records and evidence trails</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Regulatory-aligned investigation workflows</span></div>
        </div>
      </div>

      {/* 5 - Digital Lending & BNPL - ADJACENCY */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 12v6"/><path d="M9 15h6"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#0D7A5F','background':'rgba(13,122,95,0.08)','border':'1px solid rgba(13,122,95,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Key Expansion</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>NBFCs &amp; Digital Lenders</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>Digital lenders and BNPL platforms face fraud network risk that spans borrower identity, device, beneficiary, and partner signals across the loan lifecycle. Verafye supports post-booking fraud investigation workflows - it does not score creditworthiness or decide applications.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Fraud network investigation across borrower and partner signals</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Identity, device, and beneficiary linkage review</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Evidence trails for disputed and suspicious accounts</span></div>
        </div>
      </div>

      {/* 6 - Marketplaces - ADJACENCY */}
      <div className="card card-elevated" style={{'padding':'2rem'}}>
        <div style={{'display':'flex','justifyContent':'space-between','alignItems':'flex-start','marginBottom':'1.25rem'}}>
          <div className="card-icon lg gradient-bg-4" style={{'margin':0}}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></div>
          <span style={{'fontSize':'0.625rem','fontWeight':'700','letterSpacing':'0.08em','textTransform':'uppercase','color':'#64748b','background':'rgba(100,116,139,0.08)','border':'1px solid rgba(100,116,139,0.18)','borderRadius':'4px','padding':'0.2rem 0.5rem','whiteSpace':'nowrap'}}>Network-Risk Adjacency</span>
        </div>
        <h3 style={{'fontSize':'1.25rem','fontWeight':'800','color':'var(--dark)','marginBottom':'0.75rem','letterSpacing':'-0.02em'}}>Marketplaces</h3>
        <p style={{'fontSize':'0.9375rem','color':'var(--body)','marginBottom':'1.5rem','lineHeight':'1.65'}}>Marketplace platforms face seller fraud rings, buyer-seller collusion, and mule-linked payout networks. Verafye helps risk teams connect seller, buyer, device, payout, and transaction signals into investigation-ready cases - supporting faster review and clearer evidence trails.</p>
        <div style={{'display':'flex','flexDirection':'column','gap':'0.625rem'}}>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Seller fraud ring and collusion investigation</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Mule-linked payout network review</span></div>
          <div style={{'display':'flex','gap':'0.625rem','alignItems':'center'}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span style={{'fontSize':'0.8125rem','color':'var(--body)'}}>Transaction and device pattern correlation</span></div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* GEO ICP */}
<section style={{'padding':'4rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)'}}>
  <div className="container" style={{'maxWidth':'64rem'}}>
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 2.5rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>ICP by Region</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.5rem)','fontWeight':'800','color':'var(--dark)','letterSpacing':'-0.03em','marginBottom':'1rem'}}>Same risk pattern, different buyer label by geography</h2>
      <p style={{'fontSize':'clamp(0.9375rem,1.75vw,1.0625rem)','color':'var(--body)','lineHeight':1.7}}>The network-level financial crime pattern is consistent worldwide. The institution that owns it - and the regulator that oversees it - changes by region.</p>
    </div>
    <div className="card card-elevated" style={{'padding':'0','overflow':'hidden'}}>
      <div style={{'overflowX':'auto'}}>
        <table style={{'width':'100%','borderCollapse':'collapse','fontSize':'0.875rem'}}>
          <thead>
            <tr style={{'background':'var(--bg-tint)','textAlign':'left'}}>
              <th style={{'padding':'0.875rem 1.25rem','fontWeight':'700','color':'var(--dark)','whiteSpace':'nowrap','borderBottom':'1px solid var(--border)'}}>Region</th>
              <th style={{'padding':'0.875rem 1.25rem','fontWeight':'700','color':'var(--dark)','borderBottom':'1px solid var(--border)'}}>Primary ICP</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['North America', 'MSBs, payment processors, PayFacs, BaaS providers, embedded finance platforms, community banks, credit unions, sponsor-bank ecosystems'],
              ['India', 'Payment aggregators, PSPs, payment gateways, wallet/payment fintechs, digital banks, NBFCs, digital lenders, selected banks'],
              ['APAC', 'Wallets, PSPs, payment fintechs, remittance platforms, digital banks'],
              ['LATAM', 'Wallets, PSPs, fintechs, remittance platforms, digital banks'],
              ['Middle East', 'MSBs, exchange houses, remittance firms, PSPs, BaaS and embedded finance where applicable, selected banks'],
              ['Europe / UK', 'Payment institutions, EMIs, MSBs, BaaS providers, embedded finance platforms, fintechs, selected challenger banks'],
            ].map((row, i, arr) => (
              <tr key={row[0]} style={{'borderBottom': i < arr.length - 1 ? '1px solid var(--border-light)' : 'none'}}>
                <td style={{'padding':'0.875rem 1.25rem','fontWeight':'700','color':'var(--primary)','whiteSpace':'nowrap','verticalAlign':'top'}}>{row[0]}</td>
                <td style={{'padding':'0.875rem 1.25rem','color':'var(--body)','lineHeight':1.6}}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

{/* OUTCOMES */}
<section className="section-light" style={{'padding':'4rem 0'}}>
  <div className="container">
    <div style={{'textAlign':'center','maxWidth':'56rem','margin':'0 auto 3rem'}}>
      <p className="eyebrow" style={{'marginBottom':'0.75rem'}}>Platform Impact</p>
      <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','letterSpacing':'-0.03em'}}>Outcomes Teams See</h2>
    </div>
    <div className="grid-4" style={{'maxWidth':'64rem','margin':'0 auto'}}>
      <div className="card" style={{'padding':'1.75rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.5rem'}}>Faster</div><p style={{'fontSize':'0.8125rem','fontWeight':'500','color':'var(--body)'}}>Faster investigation triage through connected alert clustering</p></div>
      <div className="card" style={{'padding':'1.75rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.5rem'}}>Clearer</div><p style={{'fontSize':'0.8125rem','fontWeight':'500','color':'var(--body)'}}>Improved alert-to-case clarity with connected investigation queues</p></div>
      <div className="card" style={{'padding':'1.75rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.5rem'}}>Less noise</div><p style={{'fontSize':'0.8125rem','fontWeight':'500','color':'var(--body)'}}>Reduced manual investigation effort and noise reaching analyst review</p></div>
      <div className="card" style={{'padding':'1.75rem','textAlign':'center'}}><div className="stat-value" style={{'marginBottom':'0.5rem'}}>Audit-ready</div><p style={{'fontSize':'0.8125rem','fontWeight':'500','color':'var(--body)'}}>Stronger audit-readiness and more consistent case decisions</p></div>
    </div>
    <p style={{'textAlign':'center','fontSize':'0.8125rem','color':'var(--muted)','marginTop':'2rem','fontStyle':'italic'}}>Qualitative outcomes teams report from connected investigation workflows. Actual results vary by environment, integration scope, and team configuration.</p>
  </div>
</section>

{/* CTA */}
<section style={{'padding':'4rem 0','background':'var(--bg-tint)','borderTop':'1px solid var(--border)'}}>
  <div className="container" style={{'textAlign':'center','maxWidth':'48rem'}}>
    <h2 style={{'fontSize':'clamp(1.5rem,4vw,2.75rem)','fontWeight':'800','color':'var(--dark)','marginBottom':'1.25rem','letterSpacing':'-0.03em'}}>See Verafye in Action</h2>
    <p style={{'fontSize':'clamp(0.938rem,2vw,1.125rem)','color':'var(--body)','marginBottom':'1.25rem','maxWidth':'40rem','marginLeft':'auto','marginRight':'auto'}}>Talk to our team about connecting fraud, AML, and payment risk signals into investigation-ready cases - designed for regulated payment platforms, fintechs, and digital banks operating under real compliance pressure.</p>
    <p style={{'fontSize':'clamp(0.875rem,1.5vw,1rem)','color':'var(--muted)','maxWidth':'34rem','margin':'0 auto 2.5rem'}}>PSPs, PayFacs, FinTech payment platforms, digital banks, and regulated money movement businesses are building investigation intelligence ahead of regulatory review cycles. Verafye is built for that operating reality.</p>
    <div style={{'display':'flex','flexWrap':'wrap','gap':'1rem','justifyContent':'center'}}>
      <Link href="/request-demo" className="btn-primary">Request a Risk Shadowing Review <span className="btn-arrow"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></Link>
      <Link href="/platform" className="btn-secondary">Explore Platform</Link>
    </div>
    <p style={{'fontSize':'0.8125rem','color':'var(--muted)','marginTop':'1.5rem'}}>No commitment required. Speak directly with our solutions team.</p>
  </div>
</section>


    </>
  );
}
