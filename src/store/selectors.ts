import { createSelector } from "@reduxjs/toolkit"
import { FILTER_OPTIONS } from "./reducers/FiltersSlice"
import { SORT_OPTIONS } from "./reducers/SortSlice"
import { RootState } from "./store"

const selectAllStudents = (state: RootState) => state.studentReducer.students

export const selectStudentToEdit = (state: RootState) => state.studentReducer.studentToEdit
export const selectActiveFilter = (state: RootState) => state.filtersReducer
export const selectActiveSort = (state: RootState) => state.sortReducer

export const selectLoadingState = (state: RootState) => state.studentReducer.isLoading
export const selectModalState = (state: RootState) => state.modalWindowsReducer
export const selectStudentsByFilter = createSelector(
  [selectAllStudents, selectActiveFilter],
  (students, { option }) => {
    if (option === FILTER_OPTIONS.PAID) return students.filter(student => student.isFeePaid)
    if (option === FILTER_OPTIONS.UNPAID) return students.filter(student => !student.isFeePaid)
    return students
  }
)

export const selectStudents = createSelector(
  [selectStudentsByFilter, selectActiveSort],
  (filteredStudents, { option }) => {
    if (option === SORT_OPTIONS.NAME) return [...filteredStudents].sort((a, b) => a.name.localeCompare(b.name))
    return [...filteredStudents].sort((a, b) => new Date(a.signingDate).getTime() - new Date(b.signingDate).getTime())
  }
)
