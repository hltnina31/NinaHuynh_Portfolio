import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box component="section" id="contact" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="flex-start">
          <Typography component="h2" variant="h2">
            Har du lyst til å jobbe sammen?
          </Typography>

          <Typography color="text.secondary">
            Send meg gjerne en e-post dersom du vil vite mer eller diskutere et samarbeid.
          </Typography>

          <Button
            component="a"
            href="mailto:?subject=Henvendelse%20fra%20portef%C3%B8ljen"
            variant="contained"
            sx={{ width: "fit-content" }}
          >
            Send meg en e-post
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
