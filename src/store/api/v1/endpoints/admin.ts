import { LectureType, StudentType } from "@/types/accounts";
import { api } from "..";
const studentEndPoint = api.injectEndpoints({
  endpoints: (builder) => ({
    //#region Students
    createStudent: builder.mutation({
      query: (body: StudentType) => ({
        url: "admin/students/create-account",
        method: "POST",
        body,
      }),
    }),
    importStudents: builder.mutation({
      query: (body: { file: FormData }) => ({
        url: "admin/students/import-data",
        method: "POST",
        body,
      }),
    }),
    // updateStudent: builder.mutation({
    //   query: (body: Partial<StudentType>) => ({
    //     url: "admin/students/update",
    //     method: "PUT",
    //     body,
    //   }),
    // }),
    // deleteStudent: builder.mutation({
    //   query: (id: number) => ({
    //     url: `admin/students/delete/${id}`,
    //     method: "DELETE",
    //   }),
    // }),
    //#endregion

    //#region Lecturers
    createLecture: builder.mutation({
      query: (body: LectureType) => ({
        url: "admin/teachers/create-account",
        method: "POST",
        body,
      }),
    }),
    importLectures: builder.mutation({
      query: (body: { file: FormData }) => ({
        url: "admin/teachers/import-data",
        method: "POST",
        body,
      }),
    }),
    // #endregion
  })
});

export const {
  useCreateStudentMutation,
  useImportStudentsMutation,

  useCreateLectureMutation,
  useImportLecturesMutation,
} = studentEndPoint;