import ContactClient from './ContactClient';

export const metadata = {
  title: "Contact Fraud Detection Experts | Verafye",
  description: "Talk with Verafye's specialists about fraud detection, AML compliance and Network Risk Intelligence for your organization.",
  keywords: ["fraud investigation software", "aml compliance platform", "risk intelligence platform", "network risk intelligence", "financial crime investigations", "fraud detection solutions", "compliance technology"],
  openGraph: {
    title: "Contact Fraud Detection Experts | Verafye",
    description: "Talk with Verafye's specialists about fraud detection, AML compliance and Network Risk Intelligence for your organization.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Fraud Detection Experts | Verafye",
    description: "Talk with Verafye's specialists about fraud detection, AML compliance and Network Risk Intelligence for your organization.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
