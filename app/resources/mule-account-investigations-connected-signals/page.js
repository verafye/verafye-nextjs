import Link from 'next/link';
import PdfDownloadButton from '../PdfDownloadButton';

export const metadata = {
  title: 'Mule Account Investigations: Why Connected Signals Matter | Verafye',
  description: 'Learn why mule account investigations require connected visibility across accounts, transactions, beneficiaries, devices, identities, behavior, and case history.',
  openGraph: {
    title: 'Mule Account Investigations: Why Connected Signals Matter | Verafye',
    description: 'Learn why mule account investigations require connected visibility across accounts, transactions, beneficiaries, devices, identities, behavior, and case history.',
    url: 'https://www.verafye.com/resources/mule-account-investigations-connected-signals/',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Verafye - Investigation Intelligence' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mule Account Investigations: Why Connected Signals Matter | Verafye',
    description: 'Learn why mule account investigations require connected visibility across accounts, transactions, beneficiaries, devices, identities, behavior, and case history.',
    images: ['/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.verafye.com/resources/mule-account-investigations-connected-signals/',
  },
};

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const relatedResources = [
  {
    title: 'The Missing Layer in Modern Financial Crime Investigations',
    category: 'Product Insights',
    readingTime: '5 min read',
    href: '/resources/what-is-investigation-intelligence/',
    ctaLabel: 'Read Article',
  },
  {
    title: 'Why Fraud and AML Investigations Break Down in Payment Platforms',
    category: 'Industry Insights',
    readingTime: '6 min read',
    href: '/resources/why-fraud-and-aml-investigations-break-down-in-payment-platforms/',
    ctaLabel: 'Read Insight',
  },
];

const BulletList = ({ items }) => (
  <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem 1.75rem', marginBottom: '1.25rem' }}>
    {items.map(item => (
      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.625rem' }}>
        <span style={{ flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem' }} />
        <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0 }}>{item}</p>
      </div>
    ))}
  </div>
);

const SignalCard = ({ num, title, intro, items }) => (
  <div style={{ background: 'var(--bg-slate)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.75rem', marginBottom: '1.25rem' }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
      <span style={{ flexShrink: 0, fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '0.375rem', padding: '0.25rem 0.5rem', letterSpacing: '0.04em' }}>
        {num}
      </span>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem' }}>{title}</p>
        <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.75, marginBottom: '0.75rem' }}>{intro}</p>
        {items.map(item => (
          <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', marginBottom: '0.375rem' }}>
            <span style={{ flexShrink: 0, width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.55rem' }} />
            <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, margin: 0 }}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function ArticlePage() {
  return (
    <>
      {/* BREADCRUMB */}
      <section style={{ background: '#fff', padding: '1.5rem 0 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav style={{ fontSize: '0.8125rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/resources/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Resources</Link>
            <span>/</span>
            <span style={{ color: 'var(--body)' }}>Mule Account Investigations: Why Connected Signals Matter</span>
          </nav>
        </div>
      </section>

      {/* ARTICLE HEADER */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 70%)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '4px', padding: '0.25rem 0.625rem' }}>
                Use Case Deep Dives
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>7 min read</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>May 2026</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.625rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.025em' }}>
              Mule Account Investigations: Why Connected Signals Matter
            </h1>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', lineHeight: 1.8, fontWeight: 400, borderLeft: '3px solid var(--primary)', paddingLeft: '1.25rem', marginLeft: 0 }}>
              Mule account activity is one of the most difficult risk patterns for financial crime teams to investigate  -  and the harder problem is connecting the signals that show how accounts, transactions, beneficiaries, identities, devices, and behaviors may be related.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section style={{ background: '#fff', padding: '3rem 0 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>

            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              A single account may look ordinary. A single transaction may not be enough to prove suspicious activity. A single beneficiary may not raise concern in isolation. But when these signals are connected, a clearer picture of mule-style behavior can emerge.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              That is why mule account investigations need connected investigation workflows  -  not just more alerts.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              Why Mule Account Activity Is Hard to Investigate
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Mule account activity often involves fast movement of funds, changing behavioral patterns, links across multiple entities, and patterns that cut across both fraud and AML responsibilities. Common investigation challenges include:
            </p>
            <BulletList items={[
              'Accounts that appear normal at onboarding but shift behavior later.',
              'Sudden spikes in transaction velocity.',
              'Rapid in and out fund movement.',
              'New or unusual beneficiaries and repeated transfer patterns.',
              'Shared devices or linked identities across accounts.',
              'Fraud and AML signals appearing at the same time.',
              'Limited case context because the information is spread across different systems.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              For investigators, the issue is rarely a missing alert. It is that the required context is fragmented, making it harder to see relationships and understand the full risk story.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              A Single Alert Does Not Tell the Full Story
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Mule account risk usually needs to be reviewed through multiple lenses. An isolated transaction alert may show only one part of the picture. But an investigator often needs to ask:
            </p>
            <BulletList items={[
              'Is the account newly created or recently reactivated?',
              "Has the account's behavior changed suddenly?",
              'Are funds moving in and out quickly?',
              'Are there new beneficiaries or repeated transfers to the same recipients?',
              'Is the same beneficiary linked to multiple accounts?',
              'Are multiple accounts using the same device or similar login patterns?',
              'Are identity details reused or show signs of manipulation?',
              'Are there related alerts in fraud or AML systems?',
              'Has this pattern appeared in prior investigations?',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Without connected visibility, analysts have to manually piece together these answers across tools. That slows investigations and increases the chance that relationship patterns are missed.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              What a Mule Pattern Can Look Like
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              A mule investigation rarely starts with a fully formed network. It often begins with one alert that appears manageable on its own.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              For example, an analyst might review a recently reactivated account that starts receiving inbound payments from several unrelated sources. On its own, that may not be enough to trigger immediate concern. But when the analyst sees that the funds are being moved out quickly to newly added beneficiaries, that the same device has been used across other accounts, and that a linked identity attribute appears in prior cases, the picture changes.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              What looked like a routine payment review starts to look more like coordinated mule activity. That is the value of connected context  -  not more data for its own sake, but a faster path to the pattern behind the alert.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              The Signals That Matter in Mule Account Investigations
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Mule account investigations usually require multiple categories of signals brought together in one review path.
            </p>

            <SignalCard
              num="01"
              title="Account Signals"
              intro="Account context helps investigators understand whether activity is consistent with the customer's expected profile. Key signals may include:"
              items={[
                'Account age and onboarding context.',
                'Profile changes and recent reactivation.',
                'Login behavior and device-associated sessions.',
                'Shifts in transaction behavior over time.',
                'Account status history and prior review notes.',
              ]}
            />
            <SignalCard
              num="02"
              title="Transaction Signals"
              intro="Transaction behavior often provides the most direct evidence of mule-style activity. Investigators may review:"
              items={[
                'Transaction velocity and repeated patterns.',
                'Rapid in-and-out fund movement.',
                'Round-value or near-round-value transactions.',
                'Unusual corridors or sudden spikes in volume.',
                'Timing differences between inbound and outbound flows.',
              ]}
            />
            <SignalCard
              num="03"
              title="Beneficiary and Counterparty Signals"
              intro="Beneficiary relationships are often central to mule account investigations. Relevant context may include:"
              items={[
                'Newly added or infrequently used beneficiaries.',
                'Repeated use of the same beneficiaries across accounts.',
                'Shared beneficiaries or linked counterparties.',
                'High-risk or suspicious behavior associated with those beneficiaries.',
                'Overlapping payment paths and repeated flows.',
              ]}
            />
            <SignalCard
              num="04"
              title="Device and Identity Signals"
              intro="Device and identity indicators can reveal hidden relationship networks that are not obvious at the account level. Investigators may review:"
              items={[
                'Shared devices across multiple accounts.',
                'Identity reuse or synthetic-identity-style patterns.',
                'Multiple accounts linked to similar attributes or documentation.',
                'Login anomalies or unusual behavior on sessions.',
                'Behavioral similarities and digital footprint overlap.',
              ]}
            />
            <SignalCard
              num="05"
              title="Case and Alert History"
              intro="Historical case context helps prevent analysts from treating each alert in isolation. This may include:"
              items={[
                'Prior alerts and their outcomes.',
                'Previous escalations and filing decisions.',
                'Analyst notes and reviewer decisions.',
                'Linked cases or related alert clusters.',
                'Evidence trails and rationales.',
              ]}
            />

            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              When these signals are connected, investigators are better placed to see mule account risk in context, not just one fragmented alert at a time.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              Why Graph Context Helps
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Mule account networks are fundamentally relationship-driven. A graph-based view can help investigators see how entities are connected across accounts, beneficiaries, devices, identities, transactions, and cases. This can reveal:
            </p>
            <BulletList items={[
              'Linked accounts that share devices, identities, or beneficiaries.',
              'Shared beneficiaries used across multiple suspicious accounts.',
              'Common devices tied to several accounts.',
              'Repeated payment flows or transaction paths.',
              'Related identities and overlapping digital footprints.',
              'Relationship clusters that resemble mule-style behavior.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              The purpose of graph context is not to expose proprietary detection logic or replace analyst judgment. It is to give investigators a clearer way to see relationships and make more structured, defensible decisions.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              Fraud and AML Teams Need a Shared View
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Mule account activity often cuts across both fraud and AML responsibilities. A fraud team may see account misuse, payment anomalies, and device-level evidence of coordinated activity. An AML team may see suspicious transaction flows, beneficiary networks that look like transaction laundering, and unusual movement of funds across accounts and jurisdictions.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              If these teams work from disconnected systems, they may review the same pattern twice  -  or worse, miss it entirely. A shared investigation layer that brings together fraud, AML, payment, identity, device, and case signals into a connected workflow can help:
            </p>
            <BulletList items={[
              'Align fraud and AML perspectives.',
              'Reduce duplicate effort.',
              'Improve escalation and documentation.',
            ]} />

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              Structured Workflows Improve Investigation Consistency
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Mule account investigations should not depend only on manual effort or individual analyst experience. A structured workflow can help teams follow a repeatable, more consistent process. That might include:
            </p>
            <BulletList items={[
              'Reviewing alert context and original trigger.',
              'Examining account behavior and transaction patterns.',
              'Checking beneficiary and counterparty relationships.',
              'Looking for device and identity links.',
              'Identifying related alerts or historical cases.',
              'Adding clear investigation notes.',
              'Escalating where required, with defined rules.',
              'Capturing reviewer actions and decisions.',
              'Documenting decision rationale.',
              'Maintaining evidence-ready, audit-friendly records.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              This helps improve consistency, especially for lean teams managing high alert volumes. It also helps teams reduce manual review effort, move through cases faster, and make decisions that are easier to explain later during internal review or regulatory examination.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              Evidence Packs for Mule Account Reviews
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Mule account investigations often need clear, structured documentation. An evidence pack can help capture the key elements that may be reviewed internally or by regulators. An evidence pack might include:
            </p>
            <BulletList items={[
              'Alert source and trigger context.',
              'Account and transaction details.',
              'Beneficiary relationships and counterparty views.',
              'Device and identity signals.',
              'Linked entity view and relationship clusters.',
              'Investigator observations and hypothesis.',
              'Reviewer actions and assignments.',
              'Escalation history and key milestones.',
              'Decision rationale and supporting signals.',
              'Time-stamped activity trail.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '2rem' }}>
              This helps support internal governance, case review, and regulatory examination readiness. It is a structured way to maintain clearer, more traceable investigation records.
            </p>

            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', marginTop: '2.5rem', letterSpacing: '-0.015em' }}>
              How Verafye Supports Mule Account Investigations
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Verafye connects account, transaction, beneficiary, device, identity, behavior, fraud, AML, and case signals into investigation-ready workflows built on the Verafye platform. It helps risk teams:
            </p>
            <BulletList items={[
              'Review connected context instead of scattered alerts.',
              'Identify relationship patterns and mule-style clusters.',
              'Structure case workflows and standardize how cases are reviewed.',
              'Capture reviewer actions and decision history.',
              'Maintain evidence-ready investigation records that are easier to reconstruct and explain.',
            ]} />
            <p style={{ fontSize: '1rem', color: 'var(--body)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              For regulated payment platforms, MSBs, fintech platforms, and digital banks, Verafye supports a more connected, consistent, and defensible approach to mule account investigations.
            </p>

            <div style={{ background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '0.75rem', padding: '1.75rem 2rem', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Final Takeaway</p>
              <p style={{ fontSize: '1rem', color: 'var(--dark)', lineHeight: 1.75, fontWeight: 500, marginBottom: '0.75rem' }}>
                Mule account investigations require more than isolated alerts. They require connected visibility across accounts, transactions, beneficiaries, devices, identities, behavioral patterns, and case and alert history.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--dark)', lineHeight: 1.75, fontWeight: 500, margin: 0 }}>
                When these signals are brought together into structured workflows, risk teams can review cases with more clarity, explain decisions more effectively, reduce missed relationship patterns, and move from alerts to decisions faster.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SOFT CTA */}
      <section style={{ background: 'var(--bg-blue)', borderTop: '1px solid rgba(30,111,183,0.1)', borderBottom: '1px solid rgba(30,111,183,0.1)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h3 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.5rem', letterSpacing: '-0.015em' }}>
                See how Verafye supports mule account investigations
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--body)', lineHeight: 1.7, margin: 0, maxWidth: '36rem' }}>
                Verafye connects existing risk signals into investigation-ready workflows built on the Verafye platform.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', flexShrink: 0 }}>
              <Link href="/request-demo" className="btn-primary">Request Demo</Link>
              <Link href="/platform/" className="btn-secondary">Explore Platform</Link>
              <PdfDownloadButton
                pdfPath="/downloads/resources/mule-account-investigations-connected-signals.pdf"
                pdfFilename="verafye-mule-account-investigations-connected-signals.pdf"
                resourceTitle="Mule Account Investigations: Why Connected Signals Matter"
                resourceCategory="Use Case Deep Dives"
                articleSlug="mule-account-investigations-connected-signals"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section style={{ background: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Related Resources</p>
            <h2 style={{ fontSize: 'clamp(1.125rem,2.5vw,1.5rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '2rem', letterSpacing: '-0.015em' }}>
              Continue reading
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(18rem,1fr))', gap: '1.5rem' }}>
              {relatedResources.map(r => (
                <Link key={r.title} href={r.href} style={{ textDecoration: 'none', display: 'block' }} className="card-hover">
                  <div className="card card-elevated" style={{ padding: '1.75rem' }}>
                    <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>{r.category}</p>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.75rem', lineHeight: 1.35 }}>{r.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>{r.readingTime}</span>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>{r.ctaLabel} {ARROW}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Link href="/resources/" style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}>
                Back to all resources {ARROW}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
