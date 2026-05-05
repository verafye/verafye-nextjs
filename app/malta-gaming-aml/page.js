import MaltaGamingContent from './MaltaGamingContent';

export const metadata = {
  title: 'AML Investigation Intelligence for Gaming & Malta Operators | Verafye',
  description: 'Support gaming operators in Malta with investigation intelligence for AML risk, including alert clustering, case workflows, and faster decision-making.',
  openGraph: {
    title: 'AML Investigation Intelligence for Gaming & Malta Operators | Verafye',
    description: 'Support gaming operators in Malta with investigation intelligence for AML risk, including alert clustering, case workflows, and faster decision-making.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AML Investigation Intelligence for Gaming & Malta Operators | Verafye',
    description: 'Support gaming operators in Malta with investigation intelligence for AML risk, including alert clustering, case workflows, and faster decision-making.',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaltaGamingPage() {
  return <MaltaGamingContent />;
}