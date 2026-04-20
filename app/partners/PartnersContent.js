'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CTA from '@/components/CTA';

const INITIAL_PARTNER_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  organisation: '',
  orgType: '',
  partnershipInterest: '',
  geography: '',
  clientBase: '',
  message: '',
};

const CONTACT_ENDPOINT = '/api/contact';

function buildPartnerPayload(form) {
  const fullName = [form.firstName.trim(), form.lastName.trim()].filter(Boolean).join(' ');
  return {
    clientName: form.organisation.trim(),
    emailAddress: form.email.trim(),
    phoneNumber: '',
    subject: `Partner Enquiry - ${form.organisation.trim()}`,
    message: [
      `Contact Name: ${fullName}`,
      `Work Email: ${form.email.trim()}`,
      `Organisation: ${form.organisation.trim()}`,
      `Organisation Type: ${form.orgType}`,
      `Partnership Interest: ${form.partnershipInterest}`,
      `Geographic Focus: ${form.geography}`,
      form.clientBase ? `Financial Services Client Base: ${form.clientBase}` : null,
      form.message.trim() ? `Message: ${form.message.trim()}` : null,
    ].filter(Boolean).join('\n'),
    institutionUuid: null,
    fileReference: null,
    category: 'Partner Inquiry',
  };
}

