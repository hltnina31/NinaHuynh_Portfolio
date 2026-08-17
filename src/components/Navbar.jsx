import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
} from "@mui/material";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";
import useLanguage from "../contexts/useLanguage";

const navigationItems = [
  { labelKey: "navigation.projects", sectionId: "projects" },
  { labelKey: "navigation.skills", sectionId: "skills" },
  { labelKey: "navigation.timeline", sectionId: "timeline" },
  { labelKey: "navigation.contact", sectionId: "contact" },
];

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <AppBar
      component="header"
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        top: { xs: 8, sm: 12 },
        width: { xs: "calc(100% - 16px)", sm: "min(720px, calc(100% - 32px))" },
        mx: "auto",
        backgroundImage: "none",
      }}
    >
      <Toolbar disableGutters sx={{ minHeight: "auto !important", maxWidth: "100%" }}>
        <Container disableGutters sx={{ maxWidth: "100% !important" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              columnGap: { sm: 3 },
              px: { xs: 0.75, sm: 1 },
              py: 0.5,
              color: "text.primary",
              bgcolor: "background.glass",
              border: 1,
              borderColor: "divider",
              borderRadius: "999px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              overflowX: "auto",
            }}
          >
            <Stack
              component="nav"
              direction="row"
              spacing={1}
              aria-label={t("navigation.mainLabel")}
              sx={{ flexShrink: 0 }}
            >
              {/* Each link points to the section with the matching id. */}
              {navigationItems.map((navigationItem) => (
                <Button
                  key={navigationItem.sectionId}
                  component="a"
                  href={`#${navigationItem.sectionId}`}
                  color="inherit"
                  sx={{
                    minWidth: "auto",
                    px: { xs: 0.75, sm: 1.25 },
                    py: 0.5,
                    fontSize: { xs: "0.7rem", sm: "0.8rem" },
                    whiteSpace: "nowrap",
                  }}
                >
                  {t(navigationItem.labelKey)}
                </Button>
              ))}
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              <LanguageSelector />
              <ThemeToggle />
            </Stack>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
