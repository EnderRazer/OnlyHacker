import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const logsApi = createApi({
  reducerPath: "logsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_HOST }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getLogs: builder.query({
      query: ({ offset, limit }) => ({ url: "/db", params: { offset, limit } }),
    }),
  }),
});

export const { useGetLogsQuery } = logsApi;
