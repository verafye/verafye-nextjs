import BecomeAPartnerClient from './BecomeAPartnerClient';

export const metadata = {
  title: "Partner in Financial Crime Intelligence Growth",
  description: "Help banks, fintechs and payment providers strengthen fraud and AML investigations through Verafye's Network Risk Intelligence ecosystem.",
  keywords: ["fraud technology partner program", "aml technology partners", "regtech partnerships", "financial crime technology ecosystem", "fraud prevention partners", "compliance technology partnerships", "network risk intelligence partners", "fintech partnerships"],
  openGraph: {
    title: "Partner in Financial Crime Intelligence Growth | Verafye",
    description: "Help banks, fintechs and payment providers strengthen fraud and AML investigations through Verafye's Network Risk Intelligence ecosystem.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Partner in Financial Crime Intelligence Growth | Verafye",
    description: "Help banks, fintechs and payment providers strengthen fraud and AML investigations through Verafye's Network Risk Intelligence ecosystem.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/become-a-partner',
  },
};

export default function BecomeAPartnerPage() {
  return <BecomeAPartnerClient />;
}
