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
import { toast } from "@/components/ui/use-toast";
import { studentSchema } from "@/services/schemas/accounts";
import { useCreateStudentMutation } from "@/store/api/v1/endpoints/admin";
import { StudentType } from "@/types/accounts";
import { ReloadIcon } from "@radix-ui/react-icons";
import { ErrorMessage, Form, Formik } from "formik";
import { useEffect } from "react";
interface FormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const FormModal: React.FC<FormProps> = ({ open, setOpen }) => {
  const [createStudent, createStudentData] = useCreateStudentMutation();

  const initialValues: StudentType = {
    code: "DE160260",
    email: "lylcde160260@fpt.edu.vn",
    name: "Le Cong Ly",
    phone_number: "0981234221",
    sub_major_id: 1,
  };

  const handleCreateForm = async (values: StudentType) => {
    await createStudent(values);
  };

  useEffect(() => {
    if (createStudentData.isSuccess) {
      toast({
        duration: 1000,
        variant: "default",
        title: "Create Student",
        description: "Create Student Successfully.",
      });
      setOpen(false);
    }

    if (createStudentData.error) {
      const { data } = createStudentData.error as {
        data?: { code?: number; error?: string };
      };
      const messageError =
        data?.code === 409
          ? data.error
          : "Something went wrong, please try again. If the problem persists, please contact the administrator.";
      toast({
        duration: 1000,
        variant: "destructive",
        title: "Create Student",
        description: messageError,
      });
    }
  }, [createStudentData]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] lg:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Create Students</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={studentSchema}
          onSubmit={handleCreateForm}
        >
          {({ values, handleBlur, handleChange, isSubmitting }) => (
            <Form className=" flex flex-col gap-3 ">
              <div className="flex flex-col gap-2 ">
                <Label htmlFor="code">Code</Label>
                <Input
                  name="code"
                  id="code"
                  value={values.code}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter student's code"
                />
                <ErrorMessage
                  name="code"
                  component={"div"}
                  className="text-sm text-danger"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <Label htmlFor="code">Email</Label>
                <Input
                  name="email"
                  id="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter student's email"
                />
                <ErrorMessage
                  name="email"
                  component={"div"}
                  className="text-sm text-danger"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <Label htmlFor="code">Name</Label>
                <Input
                  name="name"
                  id="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter student's name"
                />
                <ErrorMessage
                  name="name"
                  component={"div"}
                  className="text-sm text-danger"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <Label htmlFor="code">Phone Number</Label>
                <Input
                  name="phone_number"
                  id="phone_number"
                  value={values.phone_number}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter student's phone number"
                />
                <ErrorMessage
                  name="phone_number"
                  component={"div"}
                  className="text-sm text-danger"
                />
              </div>
              <DialogFooter>
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

export default FormModal;
