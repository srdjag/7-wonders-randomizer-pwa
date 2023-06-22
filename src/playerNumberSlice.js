import { createSlice } from "@reduxjs/toolkit";

export const playerNumberSlice = createSlice({
  name: "playerNumber",
  initialState: {
    value: '5',
  },
  reducers: {
    setPlayers: (state, action) => {
      let playerNumber = action.payload;
      state.value = playerNumber;
    },
  },
});

export const { setPlayers } = playerNumberSlice.actions;

export default playerNumberSlice.reducer;
