import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { studentsApiMiddleware, studentsApiReducer, studentsApiReducerPath } from "../services/StudentService"
import filtersReducer from "./reducers/FiltersSlice"
import modalWindowsReducer from "./reducers/ModalWindowsSlice"
import sortReducer from "./reducers/SortSlice"
import studentReducer from "./reducers/StudentSlice"

const rootReducer = combineReducers({
  sortReducer,
  filtersReducer,
  modalWindowsReducer,
  studentReducer,
  [studentsApiReducerPath]: studentsApiReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(studentsApiMiddleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
