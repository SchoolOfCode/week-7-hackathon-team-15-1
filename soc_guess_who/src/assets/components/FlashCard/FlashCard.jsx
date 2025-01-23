import styles from "./FlashCard.module.css";
import { useState } from "react";

export default function FlashCard({ card_name, card_fact }) {
  const [isFrontArray, setIsFrontArray] = useState(true);

  function handleClick() {
    setIsFrontArray(!isFrontArray);
  }

  if (isFrontArray) {
    return (
      <div className={styles.FrontPanel} onClick={handleClick}>
        <h1>🔍</h1>
        <h3>{card_fact}</h3>
      </div>
    );
  } else {
    return (
      <div className={styles.BackPanel} onClick={handleClick}>
        <h1>👍</h1>
        <h3>{card_name}</h3>
      </div>
    );
  }
}
