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
    navigate(type === "main" ? 0 : -1)
  }
  return (
    <ErrorContainer>
      <Typography color={type === "main" ? "white" : "black"} mb={2}>
        No data found
      </Typography>
      <Button variant='contained' size='small' color='secondary' onClick={onClick}>
        {type === "main" ? "Refresh" : "Back"}
      </Button>
    </ErrorContainer>
  )
}

export default ErrorComponent
