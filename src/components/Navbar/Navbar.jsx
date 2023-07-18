import styles from "./Navbar.module.scss";
import logo from "../../assets/icons/logo_welbex.svg";
import tg from "../../assets/icons/telegram_icon.svg";
import wapp from "../../assets/icons/whatsapp.svg";
import viber from "../../assets/icons/viber.svg";
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <section>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </div>
        <div className={styles.navs}>
          <button>Услуги</button>
          <button>Виджеты</button>
          <button>Интеграции</button>
          <button>Кейсы</button>
          <button>Сертификаты</button>
        </div>
      </section>
      <section>
        <a href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
        <button>
          <img src={tg} alt="logo" />
        </button>
        <button>
          <img src={viber} alt="logo" />
        </button>
        <button>
          <img src={wapp} alt="logo" />
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
