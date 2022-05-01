import { createSlice } from "@reduxjs/toolkit";

interface AttackingState {
  value: boolean;
}

const initialState = { value: false } as AttackingState;

const attacking = createSlice({
  name: "attacking",
  initialState,
  reducers: {
    startAttack(state) {
      state.value = true;
    },
    stopAttack(state) {
      state.value = false;
    },
    toggle(state) {
      state.value = !state.value;
    },
  },
});

export const { startAttack, stopAttack, toggle } = attacking.actions;

export default attacking.reducer;
