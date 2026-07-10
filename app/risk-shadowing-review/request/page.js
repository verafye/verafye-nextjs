import RequestRedirectClient from './RequestRedirectClient';

export const metadata = {
  title: "Request a Risk Shadowing Review | Verafye",
  description: "",
  openGraph: {
    title: "Request a Risk Shadowing Review | Verafye",
    description: "",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Request a Risk Shadowing Review | Verafye",
    description: "",
  },
  alternates: {
    canonical: 'https://www.verafye.com/request-demo',
  },
};

export default function RiskShadowingRequestPage() {
  return <RequestRedirectClient />;
}
