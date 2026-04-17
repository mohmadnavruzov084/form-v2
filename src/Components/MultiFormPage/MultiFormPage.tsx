import "./MultiFormPage.scss";
import { Personalinfo } from "../steps/Personal-info/Personalinfo";
import { Sidebar } from "../ui/sidebar/sidebar";
export const MultiFormPage = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Personalinfo />
      </div>
    </>
  );
};
