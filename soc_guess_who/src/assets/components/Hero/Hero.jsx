import DataInput from "../DataInput/DataInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import CardDisplay from "../CardDisplay/CardDisplay";
import { useState } from "react";

export default function Hero() {
  let profileArray = [
    { name: "Hope", fact: "Has a dog named Porridge" },
    { name: "Luke", fact: "All their siblings share a Star Wars theme" },
    {
      name: "Faisal",
      fact: "Lead singer of the best-selling girl group of all time",
    },
    {
      name: "Sam",
      fact: "Is a qualified skydiver",
    },
    {
      name: "Madeleine",
      fact: "Blessed us with their Christmas birthday",
    },
    {
      name: "Nick",
      fact: "Voiced the protagonist of a Playstation GOTY nominee ",
    },
  ];
  const [profiles, setProfiles] = useState(profileArray);
  const [newNameInput, setNewNameInput] = useState("");
  const [newFactInput, setNewFactInput] = useState("");

  function handleSubmitClick() {
    let newprofiles = [
      ...profiles,
      {
        name: newNameInput,
        fact: newFactInput,
      },
    ];
    setProfiles(newprofiles);
    setNewNameInput("");
    setNewFactInput("");
  }

  function handleNameInput(newNameInput) {
    setNewNameInput(newNameInput);
  }

  function handleFactInput(newFactInput) {
    setNewFactInput(newFactInput);
  }

  return (
    <div>
      <div className="createDataSection">
        <DataInput
          onNameInputChange={handleNameInput}
          onFactInputChange={handleFactInput}
          updateNameField={newNameInput}
          updateFactField={newFactInput}
        />
        <SubmitButton onButtonClick={handleSubmitClick} />
      </div>
      <div className="flashcardSection">
        <CardDisplay profile_data={profiles} />
      </div>
    </div>
  );
}
