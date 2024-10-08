
import { setBreadCrumb } from "@/store/slice/app";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { columns } from "./components/columns";
import { DataTable } from "./components/table";

const Topics: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadCrumb([
        { title: "Home", link: "/" },
        { title: "Topics", link: "/topics" },
      ])
    );
  }, [dispatch]);

  return <DataTable columns={columns} />;
};

export default Topics;
