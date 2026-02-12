import styles from "./pageIndicator.module.css"

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
        {pages.map((page) => (
          <div
            key={page.id}
            className={`${styles.pageLabel} ${activePage == page.id ? styles.active : styles.inactive}`}
            onClick={() => handleScroll(page.id)}
          >
            <span className={`${styles.title}`}>{page.label}</span>
          </div>
        ))}
      </div>
      <div
        className={`${styles.dot}`}
        style={{ transform: `translateX(${dotX}rem)` }}
        data-active={activePage}
      />
    </div>
  )
}