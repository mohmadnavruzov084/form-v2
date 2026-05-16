import { Button } from "@/components/ui/button/button";
import styles from "./IdentityVerification.module.scss";
import { useState } from "react";
export const IdentityVerification = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  const [selected, setSelected] = useState("");
  const handleNext = () => {
    if (!selected) {
      alert("Пожалуйста, выберите способ верификации!!");
      return;
    }
    onNext();
  };
  return (
    <>
      <div className={styles.plans_wrapper}>
        <h1 className={styles.plans}>Identity verification</h1>
        <div
          onClick={() => setSelected("Basic")}
          className={`${styles.plans_item} ${selected === "Basic" ? styles.selected : ""}`}
        >
          <div className={styles.radio_button}>
            <input type="radio" checked={selected === "Basic"} readOnly />
          </div>
          <div>
            <p className={styles.plans_title}>Passport</p>
            <p className={styles.plans_decription}>
              Upload photo of your passport
            </p>
            <p className={styles.plans_price}>📜</p>
          </div>
        </div>
        <div
          className={`${styles.plans_item} ${selected === "Premium" ? styles.selected : ""}`}
          onClick={() => setSelected("Premium")}
        >
          <div>
            <input type="radio" checked={selected === "Premium"} readOnly />
          </div>
          <div>
            <p className={styles.plans_title}>Driver's license</p>
            <p className={styles.plans_decription}>
              Upload front and back side
            </p>
            <p className={styles.plans_price}>🚗</p>
          </div>
        </div>
        <div
          className={`${styles.plans_item} ${selected === "Enterprise" ? styles.selected : ""}`}
          onClick={() => setSelected("Enterprise")}
        >
          <div>
            <input type="radio" checked={selected === "Enterprise"} readOnly />
          </div>
          <div>
            <p className={styles.plans_title}>ID card</p>
            <p className={styles.plans_decription}>Government issued ID card</p>
            <p className={styles.plans_price}>📇</p>
          </div>
        </div>
        <div className={styles.button_box}>
          <Button onClick={onBack}>Back</Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
      </div>
    </>
  );
};
