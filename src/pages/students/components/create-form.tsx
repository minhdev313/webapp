import { FileUploader } from "@/components/common/file-upload";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
interface CreateModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  type: "form" | "sheet";
}

const CreateModal: React.FC<CreateModalProps> = ({ open, setOpen, type }) => {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Create Students</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        {type === "form" && (
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
          </div>
        )}
        {type === "sheet" && (
          <div className="grid gap-4 py-4">
            <FileUploader
              maxFileCount={1}
              maxSize={8 * 1024 * 1024}
              onValueChange={setFiles}
              accept={{
                "sheet": [".csv", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel"],
              }}
            />
          </div>
        )}
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateModal;
