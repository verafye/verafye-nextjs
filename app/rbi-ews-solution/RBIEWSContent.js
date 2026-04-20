'use client';
import { useState } from 'react';
import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────────────────
   ASSESSMENT CONFIG
───────────────────────────────────────────────────────────────────────── */
const QUESTIONS = [
  {
    id: 'q1',
    text: 'How do you currently monitor borrower health post-disbursement?',
    options: [
      { label: 'Periodic manual reviews or batch-based reports', score: 1 },
      { label: 'Rule-based system alerts triggered on select events', score: 2 },
      { label: 'Continuous, automated real-time monitoring across all accounts', score: 3 },
    ],
  },
  {
    id: 'q2',
    text: 'How are your Early Warning Signal (EWS) rules configured?',
    options: [
      { label: 'Static rules set at system implementation - rarely updated', score: 1 },
      { label: 'Periodically reviewed and updated by the risk team', score: 2 },
      { label: 'Dynamic, configurable rules updated without vendor dependency', score: 3 },
    ],
  },
  {
    id: 'q3',
    text: 'Are your lending systems (LOS, LMS, payments, bureau) connected for EWS purposes?',
    options: [
      { label: 'Largely siloed - signals extracted via manual data pulls', score: 1 },
      { label: 'Partially integrated - some cross-system visibility', score: 2 },
      { label: 'Fully unified - all sources feed a single intelligence layer', score: 3 },
    ],
  },
  {
    id: 'q4',
    text: 'Do you systematically classify Red Flagged Accounts (RFAs) per RBI guidelines?',
    options: [
      { label: 'No formal RFA classification process exists', score: 1 },
      { label: 'RFA classification done manually or on an ad hoc basis', score: 2 },
      { label: 'Automated RFA classification with full audit trail', score: 3 },
    ],
  },
  {
    id: 'q5',
    text: 'Can your risk team produce audit-ready EWS documentation for RBI inspection?',
    options: [
      { label: 'Documentation is largely manual and time-consuming', score: 1 },
      { label: 'Partially automated - some logs exist, some compiled manually', score: 2 },
      { label: 'Fully audit-ready - timestamped, structured, and exportable on demand', score: 3 },
    ],
  },
  {
    id: 'q6',
    text: 'How quickly can your team detect early stress signals in a borrower account?',
    options: [
      { label: 'Days to weeks - dependent on periodic batch reports', score: 1 },
      { label: 'Hours - system flags reviewed on a scheduled basis', score: 2 },
      { label: 'Minutes - real-time alerts with automated escalation workflows', score: 3 },
    ],
  },
  {
    id: 'q7',
    text: 'Does your EWS framework incorporate multi-lender exposure and bureau-level signals?',
    options: [
      { label: 'No - limited to internal transaction and repayment data only', score: 1 },
      { label: 'Partial - some bureau data integrated manually or periodically', score: 2 },
      { label: 'Yes - multi-source signals including bureau, payments, and external data', score: 3 },
    ],
  },
];

const SCORE_BANDS = [
  {
    min: 7,
    max: 11,
    label: 'Basic',
    color: '#dc2626',
    bgColor: '#fef2f2',
    borderColor: '#fecaca',
    headline: 'Significant EWS Gaps Identified',
    summary:
      'Your current EWS framework relies heavily on manual processes and siloed data. This creates material exposure to NPA escalation, RBI inspection risk, and missed early warning signals across your portfolio.',
    action:
      'A structured EWS implementation is urgent. Our team can map your fastest path to RBI compliance and real-time monitoring.',
  },
  {
    min: 12,
    max: 16,
    label: 'Moderate',
    color: '#d97706',
    bgColor: '#fffbeb',
    borderColor: '#fde68a',
    headline: 'Partial EWS Capability - Key Gaps Remain',
    summary:
      'You have foundational EWS processes in place, but gaps in real-time monitoring, system integration, and audit readiness leave you exposed. RBI expectations are evolving - partial compliance is increasingly insufficient.',
    action:
      'A targeted EWS enhancement programme can close these gaps quickly. Our team can identify the highest-priority areas for your portfolio.',
  },
  {
    min: 17,
    max: 21,
    label: 'Advanced',
    color: '#1e6fb7',
    bgColor: '#eff6ff',
    borderColor: '#bfdbfe',
    headline: 'Strong EWS Foundation',
    summary:
      'Your EWS framework is well-developed. Targeted enhancements in behavioural analytics, cross-system intelligence, and dynamic signal configuration can further strengthen your compliance posture and NPA detection capability.',
    action:
      'Explore how Verafye can add a graph-native intelligence layer to your existing EWS infrastructure.',
  },
];

