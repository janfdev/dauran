"use client"

import * as React from "react"

interface AnimatedCounterProps {
  value: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  locale?: string
  className?: string
}

export function AnimatedCounter({
  value,
  duration = 1800,
  decimals = 0,
  prefix = "",
  suffix = "",
  locale = "id-ID",
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = React.useState<number>(0)
  const elementRef = React.useRef<HTMLSpanElement>(null)
  const [hasStarted, setHasStarted] = React.useState(false)

  React.useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasStarted])

  React.useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animId = 0

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out expo: 1 - 2^(-10 * progress)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = ease * value

      setDisplayValue(current)

      if (progress < 1) {
        animId = requestAnimationFrame(step)
      } else {
        setDisplayValue(value)
      }
    }

    animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [hasStarted, value, duration])

  const formatted = displayValue.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={elementRef} className={`tabular-nums font-mono ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
