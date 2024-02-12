import { Alert, Snackbar } from "@mui/material"
import { FC } from "react"
import { useAppDispatch } from "../../store/hooks/redux"
import { handleSnackbar } from "../../store/reducers/ModalWindowsSlice"

type SnackbarProps = {
  snackbar: {
    state: boolean
    isError: boolean
  }
}

const SnackbarModal: FC<SnackbarProps> = ({ snackbar }) => {
  const dispatch = useAppDispatch()
  const onSnackbarClose = () => {
    dispatch(handleSnackbar({ state: false, isError: false }))
  }

  return (
    <Snackbar
      open={snackbar.state}
      autoHideDuration={3000}
      onClose={onSnackbarClose}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
      <Alert
        onClose={onSnackbarClose}
        severity={snackbar.isError ? "error" : "success"}
        variant='filled'
        sx={{ width: "100%" }}
      >
        {snackbar.isError ? "An error occurred!" : "Success!"}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarModal
