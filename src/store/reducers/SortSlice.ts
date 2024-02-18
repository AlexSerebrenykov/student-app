import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const SORT_OPTIONS = {
  SIGN_IN_DATE: "SIGN_IN_DATE",
  NAME: "NAME",
} as const

type SortOptions = keyof typeof SORT_OPTIONS

export type SortState = {
  option: SortOptions
}

const initialState: SortState = {
  option: SORT_OPTIONS.SIGN_IN_DATE,
}

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    changeSort: (state, action: PayloadAction<SortOptions>) => {
      state.option = action.payload
    },
  },
})

export default sortSlice.reducer
export const { changeSort } = sortSlice.actions
