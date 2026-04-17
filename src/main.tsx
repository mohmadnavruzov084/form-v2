import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FormPage } from "./Pages/FormPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormPage />
  </StrictMode>,
);
