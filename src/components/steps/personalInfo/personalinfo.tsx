import { Button } from "@/components/ui/button/button";
import styles from "./personalinfo.module.scss";
import { InputController } from "@/module/inputController";
import { SubmitHandler, useFormContext } from "react-hook-form";

export const Personalinfo = () => {
  const { handleSubmit } = useFormContext();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className={styles.formRegistration}>
        <h1 className={styles.formRegistration_title}>Personal information</h1>
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
              <InputController name="fullName" placeholder="Exp. John Carter" />
            </div>
            <div className={styles.form_box}>
              <label htmlFor="">
                Email<span className={styles.redStar}>*</span>
              </label>
              <InputController name="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className={styles.form_item}>
            <div className={styles.form_box}>
              <label htmlFor="">
                Phone number<span className={styles.redStar}>*</span>
              </label>
              <InputController
                name="phoneNumber"
                placeholder="(123) 000-0000"
              />
            </div>
            <div className={styles.form_box}>
              <label htmlFor="">
                Company<span className={styles.redStar}>*</span>
              </label>
              <InputController name="company" placeholder="Exp. Companay" />
            </div>
          </div>
          <div className={styles.form_item}>
            <div className={styles.form_box}>
              <label htmlFor="">
                Address <span className={styles.redStar}>*</span>
              </label>
              <InputController
                name="Address"
                placeholder="Exp. San Francisco, CA"
                className={styles.longinput}
              />
            </div>
          </div>
          <div className={styles.form_buttonWrapper}>
            <Button />
          </div>
        </form>
      </div>
    </>
  );
};
