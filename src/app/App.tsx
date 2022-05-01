import React, { SyntheticEvent, useState } from "react";
import "./App.scss";
import { SwingTimer } from "./components";

export const App = () => {
  const [play, setPlay] = useState(true);

  return (
    <div className="App">
      <SwingTimer play={play}></SwingTimer>
      <button onClick={() => setPlay(!play)}>Play / pause</button>
    </div>
  );
};
