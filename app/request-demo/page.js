import RequestDemoClient from './RequestDemoClient';

export const metadata = {
  title: "Request a Demo | Verafye Fraud & AML Platform",
  description: "Use the demo to explore how Verafye connects fragmented fraud, AML, payment, identity, device, behavior, and transaction signals into investigation-ready workflows.",
  openGraph: {
    title: "Request a Demo | Verafye Fraud & AML Platform",
    description: "Use the demo to explore how Verafye connects fragmented fraud, AML, payment, identity, device, behavior, and transaction signals into investigation-ready workflows.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Request a Demo | Verafye Fraud & AML Platform",
    description: "Use the demo to explore how Verafye connects fragmented fraud, AML, payment, identity, device, behavior, and transaction signals into investigation-ready workflows.",
  },
};

export default function RequestDemoPage() {
  return <RequestDemoClient />;
}
