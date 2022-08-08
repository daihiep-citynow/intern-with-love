import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles["hero-wrapper"]}>
      <span>Hero Component</span>
    </div>
  );
}
