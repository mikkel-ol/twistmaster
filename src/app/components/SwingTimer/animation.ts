import useWebAnimations from "@wellyshen/use-web-animations";
import { useEffect } from "react";
import { useAppSelector } from "src/shared/store";

export const useAnimation = () => {
  // states
  const attackSpeed = useAppSelector((state) => state.attackSpeed.value);
  const isAttacking = useAppSelector((state) => state.attacking.value);
  const { ref, playState, getAnimation } = useWebAnimations<HTMLDivElement>({
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

  const animation = getAnimation();

  // effects
  useEffect(
    () => (isAttacking ? animation?.play() : animation?.pause()),
    [isAttacking, animation]
  );
  useEffect(
    () => animation?.updatePlaybackRate(1 / attackSpeed),
    [attackSpeed, animation]
  );

  return { ref, playState, getAnimation };
};
