import BecomeAPartnerClient from './BecomeAPartnerClient';

export const metadata = {
  title: "Become a Partner | Fraud & AML Intelligence Ecosystem",
  description: "Partner with Verafye to help financial institutions detect coordinated financial crime, improve AML compliance, and uncover hidden fraud networks using AI-driven intelligence.",
  openGraph: {
    title: "Become a Partner | Fraud & AML Intelligence Ecosystem",
    description: "Partner with Verafye to help financial institutions detect coordinated financial crime, improve AML compliance, and uncover hidden fraud networks using AI-driven intelligence.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Become a Partner | Fraud & AML Intelligence Ecosystem",
    description: "Partner with Verafye to help financial institutions detect coordinated financial crime, improve AML compliance, and uncover hidden fraud networks using AI-driven intelligence.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/become-a-partner',
  },
};

export default function BecomeAPartnerPage() {
  return <BecomeAPartnerClient />;
}
