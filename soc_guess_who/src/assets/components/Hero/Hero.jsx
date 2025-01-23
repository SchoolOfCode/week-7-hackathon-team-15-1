import DataInput from "../DataInput/DataInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import CardDisplay from "../CardDisplay/CardDisplay";
import { useState } from "react";

export default function Hero() {
  let profileArray = [{ name: "Hope", fact: "Has a dog named Porridge" }];
  const [profiles, setProfiles] = useState(profileArray);
  const [newNameInput, setNewNameInput] = useState("");
  const [newFactInput, setNewFactInput] = useState("");

  function handleSubmitClick() {
    console.log(profiles);
    console.log("clicked");
    let newprofiles = [
      ...profiles,
      {
        name: newNameInput,
        fact: newFactInput,
      },
    ];
    setProfiles(newprofiles);
    console.log(profiles);
    console.log(newprofiles);
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
        <h1>Hero Section</h1>
        <DataInput
          onNameInputChange={handleNameInput}
          onFactInputChange={handleFactInput}
        />
        <SubmitButton onButtonClick={handleSubmitClick} />
      </div>
      <div className="flashcardSection">
        <CardDisplay profile_data={profiles} />
      </div>
    </div>
  );
}
