import { InputPassword, PageNotFoundError } from "@/components";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useTheme } from "@/services/providers/theme-provider";
import { resetPasswordSchema } from "@/services/schemas";
import { useResetPasswordMutation } from "@/store/api/v1/endpoints/auth";
import { ResetPasswordType } from "@/types";
import { ReloadIcon } from "@radix-ui/react-icons";
import { ErrorMessage, Form, Formik, FormikHelpers } from "formik";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./components/logo";
import MobileLogo from "./components/mobile-logo";

const ResetPassword: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const [resetPassword, resetPasswordData] = useResetPasswordMutation();

  const initialValues: ResetPasswordType = {
    password: "",
    token: token || "",
  };

  const handleSubmit = async (
    values: ResetPasswordType,
    action: FormikHelpers<ResetPasswordType>
  ) => {
    await resetPassword(values);
  };

  useEffect(() => {
    const isSuccess = resetPasswordData?.isSuccess;
    if (isSuccess) {
      navigate("/auth/sign-in");
    }

    if (resetPasswordData?.data) {
      toast({
        duration: 1000,
        variant: "default",
        title: "Reset Password",
        description: "Reset Password Successfully.",
      });
    }
    if (resetPasswordData?.error) {
      toast({
        duration: 1000,
        variant: "destructive",
        title: "Reset Password",
        description:
          "Something went wrong, please try again. If the problem persists, please contact the administrator.",
      });
    }
  }, [resetPasswordData]);

  if (!token) {
    return <PageNotFoundError />;
  }


  return (
    <div className=" w-screen h-screen flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center items-center">
      <Logo />
      <div className=" lg:basis-1/2 dark:bg-white dark:text-dark flex flex-col justify-center lg:flex-row items-center h-screen ">
        <div className=" lg:w-7/12 w-screen px-4 lg:mt-0 lg:px-0 mx-auto ">
          <MobileLogo />
          <div className=" text-2xl mb-6 ">Reset Password</div>
          <Formik
            initialValues={initialValues}
            validationSchema={resetPasswordSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleBlur, handleChange, isSubmitting }) => (
              <Form className=" flex flex-col gap-3 ">
                <div className="flex flex-col gap-2 ">
                  <Label htmlFor="password">New Password</Label>
                  <InputPassword
                    name="password"
                    id="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="******"
                  />
                  <ErrorMessage
                    name="password"
                    component={"div"}
                    className="text-sm text-danger"
                  />
                </div>
                <Button
                  type="submit"
                  variant={theme == "light" ? "default" : "secondary"}
                  disabled={isSubmitting}
                  className=" w-full "
                >
                  {isSubmitting && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Reset Password
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
