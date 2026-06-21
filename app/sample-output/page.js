import SampleOutputClient from './SampleOutputClient';

export const metadata = {
  title: "Sample Risk Shadowing Output",
  description: "Synthetic sample of a Risk Shadowing Review evidence pack, shared after request.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.verafye.com/sample-output',
  },
};

export default function SampleOutputPage() {
  return <SampleOutputClient />;
}
