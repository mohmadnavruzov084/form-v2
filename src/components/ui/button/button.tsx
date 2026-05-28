import clsx from "clsx";
import styles from "./button.module.scss";
export const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={clsx(styles.button, props.className)}>
      {children}
    </button>
  );
};
