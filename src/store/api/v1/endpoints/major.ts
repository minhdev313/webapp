import { SubMajor } from "@/services/schemas/major";
import { api } from "..";

interface SubMajorResponse {
 code: number;
  data: {
    items: SubMajor[];
    meta: {
      current_page: number;
      total: number;
    };
  };
  message: boolean;
}

const majorEndPoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getSubMajors: builder.query<SubMajorResponse, { limit?: number; page?: number }>({
      query: ({ limit = 100, page = 1 }) => ({
        url: '/sub-majors/',
        params: { limit, page },
      }),
    }),
  }),
});

export const {
  useGetSubMajorsQuery
} = majorEndPoint;
