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
}

export const Sidebar = ({ currentStep, onStepClick }: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Logosvg />
        <div className={styles.title}>brix templates</div>
      </div>

      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div key={step.id}>
            <div className={styles.steps_item}>
              <div
                className={clsx(styles.steps_number, {
                  [styles.steps_number_active]: currentStep === step.id,
                })}
                onClick={() => onStepClick(step.id)}
              >
                {step.number}
              </div>
              <div className={styles.steps_text}>
                <div className={styles.steps_title}>{step.title}</div>
                <div className={styles.steps_description}>
                  {step.description}
                </div>
              </div>
            </div>

            {/* Линия между шагами (кроме последнего) */}
            {index < steps.length - 1 && (
              <div
                className={clsx(styles.line, {
                  [styles.line_100]: currentStep >= step.number,
                  [styles.line_0]: currentStep < step.number,
                  [styles.line_50]: currentStep === step.id && step.id !== 0,
                })}
              />
            )}
          </div>
        ))}
      </div>

      <Feedback />
    </div>
  );
};
