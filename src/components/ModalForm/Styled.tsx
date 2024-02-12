import { Box, styled } from "@mui/material"

const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  padding: theme.spacing(11, 5, 5, 5),
  transform: "translate(-50%, -50%)",
  maxWidth: "435px",
  width: "100%",
  backgroundColor: "#ffffff",
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: "10px",
}))

const FormContainer = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: spacing(6),
}))

const ErrorMessage = styled("p")(({ theme }) => ({
  position: "absolute",
  bottom: -20,
  left: 0,
  margin: 0,
  color: theme.palette.error.main,
  fontSize: "12px",
}))

const ControlsContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
})

export { ControlsContainer, ErrorMessage, FormContainer, ModalContainer }
