import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "./store"

const selectAllStudents = (state: RootState) => state.studentReducer.students

export const selectStudentToEdit = (state: RootState) => state.studentReducer.studentToEdit
export const selectActiveFilter = (state: RootState) => state.filtersReducer
export const selectActiveSort = (state: RootState) => state.sortReducer

export const selectLoadingState = (state: RootState) => state.studentReducer.isLoading
export const selectModalState = (state: RootState) => state.modalWindowsReducer
export const selectStudentsByFilter = createSelector([selectAllStudents, selectActiveFilter], (students, { type }) => {
  if (type === "all") return students
  if (type === "paid") return students.filter(student => student.isFeePaid)
  return students.filter(student => !student.isFeePaid)
})

export const selectStudents = createSelector(
  [selectStudentsByFilter, selectActiveSort],
  (filteredStudents, { type }) => {
    if (type === "name") {
      return [...filteredStudents].sort((a, b) => a.name.localeCompare(b.name))
    }
    return [...filteredStudents].sort((a, b) => new Date(a.signingDate).getTime() - new Date(b.signingDate).getTime())
  }
)
