import { businessCards } from '@/lib/data/businessData'

export default function Business() {
  return (
    <section id="business" className="business section" data-screen-label="03 Business">
      <div className="container">
        <div className="business__head">
          <div className="business__eyebrow en">AX BUSINESS</div>
          <h2 className="business__title">
            사업부 주요 서비스
            <br />
            <em>DATA &amp; AX 플랫폼</em>부터 <em>하이브리드 클라우드</em>까지
          </h2>
          <p className="business__sub">
            AX 사업부는 기업 전반의 디지털 전환을 3가지 핵심 축으로 실행합니다.
          </p>
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
  )
}
