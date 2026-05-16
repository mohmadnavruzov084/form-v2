import { Button } from "@/components/ui/button/button";
import styles from "../personalInfo/personalinfo.module.scss";
import style from "./subscriptionPlan.module.scss";
import { useState } from "react";
export const SubscriptionPlan = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  const [selected, setSelected] = useState("");
  const handleNext = () => {
    if (!selected) {
      alert("пожалуйста выберите план!");
      return;
    }
    
    onNext();
  };
  return (
    <>
      <div className={style.plans_wrapper}>
        <h1 className={styles.formRegistration_title}>Available plans</h1>
        <div
          onClick={() => setSelected("Basic")}
          className={`${style.plans_item} ${selected === "Basic" ? style.selected : ""}`}
        >
          <div className={style.radio_button}>
            <input type="radio" checked={selected === "Basic"} readOnly />
          </div>
          <div>
            <p className={style.plans_title}>Basic Plan</p>
            <p className={style.plans_decription}>
              Limited access to essential features
            </p>
            <p className={style.plans_price}>100$</p>
          </div>
        </div>
        <div
          className={`${style.plans_item} ${selected === "Premium" ? style.selected : ""}`}
          onClick={() => setSelected("Premium")}
        >
          <div>
            <input type="radio" checked={selected === "Premium"} readOnly />
          </div>
          <div>
            <p className={style.plans_title}>Premium Plan</p>
            <p className={style.plans_decription}>
              Complete access and priority support
            </p>
            <p className={style.plans_price}>300$</p>
          </div>
        </div>
        <div
          className={`${style.plans_item} ${selected === "Enterprise" ? style.selected : ""}`}
          onClick={() => setSelected("Enterprise")}
        >
          <div>
            <input type="radio" checked={selected === "Enterprise"} readOnly />
          </div>
          <div>
            <p className={style.plans_title}>Enterprise Plan</p>
            <p className={style.plans_decription}>
              Custom solutions for large teams
            </p>
            <p className={style.plans_price}>500$</p>
          </div>
        </div>
        <div className={style.button_box}>
          <Button onClick={onBack}>Back</Button>
          <Button onClick={handleNext}>Next</Button>
        </div>
      </div>
    </>
  );
};
