import capstone from "../assets/projects/capstone.jpeg";
import dish from "../assets/projects/dish.jpg";
import brick from "../assets/projects/brick.jpeg";
import infra from "../assets/projects/infra.png";

const projects = [
  {
    title: "Smart-Public-Infrastructure-Monitoring-System",
    description:
      "Provides role-based dashboards for citizens, government departments, and administrators to view, assign, and manage complaints.",
    tech: [
      "React.js (Next.js)",
      "Tailwind CSS",
      "Express.js (Next.js API Routes)",
      "PostgreSQL",
      "JWT authentication",
      "GitHub Actions",
    ],
    image: infra,
    link: "https://smart-public-infrastructure-monitor-sooty.vercel.app/",
    github: "https://github.com/srikeerthireddy/smart-public-infrastructure-monitoring.git",
    period: "March 2026 - Ongoing",
    impact: "Enables assignment of complaints to departments and tracks their status until resolved.",
    learning:
      " Implemented role-based access control and built a scalable REST-style API using Next.js API routes.",
  },
  {
    title: "Calm Corner",
    description:
      "Responsive mental health web platform enabling users to track emotions, access mindfulness resources, and engage with educational content. Addressed the lack of accessible tools for monitoring mental well-being and self-care routines.",
    tech: [
      "React.js",
      "Chakra UI",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "GitHub Actions",
    ],
    image: capstone,
    link: "https://calmcorner-red.vercel.app/",
    github: "https://github.com/srikeerthireddy",
    period: "April 2024 – May 2025",
    impact: "Processed over 10+ user activity logs per month with 25% system reliability.",
    learning:
      "Secure authentication, scalable API design, and CI/CD automation for production deployments.",
  },
  {
    title: "Brick-Breaker",
    description:
      "Engaging interactive game where players control a paddle to bounce a ball and break bricks while preventing the ball from falling.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: brick,
    link: "https://brick-breaker-game.vercel.app/",
    github: "https://github.com/srikeerthireddy/BRICK-BREAKER-GAME.git",
    period: null,
    impact: null,
    learning: null,
  },
  {
    title: "Dish Discovery",
    description:
      "Recipe web page that dynamically generates a random recipe on page reload, fetched from an API.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: dish,
    link: "https://dish-discovery-frontened-ca-3and-design-ca-2.vercel.app/",
    github: "https://github.com/srikeerthireddy/Dish-Discovery-Frontened-CA-3and-design-CA-2.git",
    period: null,
    impact: null,
    learning: null,
  },
];

export default projects;
