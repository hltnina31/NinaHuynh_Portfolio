import { Box, Button, Container, Stack, Typography } from "@mui/material";
import huynhImage from "../assets/images/Huynh.jpeg"; // Importer bildet
import RotatingRole from "../components/RotatingRole";
import { createEmailLink } from "../data/contact";
import useLanguage from "../contexts/useLanguage";

export default function Hero() {
  const { language, t } = useLanguage();
  const emailLink = createEmailLink(t("contact.emailSubject"));

  return (
    <Box
      component="section"
      sx={{
        minHeight: "calc(100svh - 48px)",
        display: "flex",
        alignItems: "center",
        bgcolor: "background.sectionNeutral",
      }}
    >
        <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row"}} spacing={9} alignItems="center"> {/* spacing={6}: avstand mellom tekstområdet og bildet, alignItems="center": sentrerer dem i forhold til hverandre */}
            <Stack spacing={3} alignItems="flex-start" sx={{flex: 1}}>  {/* flex: 1: begge får omtrent like mye tilgjengelig plass */}
                <Stack spacing={0.5}>
                    <Typography variant="overline" color="primary">
                        {t("hero.greeting")}
                    </Typography>

                    <Typography variant="h1">
                        Nina Huynh
                    </Typography>
                </Stack>

                <RotatingRole
                    key={language}
                    label={t("hero.worksWith")}
                    roles={t("hero.roles")}
                />

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ maxWidth: 600 }}
                >
                    {t("hero.description")}
                </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button component="a" href="#projects" variant="contained">
                    {t("hero.projectsButton")}
                </Button>

                <Button
                    component="a"
                    href={emailLink}
                    variant="outlined"
                >
                    {t("hero.contactButton")}
                </Button>
            </Stack>
            </Stack>

            <Box sx={{display: "flex",
                    justifyContent: "center"}}>
                <Box
                    component="img"
                    src={huynhImage}
                    alt="Nina Huynh"
                    sx={{
                      width: "100%",
                      maxWidth: 400,
                      borderRadius: 3,
                      transform: { md: "translateY(40px)" },
                    }} 
                />
            </Box>
        </Stack>
        </Container>
    </Box>
  );
} 
