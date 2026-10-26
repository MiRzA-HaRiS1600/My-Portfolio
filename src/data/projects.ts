export const projects = [
  {
    number: "01",
    slug: "personal-portfolio-website",
    type: "PERSONAL SITE",
    title: "Personal Portfolio Website",
    description:
      "A clean, responsive home for an aspiring developer's introduction, interests, and future work.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    preview: "portfolio",
    overview:
      "This sample concept explores how a student developer could introduce themselves, share areas of interest, and organize future work in one responsive website.",
    goals: ["Introduce the developer and their interests", "Keep page navigation clear and consistent", "Adapt the layout for phone, tablet, and desktop screens"]
  },
  {
    number: "02",
    slug: "responsive-landing-page",
    type: "WEB DESIGN",
    title: "Responsive Landing Page",
    description:
      "A product-style page concept focused on clear messaging, hierarchy, and adaptable layouts.",
    technologies: ["HTML", "CSS Grid", "Responsive UI"],
    preview: "landing",
    overview:
      "This sample concept is a fictional product landing page for practicing visual hierarchy, concise content, and a layout that adjusts across screen sizes.",
    goals: ["Make the primary message easy to scan", "Arrange content for different screen widths", "Practice consistent spacing and typography"]
  },
  {
    number: "03",
    slug: "student-management-system",
    type: "STUDENT TOOL",
    title: "Student Management System",
    description:
      "A learning project concept for organizing student records and presenting information clearly.",
    technologies: ["JavaScript", "UI Design", "Data Concepts"],
    preview: "dashboard",
    overview:
      "This sample concept imagines a simple student dashboard as a way to explore organized information, clear interface patterns, and basic data-management ideas.",
    goals: ["Present student information in a readable format", "Explore a dashboard layout and table patterns", "Plan clear feedback for common user actions"]
  }
] as const;

export type Project = (typeof projects)[number];
