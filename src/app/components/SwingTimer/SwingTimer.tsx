import React from "react";
import { useAppSelector } from "../../../shared/store";
import { Ability } from "../Ability";
import { Bar } from "../Bar";
import { Marker } from "../Marker";
import "./SwingTimer.scss";

export const SwingTimer = () => {
  // states
  const attackSpeed = useAppSelector((state) => state.attackSpeed.value);
  const activeAbility = useAppSelector((state) => state.activeAbility.value);

  return (
    <div className="container">
      <Ability ability={activeAbility}></Ability>
      <div className="swingtimer-container">
        <div className="swingTimer">
          <Bar>
            <Marker></Marker>
          </Bar>
        </div>
        <div className="attackSpeed">{attackSpeed.toFixed(1)}</div>
      </div>
    </div>
  );
};
