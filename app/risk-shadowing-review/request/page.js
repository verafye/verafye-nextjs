import RequestRedirectClient from './RequestRedirectClient';

export const metadata = {
  title: "Request a Risk Shadowing Review",
  description: "Request a Risk Shadowing Review from Verafye. This page redirects to the main request form.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Request a Risk Shadowing Review",
    description: "Request a Risk Shadowing Review from Verafye.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Request a Risk Shadowing Review",
    description: "Request a Risk Shadowing Review from Verafye.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/request-demo/?intent=risk-shadowing-review',
  },
};

export default function RiskShadowingRequestPage() {
  return <RequestRedirectClient />;
}
