import { Box, Container, Stack, Typography } from "@mui/material";
import ScrollReveal from "../ScrollReveal";

export default function ProjectSection({
  heading,
  children,
  accent = false,
  compactTop = false,
}) {
  return (
    <Box
      component="section"
      sx={{
        pt: compactTop ? { xs: 4, md: 5 } : { xs: 6, md: 8 },
        pb: { xs: 6, md: 8 },
        bgcolor: accent ? "background.sectionAccent" : "background.sectionNeutral",
      }}
    >
      <Container maxWidth="md">
        <ScrollReveal>
          <Stack spacing={2.5}>
            <Typography component="h2" variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3rem" } }}>
              {heading}
            </Typography>
            {children}
          </Stack>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
