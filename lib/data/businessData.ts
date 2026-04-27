export interface BusinessCard {
  idx: string
  name: string
  tagline: string
  desc: string
  items: string[]
}

export const businessCards: BusinessCard[] = [
  {
    idx: '01',
    name: 'AI',
    tagline: '생성형 AI 기반의 실행형 지능',
    desc: '모델부터 어플리케이션까지, 비즈니스 성과로 연결되는 기업 맞춤 AI 솔루션을 설계합니다.',
    items: ['AI Platform', 'Co-Pilot', 'ML Ops', 'Service.AI'],
  },
  {
    idx: '02',
    name: 'DATA',
    tagline: '데이터가 의사결정이 되는 구조',
    desc: '데이터 수집·축적·분석의 전 과정을 아우르는 실용적인 데이터 아키텍처를 구축합니다.',
    items: ['Hybrid Cloud', 'Data / AX Platform', 'Infra SWA', 'Service SI'],
  },
  {
    idx: '03',
    name: 'CX',
    tagline: '경험의 품질이 기술의 완성도입니다',
    desc: '고객 여정의 모든 접점을 이해하고, 경험 설계부터 운영까지 일관된 가치를 만듭니다.',
    items: ['DX Consulting', 'BPO', 'Co.Solutions', 'SI·Services'],
  },
]
