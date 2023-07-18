import styles from "./Footer.module.scss";
import tg from "../../assets/icons/telegram_icon.svg";
import wapp from "../../assets/icons/whatsapp.svg";
import viber from "../../assets/icons/viber.svg";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.main}>
        <div className={styles.about_and_menu}>
          <div className={styles.about}>
            <p className={styles.title}>о компании</p>
            <button className={styles.footer_link}>
              Партнёрская программа
            </button>
            <button className={styles.footer_link}>Вакансии</button>
          </div>
          <div className={styles.menu}>
            <p className={styles.title}>меню</p>
            <button className={styles.footer_link}>Расчёт стоимости</button>
            <button className={styles.footer_link}>Услуги</button>
            <button className={styles.footer_link}>Виджеты</button>
            <button className={styles.footer_link}>Интеграции</button>
            <button className={styles.footer_link}>Наши клиенты</button>
          </div>
          <div className={styles.menu}>
            <p className={styles.title}></p>
            <button className={styles.footer_link}>Кейсы</button>
            <button className={styles.footer_link}>
              Благодарственные письма
            </button>
            <button className={styles.footer_link}>Сертификаты</button>
            <button className={styles.footer_link}>Блог на YouTube</button>
            <button className={styles.footer_link}>Вопрос / Ответ</button>
          </div>
        </div>
        <div className={styles.contacts}>
          <p className={styles.title}>контакты</p>
          <a href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
          <div className={styles.nets}>
            <button>
              <img src={tg} alt="logo" />
            </button>
            <button>
              <img src={viber} alt="logo" />
            </button>
            <button>
              <img src={wapp} alt="logo" />
            </button>
          </div>
          <p className={styles.footer_link}>
            Москва, Путевой проезд 3c1, к 902{" "}
          </p>
          <div className={styles.rights}>
            <p>©WELBEX 2022. Все права защищены.</p>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
