import { Button } from "@/components/ui/button/button";
import styles from "./personalinfo.module.scss";
import { ControlledInput } from "@/module/controlledInput";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useUserDataStore } from "@/store/userStore";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  company: string;
  address: string;
}

export const Personalinfo = ({ onNext }: { onNext: () => void }) => {
  const { handleSubmit } = useFormContext<FormData>();
  const { setUser } = useUserDataStore();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    setUser(data);
    onNext();
  };
  return (
    <>
      <div className={styles.formRegistration}>
        <div className={styles.formRegistration_title}>
          Personal information
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="#"
          className={styles.form}
        >
          <div className={styles.form_item}>
            <div className={styles.form_box}>
              <label htmlFor="">
                Full name <span className={styles.redStar}>*</span>
              </label>
              <ControlledInput name="fullName" placeholder="Exp. John Carter" />
            </div>
            <div className={styles.form_box}>
              <label htmlFor="">
                Email<span className={styles.redStar}>*</span>
              </label>
              <ControlledInput name="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className={styles.form_item}>
            <div className={styles.form_box}>
              <label htmlFor="">
                Phone number<span className={styles.redStar}>*</span>
              </label>
              <ControlledInput
                name="phoneNumber"
                placeholder="(123) 000-0000"
              />
            </div>
            <div className={styles.form_box}>
              <label htmlFor="">
                Company<span className={styles.redStar}>*</span>
              </label>
              <ControlledInput name="company" placeholder="Exp. Companay" />
            </div>
          </div>
          <div className={styles.form_item}>
            <div className={styles.form_box}>
              <label htmlFor="">
                Address <span className={styles.redStar}>*</span>
              </label>
              <ControlledInput
                name="address"
                placeholder="Exp. San Francisco, CA"
                className={styles.longinput}
              />
            </div>
          </div>
          <div className={styles.form_buttonWrapper}>
            <Button onClick={onNext}> Continue</Button>
          </div>
        </form>
      </div>
    </>
  );
};
