"use client"

import { useEffect, useRef } from "react"

export function usePagesObserver(pagesIds: string[], onPageChange: (id: string) => void) {
  const idsRef = useRef<string[]>(pagesIds)
  idsRef.current = pagesIds

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

        const id = mostVisible.target.id
        onPageChange(id)
      },
      { threshold: 0.6 }
    )

    sections.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
