import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ability } from "../models/ability";

interface ActiveAbilityState {
  value: Ability | null;
}

const initialState = { value: null } as ActiveAbilityState;

const activeAbility = createSlice({
  name: "activeAbility",
  initialState,
  reducers: {
    setActiveAbility(state, action: PayloadAction<Ability | null>) {
      state.value = action.payload;
    },
  },
});

export const { setActiveAbility } = activeAbility.actions;

export default activeAbility.reducer;
