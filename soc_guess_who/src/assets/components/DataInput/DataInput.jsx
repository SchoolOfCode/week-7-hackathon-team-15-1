import InputBox from "../InputBox/InputBox";
import styles from "./DataInput.module.css"

export default function DataInput({ onNameInputChange, onFactInputChange }) {
  return (
    <div className={styles.DataInputSection}>
      <InputBox label="Name" onInputChange={onNameInputChange} />
      <InputBox label="Facts" onInputChange={onFactInputChange} />
    </div>
  );
}
