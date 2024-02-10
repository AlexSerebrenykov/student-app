import { Box, MenuItem, Select } from "@mui/material"
import { FC } from "react"
import { ErrorMessage } from "./Styled"
// @ts-ignore
import { FieldErrors } from "react-hook-form/dist/types/errors"
import { FormInputsType } from "./index"
// @ts-ignore
import { ControllerRenderProps } from "react-hook-form/dist/types/controller"

type SelectFieldProps = {
  name: string
  errors: FieldErrors<FormInputsType>
  field: ControllerRenderProps<FormInputsType>
}
const SelectField: FC<SelectFieldProps> = ({ field, name, errors }) => {
  return (
    <Box position='relative'>
      <Select
        labelId='isFeePaid'
        onChange={field.onChange}
        value={field.value}
        ref={field.ref}
        error={!!(errors && errors[name])}
        sx={{ width: "100%" }}
      >
        <MenuItem value={"yes"}>Yes</MenuItem>
        <MenuItem value={"no"}>No</MenuItem>
      </Select>
      {errors && errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </Box>
  )
}

export default SelectField
