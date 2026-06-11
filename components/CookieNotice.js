'use client';
import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

/* ─── Storage helpers ─────────────────────────────────────────────────────── */
const CONSENT_KEY = 'verafye_cookie_consent';
const CONSENT_VERSION = '1.0';

function getStoredConsent() {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeConsent(choices) {
  const obj = {
    essential:       true,
    analytics:       !!choices.analytics,
    personalization: !!choices.personalization,
    advertising:     !!choices.advertising,
    timestamp:       new Date().toISOString(),
    version:         CONSENT_VERSION,
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(obj));
  } catch { /* ignore */ }
  return obj;
}

/* ─── GTM / dataLayer consent update ─────────────────────────────────────── */
// TODO: Wire GTM/tag firing to consent mode or CMP before scaling paid marketing campaigns.
function applyGtmConsent(consent) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  // Update via Google Consent Mode v2
  window.dataLayer.push({
    event: 'cookie_consent_update',
    analytics_storage:       consent.analytics       ? 'granted' : 'denied',
    ad_storage:              consent.advertising     ? 'granted' : 'denied',
    personalization_storage: consent.personalization ? 'granted' : 'denied',
    functionality_storage:   'granted',
    security_storage:        'granted',
  });
  // Also call gtag() helper if present (loaded by layout consent-defaults script)
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage:       consent.analytics       ? 'granted' : 'denied',
      ad_storage:              consent.advertising     ? 'granted' : 'denied',
      personalization_storage: consent.personalization ? 'granted' : 'denied',
    });
  }
}

/* ─── Toggle switch component ─────────────────────────────────────────────── */
function Toggle({ checked, onChange, disabled, id }) {
  return (
    <label
      htmlFor={id}
      style={{
        display: 'inline-flex', alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none', flexShrink: 0,
      }}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        aria-checked={checked}
      />
      <span style={{
        display: 'inline-flex', alignItems: 'center',
        width: '40px', height: '22px', borderRadius: '11px',
        padding: '2px',
        background: checked ? '#1E6FB7' : '#CBD5E1',
        transition: 'background 0.2s',
        opacity: disabled ? 0.5 : 1,
      }}>
        <span style={{
          width: '18px', height: '18px', borderRadius: '50%',
          background: '#fff',
          boxShadow: '0 1px 3px rgba(0,0,0,0.18)',
          transform: checked ? 'translateX(18px)' : 'translateX(0)',
          transition: 'transform 0.2s',
          flexShrink: 0,
        }} />
      </span>
    </label>
  );
}

