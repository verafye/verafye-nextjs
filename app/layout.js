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
    default: "Connected-Risk Intelligence for Financial Crime | Verafye",
    template: '%s | Verafye',
  },
  description: "Verafye turns known financial-crime suspicion into Connected-Risk Intelligence — helping fraud and AML teams understand what suspicious activity is connected to, and carry that context into investigation and decisioning.",
  keywords: ["connected risk intelligence", "network risk intelligence platform", "financial crime investigation platform", "fraud detection software", "aml compliance software", "graph intelligence platform", "entity resolution", "transaction intelligence", "investigation intelligence", "financial crime intelligence", "mule network detection", "risk analytics"],
  openGraph: {
    title: "Connected-Risk Intelligence for Financial Crime | Verafye",
    description: "Verafye turns known financial-crime suspicion into Connected-Risk Intelligence — helping fraud and AML teams understand what suspicious activity is connected to, and carry that context into investigation and decisioning.",
    url: 'https://www.verafye.com',
    siteName: 'Verafye',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Verafye - Connected-Risk Intelligence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Connected-Risk Intelligence for Financial Crime | Verafye",
    description: "Verafye turns known financial-crime suspicion into Connected-Risk Intelligence — helping fraud and AML teams understand what suspicious activity is connected to, and carry that context into investigation and decisioning.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Consent Mode v2 - defaults (must run BEFORE GTM) */}
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
        {/* Structured data — Organization + WebSite */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.verafye.com/#organization",
              "name": "Verafye",
              "url": "https://www.verafye.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.verafye.com/images/favicon-512.png"
              },
              "description": "Verafye turns known financial-crime suspicion into Connected-Risk Intelligence — helping fraud and AML teams understand what suspicious activity is connected to, and carry that context into investigation and decisioning.",
              "sameAs": [
                "https://www.linkedin.com/company/104417539"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://www.verafye.com/#website",
              "url": "https://www.verafye.com",
              "name": "Verafye",
              "publisher": { "@id": "https://www.verafye.com/#organization" }
            }
          ]
        }) }} />
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