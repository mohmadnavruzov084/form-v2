import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FormPage } from "./pages/FormPage";
import { Input } from "./module/input";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Input><FormPage /></Input>
   
  </StrictMode>,
);
