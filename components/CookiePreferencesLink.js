'use client';

/**
 * Renders a small footer link that opens the CookieNotice preferences modal.
 * Works by calling window.verafyeOpenPreferences() which is exposed by CookieNotice.js.
 * Must be used inside a layout that also renders <CookieNotice />.
 */
export default function CookiePreferencesLink() {
  function handleClick(e) {
    e.preventDefault();
    if (typeof window !== 'undefined' && typeof window.verafyeOpenPreferences === 'function') {
      window.verafyeOpenPreferences();
    }
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Open cookie preferences"
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontSize: '0.8125rem',
        color: '#6b7b8d',
        fontFamily: 'inherit',
        lineHeight: 'inherit',
        transition: 'color 0.15s',
      }}
      onMouseEnter={e => { e.currentTarget.style.color = '#5AB2FF'; }}
      onMouseLeave={e => { e.currentTarget.style.color = '#6b7b8d'; }}
    >
      Cookie Preferences
    </button>
  );
}
