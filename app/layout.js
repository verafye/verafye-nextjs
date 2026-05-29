import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieNotice from '@/components/CookieNotice';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://www.verafye.com'),
  title: {
    default: 'Verafye - Intelligent Investigation Layer for Regulated Financial Platforms',
    template: '%s | Verafye',
  },
  description: 'Verafye helps regulated financial platforms connect fraud, AML, payments, identity, device, and behavior signals into explainable investigations and audit-ready case workflows.',
  keywords: ['investigation layer', 'financial crime investigation', 'fraud and AML investigation', 'alert clustering', 'graph intelligence', 'case intelligence', 'AML investigation workflows', 'payment risk intelligence', 'audit-ready investigations'],
  openGraph: {
    title: 'Verafye - Intelligent Investigation Layer for Regulated Financial Platforms',
    description: 'Verafye helps regulated financial platforms connect fraud, AML, payments, identity, device, and behavior signals into explainable investigations and audit-ready case workflows.',
    url: 'https://www.verafye.com',
    siteName: 'Verafye',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Verafye - Intelligent Investigation Layer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verafye - Intelligent Investigation Layer for Regulated Financial Platforms',
    description: 'Verafye helps regulated financial platforms connect fraud, AML, payments, identity, device, and behavior signals into explainable investigations and audit-ready case workflows.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: '/images/favicon-512.png', type: 'image/png' }],
    apple: [{ url: '/images/favicon-512.png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Consent Mode v2 — defaults (must run BEFORE GTM) */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          // Read any previously stored consent from localStorage
          var _vc = (function(){try{var s=localStorage.getItem('verafye_cookie_consent');return s?JSON.parse(s):null;}catch(e){return null;}})();
          gtag('consent','default',{
            analytics_storage:       (_vc&&_vc.analytics)       ? 'granted':'denied',
            ad_storage:              (_vc&&_vc.advertising)     ? 'granted':'denied',
            personalization_storage: (_vc&&_vc.personalization) ? 'granted':'denied',
            functionality_storage:   'granted',
            security_storage:        'granted',
            wait_for_update:         500
          });
        `}} />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T2N2Z2S2');` }} />
        {/* End Google Tag Manager */}
        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Nunito+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans overflow-x-hidden" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2N2Z2S2" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        {children}
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}