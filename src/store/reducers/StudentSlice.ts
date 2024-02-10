import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IStudent } from "../../models/IStudent"
import { studentsAPI } from "../../services/StudentService"

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

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    editStudent: (state, action: PayloadAction<IStudent | null>) => {
      state.studentToEdit = action.payload
    },
  },
  extraReducers: builder => {
    builder.addMatcher(studentsAPI.endpoints.fetchAllStudents.matchPending, state => {
      state.isLoading = true
    })
    builder.addMatcher(
      studentsAPI.endpoints.fetchAllStudents.matchFulfilled,
      (state, action: PayloadAction<IStudent[]>) => {
        state.students = action.payload
        state.isLoading = false
      }
    )
    builder.addMatcher(studentsAPI.endpoints.fetchAllStudents.matchRejected, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsAPI.endpoints.fetchSingleStudent.matchPending, state => {
      state.isLoading = true
    })
    builder.addMatcher(studentsAPI.endpoints.fetchSingleStudent.matchFulfilled, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsAPI.endpoints.fetchSingleStudent.matchRejected, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsAPI.endpoints.updateStudent.matchPending, state => {
      state.isLoading = true
    })
    builder.addMatcher(studentsAPI.endpoints.updateStudent.matchFulfilled, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsAPI.endpoints.updateStudent.matchRejected, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsAPI.endpoints.createStudent.matchPending, state => {
      state.isLoading = true
    })
    builder.addMatcher(studentsAPI.endpoints.createStudent.matchFulfilled, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsAPI.endpoints.createStudent.matchRejected, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsAPI.endpoints.deleteStudent.matchPending, state => {
      state.isLoading = true
    })
    builder.addMatcher(studentsAPI.endpoints.deleteStudent.matchFulfilled, state => {
      state.isLoading = false
    })
    builder.addMatcher(studentsAPI.endpoints.deleteStudent.matchRejected, state => {
      state.isLoading = false
    })
  },
})

export default studentSlice.reducer

export const { editStudent } = studentSlice.actions
