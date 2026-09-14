import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

export default function ScrollReveal({ children }) {
  const revealRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false,
  );

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updateMotionPreference(event) {
      setPrefersReducedMotion(event.matches);
    }

    reducedMotionQuery.addEventListener("change", updateMotionPreference);
    return () => reducedMotionQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const revealElement = revealRef.current;

    if (!revealElement) {
      return undefined;
    }

    // The callback runs on both entry and exit, so the reveal can repeat.
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold: 0.15 },
    );

    observer.observe(revealElement);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const isVisible =
    prefersReducedMotion ||
    typeof IntersectionObserver === "undefined" ||
    isInViewport;

  return (
    <Box
      ref={revealRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 600ms ease, transform 600ms ease",
        "@media (prefers-reduced-motion: reduce)": {
          opacity: 1,
          transform: "none",
          transition: "none",
        },
      }}
    >
      {children}
    </Box>
  );
}
