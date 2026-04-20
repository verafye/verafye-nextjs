import MaltaGamingContent from './MaltaGamingContent';

export const metadata = {
  title: 'AML & Fraud Intelligence for Malta Gaming Operators | Verafye',
  description:
    'Verafye connects fraud, AML, and payments intelligence for MGA-licensed gaming operators - linked account detection, unified investigation workflows, and audit-ready case management aligned with MGA and FIAU expectations.',
  openGraph: {
    title: 'AML & Fraud Intelligence for Malta Gaming Operators | Verafye',
    description:
      'Verafye connects fraud, AML, and payments intelligence for MGA-licensed gaming operators - linked account detection, unified investigation workflows, and audit-ready case management aligned with MGA and FIAU expectations.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AML & Fraud Intelligence for Malta Gaming Operators | Verafye',
    description:
      'Verafye connects fraud, AML, and payments intelligence for MGA-licensed gaming operators - linked account detection, unified investigation workflows, and audit-ready case management aligned with MGA and FIAU expectations.',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaltaGamingPage() {
  return <MaltaGamingContent />;
}