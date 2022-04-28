import React, { SyntheticEvent, useState } from "react";
import "./App.scss";
import { SwingTimer } from "./components";

function App() {
  const [speed, setSpeed] = useState(1);
  const [play, setPlay] = useState(true);

  let a: string = "0";

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") setSpeed(1 / Number(a));
  };

  return (
    <div className="App">
      <SwingTimer speed={speed} play={play}></SwingTimer>
      <input
        type="number"
        onKeyDown={handleKeyDown}
        onChange={(val) => (a = val.target.value)}
      />
      <button onClick={() => setPlay(!play)}>Play / pause</button>
    </div>
  );
}

export default App;
