import { RefObject, useEffect, useRef } from "react";
import { useAppSelector } from "src/shared/store";
import "./Marker.scss";

export const Marker = () => {
  // states
  const attackSpeed = useAppSelector((state) => state.attackSpeed.value);

  // refs
  const markerRef = useRef<HTMLDivElement>(null);

  // effects
  useEffect(() => updateMarker(markerRef, attackSpeed), [attackSpeed]);

  return <div className="twistMarker" ref={markerRef}></div>;
};

const updateMarker = (ref: RefObject<HTMLDivElement>, speed: number) => {
  const speedInMs = speed * 1000;
  const twistTolerance = 400; // 400 ms
  const percentage = (twistTolerance / speedInMs) * 100; // 400 ms

  if (ref.current) {
    ref.current.style.right = percentage + "%";

    if (percentage > 100) {
      ref.current.style.display = "none";
    } else {
      ref.current.style.display = "block";
    }
  }
};
