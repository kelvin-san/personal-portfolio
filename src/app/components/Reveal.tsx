import { ReactNode } from "react"
import { useReveal } from "../hooks/useReveal"

type Props = {
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
}

export function Reveal({
  children,
  direction = "left",
  delay = 0,
}: Props) {
  const { ref, isVisible } = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${
        isVisible ? "reveal-visible" : ""
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}