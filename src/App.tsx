import React, { useState } from "react";
import "./App.scss";
import { SwingTimer } from "./components";

function App() {
  const [speed, setSpeed] = useState(1);

  return (
    <div className="App">
      <SwingTimer speed={speed}></SwingTimer>
      <button onClick={() => setSpeed(speed * 2)}>Up</button>
      <button onClick={() => setSpeed(speed / 2)}>Down</button>
    </div>
  );
}

export default App;
