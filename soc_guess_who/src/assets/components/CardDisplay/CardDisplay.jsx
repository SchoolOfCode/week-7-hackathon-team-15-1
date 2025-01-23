import FlashCard from "../FlashCard/FlashCard";
import styles from "./CardDisplay.module.css";


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
  return (
    <div className={styles.CardDisplay}>
      {profile_data.map(({ name, fact }, index) => (
        <FlashCard card_name={name} card_fact={fact} key={index} />
      ))}
    </div>
  );
}
