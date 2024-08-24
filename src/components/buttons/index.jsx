import styles from "./styles.module.css";
import { ReactComponent as SubtractIcons } from "../../assets/icons/Subtract.svg";
import { ReactComponent as GoogleIcons } from "../../assets/icons/google.svg";
import { ReactComponent as IxIcons } from "../../assets/icons/ix.svg";

function Buttons({ colorIcons, handleMouseOver, handleMouseOut }) {
  return (
    <div className={styles.buttons_container}>
      <button className={styles.btn}>
        <SubtractIcons className={styles.icon} />

        <GoogleIcons className={styles.icon} />

        <IxIcons className={styles.icon} />
      </button>
    </div>
  );
}

export default Buttons;
