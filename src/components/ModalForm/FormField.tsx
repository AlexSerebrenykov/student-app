import { Box, TextField } from "@mui/material"
import { FC } from "react"
import { ErrorMessage } from "./Styled"
// @ts-ignore
import { FieldErrors } from "react-hook-form/dist/types/errors"
import { FormInputsType } from "./index"
// @ts-ignore
import { ControllerRenderProps } from "react-hook-form/dist/types/controller"

type FormFieldProps = {
  name: string
  label: string
  errors: FieldErrors<FormInputsType>
  field: ControllerRenderProps<FormInputsType>
}
const FormField: FC<FormFieldProps> = ({ name, label, errors, field }) => {
  return (
    <Box position='relative'>
      <TextField
        label={label}
        variant='outlined'
        InputLabelProps={{ shrink: true }}
        size='small'
        {...field}
        error={!!(errors && errors[name])}
      />
      {errors && errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </Box>
  )
}

export default FormField
