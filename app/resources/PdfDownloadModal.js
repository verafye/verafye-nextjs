'use client';

import { useState } from 'react';
import { getLeadCaptureEndpoint } from '@/app/lib/endpoints';

/* ─────────────────────────────────────────────────────────────
   PdfDownloadModal
   Props:
     pdfPath          – public path to the PDF, e.g. "/downloads/resources/file.pdf"
     pdfFilename      – suggested save-as filename, e.g. "verafye-resource.pdf"
     resourceTitle    – human-readable title used in lead-capture logging
     resourceCategory – category string for attribution (e.g. "Product Insights")
     articleSlug      – URL slug for attribution (e.g. "what-is-investigation-intelligence")
     onClose          – callback fired when the modal should be dismissed
   ───────────────────────────────────────────────────────────── */

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((email || '').trim());
}

// ── Lead-capture endpoint ─────────────────────────────────────────────────
// Resolved at submit time via getLeadCaptureEndpoint().
// No hardcoded fallback — missing env var fails clearly at form submission.
// See .env.local.example and docs/form-endpoint-configuration.md.

// ── Analytics helper ───────────────────────────────────────────────────────
function pushEvent(event, payload) {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...payload });
  }
}

// ── UTM / attribution capture ─────────────────────────────────────────────
function getAttribution() {
  if (typeof window === 'undefined') return {};
  try {
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source:   params.get('utm_source')   || null,
      utm_medium:   params.get('utm_medium')   || null,
      utm_campaign: params.get('utm_campaign') || null,
      utm_content:  params.get('utm_content')  || null,
      utm_term:     params.get('utm_term')     || null,
      referrer:     document.referrer          || null,
      source_page:  window.location.pathname  || null,
    };
  } catch {
    return {};
  }
}

