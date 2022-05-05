import { useShortcut } from "src/shared/hooks/shortcutListenerHook";
import { Shortcut } from "src/shared/models/shortcut";
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
    </div>
  );
};
