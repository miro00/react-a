import { createSlice } from "@reduxjs/toolkit";

export const sectionsSlice = createSlice({
  name: "sections",
  initialState: [],
  reducers: {
    add: (state, payload) => {
      state.push(payload)
    },
    del: (state, payload) => {
      state.splice(payload, 1)
    }
  }
})

export const { add, del } = sectionsSlice.actions
export default sectionsSlice.reducer
