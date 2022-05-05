import InfoIcon from "@mui/icons-material/Info";
import { Tooltip } from "@mui/material";
import { Shortcut } from "src/shared/models/shortcut";
import { EnumUtil } from "src/shared/utils/enum-utils";
import "./InfoTooltip.scss";

const tooltipText = (shortcut: Shortcut) => {
  switch (shortcut) {
    case Shortcut.P:
      return "Play/pause the swing timer";

    case Shortcut.One:
      return "Use ability on slot 1";

    case Shortcut.Two:
      return "Use ability on slot 2";
  }
};

const Shortcuts = () => {
  const options = EnumUtil.toArray(Shortcut);

  return (
    <>
      <div className="tooltip-container">
        <h3>Shortcuts</h3>
        <div className="tooltip-shortcuts-container">
          {options.map((shortcut) => (
            <div className="tooltip-shortcut" key={shortcut}>
              <code>{shortcut}:</code>
              <p>{tooltipText(shortcut)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const InfoTooltip = () => {
  return (
    <>
      <Tooltip title={<Shortcuts></Shortcuts>}>
        <InfoIcon className="info-icon" fontSize="large"></InfoIcon>
      </Tooltip>
    </>
  );
};
