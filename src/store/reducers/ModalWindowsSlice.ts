import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ModalState {
  modalOpened: boolean
  snackbar: {
    state: boolean
    isError: boolean
  }
}

const initialState: ModalState = {
  modalOpened: false,
  snackbar: {
    state: false,
    isError: false,
  },
}

export const modalWindowsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    handleModal(state, action) {
      state.modalOpened = action.payload
    },
    handleSnackbar(state, action: PayloadAction<ModalState["snackbar"]>) {
      state.snackbar = action.payload
    },
  },
})

export default modalWindowsSlice.reducer
export const { handleModal, handleSnackbar } = modalWindowsSlice.actions
