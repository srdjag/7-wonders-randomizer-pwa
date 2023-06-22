import { createSlice } from "@reduxjs/toolkit";

export const expansionSlice = createSlice({
  name: "expansions",
  initialState: {
    value: [],
  },
  reducers: {
    push: (state, action) => {
      let expansion = action.payload;

      if (state.value.includes(expansion)) {
        var array = [...state.value];
        var index = array.indexOf(expansion);
        if (index !== -1) {
          array.splice(index, 1);
          state.value = array;
        }
      } else {
        state.value = [...state.value, action.payload];
      }
    },
  },
});

export const { push } = expansionSlice.actions;

export default expansionSlice.reducer;
