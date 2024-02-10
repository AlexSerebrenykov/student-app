import CloseIcon from "@mui/icons-material/Close"
import { Button, Stack } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux"
import { changeFilter } from "../../store/reducers/FiltersSlice"
import { selectActiveFilter } from "../../store/selectors"
import { ClearButton } from "./Styled"

const Filters = () => {
  const dispatch = useAppDispatch()
  const { type } = useAppSelector(selectActiveFilter)

  const filterPaid = () => {
    dispatch(changeFilter("paid"))
  }
  const filterUpPaid = () => {
    dispatch(changeFilter("unpaid"))
  }

  const resetFilters = () => {
    dispatch(changeFilter("all"))
  }
  return (
    <Stack direction='row' spacing={4} alignItems='center'>
      <Stack direction='row'>
        <Button
          variant='text'
          disabled={type === "paid"}
          color='secondary'
          sx={{ textDecoration: "underline" }}
          onClick={filterPaid}
        >
          Show only paid
        </Button>
        <Button
          variant='text'
          disabled={type === "unpaid"}
          color='secondary'
          sx={{ textDecoration: "underline" }}
          onClick={filterUpPaid}
        >
          Show only unpaid
        </Button>
      </Stack>
      <ClearButton aria-label='delete' size='small' onClick={resetFilters}>
        <CloseIcon color='secondary' fontSize='small' />
      </ClearButton>
    </Stack>
  )
}

export default Filters
