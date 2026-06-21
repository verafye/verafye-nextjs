'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RequestRedirectClient() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/request-demo?intent=risk-shadowing-review');
  }, [router]);
  return (
    <section style={{ padding: '6rem 0', textAlign: 'center', minHeight: '50vh' }}>
      <div className="container">
        <p style={{ fontSize: '1rem', color: 'var(--body)' }}>
          Taking you to the Risk Shadowing Review request form.{' '}
          <Link href="/request-demo?intent=risk-shadowing-review" style={{ color: 'var(--primary)', fontWeight: 600 }}>
            Continue
          </Link>.
        </p>
      </div>
    </section>
  );
}
