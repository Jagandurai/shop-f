import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroImage}></div>
    </div>
  );
}