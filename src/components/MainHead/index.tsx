import { Button, Unstable_Grid2 as Grid } from "@mui/material"
import { useAppDispatch } from "../../store/hooks/redux"
import { handleModal } from "../../store/reducers/ModalWindowsSlice"
import Controls from "../MainControls"

const MainHead = () => {
  const dispatch = useAppDispatch()

  const onProfileAddClick = () => {
    dispatch(handleModal(true))
  }
  return (
    <Grid container mb={6}>
      <Grid xs={12}>
        <Controls />
      </Grid>
      <Grid xs={12} display='flex' justifyContent={{ xs: "flex-start", sm: "flex-end" }} mt={1.5} ml={2}>
        <Button variant='contained' color='secondary' onClick={onProfileAddClick}>
          Add Another Profile
        </Button>
      </Grid>
    </Grid>
  )
}

export default MainHead
