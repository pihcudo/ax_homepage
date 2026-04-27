import Stat from '@/components/ui/Stat'

export default function About() {
  return (
    <section id="about" className="section about--impact" data-screen-label="02 About">
      <div className="container">
        <div className="section-label">
          <span className="num">01 /</span>
          <span className="title">About</span>
          <span className="line" />
        </div>

        <div className="about__impact">
          <div className="about__impact-kicker en">ABOUT CUDO AX</div>
          <h2 className="about__impact-title">
            데이터, AI, 클라우드까지.
            <br />
            <span className="accent-underline">기업의 디지털 혁신</span>을 가속합니다.
          </h2>
          <p className="about__impact-body">
            단순한 기술 구축이 아닌, 산업 현장에 맞는 실질적 해답을 제시합니다. 26개의 특화 조직과
            기술력을 바탕으로 기업의 디지털 혁신을 지원하는 독립된 IT 솔루션 기업입니다.
          </p>
        </div>

        <div className="about__stats">
          <Stat label="매출" value={1303} suffix="억" sub="2025년도 기준" />
          <Stat label="성장" value={96} suffix="%" arrow="↑" sub="전년 대비 매출 성장" />
          <Stat label="신용" value={0} prefix="A-" sub="한국기업평가 등급" suffix="" />
          <Stat label="기술특허" value={82} suffix="%" sub="자체 개발 비율 / 특허 70건" />
        </div>
      </div>
    </section>
  )
}
