import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z as zod } from "zod";

const schema = zod
  .object({
    fullName: zod
      .string()
      .min(2, "Full name must be at least 2 characters")
      .max(100, "Full name must not exceed 100 characters")
      .regex(
        /^[a-zA-Zа-яА-Я\s'-]+$/,
        "Full name can only contain letters, spaces, apostrophes, and hyphens",
      ),

    email: zod
      .string()
      .email("Please enter a valid email address")
      .min(5, "Email must be at least 5 characters")
      .max(255, "Email must not exceed 255 characters"),

    phoneNumber: zod
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(20, "Phone number must not exceed 20 digits")
      .regex(/^[\+\d\s\-\(\)]+$/, "Please enter a valid phone number"),

    company: zod
      .string()
      .min(2, "Company name must be at least 2 characters")
      .max(100, "Company name must not exceed 100 characters")
      .optional()
      .or(zod.literal("")),

    address: zod
      .string()
      .min(5, "Address must be at least 5 characters")
      .max(200, "Address must not exceed 200 characters")
      .optional()
      .or(zod.literal("")),
  })
  .required();

const defaultValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  company: "",
  address: "",
};

export const useMultiForm = () => {
 
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues,
  });
  return form;
};
