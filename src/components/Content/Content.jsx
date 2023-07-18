import styles from "./Content.module.scss";
import line from '../../assets/icons/gradient_line.svg'

const Content = () => {
  return (
    <div className={styles.container}>
      <section className={styles.left_content}>
        <p>Зарабатывайте больше</p>
        <p>с WELBEX</p>
        <p>Развиваем и контролируем продажи за вас.</p>
      </section>
      <section className={styles.right_content}>
        <p className={styles.cards_header}>
          Вместе с{" "}
          <span className={styles.free_consult}>бесплатной консультацией</span>{" "}
          мы дарим:
        </p>
        <div className={styles.cards_container}>
          <div className={styles.card}>
            <p className={styles.card_title}>Виджеты</p>
            <p className={styles.card_content}>30 готовых решений</p>
          </div>
          <div className={styles.card}>
            <p className={styles.card_title}>Dashboard</p>
            <p className={styles.card_content}>с показателями вашего бизнеса</p>
          </div>
          <div className={styles.card}>
            <p className={styles.card_title}>Skype Аудит</p>
            <p className={styles.card_content}>отдела продажи CRM систем</p>
          </div>
          <div className={styles.card}>
            <p className={styles.card_title}>35 дней</p>
            <p className={styles.card_content}>использования CRM</p>
          </div>
        </div>

        <div className={styles.cards_container_mobi}>
          <div className={styles.card_mobi}>
              <img src={line} alt="line" />
              <p>Skype аудит</p>
          </div>
          <div className={styles.card_mobi}>
              <img src={line} alt="line" />
              <p>30 виджетов</p>
          </div>
          <div className={styles.card_mobi}>
              <img src={line} alt="line" />
              <p>Dashboard</p>
          </div>
          <div className={styles.card_mobi}>
              <img src={line} alt="line" />
              <p>Месяц amoCRM</p>
          </div>
        </div>

        <div className={styles.btn_div}>
          <button>Получить консультацию</button>
        </div>
      </section>
    </div>
  );
};

export default Content;
