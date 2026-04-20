import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us | Verafye',
  description: 'Get in touch with the Verafye team for general enquiries, press, technical support, or any other questions.',
  openGraph: {
    title: 'Contact Us | Verafye',
    description: 'Get in touch with the Verafye team for general enquiries, press, technical support, or any other questions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Verafye',
    description: 'Get in touch with the Verafye team for general enquiries, press, technical support, or any other questions.',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}