import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FormPage } from "./pages/formPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormPage />
  </StrictMode>,
);
