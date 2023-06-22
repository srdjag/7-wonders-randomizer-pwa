import { createSlice } from "@reduxjs/toolkit";

export const randomizeSlice = createSlice({
  name: "getValues",
  initialState: {
    value: {},
  },
  reducers: {
    getValues: (state, action) => {
        let currentState = action.payload;

        let data = {
            expansionsArr: currentState.expansionSlice.value,
            numberOfPlayers: currentState.playerNumberSlice.value,
            sides: currentState.sidesSlice.value,
            draft: currentState.draftSlice.value
        }

        state.value = data;
    },
  },
});

export const { getValues } = randomizeSlice.actions;

export default randomizeSlice.reducer;
