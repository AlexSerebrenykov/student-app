import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IStudent } from "../models/IStudent"

type InvalidateOnType<T> = {
  success: T[]
  error?: T[]
}

function invalidateOn<T>({ success = [], error = [] }: InvalidateOnType<T>) {
  return (result: unknown) => (result ? success : error)
}

export const studentsAPI = createApi({
  reducerPath: "studentAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["Students", "SingleStudent"],
  endpoints: build => ({
    fetchAllStudents: build.query<IStudent[], void>({
      query: () => ({
        url: "/students",
      }),
      providesTags: () => ["Students"],
    }),
    fetchSingleStudent: build.query<IStudent, IStudent["id"]>({
      query: id => ({
        url: `/students/${id}`,
      }),
      providesTags: () => ["SingleStudent"],
    }),
    createStudent: build.mutation<IStudent, IStudent>({
      query: student => ({
        url: "/students",
        method: "POST",
        body: student,
      }),
      invalidatesTags: invalidateOn({ success: ["Students"] }),
    }),
    updateStudent: build.mutation<IStudent, IStudent>({
      query: student => ({
        url: `/students/${student.id}`,
        method: "PUT",
        body: student,
      }),
      invalidatesTags: invalidateOn({ success: ["Students", "SingleStudent"] }),
    }),
    deleteStudent: build.mutation<IStudent, IStudent["id"]>({
      query: id => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: invalidateOn({ success: ["Students"] }),
    }),
  }),
})
