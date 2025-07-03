import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["books", "borrows"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books?limit=100",
      providesTags: ["books"],
    }),

    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    updateBook: builder.mutation({
      query: (data) => ({
        url: `/books/${data._id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),

    deleteBook: builder.mutation({
      query: (data) => ({
        url: `/books/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    getBorrowSummary: builder.query({
      query: () => "/borrow",
      providesTags: ["borrows"],
    }),

    borrowBook: builder.mutation({
      query: (data) => ({
        url: "/borrow",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["borrows"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetBorrowSummaryQuery,
  useBorrowBookMutation,
} = baseApi;
