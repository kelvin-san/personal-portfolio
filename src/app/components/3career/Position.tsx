import styles from "./position.module.css";

type Position = {
  id: number
  beginDate: string
  title: string
  company: string
  description: string
  tags: string[]
}

type PositionProps = {
  position: Position
  index: number
  total: number
}

export default function Position({ position, index, total }: PositionProps) {
  const isFirst = index === 0
  const isLast = index === total - 1

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.positionDate}`}>
          {position.beginDate}
        </div>
        <div className={`${styles.positionContent}`}>
          <div className={`${styles.positionTitle}`}>
            <div className={`${styles.dot}`} />

            {!isFirst && <div className={styles.topLine} />}
            {!isLast && <div className={styles.bottomLine} />}

            {position.title} · {position.company}
          </div>
          <div className={`${styles.positionDescription}`}>
            {position.description}
          </div>
          <div className={`${styles.tagsContainer}`}>
            {
              position.tags.map((t) => (
                <div
                  key={t}
                  className={`${styles.tag}`}
                >
                  {t}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}