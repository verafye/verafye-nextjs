'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const INITIAL_FORM = {
  fullName: '',
  email: '',
  company: '',
  reason: '',
  message: '',
};

const CONTACT_ENDPOINT = '/api/contact';

function buildContactPayload(form) {
  return {
    clientName: form.company.trim(),
    emailAddress: form.email.trim(),
    phoneNumber: '',
    subject: `Contact Us - ${form.reason} - ${form.company.trim()}`,
    message: [
      `Name: ${form.fullName.trim()}`,
      `Work Email: ${form.email.trim()}`,
      `Company: ${form.company.trim()}`,
      `Reason: ${form.reason}`,
      `Message: ${form.message.trim()}`,
    ].filter(Boolean).join('\n'),
    institutionUuid: null,
    fileReference: null,
    category: 'Contact Us',
  };
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const id = window.setTimeout(() => setToast(null), toast.type === 'success' ? 3000 : 4000);
    return () => window.clearTimeout(id);
  }, [toast]);

  function validate() {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid work email required';
    if (!form.company.trim()) e.company = 'Required';
    if (!form.reason) e.reason = 'Please select a reason';
    if (!form.message.trim()) e.message = 'Please include a message';
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
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildContactPayload(form)),
      });
      let result = null;
      const ct = response.headers.get('content-type') || '';
      if (ct.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        result = text ? { text } : null;
      }
      const isSuccess = response.ok && (!result || result.status === undefined || Number(result.status) === 1 || result.success === true);
      if (!isSuccess) throw new Error('Submission failed');
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submission',
        form_type: 'contact',
      });
      setToast({ type: 'success', title: '✅ Message Sent', message: 'Thank you! We will get back to you soon.' });
      setForm(INITIAL_FORM);
      setErrors({});
      setSubmitted(true);
    } catch {
      setToast({ type: 'error', title: '⚠️ Error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldStyle = (hasError) => hasError ? { borderColor: 'var(--error)' } : {};
  const errText = (msg) => msg ? <p style={{ fontSize: '0.75rem', color: 'var(--error)', marginTop: '0.25rem' }}>{msg}</p> : null;

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
              <button type="button" className="request-demo-toast__close" aria-label="Close" onClick={() => setToast(null)}><span>&times;</span></button>
            </div>
            <div className="request-demo-toast__body">{toast.message}</div>
          </>
        )}
      </div>

      {/* ── HERO + FORM ──────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)', padding: '3.5rem 0 5rem' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3.5rem', alignItems: 'start' }}>

            {/* Left: context */}
            <div style={{ paddingTop: '0.5rem' }}>
              <p className="eyebrow animate-fade-up" style={{ marginBottom: '1rem' }}>Get in Touch</p>
              <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.125rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
                Contact Us
              </h1>
              <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(0.9375rem,1.75vw,1.125rem)', color: 'var(--body)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Have a question, a press enquiry, or just want to learn more about Verafye? Fill in the form and we'll get back to you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>), label: 'General Enquiries', detail: 'Questions about Verafye, our platform, or how it applies to your context.' },
                  { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6z"/></svg>), label: 'Press & Media', detail: 'Media requests, analyst briefings, and editorial enquiries.' },
                  { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>), label: 'Careers', detail: "Interested in joining the Verafye team? We'd love to hear from you." },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '2rem', height: '2rem', borderRadius: '8px', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.1rem' }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.2rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                  Looking to request a product demo or become a partner?
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href="/request-demo" className="btn-primary btn-sm">Request Demo</Link>
                  <Link href="/partners" className="btn-secondary btn-sm">Partner with Us</Link>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div>
              <div className="card" style={{ padding: '2.5rem', borderRadius: '16px' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: 'var(--bg-blue)', border: '2px solid rgba(30,111,183,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4L12 14.01l-3-3"/><path d="M22 4L12 14.01l-3-3-6 6"/><path d="M3 20h18"/></svg>
                    </div>
                    <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Message Sent</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '22rem', marginLeft: 'auto', marginRight: 'auto' }}>
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Link href="/" className="btn-secondary" style={{ display: 'inline-flex' }}>Back to Home</Link>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.375rem', letterSpacing: '-0.02em' }}>Send a Message</h2>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '1.75rem', lineHeight: 1.6, paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                      All fields are required unless marked optional.
                    </p>
                    <form onSubmit={handleSubmit} noValidate>

                      <div className="form-group">
                        <label className="form-label" htmlFor="c-fullName">Full Name <span style={{ color: 'var(--error)' }}>*</span></label>
                        <input id="c-fullName" name="fullName" type="text" className="form-input" placeholder="Jane Smith" value={form.fullName} onChange={handleChange} style={fieldStyle(errors.fullName)} />
                        {errText(errors.fullName)}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="c-email">Work Email <span style={{ color: 'var(--error)' }}>*</span></label>
                        <input id="c-email" name="email" type="email" className="form-input" placeholder="jane@yourcompany.com" value={form.email} onChange={handleChange} style={fieldStyle(errors.email)} />
                        {errText(errors.email)}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="c-company">Company <span style={{ color: 'var(--error)' }}>*</span></label>
                        <input id="c-company" name="company" type="text" className="form-input" placeholder="Your organisation" value={form.company} onChange={handleChange} style={fieldStyle(errors.company)} />
                        {errText(errors.company)}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="c-reason">Reason for Contact <span style={{ color: 'var(--error)' }}>*</span></label>
                        <select id="c-reason" name="reason" className="form-select" value={form.reason} onChange={handleChange} style={fieldStyle(errors.reason)}>
                          <option value="">Select reason…</option>
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Press & Media">Press &amp; Media</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Careers">Careers</option>
                          <option value="Other">Other</option>
                        </select>
                        {errText(errors.reason)}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="c-message">Message <span style={{ color: 'var(--error)' }}>*</span></label>
                        <textarea id="c-message" name="message" className="form-textarea" placeholder="How can we help you?" rows={4} value={form.message} onChange={handleChange} style={fieldStyle(errors.message)} />
                        {errText(errors.message)}
                      </div>

                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        style={{ width: '100%', height: '3rem', fontSize: '0.9375rem', marginTop: '0.5rem', opacity: isSubmitting ? 0.72 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                      >
                        {isSubmitting ? 'Sending…' : 'Send Message'}
                        <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                      </button>

                      <p style={{ fontSize: '0.75rem', color: 'var(--muted-light)', textAlign: 'center', marginTop: '1rem', lineHeight: 1.6 }}>
                        By submitting this form you agree to be contacted by the Verafye team regarding your enquiry.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
