"use client"

import { useEffect, useRef } from "react"

export function useSectionObserver(sectionIds: number[], onSectionChange: (id: number) => void) {
  const idsRef = useRef<number[]>(sectionIds)
  idsRef.current = sectionIds

  useEffect(() => {
    const sections = idsRef.current
      .map((id) => document.getElementById(String(id)))
      .filter(Boolean) as HTMLElement[]

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(e => e.isIntersecting)
        if (!visibleEntries.length) return

        const mostVisible = visibleEntries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        )[0]

        const id = Number(mostVisible.target.id)
        if (!Number.isNaN(id)) {
          onSectionChange(id)
        }
      },
      { threshold: 0.6 }
    )

    sections.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
