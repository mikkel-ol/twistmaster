import React, { useState } from "react";
import "./App.scss";
import { SwingTimer } from "./components";

function App() {
  const [speed, setSpeed] = useState(0);

  return (
    <div className="App">
      <SwingTimer speed={speed}></SwingTimer>
      <button onClick={() => setSpeed(speed + 1)}>Up</button>
      <button onClick={() => setSpeed(speed - 1)}>Down</button>
    </div>
  );
}

function test() {
  console.log("hej");
}

export default App;
