import { Button, Unstable_Grid2 as Grid } from "@mui/material"
import moment from "moment"
import { FC } from "react"
import { Link } from "react-router-dom"
import { IStudent } from "../../models/IStudent"
import { studentsAPI } from "../../services/StudentService"
import { useAppDispatch } from "../../store/hooks/redux"
import { handleModal, handleSnackbar } from "../../store/reducers/ModalWindowsSlice"
import { editStudent } from "../../store/reducers/StudentSlice"
import InfoBox from "./InfoBox"
import { Card, CardContent, CardImage } from "./Styled"

type StudentCardProps = {
  student: IStudent
}
const StudentCard: FC<StudentCardProps> = ({ student }) => {
  const { id, name, avatar, isFeePaid, signingDate } = student
  const dispatch = useAppDispatch()

  const [deleteStudent] = studentsAPI.useDeleteStudentMutation()

  const convertedSigningDate = moment(new Date(signingDate)).format("YYYY-MM-DD")

  const onModalOpen = () => {
    dispatch(handleModal(true))
    dispatch(editStudent(student))
  }

  const onStudentDelete = async () => {
    try {
      await deleteStudent(id).unwrap()
      dispatch(handleSnackbar({ state: true, isError: false }))
    } catch (error) {
      dispatch(handleSnackbar({ state: true, isError: true }))
    }
  }

  return (
    <Card>
      <Grid container columns={24} spacing={{ xs: 2, sm: 5 }}>
        <Grid xs={24} sm={11}>
          <CardImage component={"img"} image={avatar} alt={`${name} avatar`} />
        </Grid>
        <Grid xs={24} sm={13}>
          <CardContent>
            <InfoBox label='Name' value={name} />
            <InfoBox label='Sign In Date' value={convertedSigningDate} />
            <InfoBox label='Payment Status' value={isFeePaid ? "Paid" : "Unpaid"} />
          </CardContent>
        </Grid>
        <Grid xs={24} sm={11}>
          <Button
            variant='text'
            size='small'
            color='secondary'
            sx={{ textDecoration: "underline" }}
            component={Link}
            to={`student/${id}`}
          >
            View All Details
          </Button>
        </Grid>
        <Grid xs={24} sm={13} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant='outlined' size='small' color='secondary' onClick={onModalOpen}>
            Edit Info
          </Button>
          <Button variant='contained' size='small' color='primary' onClick={onStudentDelete}>
            Delete Profile
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default StudentCard
