import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import ProjectHero from "../components/project/ProjectHero";
import ProjectGallery from "../components/project/ProjectGallery";
import ProjectSection from "../components/project/ProjectSection";
import useLanguage from "../contexts/useLanguage";
import { findProjectBySlug } from "../data/projects";

function localizeGallery(galleryItems = [], galleryTranslations) {
  return galleryItems.map(({ translationId, ...galleryItem }) => ({
    ...galleryItem,
    ...galleryTranslations.items[translationId],
  }));
}

export default function ProjectPage() {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const projectConfig = findProjectBySlug(projectSlug);

  if (!projectConfig) {
    return <Navigate to="/" replace />;
  }

  const project = t(projectConfig.translationKey);
  const designGallery = localizeGallery(
    projectConfig.designGallery,
    project.designProcess.gallery,
  );
  const resultGallery = localizeGallery(
    projectConfig.resultGallery,
    project.result.gallery,
  );

  function returnToProjects() {
    navigate("/", { state: { scrollTo: "projects" } });
  }

  return (
    <main>
      <Box sx={{ bgcolor: "background.sectionNeutral" }}>
        <Box sx={{ width: "100%", maxWidth: "900px", mx: "auto", px: { xs: 2, sm: 3 }, pt: 5 }}>
          <Button onClick={returnToProjects} startIcon={<ArrowBackIcon />} color="inherit">
            {project.backToProjects}
          </Button>
        </Box>
      </Box>

      <ProjectHero project={project} technologies={projectConfig.technologies} />

      <ProjectSection heading={project.overview.heading} compactTop>
        <Typography color="text.secondary">{project.overview.body}</Typography>
      </ProjectSection>

      <ProjectSection heading={project.problem.heading} accent>
        <Typography color="text.secondary">{project.problem.body}</Typography>
      </ProjectSection>

      <ProjectSection heading={project.designProcess.heading}>
        <Typography color="text.secondary">{project.designProcess.body}</Typography>
        <ProjectGallery
          images={designGallery}
          ariaLabel={project.designProcess.gallery.ariaLabel}
          openImageLabel={project.galleryControls.openFullImage}
          closeImageLabel={project.galleryControls.closeFullImage}
        />
      </ProjectSection>

      <ProjectSection heading={project.solution.heading} accent>
        <Typography color="text.secondary">{project.solution.body}</Typography>
      </ProjectSection>

      <ProjectSection heading={project.architecture.heading}>
        <Typography color="text.secondary">{project.architecture.introduction}</Typography>
        <Stack component="ul" spacing={1} sx={{ my: 0, pl: 3 }}>
          {project.architecture.features.map((feature) => (
            <Typography component="li" key={feature} color="text.secondary">
              {feature}
            </Typography>
          ))}
        </Stack>
        <Typography color="text.secondary">{project.architecture.conclusion}</Typography>
      </ProjectSection>

      <ProjectSection heading={project.role.heading} accent>
        <Stack spacing={3}>
          {project.role.areas.map((area) => (
            <Stack key={area.heading} spacing={1}>
              <Typography component="h3" variant="h2" sx={{ fontSize: "1.75rem" }}>
                {area.heading}
              </Typography>
              <Stack component="ul" spacing={0.75} sx={{ my: 0, pl: 3 }}>
                {area.items.map((item) => (
                  <Typography component="li" key={item} color="text.secondary">
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </ProjectSection>

      <ProjectSection heading={project.result.heading}>
        <Typography color="text.secondary">{project.result.body}</Typography>
        <ProjectGallery
          images={resultGallery}
          ariaLabel={project.result.gallery.ariaLabel}
          openImageLabel={project.galleryControls.openFullImage}
          closeImageLabel={project.galleryControls.closeFullImage}
        />
      </ProjectSection>

      <ProjectSection heading={project.learning.heading} accent>
        <Typography color="text.secondary">{project.learning.body}</Typography>
      </ProjectSection>
    </main>
  );
}
