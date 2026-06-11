import styles from "./accountActive.module.scss";
import { useEffect, useRef } from "react";

import { useFormContext } from "react-hook-form";
export const AccountActive = () => {
  const { getValues } = useFormContext();
  const hasLogged = useRef(false);
  useEffect(() => {
    if (!hasLogged.current) {
      hasLogged.current = true;
      const allFormData = getValues();
      console.log("=== ФИНАЛЬНЫЕ ДАННЫЕ ФОРМЫ ===");
      console.log(allFormData);
      console.log("==============================");
    }
  }, []);
  return (
    <>
      <div className={styles.account_wrapper}>
        <div className={styles.account_title}>Account active!</div>
        <div className={styles.account_img}>🎉</div>
      </div>
    </>
  );
};
