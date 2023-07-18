import styles from "./Background.module.scss";
import sm_blur_red_ball from "../../assets/icons/small_blur_red_ball.svg";
import big_red_ball from "../../assets/icons/big_red_ball.svg";
import sm_purple_ball from "../../assets/icons/small_blur_purple_ball.svg";
import red_ball_mobi from '../../assets/images/red_ball_mobi.png'
import purple_ball_mobi from '../../assets/images/purple_ball_mobi.png'

const Background = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img
          className={styles.sm_blur_red_ball}
          src={sm_blur_red_ball}
          alt="icon"
        />
        <img className={styles.big_red_ball} src={big_red_ball} alt="icon" />
        <img
          className={styles.sm_purple_ball}
          src={sm_purple_ball}
          alt="icon"
        />
      </div>

      <div className={styles.main_mobi}>
      <img
          className={styles.red_ball_mobi}
          src={red_ball_mobi}
          alt="icon"
        />
      <img
          className={styles.purple_ball_mobi}
          src={purple_ball_mobi}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Background;
