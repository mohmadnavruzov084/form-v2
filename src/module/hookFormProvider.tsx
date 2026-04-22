import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface IForm {
  "full name": string;
  email: string;
  "phone number": number;
  company: string;
  address: string;
  message: string;
  control: string;
}

export const HookformProvider = ({ children }: PropsWithChildren) => {
      const methods = useForm<IForm>({
        mode: "onChange",
      });
  return  (<FormProvider {...methods}></FormProvider>{children}</FormProvider>);
};
