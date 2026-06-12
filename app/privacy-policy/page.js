
export const metadata = {
  title: "Privacy & Data Protection for Fraud & AML Operations",
  description: "Learn how Verafye protects customer data, supports privacy compliance and secures sensitive fraud, AML and investigation intelligence workflows.",
  keywords: ["privacy policy", "data protection", "privacy compliance", "data security", "information governance"],
  openGraph: {
    title: "Privacy & Data Protection for Fraud & AML Operations | Verafye",
    description: "Learn how Verafye protects customer data, supports privacy compliance and secures sensitive fraud, AML and investigation intelligence workflows.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Privacy & Data Protection for Fraud & AML Operations | Verafye",
    description: "Learn how Verafye protects customer data, supports privacy compliance and secures sensitive fraud, AML and investigation intelligence workflows.",
  },
  alternates: {
    canonical: 'https://www.verafye.com/privacy-policy',
  },
};

const h2 = { fontSize: '1.375rem', fontWeight: '700', color: 'var(--dark)', margin: '1.5rem 0 0.5rem', lineHeight: 1.3 };
const h3 = { fontSize: '1.0625rem', fontWeight: '700', color: 'var(--dark)', margin: '1rem 0 0.375rem', lineHeight: 1.4 };
const p  = { margin: '0 0 0.875rem 0' };
const ul = { paddingLeft: '1.5rem', margin: '0 0 0.875rem 0', display: 'flex', flexDirection: 'column', gap: '0.375rem' };

