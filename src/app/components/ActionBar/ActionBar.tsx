import actionbar from "src/assets/img/actionbar.png";
import sobImg from "src/assets/img/sob.png";
import socImg from "src/assets/img/soc.png";
import { Ability as AbilityModel, Spell } from "src/shared/models/ability";
import { Shortcut } from "src/shared/models/shortcut";
import { Ability } from "../Ability";
import "./ActionBar.scss";

export const ActionBar = () => {
  const sob: AbilityModel = {
    img: sobImg,
    spell: Spell.SoB,
  };

  const soc: AbilityModel = {
    img: socImg,
    spell: Spell.SoC,
  };

  return (
    <div className="actionbar-container">
      <img src={actionbar} alt="" />
      <div className="abilities">
        <Ability shortcut={Shortcut.One} ability={soc}></Ability>
        <Ability shortcut={Shortcut.Two} ability={sob}></Ability>
      </div>
    </div>
  );
};
