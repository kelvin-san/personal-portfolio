import styles from "./about.module.css";
import BioPage from "./pages/BioPage";
import EduPage from "./pages/EduPage";
import VidPage from "./pages/VidPage";
import PageIndicator from "./PageIndicator";

import { usePagesObserver } from "../../hooks/usePagesObserver";
import { useState } from "react";

export default function AboutSection() {
  const pages = [
    { "id": "p1" },
    { "id": "p2" },
    { "id": "p3" }
  ]

  const [activePage, setActivePage] = useState(pages[0])

  usePagesObserver(
    pages.map(p => p.id),
    (id) => {
      const page = pages.find(p => p.id === id)
      if (page) setActivePage(page)
    })

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.horizontalContainer}`}>
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
      <PageIndicator activePage={activePage.id} />
    </div>
  )
}