import styles from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroImage}></div>
    </section>
  );
}