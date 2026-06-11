import BecomeAPartnerClient from './BecomeAPartnerClient';

export const metadata = {
  title: "Become a Partner | Network Risk Intelligence Ecosystem",
  description: "Partner with Verafye to help financial institutions investigate coordinated financial crime networks with graph-native Network Risk Intelligence.",
  openGraph: {
    title: "Become a Partner | Network Risk Intelligence Ecosystem",
    description: "Partner with Verafye to help financial institutions investigate coordinated financial crime networks with graph-native Network Risk Intelligence.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Become a Partner | Network Risk Intelligence Ecosystem",
    description: "Partner with Verafye to help financial institutions investigate coordinated financial crime networks with graph-native Network Risk Intelligence.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/become-a-partner',
  },
};

export default function BecomeAPartnerPage() {
  return <BecomeAPartnerClient />;
}
