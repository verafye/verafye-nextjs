import RequestDemoClient from './RequestDemoClient';

export const metadata = {
  title: "Request a Demo | Verafye Fraud & AML Platform",
  description: "Request a demo of Verafye's fraud prevention platform. See how AI-driven network intelligence detects financial crime and reduces risk. Book a demo.",
  openGraph: {
    title: "Request a Demo | Verafye Fraud & AML Platform",
    description: "Request a demo of Verafye's fraud prevention platform. See how AI-driven network intelligence detects financial crime and reduces risk. Book a demo.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Request a Demo | Verafye Fraud & AML Platform",
    description: "Request a demo of Verafye's fraud prevention platform. See how AI-driven network intelligence detects financial crime and reduces risk. Book a demo.",
  },
};

export default function RequestDemoPage() {
  return <RequestDemoClient />;
}
