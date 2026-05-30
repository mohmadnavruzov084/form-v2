import clsx from "clsx";
import { Button } from "@/components/ui/button/button";
import styles from "../personalInfo/personalinfo.module.scss";
import style from "./subscriptionPlan.module.scss";
import { Controller, useFormContext } from "react-hook-form";
import { useUserDataStore } from "@/store/userStore";
const plans = [
  {
    id: "Basic",
    title: "Basic Plan",
    description: "Limited access to essential features",
    price: "100$",
  },
  {
    id: "Premium",
    title: "Premium Plan",
    description: "Complete access and priority support",
    price: "300$",
  },
  {
    id: "Enterprise",
    title: "Enterprise Plan",
    description: "Custom solutions for large teams",
    price: "500$",
  },
];

export const SubscriptionPlan = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  const { control, watch } = useFormContext();
  const { setUser, user } = useUserDataStore();
  const selectedPlan = watch("subscriptionPlan");

  const handleNext = () => {
    if (!selectedPlan) {
      alert("пожалуйста выберите план!");
      return;
    }
    setUser({ ...user, subscriptionPlan: selectedPlan });
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
                className={clsx(style.plans_item, {
                  [style.selected]: field.value === plan.id,
                })}
              >
                <div className={style.radio_button}>
                  <input
                    type="radio"
                    checked={field.value === plan.id}
                    readOnly
                  />
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
