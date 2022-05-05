import { useEffect } from "react";
import { Shortcut } from "../models/shortcut";

const isShortcut = (key: string, shortcut: Shortcut) => {
  switch (shortcut) {
    case Shortcut.P:
      return key.toUpperCase() === "P";

    case Shortcut.One:
      return key.toUpperCase() === "1";

    case Shortcut.Two:
      return key.toUpperCase() === "2";

    default:
      return false;
  }
};

export const useShortcut = (shortcut: Shortcut, cb: () => any) => {
  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      if (isShortcut(event.key, shortcut)) {
        return cb();
      }
    };

    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [shortcut]);
};