export default function PartnersPage() {
  const [form, setForm] = useState(INITIAL_PARTNER_FORM);
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
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid work email required';
    if (!form.organisation.trim()) e.organisation = 'Required';
    if (!form.orgType) e.orgType = 'Please select an organisation type';
    if (!form.partnershipInterest) e.partnershipInterest = 'Please select a partnership type';
    if (!form.geography) e.geography = 'Please select a region';
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
        body: JSON.stringify(buildPartnerPayload(form)),
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
      if (typeof window !== 'undefined' && window.trackEvent) {
        window.trackEvent('partner_enquiry_submit', { org_type: form.orgType || 'unknown' });
      }
      setToast({ type: 'success', title: '✅ Enquiry Received', message: 'Thank you! We will be in touch shortly.' });
      setForm(INITIAL_PARTNER_FORM);
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

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 60%,#fff 100%)', overflow: 'hidden', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
            <p className="eyebrow animate-fade-up" style={{ marginBottom: '1.25rem' }}>Partners &amp; Alliances</p>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: 'clamp(1.875rem,5vw,3.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
              Partner with Verafye
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'var(--body)', marginBottom: '1.25rem', maxWidth: '44rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Collaborate with Verafye to bring modern financial crime intelligence infrastructure to banks, payment platforms, and fintech ecosystems globally.
            </p>
            <p className="animate-fade-up delay-300" style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '40rem', marginLeft: 'auto', marginRight: 'auto' }}>
              We work with strategic partners, system integrators, and ecosystem players to deliver scalable fraud, risk, and AML intelligence solutions.
            </p>
            <div className="animate-fade-up delay-400" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              {/* Fixed: now scrolls to inline form instead of going to /request-demo */}
              <a
                href="#partner-form"
                className="btn-primary"
                onClick={e => { e.preventDefault(); document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Become a Partner
                <span className="btn-arrow" style={{ display: 'inline-flex', marginLeft: '0.5rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </a>
              {/* Fixed: now goes to /contact instead of /request-demo */}
              <Link href="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY PARTNER WITH VERAFYE ─────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>The Opportunity</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Why Partner with Verafye
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>),
                title: 'AI-Native FRAML Infrastructure',
                body: 'Verafye is purpose-built for the financial crime infrastructure modernisation cycle underway across mid-market banks, payment processors, and fintech platforms - giving partners a differentiated, in-demand solution to bring to market.',
              },
              {
                gradient: 'gradient-bg-2',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>),
                title: 'Graph-Based Intelligence Differentiation',
                body: 'Graph-native detection and investigation intelligence represents a genuine architectural differentiation in the financial crime market - providing partners with a compelling, technically distinctive proposition across fraud, AML, and payments conversations.',
              },
              {
                gradient: 'gradient-bg-3',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
                title: 'Fast Deployment and Integration',
                body: 'Verafye is designed to connect across existing fraud, AML, and payments infrastructure rather than replace it - reducing implementation complexity, shortening time to value, and making partner-led deployments faster to execute and easier to scope.',
              },
              {
                gradient: 'gradient-bg-4',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg>),
                title: 'Strong Relevance Across Banks, PSPs, and Fintechs',
                body: 'The Verafye platform addresses a common set of challenges across multiple financial institution segments - giving partners a broad addressable market and the ability to apply a consistent solution across diverse customer portfolios.',
              },
              {
                gradient: 'gradient-bg-1',
                icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>),
                title: 'Flexible Commercial Models',
                body: 'Verafye works with partners to develop commercial arrangements appropriate to the partnership model - whether resale, referral, co-sell, or deeper strategic collaboration - with flexibility designed to support sustainable, long-term partner relationships.',
              },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2.5rem' }}>
                <div className={`card-icon ${item.gradient}`}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(1rem,2vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.0625rem)', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PARTNERSHIP MODELS ────────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>How We Work Together</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>
              Partnership Models
            </h2>
          </div>
          <div className="grid-2" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>), title: 'Channel and Reseller Partners', body: 'Channel and reseller partners bring Verafye to financial institutions within their existing customer base or regional focus - selling, co-selling, or distributing the Verafye platform with commercial terms designed to support scalable, repeatable partner revenue.', tags: ['Resale', 'Co-sell', 'Regional distribution'] },
              { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>), title: 'System Integrators', body: 'System integrators implement and integrate Verafye within broader financial crime technology programmes - connecting the platform to existing fraud, AML, payments, and case management infrastructure as part of large-scale institutional transformation projects.', tags: ['Implementation', 'Integration', 'Programme delivery'] },
              { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h8M16 7l-6 4M16 17l-6-4"/></svg>), title: 'Technology and Platform Partnerships', body: 'Technology partners integrate Verafye capabilities into their own platforms or connect their technology into the Verafye intelligence layer - creating joint solutions that extend value for mutual customers across fraud, AML, and payments workflows.', tags: ['API integration', 'Joint solutions', 'Ecosystem'] },
              { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>), title: 'Strategic Alliances', body: 'Strategic alliances are built with organisations sharing a common vision around financial crime infrastructure modernisation - including joint go-to-market programmes, co-developed solutions, and collaborative engagement across target markets and customer segments.', tags: ['Joint GTM', 'Co-development', 'Strategic alignment'] },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2.5rem' }}>
                <div className="card-icon-sm" style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{item.body}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {item.tags.map(tag => (<span key={tag} className="tag" style={{ fontSize: '0.75rem' }}>{tag}</span>))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHO WE PARTNER WITH ───────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Partner Types</p>
            <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em' }}>Who We Work With</h2>
          </div>
          <div className="grid-3" style={{ maxWidth: '72rem', margin: '0 auto' }}>
            {[
              { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>), title: 'System Integrators', body: 'Large and mid-tier SIs delivering financial crime, compliance, and risk technology programmes to banks and financial institutions - looking for modern, integrable fraud and AML intelligence platforms.' },
              { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>), title: 'Payment Platforms', body: 'Payment infrastructure providers and platform operators seeking to embed or connect fraud and AML intelligence capabilities within their own stack or customer-facing product offerings.' },
              { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/></svg>), title: 'Banking Technology Providers', body: 'Core banking, digital banking, and financial infrastructure providers whose customers - mid-market banks, credit unions, and regional institutions - face growing financial crime and compliance demands.' },
              { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>), title: 'Consulting Firms', body: 'Risk, compliance, and financial crime consulting firms advising banks, fintechs, and payment platforms on infrastructure modernisation, regulatory response, and operational improvement programmes.' },
              { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>), title: 'Regional Distribution Partners', body: 'Partners with established relationships and market presence in specific geographies - enabling Verafye to reach financial institutions across regional markets through trusted, locally-connected distribution channels.' },
            ].map(item => (
              <div key={item.title} className="card card-elevated" style={{ padding: '2rem' }}>
                <div className="card-icon-sm" style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOW PARTNERSHIPS WORK ─────────────────────────────────────────── */}
      <section className="section-light" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', maxWidth: '56rem', margin: '0 auto 3.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Working Together</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3.5vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>How We Work with Partners</h2>
              <p style={{ fontSize: 'clamp(0.875rem,1.75vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75 }}>
                Verafye partners across the full collaboration lifecycle - from initial go-to-market alignment through sales enablement, deployment support, and ongoing commercial partnership.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {[
                { step: '01', title: 'Joint Go-to-Market', body: 'Verafye works with partners to develop joint go-to-market programmes aligned to shared target segments - including banks, payment processors, and fintech platforms. Joint positioning, outreach, and pipeline development are supported from the outset of the partnership.' },
                { step: '02', title: 'Sales Enablement', body: 'Partners receive the enablement support needed to represent the Verafye platform confidently - including platform training, positioning materials, solution briefings, and access to Verafye subject matter expertise for customer conversations and technical evaluations.' },
                { step: '03', title: 'Flexible Commercial Arrangements', body: 'Commercial arrangements are developed to suit the partnership model - whether referral, resale, co-sell, or deeper strategic collaboration. Verafye is committed to commercial structures that support sustainable partner economics and long-term relationship value.' },
                { step: '04', title: 'Collaboration Across the Customer Lifecycle', body: 'Partnership engagement extends through the full customer lifecycle - from pre-sales and proof of concept through deployment, go-live, and ongoing account management. Verafye works alongside partners to support successful customer outcomes at every stage.' },
              ].map(item => (
                <div key={item.step} className="card" style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{item.step}</div>
                  <h3 style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.125rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. PARTNER ENQUIRY FORM ──────────────────────────────────────────── */}
      <section id="partner-form" style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>

            {/* Left: context */}
            <div style={{ paddingTop: '0.5rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>Become a Partner</p>
              <h2 style={{ fontSize: 'clamp(1.375rem,3vw,2.25rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.25rem', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Let's Build Something Together
              </h2>
              <p style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.0625rem)', color: 'var(--body)', marginBottom: '2rem', lineHeight: 1.7 }}>
                Tell us about your organisation and what kind of partnership you have in mind. We'll follow up to explore how we can work together.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>), text: 'Resellers, SIs, technology vendors and consulting firms welcome' },
                  { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>), text: 'Global coverage - regional and market-specific partnerships supported' },
                  { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>), text: 'Flexible commercial models - referral, resale, co-sell, and strategic' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '2rem', height: '2rem', borderRadius: '8px', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.6, paddingTop: '0.35rem' }}>{item.text}</p>
                  </div>
                ))}
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
                    <h3 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Enquiry Received</h3>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '22rem', marginLeft: 'auto', marginRight: 'auto' }}>
                      Thank you for your interest. We will be in touch shortly to explore how we can work together.
                    </p>
                    <Link href="/" className="btn-secondary" style={{ display: 'inline-flex' }}>Back to Home</Link>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.375rem', letterSpacing: '-0.02em' }}>Partner Enquiry</h2>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '1.75rem', lineHeight: 1.6, paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                      Tell us about your organisation and the kind of partnership you have in mind. All fields marked * are required.
                    </p>
                    <form onSubmit={handleSubmit} noValidate>

                      {/* Name row */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginBottom: '0.875rem' }}>
                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label" htmlFor="p-firstName">First Name <span style={{ color: 'var(--error)' }}>*</span></label>
                          <input id="p-firstName" name="firstName" type="text" className="form-input" placeholder="Jane" value={form.firstName} onChange={handleChange} style={fieldStyle(errors.firstName)} />
                          {errText(errors.firstName)}
                        </div>
                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label" htmlFor="p-lastName">Last Name <span style={{ color: 'var(--error)' }}>*</span></label>
                          <input id="p-lastName" name="lastName" type="text" className="form-input" placeholder="Smith" value={form.lastName} onChange={handleChange} style={fieldStyle(errors.lastName)} />
                          {errText(errors.lastName)}
                        </div>
                      </div>

                      {/* Work Email */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="p-email">Work Email <span style={{ color: 'var(--error)' }}>*</span></label>
                        <input id="p-email" name="email" type="email" className="form-input" placeholder="jane@yourcompany.com" value={form.email} onChange={handleChange} style={fieldStyle(errors.email)} />
                        {errText(errors.email)}
                      </div>

                      {/* Organisation */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="p-organisation">Organisation Name <span style={{ color: 'var(--error)' }}>*</span></label>
                        <input id="p-organisation" name="organisation" type="text" className="form-input" placeholder="Your organisation" value={form.organisation} onChange={handleChange} style={fieldStyle(errors.organisation)} />
                        {errText(errors.organisation)}
                      </div>

                      {/* Org Type + Partnership Interest */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginBottom: '0' }}>
                        <div className="form-group">
                          <label className="form-label" htmlFor="p-orgType">Organisation Type <span style={{ color: 'var(--error)' }}>*</span></label>
                          <select id="p-orgType" name="orgType" className="form-select" value={form.orgType} onChange={handleChange} style={fieldStyle(errors.orgType)}>
                            <option value="">Select type…</option>
                            <option value="System Integrator">System Integrator</option>
                            <option value="Reseller">Reseller</option>
                            <option value="Technology Vendor">Technology Vendor</option>
                            <option value="Consulting Firm">Consulting Firm</option>
                            <option value="Other">Other</option>
                          </select>
                          {errText(errors.orgType)}
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="p-partnershipInterest">Partnership Interest <span style={{ color: 'var(--error)' }}>*</span></label>
                          <select id="p-partnershipInterest" name="partnershipInterest" className="form-select" value={form.partnershipInterest} onChange={handleChange} style={fieldStyle(errors.partnershipInterest)}>
                            <option value="">Select model…</option>
                            <option value="Resale">Resale</option>
                            <option value="Co-sell">Co-sell</option>
                            <option value="Referral">Referral</option>
                            <option value="Technology Integration">Technology Integration</option>
                            <option value="Strategic Alliance">Strategic Alliance</option>
                          </select>
                          {errText(errors.partnershipInterest)}
                        </div>
                      </div>

                      {/* Geography + Client Base */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginBottom: '0' }}>
                        <div className="form-group">
                          <label className="form-label" htmlFor="p-geography">Geographic Focus <span style={{ color: 'var(--error)' }}>*</span></label>
                          <select id="p-geography" name="geography" className="form-select" value={form.geography} onChange={handleChange} style={fieldStyle(errors.geography)}>
                            <option value="">Select region…</option>
                            <option value="North America">North America</option>
                            <option value="Europe">Europe</option>
                            <option value="Asia Pacific">Asia Pacific</option>
                            <option value="Middle East & Africa">Middle East &amp; Africa</option>
                            <option value="Latin America">Latin America</option>
                            <option value="Global">Global</option>
                          </select>
                          {errText(errors.geography)}
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="p-clientBase">FS Client Base <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--muted-light)' }}>(optional)</span></label>
                          <select id="p-clientBase" name="clientBase" className="form-select" value={form.clientBase} onChange={handleChange}>
                            <option value="">Select range…</option>
                            <option value="Less than 10">Less than 10</option>
                            <option value="10–50">10–50</option>
                            <option value="50–200">50–200</option>
                            <option value="200+">200+</option>
                            <option value="Not applicable">Not applicable</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="form-group">
                        <label className="form-label" htmlFor="p-message">Partnership Opportunity <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--muted-light)' }}>(optional)</span></label>
                        <textarea id="p-message" name="message" className="form-textarea" placeholder="Tell us about the partnership opportunity, your customer base, or anything else that would help us understand how we can work together…" rows={3} value={form.message} onChange={handleChange} />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        style={{ width: '100%', height: '3rem', fontSize: '0.9375rem', marginTop: '0.5rem', opacity: isSubmitting ? 0.72 : 1, cursor: isSubmitting ? 'wait' : 'pointer' }}
                      >
                        {isSubmitting ? 'Submitting…' : 'Submit Partner Enquiry'}
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

      {/* ── 7. FINAL CTA ────────────────────────────────────────────────────── */}
      <CTA
        title="Build with Verafye"
        subtitle="Explore how we can partner to deliver modern fraud, AML, and payment intelligence solutions to financial institutions and platforms."
      />
    </>
  );
}
