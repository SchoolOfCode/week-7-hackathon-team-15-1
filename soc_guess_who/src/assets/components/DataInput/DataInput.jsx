import InputBox from "../InputBox/InputBox";
import styles from "./DataInput.module.css"

export default function DataInput({ onNameInputChange, onFactInputChange ,resetNameField,resetFactField}) {
  return (
    <div className={styles.DataInputSection}>
      <InputBox label="Name" onInputChange={onNameInputChange} defaultText={resetNameField}/>
      <InputBox label="Facts" onInputChange={onFactInputChange} defaultText={resetFactField}/>
    </div>
  );
}
