import { ActionDialog } from "@/components/custom/action-dialog";
import { useDeleteTopicMutation } from "@/store/api/v1/endpoints/topics";
import { TopicType } from "@/types/topic";
import React from "react";

const DeleteDialog: React.FC<{
  topic: TopicType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}> = ({ topic, open, onOpenChange }) => {
  const [deleteTopicMutation, data] = useDeleteTopicMutation();

  const handleDelete = async () => {
    await deleteTopicMutation({ id: topic.id });
    if (data.isSuccess) {
      onOpenChange(false);
      //TODO: Update the table
    }
  };

  return (
    <ActionDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Delete topic"
      danger
      cancelButton
      okButton={{ label: "Delete topic", onClick: handleDelete }}
      confirmText="I understand that this action cannot be undone and all the topic members will be also removed from the topic."
    >
      {`Are you sure you want to delete the topic "${topic.name}" with ID ${topic.id}?`}
    </ActionDialog>
  );
};

export default DeleteDialog;
