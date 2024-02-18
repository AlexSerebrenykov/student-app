import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const FILTER_OPTIONS = {
  ALL: "ALL",
  PAID: "PAID",
  UNPAID: "UNPAID",
} as const

type FilterOptions = keyof typeof FILTER_OPTIONS

type FiltersState = {
  option: FilterOptions
}

const initialState: FiltersState = {
  option: FILTER_OPTIONS.ALL,
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<FilterOptions>) => {
      state.option = action.payload
    },
  },
})

export default filtersSlice.reducer

export const { changeFilter } = filtersSlice.actions
