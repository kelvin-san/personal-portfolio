import styles from "./pageIndicator.module.css"
import { Reveal } from "../Reveal"

type Page = {
  id: string
  label: string
}

type PageIndicatorProps = {
  pages: Page[]
  activePage: string
  dotX: number
}

export default function PageIndicator({ pages, activePage, dotX }: PageIndicatorProps) {
  const handleScroll = (id: string) => {
    const page = document.getElementById(id)
    page?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.items}`}>
        {pages.map((page, index) => (
          <div
            key={page.id}
            className={`${styles.pageLabel} ${activePage == page.id ? styles.active : styles.inactive}`}
            onClick={() => handleScroll(page.id)}
          >
            <Reveal direction="up" delay={600 + index * 100}>
              <span className={`${styles.title}`}>{page.label}</span>
            </Reveal>
          </div>
        ))}
      </div>
      <Reveal direction="up" delay={700}>
        <div
          className={`${styles.dot}`}
          style={{ transform: `translateX(${dotX}rem)` }}
          data-active={activePage}
        />
      </Reveal>
    </div>
  )
}