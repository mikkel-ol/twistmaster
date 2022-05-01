import { configureStore } from '@reduxjs/toolkit';

import { rootEpic } from '../epics';
import { epicMiddleware } from '../middlewares';
import attackSpeed from '../states/attack-speed';

const setup = () => {
  const store = configureStore({
    reducer: {
      attackSpeed,
    },
    middleware: [epicMiddleware],
  });

  epicMiddleware.run(rootEpic);

  return store;
};

export const store = setup();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
