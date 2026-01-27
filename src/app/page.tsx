"use client";

import { useState } from "react";
import { useSectionObserver } from "./hooks/useSectionObserver";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import HomeSection from "./components/1home/HomeSection";

export default function Home() {
  const sections = [
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
      <div>
        <Header secNumber={1} secTitle="Home" />
      </div>
      <div>
        <SideMenu />
      </div>
      <div className="snap-container">
        <div className="snap-section" id="1">
          <HomeSection />
        </div>
      </div>
    </div>
  )
}
