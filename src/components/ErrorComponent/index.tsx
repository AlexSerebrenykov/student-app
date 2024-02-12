import { Button, Typography } from "@mui/material"
import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { ErrorContainer } from "./Styled"

type ErrorProps = {
  type?: "main" | "details"
}
const ErrorComponent: FC<ErrorProps> = ({ type = "main" }) => {
  const navigate = useNavigate()
  const onClick = () => {
    type === "main" ? navigate(0) : navigate("/")
  }
  return (
    <ErrorContainer>
      <Typography color={type === "main" ? "white" : "black"} mb={2}>
        No data found
      </Typography>
      <Button variant='contained' size='small' color='secondary' onClick={onClick}>
        {type === "main" ? "Refresh" : "Go to home page"}
      </Button>
    </ErrorContainer>
  )
}

export default ErrorComponent
