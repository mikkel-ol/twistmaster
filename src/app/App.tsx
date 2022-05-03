import { useShortcut } from "src/shared/hooks/shortcutListenerHook";
import { Shortcut } from "src/shared/models/shortcut";
import { setAttackSpeed } from "src/shared/states/attack-speed";
import { toggle } from "src/shared/states/attacking";
import { useAppDispatch } from "src/shared/store";
import "./App.scss";
import { SwingTimer } from "./components";
import { InfoTooltip } from "./components/InfoTooltip";

export const App = () => {
  const dispatch = useAppDispatch();

  useShortcut(Shortcut.P, () => dispatch(toggle()));

  return (
    <div className="App">
      <InfoTooltip></InfoTooltip>
      <SwingTimer></SwingTimer>
      <input
        type="number"
        onChange={(ev) => dispatch(setAttackSpeed(Number(ev.target.value)))}
      />
    </div>
  );
};
