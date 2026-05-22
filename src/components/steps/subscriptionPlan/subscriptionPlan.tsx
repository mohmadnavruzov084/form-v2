import { Button } from "@/components/ui/button/button";
import styles from "../personalInfo/personalinfo.module.scss";
import style from "./subscriptionPlan.module.scss";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { plans } from "../../../arrays/plans";
export const SubscriptionPlan = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  const { control } = useFormContext();
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    if (!selected) {
      alert("пожалуйста выберите план!");
      return;
    }
    onNext();
  };

  return (
    <div className={style.plans_wrapper}>
      <div className={styles.formRegistration_title}>Available plans</div>

      <Controller
        name="subscriptionPlan"
        control={control}
        render={({ field }) => (
          <>
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => {
                  setSelected(plan.id);
                  field.onChange(plan.id);
                }}
                className={`${style.plans_item} ${
                  selected === plan.id ? style.selected : ""
                }`}
              >
                <div className={style.radio_button}>
                  <input type="radio" checked={selected === plan.id} readOnly />
                </div>
                <div>
                  <div className={style.plans_title}>{plan.title}</div>
                  <div className={style.plans_decription}>
                    {plan.description}
                  </div>
                  <div className={style.plans_price}>{plan.price}</div>
                </div>
              </div>
            ))}
          </>
        )}
      />

      <div className={style.button_box}>
        <Button onClick={onBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};
