import FAQClient from './FAQClient';

export const metadata = {
  title: "Network Risk Intelligence FAQs for Fraud & AML Teams",
  description: "Get answers about fraud investigations, AML compliance, graph intelligence, entity resolution and Network Risk Intelligence capabilities.",
  keywords: ["network risk intelligence faq", "fraud detection software faq", "aml compliance faq", "investigation intelligence faq", "entity resolution faq", "financial crime investigations"],
  openGraph: {
    title: "Network Risk Intelligence FAQs for Fraud & AML Teams | Verafye",
    description: "Get answers about fraud investigations, AML compliance, graph intelligence, entity resolution and Network Risk Intelligence capabilities.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Network Risk Intelligence FAQs for Fraud & AML Teams | Verafye",
    description: "Get answers about fraud investigations, AML compliance, graph intelligence, entity resolution and Network Risk Intelligence capabilities.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/faq',
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
