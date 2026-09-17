import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteScrollReset() {
  const { pathname, key } = useLocation();

  // Run before paint so each project opens at the top without a visible jump.
  // The location key also handles reopening the same project route.
  useLayoutEffect(() => {
    if (pathname.startsWith("/projects/")) {
      // Override the site's smooth scrolling for an immediate route reset.
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, key]);

  return null;
}
