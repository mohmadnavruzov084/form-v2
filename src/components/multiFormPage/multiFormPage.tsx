import styles from "./multiFormPage.module.scss";
import { Personalinfo } from "../steps/personalInfo/personalinfo";
import { Sidebar } from "../ui/sidebar/sidebar";
import { FormProvider } from "react-hook-form";
import { useMultiForm } from "../hooks/useMultiForm";
import { useState } from "react";
import { SubscriptionPlan } from "../steps/subscriptionPlan/subscriptionPlan";
import { IdentityVerification } from "../steps/IdentityVerification/IdentityVerification";
import { AccountActive } from "../steps/accountActive/accountActive";

export const MultiFormPage = () => {
  const form = useMultiForm();
  const [step, setStep] = useState(0);
  const { trigger } = form;
  const nextStep = async () => {
    if (step === 0) {
      const isStepValid = await trigger(
        ["fullName", "email", "phoneNumber", "company", "address"],
        { shouldFocus: true },
      );
      if (!isStepValid) {
        return alert("Заполните все поля!");
      }
    }
    return setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);
  const renderStep = () => {
    switch (step) {
      case 0:
        return <Personalinfo onNext={nextStep} />;
      case 1:
        return <SubscriptionPlan onNext={nextStep} onBack={prevStep} />;
      case 2:
        return <IdentityVerification onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <AccountActive />;
      default:
        break;
    }
  };

  const handleStepClick = (clickedStep: number) => {
    setStep(clickedStep);
  };
  return (
    <>
      <div className={styles.container}>
        <Sidebar currentStep={step} onStepClick={handleStepClick} />
        <FormProvider {...form}>{renderStep()}</FormProvider>
      </div>
    </>
  );
};
