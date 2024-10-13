import { TopicType } from "@/types/topic";
import { api } from "..";
export interface GetTopicsResponse {
  code: number;
  data: {
    items: TopicType[];
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
    createTopic: builder.mutation<void, {name: string, path: string}>({
      query: (data) => ({
        url: '/topic_references/teachers',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ["Topic"],
    }),
    updateTopic: builder.mutation<void, {id: number, name: string, path: string}>({
      query: (data) => ({
        url: `/topic_references/teachers`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ["Topic"],
    }),
    deleteTopic: builder.mutation<void, { id: number }>({
      query: ({ id }) => ({
        url: `/topic_references/teachers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Topic"],
    }),
  }),
});

export const {
  useGetTopicsQuery,
  useDeleteTopicMutation,
  useCreateTopicMutation,
  useUpdateTopicMutation
} = topicApi;
