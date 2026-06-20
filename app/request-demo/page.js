import RequestDemoClient from './RequestDemoClient';

export const metadata = {
  title: "Request a Risk Shadowing Review",
  description: "Request a Risk Shadowing Review or Verafye walkthrough to explore how Verafye connects fragmented fraud, AML, payment, identity, device, ledger, and case signals into investigation-ready Network Risk Intelligence.",
  keywords: ["network risk intelligence demo", "fraud investigation software demo", "aml compliance platform demo", "financial crime intelligence demo"],
  openGraph: {
    title: "Request a Risk Shadowing Review | Verafye",
    description: "Request a Risk Shadowing Review or Verafye walkthrough to explore how Verafye connects fragmented fraud, AML, payment, identity, device, ledger, and case signals into investigation-ready Network Risk Intelligence.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Request a Risk Shadowing Review | Verafye",
    description: "Request a Risk Shadowing Review or Verafye walkthrough to explore how Verafye connects fragmented fraud, AML, payment, identity, device, ledger, and case signals into investigation-ready Network Risk Intelligence.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/request-demo',
  },
};

export default function RequestDemoPage() {
  return <RequestDemoClient />;
}
