import { Button, Stack } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux"
import { changeSort } from "../../store/reducers/SortSlice"
import { selectActiveSort } from "../../store/selectors"

const Sortings = () => {
  const dispatch = useAppDispatch()
  const { type } = useAppSelector(selectActiveSort)

  const sortBySignInDate = () => {
    dispatch(changeSort("signInDate"))
  }
  const sortByName = () => {
    dispatch(changeSort("name"))
  }

  return (
    <Stack direction='row' spacing={4}>
      <Button
        disabled={type === "signInDate"}
        variant='text'
        color='secondary'
        sx={{ textDecoration: "underline" }}
        onClick={sortBySignInDate}
      >
        Sort by sign in date
      </Button>
      <Button
        disabled={type === "name"}
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
