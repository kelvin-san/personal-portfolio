import styles from "./home.module.css"
import { Reveal } from "../Reveal"

export default function HomeSection() {
  return (
    <section className={`${styles.section} snap-section`} id="home">
      <div className={styles.overlay} />

      <img
        src="/img/profile-lq.png"
        alt="Foto de Kelvin Santana"
        className={styles.backgroundImage}
      />

      <div className={styles.content}>
        <Reveal direction="right" delay={200}>
          <span className={styles.intro}>Eu sou</span>
        </Reveal>

        <Reveal direction="right" delay={400}>
          <h1 className={styles.name}>
            Kelvin Santana
          </h1>
        </Reveal>

        <Reveal direction="right" delay={600}>
          <h2 className={styles.role}>
            Desenvolvedor SAP ABAP
          </h2>
        </Reveal>

        <Reveal direction="right" delay={800}>
          <p className={styles.subtitle}>
            E esse <br />
            é meu <br />
            portfólio
          </p>
        </Reveal>
      </div>
    </section>
  )
}
