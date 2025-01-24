import InputBox from "../InputBox/InputBox";
import styles from "./DataInput.module.css"

export default function DataInput({ onNameInputChange, onFactInputChange ,updateNameField,updateFactField}) {
  return (
    <div className={styles.DataInputSection}>
      <InputBox label="Name" onInputChange={onNameInputChange} inputText={updateNameField}/>
      <InputBox label="Facts" onInputChange={onFactInputChange} inputText={updateFactField}/>
    </div>
  );
}
