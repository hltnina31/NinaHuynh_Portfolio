import { Box, Container, Stack, Typography } from "@mui/material";
import ProjectTechStack from "./ProjectTechStack";

export default function ProjectHero({ project, technologies }) {
  return (
    <Box
      component="header"
      sx={{
        pt: { xs: 7, md: 10 },
        pb: { xs: 2.5, md: 1 },
        bgcolor: "background.sectionNeutral",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={2}>
          <Stack spacing={1.5}>
            <Typography component="h1" variant="h1" sx={{ fontSize: { xs: "2.6rem", md: "4rem" } }}>
              {project.title}
            </Typography>
            <Typography variant="h5">{project.subtitle}</Typography>
            <Typography color="text.secondary">{project.period}</Typography>
            <Typography color="text.secondary">{project.roles.join(" · ")}</Typography>
          </Stack>

          <ProjectTechStack heading={project.techStackHeading} technologies={technologies} />
        </Stack>
      </Container>
    </Box>
  );
}
