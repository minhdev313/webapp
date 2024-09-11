import { api } from "..";
import { ForgotPasswordType, SignInType } from "@/types";

const authEndPoint = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (body: SignInType) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body: ForgotPasswordType) => ({
        url: "/forgot-password",
        method: "POST",
        body
      }),
    }),
  }),
});

export const { useSignInMutation, useForgotPasswordMutation } = authEndPoint;
