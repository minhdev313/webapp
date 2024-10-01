import SemesterFilter from "@/components/shared/SemesterFilter";
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
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import FormModal from "./components/FormModal";
import SheetModal from "./components/SheetModal";

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
  // TODO: Implement the useGetStudentsQuery hook
  // const { data, isLoading } = useGetStudentsQuery({});
  // if (isLoading) {
  //   return (
  //     <div className=" flex justify-center pt-10">
  //       <div className=" w-[250px] ">
  //         <LoadingLottie />
  //       </div>
  //     </div>
  //   );
  // } else {
  return (
    <div>
      <div className="flex justify-between">
        <SemesterFilter />
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
          <FormModal open={isModalOpen} setOpen={setIsModalOpen} />
        ) : (
          <SheetModal open={isModalOpen} setOpen={setIsModalOpen} />
        )}
      </div>
      <DataTable columns={columns} data={[]} />
    </div>
  );
  // }
};

export default Students;
