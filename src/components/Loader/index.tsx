import { Backdrop, CircularProgress } from "@mui/material"
import { createPortal } from "react-dom"

const Loader = () =>
  createPortal(
    <Backdrop sx={{ color: "#fff", zIndex: theme => theme.zIndex.modal + 1 }} open={true}>
      <CircularProgress color='inherit' />
    </Backdrop>,
    document.body
  )

export default Loader
