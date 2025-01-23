import FlashCard from "../FlashCard/FlashCard";
import styles from "./CardDisplay.module.css";
import { useState } from "react";

// export default function CardDisplay({ profile_data }) {
//   const [isFront, setIsFront] = useState(true);

//   function handleClick() {
//     setIsFront(!isFront);
//   }

//   return (
//     <div className={styles.CardDisplay}>
//       {profile_data.map(({ name, fact }, index) => (
//         <FlashCard
//           onFlashCardClick={()=>handleClick(index)}
//           card_name={name}
//           card_fact={fact}
//           panel={isFront ? "Front" : "Back"}
//           key={index}
//         />
//       ))} 
//     </div>
//   );
// }

export default function CardDisplay({ profile_data }) {
  const [isFrontArray, setIsFrontArray] = useState(profile_data.map(() => true));

  function handleClick(index) {
    setIsFrontArray(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }

  return (
    <div className={styles.CardDisplay}>
      {profile_data.map(({ name, fact }, index) => (
        <FlashCard
          onFlashCardClick={() => handleClick(index)}
          card_name={name}
          card_fact={fact}
          panel={isFrontArray[index] ? "Front" : "Back"}
          key={index}
        />
      ))}
    </div>
  );
}