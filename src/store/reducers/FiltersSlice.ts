import { createSlice } from "@reduxjs/toolkit"

export type FiltersState = {
  type: "all" | "paid" | "unpaid"
}

const initialState: FiltersState = {
  type: "all",
}

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.type = action.payload
    },
  },
})

export default filtersSlice.reducer

export const { changeFilter } = filtersSlice.actions
