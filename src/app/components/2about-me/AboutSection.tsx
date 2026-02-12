import styles from "./about.module.css";
import BioPage from "./pages/BioPage";
import EduPage from "./pages/EduPage";
import VidPage from "./pages/VidPage";
import PageIndicator from "./PageIndicator";
import { useDotScroll } from "../../hooks/useDotScroll";

import { usePagesObserver } from "../../hooks/usePagesObserver";
import { useRef, useState } from "react";

type Page = {
  id: string
  label: string
}

export default function AboutSection() {
  const pages: Page[] = [
    { id: "p1", label: "Biografia" },
    { id: "p2", label: "Formação" },
    { id: "p3", label: "Vídeo" },
  ]

  const [activePage, setActivePage] = useState(pages[0])

  const scrollRef = useRef<HTMLDivElement>(null)
  const pageIds = pages.map(p => p.id)

  const dotX = useDotScroll(scrollRef, pageIds)

  usePagesObserver(
    pages.map(p => p.id),
    (id) => {
      const page = pages.find(p => p.id === id)
      if (page) setActivePage(page)
    })

  return (
    <div className={`${styles.container}`}>
      <div ref={scrollRef} className={`${styles.horizontalContainer}`}>
        <div className={`${styles.panel}`} id="p1">
          <BioPage />
        </div>
        <div className={`${styles.panel}`} id="p2">
          <EduPage />
        </div>
        <div className={`${styles.panel}`} id="p3">
          <VidPage />
        </div>
      </div>
      <PageIndicator pages={pages} activePage={activePage.id} dotX={dotX} />
    </div>
  )
}