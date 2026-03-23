import Link from 'next/link';
import { IconArrowRight, IconCheck } from './Icons';

export default function CTA({ title, subtitle, showBullets = true }) {
  const defaultTitle = 'Detect Hidden Fraud Networks. Connect Intelligence Across Systems.';
  const defaultSubtitle = 'See how Verafye helps financial institutions unify fraud, AML, and payments intelligence to detect coordinated crime networks earlier and reduce investigation workload by 30-50%.';

  return (
    <section className="cta-section">
      <div className="container" style={{textAlign:'center',maxWidth:'56rem'}}>
        <p className="eyebrow" style={{marginBottom:'1.25rem'}}>Get Started</p>
        <h2 style={{fontSize:'clamp(1.5rem,4vw,3rem)',fontWeight:700,color:'var(--dark)',marginBottom:'1.5rem',lineHeight:1.2,letterSpacing:'-0.025em'}}>
          {title || defaultTitle}
        </h2>
        <p style={{fontSize:'clamp(0.938rem,2vw,1.25rem)',color:'var(--body)',marginBottom:'2rem',maxWidth:'40rem',marginLeft:'auto',marginRight:'auto'}}>
          {subtitle || defaultSubtitle}
        </p>
        <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center'}}>
          <Link href="/request-demo" className="btn-primary">Request Demo <span className="btn-arrow"><IconArrowRight /></span></Link>
          <Link href="/request-demo" className="btn-secondary">Contact Sales</Link>
        </div>
        {showBullets && (
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'1.5rem',marginTop:'1rem',fontSize:'0.875rem',color:'var(--muted)'}}>
            <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
              <span style={{color:'var(--primary)'}}><IconCheck /></span>
              <span>Designed for financial institutions and payment platforms</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
              <span style={{color:'var(--primary)'}}><IconCheck /></span>
              <span>Aligned with evolving regulatory expectations</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
