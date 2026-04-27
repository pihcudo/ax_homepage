export default function Hero() {
  return (
    <section className="hero hero--impact" data-screen-label="01 Hero">
      <div className="hero__grid" />
      <div className="hero__shapes" aria-hidden="true">
        <svg viewBox="0 0 620 620" fill="none">
          <circle cx="420" cy="300" r="280" stroke="var(--line)" strokeWidth="1" />
          <circle cx="420" cy="300" r="220" stroke="var(--line)" strokeWidth="1" />
          <circle cx="420" cy="300" r="160" stroke="var(--line-soft)" strokeWidth="1" />
          <circle cx="420" cy="300" r="100" stroke="var(--line-soft)" strokeWidth="1" />
          <line x1="420" y1="0" x2="420" y2="620" stroke="var(--line-soft)" strokeDasharray="2 6" />
          <line x1="0" y1="300" x2="620" y2="300" stroke="var(--line-soft)" strokeDasharray="2 6" />
          <circle cx="420" cy="300" r="10" fill="var(--accent)" />
          <circle cx="420" cy="300" r="30" stroke="var(--accent)" strokeWidth="1" opacity="0.5">
            <animate attributeName="r" values="30;80;30" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
          </circle>
          <g>
            <circle cx="420" cy="80" r="5" fill="var(--accent)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 420 300"
                to="360 420 300"
                dur="14s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
          <line x1="140" y1="60" x2="180" y2="100" stroke="var(--accent)" strokeWidth="1.5" />
          <line x1="580" y1="540" x2="620" y2="580" stroke="var(--accent)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="hero__bgword en" aria-hidden="true">
        <span>INNOVATION · DATA · AI · CLOUD · INNOVATION · DATA · AI · CLOUD ·&nbsp;</span>
        <span>INNOVATION · DATA · AI · CLOUD · INNOVATION · DATA · AI · CLOUD ·&nbsp;</span>
      </div>

      <div className="container">
        <div className="hero__inner hero__inner--stack">
          <div className="hero__headline">
            <div className="hero__brand-line">
              <span className="word-reveal" style={{ ['--d' as string]: '0.05s' }}>
                <span className="kr hero__brand-kicker">IBM 공식 총판</span>
              </span>
              <span className="word-reveal" style={{ ['--d' as string]: '0.1s' }}>
                <span className="en hero__brand-kicker">MongoDB, Adobe, Aris, TuxCare 파트너</span>
              </span>
            </div>
            <h1
              className="hero__title hero__title--xl"
              style={{ fontSize: '150pt', textAlign: 'left' }}
            >
              <span className="word-reveal" style={{ ['--d' as string]: '0.15s' }}>
                <span className="kr">기업의 미래를 여는</span>
              </span>
              <br />
              <span className="word-reveal" style={{ ['--d' as string]: '0.3s' }}>
                <span className="en" style={{ color: 'var(--accent)' }}>AI Transformation</span>
              </span>
            </h1>
            <p className="hero__sub hero__sub--impact fade-in delay-2 is-visible">
              AI 기반 통합 기술로 기업의 디지털 전환과 보안을 선도하는 IT 솔루션 기업
            </p>
            <p className="hero__desc hero__desc--impact fade-in delay-3 is-visible">
              쿠도커뮤니케이션 AX 사업부는 IBM 하드웨어 및 소프트웨어 국내 총판 및 MongoDB, Adobe,
              Aris, Tuxcare 파트너로서, 기업의 데이터 통합을 넘어 지능형 비즈니스 혁신을 선도합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>SCROLL</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}

