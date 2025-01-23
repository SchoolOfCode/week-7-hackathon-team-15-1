import InputBox from "../InputBox/InputBox";

export default function DataInput({ onNameInputChange, onFactInputChange }) {
  return (
    <div>
      <InputBox label="Name" onInputChange={onNameInputChange} />
      <InputBox label="Facts" onInputChange={onFactInputChange} />
    </div>
  );
}
