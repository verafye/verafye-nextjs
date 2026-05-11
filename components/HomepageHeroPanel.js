/**
 * HomepageHeroPanel
 *
 * Exports two hero right-column variants for the Verafye homepage.
 * Controlled via NEXT_PUBLIC_HOMEPAGE_BG_VARIANT at build time.
 *
 * Variants:
 *   original      - the existing hero-network.png image (default)
 *   product-trial - mock product-UI cards (Alert Cluster, Case Intelligence,
 *                   Signal Sources, Audit Trail)
 *
 * To switch variants, set NEXT_PUBLIC_HOMEPAGE_BG_VARIANT in .env or the
 * build command, then rebuild. No code changes required.
 */

// ─── Original Panel ────────────────────────────────────────────────────────
// Exact reproduction of the current hero right-column. Do not modify.
export function OriginalHeroPanel() {
  return (
    <div
      className="animate-fade-right delay-300 hero-image"
      style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}
    >
      <img
        src="/images/hero-network.png"
        alt="Signal convergence visualization"
        loading="eager"
        style={{ width: '100%', maxWidth: '640px', height: 'auto', objectFit: 'contain' }}
      />
    </div>
  );
}

// ─── Product Trial Panel ────────────────────────────────────────────────────
// Mock product-UI cards inspired by the Verafye investigation workflow.
// Replaces the hero image in the product-trial variant.
//
// ── VIDEO SLOT (future) ──────────────────────────────────────────────────────
// When a product video is ready, replace <ProductTrialHeroPanel /> in page.js
// with a video embed. Example:
//   <video src="/videos/verafye-demo.mp4" autoPlay muted loop playsInline
//     style={{ width:'100%', borderRadius:'16px', boxShadow:'0 8px 32px rgba(30,111,183,0.15)' }} />
// ─────────────────────────────────────────────────────────────────────────────
export function ProductTrialHeroPanel() {
  const card = {
    background: '#ffffff',
    borderRadius: '12px',
    border: '1px solid rgba(30,111,183,0.1)',
    boxShadow: '0 2px 12px rgba(30,111,183,0.07), 0 1px 3px rgba(0,0,0,0.04)',
    overflow: 'hidden',
  };

  const alerts = [
    {
      id: 'TXN-48219',
      label: 'Velocity Fraud Pattern',
      level: 'HIGH',
      source: 'Fraud',
      accentColor: '#DC2626',
      levelBg: 'rgba(220,38,38,0.07)',
      levelBorder: 'rgba(220,38,38,0.18)',
    },
    {
      id: 'ACC-22910',
      label: 'Shared Device Network',
      level: 'HIGH',
      source: 'AML',
      accentColor: '#DC2626',
      levelBg: 'rgba(220,38,38,0.07)',
      levelBorder: 'rgba(220,38,38,0.18)',
    },
    {
      id: 'PAY-00331',
      label: 'Unusual Payment Route',
      level: 'MEDIUM',
      source: 'Payments',
      accentColor: '#D97706',
      levelBg: 'rgba(217,119,6,0.07)',
      levelBorder: 'rgba(217,119,6,0.18)',
    },
  ];

  const signalSources = [
    { label: 'Fraud',    dot: '#DC2626' },
    { label: 'AML',      dot: '#D97706' },
    { label: 'Payments', dot: '#1E6FB7' },
    { label: 'Identity', dot: '#7C3AED' },
    { label: 'Device',   dot: '#0891B2' },
    { label: 'Behavior', dot: '#059669' },
  ];

  const auditEntries = [
    { time: '09:14', action: 'Case opened · Cluster of 3 alerts ingested' },
    { time: '09:15', action: 'Entity enrichment complete · 4 entities resolved' },
    { time: '09:16', action: 'Graph intelligence built · Network of 7 nodes' },
    { time: '09:18', action: 'Decision logged · Case escalated for SAR review' },
  ];

  return (
    <div
      className="animate-fade-right delay-300 hero-image"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.625rem',
        width: '100%',
        maxWidth: '540px',
        alignSelf: 'center',
      }}
    >

      {/* ── App Chrome Header ─────────────────────────────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.625rem',
        padding: '0.5rem 0.875rem',
        background: 'rgba(255,255,255,0.75)',
        borderRadius: '10px',
        border: '1px solid rgba(30,111,183,0.09)',
      }}>
        <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'linear-gradient(135deg,#1E6FB7,#3B82F6)', flexShrink: 0 }}/>
        <span style={{ fontSize: '0.6875rem', fontWeight: '700', color: '#1E293B', letterSpacing: '-0.01em' }}>Verafye</span>
        <span style={{ fontSize: '0.5rem', color: '#94A3B8' }}>›</span>
        <span style={{ fontSize: '0.6875rem', color: '#475569', fontWeight: '500' }}>Investigation</span>
        <span style={{ fontSize: '0.5rem', color: '#94A3B8' }}>›</span>
        <span style={{ fontSize: '0.6875rem', color: '#1E6FB7', fontWeight: '600' }}>CASE-0142</span>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#059669' }}/>
          <span style={{ fontSize: '0.5rem', color: '#64748B', fontWeight: '600' }}>LIVE</span>
        </div>
      </div>

      {/* ── Card 1: Alert Cluster ─────────────────────────────────────────── */}
      <div style={card}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0.875rem 1rem', borderBottom: '1px solid #F1F5F9',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '1.75rem', height: '1.75rem', borderRadius: '6px',
              background: 'linear-gradient(135deg,rgba(30,111,183,0.12),rgba(90,178,255,0.12))',
              border: '1px solid rgba(30,111,183,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1E6FB7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/>
                <path d="M8 12h8M16 7l-6 4M16 17l-6-4"/>
              </svg>
            </div>
            <span style={{ fontSize: '0.8125rem', fontWeight: '700', color: '#1E293B', letterSpacing: '-0.01em' }}>
              Alert Cluster
            </span>
          </div>
          <span style={{
            fontSize: '0.6875rem', fontWeight: '700', color: '#DC2626',
            background: 'rgba(220,38,38,0.07)', border: '1px solid rgba(220,38,38,0.18)',
            borderRadius: '20px', padding: '0.2rem 0.625rem',
          }}>
            3 Alerts · HIGH
          </span>
        </div>

        {/* Alert rows */}
        {alerts.map((a) => (
          <div key={a.id} style={{
            display: 'flex', alignItems: 'center', gap: '0.625rem',
            padding: '0.625rem 1rem', borderBottom: '1px solid #F8FAFC',
            borderLeft: `3px solid ${a.accentColor}`,
          }}>
            <span style={{
              fontSize: '0.625rem', fontFamily: 'monospace', fontWeight: '600',
              color: '#64748B', minWidth: '5.5rem',
            }}>
              {a.id}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#475569', flex: 1, lineHeight: 1.3 }}>
              {a.label}
            </span>
            <span style={{
              fontSize: '0.5625rem', fontWeight: '700', color: a.accentColor,
              background: a.levelBg, border: `1px solid ${a.levelBorder}`,
              borderRadius: '4px', padding: '0.175rem 0.5rem', letterSpacing: '0.05em',
            }}>
              {a.level}
            </span>
            <span style={{
              fontSize: '0.5625rem', fontWeight: '600', color: '#94A3B8',
              background: '#F8FAFC', border: '1px solid #E2E8F0',
              borderRadius: '4px', padding: '0.175rem 0.5rem',
            }}>
              {a.source}
            </span>
          </div>
        ))}

        {/* Footer: mini entity graph + signal tags */}
        <div style={{
          padding: '0.75rem 1rem', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', background: '#FAFBFD',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="76" height="26" viewBox="0 0 76 26" aria-hidden="true">
              <line x1="12" y1="13" x2="36" y2="7"  stroke="#CBD5E1" strokeWidth="1.5"/>
              <line x1="12" y1="13" x2="36" y2="20" stroke="#CBD5E1" strokeWidth="1.5"/>
              <line x1="36" y1="7"  x2="62" y2="13" stroke="#1E6FB7" strokeWidth="1.5" strokeDasharray="3,2"/>
              <circle cx="12" cy="13" r="5"   fill="#1E6FB7" opacity="0.9"/>
              <circle cx="36" cy="7"  r="3.5" fill="#3B82F6" opacity="0.7"/>
              <circle cx="36" cy="20" r="3.5" fill="#3B82F6" opacity="0.7"/>
              <circle cx="62" cy="13" r="3"   fill="#94A3B8" opacity="0.55"/>
            </svg>
            <span style={{ fontSize: '0.625rem', color: '#94A3B8' }}>4 entities linked</span>
          </div>
          <div style={{ display: 'flex', gap: '0.3rem' }}>
            {['Fraud', 'AML', 'Payments'].map((s) => (
              <span key={s} style={{
                fontSize: '0.5625rem', fontWeight: '600', color: '#1E6FB7',
                background: 'rgba(30,111,183,0.07)', border: '1px solid rgba(30,111,183,0.12)',
                borderRadius: '3px', padding: '0.15rem 0.375rem',
              }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cards 2 + 3: Case Intelligence + Signal Sources ─────────────── */}
      <div className="product-trial-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>

        {/* Case Intelligence */}
        <div style={{ ...card, padding: '0.875rem 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: '700', color: '#1E293B', letterSpacing: '-0.01em' }}>
              Case Intelligence
            </span>
            <span style={{
              fontSize: '0.5625rem', fontWeight: '700', color: '#059669',
              background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.2)',
              borderRadius: '20px', padding: '0.15rem 0.5rem',
            }}>
              ACTIVE
            </span>
          </div>
          <div style={{ fontSize: '0.5625rem', fontFamily: 'monospace', color: '#94A3B8', marginBottom: '0.625rem' }}>
            CASE-0142 · Investigation
          </div>
          {/* Circular progress + stats row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="38" height="38" viewBox="0 0 36 36" aria-hidden="true" style={{ flexShrink: 0 }}>
              <circle cx="18" cy="18" r="14" fill="none" stroke="#EFF3F8" strokeWidth="3.5"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="#1E6FB7" strokeWidth="3.5"
                strokeDasharray="44 88" strokeLinecap="round"
                transform="rotate(-90 18 18)"/>
              <text x="18" y="18" textAnchor="middle" dominantBaseline="middle"
                fontSize="6.5" fontWeight="700" fill="#1E293B">50%</text>
            </svg>
            <div>
              <div style={{ fontSize: '0.5rem', color: '#94A3B8', marginBottom: '0.3rem', letterSpacing: '0.02em' }}>
                Stage 2 of 4 · In Progress
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[['3','Entities'],['7','Signals'],['2','Linked']].map(([n, l]) => (
                  <div key={l} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: '700', color: '#1E293B', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: '0.45rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.2rem' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Signal Sources */}
        <div style={{ ...card, padding: '0.875rem 1rem' }}>
          <div style={{ marginBottom: '0.625rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: '700', color: '#1E293B', letterSpacing: '-0.01em' }}>
              Signal Sources
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {signalSources.map((s) => (
              <div key={s.label} style={{
                display: 'flex', alignItems: 'center', gap: '0.3rem',
                fontSize: '0.6rem', fontWeight: '600', color: '#475569',
                background: '#F8FAFC', border: '1px solid #E2E8F0',
                borderRadius: '5px', padding: '0.25rem 0.5rem',
              }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: s.dot, display: 'inline-block', flexShrink: 0 }}/>
                {s.label}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '0.625rem', paddingTop: '0.625rem', borderTop: '1px solid #F1F5F9' }}>
            <span style={{ fontSize: '0.5625rem', color: '#94A3B8' }}>6 signal types connected</span>
          </div>
        </div>

      </div>

      {/* ── Card 4: Audit Trail ───────────────────────────────────────────── */}
      <div style={{ ...card, padding: '0.75rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.6875rem', fontWeight: '700', color: '#1E293B' }}>Audit Trail</span>
          <span style={{ fontSize: '0.5625rem', color: '#94A3B8', fontFamily: 'monospace' }}>CASE-0142</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {auditEntries.map((e) => (
            <div key={e.time} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              <span style={{ fontSize: '0.5625rem', fontFamily: 'monospace', color: '#94A3B8', minWidth: '2.25rem' }}>{e.time}</span>
              <span style={{ fontSize: '0.5625rem', color: '#64748B', lineHeight: 1.5 }}>{e.action}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
