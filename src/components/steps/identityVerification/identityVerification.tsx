import clsx from "clsx";
import { Button } from "@/components/ui/button/button";
import styles from "./IdentityVerification.module.scss";

import { Controller, useFormContext } from "react-hook-form";
const verificationMethods = [
  {
    id: "Passport",
    title: "Passport",
    description: "Upload photo of your passport",
    icon: "📜",
  },
  {
    id: "DriversLicense",
    title: "Driver's license",
    description: "Upload front and back side",
    icon: "🚗",
  },
  {
    id: "IDCard",
    title: "ID card",
    description: "Government issued ID card",
    icon: "📇",
  },
];

export const IdentityVerification = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  const { control, watch } = useFormContext();
  const selectedPlan = watch("verificationMethod");

  const handleNext = () => {
    if (!selectedPlan) {
      alert("Пожалуйста, выберите способ верификации!!");
      return;
    }
    onNext();
  };

  return (
    <div className={styles.plans_wrapper}>
      <div className={styles.plans_text}>Identity verification</div>

      <Controller
        name="verificationMethod"
        control={control}
        render={({ field }) => (
          <>
            {verificationMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => {
                  field.onChange(method.id);
                }}
                className={clsx(styles.plans_item, {
                  [styles.selected]: field.value === method.id,
                })}
              >
                <div className={styles.radio_button}>
                  <input
                    type="radio"
                    checked={field.value === method.id}
                    readOnly
                  />
                </div>
                <div>
                  <div className={styles.plans_title}>{method.title}</div>
                  <div className={styles.plans_decription}>
                    {method.description}
                  </div>
                  <div className={styles.plans_price}>{method.icon}</div>
                </div>
              </div>
            ))}
          </>
        )}
      />

      <div className={styles.button_box}>
        <Button onClick={onBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};
