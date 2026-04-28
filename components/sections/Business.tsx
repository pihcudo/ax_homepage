const steps = [
  {
    num: 'STEP 01',
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
    num: 'STEP 02',
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
    num: 'STEP 03',
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
    num: 'STEP 04',
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

const values = [
  { label: 'ONE TEAM', desc: '네 단계 모두 단일 조직이 책임집니다' },
  { label: 'FAST FEEDBACK', desc: 'PoC 단계에서 리스크를 최소화합니다' },
  { label: 'LIFETIME PARTNER', desc: '구축 이후의 동반자가 됩니다' },
]

export default function Business() {
  return (
    <section id="business" className="business section" data-screen-label="03 Business">
      <div className="container">
        <div className="business__head">
          <div className="business__eyebrow en">AX BUSINESS · END-TO-END SERVICE MODEL</div>
          <h2 className="business__title">
            고객 생애주기 전체를
            <br />
            <em>책임지는 서비스</em>
          </h2>
          <p className="business__sub">
            컨설팅부터 운영까지 — 단일 조직이 모든 단계를 함께합니다.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: 0 }}>
        <div className="biz-steps">
          <div className="biz-steps__line" />
          {steps.map((step) => (
            <div className="biz-card biz-card--step" key={step.num}>
              <div className="biz-card__icon">{step.icon}</div>
              <div className="biz-card__index en">{step.num}</div>
              <div className="biz-card__name">{step.title}</div>
              <div className="biz-card__en en">{step.en}</div>
              <ul className="biz-card__list">
                {step.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ padding: 0 }}>
        <div className="biz-values">
          {values.map((v) => (
            <div className="biz-value" key={v.label}>
              <div className="biz-value__label en">{v.label}</div>
              <p className="biz-value__desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
