// App.jsx har hovedansvaret for å sette komponentene sammen.
// Vi bør ikke skrive hele nettsiden direkte i App.jsx.
// Hver seksjon eller komponent får sitt eget ansvar.

import { useEffect } from "react";
import { HashRouter, Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Hero from "./sections/Hero"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Timeline from "./sections/Timeline";
import ProjectPage from "./pages/ProjectPage";
import RouteScrollReset from "./components/RouteScrollReset";

function SiteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView();
      navigate("/", { replace: true, state: null });
    }
  }, [location, navigate]);

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Timeline />
    </main>
  );
}

function App() {
  return (
    <HashRouter>
      <RouteScrollReset />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects/:projectSlug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App; 
