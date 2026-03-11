import styles from "./career.module.css";
import Position from "./Position";

type Position = {
  id: number
  beginDate: string
  title: string
  company: string
  description: string
  tags: string[]
}

export default function CareerSection() {
  const positions: Position[] = [
    {
      "id": 1,
      "beginDate": "2024/09",
      "title": "Estagiário de TI",
      "company": "UX Innovation",
      "description": "Durante o estágio, atuei em infraestrutura de TI, com suporte via Help Desk, administração de"
        + " usuários (VPN e e-mail) e demais serviços internos. Paralelamente, participei de um programa"
        + " interno de formação para atuação como desenvolvedor SAP ABAP, com aulas e exercícios práticos"
        + " envolvendo conceitos do ecossistema SAP e fundamentos da linguagem.",
      "tags": ["SAP", "ABAP", "Help Desk"],
    },
    {
      "id": 2,
      "beginDate": "2025/07",
      "title": "SAP ABAP Trainee",
      "company": "UX Innovation",
      "description": "Atuo no desenvolvimento e evolução de soluções orientadas a projetos, participando desde a"
        + " análise e entendimento de requisitos até a implementação e validação de entregáveis."
        + " Atualmente trabalho no projeto Control Tower para a MARS Incorporated, focado na integração"
        + " entre o SAP (módulo SD) e sistemas especialistas de transporte logístico, envolvendo lógica de"
        + " negócios, criação e consumo de APIs com integradores, documentação e suporte.",
      "tags": ["SAP", "ABAP", "SAP SD", "API", "Integrações"],
    }
  ]

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.verticalContainer}`}>
        {
          positions.map((p, index) => (
            <div
              key={p.id}
              className={`${styles.snapPosition}`}
              id="3"
            >
              <Position
                position={p}
                index={index}
                total={positions.length}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}