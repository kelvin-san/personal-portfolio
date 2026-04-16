import styles from "./position.module.css"
import { Reveal } from "../Reveal"

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
        <Reveal direction="right" delay={300}>
          <div className={`${styles.positionDate}`}>
            {position.beginDate}
          </div>
        </Reveal>
        <div className={`${styles.positionContent}`}>
          <div className={`${styles.positionTitle}`}>
            <div className={`${styles.dot}`} />

            {!isFirst && <div className={styles.topLine} />}
            {!isLast && <div className={styles.bottomLine} />}

            <Reveal direction="right" delay={400}>
              {position.title} · {position.company}
            </Reveal>
          </div>
          <div className={`${styles.positionDescription}`}>
            <Reveal direction="up" delay={500}>
              {position.description}
            </Reveal>
          </div>
          <div className={`${styles.tagsContainer}`}>
            {
              position.tags.map((t, index) => (
                <Reveal
                  key={t}
                  direction="up" delay={500 + index * 100}
                >
                  <div className={`${styles.tag}`}>
                    {t}
                  </div>
                </Reveal>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}