import styles from "./SubmitButton.module.css";


export default function SubmitButton({ onButtonClick }) {
  return <button className={styles.SubmitButton} onClick={onButtonClick}>Submit</button>;
}
