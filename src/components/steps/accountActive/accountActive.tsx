import styles from "./accountActive.module.scss";

export const AccountActive = () => {
  return (
    <>
      <div className={styles.account_wrapper}>
        <h1 className={styles.account_title}>Account active!</h1>
        <span className={styles.account_img}>🎉</span>
      </div>
    </>
  );
};
