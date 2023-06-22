import { createSlice } from "@reduxjs/toolkit";

export const sidesSlice = createSlice({
  name: "sides",
  initialState: {
    value: true,
  },
  reducers: {
    changeSide: (state, action) => {
      let side = action.payload;
      state.value = side;
    },
  },
});

export const { changeSide } = sidesSlice.actions;

export default sidesSlice.reducer;
