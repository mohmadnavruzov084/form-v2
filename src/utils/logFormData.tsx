import { UseFormReturn } from "react-hook-form";

export const logFormData = (form: UseFormReturn) => {
  const allFormData = form.getValues();
  console.log("=== ФИНАЛЬНЫЕ ДАННЫЕ ФОРМЫ ===");
  console.log(allFormData);
  console.log("==============================");
};
