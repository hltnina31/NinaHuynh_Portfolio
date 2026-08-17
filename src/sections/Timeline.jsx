import { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import SectionHeader from "../components/SectionHeader";
import TimelineItem from "../components/TimelineItem";
import TimelineSlider from "../components/TimelineSlider";
import useLanguage from "../contexts/useLanguage";

export default function Timeline() {
  const { t } = useLanguage();
  const timelineEntries = t("timeline.entries");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedEntry = timelineEntries[selectedIndex];

  return (
    <Box
      component="section"
      id="timeline"
      sx={{ py: 8, bgcolor: "background.sectionAccent" }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          heading={t("timeline.heading")}
          introduction={t("timeline.introduction")}
        />

        <Grid container spacing={4} alignItems="center" sx={{ mt: 5 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <TimelineSlider
              entries={timelineEntries}
              selectedIndex={selectedIndex}
              onSelectedIndexChange={setSelectedIndex}
              ariaLabel={t("timeline.sliderLabel")}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <TimelineItem entry={selectedEntry} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
