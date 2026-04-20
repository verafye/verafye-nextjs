'use client';
import { useState } from 'react';
import Link from 'next/link';

/* ─── Arrow icon reused across CTAs ─── */
function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* ─── Check icon for bullet lists ─── */
function CheckIcon({ color }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color || 'var(--primary)'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.2rem' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ─── Dot icon for tight lists ─── */
function Dot({ color }) {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill={color || 'var(--primary)'} stroke="none" style={{ flexShrink: 0, marginTop: '0.35rem' }}>
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}

function trackDemoCta(location) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'demo_cta_click', page: 'malta_gaming_aml', location });
  }
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function MaltaGamingContent() {

  /* ── 1. HERO ────────────────────────────────────────────────────── */
  return (
    <>
      <section style={{ background: 'linear-gradient(180deg,#EEF6FF 0%,#fff 100%)', padding: '4.5rem 0 5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>

            {/* Left */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(30,111,183,0.08)', border: '1px solid rgba(30,111,183,0.2)', borderRadius: '100px', padding: '0.35rem 0.875rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1e6fb7', flexShrink: 0 }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1e6fb7', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  MGA-Licensed Gaming Operators &middot; AML, Fraud &amp; Payments Intelligence
                </span>
              </div>

              <h1 className="animate-fade-up" style={{ fontSize: 'clamp(1.875rem,4.5vw,3.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
                Connected Fraud and AML Intelligence for Malta Gaming
              </h1>

              <p className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', marginBottom: '2rem', lineHeight: 1.7, maxWidth: '38rem' }}>
                Verafye connects fraud, AML, and payments signals across your player base - surfacing linked accounts, mule networks, and transaction anomalies in a single investigation layer. Built for the operational and regulatory demands of MGA-licensed operators.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2.25rem' }}>
                {[
                  'Detect linked accounts and coordinated player networks - not just individual flagged transactions',
                  'Unified alerts across fraud, AML, and payments - one investigation view, not three separate systems',
                  'Audit-ready case trails aligned with MGA and FIAU documentation expectations',
                ].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                    <CheckIcon />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.55 }}>{t}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Link href="/request-demo" className="btn-primary" onClick={() => trackDemoCta('hero_primary')}>
                  Request Demo
                  <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}><ArrowIcon /></span>
                </Link>
                <Link href="/contact" className="btn-secondary" onClick={() => trackDemoCta('hero_secondary')}>
                  Speak to a Specialist
                </Link>
              </div>
            </div>

            {/* Right: context cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  label: 'MGA & FIAU Scrutiny',
                  body: 'Malta\'s regulator and financial intelligence unit expect structured, documented AML processes - not just monitoring dashboards.',
                },
                {
                  label: 'Linked Account Exposure',
                  body: 'Coordinated bonus abuse, mule networks, and shell accounts hide in plain sight when fraud and AML tools operate in isolation.',
                },
                {
                  label: 'Alert-to-Investigation Gap',
                  body: 'High transaction volumes and fragmented tooling create alert fatigue - leaving compliance teams unable to prioritise or escalate effectively.',
                },
              ].map((item) => (
                <div key={item.label} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.375rem' }}>{item.label}</div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ──────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Challenge</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                What MGA-Licensed Operators Are Up Against
              </h2>
              <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', marginTop: '1rem', lineHeight: 1.7 }}>
                The compliance challenge in Malta gaming is not a lack of tools. It is the inability to connect signals across tools - leaving the most important risks invisible until it is too late to act.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="7" height="7"/><rect x="15" y="3" width="7" height="7"/><rect x="15" y="14" width="7" height="7"/><rect x="2" y="14" width="7" height="7"/>
                    </svg>
                  ),
                  title: 'Siloed Fraud and AML Systems',
                  body: 'Separate fraud detection, AML transaction monitoring, and payments risk tools generate uncoordinated alerts. A player flagged in one system remains invisible in another - exactly the gap coordinated financial crime exploits.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                  title: 'Linked Accounts Hiding in Plain Sight',
                  body: 'Multiple accounts operated by the same individual or coordinated network share devices, payment methods, and behavioural patterns. Without cross-account signal correlation, each account looks clean on its own.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  ),
                  title: 'Alert Volumes That Exceed Analyst Capacity',
                  body: 'High transaction throughput and rule-based monitoring combine to produce alert volumes that compliance teams cannot meaningfully review. Triage becomes guesswork, and genuine risk is buried under noise.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/>
                    </svg>
                  ),
                  title: 'Investigation Evidence That Cannot Be Produced Quickly',
                  body: 'When the MGA or FIAU requests documentation, assembling investigation trails manually from multiple systems is slow and inconsistent. Incomplete evidence creates regulatory exposure beyond the underlying compliance issue.',
                },
              ].map((item) => (
                <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '10px', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.125rem' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY TRADITIONAL MONITORING FAILS ─────────────────────── */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Monitoring Gap</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Why Standard Transaction Monitoring Falls Short in Gaming
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
              {[
                {
                  number: '01',
                  title: 'Rules Designed for Banking, Not Gaming',
                  body: 'Standard AML rule sets are calibrated for banking transaction patterns. Gaming deposits, withdrawals, bonus cycles, and player lifecycle behaviour require different signal logic - and static banking rules generate disproportionate false positive rates in gaming environments.',
                },
                {
                  number: '02',
                  title: 'Transaction-Level View Misses Network-Level Risk',
                  body: 'Monitoring individual transactions identifies isolated events. Coordinated mule networks, linked bonus abuse, and multi-account layering schemes are network-level patterns that only become visible when account relationships are mapped and analysed together.',
                },
                {
                  number: '03',
                  title: 'Alerts Without Investigation Context',
                  body: 'A system that generates alerts without the evidence layer to support investigation creates operational paralysis. Analysts spend more time assembling context than they do making decisions - slowing STR filing, escalation, and regulatory response.',
                },
              ].map((item) => (
                <div key={item.number} className="card" style={{ padding: '2rem', borderTop: '3px solid var(--primary)' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{item.number}</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. VERAFYE SOLUTION ─────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ maxWidth: '52rem', margin: '0 auto 3.5rem', textAlign: 'center' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Verafye Platform</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                A Connected Intelligence Layer - Not Another Point Tool
              </h2>
              <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', marginTop: '1rem', lineHeight: 1.7 }}>
                Verafye sits across your existing fraud, AML, and payments infrastructure - unifying signals into a single intelligence layer that surfaces risk at the network level, not just the transaction level.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                {
                  gradient: 'gradient-bg-1',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>,
                  title: 'Linked Account & Network Detection',
                  body: 'Verafye maps relationships across accounts - shared devices, payment instruments, IP patterns, and behavioural fingerprints. Coordinated player networks, multi-account abuse, and mule clusters are surfaced as connected risk, not isolated alerts.',
                },
                {
                  gradient: 'gradient-bg-2',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>,
                  title: 'Unified Fraud, AML & Payments Intelligence',
                  body: 'Fraud signals, AML indicators, and payments risk operate within one platform - not three. A player flagged for transaction structuring surfaces in both fraud and AML workflows simultaneously, eliminating the cross-system blind spots that fragmented tools create.',
                },
                {
                  gradient: 'gradient-bg-3',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
                  title: 'Investigation-Ready Case Management',
                  body: 'Every alert generates a structured case with pre-assembled evidence - transaction history, network context, signal timeline, and analyst actions. STR preparation, escalation, and MGA or FIAU documentation requests are answered from a single, complete case file.',
                },
                {
                  gradient: 'gradient-bg-4',
                  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
                  title: 'Configurable Rules - No Vendor Dependency',
                  body: 'Your MLRO and risk team configure, modify, and activate detection rules without a change request. Signal logic stays aligned with your player risk profile, evolving product features, and regulatory guidance - not a vendor release cycle.',
                },
              ].map((item) => (
                <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                  <div className={`card-icon ${item.gradient}`}>{item.icon}</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>

            {/* Contrast panel - fragmented tools vs Verafye */}
            <div style={{ background: 'var(--bg-light)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem 2.5rem' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5rem', textAlign: 'center' }}>
                Fragmented tools vs. Verafye
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', marginBottom: '0.875rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>
                    Typical Fragmented Setup
                  </div>
                  {[
                    'Separate fraud, AML, and payments tools with no shared data layer',
                    'Cross-system alert correlation done manually by analysts',
                    'Investigation evidence assembled from multiple platforms',
                    'Rule changes require vendor involvement and release cycles',
                    'Network-level risk invisible at the individual-tool level',
                  ].map((t) => (
                    <div key={t} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.2rem' }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.55 }}>{t}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.875rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(30,111,183,0.2)' }}>
                    Verafye Connected Intelligence
                  </div>
                  {[
                    'Single intelligence layer across fraud, AML, and payments signals',
                    'Cross-system correlation happens automatically at the platform level',
                    'Structured case files with pre-assembled evidence generated per alert',
                    'Your team updates rules directly - no vendor dependency',
                    'Network-level risk detection across linked accounts and player clusters',
                  ].map((t) => (
                    <div key={t} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <CheckIcon />
                      <span style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.55 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. GAMING USE CASES ─────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Use Cases</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
                What Verafye Detects in Gaming Environments
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
              {[
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>,
                  title: 'Linked Account Detection',
                  points: [
                    'Shared device identifiers across accounts',
                    'Common payment instruments or funding sources',
                    'Correlated session and behavioural patterns',
                    'Network-mapped account clusters flagged as single risk entities',
                  ],
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                  title: 'Mule Network Detection',
                  points: [
                    'Rapid deposit-and-withdrawal patterns post-onboarding',
                    'Accounts used as pass-throughs with minimal play activity',
                    'Coordinated timing and value patterns across accounts',
                    'External source-of-funds inconsistency signals',
                  ],
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                  title: 'Coordinated Bonus Exploitation',
                  points: [
                    'Multi-account bonus claim patterns from linked identities',
                    'Behavioural fingerprints consistent across bonus-claiming accounts',
                    'Promotion abuse correlated with low-risk wagering strategies',
                    'Velocity and timing signals across account clusters',
                  ],
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>,
                  title: 'Transaction Anomaly Detection',
                  points: [
                    'Structuring patterns in deposit and withdrawal sequences',
                    'Round-trip fund flows inconsistent with gaming activity',
                    'High-value transaction velocity relative to player profile',
                    'Payment method switching correlated with risk escalation',
                  ],
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                  title: 'VIP & High-Value Player Risk',
                  points: [
                    'Behavioural drift detection across the player lifecycle',
                    'Source-of-wealth signal monitoring for high-deposit accounts',
                    'Risk escalation triggers aligned with enhanced due diligence thresholds',
                    'Audit trails for all VIP-level compliance decisions',
                  ],
                },
                {
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
                  title: 'STR & Regulatory Readiness',
                  points: [
                    'Pre-assembled evidence packages per investigated account',
                    'Timestamped analyst decision logs for all case actions',
                    'Structured export formats aligned with FIAU reporting expectations',
                    'MGA inspection documentation produced on demand',
                  ],
                },
              ].map((item) => (
                <div key={item.title} className="card" style={{ padding: '1.75rem' }}>
                  <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '8px', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.875rem' }}>{item.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {item.points.map((pt) => (
                      <li key={pt} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.8rem', color: 'var(--body)', lineHeight: 1.55 }}>
                        <Dot />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. OPERATIONAL OUTCOMES ─────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Operational Impact</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
                What Changes When Signals Are Connected
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }}>
              {[
                {
                  from: 'Three separate alert queues across fraud, AML, and payments tools',
                  to: 'One unified investigation view with cross-signal context pre-assembled',
                },
                {
                  from: 'Linked accounts detected only after fraud or AML loss has occurred',
                  to: 'Account relationships mapped proactively - coordinated risk visible before escalation',
                },
                {
                  from: 'STR preparation requiring manual evidence compilation across systems',
                  to: 'Structured case files with full evidence ready for FIAU submission',
                },
                {
                  from: 'Rule changes requiring vendor involvement and scheduled releases',
                  to: 'Compliance team updates detection logic directly - no external dependency',
                },
                {
                  from: 'VIP risk reviews triggered reactively after threshold breaches',
                  to: 'Behavioural drift detected across the full player lifecycle - earlier intervention',
                },
                {
                  from: 'MGA inspection documentation assembled under time pressure',
                  to: 'Audit-ready records available on demand - no reactive scramble',
                },
              ].map((item) => (
                <div key={item.from} className="card" style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'start' }}>
                  <div>
                    <div style={{ fontSize: '0.625rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Before</div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{item.from}</p>
                  </div>
                  <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '1rem' }}>
                    <div style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>With Verafye</div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>{item.to}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.875rem', letterSpacing: '-0.025em' }}>
              See Verafye in an iGaming Context
            </h2>
            <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.0625rem)', color: 'var(--body)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
              Request a walkthrough tailored to Malta gaming - linked account detection, unified AML and fraud workflows, and investigation-ready case management.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/request-demo" className="btn-primary" onClick={() => trackDemoCta('mid_page')}>
                Request Demo
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}><ArrowIcon /></span>
              </Link>
              <Link href="/contact" className="btn-secondary" onClick={() => trackDemoCta('mid_page_secondary')}>
                Speak to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ──────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Questions</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
                What MLROs and Compliance Leaders Ask
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  q: 'We already have an AML transaction monitoring system. Why would we need Verafye?',
                  a: 'Most AML transaction monitoring systems operate at the individual account level and generate alerts without the investigation layer needed to act on them. Verafye sits across your existing systems - connecting fraud, AML, and payments signals, mapping account relationships, and generating structured case evidence. It adds the intelligence and investigation layer that point tools lack.',
                },
                {
                  q: 'Does Verafye replace our existing fraud or AML systems?',
                  a: 'No. Verafye is designed as an intelligence layer that connects to and enriches your existing infrastructure - it does not require you to replace current systems. Integration is additive, not disruptive.',
                },
                {
                  q: 'How does Verafye support MGA and FIAU compliance requirements specifically?',
                  a: 'Verafye generates structured, timestamped case files for every investigated account - including signal history, analyst decision logs, escalation records, and evidence packages. These are aligned with the documentation expectations of MGA inspections and FIAU reporting. Your compliance team can produce inspection-ready records on demand rather than assembling them under time pressure.',
                },
                {
                  q: 'How long does implementation take for a Malta-licensed operator?',
                  a: 'Implementation timelines depend on your existing infrastructure and integration scope. Verafye is designed to connect across existing systems rather than replace them, which reduces deployment complexity significantly. We scope deployment timelines as part of the initial engagement - the demo walkthrough includes an integration discussion.',
                },
                {
                  q: 'Can our compliance team configure detection rules without involving your team?',
                  a: 'Yes. Verafye includes a configurable rule engine that your MLRO and risk team operate directly. Detection logic can be created, modified, and activated without a vendor change request or release cycle. This is a deliberate design decision - your signal configuration should respond to your risk environment, not a vendor schedule.',
                },
              ].map((item, idx) => (
                <FAQItem key={idx} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg,#0f2744 0%,#1a4070 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              Malta Gaming &middot; AML &amp; Fraud Intelligence
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: '#fff', marginBottom: '1.125rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              Connected Intelligence for Your Compliance Team
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'rgba(255,255,255,0.72)', marginBottom: '2.25rem', lineHeight: 1.7, maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              See how Verafye connects fraud, AML, and payments intelligence for MGA-licensed operators - linked account detection, unified investigation workflows, and audit-ready case management in a single walkthrough.
            </p>
            <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/request-demo"
                onClick={() => trackDemoCta('final_cta_primary')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', height: '3rem', padding: '0 1.75rem', background: '#fff', color: '#0f2744', borderRadius: '8px', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none', border: '2px solid transparent' }}
              >
                Request Demo
                <ArrowIcon />
              </Link>
              <Link
                href="/contact"
                onClick={() => trackDemoCta('final_cta_secondary')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', height: '3rem', padding: '0 1.75rem', background: 'transparent', color: '#fff', borderRadius: '8px', fontWeight: 600, fontSize: '0.9375rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)' }}
              >
                Speak to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

/* ─── FAQ Accordion Item ──────────────────────────────────────────── */
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{ width: '100%', background: 'none', border: 'none', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', cursor: 'pointer', textAlign: 'left' }}
        aria-expanded={open}
      >
        <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--dark)', lineHeight: 1.5, flex: 1 }}>{question}</span>
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ flexShrink: 0, marginTop: '0.15rem', transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div style={{ padding: '0 1.5rem 1.25rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, margin: '1rem 0 0' }}>{answer}</p>
        </div>
      )}
    </div>
  );
}
