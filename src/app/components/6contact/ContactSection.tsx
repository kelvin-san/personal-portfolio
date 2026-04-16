import styles from "./contact.module.css"
import { Reveal } from "../Reveal"

export default function ContactSector() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.cta}`}>
          <Reveal direction="up" delay={200}>
            <h1>Vamos trabalhar<br />juntos?</h1>
          </Reveal>
          <Reveal direction="up" delay={300}>
            <p>Estou esperando sua mensagem ;)</p>
          </Reveal>
        </div>
        <div className={`${styles.links}`}>
          <Reveal direction="up" delay={400}>
            <a href="https://www.linkedin.com/in/kelvin-santana-ribeiro/" target="_blank">
              <div>
                <p>Kelvin Santana Ribeiro</p>
                <img src="/icons/linkedin.svg" alt="LinkedIn Logo" />
              </div>
            </a>
          </Reveal>
          <Reveal direction="up" delay={500}>
            <a href="mailto:kelvinsanrib@gmail.com">
              <div>
                <p>kelvinsanrib@gmail.com</p>
                <img src="/icons/email.svg" alt="Icon E-mail" />
              </div>
            </a>
          </Reveal>
          <Reveal direction="up" delay={600}>
            <a href="https://github.com/kelvin-san" target="_blank">
              <div>
                <p>github.com/kelvin-san</p>
                <img src="/icons/github.svg" alt="GitHub Logo" />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  )
}