import { useMemo, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ThemeModeContext from "../contexts/themeModeContextObject";
import createAppTheme from "./theme";

const THEME_STORAGE_KEY = "portfolio-theme-mode";

function getInitialThemeMode() {
  try {
    const storedMode = localStorage.getItem(THEME_STORAGE_KEY);

    if (storedMode === "light" || storedMode === "dark") {
      return storedMode;
    }
  } catch {
    // Porteføljen fungerer fortsatt dersom nettleseren blokkerer localStorage.
  }

  if (typeof window.matchMedia === "function") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return "light";
}

export default function AppThemeProvider({ children }) {
  // En funksjon som startverdi gjør at nettleserpreferansen bare leses én gang.
  const [mode, setMode] = useState(getInitialThemeMode);

  // Temaet bygges på nytt bare når brukeren faktisk bytter modus.
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  function toggleTheme() {
    setMode((currentMode) => {
      const nextMode = currentMode === "light" ? "dark" : "light";

      try {
        // Et manuelt valg skal ha prioritet ved senere besøk.
        localStorage.setItem(THEME_STORAGE_KEY, nextMode);
      } catch {
        // Temabyttet virker i denne økten selv om lagring ikke er tilgjengelig.
      }

      return nextMode;
    });
  }

  const themeModeValue = useMemo(
    () => ({ mode, toggleTheme }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={themeModeValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
