import { IForm } from "@/components/steps/personalInfo/Personalinfo";

import { Controller, UseFormRegister, Control } from "react-hook-form";

interface IinputProps {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
  type?: string;
  control: Control<IForm>;
  register: UseFormRegister<IForm>;
}

export const Inputcontroller = ({
  name,
  label,
  className,
  placeholder,
  control,
}: IinputProps) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
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
