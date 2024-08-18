import { RouteObject } from "react-router-dom";
import { SignIn } from "@/pages";
import { AuthLayout } from "@/layouts";
import SignUp from "@/pages/auth/sign-up";

const AuthRoutes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      }
    ],
  },
];

export default AuthRoutes;
