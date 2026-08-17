import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import useLanguage from "../contexts/useLanguage";
import useThemeMode from "../contexts/useThemeMode";

export default function ThemeToggle() {
  const { t } = useLanguage();
  const { mode, toggleTheme } = useThemeMode();
  const isDarkMode = mode === "dark";

  return (
    <IconButton
      size="small"
      onClick={toggleTheme}
      aria-label={t(
        isDarkMode
          ? "navigation.enableLightMode"
          : "navigation.enableDarkMode",
      )}
    >
      {isDarkMode ? (
        <LightModeIcon fontSize="small" />
      ) : (
        <DarkModeIcon fontSize="small" />
      )}
    </IconButton>
  );
}
