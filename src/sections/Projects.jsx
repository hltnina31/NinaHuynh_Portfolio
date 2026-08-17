import { Box, Container, Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import useLanguage from "../contexts/useLanguage";

export default function Projects() {
  const { t } = useLanguage();
  const projects = t("projects.items");

  return (
    <Box
      component="section"
      id="projects"
      sx={{ py: 8, bgcolor: "background.sectionAccent" }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          heading={t("projects.heading")}
          introduction={t("projects.introduction")}
        />

        <Grid container spacing={4} sx={{ mt: 5 }}>
          {projects.map((project, index) => (
            <Grid key={project.id} size={{ xs: 12, md: 6 }}>
              <ProjectCard
                project={project}
                imagePlaceholder={t("projects.imagePlaceholder")}
                imageAriaLabel={`${t("projects.imagePlaceholderFor")} ${project.title}`}
                revealDelay={index * 80}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
