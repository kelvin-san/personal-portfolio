"use client";

import { useState } from "react";
import { useSectionObserver } from "./hooks/useSectionObserver";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import HomeSection from "./components/1home/HomeSection";
import AboutSection from "./components/2about-me/AboutSection";

type Section = {
  id: number
  title: string
  theme: "light" | "dark"
}

export default function Home() {
  const sections: Section[] = [
    {
      "id": 1,
      "title": "Home",
      "theme": "dark"
    },
    {
      "id": 2,
      "title": "Sobre mim",
      "theme": "light"
    },
    {
      "id": 3,
      "title": "Carreira",
      "theme": "light"
    },
    {
      "id": 4,
      "title": "Projetos",
      "theme": "light"
    },
    {
      "id": 5,
      "title": "Habilidades",
      "theme": "light"
    },
    {
      "id": 6,
      "title": "Contato",
      "theme": "light"
    },
  ]

  const [activeSection, setActiveSection] = useState(sections[0])

  useSectionObserver(
    sections.map(s => s.id),
    (id) => {
      const section = sections.find(s => s.id === id)
      if (section) setActiveSection(section)
    }
  )

  return (
    <div>
      <div className={`header ${activeSection.theme}`}>
        <Header secNumber={activeSection.id} secTitle={activeSection.title} />
      </div>
      <div className={`${activeSection.theme}`}>
        <SideMenu sections={sections} />
      </div>
      <div className="snap-container">
        <div className="snap-section" id="1">
          <HomeSection />
        </div>
        <div className="snap-section" id="2">
          <AboutSection />
        </div>
      </div>
    </div>
  )
}
