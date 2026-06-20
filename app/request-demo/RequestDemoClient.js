'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  role: '',
  companyType: '',
  inquiryType: 'Risk Shadowing Review',
  message: '',
};

const REQUEST_DEMO_ENDPOINT =
  process.env.NEXT_PUBLIC_VERAFYE_REQUEST_DEMO_ENDPOINT ||
  'https://dashboard.verafye.com/api/external-email/send';

function buildRequestDemoPayload(form) {
  const firstName = form.firstName.trim();
  const lastName = form.lastName.trim();
  const fullName = [firstName, lastName].filter(Boolean).join(' ');
  const company = form.company.trim();
  const role = form.role.trim();
  const companyType = form.companyType.trim();
  const inquiryType = form.inquiryType.trim();
  const message = form.message.trim();

  return {
    clientName: company,
    emailAddress: form.email.trim(),
    phoneNumber: '',
    subject: `${inquiryType || 'Risk Shadowing Review'} - ${company}`,
    message: [
      `Contact Name: ${fullName}`,
      `Work Email: ${form.email.trim()}`,
      `Company: ${company}`,
      `Role / Title: ${role}`,
      `Company Type: ${companyType}`,
      `Inquiry Type: ${inquiryType}`,
      message ? `Message: ${message}` : null,
    ].filter(Boolean).join('\n'),
    institutionUuid: null,
    fileReference: null,
    category: 'Request Demo',
  };
}

