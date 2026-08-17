import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import SectionHeader from "../components/SectionHeader";
import SkillChip from "../components/SkillChip";
import useLanguage from "../contexts/useLanguage";
import { createSkillCategories } from "../data/skills";

const categoryIcons = {
  code: CodeOutlinedIcon,
  dns: DnsOutlinedIcon,
  storage: StorageOutlinedIcon,
  palette: PaletteOutlinedIcon,
  build: BuildOutlinedIcon,
};

export default function Skills() {
  const { t } = useLanguage();
  const skillCategories = createSkillCategories(t("skills.categories"));

  return (
    <Box
      component="section"
      id="skills"
      sx={{ py: 8, bgcolor: "background.sectionNeutral" }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          heading={t("skills.heading")}
          introduction={t("skills.introduction")}
        />

        <Grid container columnSpacing={{ xs: 4, md: 7 }} rowSpacing={7} sx={{ mt: 5 }}>
          {skillCategories.map((category) => {
            const CategoryIcon = categoryIcons[category.icon];

            return (
            <Grid
              key={category.id}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{ width: "100%", minWidth: 0 }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <CategoryIcon color="primary" />
                <Typography component="h3" variant="h5">
                  {category.title}
                </Typography>
              </Stack>

              <Box sx={{ width: 48, height: 2, bgcolor: "primary.main", my: 2 }} />

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  gap: 1.25,
                }}
              >
                {category.skills.map((skill) => (
                  <SkillChip
                    key={skill.id}
                    label={skill.label}
                    description={skill.description}
                  />
                ))}
              </Box>
            </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