/* ─── Category row ─────────────────────────────────────────────────────────── */
function CategoryRow({ title, description, checked, onChange, disabled, always }) {
  const id = `cookie-toggle-${title.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div style={{
      display: 'flex', gap: '1rem', alignItems: 'flex-start',
      padding: '1rem 0',
      borderBottom: '1px solid #F1F5F9',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
          <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1E293B' }}>{title}</span>
          {always && (
            <span style={{
              fontSize: '0.625rem', fontWeight: 700, color: '#059669',
              background: 'rgba(5,150,105,0.09)', border: '1px solid rgba(5,150,105,0.2)',
              borderRadius: '20px', padding: '0.15rem 0.5rem', letterSpacing: '0.04em',
            }}>
              ALWAYS ON
            </span>
          )}
        </div>
        <p style={{ margin: 0, fontSize: '0.8125rem', color: '#64748B', lineHeight: 1.55 }}>
          {description}
        </p>
      </div>
      <Toggle id={id} checked={checked} onChange={onChange} disabled={disabled} />
    </div>
  );
}

/* ─── Main CookieNotice component ─────────────────────────────────────────── */
export default function CookieNotice() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal]   = useState(false);
  const [prefs, setPrefs] = useState({
    analytics: false, personalization: false, advertising: false,
  });

  /* Load consent state on mount */
  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      applyGtmConsent(stored);
      setPrefs({
        analytics:       !!stored.analytics,
        personalization: !!stored.personalization,
        advertising:     !!stored.advertising,
      });
    } else {
      setShowBanner(true);
    }

    /* Expose global hook so Footer "Cookie Preferences" button can open modal */
    window.verafyeOpenPreferences = () => {
      const current = getStoredConsent();
      if (current) {
        setPrefs({
          analytics:       !!current.analytics,
          personalization: !!current.personalization,
          advertising:     !!current.advertising,
        });
      }
      setShowBanner(false);
      setShowModal(true);
    };

    return () => { delete window.verafyeOpenPreferences; };
  }, []);

  /* Prevent body scroll while modal is open */
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = showModal ? 'hidden' : '';
    }
    return () => {
      if (typeof document !== 'undefined') document.body.style.overflow = '';
    };
  }, [showModal]);

  /* Action handlers */
  const acceptAll = useCallback(() => {
    const c = writeConsent({ analytics: true, personalization: true, advertising: true });
    applyGtmConsent(c);
    setPrefs({ analytics: true, personalization: true, advertising: true });
    setShowBanner(false);
    setShowModal(false);
  }, []);

  const rejectAll = useCallback(() => {
    const c = writeConsent({ analytics: false, personalization: false, advertising: false });
    applyGtmConsent(c);
    setPrefs({ analytics: false, personalization: false, advertising: false });
    setShowBanner(false);
    setShowModal(false);
  }, []);

  const savePreferences = useCallback(() => {
    const c = writeConsent(prefs);
    applyGtmConsent(c);
    setShowBanner(false);
    setShowModal(false);
  }, [prefs]);

  const openModal = useCallback(() => {
    const current = getStoredConsent();
    if (current) {
      setPrefs({
        analytics:       !!current.analytics,
        personalization: !!current.personalization,
        advertising:     !!current.advertising,
      });
    }
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    // If no consent yet, re-show banner
    if (!getStoredConsent()) setShowBanner(true);
  }, []);

  /* Shared button styles */
  const btnPrimary = {
    flexShrink: 0,
    background: '#1E6FB7',
    border: '1px solid #1E6FB7',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '0.8125rem',
    fontWeight: 600,
    padding: '0.45rem 1.125rem',
    cursor: 'pointer',
    lineHeight: 1.5,
    whiteSpace: 'nowrap',
    transition: 'background 0.15s',
  };
  const btnSecondary = {
    flexShrink: 0,
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.22)',
    borderRadius: '6px',
    color: 'rgba(255,255,255,0.85)',
    fontSize: '0.8125rem',
    fontWeight: 500,
    padding: '0.45rem 1rem',
    cursor: 'pointer',
    lineHeight: 1.5,
    whiteSpace: 'nowrap',
    transition: 'border-color 0.15s, color 0.15s',
  };
  const btnGhost = {
    flexShrink: 0,
    background: 'transparent',
    border: '1px solid #E2E8F0',
    borderRadius: '6px',
    color: '#475569',
    fontSize: '0.8125rem',
    fontWeight: 500,
    padding: '0.45rem 1rem',
    cursor: 'pointer',
    lineHeight: 1.5,
    whiteSpace: 'nowrap',
    transition: 'border-color 0.15s',
  };
  const btnBlueOutline = {
    ...btnGhost,
    border: '1px solid #1E6FB7',
    color: '#1E6FB7',
    fontWeight: 600,
  };

  return (
    <>
      {/* ── Cookie Banner ──────────────────────────────────────────────────── */}
      {showBanner && !showModal && (
        <div
          role="region"
          aria-label="Cookie consent"
          style={{
            position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9998,
            background: 'rgba(15,23,42,0.97)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '1rem 1.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '1.25rem', flexWrap: 'wrap',
          }}
        >
          <p style={{
            fontSize: '0.8125rem', color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.65, margin: 0, maxWidth: '52rem', flex: '1 1 auto',
          }}>
            This website utilizes technologies such as cookies to enable essential site
            functionality, as well as for analytics, personalization, and targeted advertising.
            To learn more, view our{' '}
            <Link href="/privacy-policy" style={{ color: 'rgba(96,165,250,0.9)', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
              Privacy Policy
            </Link>
            {' '}and{' '}
            <Link href="/cookie-policy" style={{ color: 'rgba(96,165,250,0.9)', textDecoration: 'underline', whiteSpace: 'nowrap' }}>
              Cookie Policy
            </Link>.
          </p>
          <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap', flexShrink: 0 }}>
            <button onClick={rejectAll} style={btnSecondary}>
              Reject Non-Essential
            </button>
            <button onClick={openModal} style={btnSecondary}>
              Manage Preferences
            </button>
            <button onClick={acceptAll} style={btnPrimary}>
              Accept All
            </button>
          </div>
        </div>
      )}

      {/* ── Manage Preferences Modal ───────────────────────────────────────── */}
      {showModal && (
        <>
          {/* Overlay */}
          <div
            onClick={closeModal}
            aria-hidden="true"
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(15,23,42,0.55)',
              zIndex: 9998,
              backdropFilter: 'blur(2px)',
            }}
          />

          {/* Modal card */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Cookie Preferences"
            style={{
              position: 'fixed',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 9999,
              background: '#fff',
              borderRadius: '14px',
              boxShadow: '0 24px 64px rgba(15,23,42,0.18), 0 4px 16px rgba(0,0,0,0.08)',
              width: '92vw', maxWidth: '520px',
              maxHeight: '90vh', overflowY: 'auto',
            }}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid #F1F5F9',
            }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 700, color: '#1E293B' }}>
                  Cookie Preferences
                </h2>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.8125rem', color: '#64748B' }}>
                  Manage which cookies you allow on this site.
                </p>
              </div>
              <button
                onClick={closeModal}
                aria-label="Close preferences"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#94A3B8', padding: '0.25rem', borderRadius: '4px',
                  lineHeight: 1, flexShrink: 0,
                  fontSize: '1.25rem',
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body - Category rows */}
            <div style={{ padding: '0 1.5rem' }}>
              <CategoryRow
                title="Essential Cookies"
                description="Required for core website functionality, security, navigation, and basic site operations. These cannot be disabled."
                checked={true}
                onChange={() => {}}
                disabled={true}
                always={true}
              />
              <CategoryRow
                title="Analytics Cookies"
                description="Help us understand how visitors use the website, which pages are visited, and how we can improve performance and user experience."
                checked={prefs.analytics}
                onChange={e => setPrefs(p => ({ ...p, analytics: e.target.checked }))}
                disabled={false}
              />
              <CategoryRow
                title="Personalization Cookies"
                description="Help remember preferences and support a more relevant website experience where applicable."
                checked={prefs.personalization}
                onChange={e => setPrefs(p => ({ ...p, personalization: e.target.checked }))}
                disabled={false}
              />
              <CategoryRow
                title="Advertising Cookies"
                description="Help measure campaign effectiveness and support relevant business communications."
                checked={prefs.advertising}
                onChange={e => setPrefs(p => ({ ...p, advertising: e.target.checked }))}
                disabled={false}
              />
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '1rem 1.5rem 1.25rem',
              display: 'flex', flexWrap: 'wrap', gap: '0.625rem',
              justifyContent: 'flex-end',
              borderTop: '1px solid #F1F5F9',
              marginTop: '0.25rem',
            }}>
              <button onClick={rejectAll} style={btnGhost}>
                Reject Non-Essential
              </button>
              <button onClick={savePreferences} style={btnBlueOutline}>
                Save Preferences
              </button>
              <button onClick={acceptAll} style={{ ...btnPrimary, background: '#1E6FB7', border: '1px solid #1E6FB7' }}>
                Accept All
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
