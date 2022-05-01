import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "white",
};

const barColor = createSlice({
  name: "barColor",
  initialState,
  reducers: {},
});

export const {} = barColor.actions;

export default barColor.reducer;
