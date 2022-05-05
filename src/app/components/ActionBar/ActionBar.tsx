import actionbar from "src/assets/img/actionbar.png";
import sob from "src/assets/img/sob.png";
import soc from "src/assets/img/soc.png";
import { Ability as AbilityModel } from "src/shared/models/ability";
import { Shortcut } from "src/shared/models/shortcut";
import { Ability } from "../Ability";
import "./ActionBar.scss";

export const ActionBar = () => {
  return (
    <div className="actionbar-container">
      <img src={actionbar} alt="" />
      <div className="abilities">
        <Ability
          img={soc}
          shortcut={Shortcut.One}
          ability={AbilityModel.SoC}
        ></Ability>
        <Ability
          img={sob}
          shortcut={Shortcut.Two}
          ability={AbilityModel.SoB}
        ></Ability>
      </div>
    </div>
  );
};
