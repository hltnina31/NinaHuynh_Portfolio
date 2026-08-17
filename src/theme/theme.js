import { createTheme } from "@mui/material/styles";

const bodyFontFamily = '"Inter", sans-serif';
const headingFontFamily = '"Cormorant", serif';

const sharedPrimary = {
  main: "#FBC3BC",
  light: "#FDE1DE",
  dark: "#E4B1AB",
  contrastText: "#171A26",
};

const lightPalette = {
  background: {
    default: "#FFFFFF",
    paper: "#FFFFFF",
    glass: "rgba(255, 255, 255, 0.78)",
    sectionNeutral: "#FFFFFF",
    sectionAccent: "#FFEFEF",
    footer: "#E4B1AB",
  },
  text: {
    primary: "#171A26",
    secondary: "#5F6270",
  },
  divider: "#FDE1DE",
  action: {
    hover: "#FDE1DE",
    selected: "#FBC3BC",
  },
};

const darkPalette = {
  background: {
    default: "#151823",
    paper: "#202431",
    glass: "rgba(32, 36, 49, 0.82)",
    sectionNeutral: "#171A26",
    sectionAccent: "#33292D",
    footer: "#5A4146",
  },
  text: {
    primary: "#FFF7F5",
    secondary: "#D4C7C7",
  },
  divider: "#8A686E",
  action: {
    hover: "rgba(251, 195, 188, 0.12)",
    selected: "rgba(251, 195, 188, 0.2)",
  },
};

export default function createAppTheme(mode) {
  const modePalette = mode === "dark" ? darkPalette : lightPalette;

  return createTheme({
    palette: {
      mode,
      primary: sharedPrimary,
      ...modePalette,
    },
    typography: {
      fontFamily: bodyFontFamily,
      h1: {
        fontFamily: headingFontFamily,
        fontWeight: 700,
      },
      h2: {
        fontFamily: headingFontFamily,
        fontWeight: 700,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: ({ ownerState }) =>
            ownerState.variant === "h4" && ownerState.component === "h2"
              ? { fontFamily: headingFontFamily }
              : {},
        },
      },
      MuiButton: {
        styleOverrides: {
          containedPrimary: ({ theme }) => ({
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }),
          outlinedPrimary: ({ theme }) => ({
            color: theme.palette.text.primary,
            borderColor: theme.palette.primary.dark,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
              borderColor: theme.palette.primary.dark,
            },
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: "none",
            borderColor: theme.palette.divider,
          }),
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.action.hover,
          }),
        },
      },
    },
  });
}
