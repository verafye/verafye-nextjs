import FAQClient from './FAQClient';

export const metadata = {
  title: "Fraud & AML Platform FAQs | Verafye",
  description: "Get answers about Verafye's fraud and AML platform. Learn how network intelligence helps detect financial crime and improve compliance.",
  openGraph: {
    title: "Fraud & AML Platform FAQs | Verafye",
    description: "Get answers about Verafye's fraud and AML platform. Learn how network intelligence helps detect financial crime and improve compliance.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fraud & AML Platform FAQs | Verafye",
    description: "Get answers about Verafye's fraud and AML platform. Learn how network intelligence helps detect financial crime and improve compliance.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/faq',
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
