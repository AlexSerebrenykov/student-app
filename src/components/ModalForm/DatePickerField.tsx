import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import { Box } from "@mui/material"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { FC } from "react"
import { ErrorMessage } from "./Styled"
// @ts-ignore
import { FieldErrors } from "react-hook-form/dist/types/errors"
import { FormInputsType } from "./index"
// @ts-ignore
import { ControllerRenderProps } from "react-hook-form/dist/types/controller"

type DatePickerFieldProps = {
  name: string
  label: string
  errors: FieldErrors<FormInputsType>
  field: ControllerRenderProps<FormInputsType>
}

const DatePickerField: FC<DatePickerFieldProps> = ({ field, errors, label, name }) => {
  return (
    <Box position='relative'>
      <DatePicker
        label={label}
        slotProps={{
          openPickerButton: { size: "small" },
          openPickerIcon: { fontSize: "12px" },
          textField: {
            error: !!(errors && errors[name]),
          },
        }}
        slots={{ openPickerIcon: CalendarTodayOutlinedIcon }}
        sx={{
          "& .MuiSvgIcon-root": {
            fill: "#000000",
          },
        }}
        onChange={field.onChange}
        value={field.value}
        ref={field.ref}
      />
      {errors && errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </Box>
  )
}

export default DatePickerField
