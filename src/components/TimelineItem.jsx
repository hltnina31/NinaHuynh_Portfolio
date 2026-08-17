import { Box, Stack, Typography } from "@mui/material";

export default function TimelineItem({ entry }) {
  return (
    <Box component="article" aria-live="polite">
      <Stack spacing={1}>
        <Typography variant="overline">{entry.type}</Typography>

        <Typography component="h3" variant="h5">
          {entry.title}
        </Typography>

        <Typography color="text.secondary">{entry.period}</Typography>
        <Typography>{entry.description}</Typography>
      </Stack>
    </Box>
  );
}
