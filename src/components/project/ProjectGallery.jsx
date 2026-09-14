import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, IconButton, Typography } from "@mui/material";

export default function ProjectGallery({
  images,
  ariaLabel,
  openImageLabel,
  closeImageLabel,
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images?.length) {
    return null;
  }

  return (
    <>
      <Box
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        sx={{
          display: "flex",
          gap: { xs: 1.5, sm: 2 },
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          scrollPaddingInline: 0,
          pb: 1.5,
          scrollbarWidth: "thin",
          scrollbarColor: (theme) => `${theme.palette.divider} transparent`,
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": {
            height: 6,
          },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: "divider",
            borderRadius: 999,
          },
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.dark",
            outlineOffset: 4,
          },
          "@media (prefers-reduced-motion: reduce)": {
            scrollBehavior: "auto",
          },
        }}
      >
        {images.map((galleryItem) => (
          <Box
            component="figure"
            key={galleryItem.id}
            sx={{
              flex: { xs: "0 0 88%", sm: "0 0 78%", md: "0 0 72%" },
              minWidth: 0,
              m: 0,
              scrollSnapAlign: "start",
            }}
          >
            {galleryItem.image ? (
              <Box
                component="button"
                type="button"
                aria-label={`${openImageLabel}: ${galleryItem.alt}`}
                onClick={() => setSelectedImage(galleryItem)}
                sx={{
                  display: "block",
                  width: "100%",
                  p: 0,
                  border: 0,
                  borderRadius: 2,
                  bgcolor: "transparent",
                  cursor: "zoom-in",
                  "&:focus-visible": {
                    outline: "2px solid",
                    outlineColor: "primary.dark",
                    outlineOffset: 3,
                  },
                }}
              >
                <Box
                  component="img"
                  src={galleryItem.image}
                  alt={galleryItem.alt}
                  loading="lazy"
                  sx={{
                    display: "block",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    objectFit: "cover",
                    borderRadius: 2,
                    bgcolor: "background.paper",
                  }}
                />
              </Box>
            ) : (
              <Box
                role="img"
                aria-label={galleryItem.alt}
                sx={{
                  display: "grid",
                  placeItems: "center",
                  width: "100%",
                  aspectRatio: "16 / 10",
                  p: 3,
                  border: 1,
                  borderStyle: "dashed",
                  borderColor: "divider",
                  borderRadius: 2,
                  bgcolor: "background.paper",
                }}
              >
                <Typography color="text.secondary" textAlign="center">
                  {galleryItem.alt}
                </Typography>
              </Box>
            )}

            {galleryItem.caption && (
              <Typography component="figcaption" color="text.secondary" variant="body2" sx={{ mt: 1.5 }}>
                {galleryItem.caption}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      <Dialog
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        aria-label={selectedImage?.alt}
        maxWidth={false}
        slotProps={{
          backdrop: {
            sx: { bgcolor: "rgba(0, 0, 0, 0.82)" },
          },
          paper: {
            sx: {
              position: "relative",
              maxWidth: "calc(100vw - 32px)",
              maxHeight: "calc(100dvh - 32px)",
              m: 2,
              overflow: "visible",
              bgcolor: "transparent",
              backgroundImage: "none",
              boxShadow: "none",
            },
          },
        }}
      >
        <IconButton
          onClick={() => setSelectedImage(null)}
          aria-label={closeImageLabel}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 1,
            color: "common.white",
            bgcolor: "rgba(0, 0, 0, 0.65)",
            "&:hover": { bgcolor: "rgba(0, 0, 0, 0.8)" },
          }}
        >
          <CloseIcon />
        </IconButton>

        {selectedImage && (
          <Box
            component="img"
            src={selectedImage.image}
            alt={selectedImage.alt}
            sx={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "calc(100dvh - 32px)",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: 2,
            }}
          />
        )}
      </Dialog>
    </>
  );
}
