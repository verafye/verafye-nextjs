import RequestRedirectClient from './RequestRedirectClient';

export const metadata = {
  title: "Request a Risk Shadowing Review",
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://www.verafye.com/request-demo',
  },
};

export default function RiskShadowingRequestPage() {
  return <RequestRedirectClient />;
}
