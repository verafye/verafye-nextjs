import ContactClient from './ContactClient';

export const metadata = {
  title: "Contact Us | Verafye",
  description: "Get in touch with the Verafye team for general enquiries, press, technical support, or any other questions.",
  alternates: {
    canonical: 'https://www.verafye.com/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
