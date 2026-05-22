import { Button } from "@/components/ui/button/button";
import styles from "./IdentityVerification.module.scss";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { verificationMethods } from "@/arrays/verificationMethods";
export const IdentityVerification = ({
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
                  setSelected(method.id);
                  field.onChange(method.id);
                }}
                className={`${styles.plans_item} ${
                  selected === method.id ? styles.selected : ""
                }`}
              >
                <div className={styles.radio_button}>
                  <input
                    type="radio"
                    checked={selected === method.id}
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
