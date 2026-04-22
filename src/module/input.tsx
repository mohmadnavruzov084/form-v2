import { Control, Controller, useFormContext } from "react-hook-form";
import { IForm } from "./hookFormProvider";

export const Input = () => {
  const { control } = useFormContext<IForm>();
  return (
    <>
      <Controller
        control={control}
        name="in"
        render={({ field }) => (
          <div className={className}>
            <label htmlFor="">{label}</label>
            <input type="text" placeholder={placeholder} />
            {error && (
              <p style={{ color: "red", fontSize: 11 }}>{error.message}</p>
            )}
          </div>
        )}
      />
    </>
  );
};
