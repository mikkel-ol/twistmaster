import useWebAnimations from "@wellyshen/use-web-animations";

export const {
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
