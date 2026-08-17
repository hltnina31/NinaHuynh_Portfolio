import { Box, Typography } from "@mui/material";

export default function SectionHeader({ heading, introduction }) {
  return (
    <>
      <Typography component="h2" variant="h2">
        {heading}
      </Typography>

      <Box sx={{ mt: 2.5, maxWidth: 600 }}>
        <Box sx={{ display: "flex", alignItems: "center", width: 88 }}>
          <Box sx={{ height: 2, flex: 1, bgcolor: "primary.main" }} />
          <Box
            sx={{
              width: 8,
              height: 8,
              flexShrink: 0,
              borderRadius: "50%",
              bgcolor: "primary.main",
            }}
          />
        </Box>

        <Typography color="text.secondary" sx={{ mt: 2 }}>
          {introduction}
        </Typography>
      </Box>
    </>
  );
}
