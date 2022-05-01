import React from "react";
import { setAttackSpeed } from "src/shared/states/attack-speed";
import { toggle } from "src/shared/states/attacking";
import { useAppDispatch } from "src/shared/store";
import "./App.scss";
import { SwingTimer } from "./components";

export const App = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <SwingTimer></SwingTimer>
      <input
        type="number"
        onChange={(ev) => dispatch(setAttackSpeed(Number(ev.target.value)))}
      />
      <button onClick={() => dispatch(toggle())}>Play / pause</button>
    </div>
  );
};
