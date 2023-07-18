import styles from "./Navbar.module.scss";
import logo from "../../assets/icons/logo_welbex.svg";
import tg from '../../assets/icons/telegram_icon.svg'
import wapp from '../../assets/icons/whatsapp.svg'
import viber from '../../assets/icons/viber.svg'
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <section>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </div>
        <ul>
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Кейсы</li>
          <li>Сертификаты</li>
        </ul>
      </section>
      <section>
        <span>+7 555 555-55-55</span>
        <img src={tg} alt="logo" />
        <img src={viber} alt="logo" />
        <img src={wapp} alt="logo" />
      </section>
    </nav>
  );
};

export default Navbar;
