import { Button, Stack } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux"
import { SORT_OPTIONS, changeSort } from "../../store/reducers/SortSlice"
import { selectActiveSort } from "../../store/selectors"

const Sortings = () => {
  const dispatch = useAppDispatch()
  const { option } = useAppSelector(selectActiveSort)

  const sortBySignInDate = () => {
    dispatch(changeSort(SORT_OPTIONS.SIGN_IN_DATE))
  }
  const sortByName = () => {
    dispatch(changeSort(SORT_OPTIONS.NAME))
  }

  return (
    <Stack direction='row' spacing={4}>
      <Button
        disabled={option === SORT_OPTIONS.SIGN_IN_DATE}
        variant='text'
        color='secondary'
        sx={{ textDecoration: "underline" }}
        onClick={sortBySignInDate}
      >
        Sort by sign in date
      </Button>
      <Button
        disabled={option === SORT_OPTIONS.NAME}
        variant='text'
        color='secondary'
        sx={{ textDecoration: "underline" }}
        onClick={sortByName}
      >
        Sort by name
      </Button>
    </Stack>
  )
}

export default Sortings
