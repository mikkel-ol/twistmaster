import { useShortcut } from "src/shared/hooks/shortcutListenerHook";
import { Ability as AbilityModel } from "src/shared/models/ability";
import { Shortcut } from "src/shared/models/shortcut";
import { setActiveAbility } from "src/shared/states/active-ability";
import { useAppDispatch } from "src/shared/store";
import "./Ability.scss";

interface AbilityProps {
  ability: AbilityModel | null;
  shortcut?: Shortcut;
}

export const Ability = (props: AbilityProps) => {
  const dispatch = useAppDispatch();

  if (props.shortcut) {
    useShortcut(props.shortcut, () =>
      dispatch(setActiveAbility(props.ability))
    );
  }

  return (
    <div className="ability-container">
      <div style={{ background: `url(${props.ability?.img})` }}></div>
    </div>
  );
};
