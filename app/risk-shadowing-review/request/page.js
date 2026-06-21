import RequestDemoClient from '../../request-demo/RequestDemoClient';

export const metadata = {
  title: "Request a Risk Shadowing Review",
  description: "Request a Risk Shadowing Review to explore how Verafye connects fragmented fraud, AML, payment, identity, device, ledger, merchant, beneficiary, and case signals into investigation-ready Network Risk Intelligence, alongside your existing systems.",
  keywords: ["risk shadowing review request", "network risk intelligence evaluation", "fraud aml proof of value", "investigation-ready evidence"],
  openGraph: {
    title: "Request a Risk Shadowing Review | Verafye",
    description: "Request a Risk Shadowing Review to explore how Verafye connects fragmented fraud, AML, payment, identity, device, ledger, merchant, beneficiary, and case signals into investigation-ready Network Risk Intelligence, alongside your existing systems.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Request a Risk Shadowing Review | Verafye",
    description: "Request a Risk Shadowing Review to explore how Verafye connects fragmented fraud, AML, payment, identity, device, ledger, merchant, beneficiary, and case signals into investigation-ready Network Risk Intelligence, alongside your existing systems.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/risk-shadowing-review/request',
  },
};

export default function RiskShadowingRequestPage() {
  return <RequestDemoClient variant="risk-shadowing" />;
}
