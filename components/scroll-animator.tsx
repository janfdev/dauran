"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

export function ScrollAnimator() {
  const pathname = usePathname()

  React.useEffect(() => {
    // 1. IntersectionObserver for [data-reveal]
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed")
          }
        })
      },
      { threshold: 0.15 }
    )

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      revealObserver.observe(el)
    })

    // 2. Continuous Scroll Effects (Journey plant, Parallax, Study)
    let animationFrameId = 0
    let isRunning = true

    const scrollStudyEls = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-study]"))
    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"))
    const journeyEl = document.querySelector<HTMLElement>("[data-journey]")
    const plantStartEl = journeyEl?.querySelector<HTMLElement>("[data-plant-start]")
    const plantEndEl = journeyEl?.querySelector<HTMLElement>("[data-plant-end]")

    let journeyBounds: {
      element: HTMLElement
      x: number
      y: number
      scale: number
      end: number
    } | null = null

    const clamp = (val: number, min = 0, max = 1) => Math.min(Math.max(val, min), max)

    const updateMeasurements = () => {
      journeyBounds = null
      if (journeyEl && plantStartEl) {
        const startRect = plantStartEl.getBoundingClientRect()
        const journeyRect = journeyEl.getBoundingClientRect()
        journeyEl.style.setProperty("--plant-start-top", `${startRect.top - journeyRect.top}px`)
      }

      if (journeyEl && plantStartEl && plantEndEl && window.innerWidth > 900) {
        const startRect = plantStartEl.getBoundingClientRect()
        const endRect = plantEndEl.getBoundingClientRect()
        journeyBounds = {
          element: journeyEl,
          x: endRect.left - startRect.left,
          y: endRect.top - startRect.top,
          scale: endRect.width / startRect.width,
          end: Math.max(1, endRect.top + window.scrollY - 0.4 * window.innerHeight),
        }
      }
      requestScrollUpdate()
    }

    const onScroll = () => {
      animationFrameId = 0
      if (!isRunning) return

      const vh = window.innerHeight

      // Study progress
      scrollStudyEls.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const progress = clamp((0.88 * vh - rect.top) / (0.72 * vh))
        el.style.setProperty("--study", progress.toFixed(4))
      })

      // Parallax progress
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const progress = clamp((vh - rect.top) / (vh + el.offsetHeight))
        el.style.setProperty("--photo", progress.toFixed(4))
      })

      // Travelling plant animation
      if (journeyBounds) {
        const p = clamp(window.scrollY / journeyBounds.end)
        const ease = p * p * (3 - 2 * p) // smoothstep
        journeyBounds.element.style.setProperty("--plant-x", `${(journeyBounds.x * ease).toFixed(2)}px`)
        journeyBounds.element.style.setProperty("--plant-y", `${(journeyBounds.y * ease).toFixed(2)}px`)
        journeyBounds.element.style.setProperty("--plant-scale", (1 + (journeyBounds.scale - 1) * ease).toFixed(4))
        journeyBounds.element.style.setProperty(
          "--plant-rotation",
          `${(-5 * Math.sin(p * Math.PI)).toFixed(2)}deg`
        )
      } else if (journeyEl) {
        ;["--plant-x", "--plant-y", "--plant-scale", "--plant-rotation"].forEach((prop) =>
          journeyEl.style.removeProperty(prop)
        )
      }
    }

    function requestScrollUpdate() {
      if (!animationFrameId && isRunning) {
        animationFrameId = requestAnimationFrame(onScroll)
      }
    }

    const resizeObserver = new ResizeObserver(updateMeasurements)
    if (journeyEl) resizeObserver.observe(journeyEl)

    window.addEventListener("scroll", requestScrollUpdate, { passive: true })
    window.addEventListener("resize", updateMeasurements)

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (isRunning) updateMeasurements()
      })
    }

    updateMeasurements()

    return () => {
      isRunning = false
      cancelAnimationFrame(animationFrameId)
      revealObserver.disconnect()
      resizeObserver.disconnect()
      window.removeEventListener("scroll", requestScrollUpdate)
      window.removeEventListener("resize", updateMeasurements)
      scrollStudyEls.forEach((el) => el.style.removeProperty("--study"))
      parallaxEls.forEach((el) => el.style.removeProperty("--photo"))
      if (journeyEl) {
        ;["--plant-x", "--plant-y", "--plant-scale", "--plant-rotation", "--plant-start-top"].forEach(
          (prop) => journeyEl.style.removeProperty(prop)
        )
      }
    }
  }, [pathname])

  return null
}
