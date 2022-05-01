import { useAnimation } from "../SwingTimer/animation";
import "./Bar.scss";

export const Bar = () => {
  const { ref } = useAnimation();

  return <div className="bar" ref={ref}></div>;
};
