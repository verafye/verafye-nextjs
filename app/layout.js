import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://verafye.com'),
  title: {
    default: 'Verafye  -  AI-Native FRAML Intelligence Infrastructure',
    template: '%s | Verafye',
  },
  description: 'AI-native FRAML intelligence infrastructure for financial institutions and payment platforms  -  graph-native fraud detection, AML monitoring, and investigation intelligence.',
  keywords: ['FRAML platform', 'fraud and AML platform', 'financial crime platform', 'transaction monitoring', 'investigation intelligence', 'FRAML infrastructure', 'AML detection', 'fraud intelligence'],
  openGraph: {
    title: 'Verafye  -  AI-Native FRAML Intelligence Infrastructure',
    description: 'AI-native FRAML intelligence infrastructure for financial institutions and payment platforms  -  graph-native fraud detection, AML monitoring, and investigation intelligence.',
    url: 'https://verafye.com',
    siteName: 'Verafye',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Verafye FRAML Intelligence Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verafye  -  AI-Native FRAML Intelligence Infrastructure',
    description: 'AI-native FRAML intelligence infrastructure for financial institutions and payment platforms  -  graph-native fraud detection, AML monitoring, and investigation intelligence.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager — as high in <head> as possible */}
        <Script id="gtm-head" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T2N2Z2S2');
        `}</Script>

        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* GA4 — kept alongside GTM until GA4 is migrated into GTM console */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R0NXMDGZSM"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R0NXMDGZSM', {
            page_path: window.location.pathname,
            send_page_view: true
          });
          window.trackEvent = function(eventName, params) {
            if (typeof gtag !== 'undefined') {
              gtag('event', eventName, params || {});
            }
          };
        `}</Script>
      </head>
      <body className="font-sans overflow-x-hidden" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) — immediately after opening <body> tag */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2N2Z2S2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}