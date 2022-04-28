import useWebAnimations from "@wellyshen/use-web-animations";
import React from "react";
import "./SwingTimer.scss";

export const SwingTimer = ({ speed }: { speed: number }) => {
  const { ref, playState, getAnimation } = useWebAnimations<HTMLDivElement>({
    keyframes: {
      transform: "translateX(500px)", // Move by 500px
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

    // More useful options...
  });

  React.useEffect(() => {
    const animation = getAnimation();

    if (speed === 0) animation?.finish();
    else {
      animation?.play();
      animation?.updatePlaybackRate(speed);
    }
  }, [speed]);

  return (
    <div className="swingTimer">
      <div className="internal" ref={ref}></div>
    </div>
  );
};
