import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { useAppSelector } from "../../store/hooks/redux"
import { selectLoadingState, selectModalState } from "../../store/selectors"
import Loader from "../Loader"
import ModalForm from "../ModalForm"
import SnackbarModal from "../SnackbarModal"

const Layout = () => {
  const { modalOpened, snackbar } = useAppSelector(selectModalState)
  const isLoading = useAppSelector(selectLoadingState)

  return (
    <main>
      <Suspense fallback={<Loader />}>
        <>
          <Outlet />
          {modalOpened && <ModalForm />}
          {snackbar.state && <SnackbarModal snackbar={snackbar} />}
          {isLoading && <Loader />}
        </>
      </Suspense>
    </main>
  )
}

export default Layout
