import type { Metadata } from 'next'
import { businessCards } from '@/lib/data/businessData'

export const metadata: Metadata = {
  title: '주요 사업 | CUDO AX',
  description: 'AI, DATA, CX를 축으로 하는 CUDO AX 사업부의 핵심 사업을 소개합니다.',
}

export default function BusinessPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow en">AX BUSINESS</div>
          <h1 className="page-hero__title">주요 사업</h1>
          <p className="page-hero__desc">
            AI, DATA, CX를 축으로 기업의 디지털 전환을 실행합니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">
            <span className="num">01 /</span>
            <span className="title">Core Business</span>
            <span className="line" />
          </div>
        </div>

        <div className="container" style={{ padding: 0 }}>
          <div className="biz-grid">
            {businessCards.map((c) => (
              <div className="biz-card" key={c.idx}>
                <div className="biz-card__index en">{c.idx}</div>
                <div className="biz-card__name en">{c.name}</div>
                <p className="biz-card__tagline">{c.tagline}</p>
                <p className="biz-card__desc">{c.desc}</p>
                <ul className="biz-card__list">
                  {c.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
