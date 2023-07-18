import styles from "./Navbar.module.scss";
import logo from '../../assets/icons/logo_welbex.svg'

const Navbar = () => {
  return (
    <nav>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
