import { Feedback } from "../feedback/feedback";
import { Logosvg } from "../icons/logo";
import styles from "./sidebar.module.scss";

export const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <Logosvg />
          <h1 className={styles.title}>brix templates</h1>
        </div>
        <div className={styles.steps}>
          <div className={styles.steps_item}>
            <div className={`${styles.steps_number} ${styles.steps_number_active}`}>1</div>
            <div className={styles.steps_text}>
              <h4 className={styles.steps_title}>Personal information</h4>
              <p className={styles.steps_description}>
                Tell us who you are to get started.
              </p>
            </div>
          </div>
          <div className={`${styles.line} ${styles.line_50}`}></div>

          <div className={styles.steps_item}>
            <div className={styles.steps_number}>2</div>
            <div className={styles.steps_text}>
              <h4 className={styles.steps_title}>Personal information</h4>
              <p className={styles.steps_description}>
                Choose the product plan that fits your needs.
              </p>
            </div>
          </div>
          
          <div className={`${styles.line} ${styles.line_0}`}></div>
          
          <div className={styles.steps_item}>
            <div className={styles.steps_number}>3</div>
            <div className={styles.steps_text}>
              <h4 className={styles.steps_title}>Identity verification</h4>
              <p className={styles.steps_description}>
                Verify your identity for security purposes.
              </p>
            </div>
          </div>

          <div className={`${styles.line} ${styles.line_0}`}></div>
          
          <div className={styles.steps_item}>
            <div className={styles.steps_number}>4</div>
            <div className={styles.steps_text}>
              <h4 className={styles.steps_title}>Activate account</h4>
              <p className={styles.steps_description}>
                Final step! Let’s activate your account.
              </p>
            </div>
          </div>
        </div>
        <Feedback />
      </div>
    </>
  );
};