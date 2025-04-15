import capstone from '../assets/projects/capstone.jpeg'
import dish from '../assets/projects/dish.jpg'
import brick from '../assets/projects/brick.jpeg'

const projects = [
  {
    title: "Calm Corner",
    description: "A serene digital platform designed to promote mental well-being by offering users tools to track dailymoods, monitor mental health symptoms, and access self-care resources.",
    tech: ["React.js","Charka-Ui Css", "MongoDB", "Express.js"],
    image: capstone,
    link: "https://calmcorner-o50kdbb00-sri-keerthis-projects.vercel.app/",
  },
  {
    title: "Brick-Breaker",
    description: "An engaging and interactive game where players control a paddle to bounce a ball and break brickswhile preventing the ball from falling.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: brick,
    link: "https://brick-breaker-game.vercel.app/",
  },
  {
    title: "Dish Discovery",
    description: "The Recipe Web Page dynamically generates a random recipe on page reload, fetched from an API.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: dish,
    link: "https://dish-discovery-frontened-ca-3and-design-ca-2.vercel.app/",
  },
];

export default projects;
