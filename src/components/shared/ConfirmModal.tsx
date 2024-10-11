import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { ReloadIcon } from "@radix-ui/react-icons";

type ConfirmModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  confirmButtonText: string;
  onCancel: () => void;
  onConfirm: () => void;
  isDangerous?: boolean;
  isConfirming?: boolean;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title,
  description,
  confirmButtonText,
  onCancel,
  onConfirm,
  isDangerous = false,
  isConfirming = false,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onCancel}>
      <DialogContent>
        <div className="flex justify-between items-center">
          <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
        </div>
        <DialogDescription className="text-gray-700 mt-2">
          {description}
        </DialogDescription>

        <div className="flex justify-end mt-4 space-x-3">
          <Button variant={"secondary"} onClick={onCancel}>
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            variant={isDangerous ? "destructive" : "default"}
          >
            {isConfirming && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            {confirmButtonText || "Confirm"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModal;
