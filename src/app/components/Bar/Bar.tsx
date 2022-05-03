import { ReactElement } from "react";
import { useAnimation } from "src/shared/hooks/animationHook";
import "./Bar.scss";

export const Bar = (props: { children: ReactElement }) => {
  const { ref } = useAnimation();

  return (
    <div className="bar" ref={ref}>
      {props.children}
    </div>
  );
};
