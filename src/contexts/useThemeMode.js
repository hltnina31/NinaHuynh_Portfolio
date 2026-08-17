import { useContext } from "react";
import ThemeModeContext from "./themeModeContextObject";

export default function useThemeMode() {
  const themeModeContext = useContext(ThemeModeContext);

  if (!themeModeContext) {
    throw new Error("useThemeMode må brukes inni AppThemeProvider.");
  }

  return themeModeContext;
}
