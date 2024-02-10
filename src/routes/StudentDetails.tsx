import { Box, Container } from "@mui/material"
import moment from "moment/moment"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import DetailsBody from "../components/DetailsBody"
import DetailsControls from "../components/DetailsControls"
import ErrorComponent from "../components/ErrorComponent"
import { studentsAPI } from "../services/StudentService"
import { useAppDispatch } from "../store/hooks/redux"
import { handleSnackbar } from "../store/reducers/ModalWindowsSlice"

const StudentDetails = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { data: student, isLoading, isError } = studentsAPI.useFetchSingleStudentQuery(id as string)
  const convertedSigningDate = moment(student?.signingDate).format("Do MMMM YYYY")
  const bodyStudent = { ...student, signingDate: convertedSigningDate }

  useEffect(() => {
    if (isError) {
      dispatch(handleSnackbar({ state: true, isError: true }))
    }
  }, [isError, dispatch])

  return (
    <Container maxWidth={false} sx={{ height: "100vh", padding: "20px" }}>
      {student && (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <DetailsBody {...bodyStudent} />
          <DetailsControls student={student} />
        </Box>
      )}
      {!student && !isLoading && <ErrorComponent type={"details"} />}
    </Container>
  )
}

export default StudentDetails
