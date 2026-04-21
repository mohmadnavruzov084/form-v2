import styles from "./MultiFormPage.module.scss";
import { Personalinfo } from "../steps/personalInfo/Personalinfo";
import { Sidebar } from "../ui/sidebar/sidebar";
export const MultiFormPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <Personalinfo />
      </div>
    </>
  );
};
