import { LectureType, StudentType } from "@/types/accounts";
import * as yub from "yup";

export const studentSchema: yub.ObjectSchema<StudentType> = yub.object({
  code: yub.string().required("Code field is required"),
  email: yub.string().email("Email is invalid").required("Email field is required"),
  name: yub.string().required("Name field is required"),
  phone_number: yub.string().required("Phone number field is required"),
  sub_major_id: yub.number().required("Sub major field is required"),
});

export const lectureSchema: yub.ObjectSchema<LectureType> = yub.object({
  email: yub.string().email("Email is invalid").required("Email field is required"),
  name: yub.string().required("Name field is required"),
  phone_number: yub.string().required("Phone number field is required"),
  sub_major_id: yub.number().required("Sub major field is required"),
});