import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { newsItems } from '@/lib/data/newsData'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = newsItems.find((n) => n.slug === slug)
  if (!item) return { title: '뉴스 | CUDO AX' }
  return {
    title: `${item.title} | CUDO AX`,
    description: item.excerpt,
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const item = newsItems.find((n) => n.slug === slug)
  if (!item) notFound()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow en">{item.tag}</div>
          <h1 className="page-hero__title" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            {item.title}
          </h1>
          <p className="page-hero__desc">{item.excerpt}</p>
          <div
            style={{
              marginTop: 24,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--fg-dim)',
              letterSpacing: '.08em',
            }}
          >
            {item.date}
          </div>
        </div>
      </section>

      {/* TODO: DB 연동 후 실제 본문 콘텐츠로 교체 */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.8 }}>
            상세 콘텐츠 준비 중입니다. DB 연동 후 업데이트될 예정입니다.
          </p>

          <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--line-soft)' }}>
            <Link
              href="/news"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--accent)',
                letterSpacing: '.1em',
              }}
            >
              ← 목록으로
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
