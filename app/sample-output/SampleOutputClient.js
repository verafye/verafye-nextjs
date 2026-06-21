'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SampleOutputClient() {
  const router = useRouter();
  const [status, setStatus] = useState('checking'); // checking | unlocked | denied

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.sessionStorage.getItem('rsr_sample_unlocked') === 'true') {
      setStatus('unlocked');
    } else {
      setStatus('denied');
      router.replace('/risk-shadowing-review/request');
    }
  }, [router]);

  if (status !== 'unlocked') {
    return (
      <section style={{ padding: '6rem 0', textAlign: 'center', minHeight: '50vh' }}>
        <div className="container">
          <p style={{ fontSize: '1rem', color: 'var(--body)' }}>
            This sample is available after you request a Risk Shadowing Review.{' '}
            <Link href="/risk-shadowing-review/request" style={{ color: 'var(--primary)', fontWeight: 600 }}>
              Continue to the request form
            </Link>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ── PAGE HERO ────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', padding: '3.5rem 0 1rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>SAMPLE OUTPUT</p>
            <h1 style={{ fontSize: 'clamp(1.75rem,4.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Sample Risk Shadowing output
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', maxWidth: '44rem', margin: '0 auto' }}>
              Thanks for your request. Below is a synthetic example of how Verafye connects fragmented signals into a graph-linked, investigation-ready evidence pack. Our team will follow up to walk you through it on your own data scope.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. SAMPLE RISK SHADOWING EVIDENCE PACK ──────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 1.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Sample Output</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              See what a Risk Shadowing Review can produce
            </h2>
            <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
              Review a synthetic example of how Verafye connects fragmented signals into a graph-linked, investigation-ready evidence pack for analyst and compliance review.
            </p>
          </div>
          <div style={{ maxWidth: '52rem', margin: '0 auto 2rem' }}>
            <div className="card" style={{ padding: '1rem 1.25rem', background: 'rgba(30,111,183,0.06)', border: '1px solid rgba(30,111,183,0.18)', display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.1rem' }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              <span style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.6 }}>This example uses synthetic data only and is provided to illustrate the structure of Verafye&apos;s Risk Shadowing outputs.</span>
            </div>
          </div>

          <div className="card card-elevated" style={{ maxWidth: '60rem', margin: '0 auto', padding: 'clamp(1.5rem,3vw,2.5rem)' }}>

            {/* A. REVIEW SUMMARY */}
            <div style={{ marginBottom: '2.25rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>A · Review Summary</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1.5rem', marginBottom: '1rem' }}>
                {[
                  ['Case ID', 'RS-2026-014'],
                  ['Review Type', 'Risk Shadowing Review'],
                  ['Use Case', 'Mule-linked merchant and beneficiary network'],
                  ['Segment', 'PSP / PayFac / BaaS ecosystem'],
                  ['Data Scope', 'Controlled historical sample'],
                  ['Review Period', 'Synthetic 14-day window'],
                  ['Output Type', 'Investigation-ready evidence pack'],
                  ['Status', 'Analyst review recommended'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', borderBottom: '1px solid var(--border)', padding: '0.4rem 0' }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--muted)', fontWeight: 600 }}>{k}</span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--dark)', fontWeight: 600, textAlign: 'right' }}>{v}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7 }}>
                Verafye identified a linked risk cluster across multiple merchants, wallets, beneficiaries, device fingerprints, and payment events. The cluster showed repeated beneficiary reuse, shared device patterns, overlapping KYC attributes, and structured transaction behavior across entities that were previously reviewed as separate alerts.
              </p>
            </div>

            {/* B. INPUT SIGNALS ANALYZED */}
            <div style={{ marginBottom: '2.25rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>B · Input Signals Analyzed</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '1rem', fontStyle: 'italic' }}>Synthetic sample counts.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(9rem, 1fr))', gap: '0.75rem' }}>
                {[
                  ['42', 'existing alerts'],
                  ['318', 'payment events'],
                  ['9', 'merchants / sub-merchants'],
                  ['27', 'wallet or account identifiers'],
                  ['14', 'beneficiaries'],
                  ['6', 'anonymized device fingerprints'],
                  ['3', 'prior case references'],
                  ['2', 'program-level identifiers'],
                  ['1', 'sponsor-bank review tag'],
                ].map(([n, l]) => (
                  <div key={l} className="card" style={{ padding: '0.875rem 1rem' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark)', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem', lineHeight: 1.4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* C. NETWORK RISK FINDING */}
            <div style={{ marginBottom: '2.25rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>C · Network Risk Finding</p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Verafye detected that several alerts previously treated as separate events were linked through shared beneficiaries, repeated device fingerprints, similar KYB attributes, overlapping payout timing, and circular payment behavior.
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  'Merchant A and Merchant C share Beneficiary B-204',
                  'Wallet 1042 and Wallet 1189 share Device Hash D-91F3',
                  'Merchant B and Program Alpha show repeated payout timing patterns',
                  'Beneficiary B-204 appears across four unrelated alert events',
                  'Account Cluster 17 shows repeated low-value structuring behavior',
                  'Prior Case C-077 links to the same beneficiary and device pattern',
                ].map(r => (
                  <li key={r} style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.6 }}>{r}</li>
                ))}
              </ul>
            </div>

            {/* D. GRAPH-LINKED ENTITY VIEW */}
            <div style={{ marginBottom: '2.25rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>D · Graph-Linked Entity View</p>
              <div className="card" style={{ padding: '1rem', background: '#fff', overflowX: 'auto' }}>
                <svg viewBox="0 0 720 420" width="100%" style={{ minWidth: '520px', display: 'block' }} role="img" aria-label="Synthetic graph-linked entity view">
                  <g stroke="#9CB7D4" strokeWidth="1.5">
                    <line x1="150" y1="80" x2="430" y2="200"/>
                    <line x1="610" y1="95" x2="430" y2="200"/>
                    <line x1="120" y1="230" x2="225" y2="330"/>
                    <line x1="300" y1="265" x2="225" y2="330"/>
                    <line x1="380" y1="70" x2="635" y2="360"/>
                    <line x1="430" y1="200" x2="430" y2="355"/>
                    <line x1="560" y1="255" x2="430" y2="200"/>
                  </g>
                  <g fontSize="11" fill="#5B7186" fontWeight="600">
                    <text x="285" y="135">Shared beneficiary</text>
                    <text x="505" y="140">Shared beneficiary</text>
                    <text x="150" y="290">Shared device</text>
                    <text x="245" y="300">Shared device</text>
                    <text x="500" y="215">Repeated payout timing</text>
                    <text x="440" y="290">Linked prior case</text>
                    <text x="470" y="235">Circular payment flow</text>
                  </g>
                  {[
                    [150, 80, 'Merchant A'],
                    [380, 60, 'Merchant B'],
                    [610, 95, 'Merchant C'],
                    [120, 230, 'Wallet 1042'],
                    [300, 265, 'Wallet 1189'],
                    [225, 345, 'Device D-91F3'],
                    [430, 200, 'Beneficiary B-204'],
                    [560, 255, 'Account Cluster 17'],
                    [635, 365, 'Program Alpha'],
                    [430, 365, 'Prior Case C-077'],
                  ].map(([x, y, label]) => (
                    <g key={label}>
                      <rect x={x - 58} y={y - 16} width="116" height="32" rx="8" fill="#EFF6FF" stroke="#1E6FB7" strokeWidth="1.5"/>
                      <text x={x} y={y + 4} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1E6FB7">{label}</text>
                    </g>
                  ))}
                </svg>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.875rem' }}>
                {['Shared beneficiary', 'Shared device fingerprint', 'Similar KYB metadata', 'Repeated payout timing', 'Linked prior case', 'Same program-level pattern', 'Circular payment flow'].map(e => (
                  <span key={e} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--body)', background: 'var(--bg-tint)', border: '1px solid var(--border)', borderRadius: '999px', padding: '0.3rem 0.7rem' }}>{e}</span>
                ))}
              </div>
            </div>

            {/* E. RISK INDICATORS */}
            <div style={{ marginBottom: '2.25rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>E · Risk Indicators</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem', minWidth: '640px' }}>
                  <thead>
                    <tr style={{ textAlign: 'left', borderBottom: '2px solid var(--border)' }}>
                      <th style={{ padding: '0.6rem 0.75rem', fontWeight: 700, color: 'var(--dark)' }}>Indicator</th>
                      <th style={{ padding: '0.6rem 0.75rem', fontWeight: 700, color: 'var(--dark)' }}>Synthetic observation</th>
                      <th style={{ padding: '0.6rem 0.75rem', fontWeight: 700, color: 'var(--dark)' }}>Why it matters</th>
                      <th style={{ padding: '0.6rem 0.75rem', fontWeight: 700, color: 'var(--dark)' }}>Suggested review action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Shared beneficiary across unrelated merchants', 'Beneficiary B-204 across Merchant A and Merchant C', 'May indicate coordinated payout consolidation', 'Review beneficiary linkage across merchants'],
                      ['Device reuse across multiple wallets', 'Device Hash D-91F3 on Wallet 1042 and Wallet 1189', 'Suggests shared control of accounts', 'Validate device across related sessions'],
                      ['Structured low-value transactions', 'Account Cluster 17 repeated low-value activity', 'May indicate structuring behavior', 'Review transaction sequencing'],
                      ['Repeated payout timing', 'Merchant B and Program Alpha aligned timing', 'Suggests coordinated activity', 'Review payout schedules for the cluster'],
                      ['KYB metadata overlap', 'Overlapping onboarding attributes', 'May indicate linked ownership or control', 'Review onboarding and ownership records'],
                      ['Prior case linkage', 'Prior Case C-077 shares beneficiary and device', 'Connects current cluster to past review', 'Compare prior case with current cluster'],
                      ['Cross-program recurrence', 'Pattern recurs across program-level identifiers', 'May indicate cross-program network risk', 'Review activity across programs'],
                      ['Unusual counterparty concentration', 'Concentrated counterparties around B-204', 'Suggests narrow payout network', 'Review counterparty concentration'],
                      ['Alert clustering across fraud and AML rules', '42 alerts cluster across rule types', 'Linked activity may span fraud and AML', 'Joint fraud and AML review'],
                      ['Linked activity outside a single provider view', 'Linkage spans providers and programs', 'Single-system view may miss the network', 'Review connected, cross-provider context'],
                    ].map(row => (
                      <tr key={row[0]} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '0.6rem 0.75rem', color: 'var(--dark)', fontWeight: 600 }}>{row[0]}</td>
                        <td style={{ padding: '0.6rem 0.75rem', color: 'var(--body)' }}>{row[1]}</td>
                        <td style={{ padding: '0.6rem 0.75rem', color: 'var(--body)' }}>{row[2]}</td>
                        <td style={{ padding: '0.6rem 0.75rem', color: 'var(--body)' }}>{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* F. RISK NARRATIVE */}
            <div style={{ marginBottom: '2.25rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>F · Risk Narrative</p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7 }}>
                Viewed individually, the alerts appeared to involve separate merchants and wallets. When connected through Verafye&apos;s graph-native intelligence layer, the activity formed a linked network involving shared beneficiaries, repeated device patterns, overlapping KYB attributes, and recurring payment timing. The evidence may indicate a connected network and suggests review. The cluster should be reviewed as a connected network case rather than separate low-priority alerts, and requires analyst validation. Recommended for investigation.
              </p>
            </div>

            {/* G. CASE-READY EVIDENCE PACK */}
            <div style={{ marginBottom: '2.25rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>G · Case-Ready Evidence Pack</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))', gap: '0.5rem' }}>
                {[
                  'Cluster summary', 'Linked entity list', 'Relationship map', 'Alert-to-case grouping', 'Risk indicators', 'Supporting payment events', 'KYC / KYB linkage summary', 'Device and identity linkage summary', 'Prior case references', 'Analyst notes', 'Recommended review steps', 'Audit-ready decision summary',
                ].map(i => (
                  <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M20 6 9 17l-5-5"/></svg>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--body)' }}>{i}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* H. ANALYST REVIEW NOTES */}
            <div style={{ marginBottom: '2.25rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>H · Analyst Review Notes</p>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  'Review Beneficiary B-204 across all linked merchants and wallets.',
                  'Validate whether Merchant A, Merchant B, and Merchant C share ownership, control, or onboarding attributes.',
                  'Review Device Hash D-91F3 across related wallets and sessions.',
                  'Compare Prior Case C-077 with current cluster RS-2026-014.',
                  'Escalate for enhanced review if ownership, beneficiary, or device linkage is confirmed.',
                ].map(n => (
                  <li key={n} style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.6 }}>{n}</li>
                ))}
              </ul>
            </div>

            {/* I. AUDIT-READY DECISION SUPPORT */}
            <div style={{ marginBottom: '2.25rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>I · Audit-Ready Decision Support</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  ['Recommended disposition', 'Enhanced review recommended'],
                  ['Confidence direction', 'Network linkage observed, analyst validation required'],
                  ['Suggested escalation', 'Fraud and AML joint review'],
                  ['Evidence basis', 'Shared beneficiary, shared device, KYB overlap, payment timing, prior case link'],
                  ['Documentation status', 'Case-ready summary available'],
                  ['Next action', 'Validate linked entities and determine whether escalation, monitoring, filing review, or customer outreach is required'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem', borderBottom: '1px solid var(--border)', padding: '0.45rem 0' }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--muted)', fontWeight: 600, minWidth: '12rem' }}>{k}</span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--dark)', flex: 1 }}>{v}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '0.875rem', fontStyle: 'italic' }}>
                Filing review may be considered based on institution policy and analyst validation.
              </p>
            </div>

            {/* J. WHAT THIS DEMONSTRATES */}
            <div>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>J · What This Demonstrates</p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1rem' }}>
                This synthetic example shows how Verafye can help teams move from fragmented alerts to connected investigation context. A Risk Shadowing Review can reveal linked entities, suspicious clusters, repeated identifiers, beneficiary reuse, device patterns, and case relationships that may not be visible inside a single system or provider view.
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {[
                  'Connects alerts into case-ready clusters',
                  'Detects hidden network relationships',
                  'Helps analysts see entity, device, merchant, beneficiary, and payment linkages',
                  'Produces evidence packs for review',
                  'Supports explainable, audit-ready decisions',
                  'Lets teams validate value before deeper deployment',
                ].map(b => (
                  <li key={b} style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.6 }}>{b}</li>
                ))}
              </ul>
            </div>

            {/* Evidence pack CTA */}
            <div style={{ marginTop: '2.25rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/risk-shadowing-review/request" className="btn-primary">
                Request a Risk Shadowing Review
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
              <Link href="/request-demo" className="btn-secondary">Book a Verafye Walkthrough</Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
