import lanCImg from "../assets/certificates/one.jpg";
import excelImg from "../assets/certificates/Two.jpg";
import htmlImg from "../assets/certificates/certificate4.jpg";
import nextImg from "../assets/certificates/certificate2.jpg";
import sqlImg from "../assets/certificates/certificate3.png";
import hackathonImg from "../assets/certificates/Hackthon.jpeg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiChakraui,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiDocker,
  SiPostman,
  SiVercel,
  SiGithub,
  SiRedis,
  SiJavascript,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const data = {
  certificates: [
    { name: "C Programming Certificate", img: lanCImg },
    { name: "Excel Mastery Certificate", img: excelImg },
    {
      name: "Full-Stack Programming Course | HTML, CSS, Java, JavaScript",
      img: htmlImg,
    },
    { name: "Next.js", img: nextImg },
    {
      name: "SQL Database and Optimization | Google Cloud Computing",
      img: sqlImg,
    },
    { name: "Hackathon Certificate", img: hackathonImg },
  ],
  techStack: [
    { name: "C++", icon: <SiCplusplus className="text-blue-400" size={48} /> },
    { name: "Java", icon: <FaJava className="text-red-500" size={48} /> },
    { name: "Python", icon: <FaPython className="text-amber-400" size={48} /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={48} /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={48} /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400" size={48} />,
    },
    { name: "React.js", icon: <FaReact className="text-cyan-400" size={48} /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" size={48} />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400" size={48} />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={48} /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-300" size={48} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600" size={48} />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-600" size={48} />,
    },
    { name: "Redis", icon: <SiRedis className="text-red-600" size={48} /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" size={48} /> },
    {
      name: "Git / GitHub",
      icon: <SiGithub className="text-white" size={48} />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-500" size={48} />,
    },
    { name: "Vercel", icon: <SiVercel className="text-white" size={48} /> },
    { name: "Chakra UI", icon: <SiChakraui className="text-teal-300" size={48} /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" size={48} /> },
    {
      name: "Golang",
      icon: <TbBrandGolang className="text-cyan-400" size={48} />,
    },
    { name: "SQL", icon: <FaDatabase className="text-indigo-500" size={48} /> },
  ],
};

export default data;
