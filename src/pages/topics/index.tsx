import { setBreadCrumb } from "@/store/slice/app";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { columns } from "./components/columns";
import { DataTable } from "./components/table";
import { Button } from "@/components/ui/button";
import { GoPlus } from "react-icons/go";
import CreateUpdateModal from "./components/CreateUpdateModal";

const Topics: React.FC = () => {
  const dispatch = useDispatch();
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

  useEffect(() => {
    dispatch(
      setBreadCrumb([
        { title: "Home", link: "/" },
        { title: "Topics", link: "/topics" },
      ])
    );
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-end">
        <Button
          variant="outline"
          className="ml-1"
          onClick={() => setIsModalCreateOpen(true)}
        >
          <GoPlus className="h-4 w-4" />
        </Button>
        {isModalCreateOpen && (
          <CreateUpdateModal
            open={isModalCreateOpen}
            onCancel={() => setIsModalCreateOpen(false)}
          />
        )}
      </div>
      <DataTable columns={columns} />
    </>
  );
};

export default Topics;
