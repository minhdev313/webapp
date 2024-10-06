import SemesterFilter from "@/components/shared/SemesterFilter";
import { setBreadCrumb } from "@/store/slice/app";
import React from "react";
import { useDispatch } from "react-redux";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(setBreadCrumb([{ title: "Home", link: "/" }]));

  return (
    <>
      <div>
        <SemesterFilter />
      </div>
    </>
  );
};

export default Dashboard;
