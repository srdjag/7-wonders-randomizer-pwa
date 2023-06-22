import { createSlice } from "@reduxjs/toolkit";

export const draftSlice = createSlice({
  name: "draft",
  initialState: {
    value: false,
  },
  reducers: {
    changeDraft: (state, action) => {
      let draft = action.payload;
      state.value = draft;
    },
  },
});

export const { changeDraft } = draftSlice.actions;

export default draftSlice.reducer;
