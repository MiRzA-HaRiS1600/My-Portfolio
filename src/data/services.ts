export const services = [
  {
    number: "01",
    slug: "web-development",
    icon: "web",
    title: "Web Development",
    description:
      "Learning to bring ideas to life with clean, semantic code and the fundamentals of the modern web.",
    detail:
      "An introduction to how websites are structured and built, from the first HTML elements to pages that work reliably in a browser. This is a learning interest developed through study and personal practice.",
    topics: ["Semantic HTML and page structure", "CSS fundamentals and layout", "JavaScript basics and browser behavior", "Accessibility and clear navigation"],
    practice:
      "A small multi-page website with clear navigation, reusable page sections, and a responsive layout."
  },
  {
    number: "02",
    slug: "responsive-website-design",
    icon: "responsive",
    title: "Responsive Website Design",
    description:
      "Exploring layouts that adapt thoughtfully and stay comfortable to use on every screen size.",
    detail:
      "A design-focused learning area about making pages easy to read and use across mobile phones, tablets, and desktop screens—not simply shrinking a desktop layout.",
    topics: ["Mobile-first layout decisions", "CSS Grid and Flexbox", "Responsive spacing and typography", "Touch-friendly navigation and controls"],
    practice:
      "A landing page that rearranges its content and navigation for small, medium, and wide screens."
  },
  {
    number: "03",
    slug: "front-end-development",
    icon: "frontend",
    title: "Front-End Development",
    description:
      "Practicing HTML, CSS, and JavaScript to create accessible, engaging browser experiences.",
    detail:
      "Exploring the parts of a website people interact with directly, combining page structure, visual styling, and browser-side behavior into a useful experience.",
    topics: ["HTML, CSS, and JavaScript foundations", "Interactive controls and DOM events", "Accessible forms and validation", "Reusable interface patterns"],
    practice:
      "An interactive student dashboard prototype with clear form feedback and keyboard-friendly controls."
  },
  {
    number: "04",
    slug: "website-maintenance",
    icon: "maintenance",
    title: "Website Maintenance",
    description:
      "Building good habits around keeping websites clear, current, and working as intended.",
    detail:
      "Learning the routine checks that help a website stay dependable as content and browsers change. These are skills being developed through practice, not a claim of professional maintenance work.",
    topics: ["Checking links, content, and page behavior", "Testing layouts at different screen sizes", "Using browser developer tools", "Keeping code organized and changes manageable"],
    practice:
      "A recurring checklist for checking a personal site after content, styling, or code changes."
  },
  {
    number: "05",
    slug: "seo-optimization",
    icon: "seo",
    title: "SEO Optimization",
    description:
      "Learning how clear content and technical best practices help people discover websites through search.",
    detail:
      "Exploring foundational on-page and technical SEO practices, including useful metadata, accessible structure, and performance checks. This is a developing learning area, not a claim of professional SEO results.",
    topics: ["Page titles and meta descriptions", "Semantic headings and useful content", "Image alt text and descriptive links", "Sitemaps, indexing, and performance basics"],
    practice:
      "Review a small website and prepare a checklist of practical improvements to its content, metadata, accessibility, and performance."
  },
  {
    number: "06",
    slug: "software-quality-assurance",
    icon: "quality",
    title: "Software Quality Assurance (SQA)",
    description:
      "Practicing systematic testing to find issues and make websites more reliable and easier to use.",
    detail:
      "Learning how to check software against expected behavior using clear test cases and careful exploratory testing. This is a developing skill area, not a claim of professional QA experience.",
    topics: ["Writing test cases and acceptance criteria", "Functional and regression testing", "Responsive and cross-browser checks", "Reporting bugs with clear reproduction steps"],
    practice:
      "Create and run a test checklist for a website's navigation, forms, responsive layouts, and common user flows."
  }
] as const;

export type Service = (typeof services)[number];
