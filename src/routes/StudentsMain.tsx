import { Container } from "@mui/material"
import ErrorComponent from "../components/ErrorComponent"
import MainHead from "../components/MainHead"
import StudentsList from "../components/StudentsList"
import { useAppSelector } from "../store/hooks/redux"
import { selectLoadingState, selectStudents } from "../store/selectors"

const StudentsMain = () => {
  const students = useAppSelector(selectStudents)
  const isLoading = useAppSelector(selectLoadingState)

  return (
    <Container maxWidth={false} disableGutters sx={{ backgroundColor: "#202A38" }}>
      <Container disableGutters maxWidth={"lg"} sx={{ minHeight: "100vh" }}>
        {students.length > 0 && (
          <>
            <MainHead />
            <StudentsList students={students} />
          </>
        )}
        {!students.length && !isLoading && <ErrorComponent />}
      </Container>
    </Container>
  )
}
export default StudentsMain
