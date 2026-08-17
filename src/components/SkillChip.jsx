import { Chip, Fade, Tooltip } from "@mui/material";

export default function SkillChip({ label, description }) {
  return (
    <Tooltip
      title={description}
      arrow
      slots={{ transition: Fade }}
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: "grey.900",
            color: "common.white",
            borderRadius: 2,
            px: 1.5,
            py: 1,
          },
        },
        arrow: {
          sx: { color: "grey.900" },
        },
      }}
    >
      <Chip
        label={label}
        size="small"
        tabIndex={0}
        sx={{
          width: "fit-content",
          maxWidth: "100%",
          height: 30,
          flex: "0 0 auto",
          bgcolor: "primary.light",
          "& .MuiChip-label": {
            whiteSpace: "nowrap",
          },
          transition:
            "transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease",
          "&:hover, &:focus-visible": {
            transform: "translateY(-2px)",
            boxShadow: 2,
            bgcolor: "primary.dark",
          },
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.dark",
            outlineOffset: 2,
          },
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
            "&:hover, &:focus-visible": {
              transform: "none",
            },
          },
        }}
      />
    </Tooltip>
  );
}
