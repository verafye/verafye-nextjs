import BecomeAPartnerClient from './BecomeAPartnerClient';

export const metadata = {
  title: "Become a Verafye Partner",
  description: "Partner with Verafye to bring investigation intelligence to regulated financial platforms. Connect your expertise with our fraud and AML signal-to-case platform.",
  openGraph: {
    title: "Become a Verafye Partner",
    description: "Partner with Verafye to bring investigation intelligence to regulated financial platforms. Connect your expertise with our fraud and AML signal-to-case platform.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Become a Verafye Partner",
    description: "Partner with Verafye to bring investigation intelligence to regulated financial platforms. Connect your expertise with our fraud and AML signal-to-case platform.",
  },
};

export default function BecomeAPartnerPage() {
  return <BecomeAPartnerClient />;
}
