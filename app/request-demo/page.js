import RequestDemoClient from './RequestDemoClient';

export const metadata = {
  title: "Request a Demo | Verafye Network Risk Intelligence",
  description: "Request a demo of Verafye's graph-native Network Risk Intelligence platform. See how entity resolution and network mapping convert alert noise into investigation-grade evidence.",
  openGraph: {
    title: "Request a Demo | Verafye Network Risk Intelligence",
    description: "Request a demo of Verafye's graph-native Network Risk Intelligence platform. See how entity resolution and network mapping convert alert noise into investigation-grade evidence.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Request a Demo | Verafye Network Risk Intelligence",
    description: "Request a demo of Verafye's graph-native Network Risk Intelligence platform. See how entity resolution and network mapping convert alert noise into investigation-grade evidence.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/request-demo',
  },
};

export default function RequestDemoPage() {
  return <RequestDemoClient />;
}
