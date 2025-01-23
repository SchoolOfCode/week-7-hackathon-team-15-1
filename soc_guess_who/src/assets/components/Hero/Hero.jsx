import DataInput from "../DataInput/DataInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import CardDisplay from "../CardDisplay/CardDisplay";


export default function Hero() {
  return (
    <div>
      <div className="createDataSection">
        <h1>Hero Section</h1>
        <DataInput />
        <SubmitButton />
      </div>
      <div className="flashcardSection">
        <CardDisplay />
      </div>
    </div>
  );
}
