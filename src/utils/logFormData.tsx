import { UseFormReturn, FieldValues } from "react-hook-form";

export const logFormData = <T extends FieldValues>(form: UseFormReturn<T>) => {
  const allFormData = form.getValues();
  console.log("=== ФИНАЛЬНЫЕ ДАННЫЕ ФОРМЫ ===");
  console.log(allFormData);
  console.log("==============================");
};
