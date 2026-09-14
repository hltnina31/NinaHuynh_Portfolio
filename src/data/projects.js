import mockupTingtun from "../assets/images/projects/bachelor-tingtun/design/mockup-tingtun.png";
import prototypeTingtun from "../assets/images/projects/bachelor-tingtun/design/prototype-tingtun.png";
import wireframesTingtun from "../assets/images/projects/bachelor-tingtun/design/wireframes-tingtun.png";
import analyseTingtun from "../assets/images/projects/bachelor-tingtun/results/analyse-tingtun.png";
import contactTingtun from "../assets/images/projects/bachelor-tingtun/results/contact-tingtun.png";
import editTingtun from "../assets/images/projects/bachelor-tingtun/results/edit-tingtun.png";
import formTingtun from "../assets/images/projects/bachelor-tingtun/results/form-tingtun.png";
import githubTingtun from "../assets/images/projects/bachelor-tingtun/results/github-tingtun.png";
import homeTingtun from "../assets/images/projects/bachelor-tingtun/results/home-tingtun.png";
import loadingTingtun from "../assets/images/projects/bachelor-tingtun/results/loading-tingtun.png";
import sendingTingtun from "../assets/images/projects/bachelor-tingtun/results/sending-tingtun.png";

const projects = [
  {
    slug: "bachelor-tingtun",
    translationKey: "projectCaseStudies.bachelorTingtun",
    cardImage: mockupTingtun,
    technologies: [
      "React.js",
      "Node.js",
      "Vite",
      "Gemini API",
      "GitHub API",
      "Vercel",
      "Render",
    ],
    designGallery: [
      { id: "design-wireframe", image: wireframesTingtun, translationId: "wireframe" },
      { id: "design-mockup", image: mockupTingtun, translationId: "mockup" },
      { id: "design-prototype", image: prototypeTingtun, translationId: "prototype" },
    ],
    resultGallery: [
      { id: "result-home", image: homeTingtun, translationId: "home" },
      { id: "result-form", image: formTingtun, translationId: "form" },
      { id: "result-loading", image: loadingTingtun, translationId: "loading" },
      { id: "result-analyse", image: analyseTingtun, translationId: "analyse" },
      { id: "result-edit", image: editTingtun, translationId: "edit" },
      { id: "result-sending", image: sendingTingtun, translationId: "sending" },
      { id: "result-github", image: githubTingtun, translationId: "github" },
      { id: "result-contact", image: contactTingtun, translationId: "contact" },
    ],
  },
];

export function findProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export default projects;
