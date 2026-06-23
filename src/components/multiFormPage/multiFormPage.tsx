import styles from "./multiFormPage.module.scss";
import { Personalinfo } from "../steps/personalInfo/personalinfo";
import { Sidebar } from "../ui/sidebar/sidebar";
import { FormProvider } from "react-hook-form";
import { useMultiForm } from "../hooks/useMultiForm";
import { useState } from "react";
import { SubscriptionPlan } from "../steps/subscriptionPlan/subscriptionPlan";
import { IdentityVerification } from "../steps/identityVerification/identityVerification";
import { AccountActive } from "../steps/accountActive/accountActive";

export const MultiFormPage = () => {
  const form = useMultiForm();
  const [step, setStep] = useState(0);
  const { trigger } = form;

  const validateStep = async (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return await trigger(
          ["fullName", "email", "phoneNumber", "company", "address"],
          { shouldFocus: true },
        );
      case 1:
        return await trigger("subscriptionPlan", { shouldFocus: true });
      case 2:
        return await trigger("verificationMethod", { shouldFocus: true });
      case 3:
        return true;
      default:
        return true;
    }
  };

  const nextStep = async () => {
    const isValid = await validateStep(step);
    if (!isValid) {
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleStepClick = async (clickedStep: number) => {
    if (clickedStep > step + 1) {
      return;
    }

    if (clickedStep < step) {
      setStep(clickedStep);
      return;
    }

    if (clickedStep > step) {
      const isValid = await validateStep(step);
      if (!isValid) return;
      setStep(clickedStep);
    }
  };

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
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar currentStep={step} onStepClick={handleStepClick} />
      <FormProvider {...form}>{renderStep()}</FormProvider>
    </div>
  );
};
