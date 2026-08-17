import { Box, Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography component="h2" variant="h2">
          About
        </Typography>
      </Container>
    </Box>
  );
}
