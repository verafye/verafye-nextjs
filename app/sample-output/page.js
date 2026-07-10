import Link from 'next/link';

export const metadata = {
  title: "Sample Risk Shadowing Output | Verafye",
  description: "Detailed sample outputs are shared during qualified walkthroughs using synthetic data only.",
  openGraph: {
    title: "Sample Risk Shadowing Output | Verafye",
    description: "Detailed sample outputs are shared during qualified walkthroughs using synthetic data only.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sample Risk Shadowing Output | Verafye",
    description: "Detailed sample outputs are shared during qualified walkthroughs using synthetic data only.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/sample-output',
  },
};

export default function SampleOutputPage() {
  return (
    <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)' }}>
      <div className="container" style={{ maxWidth: '46rem', textAlign: 'center' }}>
        <div className="card card-elevated" style={{ padding: 'clamp(2rem,4vw,3rem)', background: 'linear-gradient(165deg,#EFF6FF 0%,#F8FBFF 100%)', border: '1px solid rgba(30,111,183,0.15)' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Sample Output</p>
          <h1 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Sample Risk Shadowing Output
          </h1>
          <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.75rem', maxWidth: '36rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Detailed sample outputs are shared during qualified walkthroughs using synthetic data only.
          </p>
          <Link href="/request-demo?intent=sample-output-walkthrough" className="btn-primary">
            Request Sample Output Walkthrough
            <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
