import styles from "./sideMenu.module.css";

const sections = [
  { label: "Início", id: "home" },
  { label: "Sobre mim", id: "about" },
  { label: "Carreira", id: "career" },
  { label: "Projetos", id: "projects" },
  { label: "Habilidades", id: "skills" },
  { label: "Contato", id: "contact" },
];

export default function SideMenu() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.menuList}>
        {sections.map((item) => (
          <li
            key={item.id}
            className={styles.menuItem}
            // onClick={() => handleScroll(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <span className={styles.menuLabel}>menu</span>
    </nav>
  );
}
