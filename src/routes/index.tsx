import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"

const Layout = lazy(() => import("../components/Layout"))
const StudentsMain = lazy(() => import("./StudentsMain"))
const ErrorPage = lazy(() => import("./ErrorPage"))
const StudentDetails = lazy(() => import("./StudentDetails"))

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <StudentsMain />,
      },
      {
        path: "student/:id",
        element: <StudentDetails />,
      },
    ],
  },
])

export default router
