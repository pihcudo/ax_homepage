import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '회사소개 | CUDO AX',
  description: '쿠도커뮤니케이션㈜ 는 2000년 창립 이후 정보통신 SI 및 AI보안 솔루션 전문 기업으로 성장했습니다.',
}

const HISTORY = [
  {
    year: '2000',
    above: ['쿠도커뮤니케이션 10월 25일 창립'],
    below: [],
  },
  {
    year: '2003',
    above: [],
    below: ['위성 DMB Uplink 사업개시'],
  },
  {
    year: '2006',
    above: ['수출의 탑', '500만 불 달성'],
    below: [],
  },
  {
    year: '2008',
    above: [],
    below: ['수출의 탑', '1000만 불 달성', 'webMethod 총판'],
  },
  {
    year: '2010',
    above: ['G20 정상회담', 'AI CCTV 보안구축'],
    below: [],
  },
  {
    year: '2012',
    above: [],
    below: ['인텔리빅스 인수', 'AI 지능형솔루션 사업 개시'],
  },
  {
    year: '2015',
    above: ['해외조달시장 진출기업 G-PASS 기업 지정'],
    below: [],
  },
  {
    year: '2016',
    above: [],
    below: ['평창동계올림픽 보안관제센터 구축', '카스퍼스키 총판 체결'],
  },
  {
    year: '2018',
    above: ['대통령상 표창'],
    below: [],
  },
  {
    year: '2024',
    above: [],
    below: ['과천 DX타워 신사옥 입주'],
  },
  {
    year: '2026',
    above: ['IBM 한국 총판'],
    below: [],
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* ── 페이지 히어로 ── */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow en">COMPANY INTRODUCTION</div>
          <h1 className="page-hero__title">회사소개</h1>
        </div>
      </section>

      {/* ── 회사 소개 ── */}
      <section className="section about-intro">
        <div className="container">
          <div className="about-intro__inner">
            <div className="about-intro__left">
              <p className="about-intro__kicker en">Happiness &amp; Future Creator</p>
              <h2 className="about-intro__title">
                꾸준한 사업 확장을 통해<br />
                <span className="accent">신뢰받는 혁신 선도기업</span>으로 성장
              </h2>
            </div>
            <div className="about-intro__right">
              <p className="about-intro__body">
                쿠도커뮤니케이션㈜ 는 2000년 창립 이후 현재까지<br />
                기술의 혁신을 통해 정보통신 SI 및 AI보안 솔루션 전문 기업으로 성장했습니다.
              </p>
              <p className="about-intro__body">
                풍부한 경험과 전문성, 글로벌 네트워크 및 우수성이 검증된 기술력을 바탕으로
                행복한 사람들이 만들어 가는 더 나은 미래를 위한 변화를 만들어 가고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 연혁 타임라인 ── */}
      <section className="section history">
        <div className="container">
          <div className="section-label">
            <span className="num">01 /</span>
            <span className="title">History</span>
            <span className="line" />
          </div>
          <h2 className="history__title">
            꾸준한 사업 확장을 통해{' '}
            <span className="accent">신뢰받는 혁신 선도기업으로 성장</span>
          </h2>

          <div className="timeline">
            {/* 가로 축 선 */}
            <div className="timeline__axis" />

            {HISTORY.map(({ year, above, below }) => (
              <div key={year} className="timeline__item">
                {/* 위쪽 텍스트 */}
                <div className="timeline__above">
                  {above.map((text, i) => (
                    <span key={i} className="timeline__event">{text}</span>
                  ))}
                </div>

                {/* 연도 버블 */}
                <div className="timeline__bubble">
                  <span>{year}</span>
                </div>

                {/* 아래쪽 텍스트 */}
                <div className="timeline__below">
                  {below.map((text, i) => (
                    <span key={i} className="timeline__event">{text}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
