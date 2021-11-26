import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNavOpen: true,
};

export const appState = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
  },
});

export const { toggle } = appState.actions;

export default appState.reducer;