export default function Page() {
  return (
    <>
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)', padding: '3.5rem 0 1.5rem' }}>
        <div className="container" style={{ maxWidth: '68rem' }}>
          <h1 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: '700', color: 'var(--dark)', marginBottom: '0.75rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Last updated: May 2026</p>
          <p style={{ color: 'var(--body)', fontSize: '0.9375rem', lineHeight: 1.7, maxWidth: '52rem' }}>
            This Privacy Policy explains how Verafye collects, uses, discloses, and protects personal information when you visit our website, submit an enquiry, or interact with our communications. Please read it carefully.
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 0 3rem', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto', fontSize: '1rem', color: 'var(--body)', lineHeight: '1.75' }}>

            {/* ── 1. Who We Are ─────────────────────────────────────────────── */}
            <h2 style={h2}>1. Who We Are</h2>
            <p style={p}>Verafye (&quot;Verafye&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) provides a financial crime intelligence platform for fraud, AML, and payment investigation workflows. References to &quot;our website&quot; mean verafye.com and associated subdomains. We are the data controller for personal data collected through our website and marketing activities.</p>
            <p style={p}>For privacy-related enquiries, please contact us at <a href="mailto:privacy@verafye.com" style={{ color: 'var(--primary)' }}>privacy@verafye.com</a>.</p>

            {/* ── 2. Information We Collect ──────────────────────────────────── */}
            <h2 style={h2}>2. Information We Collect</h2>

            <h3 style={h3}>2.1 Information you provide directly</h3>
            <p style={p}>When you submit a form on our website - including the Request Demo form, the Become a Partner form, or any contact enquiry - we collect:</p>
            <ul style={ul}>
              <li>First and last name</li>
              <li>Work email address</li>
              <li>Company name and job title or role</li>
              <li>Company or organisation type</li>
              <li>Any message or additional information you choose to include</li>
            </ul>
            <p style={p}>We use this information to respond to your enquiry, schedule a demonstration, or facilitate a partnership discussion. We do not require you to provide personal information to browse our website.</p>

            <h3 style={h3}>2.2 Information collected automatically</h3>
            <p style={p}>When you visit our website, certain technical information is collected automatically, including:</p>
            <ul style={ul}>
              <li>IP address and approximate geographic location derived from it</li>
              <li>Browser type, version, and operating system</li>
              <li>Pages visited, time on page, and navigation path</li>
              <li>Referral source (the page or link that directed you to our website)</li>
              <li>Device type and screen resolution</li>
            </ul>
            <p style={p}>This data is collected through cookies, pixels, and similar tracking technologies as described in Section 4 below.</p>

            <h3 style={h3}>2.3 Communications data</h3>
            <p style={p}>If you communicate with us by email, we retain a record of that correspondence including your email address and the content of your messages.</p>

            {/* ── 3. How We Use Your Information ────────────────────────────── */}
            <h2 style={h2}>3. How We Use Your Information</h2>
            <p style={p}>We use the information we collect for the following purposes:</p>
            <ul style={ul}>
              <li><strong>To respond to your enquiry</strong> - processing demo requests, partner applications, and general contact submissions</li>
              <li><strong>To communicate with you</strong> - sending follow-up communications relevant to your enquiry and, where you have indicated interest, information about Verafye products, updates, or events</li>
              <li><strong>To improve our website</strong> - understanding how visitors interact with our content so we can improve navigation, performance, and relevance</li>
              <li><strong>To measure marketing effectiveness</strong> - attributing website visits and form submissions to marketing channels through analytics and campaign tracking tools</li>
              <li><strong>To comply with legal obligations</strong> - retaining records required by applicable law and responding to lawful requests from regulators or law enforcement</li>
              <li><strong>To protect our legitimate business interests</strong> - preventing fraud, detecting security incidents, and defending legal claims</li>
            </ul>
            <p style={p}>We will not use your personal information for purposes that are incompatible with those described above without notifying you first.</p>

            {/* ── 4. Cookies and Tag Manager ────────────────────────────────── */}
            <h2 style={h2}>4. Cookies, Tracking Technologies, and Google Tag Manager</h2>

            <h3 style={h3}>4.1 Cookies</h3>
            <p style={p}>Our website uses cookies - small text files placed on your device - to support basic site functionality, remember your preferences, and collect analytics data. Cookies we use fall into the following categories:</p>
            <ul style={ul}>
              <li><strong>Strictly necessary:</strong> Required for the website to function. These cannot be disabled.</li>
              <li><strong>Analytics:</strong> Used to understand how visitors interact with our website (pages visited, session duration, navigation patterns). Data collected through analytics cookies is aggregated and does not identify individual visitors.</li>
              <li><strong>Marketing:</strong> Used to track visits to our website from external campaigns and to measure conversion. These may be set by third-party services connected through our tag management system.</li>
            </ul>
            <p style={p}>You can control or disable cookies through your browser settings. Disabling certain cookies may affect website functionality. Most browsers allow you to refuse new cookies, delete existing cookies, or be notified when new cookies are set.</p>

            <h3 style={h3}>4.2 Google Tag Manager</h3>
            <p style={p}>Our website uses Google Tag Manager (GTM container: GTM-T2N2Z2S2), a tag management service operated by Google LLC. Google Tag Manager itself does not collect personal data directly; it is used to deploy and manage tracking tags (including analytics and marketing scripts) through a single container.</p>
            <p style={p}>Tags deployed through Google Tag Manager may collect data such as page URL, referral source, and interaction events, and may set cookies on your device. The data practices of individual tags are governed by the privacy policies of the respective service providers (such as Google Analytics, LinkedIn Insight Tag, or similar).</p>
            <p style={p}>For more information about how Google processes data collected through its services, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Google&apos;s Privacy Policy</a>.</p>
            <p style={p}>We do not currently deploy Google Analytics 4 (GA4) independently of GTM. Any analytics data collected is used solely for website performance and marketing attribution purposes.</p>

            {/* ── 5. Information Sharing ────────────────────────────────────── */}
            <h2 style={h2}>5. Information Sharing and Disclosure</h2>
            <p style={p}>We do not sell your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul style={ul}>
              <li><strong>Service providers:</strong> We work with third-party vendors who help us operate our website, send communications, and manage customer relationships (such as CRM platforms and email service providers). These providers act as data processors and are only permitted to process your data in accordance with our instructions.</li>
              <li><strong>Legal obligations:</strong> We may disclose personal information if required by law, court order, or regulatory authority, or where we believe disclosure is necessary to protect our rights, the safety of individuals, or the integrity of our services.</li>
              <li><strong>Business transfers:</strong> If Verafye undergoes a merger, acquisition, or sale of assets, personal information may be transferred as part of that transaction. We will notify affected individuals of any such change in ownership or use of their data.</li>
              <li><strong>With your consent:</strong> We may share your information for other purposes with your explicit consent.</li>
            </ul>

            {/* ── 6. Data Security ─────────────────────────────────────────── */}
            <h2 style={h2}>6. Data Security</h2>
            <p style={p}>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, misuse, disclosure, alteration, or destruction. These measures include access controls, encryption in transit, and security monitoring practices aligned to our security framework.</p>
            <p style={p}>No method of transmission over the internet or electronic storage is completely secure. While we take security seriously and follow industry-standard practices, we cannot guarantee absolute security. If you believe your information has been compromised, please contact us at <a href="mailto:privacy@verafye.com" style={{ color: 'var(--primary)' }}>privacy@verafye.com</a>.</p>

            {/* ── 7. Data Retention ─────────────────────────────────────────── */}
            <h2 style={h2}>7. Data Retention</h2>
            <p style={p}>We retain personal information for as long as necessary to fulfil the purposes described in this Privacy Policy, or as required by applicable law. Specifically:</p>
            <ul style={ul}>
              <li>Demo and partner enquiry submissions are retained for as long as the commercial relationship or opportunity is active, and for a reasonable period thereafter to allow for re-engagement or legal reference.</li>
              <li>Website analytics data is retained in accordance with the retention settings of the applicable analytics platform (typically 14–26 months).</li>
              <li>Email correspondence is retained for as long as relevant to the matter discussed or required by applicable law.</li>
              <li>Marketing communications records are retained until you unsubscribe or withdraw consent.</li>
            </ul>
            <p style={p}>When personal information is no longer required, we delete it securely or anonymise it so it can no longer be linked to an individual.</p>

            {/* ── 8. Your Rights ────────────────────────────────────────────── */}
            <h2 style={h2}>8. Your Rights</h2>
            <p style={p}>Depending on your location and applicable data protection law, you may have the following rights in relation to your personal information:</p>
            <ul style={ul}>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request that inaccurate or incomplete information be corrected.</li>
              <li><strong>Erasure:</strong> Request deletion of your personal information where there is no longer a legitimate basis for us to hold it.</li>
              <li><strong>Restriction:</strong> Request that we restrict processing of your personal information in certain circumstances.</li>
              <li><strong>Portability:</strong> Request a copy of your personal information in a structured, machine-readable format where technically feasible.</li>
              <li><strong>Objection:</strong> Object to processing of your personal information for direct marketing purposes, or where processing is based on our legitimate interests.</li>
              <li><strong>Withdraw consent:</strong> Where processing is based on your consent, withdraw that consent at any time without affecting the lawfulness of processing prior to withdrawal.</li>
            </ul>
            <p style={p}>To exercise any of these rights, please contact us at <a href="mailto:privacy@verafye.com" style={{ color: 'var(--primary)' }}>privacy@verafye.com</a>. We will respond within the timeframe required by applicable law (typically 30 days). We may need to verify your identity before processing your request.</p>
            <p style={p}>If you are not satisfied with our response, you have the right to lodge a complaint with the relevant data protection supervisory authority in your jurisdiction.</p>

            {/* ── 9. India - DPDP ───────────────────────────────────────────── */}
            <h2 style={h2}>9. India - Digital Personal Data Protection Act (DPDP)</h2>
            <p style={p}>India&apos;s Digital Personal Data Protection Act, 2023 (the DPDP Act) establishes a framework for the protection of digital personal data of individuals in India. The DPDP Act&apos;s implementing rules and regulatory guidance are currently being finalised by the Indian Government.</p>
            <p style={p}>Verafye&apos;s website and marketing practices are designed to be DPDP-aware, reflecting the following principles drawn from the Act:</p>
            <ul style={ul}>
              <li><strong>Lawful purpose:</strong> We collect personal data only for the specific, lawful purposes described in this Policy.</li>
              <li><strong>Data minimisation:</strong> We collect only the personal data necessary for the stated purpose.</li>
              <li><strong>Reasonable security:</strong> We implement appropriate security safeguards to protect personal data from breach.</li>
              <li><strong>Data principal rights:</strong> Individuals whose data we process have the right to access information, correct inaccuracies, and raise grievances in connection with their data.</li>
            </ul>
            <p style={p}>Verafye does not claim formal DPDP certification or full DPDP compliance. We will update our practices as the Act&apos;s implementing rules are finalised and come into force. For any data-related grievances or requests from individuals in India, please contact us at <a href="mailto:privacy@verafye.com" style={{ color: 'var(--primary)' }}>privacy@verafye.com</a>.</p>

            {/* ── 10. GDPR Alignment ────────────────────────────────────────── */}
            <h2 style={h2}>10. GDPR and EU/UK Data Protection</h2>
            <p style={p}>Verafye&apos;s data handling practices are designed in alignment with the principles of the EU General Data Protection Regulation (GDPR) and the UK GDPR. This means our processing of personal data is designed to be lawful, fair, and transparent; collected for specified, explicit, and legitimate purposes; limited to what is necessary; accurate; retained no longer than necessary; and handled with appropriate security.</p>
            <p style={p}>Verafye is GDPR-aligned, not GDPR-certified. GDPR is a legislative framework, not a certification scheme. Our alignment with GDPR principles reflects our commitment to privacy-respecting data practices for all individuals whose data we process, regardless of their location.</p>
            <p style={p}>For EEA and UK residents, the legal bases on which we process personal data include: your consent (where obtained), the performance of a contract or steps taken at your request prior to entering a contract, compliance with legal obligations, and our legitimate interests (such as responding to enquiries and operating our business), where those interests are not overridden by your rights.</p>

            {/* ── 11. Children ──────────────────────────────────────────────── */}
            <h2 style={h2}>11. Children&apos;s Privacy</h2>
            <p style={p}>Our website and services are directed at business professionals and are not intended for individuals under the age of 18. We do not knowingly collect personal information from individuals under 18. If we become aware that we have inadvertently collected personal information from a person under 18, we will delete that information promptly.</p>
            <p style={p}>If you believe we may have collected information from a person under 18, please contact us at <a href="mailto:privacy@verafye.com" style={{ color: 'var(--primary)' }}>privacy@verafye.com</a>.</p>

            {/* ── 12. Careers ───────────────────────────────────────────────── */}
            <h2 style={h2}>12. Careers and Job Applications</h2>
            <p style={p}>If you submit a job application or your CV/resume to Verafye - whether through our website, by email, or through a third-party recruitment platform - we will collect and process your personal information (including your name, contact details, employment history, qualifications, and any other information you choose to provide) for the purpose of evaluating your application.</p>
            <p style={p}>We retain candidate information for up to 12 months following the conclusion of a recruitment process, in case a relevant opportunity arises. You may request deletion of your application data at any time by contacting <a href="mailto:privacy@verafye.com" style={{ color: 'var(--primary)' }}>privacy@verafye.com</a>.</p>
            <p style={p}>We do not use automated decision-making in our recruitment process. All hiring decisions involve human review.</p>

            {/* ── 13. Third-Party Links ─────────────────────────────────────── */}
            <h2 style={h2}>13. Links to Third-Party Websites</h2>
            <p style={p}>Our website may contain links to external websites operated by third parties. This Privacy Policy applies only to verafye.com. We are not responsible for the privacy practices of third-party websites, and we encourage you to review their privacy policies before providing any personal information.</p>

            {/* ── 14. Changes ───────────────────────────────────────────────── */}
            <h2 style={h2}>14. Changes to This Privacy Policy</h2>
            <p style={p}>We may update this Privacy Policy from time to time to reflect changes in our practices, the services we offer, or applicable law. The &quot;Last updated&quot; date at the top of this page indicates when the Policy was most recently revised. We encourage you to review this Policy periodically.</p>
            <p style={p}>For material changes, we will take reasonable steps to notify affected individuals, such as by posting a notice on our website or sending an email to individuals who have submitted a form on our website.</p>

            {/* ── 15. Contact ───────────────────────────────────────────────── */}
            <h2 style={h2}>15. Contact Us</h2>
            <p style={p}>If you have any questions, concerns, or requests relating to this Privacy Policy or our data practices, please contact us:</p>
            <div style={{ background: 'var(--bg-light)', borderRadius: '10px', border: '1px solid var(--border)', padding: '1.5rem 2rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
              <p style={{ margin: '0 0 0.375rem', fontWeight: 700, color: 'var(--dark)' }}>Verafye</p>
              <p style={{ margin: '0 0 0.25rem' }}>Email: <a href="mailto:privacy@verafye.com" style={{ color: 'var(--primary)' }}>privacy@verafye.com</a></p>
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--muted)' }}>We aim to respond to all privacy-related requests within 30 days.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
