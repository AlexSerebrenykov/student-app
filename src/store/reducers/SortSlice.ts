import { createSlice } from "@reduxjs/toolkit"

export type SortState = {
  type: "signInDate" | "name"
}

const initialState: SortState = {
  type: "signInDate",
}

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    changeSort: (state, action) => {
      state.type = action.payload
    },
  },
})

export default sortSlice.reducer

export const { changeSort } = sortSlice.actions
