import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setBreadCrumb } from "@/store/slice/app";
import { useEffect, useState } from "react";
import { FaWpforms } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { LuFileSpreadsheet } from "react-icons/lu";
import { useDispatch } from "react-redux";
import CreateUpdateDialog from "./components/create-update-dialog";
import { StudentsTable } from "./components/table";
import UploadSheetDialog from "./components/upload-sheet-dialog";

const Students = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadCrumb([
        { title: "Home", link: "/" },
        { title: "Accounts", link: "/accounts" },
        { title: "Students", link: "/accounts/students" },
      ])
    );
  }, [dispatch]);

  function openModalCreateStudent(value: string): void {
    setModalType(value);
    setIsModalOpen(true);
  }
  return (
    <>
      <div className="flex justify-end mb-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-1">
              <GoPlus className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Create Students</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup onValueChange={openModalCreateStudent}>
              <DropdownMenuRadioItem value="form">
                <FaWpforms className="mr-1" />
                Form
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="sheet">
                <LuFileSpreadsheet className="mr-1" />
                Sheets
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        {modalType === "form" ? (
          <CreateUpdateDialog
            open={isModalOpen}
            onOpenChange={setIsModalOpen}
          />
        ) : (
          <UploadSheetDialog open={isModalOpen} onOpenChange={setIsModalOpen} />
        )}
      </div>
      <StudentsTable />
    </>
  );
};

export default Students;
