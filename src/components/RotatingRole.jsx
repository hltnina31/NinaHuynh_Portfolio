import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const TYPING_DELAY = 100;
const DELETING_DELAY = 60;
const FULL_TEXT_PAUSE = 1200;
const EMPTY_TEXT_PAUSE = 400;
const CURSOR_BLINK_DELAY = 500;

export default function RotatingRole({ label, roles }) {
  // Indeksen forteller hvilken rolle i roles-arrayet som er aktiv.
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Denne teksten bygges opp og slettes ett tegn om gangen.
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  const currentRole = roles[currentRoleIndex];

  useEffect(() => {
    let delay = isDeleting ? DELETING_DELAY : TYPING_DELAY;

    // Når hele rollen er skrevet, venter vi før slettingen starter.
    if (!isDeleting && displayedText === currentRole) {
      delay = FULL_TEXT_PAUSE;
    }

    // Når teksten er slettet, venter vi før neste rolle skrives.
    if (isDeleting && displayedText === "") {
      delay = EMPTY_TEXT_PAUSE;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayedText === "") {
        setCurrentRoleIndex((previousIndex) =>
          previousIndex === roles.length - 1 ? 0 : previousIndex + 1,
        );
        setIsDeleting(false);
        return;
      }

      const nextTextLength = isDeleting
        ? displayedText.length - 1
        : displayedText.length + 1;

      setDisplayedText(currentRole.slice(0, nextTextLength));
    }, delay);

    // Rydder opp forrige timeout før effekten kjører på nytt.
    return () => clearTimeout(timeout);
  }, [currentRole, displayedText, isDeleting, roles.length]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((previousValue) => !previousValue);
    }, CURSOR_BLINK_DELAY);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Stack spacing={0.5}>
      <Typography variant="body1" color="text.secondary">
        {label}
      </Typography>

      <Typography variant="h4" color="primary" aria-label={currentRole}>
        <Box component="span" aria-hidden="true">
          {displayedText}
          <Box
            component="span"
            sx={{
              display: "inline-block",
              width: "2px",
              height: "1em",
              ml: "2px",
              verticalAlign: "-0.1em",
              bgcolor: "currentColor",
              visibility: isCursorVisible ? "visible" : "hidden",
            }}
          />
        </Box>
      </Typography>
    </Stack>
  );
}
