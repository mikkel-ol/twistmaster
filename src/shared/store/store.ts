import { configureStore } from "@reduxjs/toolkit";
import { rootEpic } from "../epics";
import { epicMiddleware } from "../middlewares";
import activeAbility from "../states/active-ability";
import attackSpeed from "../states/attack-speed";
import attacking from "../states/attacking";

const setup = () => {
  const store = configureStore({
    reducer: {
      attackSpeed,
      attacking,
      activeAbility,
    },
    middleware: [epicMiddleware],
  });

  epicMiddleware.run(rootEpic);

  return store;
};

export const store = setup();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
