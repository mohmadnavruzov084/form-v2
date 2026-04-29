import { Feedbackicon } from "../icons/feedbackIcon";
import styles from "./feedback.module.scss";
export const Feedback = () => {
  return (
    <>
      <div className={styles.feedback}>
        <div className={styles.feedback_container}>
          <div className={styles.feedback_text}>
            <h3>Need a help?</h3>
            <p>chat with live support</p>
          </div>
          <div className={styles.feedback_icon}>
            <a href="/">
              <Feedbackicon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
