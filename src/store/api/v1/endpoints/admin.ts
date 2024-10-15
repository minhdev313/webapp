import { LectureType, StudentType, UserType, UserTypes } from "@/types/accounts";
import { api } from "..";

interface UsersResponse {
  code: number;
  message: boolean;
  data: {
    common_info: UserType;
    extra_info: {
      student?: StudentType;
      lecture?: LectureType;
    }
  }[]
}

const studentEndPoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, { limit?: number; page?: number; user_types?: UserTypes }>({
      query: ({ limit = 10, page = 1, user_types }) => ({
        url: 'admin/users/',
        params: { limit, page, user_types },
      }),
    }),

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
  useGetUsersQuery,

  useCreateStudentMutation,
  useImportStudentsMutation,

  useCreateLectureMutation,
  useImportLecturesMutation,
} = studentEndPoint;
