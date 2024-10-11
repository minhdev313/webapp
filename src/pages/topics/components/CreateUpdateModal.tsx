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
interface CreateUpdateModalProps {
  open: boolean;
  onCancel: () => void;
  topic?: TopicType;
}

const CreateUpdateModal: React.FC<CreateUpdateModalProps> = ({
  open,
  onCancel,
  topic,
}) => {
  const initialValues = {
    name: topic?.name || "",
    path: topic?.path || "",
    teacher: null,
  };

  const handleForm = async (values) => {
    if(topic) {
      // Update topic
      console.log("Update topic", values);
    }
    else {
      // Create topic
      console.log("Create topic", values);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent className="sm:max-w-[500px] lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{topic ? "Update Topic" : "Create Topic"}</DialogTitle>
          <DialogDescription>
            Make changes to your topic here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Formik
          initialValues={initialValues}
          onSubmit={handleForm}
        >
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
                  placeholder="Enter topic's name"
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
                  placeholder="Enter topic's path"
                />
                <ErrorMessage
                  name="path"
                  component={"div"}
                  className="text-sm text-danger"
                />
              </div>
              <DialogFooter>
                <Button variant="secondary" onClick={onCancel}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Create
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUpdateModal;
