import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IStudent } from "../../models/IStudent"
import { studentsApiEndpoints } from "../../services/StudentService"

export interface StudentState {
  students: IStudent[]
  studentToEdit: IStudent | null
  isLoading: boolean
}

const initialState: StudentState = {
  students: [],
  studentToEdit: null,
  isLoading: false,
}

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    editStudent: (state, action: PayloadAction<IStudent | null>) => {
      state.studentToEdit = action.payload
    },
  },
  extraReducers: builder => {
    builder.addMatcher(studentsApiEndpoints.fetchAllStudents.matchPending, state => {
      state.isLoading = true
    })
    builder.addMatcher(
      studentsApiEndpoints.fetchAllStudents.matchFulfilled,
      (state, action: PayloadAction<IStudent[]>) => {
        state.students = action.payload
        state.isLoading = false
      }
    )
    builder.addMatcher(studentsApiEndpoints.fetchAllStudents.matchRejected, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsApiEndpoints.fetchSingleStudent.matchPending, state => {
      state.isLoading = true
    })
    builder.addMatcher(studentsApiEndpoints.fetchSingleStudent.matchFulfilled, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsApiEndpoints.fetchSingleStudent.matchRejected, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsApiEndpoints.updateStudent.matchPending, state => {
      state.isLoading = true
    })
    builder.addMatcher(studentsApiEndpoints.updateStudent.matchFulfilled, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsApiEndpoints.updateStudent.matchRejected, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsApiEndpoints.createStudent.matchPending, state => {
      state.isLoading = true
    })
    builder.addMatcher(studentsApiEndpoints.createStudent.matchFulfilled, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsApiEndpoints.createStudent.matchRejected, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsApiEndpoints.deleteStudent.matchPending, state => {
      state.isLoading = true
    })
    builder.addMatcher(studentsApiEndpoints.deleteStudent.matchFulfilled, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsApiEndpoints.deleteStudent.matchRejected, state => {
      state.isLoading = false
    })
  },
})

export default studentSlice.reducer
export const { editStudent } = studentSlice.actions
