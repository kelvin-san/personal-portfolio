import styles from "./eduPage.module.css";

export default function EduPage() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <h1 className={`${styles.title}`}>Formações</h1>
        <div className={`${styles.doubleColumn}`}>
          <div className={`${styles.column}`}>
            <h2>Acadêmicas</h2>
            <div>
              <div>
                <p className={`${styles.itemTitle}`}>Ensino Médio</p>
                <p className={`${styles.itemDetails}`}>Etec Parque Belém · 2019 — 2021</p>
              </div>
              <div>
                <p className={`${styles.itemTitle}`}>Técnico · Informática para a Internet</p>
                <p className={`${styles.itemDetails}`}>Etec Parque Belém · 2019 — 2021</p>
              </div>
              <div>
                <p className={`${styles.itemTitle}`}>Superior · Análise e Desenvolvimento de Sistemas</p>
                <p className={`${styles.itemDetails}`}>Fatec Zona Leste · 2022 — 2025</p>
              </div>
            </div>
          </div>
          <div className={`${styles.column}`}>
            <h2>Certificados</h2>
            <div>
              <div>
                <p className={`${styles.itemTitle}`}>SAP Certified Associate - Backend Developer<br /> - SAP Cloud Application Programming Model</p>
                <p className={`${styles.itemDetails}`}>Por SAP · Válida até 2025/08</p>
              </div>
              <div>
                <p className={`${styles.itemTitle}`}>TOEIC (Nível B2)</p>
                <p className={`${styles.itemDetails}`}>Por Toiec Brasil · Válida até 2026/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}