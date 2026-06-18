import styles from "./accountActive.module.scss";

export const AccountActive = () => {
  return (
    <>
      <div className={styles.account_wrapper}>
        <div className={styles.account_title}>Account active!</div>
        <div className={styles.account_img}>🎉</div>
      </div>
    </>
  );
};
