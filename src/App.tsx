import { CssBaseline, ThemeProvider } from "@mui/material"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import router from "./routes"
import { setupStore } from "./store/store"
import theme from "./theme"

const store = setupStore()

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
