import RequestDemoClient from './RequestDemoClient';

export const metadata = {
  title: "Request a Network Risk Intelligence Demo",
  description: "See how fraud, AML and risk teams uncover hidden financial crime networks, accelerate investigations and improve compliance outcomes.",
  keywords: ["network risk intelligence demo", "fraud investigation software demo", "aml compliance platform demo", "financial crime intelligence demo"],
  openGraph: {
    title: "Request a Network Risk Intelligence Demo | Verafye",
    description: "See how fraud, AML and risk teams uncover hidden financial crime networks, accelerate investigations and improve compliance outcomes.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Request a Network Risk Intelligence Demo | Verafye",
    description: "See how fraud, AML and risk teams uncover hidden financial crime networks, accelerate investigations and improve compliance outcomes.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/request-demo',
  },
};

export default function RequestDemoPage() {
  return <RequestDemoClient variant="demo" />;
}
