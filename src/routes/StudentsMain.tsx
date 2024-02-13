import { Container } from "@mui/material"
import { useEffect } from "react"
import ErrorComponent from "../components/ErrorComponent"
import MainHead from "../components/MainHead"
import StudentsList from "../components/StudentsList"
import { studentsAPI } from "../services/StudentService"
import { useAppDispatch, useAppSelector } from "../store/hooks/redux"
import { handleSnackbar } from "../store/reducers/ModalWindowsSlice"
import { selectStudents } from "../store/selectors"

const StudentsMain = () => {
  const { isError, isLoading } = studentsAPI.useFetchAllStudentsQuery()
  const dispatch = useAppDispatch()
  const students = useAppSelector(selectStudents)

  useEffect(() => {
    if (isError) {
      dispatch(handleSnackbar({ state: true, isError: true }))
    }
  }, [isError, dispatch])

  return (
    <Container maxWidth={false} disableGutters sx={{ backgroundColor: "#202A38" }}>
      <Container disableGutters maxWidth={"lg"} sx={{ minHeight: "100vh" }}>
        {students?.length > 0 && (
          <>
            <MainHead />
            <StudentsList students={students} />
          </>
        )}
        {!(students?.length > 0) && !isLoading && <ErrorComponent />}
      </Container>
    </Container>
  )
}
export default StudentsMain
