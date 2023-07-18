import styles from "./Background.module.scss";
import sm_blur_red_ball from "../../assets/icons/small_blur_red_ball.svg";
import big_red_ball from "../../assets/icons/big_red_ball.svg";
import sm_purple_ball from "../../assets/icons/small_blur_purple_ball.svg";

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
    </div>
  );
};

export default Background;
