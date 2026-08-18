'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getRequestDemoEndpoint } from '@/app/lib/endpoints';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  role: '',
  partnerType: '',
  message: '',
};

// Endpoint resolved at submit time via getRequestDemoEndpoint().
// No hardcoded fallback — missing env var fails clearly at form submission.

function buildPartnerPayload(form) {
  const firstName = form.firstName.trim();
  const lastName = form.lastName.trim();
  const fullName = [firstName, lastName].filter(Boolean).join(' ');
  const company = form.company.trim();
  const role = form.role.trim();
  const partnerType = form.partnerType.trim();
  const message = form.message.trim();

  return {
    clientName: company,
    emailAddress: form.email.trim(),
    phoneNumber: '',
    subject: `Partner Enquiry - ${company}`,
    message: [
      `Contact Name: ${fullName}`,
      `Work Email: ${form.email.trim()}`,
      `Company: ${company}`,
      `Role / Title: ${role}`,
      `Partnership Type: ${partnerType}`,
      message ? `Message: ${message}` : null,
    ].filter(Boolean).join('\n'),
    institutionUuid: null,
    fileReference: null,
    category: 'Partner Enquiry',
  };
}

export default function BecomeAPartnerClient() {
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
    if (!form.partnerType) e.partnerType = 'Please select a partnership type';
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
      const response = await fetch(getRequestDemoEndpoint(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildPartnerPayload(form)),
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

      if (!isSuccess) throw new Error('Partner enquiry submission failed');

      if (typeof window !== 'undefined' && window.trackEvent) {
        window.trackEvent('partner_form_submit', {
          partner_type: form.partnerType || 'unknown',
        });
      }

      setToast({ type: 'success', title: 'Enquiry Received', message: 'Thank you for your interest. We will be in touch shortly.' });
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
      {/* Toast notification */}
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
        .bap-main-grid { display: grid; grid-template-columns: 1fr 1.45fr; gap: 3.5rem; align-items: start; }
        @media (max-width: 900px) { .bap-main-grid { grid-template-columns: 1fr; gap: 2rem; } }
      `}</style>

      {/* ── 1. SLIM HERO ────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #F5F9FF 0%, #EEF4FF 60%, #fff 100%)', padding: '2.25rem 0 2rem', borderBottom: '1px solid rgba(30,111,183,0.07)' }}>
        <div className="container">
          <div style={{ maxWidth: '56rem' }}>
            <h1 className="eyebrow" style={{ marginBottom: '0.625rem' }}>Partner with Verafye</h1>
            <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Become a Verafye Partner
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', margin: 0, lineHeight: 1.6 }}>
              Collaborate with Verafye to bring connected risk detection and investigation to regulated payment platforms, payment fintechs, and financial institutions. We work with referral and advisory partners, regional GTM partners, implementation and consulting firms, and technology partners to help qualified customers identify coordinated risk, form investigation-ready cases, and operationalise evidence-grade investigation workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. MAIN CONTENT GRID ─────────────────────────────────────────────── */}
      <section style={{ padding: '2.5rem 0 4rem', background: '#fff' }}>
        <div className="container">
          <div className="bap-main-grid" style={{ maxWidth: '72rem', margin: '0 auto' }}>

            {/* ── LEFT COLUMN ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              {/* Partnership Models */}
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.625rem' }}>Partnership Models</p>
                <h2 style={{ fontSize: 'clamp(1.0625rem,2vw,1.3125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                  How We Work Together
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {[
                    {
                      icon: (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/>
                        </svg>
                      ),
                      title: 'Referral and Advisory Partners',
                      desc: 'Introduce qualified regulated payment institutions and fintech platforms to Verafye, supporting executive access and the first qualified opportunity conversation.',
                    },
                    {
                      icon: (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>
                        </svg>
                      ),
                      title: 'Implementation and Consulting Partners',
                      desc: 'Support data mapping, integration planning, workflow configuration, and customer enablement for regulated institutions operationalising Verafye.',
                    },
                    {
                      icon: (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/>
                        </svg>
                      ),
                      title: 'Technology Partners',
                      desc: 'Integrate Verafye capabilities into your platform or connect your technology with the Verafye platform for mutual customers.',
                    },
                    {
                      icon: (
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                      ),
                      title: 'Strategic Alliances',
                      desc: 'Joint go-to-market programmes, co-developed solutions, and deep collaboration across shared target markets.',
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
                <p className="eyebrow" style={{ marginBottom: '0.625rem' }}>After You Apply</p>
                <h2 style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                  What to Expect
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { n: '1', title: 'Partnership alignment call', desc: 'A conversation to understand your market focus, customer base, and how Verafye fits your portfolio.' },
                    { n: '2', title: 'Platform and GTM briefing', desc: 'A focused session on the Verafye platform, positioning, and joint go-to-market approach.' },
                    { n: '3', title: 'Commercial model discussion', desc: 'Review of partnership structures and commercial arrangements suited to your model.' },
                    { n: '4', title: 'Next steps and onboarding', desc: 'Clear path to formalising the partnership and beginning joint market activity.' },
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
                    <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Enquiry received</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '22rem', marginLeft: 'auto', marginRight: 'auto' }}>
                      Thank you for your interest in partnering with Verafye. Our team will be in touch within 1–2 business days.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                      <Link href="/" className="btn-primary">Back to home</Link>
                      <Link href="/platform/" className="btn-secondary">Explore the Platform</Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.375rem', letterSpacing: '-0.02em' }}>Partner Enquiry</h2>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '0.875rem', lineHeight: 1.6 }}>Tell us about your organisation and how you would like to work with Verafye. No commitment required.</p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '1.75rem', lineHeight: 1.6, paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                      Verafye supports flexible partnership models - from referral and advisory through to technology integration and strategic collaboration - tailored to how you go to market.
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

                      {/* Role + Partner Type row */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginBottom: '0' }}>
                        <div className="form-group">
                          <label className="form-label" htmlFor="role">Role / Title <span style={{ color: 'var(--error)' }}>*</span></label>
                          <input id="role" name="role" type="text" className="form-input" placeholder="Head of Partnerships" value={form.role} onChange={handleChange} style={errors.role ? { borderColor: 'var(--error)' } : {}} />
                          {errors.role && <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{errors.role}</p>}
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="partnerType">Partnership Type <span style={{ color: 'var(--error)' }}>*</span></label>
                          <select id="partnerType" name="partnerType" className="form-select" value={form.partnerType} onChange={handleChange} style={errors.partnerType ? { borderColor: 'var(--error)' } : {}}>
                            <option value="">Select type&hellip;</option>
                            <option value="Referral Partner">Referral Partner</option>
                            <option value="Implementation Partner">Implementation Partner</option>
                            <option value="Technology / Integration Partner">Technology / Integration Partner</option>
                            <option value="Regional / GTM Partner">Regional / GTM Partner</option>
                            <option value="Strategic Partnership">Strategic Partnership</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.partnerType && <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{errors.partnerType}</p>}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="message">Message <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--muted-light)' }}>(optional)</span></label>
                        <textarea id="message" name="message" className="form-textarea" placeholder="Tell us about your customer base, target markets, and how you see the partnership working…" rows={3} value={form.message} onChange={handleChange} />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        style={{ width: '100%', height: '3rem', fontSize: '0.9375rem', marginTop: '0.5rem', opacity: isSubmitting ? 0.72 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                        <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                      </button>

                      <p style={{ fontSize: '0.6875rem', color: 'var(--muted)', textAlign: 'center', marginTop: '1rem', lineHeight: 1.65 }}>
                        By submitting this form, you agree to be contacted by the Verafye team regarding your partnership enquiry. We process your data to respond to your enquiry and for related business purposes. We do not sell your personal data. Your data is handled in accordance with our <a href="/privacy-policy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Privacy Policy</a>, which includes information on your rights under applicable data protection law (including GDPR-compliant and DPDP-aware practices for EU and India visitors).
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
              { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>, text: 'Connected-Risk Intelligence for regulated payment and financial crime teams' },
              { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, text: 'Flexible commercial models across referral, advisory, implementation, and technology integration' },
              { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, text: 'Fast integration into existing fraud, AML, and payments infrastructure' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <span style={{ flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--muted-dark)', fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
