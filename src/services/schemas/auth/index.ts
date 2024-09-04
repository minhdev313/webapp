import { ForgotPasswordType, SignInType } from "@/types";
import * as yub from "yup";

export const signInSchema: yub.ObjectSchema<SignInType> = yub.object({
  email: yub
    .string()
    .email("Email is invalid")
    .required("Email field is required"),
  password: yub
    .string()
    .required("Password field is required")
    .min(6, "Password must be at least 6 characters"),
});

export const forgotPasswordSchema: yub.ObjectSchema<ForgotPasswordType> = yub.object({
  email: yub
    .string()
    .email("Email is invalid")
    .required("Email field is required"),
});
