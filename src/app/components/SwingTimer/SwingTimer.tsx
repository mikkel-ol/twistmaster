import useWebAnimations, { GetAnimation } from "@wellyshen/use-web-animations";
import React, { RefObject, useRef } from "react";
import { useAppSelector } from "../../../shared/store";
import "./SwingTimer.scss";

export const SwingTimer = ({ play }: { play: boolean }) => {
  // states
  const attackSpeed = useAppSelector((state) => state.attackSpeed.value);

  // refs
  const markerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container">
      <div className="swingTimer">
        <div className="internal" ref={timerRef}></div>
        <div className="twistMarker" ref={markerRef}></div>
      </div>
      <div className="attackSpeed">{attackSpeed.toFixed(1)}</div>
    </div>
  );
};

const updateMarker = (ref: RefObject<HTMLDivElement>, speed: number) => {
  const percentage = (400 / speed) * 100;

  if (ref.current) {
    ref.current.style.right = percentage + "%";

    if (percentage > 100) ref.current.style.display = "none";
    else ref.current.style.display = "block";
  }
};

const handleAnimation = (
  speed: number,
  getAnimation: GetAnimation,
  markerRef: RefObject<HTMLDivElement>
) => {
  const animation = getAnimation();
  const attackSpeed = 1000 / speed;

  if (animation?.playState !== "running") return;

  if (speed === 0) animation?.finish();
  else {
    animation?.play();
    animation?.updatePlaybackRate(speed);
  }

  updateMarker(markerRef, attackSpeed);
};
