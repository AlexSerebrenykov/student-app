import { Button, FormControl, InputLabel, Modal } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import dayjs from "dayjs"
import { useEffect } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { IStudent } from "../../models/IStudent"
import { studentsAPI } from "../../services/StudentService"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux"
import { handleModal, handleSnackbar } from "../../store/reducers/ModalWindowsSlice"
import { editStudent } from "../../store/reducers/StudentSlice"
import { selectStudentToEdit } from "../../store/selectors"
import DatePickerField from "./DatePickerField"
import FormField from "./FormField"
import SelectField from "./SelectField"
import { ControlsContainer, FormContainer, ModalContainer } from "./Styled"

type isFeePaidSelectType = string | undefined

export type FormInputsType = Omit<IStudent, "isFeePaid"> & {
  isFeePaid: isFeePaidSelectType
}

const isPaidFeeToBool = (value: isFeePaidSelectType) => (value === "yes" ? true : false)
const isPaidFeeToString = (value: boolean | undefined) => (value === true ? "yes" : "no")

const ModalForm = () => {
  const dispatch = useAppDispatch()
  const studentToEdit = useAppSelector(selectStudentToEdit)
  const [createStudent] = studentsAPI.useCreateStudentMutation()
  const [updateStudent] = studentsAPI.useUpdateStudentMutation()

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormInputsType>({
    defaultValues: {
      name: "",
      isFeePaid: undefined,
      avatar: "",
      company: "",
      signingDate: "",
    },
  })

  useEffect(() => {
    if (!studentToEdit) return
    reset({
      name: studentToEdit?.name,
      isFeePaid: isPaidFeeToString(studentToEdit?.isFeePaid),
      avatar: studentToEdit?.avatar,
      company: studentToEdit?.company,
      // @ts-ignore
      signingDate: dayjs(studentToEdit?.signingDate),
    })
    // eslint-disable-next-line
  }, [studentToEdit])

  const onCloseModal = () => {
    dispatch(editStudent(null))
    reset()
    dispatch(handleModal(false))
  }

  const onSubmit: SubmitHandler<FormInputsType> = async student => {
    try {
      if (studentToEdit) {
        const updatedStudent = { ...student, id: studentToEdit.id, isFeePaid: isPaidFeeToBool(student.isFeePaid) }
        await updateStudent(updatedStudent).unwrap()
      } else {
        const newStudent = { ...student, isFeePaid: isPaidFeeToBool(student.isFeePaid) }
        await createStudent(newStudent).unwrap()
        reset()
      }
      dispatch(handleSnackbar({ state: true, isError: false }))
      onCloseModal()
    } catch (error) {
      dispatch(handleSnackbar({ state: true, isError: true }))
    }
  }

  return (
    <Modal
      open={true}
      onClose={onCloseModal}
      aria-labelledby='form-modal-title'
      aria-describedby='form-modal-description'
    >
      <ModalContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <form action='' onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
              <Controller
                name='avatar'
                control={control}
                rules={{
                  required: "This field is required",
                  pattern: {
                    value: /(https?:\/\/.*\.(?:png|jpg))/i,
                    message: "Invalid image url",
                  },
                }}
                render={({ field }) => <FormField label='Image URL' name='avatar' errors={errors} field={field} />}
              />
              <Controller
                name='name'
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => <FormField label='Name' name='name' errors={errors} field={field} />}
              />
              <Controller
                name='company'
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }) => <FormField label='Company Name' name='company' errors={errors} field={field} />}
              />
              <Controller
                name='signingDate'
                control={control}
                defaultValue={undefined}
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <DatePickerField label={"Signing Date"} name={"signingDate"} errors={errors} field={field} />
                )}
              />
              <FormControl>
                <InputLabel id='feesPaid'>Fees Paid</InputLabel>
                <Controller
                  name='isFeePaid'
                  control={control}
                  defaultValue={""}
                  rules={{ required: "This field is required" }}
                  render={({ field }) => <SelectField field={field} name='isFeePaid' errors={errors} />}
                />
              </FormControl>
              <ControlsContainer>
                <Button variant='text' color='secondary' onClick={onCloseModal}>
                  Cancel
                </Button>
                <Button type='submit' variant='contained' color='secondary'>
                  {studentToEdit ? "Edit Profile" : "Create Profile"}
                </Button>
              </ControlsContainer>
            </FormContainer>
          </form>
        </LocalizationProvider>
      </ModalContainer>
    </Modal>
  )
}

export default ModalForm
