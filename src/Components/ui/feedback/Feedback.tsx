import { Feedbackicon } from "../icons/feedback-icon";
import styles from "./Feedback.module.scss";
export const Feedback = () => {
  return (
    <>
      <div className={styles.feedback}>
        <div className={styles.feedback - container}>
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
