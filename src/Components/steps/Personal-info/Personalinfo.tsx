import { Button } from "@/Components/ui/button/button";
import styles from "./Personalinfo.module.scss";
export const Personalinfo = () => {
  return (
    <>
      <div className={styles.formRegistration}>
        <h1 className={styles.formRegistration_title}>Personal information</h1>
        <form action="#" className={styles.form}>
          <div className={styles.form_item}>
            <div className={styles.form_box}>
              <label htmlFor="">
                Full name <span className={styles.redStar}>*</span>
              </label>
              <input type="text" placeholder="Exp. John Carter" />
            </div>
            <div className={styles.form_box}>
              <label htmlFor="">
                Email<span className={styles.redStar}>*</span>
              </label>
              <input type="text" placeholder="Enter your email" />
            </div>
          </div>
          <div className={styles.form_item}>
            <div className={styles.form_box}>
              <label htmlFor="">
                Phone number<span className={styles.redStar}>*</span>
              </label>
              <input type="text" placeholder="(123) 000-0000" />
            </div>
            <div className={styles.form_box}>
              <label htmlFor="">
                Company<span className={styles.redStar}>*</span>
              </label>
              <input type="text" placeholder="Exp. Companay" />
            </div>
          </div>
          <div className={styles.form_item}>
            <div className={styles.form_box}>
              <label htmlFor="">
                Address <span className={styles.redStar}>*</span>
              </label>
              <input
                type="text"
                placeholder="Exp. San Francisco, CA"
                className={styles.longinput}
              />
            </div>
          </div>
          <Button />
        </form>
      </div>
    </>
  );
};
