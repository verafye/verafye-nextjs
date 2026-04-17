import RBIEWSContent from './RBIEWSContent';

export const metadata = {
  title: 'RBI Early Warning Signals (EWS) Solution for NBFCs | Verafye',
  description:
    'Verafye helps NBFCs and digital lenders meet RBI EWS mandates with real-time borrower monitoring, configurable EWS signals, RFA classification, and audit-ready workflows. Request your EWS Readiness Assessment.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RBIEWSPage() {
  return <RBIEWSContent />;
}
