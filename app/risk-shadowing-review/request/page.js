import RequestRedirectClient from './RequestRedirectClient';

export const metadata = {
  title: { absolute: "Request a Risk Shadowing Review | Verafye" },
  openGraph: {
    title: "Request a Risk Shadowing Review | Verafye",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Request a Risk Shadowing Review | Verafye",
  },
  alternates: {
    canonical: 'https://www.verafye.com/request-demo',
  },
  robots: { index: false, follow: true },
};

export default function RiskShadowingRequestPage() {
  return <RequestRedirectClient />;
}
