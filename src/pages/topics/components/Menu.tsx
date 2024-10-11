import ConfirmModal from "@/components/shared/ConfirmModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TopicType } from "@/types/topic";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import CreateUpdateModal from "./CreateUpdateModal";
import { useDeleteTopicMutation } from "@/store/api/v1/endpoints/topics";

interface MenuProps {
  row: Row<TopicType>;
}

const Menu: React.FC<MenuProps> = ({ row }) => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [deleteTopicMutation, data] = useDeleteTopicMutation();

  const handleDelete = async () => {
    await deleteTopicMutation({ id: row.original.id });
    if (data.isSuccess) {
      setIsModalDeleteOpen(false);
      //TODO: Update the table
    }
  };

  const handleCancel = () => {
    setIsModalDeleteOpen(false);
    setIsModalUpdateOpen(false);
  };

  const openDeleteModal = () => {
    setIsDropdownOpen(false);
    setIsModalDeleteOpen(true);
  };

  const openUpdateModal = () => {
    setIsDropdownOpen(false);
    setIsModalUpdateOpen(true);
  };

  return (
    <>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(row.getValue("id"))}
          >
            Copy ID
          </DropdownMenuItem>
          <DropdownMenuItem onClick={openUpdateModal}>Update</DropdownMenuItem>
          <DropdownMenuItem onClick={openDeleteModal} className="text-danger">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {isModalDeleteOpen && (
        <ConfirmModal
          isOpen={isModalDeleteOpen}
          title="Delete Account"
          description="You're going to delete your account. Are you sure?"
          confirmButtonText="Yes, Delete It!"
          onCancel={handleCancel}
          onConfirm={handleDelete}
          isConfirming={data.isLoading}
          isDangerous={true}
        />
      )}
      {isModalUpdateOpen && (
        <CreateUpdateModal
          open={isModalUpdateOpen}
          onCancel={handleCancel}
          topic={row.original}
        />
      )}
    </>
  );
};

export default Menu;
