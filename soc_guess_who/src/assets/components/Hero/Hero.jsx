import DataInput from "../DataInput/DataInput";
import SubmitButton from "../SubmitButton/SubmitButton";
import CardDisplay from "../CardDisplay/CardDisplay";

export default function Hero() {
  return (
    <div>
      <div className="createDataSection">
        <DataInput />
        <SubmitButton />
      </div>
      <div className="flashcardSection">
        <CardDisplay />
      </div>
    </div>
  );
}
