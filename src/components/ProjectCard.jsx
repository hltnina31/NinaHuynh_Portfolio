import { useEffect, useRef, useState } from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

export default function ProjectCard({
  project,
  imagePlaceholder,
  imageAriaLabel,
  revealDelay = 0,
}) {
  const cardRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const cardElement = cardRef.current;

    if (!cardElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );

    observer.observe(cardElement);

    // Stopper observasjonen når kortet fjernes fra siden.
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        height: "100%",
        opacity: isInViewport ? 1 : 0,
        transform: isInViewport ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 500ms ease, transform 500ms ease",
        transitionDelay: isInViewport ? `${revealDelay}ms` : "0ms",
        "@media (prefers-reduced-motion: reduce)": {
          transform: "none",
          transition: "none",
        },
      }}
    >
      <Card
        component="article"
        variant="outlined"
        sx={{
          height: "100%",
          boxShadow: 2,
          transform: "translateY(0) scale(1)",
          transition:
            "transform 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            boxShadow: 6,
            transform: "translateY(-5px) scale(1.02)",
          },
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            "&:hover": {
              transform: "none",
            },
          },
        }}
      >
        <Box
          role="img"
          aria-label={imageAriaLabel}
          sx={{ aspectRatio: "16 / 9", display: "grid", placeItems: "center" }}
        >
          <Typography variant="body2" color="text.secondary">
            {imagePlaceholder}
          </Typography>
        </Box>

        <CardContent>
          <Stack spacing={2}>
            <Typography component="h3" variant="h5">
              {project.title}
            </Typography>

            <Typography color="text.secondary">{project.description}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
