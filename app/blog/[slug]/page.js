import Link from 'next/link';
import { blogPosts, getPost } from '../posts';

// Required for Next.js static export
export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const keywords = [...(post.primaryKeywords ?? []), ...(post.secondaryKeywords ?? [])];
  return {
    title: { absolute: `${post.title} | Verafye Blog` },
    description: post.metaDesc,
    ...(keywords.length > 0 && { keywords }),
    openGraph: {
      title: `${post.title} | Verafye Blog`,
      description: post.metaDesc,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Verafye Blog`,
      description: post.metaDesc,
    },
    alternates: {
      canonical: `https://www.verafye.com/blog/${slug}/`,
    },
  };
}

const CAT_COLORS = {
  'Fraud Detection':  { bg: 'var(--bg-blue)',   border: 'rgba(30,111,183,0.14)', text: 'var(--primary)' },
  'AML & Compliance': { bg: '#f5f3ff',           border: 'rgba(124,58,237,0.15)', text: '#6d28d9' },
  'Merchant Risk':    { bg: '#f0fdf4',           border: 'rgba(5,150,105,0.15)',  text: '#059669' },
};

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle' }}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

// Renders a section array (h2, h3, p, li) into React elements
function BlogBody({ sections }) {
  const elements = [];
  let listItems = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} style={{ margin: '0 0 1.25rem 0', paddingLeft: '1.5rem', color: 'var(--body)', lineHeight: 1.75, fontSize: '1rem' }}>
          {listItems.map((li, i) => (
            <li key={i} style={{ marginBottom: '0.375rem' }}>{li}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  for (let i = 0; i < sections.length; i++) {
    const { type, text } = sections[i];

    if (type === 'li') {
      listItems.push(text);
      continue;
    }

    flushList();

    if (type === 'h2') {
      elements.push(
        <h2 key={i} style={{ fontSize: 'clamp(1.125rem,2.5vw,1.375rem)', fontWeight: 700, color: 'var(--dark)', marginTop: '2.25rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
          {text}
        </h2>
      );
    } else if (type === 'h3') {
      elements.push(
        <h3 key={i} style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--dark)', marginTop: '1.75rem', marginBottom: '0.5rem', lineHeight: 1.35 }}>
          {text}
        </h3>
      );
    } else {
      elements.push(
        <p key={i} style={{ margin: '0 0 1.125rem 0', color: 'var(--body)', lineHeight: 1.8, fontSize: '1rem' }}>
          {text}
        </p>
      );
    }
  }

  flushList();
  return <>{elements}</>;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return <div style={{ padding: '4rem 0', textAlign: 'center' }}>Post not found.</div>;

  const catStyle = CAT_COLORS[post.category] || CAT_COLORS['Fraud Detection'];
  const lede = post.sections.find(s => s.type === 'p')?.text ?? '';

  // Related posts — same category, excluding current
  const related = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDesc,
    datePublished: post.date,
    url: `https://www.verafye.com/blog/${slug}/`,
    author: {
      '@type': 'Person',
      name: post.authorName,
      jobTitle: post.authorRole,
    },
    publisher: { '@id': 'https://www.verafye.com/#organization' },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.verafye.com/blog/${post.slug}/`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── BREADCRUMB ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '1.5rem 0 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav style={{ fontSize: '0.8125rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/blog/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Blog</Link>
            <span>/</span>
            <span style={{ color: 'var(--body)' }}>{post.h1}</span>
          </nav>
        </div>
      </section>

      {/* ── ARTICLE HEADER ─────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(180deg,#F8FBFF 0%,#fff 70%)', padding: '3.5rem 0 3rem' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span style={{
                fontSize: '0.6875rem', fontWeight: 700, color: catStyle.text,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                background: catStyle.bg, border: `1px solid ${catStyle.border}`,
                borderRadius: '4px', padding: '0.25rem 0.625rem',
              }}>
                {post.category}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>{post.readTime}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{post.dateLabel}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.625rem,4vw,2.75rem)', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-0.025em' }}>
              {post.h1}
            </h1>
            {lede && (
              <p style={{ fontSize: 'clamp(1rem,2vw,1.1875rem)', color: 'var(--body)', lineHeight: 1.8, fontWeight: 400, borderLeft: '3px solid var(--primary)', paddingLeft: '1.25rem', marginLeft: 0, marginBottom: 0 }}>
                {lede}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ───────────────────────────────────────────────────── */}
      <section style={{ padding: '3rem 0 3.5rem', background: '#fff' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <BlogBody sections={lede ? post.sections.slice(1) : post.sections} />
          </div>
        </div>
      </section>

      {/* ── AUTHOR BIO ─────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-light)', borderTop: '1px solid var(--border-light)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', background: '#fff', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '1.5rem 2rem' }}>
              <div style={{ flexShrink: 0, width: '3rem', height: '3rem', borderRadius: '50%', background: 'var(--bg-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--primary)' }}>
                  {post.authorName.charAt(0)}
                </span>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: 'var(--dark)', margin: '0 0 0.125rem', fontSize: '0.9375rem' }}>{post.authorName}</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.8125rem', margin: '0 0 0.625rem' }}>{post.authorRole}, Verafye</p>
                <p style={{ color: 'var(--body)', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
                  Verafye is a graph-native network risk intelligence platform built for lean fraud, AML, and risk teams at payment aggregators, PSPs, MSBs, and regulated fintech platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ─────────────────────────────────────────────────── */}
      {post.internalLinks && post.internalLinks.length > 0 && (
        <section style={{ background: '#fff', borderTop: '1px solid var(--border-light)', padding: '2rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
              <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.875rem' }}>Explore on Verafye</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
                {post.internalLinks.map((href, i) => {
                  // Derive a readable label from the path
                  const label = href
                    .replace(/^\/|\/$/g, '')
                    .split('/')
                    .pop()
                    .replace(/-/g, ' ')
                    .replace(/\b\w/g, c => c.toUpperCase());
                  return (
                    <Link
                      key={i}
                      href={href}
                      style={{ display: 'inline-block', fontSize: '0.8125rem', fontWeight: 500, color: 'var(--primary)', background: 'var(--bg-blue)', border: '1px solid rgba(30,111,183,0.14)', borderRadius: '6px', padding: '0.375rem 0.875rem', textDecoration: 'none' }}
                    >
                      {label} →
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── INLINE CTA ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border-light)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto', background: 'linear-gradient(135deg,#EEF4FF 0%,#F8FBFF 100%)', borderRadius: '14px', padding: '2rem 2.5rem', border: '1px solid rgba(30,111,183,0.12)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.25rem' }}>
            <div>
              <p style={{ fontWeight: 700, color: 'var(--dark)', fontSize: '1.0625rem', margin: '0 0 0.375rem' }}>See where your monitoring stack has blind spots</p>
              <p style={{ color: 'var(--body)', fontSize: '0.875rem', margin: 0 }}>The Risk Shadowing Review maps your current coverage against relationship-level gaps.</p>
            </div>
            <Link href="/risk-shadowing-review/" style={{ flexShrink: 0, background: 'var(--primary)', color: '#fff', fontWeight: 600, fontSize: '0.9375rem', padding: '0.7rem 1.75rem', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Request a Review {ARROW}
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ──────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section style={{ background: 'var(--bg-light)', borderTop: '1px solid var(--border-light)', padding: '3rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
              <h2 style={{ fontSize: '1.1875rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '1.5rem' }}>Related Articles</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,22rem),1fr))', gap: '1.25rem' }}>
                {related.map(rel => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}/`} style={{ display: 'block', background: '#fff', border: '1px solid var(--border-light)', borderRadius: '10px', padding: '1.25rem 1.5rem', textDecoration: 'none' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>{rel.readTime} · {rel.dateLabel}</span>
                    <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--dark)', lineHeight: 1.35, display: 'block' }}>{rel.h1}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BACK TO BLOG ───────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', borderTop: '1px solid var(--border-light)', padding: '1.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <Link href="/blog/" style={{ fontSize: '0.875rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
