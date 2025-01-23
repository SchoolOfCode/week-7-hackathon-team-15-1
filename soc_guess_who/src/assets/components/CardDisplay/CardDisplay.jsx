import FlashCard from "../FlashCard/FlashCard";

import { useState } from "react";

export default function CardDisplay({ profile_data }) {
  const [isFront, setIsFront] = useState(true);

  function handleClick() {
    setIsFront(!isFront);
  }

  return (
    <div>
      {profile_data.map(({ name, fact }, index) => (
        <FlashCard
          onFlashCardClick={handleClick}
          card_name={name}
          card_fact={fact}
          panel={isFront ? "Front" : "Back"}
          key={index}
        />
      ))} 
    </div>
  );
}

//       <FlashCard
//         onFlashCardClick={handleClick}
//         name={profile_data[0].name}
//         fact={profile_data[0].fact}
//         panel={isFront ? "Front" : "Back"}
//       />
//     </div>
//   );
// }
