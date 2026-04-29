import styles from "./multiFormPage.module.scss";
import { Personalinfo } from "../steps/personalInfo/personalinfo";
import { Sidebar } from "../ui/sidebar/sidebar";
import { FormProvider } from "react-hook-form";
import { useMultiForm } from "../hooks/useMultiForm";
export const MultiFormPage = () => {
  const form = useMultiForm();
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <FormProvider {...form}>
          <Personalinfo />
        </FormProvider>
      </div>
    </>
  );
};
