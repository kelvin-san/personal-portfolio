import styles from "./sideMenu.module.css";

type Section = {
  id: number
  title: string
  theme: "light" | "dark"
}

type SideMenuProps = {
  sections: Section[]
};

export default function SideMenu({ sections } : SideMenuProps) {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.menuList}>
        {sections.map((s) => (
          <li
            key={s.id}
            className={styles.menuItem}
            // onClick={() => handleScroll(String(s.id))}
          >
            {s.title}
          </li>
        ))}
      </ul>
      <span className={styles.menuLabel}>menu</span>
    </nav>
  );
}
