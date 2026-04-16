import styles from "./eduPage.module.css"
import { Reveal } from "../../Reveal"

export default function EduPage() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <Reveal direction="down" delay={200}>
          <h1 className={`${styles.title}`}>Formações</h1>
        </Reveal>
        <div className={`${styles.doubleColumn}`}>
          <div className={`${styles.column}`}>
            <Reveal direction="right" delay={250}>
              <h2>Acadêmicas</h2>
            </Reveal>
            <div>
              <div>
                <Reveal direction="right" delay={300}>
                  <p className={`${styles.itemTitle}`}>Ensino Médio</p>
                </Reveal>
                <Reveal direction="right" delay={350}>
                  <p className={`${styles.itemDetails}`}>Etec Parque Belém · 2019 — 2021</p>
                </Reveal>
              </div>
              <div>
                <Reveal direction="right" delay={400}>
                  <p className={`${styles.itemTitle}`}>Técnico · Informática para a Internet</p>
                </Reveal>
                <Reveal direction="right" delay={450}>
                  <p className={`${styles.itemDetails}`}>Etec Parque Belém · 2019 — 2021</p>
                </Reveal>
              </div>
              <div>
                <Reveal direction="right" delay={500}>
                  <p className={`${styles.itemTitle}`}>Superior · Análise e Desenvolvimento de Sistemas</p>
                </Reveal>
                <Reveal direction="right" delay={550}>
                  <p className={`${styles.itemDetails}`}>Fatec Zona Leste · 2022 — 2025</p>
                </Reveal>
              </div>
            </div>
          </div>
          <div className={`${styles.column}`}>
            <Reveal direction="right" delay={250}>
              <h2>Certificados</h2>
            </Reveal>
            <div>
              <div>
                <Reveal direction="right" delay={300}>
                  <p className={`${styles.itemTitle}`}>SAP Certified Associate - Backend Developer<br /> - SAP Cloud Application Programming Model</p>
                </Reveal>
                <Reveal direction="right" delay={350}>
                  <p className={`${styles.itemDetails}`}>Por SAP · Válida até 2025/08</p>
                </Reveal>
              </div>
              <div>
                <Reveal direction="right" delay={400}>
                  <p className={`${styles.itemTitle}`}>TOEIC (Nível B2)</p>
                </Reveal>
                <Reveal direction="right" delay={450}>
                  <p className={`${styles.itemDetails}`}>Por Toiec Brasil · Válida até 2026/10</p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}