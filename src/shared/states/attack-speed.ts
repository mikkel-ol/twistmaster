import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AttackSpeedState {
  value: number;
}

const initialState = { value: 3.8 } as AttackSpeedState;

const attackSpeedSlice = createSlice({
  name: "attackSpeed",
  initialState,
  reducers: {
    set(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { set } = attackSpeedSlice.actions;

export default attackSpeedSlice.reducer;
