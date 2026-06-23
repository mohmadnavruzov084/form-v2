import { FeedbackIcon } from "../icons/feedbackIcon";
import styles from "./feedback.module.scss";
export const Feedback = () => {
  return (
    <>
      <div className={styles.feedback}>
        <div className={styles.feedback_container}>
          <div>
            <div className={styles.feedback_title}>Need a help?</div>
            <div className={styles.feedback_descripton}>
              chat with live support
            </div>
          </div>
          <div className={styles.feedback_icon}>
            <a href="/">
              <FeedbackIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
