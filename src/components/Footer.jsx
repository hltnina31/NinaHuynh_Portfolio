import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { createEmailLink } from "../data/contact";
import useLanguage from "../contexts/useLanguage";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/hltnina31",
    icon: <GitHubIcon fontSize="small" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nina-huynh-92a0bb327",
    icon: <LinkedInIcon fontSize="small" />,
  },
];

export default function Footer() {
  const { t } = useLanguage();
  const emailLink = createEmailLink(t("contact.emailSubject"));

  return (
    <Box
      component="footer"
      id="contact"
      sx={{ py: 3, bgcolor: "background.footer", color: "text.primary" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              width: "100%",
              gap: 4,
            }}
          >
            <Stack
              component="a"
              href={emailLink}
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
            >
              <Typography component="h2" variant="h4">
                {t("footer.heading")}
              </Typography>
              <NorthEastIcon aria-hidden="true" />
            </Stack>

            <Stack
              component="nav"
              direction="row"
              spacing={2}
              aria-label={t("footer.socialLabel")}
              sx={{ marginLeft: "auto" }}
            >
              {socialLinks.map((socialLink) => (
                <Button
                  key={socialLink.label}
                  component="a"
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  color="inherit"
                  startIcon={socialLink.icon}
                  sx={{ borderRadius: "999px", textTransform: "none" }}
                >
                  {socialLink.label}
                </Button>
              ))}
            </Stack>
          </Box>

          <Stack spacing={3}>
            <Divider />
            <Typography variant="body2">{t("footer.copyright")}</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
