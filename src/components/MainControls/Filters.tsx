import CloseIcon from "@mui/icons-material/Close"
import { Button, Stack } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux"
import { FILTER_OPTIONS, changeFilter } from "../../store/reducers/FiltersSlice"
import { selectActiveFilter } from "../../store/selectors"
import { ClearButton } from "./Styled"

const Filters = () => {
  const dispatch = useAppDispatch()
  const { option } = useAppSelector(selectActiveFilter)

  const filterPaid = () => {
    dispatch(changeFilter(FILTER_OPTIONS.PAID))
  }
  const filterUnpaid = () => {
    dispatch(changeFilter(FILTER_OPTIONS.UNPAID))
  }

  const resetFilters = () => {
    dispatch(changeFilter(FILTER_OPTIONS.ALL))
  }
  return (
    <Stack direction='row' spacing={4} alignItems='center'>
      <Stack direction='row'>
        <Button
          variant='text'
          disabled={option === FILTER_OPTIONS.PAID}
          color='secondary'
          sx={{ textDecoration: "underline" }}
          onClick={filterPaid}
        >
          Show only paid
        </Button>
        <Button
          variant='text'
          disabled={option === FILTER_OPTIONS.UNPAID}
          color='secondary'
          sx={{ textDecoration: "underline" }}
          onClick={filterUnpaid}
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
