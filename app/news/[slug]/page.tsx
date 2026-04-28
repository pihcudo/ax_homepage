import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { newsItems, type ContentBlock } from '@/lib/data/newsData'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = newsItems.find((n) => n.slug === slug)
  if (!item) return { title: '사업부소식 | CUDO AX' }
  return {
    title: `${item.title} | CUDO AX`,
    description: item.excerpt,
  }
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'paragraph':
      return <p key={i} className="news-body__paragraph">{block.text}</p>
    case 'heading':
      return <h3 key={i} className="news-body__heading">{block.text}</h3>
    case 'list':
      return (
        <ul key={i} className="news-body__list">
          {block.items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      )
    case 'quote':
      return (
        <blockquote key={i} className="news-body__quote">
          <p>{block.text}</p>
          {block.author && <cite>{block.author}</cite>}
        </blockquote>
      )
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const item = newsItems.find((n) => n.slug === slug)
  if (!item) notFound()

  return (
    <main>
      <section className="page-hero news-detail-hero">
        <div className="container">
          <div className="news-detail-hero__meta">
            <span className="news-detail-hero__tag en">{item.tag}</span>
            <span className="news-detail-hero__date en">{item.date}</span>
          </div>
          <h1 className="news-detail-hero__title">{item.title}</h1>
          <p className="news-detail-hero__excerpt">{item.excerpt}</p>
        </div>
      </section>

      <section className="section">
        <div className="container news-body">
          {item.body ? (
            item.body.map((block, i) => renderBlock(block, i))
          ) : (
            <p className="news-body__paragraph">콘텐츠 준비 중입니다.</p>
          )}

          <div className="news-body__footer">
            <Link href="/news" className="news-body__back">
              ← 목록으로
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
