import spotify from "../../assets/icons/spotify.svg";
import styles from "./styles.module.css";
function Header() {
  return (
    <div className={styles.header_conyainer}>
      <img src={spotify} alt="" />;
    </div>
  );
}

export default Header;
