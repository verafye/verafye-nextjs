import Link from 'next/link';

export const metadata = {
  title: 'Hero Visual Options - Internal Design Preview | Verafye',
  description: 'Internal design preview. Not for public distribution.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

/* ─── Shared SVG icons ─────────────────────────────────────────────────────── */
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

/* ─── Internal banner ───────────────────────────────────────────────────────── */
function InternalBanner() {
  return (
    <div style={{
      background: '#1E293B',
      color: '#F8FAFC',
      padding: '0.625rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.625rem',
      fontSize: '0.8125rem',
      fontWeight: 600,
      letterSpacing: '0.04em',
      position: 'sticky',
      top: 0,
      zIndex: 200,
    }}>
      <span style={{ background: '#F59E0B', color: '#1E293B', borderRadius: '4px', padding: '0.125rem 0.5rem', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em' }}>
        INTERNAL ONLY
      </span>
      Verafye Website 2.0 - Hero Visual Options - Not indexed, not linked from navigation
    </div>
  );
}

/* ─── Jump nav ──────────────────────────────────────────────────────────────── */
function JumpNav() {
  return (
    <nav style={{
      background: '#fff',
      borderBottom: '1px solid var(--border)',
      padding: '0 1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0',
      overflowX: 'auto',
      position: 'sticky',
      top: '2.5rem',
      zIndex: 100,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0', width: '100%' }}>
        {[
          { href: '#option-1', label: 'Option 1 - Left Aligned + Card', page: '/platform/' },
          { href: '#option-2', label: 'Option 2 - Centered + Pattern', page: '/solutions/investigation-intelligence/' },
          { href: '#option-3', label: 'Option 3 - Asymmetric + Chips', page: '/resources/' },
          { href: '#evaluation', label: 'Evaluation' },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0.875rem 1.25rem',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--muted-dark)',
              borderBottom: '2px solid transparent',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s',
              textDecoration: 'none',
            }}
          >
            {item.label}
            {item.page && (
              <span style={{ fontSize: '0.6875rem', fontWeight: 400, color: 'var(--muted-light)', marginTop: '0.125rem' }}>
                Pilot: {item.page}
              </span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ─── Section label ─────────────────────────────────────────────────────────── */
function OptionLabel({ number, title, pilotPage, description }) {
  return (
    <div style={{
      background: 'var(--bg-slate)',
      borderBottom: '1px solid var(--border)',
      padding: '1.5rem 1.5rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.375rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '1.75rem', height: '1.75rem', borderRadius: '50%',
              background: 'var(--primary)', color: '#fff',
              fontSize: '0.8125rem', fontWeight: 700,
            }}>{number}</span>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.02em' }}>{title}</h2>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.6 }}>{description}</p>
        </div>
        <div style={{
          background: '#fff', border: '1px solid var(--border)',
          borderRadius: '8px', padding: '0.5rem 0.875rem',
          fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500,
        }}>
          Pilot page: <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{pilotPage}</span>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   OPTION 1 - Left-Aligned Hero + Right-Side Visual Card
   Pilot page: /platform/
   ════════════════════════════════════════════════════════════════════════════ */
function Option1Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #F8FBFF 0%, #EEF6FF 50%, #fff 100%)',
      padding: '5rem 0',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,420px)',
          gap: '3.5rem',
          alignItems: 'center',
        }}>

          {/* Left: copy */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>VERAFYE PLATFORM</p>
            <h1 style={{
              fontSize: 'clamp(1.875rem,4.5vw,3.25rem)',
              fontWeight: 700,
              color: 'var(--dark)',
              marginBottom: '1.25rem',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
            }}>
              One investigation layer for connected financial crime operations
            </h1>
            <p style={{
              fontSize: 'clamp(1rem,1.8vw,1.1875rem)',
              color: 'var(--body)',
              fontWeight: 500,
              marginBottom: '1rem',
              lineHeight: 1.6,
              maxWidth: '38rem',
            }}>
              Unify fraud, AML, payments, identity, device, and behavior signals into investigation-ready cases, explainable decisions, and audit-ready workflows.
            </p>
            <p style={{
              fontSize: 'clamp(0.875rem,1.5vw,1rem)',
              color: 'var(--muted)',
              marginBottom: '2rem',
              lineHeight: 1.75,
              maxWidth: '36rem',
            }}>
              Start by connecting signals from existing systems, then expand into Verafye-led investigation workflows as value is proven.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link href="/request-demo" className="btn-primary">
                Request Demo
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <ArrowRight />
                </span>
              </Link>
              <Link href="/capabilities" className="btn-secondary">Explore Capabilities</Link>
            </div>
          </div>

          {/* Right: visual card */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            border: '1px solid var(--border)',
            boxShadow: '0 20px 60px -12px rgba(30,111,183,0.14), 0 4px 16px -4px rgba(0,0,0,0.06)',
            overflow: 'hidden',
          }}>
            {/* Card header bar */}
            <div style={{
              background: 'var(--primary)',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
            }}>
              <div style={{ display: 'flex', gap: '0.375rem' }}>
                {['rgba(255,255,255,0.3)','rgba(255,255,255,0.5)','rgba(255,255,255,0.8)'].map((c,i) => (
                  <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />
                ))}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600, letterSpacing: '0.06em' }}>
                INVESTIGATION OVERVIEW
              </span>
            </div>

            {/* Signal rows */}
            <div style={{ padding: '1.25rem' }}>
              {[
                { label: 'Fraud Signals', count: '2,847', trend: '+12%', color: '#EEF6FF', dot: 'var(--primary)' },
                { label: 'AML Alerts', count: '614', trend: '+3%', color: '#F0FDF4', dot: '#16A34A' },
                { label: 'Payment Events', count: '18,203', trend: '-5%', color: '#FFF7ED', dot: '#D97706' },
                { label: 'Identity Flags', count: '391', trend: '+8%', color: '#FEF2F2', dot: '#DC2626' },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0.875rem',
                  borderRadius: '8px',
                  background: row.color,
                  marginBottom: i < 3 ? '0.5rem' : 0,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: row.dot, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--dark)' }}>{row.label}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--dark)' }}>{row.count}</span>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: row.trend.startsWith('+') ? '#16A34A' : '#DC2626' }}>
                      {row.trend}
                    </span>
                  </div>
                </div>
              ))}

              {/* Bottom mini bar */}
              <div style={{
                marginTop: '1rem',
                paddingTop: '0.875rem',
                borderTop: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>Cases resolved today</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)' }}>47</span>
                  <span style={{ fontSize: '0.6875rem', color: '#16A34A', fontWeight: 600 }}>+22% vs last week</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   OPTION 2 - Centered Hero + Soft Background Pattern
   Pilot page: /solutions/investigation-intelligence/
   ════════════════════════════════════════════════════════════════════════════ */
function Option2Hero() {
  return (
    <section style={{
      position: 'relative',
      padding: '6rem 0',
      overflow: 'hidden',
      background: '#F8FBFF',
    }}>

      {/* Dot grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        opacity: 0.45,
      }} />

      {/* Blue gradient orbs */}
      <div style={{
        position: 'absolute', top: '-6rem', right: '-4rem',
        width: '36rem', height: '36rem',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(90,178,255,0.14) 0%, transparent 70%)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '-8rem', left: '-6rem',
        width: '32rem', height: '32rem',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30,111,183,0.08) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '54rem', margin: '0 auto', textAlign: 'center' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(30,111,183,0.08)',
            border: '1px solid rgba(30,111,183,0.16)',
            borderRadius: '100px',
            padding: '0.375rem 1rem',
            marginBottom: '1.75rem',
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Investigation Intelligence
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.875rem,5vw,3.5rem)',
            fontWeight: 700,
            color: 'var(--dark)',
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            letterSpacing: '-0.032em',
          }}>
            Investigation intelligence for lean fraud, AML, and risk teams
          </h1>

          <p style={{
            fontSize: 'clamp(1rem,2vw,1.25rem)',
            color: 'var(--body)',
            fontWeight: 500,
            marginBottom: '1rem',
            lineHeight: 1.6,
            maxWidth: '44rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Connect alerts, explain risk, and close cases faster with case intelligence, graph context, and audit-ready workflows.
          </p>

          <p style={{
            fontSize: 'clamp(0.875rem,1.5vw,1rem)',
            color: 'var(--muted)',
            marginBottom: '2.25rem',
            lineHeight: 1.8,
            maxWidth: '42rem',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Verafye brings signals, alerts, relationships, evidence, and workflows into investigation-ready cases - showing what happened, who is connected, why it matters, and what action to take next.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.75rem' }}>
            <Link href="/request-demo" className="btn-primary">
              Request Demo
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <ArrowRight />
              </span>
            </Link>
            <Link href="/capabilities" className="btn-secondary">Explore Capabilities</Link>
          </div>

          {/* Trust chips row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.625rem',
          }}>
            {[
              'Alert clustering',
              'Graph context',
              'Evidence packs',
              'Audit-ready records',
              'Case workflows',
            ].map((label, i) => (
              <span key={i} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.375rem 0.875rem',
                borderRadius: '100px',
                background: '#fff',
                border: '1px solid var(--border)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--dark)',
                boxShadow: 'var(--shadow-xs)',
              }}>
                <span style={{ color: '#16A34A', display: 'inline-flex' }}><CheckIcon /></span>
                {label}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   OPTION 3 - Asymmetric Hero + Floating Signal Chips
   Pilot page: /resources/
   ════════════════════════════════════════════════════════════════════════════ */
function Option3Hero() {
  const chips = [
    { label: 'Fraud', x: '5%', y: '12%', color: '#EEF6FF', border: 'rgba(30,111,183,0.2)', delay: '0s' },
    { label: 'AML', x: '62%', y: '8%', color: '#F0FDF4', border: 'rgba(22,163,74,0.2)', delay: '0.4s' },
    { label: 'Payment Risk', x: '72%', y: '38%', color: '#FFF7ED', border: 'rgba(217,119,6,0.2)', delay: '0.8s' },
    { label: 'Identity', x: '58%', y: '68%', color: '#FEF2F2', border: 'rgba(220,38,38,0.2)', delay: '1.2s' },
    { label: 'Device Signals', x: '8%', y: '72%', color: '#F5F3FF', border: 'rgba(124,58,237,0.2)', delay: '0.6s' },
    { label: 'Evidence Packs', x: '3%', y: '42%', color: '#F0F9FF', border: 'rgba(14,165,233,0.2)', delay: '1.0s' },
    { label: 'Graph Intelligence', x: '68%', y: '52%', color: '#ECFDF5', border: 'rgba(16,185,129,0.2)', delay: '0.2s' },
  ];

  return (
    <section style={{
      position: 'relative',
      padding: '5.5rem 0',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #F8FBFF 0%, #fff 55%, #F0F7FF 100%)',
      minHeight: '520px',
      display: 'flex',
      alignItems: 'center',
    }}>

      {/* Floating chips — purely decorative, aria-hidden */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {chips.map((chip, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: chip.x,
            top: chip.y,
            background: chip.background || chip.color,
            border: `1px solid ${chip.border}`,
            borderRadius: '100px',
            padding: '0.375rem 0.875rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--dark)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            whiteSpace: 'nowrap',
            animation: `float-chip 4s ease-in-out ${chip.delay} infinite alternate`,
          }}>
            {chip.label}
          </div>
        ))}
      </div>

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float-chip {
          0%   { transform: translateY(0px);   opacity: 0.7; }
          100% { transform: translateY(-10px); opacity: 1;   }
        }
      `}</style>

      {/* Content — left-biased center column */}
      <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '46rem' }}>

          <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>Knowledge Hub</p>

          <h1 style={{
            fontSize: 'clamp(1.875rem,5vw,3.5rem)',
            fontWeight: 700,
            color: 'var(--dark)',
            marginBottom: '1.25rem',
            lineHeight: 1.1,
            letterSpacing: '-0.032em',
          }}>
            Resources for Financial Crime, Fraud, and Payment Risk Teams
          </h1>

          <p style={{
            fontSize: 'clamp(1rem,2vw,1.1875rem)',
            color: 'var(--body)',
            lineHeight: 1.75,
            marginBottom: '2.25rem',
            maxWidth: '40rem',
          }}>
            Insights on investigation intelligence, fraud and AML workflows, mule account risk, evidence trails, and regulated money movement operations.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="#resources-grid" className="btn-primary">
              Explore Resources
              <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                <ArrowRight />
              </span>
            </a>
            <Link href="/request-demo" className="btn-secondary">Request Demo</Link>
          </div>

          {/* Topic tags — grounded row below CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.75rem' }}>
            {['Investigation Intelligence', 'Mule Account Risk', 'AML Workflows', 'Evidence Trails', 'Payment Risk'].map((tag, i) => (
              <span key={i} style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '6px',
                background: 'var(--bg-tag)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--muted-dark)',
                border: '1px solid var(--border-light)',
              }}>
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   EVALUATION SUMMARY TABLE
   ════════════════════════════════════════════════════════════════════════════ */
function EvaluationTable() {
  const options = [
    {
      number: 1,
      name: 'Left Aligned + Right Visual Card',
      description: 'Two-column layout - hero copy on the left, an illustrative data card on the right. The card uses real-feeling signal counts to show the platform in motion without over-committing on claims.',
      bestFit: '/platform/, /capabilities/, solution pages',
      pros: 'High visual weight; demonstrates product context; strong on desktop; communicates platform depth immediately',
      risks: 'Card content must remain clearly illustrative; needs careful mobile layout to avoid stacking awkwardly; card numbers must not imply guaranteed outcomes',
      complexity: 'Medium - card is purely CSS/JSX, no new assets needed',
      recommendation: 'Primary recommendation for /platform/ and solution pages. Strong differentiation from current centered layout.',
    },
    {
      number: 2,
      name: 'Centered + Soft Background Pattern',
      description: 'Centered composition preserved from current layout but elevated with a dot-grid pattern, radial orb gradients, a pill badge replacing the plain eyebrow, and a trust-chip row anchoring the bottom of the hero.',
      bestFit: '/solutions/investigation-intelligence/, /solutions/graph-intelligence/, /solutions/mule-account-detection/',
      pros: 'Lowest disruption to existing layout logic; compatible with current mobile styles; pattern and trust chips add visual depth without redesign; easiest to apply broadly',
      risks: 'Least differentiated from current layout; dot pattern must be subtle or it competes with text; trust chips should not be exhaustive (keep to 5)',
      complexity: 'Low - pattern and chips are pure CSS; pill badge replaces eyebrow class',
      recommendation: 'Recommended for solution and use-case pages. Safe, incremental upgrade. Good default if no option is selected within two weeks.',
    },
    {
      number: 3,
      name: 'Asymmetric + Floating Signal Chips',
      description: 'Left-aligned copy with floating pill chips scattered in the surrounding space - each chip names a signal category. Chips animate gently (float up/down) and are aria-hidden decorative elements. Topic tags anchor below the CTAs.',
      bestFit: '/resources/, /use-cases/ landing, /industries/ pages',
      pros: 'Highly distinctive; communicates signal breadth visually without adding body copy; animation is lightweight CSS only; works well for content-hub and awareness pages',
      risks: 'Chips must remain aria-hidden and never repeat claims; animation may be distracting if overused; chips could feel dated quickly; requires testing on low-motion preference (prefers-reduced-motion)',
      complexity: 'Medium - CSS animation required; chips need responsive positioning review; prefers-reduced-motion media query should be added before production',
      recommendation: 'Recommended for /resources/ and /industries/ pages. Not recommended for primary product/solution pages where clarity outweighs visual drama.',
    },
  ];

  return (
    <section id="evaluation" style={{ padding: '4rem 0', background: 'var(--bg-slate)' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>EVALUATION SUMMARY</p>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>
            Option comparison - choose one direction to proceed
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.7, maxWidth: '52rem' }}>
            All three options use the existing design system (CSS variables, btn-primary, btn-secondary, card classes). None require new image assets. Select one option and specify which pilot page to apply first.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {options.map((opt) => (
            <div key={opt.number} className="card" style={{ padding: '2rem', background: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{
                  flexShrink: 0,
                  width: '2.25rem', height: '2.25rem', borderRadius: '50%',
                  background: 'var(--primary)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.9375rem', fontWeight: 700,
                }}>
                  {opt.number}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.375rem', letterSpacing: '-0.02em' }}>
                    Option {opt.number} - {opt.name}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.65 }}>{opt.description}</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
                {[
                  { label: 'Best fit', value: opt.bestFit, color: 'var(--primary)' },
                  { label: 'Pros', value: opt.pros, color: '#16A34A' },
                  { label: 'Risks', value: opt.risks, color: '#D97706' },
                  { label: 'Complexity', value: opt.complexity, color: 'var(--muted-dark)' },
                  { label: 'Recommendation', value: opt.recommendation, color: 'var(--dark)' },
                ].map((item, i) => (
                  <div key={i}>
                    <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.375rem' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: item.color, lineHeight: 1.6, fontWeight: i === 0 ? 600 : 400 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* QA Checklist */}
        <div style={{ marginTop: '2.5rem', background: '#fff', borderRadius: '12px', border: '1px solid var(--border)', padding: '2rem' }}>
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>QA CHECKLIST</p>
          <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem' }}>
            Verified before this preview page was committed
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '0.625rem' }}>
            {[
              'Preview route /hero-visual-options/ renders all 3 options',
              'noindex robots meta tag present in page metadata',
              'Page NOT listed in public/sitemap.xml',
              'Page NOT linked from Header.js navigation',
              'Page NOT linked from Footer.js',
              'Homepage hero section - unchanged',
              'Homepage H1 - unchanged',
              '/platform/ live hero - unchanged',
              '/solutions/investigation-intelligence/ live hero - unchanged',
              '/resources/ live hero - unchanged',
              'No new overclaim phrases introduced',
              'JSX syntax validated - esbuild exit 0',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: '#16A34A', flexShrink: 0, marginTop: '0.125rem' }}><CheckIcon /></span>
                <span style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.55 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next step prompt */}
        <div style={{
          marginTop: '2rem',
          padding: '1.25rem 1.5rem',
          borderRadius: '10px',
          background: 'rgba(30,111,183,0.05)',
          border: '1px solid rgba(30,111,183,0.14)',
        }}>
          <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.375rem' }}>
            Next step
          </p>
          <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.65 }}>
            Review the three options above and select one. Specify which pilot page to apply first (/platform/, /solutions/investigation-intelligence/, or /resources/). Changes to live hero sections will only be made once a direction is confirmed.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
   PAGE ROOT
   ════════════════════════════════════════════════════════════════════════════ */
export default function HeroVisualOptionsPage() {
  return (
    <>
      <InternalBanner />
      <JumpNav />

      {/* Option 1 */}
      <div id="option-1">
        <OptionLabel
          number={1}
          title="Left-Aligned Hero + Right-Side Visual Card"
          pilotPage="/platform/"
          description="Two-column layout. Copy left, illustrative data card right. Best for product and solution pages where platform depth matters immediately."
        />
        <Option1Hero />
      </div>

      {/* Option 2 */}
      <div id="option-2">
        <OptionLabel
          number={2}
          title="Centered Hero + Soft Background Pattern"
          pilotPage="/solutions/investigation-intelligence/"
          description="Centered composition retained, elevated with dot-grid background, radial gradient orbs, a pill badge eyebrow, and a trust-chip row. Lowest disruption to existing layout logic."
        />
        <Option2Hero />
      </div>

      {/* Option 3 */}
      <div id="option-3">
        <OptionLabel
          number={3}
          title="Asymmetric Hero + Floating Signal Chips"
          pilotPage="/resources/"
          description="Left-aligned copy with floating decorative signal chips in surrounding space. Communicates signal breadth without adding body copy. Best for content-hub and awareness pages."
        />
        <Option3Hero />
      </div>

      {/* Evaluation */}
      <EvaluationTable />
    </>
  );
}
