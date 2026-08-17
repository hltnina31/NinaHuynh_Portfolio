import { useState } from "react";
import {
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import useLanguage from "../contexts/useLanguage";

const languageOptions = [
  { code: "no", label: "Norsk" },
  { code: "en", label: "English" },
  { code: "vn", label: "Tiếng Việt" },
];

function LanguageFlag({ language }) {
  if (language === "no") {
    return (
      <Box component="svg" viewBox="0 0 24 16" aria-hidden="true" sx={{ width: 24 }}>
        <rect width="24" height="16" fill="#BA0C2F" />
        <rect x="6" width="4" height="16" fill="#FFFFFF" />
        <rect y="6" width="24" height="4" fill="#FFFFFF" />
        <rect x="7" width="2" height="16" fill="#00205B" />
        <rect y="7" width="24" height="2" fill="#00205B" />
      </Box>
    );
  }

  if (language === "en") {
    return (
      <Box component="svg" viewBox="0 0 24 16" aria-hidden="true" sx={{ width: 24 }}>
        <rect width="24" height="16" fill="#012169" />
        <path d="M0 0 24 16M24 0 0 16" stroke="#FFFFFF" strokeWidth="3" />
        <path d="M0 0 24 16M24 0 0 16" stroke="#C8102E" strokeWidth="1.3" />
        <path d="M12 0v16M0 8h24" stroke="#FFFFFF" strokeWidth="5" />
        <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2.5" />
      </Box>
    );
  }

  return (
    <Box component="svg" viewBox="0 0 24 16" aria-hidden="true" sx={{ width: 24 }}>
      <rect width="24" height="16" fill="#DA251D" />
      <polygon
        points="12,3 13.2,6.5 17,6.5 14,8.7 15.1,12.3 12,10.1 8.9,12.3 10,8.7 7,6.5 10.8,6.5"
        fill="#FFCD00"
      />
    </Box>
  );
}

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [anchorElement, setAnchorElement] = useState(null);
  const isMenuOpen = Boolean(anchorElement);

  function handleSelectLanguage(languageCode) {
    setLanguage(languageCode);
    setAnchorElement(null);
  }

  return (
    <>
      <IconButton
        size="small"
        aria-label={t("language.openMenu")}
        aria-controls={isMenuOpen ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? "true" : undefined}
        onClick={(event) => setAnchorElement(event.currentTarget)}
      >
        <LanguageIcon fontSize="small" />
      </IconButton>

      <Menu
        id="language-menu"
        anchorEl={anchorElement}
        open={isMenuOpen}
        onClose={() => setAnchorElement(null)}
        MenuListProps={{ "aria-label": t("language.menuLabel") }}
      >
        {languageOptions.map((languageOption) => (
          <MenuItem
            key={languageOption.code}
            selected={language === languageOption.code}
            onClick={() => handleSelectLanguage(languageOption.code)}
          >
            <ListItemIcon>
              <LanguageFlag language={languageOption.code} />
            </ListItemIcon>
            <ListItemText>{languageOption.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