export default function RequestDemoClient() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const timeoutId = window.setTimeout(() => {
      setToast(null);
    }, toast.type === 'success' ? 3000 : 4000);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid work email required';
    if (!form.company.trim()) e.company = 'Required';
    if (!form.role.trim()) e.role = 'Required';
    if (!form.companyType) e.companyType = 'Please select a company type';
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }

    setIsSubmitting(true);

    try {
      const response = await fetch(REQUEST_DEMO_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildRequestDemoPayload(form)),
      });

      let result = null;
      const contentType = response.headers.get('content-type') || '';

      if (contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        result = text ? { text } : null;
      }

      const isSuccess =
        response.ok &&
        (
          !result ||
          result.status === undefined ||
          Number(result.status) === 1 ||
          result.success === true
        );

      if (!isSuccess) throw new Error('Request demo submission failed');

      if (typeof window !== 'undefined' && window.trackEvent) {
        const params = new URLSearchParams(window.location.search);
        window.trackEvent('demo_form_submit', {
          company_type: form.companyType || 'unknown',
          utm_source: params.get('utm_source') || '',
          utm_medium: params.get('utm_medium') || '',
          utm_campaign: params.get('utm_campaign') || '',
        });
      }

      setToast({ type: 'success', title: 'Request Received', message: 'Thank you! We will get back to you soon.' });
      setForm(INITIAL_FORM);
      setErrors({});
      setSubmitted(true);
    } catch (error) {
      setToast({ type: 'error', title: 'Error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Toast */}
      <div
        className={['request-demo-toast', toast ? 'request-demo-toast--show' : '', toast ? `request-demo-toast--${toast.type}` : ''].filter(Boolean).join(' ')}
        role="alert" aria-live="assertive" aria-atomic="true"
      >
        {toast && (
          <>
            <div className="request-demo-toast__header">
              <strong>{toast.title}</strong>
              <button type="button" className="request-demo-toast__close" aria-label="Close notification" onClick={() => setToast(null)}>
                <span>&times;</span>
              </button>
            </div>
            <div className="request-demo-toast__body">{toast.message}</div>
          </>
        )}
      </div>

      <style>{`
        .rd-main-grid { display: grid; grid-template-columns: 1fr 1.45fr; gap: 3.5rem; align-items: start; }
        @media (max-width: 900px) { .rd-main-grid { grid-template-columns: 1fr; gap: 2rem; } }
      `}</style>

      {/* ── 1. SLIM HERO ────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #F5F9FF 0%, #EEF4FF 60%, #fff 100%)', padding: '2.25rem 0 2rem', borderBottom: '1px solid rgba(30,111,183,0.07)' }}>
        <div className="container">
          <div style={{ maxWidth: '56rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.625rem' }}>Risk Shadowing Review</p>
            <h1 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Request a Risk Shadowing Review
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--body)', margin: 0, lineHeight: 1.6 }}>
              Share a focused use case or evaluation goal, and we will help assess whether Verafye can run alongside your existing fraud, AML, KYC, identity, payment, device, ledger, and case systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. MAIN CONTENT GRID ─────────────────────────────────────────────── */}
      <section style={{ padding: '2.5rem 0 4rem', background: '#fff' }}>
        <div className="container">
          <div className="rd-main-grid" style={{ maxWidth: '72rem', margin: '0 auto' }}>

            {/* ── LEFT COLUMN ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              {/* What You'll See */}
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.625rem' }}>In the Demo</p>
                <h2 style={{ fontSize: 'clamp(1.0625rem,2vw,1.3125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                  What You'll See
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {[
                    {
                      icon: (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/>
                        </svg>
                      ),
                      title: 'Graph-Based Fraud & Network Detection',
                      desc: 'See how Verafye surfaces connected fraud rings, mule networks, and coordinated financial crime across entities and transactions.',
                    },
                    {
                      icon: (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/>
                        </svg>
                      ),
                      title: 'Investigation-Centric Workflows',
                      desc: 'Explore how alert clustering, case formation, and pre-assembled context accelerate analyst decision-making.',
                    },
                    {
                      icon: (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>
                        </svg>
                      ),
                      title: 'Cross-System Intelligence',
                      desc: 'See how Verafye unifies signals from fraud, AML, and payments systems into a single connected intelligence layer.',
                    },
                    {
                      icon: (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
                        </svg>
                      ),
                      title: 'Real-World Use Case Walkthroughs',
                      desc: 'Walk through scenarios relevant to your institution - mule detection, fraud ring investigation, payment risk, or AML monitoring.',
                    },
                  ].map(item => (
                    <div key={item.title} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '2rem', height: '2rem', borderRadius: '8px', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.1rem' }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div style={{ background: 'var(--bg-light)', borderRadius: '12px', border: '1px solid var(--border)', padding: '1.75rem' }}>
                <p className="eyebrow" style={{ marginBottom: '0.625rem' }}>After You Submit</p>
                <h2 style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                  What to Expect
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { n: '1', title: 'Intro call to understand your use case', desc: 'A brief conversation to learn about your environment, team, and priorities.' },
                    { n: '2', title: 'Tailored product walkthrough', desc: 'A focused demo built around the scenarios most relevant to your institution.' },
                    { n: '3', title: 'Deployment and integration discussion', desc: 'An overview of how Verafye connects to your existing stack and data sources.' },
                    { n: '4', title: 'Next steps aligned to your environment', desc: 'Clear, no-pressure guidance on how to evaluate Verafye within your organisation.' },
                  ].map(item => (
                    <div key={item.n} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '1.625rem', height: '1.625rem', borderRadius: '50%', background: 'var(--primary)', color: '#fff', fontSize: '0.6875rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.1rem' }}>
                        {item.n}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ── RIGHT COLUMN: form ── */}
            <div>
              <div className="card" style={{ padding: '2.5rem', borderRadius: '16px' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
                    <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'rgba(34,197,94,0.08)', border: '1.5px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Request received</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '22rem', marginLeft: 'auto', marginRight: 'auto' }}>
                      Thank you - our team will be in touch within 1–2 business days to schedule your personalised demo.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                      <Link href="/" className="btn-primary">Back to home</Link>
                      <Link href="/platform/" className="btn-secondary">Explore the Platform</Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.375rem', letterSpacing: '-0.02em' }}>Book a Walkthrough</h2>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '0.875rem', lineHeight: 1.6 }}>No commitment required. Fill in your details and we'll schedule a walkthrough tailored to your use case.</p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '1.75rem', lineHeight: 1.6, paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                      Verafye is built for financial institutions and payment platforms operating under evolving regulatory expectations - supporting multi-jurisdiction environments across fraud, AML, and payment intelligence functions.
                    </p>
                    <form onSubmit={handleSubmit} noValidate>

                      {/* Name row */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginBottom: '0.875rem' }}>
                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label" htmlFor="firstName">First Name <span style={{ color: 'var(--error)' }}>*</span></label>
                          <input id="firstName" name="firstName" type="text" className="form-input" placeholder="Jane" value={form.firstName} onChange={handleChange} style={errors.firstName ? { borderColor: 'var(--error)' } : {}} />
                          {errors.firstName && <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{errors.firstName}</p>}
                        </div>
                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label" htmlFor="lastName">Last Name <span style={{ color: 'var(--error)' }}>*</span></label>
                          <input id="lastName" name="lastName" type="text" className="form-input" placeholder="Smith" value={form.lastName} onChange={handleChange} style={errors.lastName ? { borderColor: 'var(--error)' } : {}} />
                          {errors.lastName && <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{errors.lastName}</p>}
                        </div>
                      </div>

                      {/* Work Email */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Work Email <span style={{ color: 'var(--error)' }}>*</span></label>
                        <input id="email" name="email" type="email" className="form-input" placeholder="jane@yourcompany.com" value={form.email} onChange={handleChange} style={errors.email ? { borderColor: 'var(--error)' } : {}} />
                        {errors.email && <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{errors.email}</p>}
                      </div>

                      {/* Company */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="company">Company <span style={{ color: 'var(--error)' }}>*</span></label>
                        <input id="company" name="company" type="text" className="form-input" placeholder="Your organisation" value={form.company} onChange={handleChange} style={errors.company ? { borderColor: 'var(--error)' } : {}} />
                        {errors.company && <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{errors.company}</p>}
                      </div>

                      {/* Role + Company Type */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginBottom: '0' }}>
                        <div className="form-group">
                          <label className="form-label" htmlFor="role">Role / Title <span style={{ color: 'var(--error)' }}>*</span></label>
                          <input id="role" name="role" type="text" className="form-input" placeholder="Head of Fraud" value={form.role} onChange={handleChange} style={errors.role ? { borderColor: 'var(--error)' } : {}} />
                          {errors.role && <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{errors.role}</p>}
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="companyType">Company Type <span style={{ color: 'var(--error)' }}>*</span></label>
                          <select id="companyType" name="companyType" className="form-select" value={form.companyType} onChange={handleChange} style={errors.companyType ? { borderColor: 'var(--error)' } : {}}>
                            <option value="">Select type…</option>
                            <option value="PSP / Payment Processor">PSP / Payment Processor</option>
                            <option value="PayFac">PayFac</option>
                            <option value="Payment Aggregator">Payment Aggregator</option>
                            <option value="MSB / Remittance Platform">MSB / Remittance Platform</option>
                            <option value="BaaS / Embedded Finance Provider">BaaS / Embedded Finance Provider</option>
                            <option value="Digital Bank / Neo Bank">Digital Bank / Neo Bank</option>
                            <option value="Wallet / Payment Fintech">Wallet / Payment Fintech</option>
                            <option value="NBFC / Digital Lender">NBFC / Digital Lender</option>
                            <option value="Bank / Credit Union / Sponsor Bank">Bank / Credit Union / Sponsor Bank</option>
                            <option value="Marketplace / Commerce Platform">Marketplace / Commerce Platform</option>
                            <option value="Partner / System Integrator">Partner / System Integrator</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.companyType && <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{errors.companyType}</p>}
                        </div>
                      </div>

                      {/* Inquiry Type */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="inquiryType">Inquiry Type</label>
                        <select id="inquiryType" name="inquiryType" className="form-select" value={form.inquiryType} onChange={handleChange}>
                          <option value="Risk Shadowing Review">Risk Shadowing Review</option>
                          <option value="Product Walkthrough">Product Walkthrough</option>
                          <option value="Partnership Discussion">Partnership Discussion</option>
                          <option value="Product Evaluation">Product Evaluation</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="message">Message <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--muted-light)' }}>(optional)</span></label>
                        <textarea id="message" name="message" className="form-textarea" placeholder="Tell us about your use case, environment, or any specific areas of interest…" rows={3} value={form.message} onChange={handleChange} />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        style={{ width: '100%', height: '3rem', fontSize: '0.9375rem', marginTop: '0.5rem', opacity: isSubmitting ? 0.72 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                      >
                        {isSubmitting ? 'Submitting...' : 'Request Risk Shadowing Review'}
                        <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                      </button>

                      <p style={{ fontSize: '0.6875rem', color: 'var(--muted)', textAlign: 'center', marginTop: '1rem', lineHeight: 1.65 }}>
                        By submitting this form, you agree to be contacted by the Verafye team regarding your demo request. We process your data to respond to your enquiry and for related business purposes. We do not sell your personal data. Your data is handled in accordance with our <a href="/privacy-policy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Privacy Policy</a>, which includes information on your rights under applicable data protection law (including GDPR-aligned and DPDP-aware practices for EU and India visitors).
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. TRUST SIGNALS ─────────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '56rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {[
              { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, text: 'Designed for financial institutions and payment platforms' },
              { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, text: 'Supports fraud, AML, and payment intelligence workflows' },
              { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, text: 'Aligned with evolving regulatory expectations across jurisdictions' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <span style={{ flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--muted-dark)', fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CTA REINFORCEMENT ─────────────────────────────────────────────── */}
      <section style={{ padding: '3.5rem 0 4rem', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '40rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.875rem', letterSpacing: '-0.025em' }}>
              See How Verafye Fits Your Operations
            </h2>
            <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.0625rem)', color: 'var(--body)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
              Request a demo to see how Verafye connects fraud, AML, and payments intelligence for financial institutions operating under real investigative and regulatory pressure.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <button type="button" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); typeof window !== 'undefined' && window.trackEvent && window.trackEvent('demo_cta_click', { location: 'page_bottom' }); }} className="btn-primary" style={{ cursor: 'pointer' }}>
                Request Demo
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </button>
              <Link href="/platform/" className="btn-secondary">Explore the Platform</Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
