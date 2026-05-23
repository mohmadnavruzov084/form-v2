import { Feedback } from "../feedback/feedback";
import { Logosvg } from "../icons/logo";
import styles from "./sidebar.module.scss";
import clsx from "clsx";
import { steps } from "@/steps";
export const Sidebar = ({ currentStep, onStepClick }) => {
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
