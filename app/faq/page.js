import FAQClient from './FAQClient';

export const metadata = {
  title: "Network Risk Intelligence FAQs",
  description: "Get answers about Verafye's graph-native Network Risk Intelligence platform. Learn how network intelligence helps investigate financial crime and support compliance.",
  openGraph: {
    title: "Network Risk Intelligence FAQs | Verafye",
    description: "Get answers about Verafye's graph-native Network Risk Intelligence platform. Learn how network intelligence helps investigate financial crime and support compliance.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Network Risk Intelligence FAQs | Verafye",
    description: "Get answers about Verafye's graph-native Network Risk Intelligence platform. Learn how network intelligence helps investigate financial crime and support compliance.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/faq',
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
