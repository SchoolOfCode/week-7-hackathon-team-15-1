import styles from "./FlashCard.module.css";



export default function FlashCard({ name, fact, panel, onFlashCardClick}) {
  if (panel == "Front"){
     return (
    <div className={styles.FlashCard} onClick={onFlashCardClick}>
      <h1>🔍</h1>
      <h3>{fact}</h3>
    </div>
  );
  }
  else {
    return (
    <div onClick={onFlashCardClick}>
      <h1>👍</h1>
      <h3>{name}</h3>
    </div>
    );
  }

 
}

