import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TopicType } from "@/types/topic";
import { ReloadIcon } from "@radix-ui/react-icons";
import { ErrorMessage, Form, Formik } from "formik";
interface CreateUpdateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  topic?: TopicType;
}

const CreateUpdateDialog: React.FC<CreateUpdateDialogProps> = ({
  topic,
  open,
  onOpenChange,
}) => {
  const initialValues: Partial<TopicType> = {
    name: topic?.name || "",
    path: topic?.path || "",
    teacher: topic?.teacher,
  };

  const handleForm = async (values: Partial<TopicType>) => {
    if (topic) {
      // Update topic
      console.log("Update topic", values);
    } else {
      // Create topic
      console.log("Create topic", values);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{topic ? "Update Topic" : "Create Topic"}</DialogTitle>
          <DialogDescription>
            Make changes to your topic here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Formik initialValues={initialValues} onSubmit={handleForm}>
          {({ values, handleBlur, handleChange, isSubmitting }) => (
            <Form className=" flex flex-col gap-3 ">
              <div className="flex flex-col gap-2 ">
                <Label htmlFor="code">Name</Label>
                <Input
                  name="name"
                  id="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter name"
                />
                <ErrorMessage
                  name="name"
                  component={"div"}
                  className="text-sm text-danger"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <Label htmlFor="code">Path</Label>
                <Input
                  name="path"
                  id="path"
                  value={values.path}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter path"
                />
                <ErrorMessage
                  name="path"
                  component={"div"}
                  className="text-sm text-danger"
                />
              </div>
              <DialogFooter>
                <Button
                  variant="secondary"
                  onClick={() => {
                    onOpenChange(false);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {topic ? "Update" : "Create"}
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUpdateDialog;
