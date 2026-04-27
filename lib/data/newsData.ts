export interface NewsItem {
  tag: string
  date: string
  title: string
  excerpt: string
  cover: string
  slug: string
}

export const newsItems: NewsItem[] = [
  {
    tag: 'INSIGHT',
    date: '2026.04.15',
    title: '생성형 AI가 바꾸는 기업 업무의 다음 단계',
    excerpt:
      'AX 사업부의 리서치팀이 정리한 2026 엔터프라이즈 AI 도입 트렌드와 실무 적용 사례를 소개합니다.',
    cover: 'IMAGE · AI RESEARCH',
    slug: 'generative-ai-enterprise-2026',
  },
  {
    tag: 'NEWS',
    date: '2026.03.28',
    title: 'AX 플랫폼 2.0, 공식 출시',
    excerpt:
      '데이터 파이프라인부터 모델 서빙까지 하나의 콘솔에서 관리하는 차세대 통합 플랫폼.',
    cover: 'IMAGE · PRODUCT LAUNCH',
    slug: 'ax-platform-2-launch',
  },
  {
    tag: 'CASE',
    date: '2026.03.10',
    title: '대형 금융사와 함께한 AI 컨택센터 혁신',
    excerpt:
      '상담 품질 32% 향상, 평균 응대 시간 41% 단축을 달성한 금융 도메인 특화 AI 적용 사례.',
    cover: 'IMAGE · CASE STUDY',
    slug: 'ai-contact-center-finance',
  },
]
