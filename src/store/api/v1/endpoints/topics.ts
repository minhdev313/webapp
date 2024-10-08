import { Topic } from "@/types/topic";
import { api } from "..";
export interface GetTopicsResponse {
  code: number;
  data: {
    items: Topic[];
    meta: {
      current_page: number;
      total: number;
    };
  };
  message: boolean;
}
const topicApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTopics: builder.query<GetTopicsResponse, { limit?: number; page?: number }>({
      query: ({ limit = 10, page = 1 }) => ({
        url: '/topic_references/',
        params: { limit, page },
      }),
      providesTags: ["Topic"],
    }),
  }),
});

export const { useGetTopicsQuery } = topicApi;
