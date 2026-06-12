import ContactClient from './ContactClient';

export const metadata = {
  title: "Contact Fraud & AML Intelligence Experts",
  description: "Speak with specialists about fraud detection, AML compliance, investigation intelligence and Network Risk Intelligence solutions.",
  keywords: ["fraud investigation software", "aml compliance platform", "risk intelligence platform", "network risk intelligence", "financial crime investigations", "fraud detection solutions", "compliance technology"],
  openGraph: {
    title: "Contact Fraud & AML Intelligence Experts | Verafye",
    description: "Speak with specialists about fraud detection, AML compliance, investigation intelligence and Network Risk Intelligence solutions.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Fraud & AML Intelligence Experts | Verafye",
    description: "Speak with specialists about fraud detection, AML compliance, investigation intelligence and Network Risk Intelligence solutions.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
