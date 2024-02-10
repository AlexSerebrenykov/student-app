import { Container } from "@mui/material"
import { useRouteError } from "react-router-dom"

type ErrorType = {
  statusText?: string
  message?: string
}

const ErrorPage = () => {
  const error = useRouteError() as ErrorType

  return (
    <Container disableGutters maxWidth={"md"}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  )
}

export default ErrorPage
