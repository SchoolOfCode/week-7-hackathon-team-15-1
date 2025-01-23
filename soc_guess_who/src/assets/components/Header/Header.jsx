import styles from "./Header.module.css";
import guess_who_soc from '../../images/guess_who_soc.jpg';

export default function Header() {
  return (
    <div className={styles.banner}>
      <img src={guess_who_soc} alt="SoC Guess Who" />
    
    </div>
  );
}
