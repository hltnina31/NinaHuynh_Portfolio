import { useState } from "react";
import { Box, Slider } from "@mui/material";

export default function TimelineSlider({
  entries,
  selectedIndex,
  onSelectedIndexChange,
  ariaLabel,
}) {
  const lastIndex = entries.length - 1;
  const selectedSliderValue = lastIndex - selectedIndex;
  const [dragValue, setDragValue] = useState(selectedSliderValue);
  const [isDragging, setIsDragging] = useState(false);
  const sliderValue = isDragging ? dragValue : selectedSliderValue;
  const marks = entries.map((entry, index) => ({
    value: lastIndex - index,
    label: entry.period,
  }));

  function handleChange(_event, newValue) {
    if (typeof newValue === "number") {
      setDragValue(newValue);
    }
  }

  function handleChangeCommitted(_event, newValue) {
    if (typeof newValue === "number") {
      const nearestMark = Math.round(newValue);

      setDragValue(nearestMark);
      setIsDragging(false);
      onSelectedIndexChange(lastIndex - nearestMark);
    }
  }

  function getValueText(value) {
    const entry = entries[lastIndex - Math.round(value)];
    return `${entry.title}, ${entry.period}`;
  }

  return (
    <Box sx={{ height: 360, display: "flex", justifyContent: "center" }}>
      <Slider
        aria-label={ariaLabel}
        orientation="vertical"
        value={sliderValue}
        min={0}
        max={lastIndex}
        step={isDragging ? 0.01 : null}
        marks={marks}
        track={false}
        getAriaValueText={getValueText}
        onPointerDownCapture={() => {
          setDragValue(selectedSliderValue);
          setIsDragging(true);
        }}
        onChange={handleChange}
        onChangeCommitted={handleChangeCommitted}
      />
    </Box>
  );
}
