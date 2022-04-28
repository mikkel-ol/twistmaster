import useWebAnimations from "@wellyshen/use-web-animations";
import React, { RefObject, useRef } from "react";
import "./SwingTimer.scss";

export const SwingTimer = ({
  speed,
  play,
}: {
  speed: number;
  play: boolean;
}) => {
  const {
    ref: timerRef,
    playState,
    getAnimation,
  } = useWebAnimations<HTMLDivElement>({
    keyframes: {
      width: "100%",
    },
    animationOptions: {
      duration: 1000,
      iterations: Number.MAX_SAFE_INTEGER, // for now
      direction: "normal",
      easing: "linear",
      playbackRate: 1,
    },
    onReady: ({ playState, animate, animation }) => {
      // Triggered when the animation is ready to play
    },
    onUpdate: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the running state or changes state
    },
    onFinish: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the finished state
    },
  });

  const markerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const animation = getAnimation();
    const attackSpeed = 1000 / speed;

    if (animation?.playState !== "running") return;

    if (speed === 0) animation?.finish();
    else {
      animation?.play();
      animation?.updatePlaybackRate(speed);
    }

    updateMarker(markerRef, attackSpeed);
  }, [speed, getAnimation]);

  React.useEffect(() => {
    if (play === true) getAnimation()?.play();
    else if (play === false) getAnimation()?.finish();
  }, [play, getAnimation]);

  return (
    <div className="container">
      <div className="swingTimer">
        <div className="internal" ref={timerRef}></div>
        <div className="twistMarker" ref={markerRef}></div>
      </div>
      <div className="attackSpeed">{(1 / speed).toFixed(1)}</div>
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
