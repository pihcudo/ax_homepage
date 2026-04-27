import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '사업부 소개 | CUDO AX',
  description: 'CUDO AX 사업부의 비전, 미션, 조직 소개를 확인하세요.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow en">ABOUT US</div>
          <h1 className="page-hero__title">사업부 소개</h1>
          <p className="page-hero__desc">
            CUDO AX 사업부의 비전과 미션, 그리고 함께하는 사람들을 소개합니다.
          </p>
        </div>
      </section>

      {/* TODO: DB 연동 후 실제 콘텐츠로 교체 */}
      <section className="section">
        <div className="container">
          <div className="section-label">
            <span className="num">01 /</span>
            <span className="title">Vision & Mission</span>
            <span className="line" />
          </div>
          <p style={{ color: 'var(--fg-muted)', fontSize: 16, lineHeight: 1.8 }}>
            콘텐츠 준비 중입니다. DB 연동 후 업데이트될 예정입니다.
          </p>
        </div>
      </section>
    </main>
  )
}
