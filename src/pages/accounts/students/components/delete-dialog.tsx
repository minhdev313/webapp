import { ActionDialog } from "@/components/custom/action-dialog";
import { StudentType } from "@/types/accounts";
import React from "react";

const DeleteDialog: React.FC<{
  student: StudentType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}> = ({ student, open, onOpenChange }) => {

  const handleDelete = async () => {
    // await deleteStudentMutation({ id: student.id });
    // if (data.isSuccess) {
      // onOpenChange(false);
      // TODO: Update the table
    // }
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
      {`Are you sure you want to delete the student "${student.name}" with ID ${student.id}?`}
    </ActionDialog>
  );
};

export default DeleteDialog;
