import { Suspense, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { studentsAPI } from "../../services/StudentService"
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux"
import { handleSnackbar } from "../../store/reducers/ModalWindowsSlice"
import { selectLoadingState, selectModalState } from "../../store/selectors"
import Loader from "../Loader"
import ModalForm from "../ModalForm"
import SnackbarModal from "../SnackbarModal"

const Layout = () => {
  const { modalOpened, snackbar } = useAppSelector(selectModalState)
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(selectLoadingState)
  const { isError } = studentsAPI.useFetchAllStudentsQuery(null)

  useEffect(() => {
    if (isError) {
      dispatch(handleSnackbar({ state: true, isError: true }))
    }
  }, [isError, dispatch])

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