function getScoreBand(score) {
  return SCORE_BANDS.find((b) => score >= b.min && score <= b.max) || SCORE_BANDS[0];
}

const INITIAL_LEAD = { name: '', email: '', company: '', role: '' };
const CONTACT_ENDPOINT = '/api/contact';

/* ─────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────── */
export default function RBIEWSContent() {
  /* Assessment state */
  const [answers, setAnswers] = useState({});
  const [assessmentError, setAssessmentError] = useState('');
  const [phase, setPhase] = useState('questions'); // 'questions' | 'score' | 'done'
  const [score, setScore] = useState(null);
  const [band, setBand] = useState(null);

  /* Lead form state */
  const [lead, setLead] = useState(INITIAL_LEAD);
  const [leadErrors, setLeadErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  function handleAnswer(qId, val) {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
    if (assessmentError) setAssessmentError('');
  }

  function handleGetScore() {
    if (Object.keys(answers).length < QUESTIONS.length) {
      setAssessmentError(`Please answer all ${QUESTIONS.length} questions before getting your score.`);
      return;
    }
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    const scoreBand = getScoreBand(total);
    setScore(total);
    setBand(scoreBand);
    setPhase('score');
    setTimeout(() => {
      document.getElementById('ews-score-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  function handleLeadChange(e) {
    const { name, value } = e.target;
    setLead((prev) => ({ ...prev, [name]: value }));
    if (leadErrors[name]) setLeadErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function validateLead() {
    const e = {};
    if (!lead.name.trim()) e.name = 'Required';
    if (!lead.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email))
      e.email = 'Valid work email required';
    if (!lead.company.trim()) e.company = 'Required';
    if (!lead.role.trim()) e.role = 'Required';
    return e;
  }

  async function handleLeadSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;
    const errs = validateLead();
    if (Object.keys(errs).length > 0) { setLeadErrors(errs); return; }
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const answerDetails = QUESTIONS.map((q, i) => {
        const opt = q.options.find((o) => o.score === answers[q.id]);
        return `Q${i + 1}: ${q.text}\nAnswer: ${opt?.label || 'N/A'}`;
      }).join('\n\n');

      const payload = {
        clientName: lead.company.trim(),
        emailAddress: lead.email.trim(),
        phoneNumber: '',
        subject: `EWS Readiness Assessment - ${lead.company.trim()} - ${band.label} (${score}/21)`,
        message: [
          `Name: ${lead.name.trim()}`,
          `Work Email: ${lead.email.trim()}`,
          `Company / NBFC: ${lead.company.trim()}`,
          `Role: ${lead.role.trim()}`,
          `EWS Score: ${score}/21`,
          `EWS Readiness Level: ${band.label}`,
          `\nAssessment Responses:\n${answerDetails}`,
        ].join('\n'),
        institutionUuid: null,
        fileReference: null,
        category: 'EWS Assessment',
      };

      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      let result = null;
      const ct = response.headers.get('content-type') || '';
      if (ct.includes('application/json')) result = await response.json();
      const isSuccess =
        response.ok &&
        (!result || result.status === undefined || Number(result.status) === 1 || result.success === true);
      if (!isSuccess) throw new Error('Submission failed');

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'form_submission', form_type: 'ews_assessment' });

      setPhase('done');
    } catch {
      setSubmitError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldStyle = (hasError) => (hasError ? { borderColor: 'var(--error)' } : {});
  const errText = (msg) =>
    msg ? (
      <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{msg}</p>
    ) : null;

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  /* ── ICONS (reusable) ─────────────────────────────────────────── */
  const ChevronIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
  const CheckIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <>

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'linear-gradient(180deg,#EEF6FF 0%,#fff 100%)', padding: '4.5rem 0 5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '4rem', alignItems: 'center' }}>

            {/* Left */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(30,111,183,0.08)', border: '1px solid rgba(30,111,183,0.2)', borderRadius: '100px', padding: '0.35rem 0.875rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1e6fb7', flexShrink: 0 }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1e6fb7', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  RBI EWS Mandate - NBFCs &amp; Digital Lenders
                </span>
              </div>

              <h1 className="animate-fade-up" style={{ fontSize: 'clamp(1.875rem,4.5vw,3.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
                RBI-Ready Early Warning<br />
                &amp; Risk Intelligence{' '}
                <span style={{ color: 'var(--primary)' }}>for NBFCs</span>
              </h1>

              <p className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', marginBottom: '2rem', lineHeight: 1.7, maxWidth: '38rem' }}>
                Real-time borrower monitoring, configurable EWS signals, and audit-ready workflows - purpose-built to meet RBI's Early Warning System expectations for NBFCs and digital lenders in India.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2.25rem' }}>
                {[
                  'Aligned with RBI\'s EWS and Red Flagged Account (RFA) framework',
                  'Real-time signals across LOS, LMS, payments, and bureau data',
                  'Configurable rules - your team updates signals without vendor dependency',
                  'Audit-ready case management with timestamped documentation',
                ].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.2rem' }}>{CheckIcon}</span>
                    <span style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.55 }}>{t}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a href="#ews-assessment" className="btn-primary" onClick={scrollTo('ews-assessment')}>
                  Request EWS Readiness Assessment
                  <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>{ChevronIcon}</span>
                </a>
                <Link href="/request-demo" className="btn-secondary">See Platform in Action</Link>
              </div>
            </div>

            {/* Right: stat cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { stat: 'SMA-0', label: 'RBI requires EWS triggers to activate at SMA-0 - before any overdue occurs. Most NBFCs flag risk far too late.' },
                { stat: '₹2L Cr+', label: 'Estimated NPA exposure across the NBFC sector attributable to late or absent early warning detection.' },
                { stat: '43%', label: 'Of NBFCs still rely on manual or semi-automated EWS processes - creating material audit and compliance risk.' },
              ].map((item) => (
                <div key={item.stat} className="card" style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.625rem', fontWeight: 700, color: 'var(--primary)', flexShrink: 0, letterSpacing: '-0.03em', minWidth: '4rem' }}>{item.stat}</div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.55, margin: 0 }}>{item.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. PROBLEM SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Problem</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Most NBFCs Are Not Truly EWS-Ready
              </h2>
              <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', marginTop: '1rem', lineHeight: 1.7 }}>
                Legacy systems, manual workflows, and disconnected data leave institutions exposed - exactly when RBI scrutiny is at its highest.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  ),
                  title: 'Static EWS Rules That Don\'t Adapt',
                  body: 'Rules configured at implementation become stale within months. When borrower behaviour evolves - as it does during economic stress cycles - static systems miss new patterns, creating a false sense of compliance while risk accumulates silently.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  title: 'No Real-Time Monitoring',
                  body: 'Batch-based or periodic reporting means stress signals are detected days or weeks after they first appear. By the time an account is flagged, the early intervention window has already closed - and SMA classification has escalated.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="7" height="7" /><rect x="15" y="3" width="7" height="7" /><rect x="15" y="14" width="7" height="7" /><rect x="2" y="14" width="7" height="7" />
                    </svg>
                  ),
                  title: 'Data Silos Across LOS, LMS &amp; Payments',
                  body: 'LOS, LMS, collections, payments, and bureau data sit in separate systems with no unified view. Risk teams can\'t correlate signals across sources - missing the multi-dimensional stress patterns that precede NPA escalation.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><polyline points="10 9 9 9 8 9" />
                    </svg>
                  ),
                  title: 'Weak Audit Trails &amp; Inspection Readiness',
                  body: 'When the RBI requests EWS documentation, manual audit preparation is time-consuming and error-prone. Incomplete or inconsistent records create regulatory exposure that goes well beyond the underlying credit risk.',
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

      {/* ══════════════════════════════════════════════════════════════
          3. RBI EXPECTATION SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>RBI Framework</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                What RBI Expects from Your EWS Framework
              </h2>
              <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', marginTop: '1rem', lineHeight: 1.7 }}>
                RBI's EWS guidelines go beyond periodic reporting. They mandate a proactive, structured intelligence framework - continuously active across your entire loan book.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
              {[
                {
                  number: '01',
                  title: 'Continuous Monitoring',
                  points: [
                    'SMA-0, SMA-1, SMA-2 classification must be tracked and updated in real time',
                    'Monitoring cannot be limited to repayment dates - all account activity counts',
                    'Timely escalation to supervisory boards is mandatory for SMA accounts',
                  ],
                },
                {
                  number: '02',
                  title: 'Multi-Dimensional EWS Signals',
                  points: [
                    'Signals must cover repayment behaviour, cash flows, bureau updates, and transaction anomalies',
                    'External and market-level signals must be incorporated where relevant',
                    'Single-dimension or repayment-only monitoring is insufficient under current guidance',
                  ],
                },
                {
                  number: '03',
                  title: 'Red Flagged Account (RFA) Classification',
                  points: [
                    'A systematic, documented RFA identification process is required',
                    'Classification must be aligned with RBI\'s fraud risk management framework',
                    'Ad hoc or manual classification creates both compliance and recovery risk',
                  ],
                },
                {
                  number: '04',
                  title: 'Audit-Ready Systems and Documentation',
                  points: [
                    'EWS frameworks must be fully audit-ready for inspection at any time',
                    'Timestamped signal logs, case trails, and escalation records are required',
                    'Manual documentation that cannot be produced quickly is a material compliance risk',
                  ],
                },
              ].map((item) => (
                <div key={item.number} className="card" style={{ padding: '2rem', borderLeft: '3px solid var(--primary)' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.625rem' }}>{item.number}</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.875rem' }}>{item.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.points.map((pt) => (
                      <li key={pt} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.6 }}>
                        <svg style={{ flexShrink: 0, marginTop: '0.25rem' }} width="12" height="12" viewBox="0 0 24 24" fill="var(--primary)" stroke="none"><circle cx="12" cy="12" r="4" /></svg>
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

      {/* ══════════════════════════════════════════════════════════════
          4. SOLUTION SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>

            {/* Left */}
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>The Verafye Solution</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                An EWS Intelligence Platform Built for RBI Compliance
              </h2>
              <p style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Verafye delivers a unified, event-driven EWS intelligence layer that connects your lending data, monitors borrower health in real time, and generates the audit-ready documentation your compliance function needs.
              </p>
              <a href="#ews-assessment" className="btn-primary" onClick={scrollTo('ews-assessment')}>
                Assess Your EWS Readiness
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>{ChevronIcon}</span>
              </a>
            </div>

            {/* Right: capability list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              {[
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
                  title: 'Real-Time Signal Detection',
                  body: 'Event-driven architecture monitors every borrower touchpoint - EMI payments, cash flows, bureau updates, transaction patterns - the moment they occur, not at the next batch run.',
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="M8 12h8M16 7l-6 4M16 17l-6-4" /></svg>,
                  title: 'Unified Intelligence Layer',
                  body: 'Connects LOS, LMS, collections, payments, and bureau data into a single view - eliminating the signal gaps that siloed systems create.',
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
                  title: 'Configurable EWS Rules - No Vendor Dependency',
                  body: 'Risk teams create, modify, and activate EWS rules without a vendor change request. Signal logic stays aligned with your evolving portfolio and RBI guidance.',
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
                  title: 'RBI-Aligned RFA Workflows',
                  body: 'Automated Red Flagged Account classification, escalation workflows, and structured case management aligned with RBI\'s fraud risk management and EWS guidelines.',
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>,
                  title: 'Audit-Ready Case Management',
                  body: 'Every signal, alert, review, and decision is logged with timestamps and structured documentation - enabling RBI inspection readiness without manual compilation.',
                },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '2rem', height: '2rem', borderRadius: '8px', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.1rem' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. EWS SIGNALS SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Signal Coverage</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
                Early Warning Signals Verafye Monitors
              </h2>
              <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', marginTop: '1rem', lineHeight: 1.7 }}>
                Real-time detection across repayment behaviour, account activity, and external data - the full signal spectrum RBI expects.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
              {[
                {
                  category: 'Repayment',
                  signals: [
                    'EMI bounce or partial payment on consecutive cycles',
                    'Increasing days past due (DPD) trend',
                    'Repayment date irregularities vs. historical pattern',
                    'Underpayment on high-ticket instalments',
                  ],
                },
                {
                  category: 'Cash Flow',
                  signals: [
                    'Material decline in account credit turnover',
                    'Income inflow inconsistency vs. repayment obligations',
                    'Sudden drop in average monthly balance',
                    'Salary credit missed for 30+ consecutive days',
                  ],
                },
                {
                  category: 'Transaction Behaviour',
                  signals: [
                    'Unusual transaction velocity or value spikes',
                    'Payments to unrelated or high-risk counterparties',
                    'Frequent small withdrawals post-disbursement',
                    'Round-tripping patterns or circular fund flows',
                  ],
                },
                {
                  category: 'Multi-Lender Exposure',
                  signals: [
                    'New disbursements from other lenders post-onboarding',
                    'Repayment obligation concentration across lenders',
                    'Over-leverage relative to declared income',
                    'Bureau NTC or derogatory flag update',
                  ],
                },
                {
                  category: 'Behavioural Deviations',
                  signals: [
                    'Change in repayment channel or mode',
                    'Account dormancy post-disbursement',
                    'Repeated loan restructure or moratorium requests',
                    'Escalating customer service complaints pattern',
                  ],
                },
                {
                  category: 'Operational & External',
                  signals: [
                    'GST filing gaps or MSME turnover irregularities',
                    'Court attachment, lien, or legal notice on collateral',
                    'Director or promoter watchlist or KYC flag update',
                    'Sector-level stress indicator correlation',
                  ],
                },
              ].map((item) => (
                <div key={item.category} className="card" style={{ padding: '1.75rem' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)' }}>
                    {item.category}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.signals.map((s) => (
                      <li key={s} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.8125rem', color: 'var(--body)', lineHeight: 1.55 }}>
                        <svg style={{ flexShrink: 0, marginTop: '0.3rem' }} width="10" height="10" viewBox="0 0 24 24" fill="var(--primary)" stroke="none"><circle cx="12" cy="12" r="5" /></svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. BUSINESS IMPACT
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Business Impact</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
                What Changes When You Implement Verafye EWS
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
              {[
                {
                  gradient: 'gradient-bg-1',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
                  title: 'Earlier NPA Prevention',
                  body: 'Real-time stress signals mean your risk team intervenes at SMA-0 - before accounts escalate to NPA. Proactive engagement, restructuring options, and recovery actions are triggered at the right moment, not weeks after the window closes.',
                },
                {
                  gradient: 'gradient-bg-2',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>,
                  title: 'Earlier Fraud Detection',
                  body: 'Behavioural and transactional anomalies surface during the repayment lifecycle - not after loss crystallisation. Coordinated fraud patterns, straw borrowers, and misrepresentation are identified before they scale across your portfolio.',
                },
                {
                  gradient: 'gradient-bg-3',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
                  title: 'Portfolio-Wide Risk Visibility',
                  body: 'A unified view across your entire lending book - segmented by risk tier, product, geography, and cohort. Your CRO and risk leadership have the portfolio intelligence needed for proactive board-level decision-making.',
                },
                {
                  gradient: 'gradient-bg-4',
                  icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                  title: 'RBI Compliance Readiness',
                  body: 'Structured audit trails, automated RFA classification, and documented escalation workflows mean your compliance team is always ready for inspection - not scrambling to compile records when notice arrives.',
                },
              ].map((item) => (
                <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                  <div className={`card-icon ${item.gradient}`}>{item.icon}</div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. DIFFERENTIATION
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '52rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Why Verafye</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
                Built Differently for a Reason
              </h2>
              <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', marginTop: '1rem', lineHeight: 1.7 }}>
                Most EWS systems were bolted onto existing platforms. Verafye was architected from the ground up for real-time financial crime and risk intelligence.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem' }}>
              {[
                {
                  title: 'Event-Driven Architecture',
                  vs: 'vs. batch processing',
                  body: 'Verafye processes every borrower event as it occurs - not in overnight batches. Your risk team sees stress signals in minutes, not days, enabling the early intervention RBI expects at SMA-0.',
                  tags: ['Real-time processing', 'Zero latency signals'],
                },
                {
                  title: 'Cross-System Intelligence',
                  vs: 'vs. siloed point solutions',
                  body: 'A unified intelligence layer connects signals from LOS, LMS, payments, collections, and bureau. Cross-system patterns - invisible in siloed systems - become visible and actionable.',
                  tags: ['Unified data layer', 'Cross-source correlation'],
                },
                {
                  title: 'Configurable Rule Engine',
                  vs: 'vs. vendor-locked static rules',
                  body: 'Your risk team owns the signal logic. Rules are created, modified, and activated without a vendor change request - keeping your EWS framework aligned with evolving portfolio behaviour and RBI guidance.',
                  tags: ['No-code rule configuration', 'Version-controlled'],
                },
                {
                  title: 'Unified Fraud + Risk + Compliance',
                  vs: 'vs. fragmented specialist tools',
                  body: 'Fraud signals, credit stress indicators, and compliance workflows operate within a single platform. Investigations, escalations, and audit documentation are unified - eliminating gaps between risk functions.',
                  tags: ['Single platform', 'Shared intelligence layer'],
                },
              ].map((item) => (
                <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                  <div style={{ marginBottom: '0.625rem' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dark)', marginRight: '0.5rem' }}>{item.title}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontStyle: 'italic' }}>{item.vs}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1rem' }}>{item.body}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag" style={{ fontSize: '0.75rem' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          8. EWS READINESS ASSESSMENT
      ══════════════════════════════════════════════════════════════ */}
      <section id="ews-assessment" style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>EWS Readiness Assessment</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.5rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                How EWS-Ready Are You, Really?
              </h2>
              <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.0625rem)', color: 'var(--body)', marginTop: '1rem', lineHeight: 1.7, maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
                Answer 7 questions about your current EWS framework. Get an instant readiness score - then receive a personalised gap analysis from our team.
              </p>
            </div>

            {/* ── Phase: Questions ── */}
            {phase === 'questions' && (
              <div className="card" style={{ padding: '2.5rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {QUESTIONS.map((q, idx) => (
                    <div key={q.id}>
                      <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.875rem', lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--primary)', marginRight: '0.5rem' }}>{idx + 1}.</span>
                        {q.text}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {q.options.map((opt) => (
                          <label
                            key={opt.score}
                            style={{
                              display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                              padding: '0.75rem 1rem', borderRadius: '8px', cursor: 'pointer',
                              border: `1.5px solid ${answers[q.id] === opt.score ? 'var(--primary)' : 'var(--border)'}`,
                              background: answers[q.id] === opt.score ? 'var(--bg-blue)' : 'transparent',
                              transition: 'border-color 0.15s, background 0.15s',
                            }}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              value={opt.score}
                              checked={answers[q.id] === opt.score}
                              onChange={() => handleAnswer(q.id, opt.score)}
                              style={{ marginTop: '0.2rem', flexShrink: 0, accentColor: 'var(--primary)' }}
                            />
                            <span style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.55 }}>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {assessmentError && (
                  <p style={{ fontSize: '0.875rem', color: 'var(--error)', marginTop: '1.5rem', textAlign: 'center' }}>
                    {assessmentError}
                  </p>
                )}

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={handleGetScore}
                    style={{ height: '3rem', fontSize: '0.9375rem', padding: '0 2rem' }}
                  >
                    Get My EWS Score
                    <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>{ChevronIcon}</span>
                  </button>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted-light)', marginTop: '0.75rem' }}>
                    Takes less than 2 minutes. Your score is shown immediately.
                  </p>
                </div>
              </div>
            )}

            {/* ── Phase: Score + Lead Capture ── */}
            {phase === 'score' && band && (
              <div id="ews-score-result">

                {/* Score result card */}
                <div
                  className="card"
                  style={{
                    padding: '2rem', borderRadius: '16px', marginBottom: '1.5rem',
                    borderColor: band.borderColor, background: band.bgColor,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center', flexShrink: 0, minWidth: '5rem' }}>
                      <div style={{ fontSize: '3.25rem', fontWeight: 700, color: band.color, lineHeight: 1, letterSpacing: '-0.04em' }}>{score}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem' }}>out of 21</div>
                    </div>
                    <div style={{ flex: 1, minWidth: '16rem' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', background: band.color, color: '#fff', borderRadius: '100px', padding: '0.25rem 0.875rem', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.625rem' }}>
                        {band.label} EWS Readiness
                      </div>
                      <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem', lineHeight: 1.3 }}>{band.headline}</h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, margin: 0 }}>{band.summary}</p>
                    </div>
                  </div>
                  <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: `1px solid ${band.borderColor}` }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--dark)', fontWeight: 500, margin: 0 }}>{band.action}</p>
                  </div>
                </div>

                {/* Lead capture */}
                <div className="card" style={{ padding: '2.5rem', borderRadius: '16px' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.375rem' }}>
                    Get Your Detailed EWS Assessment Report
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '1.75rem', lineHeight: 1.6, paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                    Our team will review your assessment and follow up with a personalised EWS gap analysis and recommended next steps.
                  </p>
                  <form onSubmit={handleLeadSubmit} noValidate>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginBottom: '0.875rem' }}>
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label" htmlFor="ews-name">Full Name <span style={{ color: 'var(--error)' }}>*</span></label>
                        <input id="ews-name" name="name" type="text" className="form-input" placeholder="Jane Smith" value={lead.name} onChange={handleLeadChange} style={fieldStyle(leadErrors.name)} />
                        {errText(leadErrors.name)}
                      </div>
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label" htmlFor="ews-role">Role / Title <span style={{ color: 'var(--error)' }}>*</span></label>
                        <input id="ews-role" name="role" type="text" className="form-input" placeholder="Head of Risk" value={lead.role} onChange={handleLeadChange} style={fieldStyle(leadErrors.role)} />
                        {errText(leadErrors.role)}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="ews-company">Company / NBFC Name <span style={{ color: 'var(--error)' }}>*</span></label>
                      <input id="ews-company" name="company" type="text" className="form-input" placeholder="Your organisation" value={lead.company} onChange={handleLeadChange} style={fieldStyle(leadErrors.company)} />
                      {errText(leadErrors.company)}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="ews-email">Work Email <span style={{ color: 'var(--error)' }}>*</span></label>
                      <input id="ews-email" name="email" type="email" className="form-input" placeholder="jane@yournbfc.com" value={lead.email} onChange={handleLeadChange} style={fieldStyle(leadErrors.email)} />
                      {errText(leadErrors.email)}
                    </div>
                    {submitError && (
                      <p style={{ fontSize: '0.875rem', color: 'var(--error)', marginBottom: '1rem' }}>{submitError}</p>
                    )}
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      style={{ width: '100%', height: '3rem', fontSize: '0.9375rem', marginTop: '0.25rem', opacity: isSubmitting ? 0.72 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                    >
                      {isSubmitting ? 'Submitting…' : 'Send My Assessment Report'}
                      <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>{ChevronIcon}</span>
                    </button>
                    <p style={{ fontSize: '0.75rem', color: 'var(--muted-light)', textAlign: 'center', marginTop: '1rem', lineHeight: 1.6 }}>
                      By submitting, you agree to be contacted by the Verafye team regarding your EWS assessment.
                    </p>
                  </form>
                </div>
              </div>
            )}

            {/* ── Phase: Done ── */}
            {phase === 'done' && (
              <div className="card" style={{ padding: '3rem', borderRadius: '16px', textAlign: 'center' }}>
                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: 'var(--bg-blue)', border: '2px solid rgba(30,111,183,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                  Assessment Submitted
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, maxWidth: '28rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '1.75rem' }}>
                  Thank you. Our team will review your EWS score and follow up with a personalised gap analysis and recommended next steps within one business day.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/request-demo" className="btn-primary">Book a Product Demo</Link>
                  <Link href="/" className="btn-secondary">Back to Home</Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          9. FINAL CTA
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg,#0f2744 0%,#1a4070 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>
              RBI EWS Compliance
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.75rem)', fontWeight: 700, color: '#fff', marginBottom: '1.125rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
              Are You Truly EWS-Ready?
            </h2>
            <p style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'rgba(255,255,255,0.72)', marginBottom: '2.25rem', lineHeight: 1.7, maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              RBI's expectations are clear - and the gap between current NBFC capabilities and those expectations is material. Verafye can close that gap. Start with a 7-question assessment or book a direct product walkthrough.
            </p>
            <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="#ews-assessment"
                onClick={scrollTo('ews-assessment')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  height: '3rem', padding: '0 1.75rem',
                  background: '#fff', color: '#0f2744',
                  borderRadius: '8px', fontWeight: 600, fontSize: '0.9375rem',
                  textDecoration: 'none', border: '2px solid transparent',
                }}
              >
                Request Assessment
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
              <Link
                href="/request-demo"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  height: '3rem', padding: '0 1.75rem',
                  background: 'transparent', color: '#fff',
                  borderRadius: '8px', fontWeight: 600, fontSize: '0.9375rem',
                  textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)',
                }}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
