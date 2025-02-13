import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/api/blogs",
    }),
    getSingleBlog: builder.query({
      query: (id) => {
        const params = new URLSearchParams(id);
        return {
          url: `/api/blogs/singleBlog/${id}`,
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBlogsQuery, useGetSingleBlogQuery } = baseApi;
