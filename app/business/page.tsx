import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '주요사업 | CUDO AX',
  description: 'End to End 서비스 모델로 컨설팅부터 운영까지 기업의 디지털 전환을 함께합니다.',
}

const STEPS = [
  {
    num: '01',
    title: '컨설팅',
    en: 'CONSULTING',
    items: ['현황 분석 (As-Is 진단)', '목표 아키텍처 설계', '기술 스택 전략 수립', 'ROI · 로드맵 제시'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7"/>
        <path d="M11 8v6M8 11h6"/>
        <line x1="16.5" y1="16.5" x2="21" y2="21"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'PoC',
    en: 'PROOF OF CONCEPT',
    items: ['핵심 기능 기술 검증', '성능 테스트', '리스크 사전 제거', '고객 피드백 개선'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v4l3.5 8a2 2 0 0 1-1.8 3H7.3a2 2 0 0 1-1.8-3L9 7z"/>
        <line x1="6.5" y1="14" x2="17.5" y2="14"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: '시스템 구축',
    en: 'IMPLEMENTATION',
    items: ['아키텍처 설계 및 구축', '데이터 파이프라인 · ETL', 'UI/UX 개발', 'DevOps · 자동화'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="8" height="8" rx="1"/>
        <rect x="13" y="3" width="8" height="8" rx="1"/>
        <rect x="3" y="13" width="8" height="8" rx="1"/>
        <rect x="13" y="13" width="8" height="8" rx="1"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: '운영 & 지원',
    en: 'OPERATION',
    items: ['24/7 모니터링 · 장애 대응', '기술 지원 · 유지보수', '성능 튜닝 · 고도화', '요청 기반 추가 개발'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/>
      </svg>
    ),
  },
]

const DISTRIBUTORS = [
  {
    brand: 'IBM',
    tag: '총판',
    color: '#1F70C1',
    items: ['IBM 제품군 라이센스 판매', '하드웨어 제품군 판매', '기술지원 및 POC'],
  },
]

const PARTNERS = [
  {
    brand: 'MongoDB',
    items: ['라이센스 판매', '기술컨설팅', 'POC', 'Data Pipeline 구축'],
  },
  {
    brand: 'Adobe',
    items: ['AEM', 'AEP', 'AJO', 'Adobe Campaign', 'Adobe Analytics'],
  },
  {
    brand: 'ARIS',
    items: ['디지털 자산화 서비스'],
  },
]

const ArrowIcon = () => (
  <svg className="biz-page-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="13 6 19 12 13 18"/>
  </svg>
)

export default function BusinessPage() {
  return (
    <main>
      {/* ── 페이지 히어로 ── */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow en">AX BUSINESS</div>
          <h1 className="page-hero__title">주요사업</h1>
          <p className="page-hero__desc">
            컨설팅부터 운영까지, 단일 조직이 전 단계를 책임지는 End to End 서비스입니다.
          </p>
        </div>
      </section>

      {/* ── End to End 서비스 모델 ── */}
      <section className="section biz-page-e2e">
        <div className="container">
          <div className="section-label">
            <span className="num">01 /</span>
            <span className="title">End to End Service Model</span>
            <span className="line" />
          </div>

          <div className="biz-page-e2e__head">
            <div className="biz-page-e2e__badge en">END-TO-END</div>
            <h2 className="biz-page-e2e__title">
              고객 생애주기 전체를<br />
              <span className="accent">책임지는 서비스</span>
            </h2>
            <p className="biz-page-e2e__sub">
              컨설팅부터 운영까지 — 단일 조직이 모든 단계를 함께합니다.
            </p>
          </div>

          {/* 스텝 플로우 */}
          <div className="biz-page-steps">
            {STEPS.map((step, idx) => (
              <>
                <div key={step.num} className="biz-page-step">
                  <div className="biz-page-step__num en">{step.num}</div>
                  <div className="biz-page-step__icon">{step.icon}</div>
                  <div className="biz-page-step__title">{step.title}</div>
                  <div className="biz-page-step__en en">{step.en}</div>
                  <ul className="biz-page-step__list">
                    {step.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                {idx < STEPS.length - 1 && (
                  <div key={`arrow-${idx}`} className="biz-page-step-arrow">
                    <ArrowIcon />
                  </div>
                )}
              </>
            ))}
          </div>

          {/* 핵심 가치 배너 */}
          <div className="biz-page-values">
            <div className="biz-page-value">
              <span className="biz-page-value__label en">ONE TEAM</span>
              <p className="biz-page-value__desc">네 단계 모두 단일 조직이 책임집니다</p>
            </div>
            <div className="biz-page-value">
              <span className="biz-page-value__label en">FAST FEEDBACK</span>
              <p className="biz-page-value__desc">PoC 단계에서 리스크를 최소화합니다</p>
            </div>
            <div className="biz-page-value">
              <span className="biz-page-value__label en">LIFETIME PARTNER</span>
              <p className="biz-page-value__desc">구축 이후의 동반자가 됩니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 총판 ── */}
      <section className="section biz-page-dist">
        <div className="container">
          <div className="section-label">
            <span className="num">02 /</span>
            <span className="title">총판</span>
            <span className="line" />
          </div>

          <div className="dist-cards">
            {DISTRIBUTORS.map((d) => (
              <div key={d.brand} className="dist-card">
                <div className="dist-card__left">
                  <div className="dist-card__tag">{d.tag}</div>
                  <div className="dist-card__brand en" style={{ color: d.color }}>{d.brand}</div>
                  <p className="dist-card__intro">
                    IBM과의 공식 총판 계약을 통해 제품군 전체를 공급하고<br />
                    기술지원부터 POC까지 원스톱으로 제공합니다.
                  </p>
                </div>
                <ul className="dist-card__list">
                  {d.items.map((item) => (
                    <li key={item} className="dist-card__item">
                      <span className="dist-card__dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 파트너 ── */}
      <section className="section biz-page-partners">
        <div className="container">
          <div className="section-label">
            <span className="num">03 /</span>
            <span className="title">파트너</span>
            <span className="line" />
          </div>

          <div className="partner-grid">
            {PARTNERS.map((p) => (
              <div key={p.brand} className="partner-card">
                <div className="partner-card__brand en">{p.brand}</div>
                <ul className="partner-card__list">
                  {p.items.map((item) => (
                    <li key={item} className="partner-card__item">{item}</li>
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
