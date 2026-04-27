'use client'

import { useCountUp } from '@/hooks/useCountUp'

interface StatProps {
  label: string
  value: number
  suffix?: string
  prefix?: string
  arrow?: string
  sub?: string
  decimals?: number
}

export default function Stat({ label, value, suffix, prefix, arrow, sub, decimals = 0 }: StatProps) {
  const [ref, v] = useCountUp(value, { decimals })

  return (
    <div className="stat" ref={ref}>
      <div className="stat__label">{label}</div>
      <div className="stat__value en">
        {prefix}
        {decimals ? v.toFixed(decimals) : v.toLocaleString()}
        {suffix && <span className={suffix.length > 1 ? 'kr' : 'percent'}>{suffix}</span>}
        {arrow && <span className="arrow">{arrow}</span>}
      </div>
      <div className="stat__sub">{sub}</div>
    </div>
  )
}
