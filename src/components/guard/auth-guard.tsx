import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUserInfo, saveUserInfo } from "@/store/slice/auth";
import { useLocation, useNavigate } from "react-router";
import useNetworkDetect from "@/hooks/useNetworkDetect";
import { NetworkError } from "@/components";
import { getCookie } from "typescript-cookie";
import { ChildrenType } from "@/types";

const AuthGuardComponent: React.FC<ChildrenType> = ({ children }) => {
  const token = useSelector((state: any) => state?.auth?.token);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOnline } = useNetworkDetect();

  // Checking Authentication
  const checkAuth = () => {
    const isAuth = getCookie("token") ? true : false;
    if (!isAuth) {
      if (location.pathname.includes("/auth")) {
        return;
      }

      navigate("/auth/sign-in");
      dispatch(removeUserInfo());
    } else {
      dispatch(saveUserInfo({ token: getCookie("token") }));
      // Redirect Back Home is Auth Layout
      if (location.pathname.includes("/auth")) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, [token]);

  return <div>{isOnline ? children : <NetworkError />}</div>;
};

export default AuthGuardComponent;
