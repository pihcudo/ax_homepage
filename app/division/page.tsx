import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '사업부소개 | CUDO AX',
  description: 'AI 기반 통합 기술을 중심으로 기업의 데이터·프로세스를 연결하는 CUDO AX 사업부를 소개합니다.',
}

const SERVICES = [
  'DATA & AI 플랫폼 설계 및 구축',
  'Hybrid Integration 중심 통합 플랫폼 아키텍처 구축',
  '데이터 기반 고객·업무경험 최적화 컨설팅',
]

const TEAMS = [
  {
    name: 'AX컨설팅 팀',
    items: ['사업제안', '신규사업발굴', '기술컨설팅'],
  },
  {
    name: 'AX엔지니어팀',
    items: ['IBM 제품군 기술지원', '프로젝트 POC', '기술컨설팅'],
  },
  {
    name: 'AX서비스 개발팀',
    items: [
      '자사 모니터링 시스템 운영 및 개발',
      'MongoDB 컨설팅 기술지원 POC',
      '보안솔루션 TuxCare, Black Duck 기술지원',
      'ARIS 기술지원 및 운영개발',
    ],
  },
  {
    name: 'CX팀',
    items: ['Adobe 프로젝트 기술지원 및 개발 운영', '컨설팅 POC'],
  },
  {
    name: 'AX고객 지원팀',
    items: ['webMethods IBM 제품 고객 지원'],
  },
  {
    name: 'Automation 팀',
    items: ['webMethods 컨설팅 기술지원 및 운영개발'],
  },
  {
    name: 'AX플랫폼사업팀',
    items: ['IBM 총판'],
  },
]

export default function DivisionPage() {
  return (
    <main>
      {/* ── 페이지 히어로 ── */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow en">DIVISION INTRODUCTION</div>
          <h1 className="page-hero__title">사업부소개</h1>
          <p className="page-hero__desc">
            AI 기반 통합 기술을 중심으로 기업의 디지털 전환을 이끕니다.
          </p>
        </div>
      </section>

      {/* ── AX 사업 소개 ── */}
      <section className="section division-overview">
        <div className="container">
          <div className="section-label">
            <span className="num">01 /</span>
            <span className="title">AX Business</span>
            <span className="line" />
          </div>

          <div className="division-overview__inner">
            <div className="division-overview__left">
              <p className="division-overview__kicker en">AX 사업</p>
              <h2 className="division-overview__title">
                AI 기반 통합 기술로<br />
                <span className="accent">비즈니스 혁신</span>을 실현합니다
              </h2>
              <p className="division-overview__desc">
                AI 기반 통합 기술을 중심으로 기업의 데이터·프로세스를 연결하여
                AI 전환과 비즈니스 혁신 솔루션을 제공합니다.
              </p>
            </div>

            <div className="division-overview__right">
              <ul className="division-service-list">
                {SERVICES.map((s, i) => (
                  <li key={i} className="division-service-list__item">
                    <span className="division-service-list__num en">0{i + 1}</span>
                    <span className="division-service-list__text">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 팀 구성 ── */}
      <section className="section division-teams">
        <div className="container">
          <div className="section-label">
            <span className="num">02 /</span>
            <span className="title">Team Organization</span>
            <span className="line" />
          </div>

          <div className="team-grid">
            {TEAMS.map((team) => (
              <div key={team.name} className="team-card">
                <div className="team-card__header">
                  <span className="team-card__dot" />
                  <h3 className="team-card__name">{team.name}</h3>
                </div>
                <ul className="team-card__list">
                  {team.items.map((item) => (
                    <li key={item} className="team-card__item">{item}</li>
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
