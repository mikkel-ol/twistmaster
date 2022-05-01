import { configureStore } from "@reduxjs/toolkit";
import attackSpeed from "../states/attack-speed";

export const store = configureStore({
  reducer: {
    attackSpeed,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