export default function PdfDownloadModal({
  pdfPath,
  pdfFilename,
  resourceTitle,
  resourceCategory = '',
  articleSlug = '',
  onClose,
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Capture attribution once on mount
  const [attribution] = useState(() => getAttribution());

  function validate() {
    let valid = true;
    if (!name.trim()) {
      setNameError('Please enter your name.');
      valid = false;
    } else {
      setNameError('');
    }
    if (!email.trim() || !isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }
    if (!valid) {
      pushEvent('pdf_download_validation_error', {
        resource_title:    resourceTitle,
        resource_category: resourceCategory,
        article_slug:      articleSlug,
        pdf_filename:      pdfFilename,
        error_field:       !name.trim() ? 'name' : 'email',
      });
    }
    return valid;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError('');

    // ── Build attribution message block ────────────────────────────────────
    const now = new Date().toISOString();
    const attributionLines = [
      attribution.utm_source   ? `UTM Source: ${attribution.utm_source}`     : null,
      attribution.utm_medium   ? `UTM Medium: ${attribution.utm_medium}`     : null,
      attribution.utm_campaign ? `UTM Campaign: ${attribution.utm_campaign}` : null,
      attribution.utm_content  ? `UTM Content: ${attribution.utm_content}`   : null,
      attribution.utm_term     ? `UTM Term: ${attribution.utm_term}`         : null,
      attribution.referrer     ? `Referrer: ${attribution.referrer}`         : null,
      attribution.source_page  ? `Source Page: ${attribution.source_page}`   : null,
    ].filter(Boolean);

    // ── Format payload for the external-email/send API ─────────────────────
    const apiPayload = {
      clientName:      company.trim() || name.trim(),
      emailAddress:    email.trim().toLowerCase(),
      phoneNumber:     '',
      subject:         `PDF Download - ${resourceTitle}`,
      message: [
        `Name: ${name.trim()}`,
        `Work Email: ${email.trim().toLowerCase()}`,
        company.trim() ? `Company: ${company.trim()}`     : null,
        role.trim()    ? `Role: ${role.trim()}`            : null,
        `Resource Title: ${resourceTitle}`,
        resourceCategory ? `Resource Category: ${resourceCategory}` : null,
        articleSlug      ? `Article Slug: ${articleSlug}`           : null,
        `PDF File: ${pdfFilename}`,
        `Downloaded At: ${now}`,
        attributionLines.length ? `\n--- Attribution ---\n${attributionLines.join('\n')}` : null,
      ].filter(Boolean).join('\n'),
      institutionUuid: null,
      fileReference:   null,
      category:        'PDF Lead Capture',
    };

    try {
      const response = await fetch(getLeadCaptureEndpoint(), {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(apiPayload),
      });

      let result = {};
      try { result = await response.json(); } catch { /* non-JSON body is fine */ }

      const success =
        response.ok &&
        (result.status === undefined ||
          Number(result.status) === 1  ||
          result.success === true);

      if (!success) {
        throw new Error(`Submission rejected: ${response.status}`);
      }
    } catch (err) {
      // ── Analytics: submit error ────────────────────────────────────────
      pushEvent('pdf_download_submit_error', {
        resource_title:    resourceTitle,
        resource_category: resourceCategory,
        article_slug:      articleSlug,
        pdf_filename:      pdfFilename,
        error_message:     err && err.message ? err.message : 'unknown',
      });

      setSubmitting(false);
      setSubmitError('We could not process your request. Please try again.');
      return; // block download - do NOT proceed
    }

    // ── Analytics: form submit ─────────────────────────────────────────────
    pushEvent('pdf_download_form_submit', {
      resource_title:    resourceTitle,
      resource_category: resourceCategory,
      article_slug:      articleSlug,
      pdf_filename:      pdfFilename,
      source_page:       attribution.source_page,
    });

    // Trigger download (only reached on successful lead capture)
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // ── Analytics: download success ────────────────────────────────────────
    pushEvent('pdf_download_success', {
      resource_title:    resourceTitle,
      resource_category: resourceCategory,
      article_slug:      articleSlug,
      pdf_filename:      pdfFilename,
      source_page:       attribution.source_page,
    });

    setSubmitting(false);
    setSubmitted(true);
  }

  // ── Overlay click closes modal ────────────────────────────────────────────
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15,28,46,0.55)',
        backdropFilter: 'blur(3px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1rem',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-modal-heading"
        style={{
          background: '#fff',
          borderRadius: '1rem',
          padding: '2.5rem',
          width: '100%',
          maxWidth: '28rem',
          boxShadow: '0 20px 60px rgba(15,28,46,0.18)',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--muted)',
            padding: '0.25rem',
            lineHeight: 1,
            borderRadius: '4px',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Download icon */}
        <div style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '0.75rem',
          background: 'var(--bg-blue)',
          border: '1px solid rgba(30,111,183,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </div>

        {!submitted ? (
          <>
            <h2
              id="pdf-modal-heading"
              style={{
                fontSize: '1.1875rem',
                fontWeight: 700,
                color: 'var(--dark)',
                marginBottom: '0.375rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
              }}
            >
              Download the PDF
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              Enter your details to access this Verafye resource.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div style={{ marginBottom: '1rem' }}>
                <label
                  htmlFor="pdf-form-name"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.375rem' }}
                >
                  Name <span style={{ color: 'var(--primary)' }}>*</span>
                </label>
                <input
                  id="pdf-form-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Jane Smith"
                  style={{
                    width: '100%',
                    padding: '0.625rem 0.75rem',
                    borderRadius: '0.5rem',
                    border: nameError ? '1.5px solid #dc2626' : '1.5px solid var(--border)',
                    fontSize: '0.9375rem',
                    color: 'var(--dark)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    background: '#fff',
                  }}
                />
                {nameError && (
                  <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.375rem' }}>{nameError}</p>
                )}
              </div>

              {/* Business Email */}
              <div style={{ marginBottom: '1rem' }}>
                <label
                  htmlFor="pdf-form-email"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.375rem' }}
                >
                  Business Email <span style={{ color: 'var(--primary)' }}>*</span>
                </label>
                <input
                  id="pdf-form-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="jane@yourcompany.com"
                  style={{
                    width: '100%',
                    padding: '0.625rem 0.75rem',
                    borderRadius: '0.5rem',
                    border: emailError ? '1.5px solid #dc2626' : '1.5px solid var(--border)',
                    fontSize: '0.9375rem',
                    color: 'var(--dark)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    background: '#fff',
                  }}
                />
                {emailError && (
                  <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.375rem' }}>{emailError}</p>
                )}
              </div>

              {/* Company Name (optional) */}
              <div style={{ marginBottom: '1rem' }}>
                <label
                  htmlFor="pdf-form-company"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.375rem' }}
                >
                  Company Name <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--muted)' }}>(optional)</span>
                </label>
                <input
                  id="pdf-form-company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  placeholder="Acme Payments Ltd."
                  style={{
                    width: '100%',
                    padding: '0.625rem 0.75rem',
                    borderRadius: '0.5rem',
                    border: '1.5px solid var(--border)',
                    fontSize: '0.9375rem',
                    color: 'var(--dark)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    background: '#fff',
                  }}
                />
              </div>

              {/* Role / Designation (optional) */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label
                  htmlFor="pdf-form-role"
                  style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '0.375rem' }}
                >
                  Role / Designation <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--muted)' }}>(optional)</span>
                </label>
                <input
                  id="pdf-form-role"
                  type="text"
                  autoComplete="organization-title"
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  placeholder="Head of Financial Crime"
                  style={{
                    width: '100%',
                    padding: '0.625rem 0.75rem',
                    borderRadius: '0.5rem',
                    border: '1.5px solid var(--border)',
                    fontSize: '0.9375rem',
                    color: 'var(--dark)',
                    outline: 'none',
                    boxSizing: 'border-box',
                    background: '#fff',
                  }}
                />
              </div>

              {/* Submit error message */}
              {submitError && (
                <div
                  role="alert"
                  style={{
                    marginBottom: '1rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    fontSize: '0.8125rem',
                    color: '#b91c1c',
                    lineHeight: 1.5,
                  }}
                >
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: '100%',
                  padding: '0.75rem 1.5rem',
                  background: 'var(--primary)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  opacity: submitting ? 0.7 : 1,
                  letterSpacing: '-0.01em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                {submitting ? (
                  'Preparing download...'
                ) : (
                  <>
                    Download PDF
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </>
                )}
              </button>

              <p style={{ fontSize: '0.6875rem', color: 'var(--muted)', textAlign: 'center', marginTop: '1rem', lineHeight: 1.5 }}>
                Your information is used only to provide access to Verafye resources.
              </p>
            </form>
          </>
        ) : (
          /* Success state */
          <div style={{ textAlign: 'center', paddingTop: '0.5rem' }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              background: '#dcfce7',
              border: '1px solid #86efac',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2
              id="pdf-modal-heading"
              style={{
                fontSize: '1.1875rem',
                fontWeight: 700,
                color: 'var(--dark)',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Thank you. Your download is ready.
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              Your PDF should download automatically. If it did not start, use the button below.
            </p>
            <a
              href={pdfPath}
              download={pdfFilename}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                background: 'var(--primary)',
                color: '#fff',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                textDecoration: 'none',
                marginBottom: '1.25rem',
              }}
            >
              Download Again
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
            <div>
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.8125rem',
                  color: 'var(--muted)',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
