import type { Metadata } from 'next'
import Link from 'next/link'
import { newsItems } from '@/lib/data/newsData'

export const metadata: Metadata = {
  title: '새소식 | CUDO AX',
  description: 'CUDO AX 사업부의 최신 뉴스, 인사이트, 케이스 스터디를 확인하세요.',
}

export default function NewsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow en">LATEST NEWS</div>
          <h1 className="page-hero__title">새소식</h1>
          <p className="page-hero__desc">
            CUDO AX 사업부의 최신 뉴스와 통찰을 확인하세요.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news__grid">
            {newsItems.map((n, i) => (
              <Link href={`/news/${n.slug}`} key={i} style={{ textDecoration: 'none' }}>
                <article className="news-card">
                  <div className="news-card__cover" data-placeholder={n.cover}>
                    <span className="news-card__tag en">{n.tag}</span>
                  </div>
                  <div className="news-card__body">
                    <div className="news-card__date en">{n.date}</div>
                    <h2 className="news-card__head">{n.title}</h2>
                    <p className="news-card__excerpt">{n.excerpt}</p>
                    <div className="news-card__arrow en">READ MORE →</div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
