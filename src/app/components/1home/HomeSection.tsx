import styles from "./home.module.css";

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
        <span className={styles.intro}>Eu sou</span>

        <h1 className={styles.name}>
          Kelvin Santana
        </h1>

        <h2 className={styles.role}>
          Desenvolvedor SAP ABAP
        </h2>

        <p className={styles.subtitle}>
          E esse <br />
          é meu <br />
          portfólio
        </p>
      </div>
    </section>
  );
}
