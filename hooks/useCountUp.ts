'use client'

import { useState, useEffect, useRef, RefObject } from 'react'

interface UseCountUpOptions {
  duration?: number
  decimals?: number
  start?: number
}

export function useCountUp(
  end: number,
  { duration = 1400, decimals = 0, start = 0 }: UseCountUpOptions = {}
): [RefObject<HTMLDivElement | null>, number] {
  const [value, setValue] = useState(start)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const t0 = performance.now()
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / duration)
              const eased = 1 - Math.pow(1 - p, 3)
              const v = start + (end - start) * eased
              setValue(decimals ? parseFloat(v.toFixed(decimals)) : Math.round(v))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end, duration, decimals, start])

  return [ref, value]
}
