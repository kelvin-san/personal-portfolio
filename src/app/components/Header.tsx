import styles from "./header.module.css";

export default function Header(
  { secNumber, 
    secTitle
  }: 
  { secNumber: number,
    secTitle: string
  },
) {
  return (
    <div className={styles.container}>
      <div className={styles.secNumber}>{secNumber}</div>
      <div className={styles.secTitle}>{secTitle}</div>
    </div>
  );
}