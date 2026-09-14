const en = {
  meta: {
    title: "Nina Huynh | Portfolio",
  },
  navigation: {
    mainLabel: "Main navigation",
    projects: "Projects",
    skills: "Skills",
    timeline: "Timeline",
    contact: "Contact",
    enableDarkMode: "Enable dark mode",
    enableLightMode: "Enable light mode",
  },
  language: {
    openMenu: "Select language",
    menuLabel: "Language selection",
  },
  hero: {
    greeting: "Hi, I am",
    worksWith: "I work with",
    roles: [
      "Full-stack development",
      "UX/UI design",
      "Service design",
      "IT consulting",
    ],
    description:
      "A recent graduate in IT and information systems with an interest in modern web development, user-friendly interfaces, and digital services.",
    projectsButton: "View my projects",
    contactButton: "Contact me",
  },
  contact: {
    emailSubject: "Inquiry from the portfolio",
  },
  projects: {
    heading: "Projects",
    introduction:
      "A selection of projects showing how I approach design, development, and problem-solving.",
    imagePlaceholder: "Project image",
    imagePlaceholderFor: "Image placeholder for",
    items: [
      {
        id: "bachelor-tingtun",
        slug: "bachelor-tingtun",
        title: "AI-based structuring of test-event feedback",
        description:
          "A bachelor project in collaboration with Tingtun, where we developed an AI-based solution for analysing and structuring feedback and suggesting improvements.",
      },
      {
        id: "placeholder-project-2",
        title: "Project two",
        description: "A short introduction to the project will be added here.",
      },
      {
        id: "placeholder-project-3",
        title: "Project three",
        description: "A short introduction to the project will be added here.",
      },
    ],
  },
  projectCaseStudies: {
    bachelorTingtun: {
      backToProjects: "Back to projects",
      title: "AI-based structuring of test-event feedback",
      subtitle: "Bachelor project in collaboration with Tingtun",
      period: "January 2026 – June 2026",
      roles: ["Project Manager", "Scrum Master", "Full-stack Developer"],
      techStackHeading: "Technologies",
      galleryControls: {
        openFullImage: "Open full-size image",
        closeFullImage: "Close image",
      },
      overview: {
        heading: "Project overview",
        body: "In collaboration with Tingtun, we developed an AI-based solution that analyses feedback from service owners and suggests improvements based on its content. The work was completed as a bachelor project at the University of Agder from January to June 2026 by a team of five people.",
      },
      problem: {
        heading: "The problem",
        body: "Tingtun wanted a solution that could make feedback from service owners easier to manage and analyse. The feedback could contain a large amount of information, and the aim was to explore how artificial intelligence could help structure the content and suggest relevant improvements.",
      },
      designProcess: {
        heading: "Design process",
        body: "I contributed to the design of the solution and worked with Figma during the design process. The team used this work to explore the structure, user flow, and how the analysed information could be presented clearly.",
        gallery: {
          ariaLabel: "Design process images",
          items: {
            wireframe: {
              alt: "Wireframe showing the initial structure and user flow of the Tingtun solution",
              caption: "The initial layout used to define the overall structure and user flow.",
            },
            mockup: {
              alt: "Mockup showing the visual design of the Tingtun solution",
              caption: "A visual refinement focusing on layout, hierarchy and interface design.",
            },
            prototype: {
              alt: "Interactive prototype of the Tingtun solution before development began",
              caption: "The interactive prototype used before development began.",
            },
          },
        },
      },
      solution: {
        heading: "The solution",
        body: "We developed a full-stack solution in which React.js handled the user interface, while Node.js processed requests and communication with external services. Users could submit feedback through the application, which was then sent to the Gemini API for analysis, structuring, and improvement suggestions. The GitHub API connected the result to GitHub Issues so cases could be created, followed up, and managed through an established workflow.",
      },
      architecture: {
        heading: "Architecture decision",
        introduction: "I proposed that the team use GitHub Issues through the GitHub API instead of building a complete custom database and case-management system. GitHub Issues already provided functionality for:",
        features: ["creating cases", "commenting", "opening cases", "closing cases", "following case status"],
        conclusion: "This technical choice reduced unnecessary complexity and allowed the team to focus more effort on the AI functionality and user experience. The proposal was my contribution to the team's technical decision-making, while the architecture was developed collaboratively with the rest of the team.",
      },
      role: {
        heading: "My role",
        areas: [
          {
            heading: "Project Manager",
            items: ["Planned meetings", "Followed up progress", "Helped maintain clear task allocation", "Communicated with the team, client, and supervisor"],
          },
          {
            heading: "Scrum Master",
            items: ["Led daily stand-ups", "Facilitated sprint planning", "Ensured a shared understanding of the goals", "Facilitated discussion and joint decisions"],
          },
          {
            heading: "Developer",
            items: ["Frontend and backend development", "API integrations with the GitHub API and Gemini API", "Testing", "Contributed to the pull-request workflow"],
          },
        ],
      },
      result: {
        heading: "Result",
        body: "The project resulted in a functional prototype demonstrating how AI could support the analysis and structuring of feedback.",
        gallery: {
          ariaLabel: "Finished project result images",
          items: {
            home: {
              alt: "Home page of the Tingtun application",
              caption: "The home page is the first screen users encounter and provides an entry point to the solution.",
            },
            form: {
              alt: "Form for submitting feedback in the Tingtun application",
              caption: "The user enters the feedback that will be analysed.",
            },
            loading: {
              alt: "Loading state while the feedback is being analysed",
              caption: "While the feedback is being analysed, a loading state is shown as the AI generates the result.",
            },
            analyse: {
              alt: "AI-generated analysis with suggestions for improvement",
              caption: "The AI analyses the submitted feedback and generates suggestions for improvement.",
            },
            edit: {
              alt: "Editing submitted feedback before generating a new analysis",
              caption: "The user can edit the submitted feedback and generate a new analysis.",
            },
            sending: {
              alt: "Sending the reviewed case to GitHub",
              caption: "After reviewing the case, the user can send it to GitHub.",
            },
            github: {
              alt: "The submitted case created as a GitHub Issue",
              caption: "The submitted case is created as a GitHub Issue, where it can be commented on, followed up, opened, and closed.",
            },
            contact: {
              alt: "Contact feature for sending an email",
              caption: "The contact feature allows the user to get in touch by email.",
            },
          },
        },
      },
      learning: {
        heading: "What I learned",
        body: "The project taught me how to combine development with project leadership, communicate with a real client, and collaborate in a five-person team. I gained deeper experience with API integrations and technical decision-making while learning to adapt when planned solutions did not work as expected. An important part of the experience was balancing technical work with coordination, communication, and steady progress.",
      },
    },
  },
  skills: {
    heading: "Skills",
    introduction:
      "A selection of technologies, design methods, and tools I use to build thoughtful digital solutions.",
    categories: [
      {
        name: "Frontend",
        skills: [
          { name: "React.js", description: "Building component-based user interfaces." },
          { name: "JavaScript", description: "Interaction and logic for modern web solutions." },
          { name: "HTML", description: "Semantic and accessible website structure." },
          { name: "CSS", description: "Responsive layouts and visual presentation." },
          { name: "Material UI", description: "Accessible React components and theme systems." },
          { name: "Bootstrap", description: "Rapid development with responsive components." },
          { name: "Tailwind CSS", description: "Utility classes for flexible interface development." },
          { name: "Responsive Design", description: "Solutions adapted to different screens and devices." },
        ],
      },
      {
        name: "Backend & API",
        skills: [
          { name: "Node.js", description: "Server-side logic written with JavaScript." },
          { name: "Java", description: "Object-oriented development of robust applications." },
          { name: "C#", description: "Object-oriented development in the .NET ecosystem." },
          { name: "ASP.NET Core MVC", description: "Web applications built with MVC architecture." },
          { name: "REST API", description: "Structured interfaces between digital services." },
          { name: "JSON", description: "Exchanging structured data between systems." },
          { name: "FastAPI", description: "Developing fast APIs with Python." },
          { name: "GitHub API", description: "Integrating data and services from GitHub." },
          { name: "Gemini API", description: "Integrating generative AI into applications." },
        ],
      },
      {
        name: "Database",
        skills: [
          { name: "MySQL", description: "Relational storage and querying of data." },
          { name: "MariaDB", description: "Working with relational databases." },
          { name: "SQL", description: "Modelling, retrieving, and processing data." },
        ],
      },
      {
        name: "Design & UX",
        skills: [
          { name: "Figma", description: "Design, prototypes, and collaboration in interface projects." },
          { name: "Design Thinking", description: "User-centred exploration and problem solving." },
          { name: "Wireframing", description: "Early sketches of structure and user flows." },
          { name: "Prototyping", description: "Interactive models for testing ideas." },
          { name: "Design Systems", description: "Reusable principles and components for consistency." },
          { name: "UX/UI", description: "User-friendly and clear digital interfaces." },
          { name: "Universal Design (WCAG)", description: "Accessible solutions based on WCAG." },
        ],
      },
      {
        name: "Tools",
        skills: [
          { name: "Git", description: "Version control and structured code history." },
          { name: "GitHub", description: "Code hosting, collaboration, and project workflows." },
          { name: "Docker", description: "Reproducible development and runtime environments." },
          { name: "Docker Desktop", description: "Local management of containers." },
          { name: "Visual Studio Code", description: "Code development in a flexible editor." },
          { name: "Rider", description: "A development environment for .NET and C#." },
          { name: "HTTP / HTTPS", description: "Understanding web communication and secure data transfer." },
        ],
      },
    ],
  },
  timeline: {
    heading: "Timeline",
    introduction: "An overview of my education and experience.",
    sliderLabel: "Select a timeline event",
    entries: [
      {
        id: "thor-heyerdahl-start",
        title: "Thor Heyerdahl Upper Secondary School",
        period: "August 2020",
        type: "Education",
        description:
          "Started a general studies programme specialising in natural sciences, where I developed analytical skills and built a foundation for further studies in technology.",
      },
      {
        id: "thor-heyerdahl-completed",
        title: "Completed upper secondary school",
        period: "June 2023",
        type: "Education",
        description:
          "Completed general studies with natural sciences and gained a solid foundation for further education in IT.",
      },
      {
        id: "university-start",
        title: "Bachelor's in IT and Information Systems",
        period: "August 2023",
        type: "Education",
        description:
          "Started the bachelor's programme at the University of Agder (UiA) in Kristiansand, focusing on systems development, programming, databases, and user-centred design.",
      },
      {
        id: "tingtun-internship",
        title: "Internship at Tingtun",
        period: "August 2025 – June 2026",
        type: "Experience",
        description:
          "Completed an internship at Tingtun as part of a multidisciplinary development team. Gained practical experience with collaboration, agile methods, and digital product development while strengthening my skills in full-stack development, UX/UI design, and service design.",
      },
      {
        id: "university-completed",
        title: "Bachelor's degree completed",
        period: "June 2026",
        type: "Education",
        description:
          "Completed the bachelor's degree in IT and information systems at the University of Agder, strengthening both technical and collaborative skills through the programme and internship.",
      },
    ],
  },
  footer: {
    heading: "Get in touch",
    socialLabel: "Social media",
    copyright: "© 2026 Nina Huynh",
  },
};

export default en;
