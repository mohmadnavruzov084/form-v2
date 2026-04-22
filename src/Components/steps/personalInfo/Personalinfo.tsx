import { Button } from "@/components/ui/button/button";
import styles from "./Personalinfo.module.scss";
import {
  Control,
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Inputcontroller } from "@/module/inputController";
import { METHODS } from "http";
import { HookformProvider, IForm } from "@/module/hookFormProvider";


export const Personalinfo = () => {
  const { formState, handleSubmit, register } = useFormContext<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  const fullNameError = formState.errors["full name"]?.message;
  const emaliError = formState.errors["email"]?.message;
  return (
    <>
   
        <div className={styles.formRegistration}>
          <h1 className={styles.formRegistration_title}>
            Personal information
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form_item}>
              <div className={styles.form_box}>
                <label htmlFor="">
                  Full name <span className={styles.redStar}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Exp. John Carter"
                  {...register("full name", {
                    required: "Это поле  обязательное",
                  })}
                />
                {fullNameError && (
                  <p style={{ color: "red", fontSize: 11 }}>{fullNameError}</p>
                )}
              </div>

              <div className={styles.form_box}>
                <label htmlFor="">
                  Email<span className={styles.redStar}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Это поле  обязательнное",
                    pattern: {
                      value: /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,4}$/i,
                      message: "Не правильный email адрес",
                    },
                  })}
                />
                {emaliError && (
                  <p style={{ color: "red", fontSize: 11 }}>{emaliError}</p>
                )}
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
                  className={styles.longInput}
                />
              </div>
            </div>
            <Inputcontroller control={control} />
            <Button />
          </form>
        </div>
    
    </>
  );
};
