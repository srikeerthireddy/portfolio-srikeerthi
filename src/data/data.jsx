import lanCImg from "../assets/certificates/one.jpg";
import excelImg from "../assets/certificates/Two.jpg";
import htmlImg from "../assets/certificates/certificate4.jpg";
import nextImg from "../assets/certificates/certificate2.jpg";
import sqlImg from  "../assets/certificates/certificate3.png";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaPython, FaJava, FaDatabase, 
} from "react-icons/fa";
import { 
  SiVite, SiTailwindcss, SiChakraui, SiCplusplus 
} from "react-icons/si";

const data = {
  certificates: [
    { name: "C Programming Certificate", img: lanCImg },
    { name: "Excel Mastery Certificate", img: excelImg },
    {name:"HTML,CSS,Java,JavaScript Full-Stack Course",img:htmlImg},
    {name:"Next.js",img:nextImg},
    {name:"SQL Database Design",img:sqlImg}
  ],
  techStack: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={60} /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={60} /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={60} /> },
    { name: "React", icon: <FaReact className="text-cyan-400" size={60} /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" size={60} /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" size={60} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={60} /> },
    { name: "Chakra UI", icon: <SiChakraui className="text-teal-300" size={60} /> },
    { name: "SQL", icon: <FaDatabase className="text-indigo-500" size={60} /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" size={60} /> },
    { name: "Java", icon: <FaJava className="text-red-500" size={60} /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-400" size={60} /> },
  ]
};

export default data;
