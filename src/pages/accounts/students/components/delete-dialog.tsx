import { ActionDialog } from "@/components/custom/action-dialog";
import { useToast } from "@/components/ui/use-toast";
import { useDeleteStudentMutation } from "@/store/api/v1/endpoints/admin";
import { StudentType } from "@/types/accounts";
import React from "react";

const DeleteDialog: React.FC<{
  student: StudentType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}> = ({ student, open, onOpenChange }) => {
  const { toast } = useToast();
  const [deleteStudentMutation, data] = useDeleteStudentMutation();

  const handleDelete = async () => {
    if (student && student.id) {
      await deleteStudentMutation({ id: student.id });
      if (data.isSuccess) {
        toast({
          duration: 1000,
          title: "Delete student",
          description: "Delete student successfully.",
        });
        onOpenChange(false);
      }

      if (data.isError) {
        toast({
          duration: 1000,
          variant: "destructive",
          title: "Delete student",
          description:
            "Something went wrong, please try again. If the problem persists, please contact the administrator.",
        });
      }
    }
  };

  return (
    <ActionDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Delete student"
      danger
      cancelButton
      okButton={{ label: "Delete student", onClick: handleDelete }}
      confirmText="I understand that this action cannot be undone and all the student will be also removed from the student."
    >
      {`Are you sure you want to delete the student "${student.name} (${student.code})" ?`}
    </ActionDialog>
  );
};

export default DeleteDialog;
