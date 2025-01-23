import FlashCard from "../FlashCard/FlashCard";

import { useState } from "react";





const profile = { name: "Hope", fact: "Has a dog named porridge" };

export default function CardDisplay() {

 const [isFront, setIsFront] = useState(true);


  function handleClick() {
    setIsFront(!isFront);
  }


  return (
    <div>
      <FlashCard onFlashCardClick={handleClick} name={profile.name} fact={profile.fact} panel={isFront ? "Front" : "Back" } />
    </div>
  );
}


