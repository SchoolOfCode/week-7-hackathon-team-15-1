import DataInput from "../DataInput/DataInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import CardDisplay from "../CardDisplay/CardDisplay";
import { useState } from "react";

export default function Hero() {
  let profileArray = [{ name: "Hope", fact: "Has a dog named Porridge" }];
  const [profiles, setProfiles] = useState(profileArray);
  const [newNameInput, setNewNameInput] = useState("");
  const [newFactInput, setNewFactInput] = useState("");
  const [textField, setTextField] = useState("");

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
    setTextField("");
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
          resetNameField={newNameInput}
          resetFactField={newFactInput}
        />
        <SubmitButton onButtonClick={handleSubmitClick} />
      </div>
      <div className="flashcardSection">
        <CardDisplay profile_data={profiles} />
      </div>
    </div>
  );
}
