'use client';

import { useState } from 'react';
import PdfDownloadModal from './PdfDownloadModal';

/* ─────────────────────────────────────────────────────────────
   PdfDownloadButton
   A lightweight 'use client' wrapper that can be imported into
   server-component article pages (which export `metadata`).

   Props:
     pdfPath          – public path, e.g. "/downloads/resources/file.pdf"
     pdfFilename      – save-as name, e.g. "verafye-resource.pdf"
     resourceTitle    – human-readable title for lead-capture logging
     resourceCategory – category for analytics attribution (e.g. "Product Insights")
     articleSlug      – URL slug for attribution (e.g. "what-is-investigation-intelligence")
   ───────────────────────────────────────────────────────────── */

function pushEvent(event, payload) {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...payload });
  }
}

export default function PdfDownloadButton({
  pdfPath,
  pdfFilename,
  resourceTitle,
  resourceCategory = '',
  articleSlug = '',
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
    pushEvent('pdf_download_cta_click', {
      resource_title: resourceTitle,
      resource_category: resourceCategory,
      article_slug: articleSlug,
      pdf_filename: pdfFilename,
      source_page: typeof window !== 'undefined' ? window.location.pathname : '',
    });
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="btn-secondary"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}
      >
        Download PDF
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </button>

      {isOpen && (
        <PdfDownloadModal
          pdfPath={pdfPath}
          pdfFilename={pdfFilename}
          resourceTitle={resourceTitle}
          resourceCategory={resourceCategory}
          articleSlug={articleSlug}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
