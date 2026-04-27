import Link from 'next/link'
import { newsItems } from '@/lib/data/newsData'

export default function News() {
  return (
    <section id="news" className="section" data-screen-label="06 News">
      <div className="container">
        <div className="news__head">
          <div>
            <div className="section-label" style={{ margin: 0 }}>
              <span className="num">06 /</span>
              <span className="title">Latest News</span>
            </div>
            <h2 className="news__title" style={{ marginTop: 16 }}>
              최근 소식
            </h2>
          </div>
          <p className="news__sub">CUDO AX 사업부의 최신 뉴스와 통찰을 확인하세요.</p>
        </div>

        <div className="news__grid">
          {newsItems.map((n, i) => (
            <Link href={`/news/${n.slug}`} key={i} style={{ textDecoration: 'none' }}>
              <article className="news-card">
                <div className="news-card__cover" data-placeholder={n.cover}>
                  <span className="news-card__tag en">{n.tag}</span>
                </div>
                <div className="news-card__body">
                  <div className="news-card__date en">{n.date}</div>
                  <h3 className="news-card__head">{n.title}</h3>
                  <p className="news-card__excerpt">{n.excerpt}</p>
                  <div className="news-card__arrow en">READ MORE →</div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
