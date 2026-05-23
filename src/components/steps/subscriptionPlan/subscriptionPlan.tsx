import { Button } from "@/components/ui/button/button";
import styles from "../personalInfo/personalinfo.module.scss";
import style from "./subscriptionPlan.module.scss";
import { Controller, useFormContext } from "react-hook-form";
import { plans } from "../../../plans";

export const SubscriptionPlan = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  const { control, watch } = useFormContext();
  const selectedPlan = watch("subscriptionPlan");
  const handleNext = () => {
    if (!selectedPlan) {
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
                  field.onChange(plan.id);
                }}
                className={`${style.plans_item} ${
                  field.value === plan.id ? style.selected : ""
                }`}
              >
                <div className={style.radio_button}>
                  <input type="radio" checked={field.value === plan.id} readOnly />
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
