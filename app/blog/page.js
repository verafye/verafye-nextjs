import Link from 'next/link';
import { blogPosts, CATEGORIES } from './posts';

export const metadata = {
  title: 'Blog — Fraud, AML & Risk Intelligence Insights',
  description: 'Practical insights for fraud, AML, and risk teams at payment aggregators, PSPs, and regulated fintechs. Written by the Verafye founding team.',
  openGraph: {
    title: 'Blog — Fraud, AML & Risk Intelligence Insights | Verafye',
    description: 'Practical insights for fraud, AML, and risk teams at payment aggregators, PSPs, and regulated fintechs. Written by the Verafye founding team.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Fraud, AML & Risk Intelligence Insights | Verafye',
    description: 'Practical insights for fraud, AML, and risk teams at payment aggregators, PSPs, and regulated fintechs.',
  },
  alternates: {
    canonical: 'https://www.verafye.com/blog/',
  },
};

const CAT_COLORS = {
  'Fraud Detection':  { bg: 'var(--bg-blue)',   border: 'rgba(30,111,183,0.14)', text: 'var(--primary)' },
  'AML & Compliance': { bg: '#f5f3ff',           border: 'rgba(124,58,237,0.15)', text: '#6d28d9' },
  'Merchant Risk':    { bg: '#f0fdf4',           border: 'rgba(5,150,105,0.15)',  text: '#059669' },
};

function CategoryBadge({ cat, style = {} }) {
  const c = CAT_COLORS[cat] || CAT_COLORS['Fraud Detection'];
  return (
    <span style={{
      fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase',
      letterSpacing: '0.08em', background: c.bg, border: `1px solid ${c.border}`,
      color: c.text, borderRadius: '4px', padding: '0.25rem 0.625rem',
      whiteSpace: 'nowrap', ...style,
    }}>
      {cat}
    </span>
  );
}

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Verafye Blog',
          url: 'https://www.verafye.com/blog/',
          description: 'Practical insights for fraud, AML, and risk teams at payment aggregators, PSPs, and regulated fintechs.',
          publisher: { '@id': 'https://www.verafye.com/#organization' },
        }) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 100%)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: '64rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ fontSize: '0.8125rem', color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'var(--muted)', fontSize: '0.8125rem' }}>/</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--body)' }}>Blog</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1rem', lineHeight: 1.15, letterSpacing: '-0.025em' }}>
            Insights for Fraud, AML &amp; Risk Teams
          </h1>
          <p style={{ fontSize: 'clamp(1rem,2vw,1.125rem)', color: 'var(--body)', lineHeight: 1.75, maxWidth: '44rem', margin: '0 0 1.5rem' }}>
            Written by the Verafye founding team. Practical guidance for payment aggregators, PSPs, and regulated fintechs navigating fraud detection, AML compliance, and merchant risk.
          </p>
          {/* Category summary */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {CATEGORIES.filter(c => c !== 'All').map(cat => (
              <CategoryBadge key={cat} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── POST GRID ────────────────────────────────────────────────────── */}
      <section style={{ padding: '3rem 0 5rem', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '64rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,20rem),1fr))', gap: '1.75rem' }}>
            {blogPosts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-light)', borderTop: '1px solid var(--border-light)', padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '42rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.375rem,3vw,1.875rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.875rem' }}>
            See where your current signal coverage has gaps
          </h2>
          <p style={{ color: 'var(--body)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            A Verafye Risk Shadowing Review maps connected risk across your existing alerts and entity signals — delivering investigation-ready evidence from your own data, without requiring changes to your current controls.
          </p>
          <Link
            href="/risk-shadowing-review/"
            style={{ display: 'inline-block', background: 'var(--primary)', color: '#fff', fontWeight: 600, fontSize: '0.9375rem', padding: '0.8rem 2rem', borderRadius: '8px', textDecoration: 'none' }}
          >
            Request a Risk Shadowing Review
          </Link>
        </div>
      </section>
    </>
  );
}

function PostCard({ post }) {
  const excerpt = post.sections.find(s => s.type === 'p')?.text ?? post.metaDesc;
  return (
    <article style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid var(--border-light)', borderRadius: '12px', overflow: 'hidden', transition: 'box-shadow 0.15s', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
      <div style={{ padding: '1.5rem 1.5rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <CategoryBadge cat={post.category} />
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{post.readTime}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{post.dateLabel}</span>
        </div>
        <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.625rem', lineHeight: 1.35 }}>
          <Link href={`/blog/${post.slug}/`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {post.h1}
          </Link>
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--body)', lineHeight: 1.65, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {excerpt.length > 160 ? excerpt.slice(0, 157) + '…' : excerpt}
        </p>
      </div>
      <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border-light)', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
          {post.authorName}
        </span>
        <Link
          href={`/blog/${post.slug}/`}
          style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
        >
          Read
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </article>
  );
}
