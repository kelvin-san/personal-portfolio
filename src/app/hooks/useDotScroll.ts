import { useEffect, useState } from "react"

const DOT_POSITIONS = {
  p1: -12.5,
  p2: 0,
  p3: 12.5,
} as const

export function useDotScroll(
  containerRef: React.RefObject<HTMLElement | null>,
  pages: string[]
) {
  const [x, setX] = useState<number>(DOT_POSITIONS.p1)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onScroll = () => {
      const scrollX = el.scrollLeft
      const width = el.clientWidth

      if (width === 0) return

      const progress = scrollX / width

      const current = Math.floor(progress)
      const next = Math.min(current + 1, pages.length - 1)

      const localProgress = progress - current

      const fromKey = pages[current] as keyof typeof DOT_POSITIONS
      const toKey = pages[next] as keyof typeof DOT_POSITIONS

      const from = DOT_POSITIONS[fromKey]
      const to = DOT_POSITIONS[toKey]

      const lerp = from + (to - from) * localProgress

      setX(lerp)
    }

    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [containerRef, pages])

  return x
}
