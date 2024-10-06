import { AuthGuard, SideBar, TopHeader } from "@/components";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  const isSideBarOpen = useSelector(
    (state: RootState) => state.app.isSideBarOpen
  );
  return (
    <AuthGuard>
      <div className="flex">
        <div className=" hidden lg:block">
          <SideBar />
        </div>
        <main
          className={
            " w-full lg:px-5 px-2 " + (isSideBarOpen ? "lg:ms-60" : "lg:ms-14")
          }
        >
          <TopHeader />
          <div className=" mt-6 ">
            <Outlet />
          </div>
        </main>
      </div>
    </AuthGuard>
  );
};

export default MainLayout;
