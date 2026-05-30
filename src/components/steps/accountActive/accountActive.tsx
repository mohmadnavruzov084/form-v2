import styles from "./accountActive.module.scss";
import { useEffect, useRef } from "react";
import { useUserDataStore } from "@/store/userStore";
export const AccountActive = () => {
  const { user } = useUserDataStore();
  const hasLogged = useRef(false);
  useEffect(() => {
    // Выводим данные только один раз при загрузке компонента
    if (!hasLogged.current && user) {
      hasLogged.current = true;

      console.log("=== ФИНАЛЬНЫЕ ДАННЫЕ ФОРМЫ ===");
      console.log(JSON.stringify(user, null, 2));
      console.log("==============================");
    }
  }, [user]);
  return (
    <>
      <div className={styles.account_wrapper}>
        <div className={styles.account_title}>Account active!</div>
        <div className={styles.account_img}>🎉</div>
      </div>
    </>
  );
};
