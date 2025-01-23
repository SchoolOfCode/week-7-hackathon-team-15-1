import styles from "./FlashCard.module.css";

export default function FlashCard({
  card_name,
  card_fact,
  panel,
  onFlashCardClick,
}) {
  if (panel == "Front") {
    return (
      <div className={styles.FlashCard} onClick={onFlashCardClick}>
        <h1>🔍</h1>
        <h3>{card_fact}</h3>
      </div>
    );
  } else {
    return (
      <div onClick={onFlashCardClick}>
        <h1>👍</h1>
        <h3>{card_name}</h3>
      </div>
    );
  }
}
