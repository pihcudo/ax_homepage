import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '조직도 | CUDO AX',
  description: 'CUDO AX 사업부의 조직 구조를 확인하세요.',
}

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow en">ORGANIZATION</div>
          <h1 className="page-hero__title">조직도</h1>
          <p className="page-hero__desc">
            26개의 특화 조직으로 구성된 CUDO AX 사업부의 구조를 확인하세요.
          </p>
        </div>
      </section>

      {/* TODO: DB 연동 후 실제 조직도로 교체 */}
      <section className="section">
        <div className="container">
          <div className="section-label">
            <span className="num">01 /</span>
            <span className="title">Organization Chart</span>
            <span className="line" />
          </div>
          <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.8 }}>
            조직도 콘텐츠 준비 중입니다. DB 연동 후 업데이트될 예정입니다.
          </p>
        </div>
      </section>
    </main>
  )
}
