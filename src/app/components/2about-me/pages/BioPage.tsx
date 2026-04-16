import styles from "./bioPage.module.css"
import { Reveal } from "../../Reveal"

export default function BioPage() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <Reveal direction="down" delay={200}>
          <h1 className={`${styles.title}`}>Biografia</h1>
        </Reveal>
        <div className={`${styles.texts}`}>
          <Reveal direction="up" delay={300}>
            <p>Me vejo apaixonado pela área de tech desde pequeno, paixão essa que surgiu tanto por influência de familiares quanto pelo contato com esse universo por meio da internet.</p>
          </Reveal>
          <Reveal direction="up" delay={400}>
            <p>Aos 14 iniciei um curso técnico profissionalizante em Informática para a Internet integrado ao Ensino Médio pela ETEC Parque Belém, finalizado no ano de 2021, e em 2022 prossegui minha jornada com o curso superior de Análise e Desenvolvimento de Sistemas pela FATEC Zona Leste.</p>
          </Reveal>
          <Reveal direction="up" delay={500}>
            <p>Ambos os cursos me trouxeram uma bagagem significativa para um melhor entendimento da base teórica que sustenta o vasto universo de TI, que com o apoio dos trabalhos finalizadores (TCCs) também me trouxeram experiências práticas da aplicação de todos esses conhecimentos.</p>
          </Reveal>
          <Reveal direction="up" delay={600}>
            <p>No ano de 2024 ingressei ao mundo SAP como estagiário na área de desenvolvimento ABAP pela UX Innovation, onde sigo até hoje, aprendendo e aplicando meus conhecimentos nesse universo tão fascinante.</p>
          </Reveal>
        </div>
      </div>
    </div>
  )
}