import { Box, Stack, Typography } from "@mui/material";
import SkillChip from "../SkillChip";

export default function ProjectTechStack({ heading, technologies }) {
  return (
    <Stack spacing={1}>
      <Typography component="h2" variant="h2" sx={{ fontSize: "1.5rem" }}>
        {heading}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: 1.25,
        }}
      >
        {technologies.map((technology) => (
          <SkillChip key={technology} label={technology} />
        ))}
      </Box>
    </Stack>
  );
}
