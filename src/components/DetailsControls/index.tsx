import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { IStudent } from "../../models/IStudent"
import { studentsAPI } from "../../services/StudentService"
import { useAppDispatch } from "../../store/hooks/redux"
import { handleModal, handleSnackbar } from "../../store/reducers/ModalWindowsSlice"
import { editStudent } from "../../store/reducers/StudentSlice"

type DetailsControlsProps = Partial<{
  student: IStudent
}>
const DetailsControls: FC<DetailsControlsProps> = ({ student }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [deleteStudent] = studentsAPI.useDeleteStudentMutation()

  const goBack = () => {
    navigate(-1)
  }
  const onEditClick = () => {
    dispatch(handleModal(true))
    dispatch(editStudent(student as IStudent))
  }

  const onDeleteClick = async () => {
    try {
      await deleteStudent(student?.id as string).unwrap()
      dispatch(handleSnackbar({ state: true, isError: false }))
      navigate("/")
    } catch (error) {
      dispatch(handleSnackbar({ state: true, isError: true }))
    }
  }

  return (
    <Box sx={{ maxWidth: "400px", justifyContent: "space-between", display: "flex" }}>
      <Box>
        <Button variant='text' size='small' color='secondary' onClick={goBack}>
          Back
        </Button>
      </Box>
      <Box sx={({ spacing }) => ({ display: "flex", gap: spacing(6) })}>
        <Button variant='outlined' size='small' color='secondary' onClick={onEditClick}>
          Edit Info
        </Button>
        <Button variant='contained' size='small' color='primary' onClick={onDeleteClick}>
          Delete Profile
        </Button>
      </Box>
    </Box>
  )
}

export default DetailsControls
