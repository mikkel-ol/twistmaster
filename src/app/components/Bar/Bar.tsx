import { useAnimation } from "src/shared/hooks/animationHook";
import "./Bar.scss";

export const Bar = () => {
  const { ref } = useAnimation();

  return <div className="bar" ref={ref}></div>;
};
