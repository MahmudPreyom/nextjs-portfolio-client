import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/api/projects",
    }),
    // getSingleProject: builder.query({
    //   query: (id) => {
    //     const params = new URLSearchParams(id);
    //     return {
    //       url: `/api/projects/singleProject/${id}`,
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProjectsQuery } = projectApi;
