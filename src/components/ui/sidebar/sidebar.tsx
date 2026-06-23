import { Feedback } from "../feedback/feedback";
import { Logosvg } from "../icons/logo";
import styles from "./sidebar.module.scss";
import clsx from "clsx";

const steps = [
  {
    id: 0,
    number: 1,
    title: "Personal information",
    description: "Tell us who you are to get started.",
  },
  {
    id: 1,
    number: 2,
    title: "Subscription plan",
    description: "Choose the product plan that fits your needs.",
  },
  {
    id: 2,
    number: 3,
    title: "Identity verification",
    description: "Verify your identity for security purposes.",
  },
  {
    id: 3,
    number: 4,
    title: "Activate account",
    description: "Final step! Let’s activate your account.",
  },
];

interface SidebarProps {
  currentStep: number;
  onStepClick: (stepId: number) => void;
  stepStatus?: Record<number, "valid" | "invalid" | "untouched">;
}

export const Sidebar = ({
  currentStep,
  onStepClick,
  stepStatus = {},
}: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Logosvg />
        <div className={styles.title}>brix templates</div>
      </div>

      <div className={styles.steps}>
        {steps.map((step, index) => {
          const status = stepStatus[step.id] || "untouched";
          const isActive = currentStep === step.id;
          const isCompleted = status === "valid" && !isActive;
          const isDisabled = step.id > currentStep + 1;

          return (
            <div key={step.id}>
              <div className={styles.steps_item}>
                <div
                  className={clsx(styles.steps_number, {
                    [styles.steps_number_active]: isActive,
                    [styles.steps_number_completed]: isCompleted,
                    [styles.steps_number_error]:
                      status === "invalid" && isActive,
                    [styles.steps_number_disabled]: isDisabled,
                  })}
                  onClick={() => {
                    if (!isDisabled) {
                      onStepClick(step.id);
                    }
                  }}
                  style={{
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    opacity: isDisabled ? 0.5 : 1,
                  }}
                >
                  {isCompleted ? "✓" : step.number}
                </div>

                <div className={styles.steps_text}>
                  <div className={styles.steps_title}>{step.title}</div>
                  <div className={styles.steps_description}>
                    {step.description}
                  </div>

                  {isCompleted && (
                    <span className={styles.status_valid}> Заполнено</span>
                  )}
                  {status === "invalid" && isActive && (
                    <span className={styles.status_error}></span>
                  )}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={clsx(styles.line, {
                    [styles.line_100]: isCompleted || step.id < currentStep,
                    [styles.line_0]: step.id >= currentStep && !isCompleted,
                    [styles.line_50]: isActive,
                  })}
                />
              )}
            </div>
          );
        })}
      </div>

      <Feedback />
    </div>
  );
};
