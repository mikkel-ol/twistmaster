import React from "react";
import { useAppSelector } from "../../../shared/store";
import { Bar } from "../Bar";
import { Marker } from "../Marker";
import "./SwingTimer.scss";

export const SwingTimer = () => {
  // states
  const attackSpeed = useAppSelector((state) => state.attackSpeed.value);

  return (
    <div className="container">
      <div className="swingTimer">
        <Bar></Bar>
        <Marker></Marker>
      </div>
      <div className="attackSpeed">{attackSpeed.toFixed(1)}</div>
    </div>
  );
};
