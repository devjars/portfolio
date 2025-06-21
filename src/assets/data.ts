import type { IconType } from "react-icons"
import { FaSchool } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { MdLocationPin,MdVerified ,MdUpdate} from "react-icons/md";
import { RiReactjsLine ,RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs,FaLaptopCode, FaRocket ,
    FaSearch,
  FaUniversalAccess,
FaClipboardList, FaPaintBrush, FaCubes, FaBug, FaTools,FaLinkedin,FaFacebookSquare ,FaGithub   } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import { HiOutlineSparkles } from 'react-icons/hi';
import { BiDevices,BiBug } from 'react-icons/bi';
import { TbRocket } from 'react-icons/tb';
import { AiFillInstagram } from "react-icons/ai";
import Project1 from "../assets/project1.webp"
import Project2 from "../assets/project2.webp"
import Project3 from "../assets/project3.webp"
import Project4 from "../assets/project4.webp"
import profile from "../assets/profile.jpg"


type badgetype = {
    text : string
    icon : IconType 
}
type service = {
    headline : string,
    subheadline : string,
    icon : IconType 
}



const badge : badgetype[] = [
     {text : "Solid Human", icon : MdVerified },
    {text : "Philippines", icon : MdLocationPin },
    {text : "Filipino/English", icon :IoIosGlobe  },
    {text : "BS Information Tech", icon :IoSchoolSharp },
    {text : "Stratford International School", icon :FaSchool  }
   



]

export const experience:number = 1
export const project : number = 3

const stacks:badgetype[] = [
    {text : "React", icon: RiReactjsLine},
    {text : "Tailwind CSS", icon: RiTailwindCssFill},
    {text : "Express", icon: FaNodeJs},
    {text : "MySQL", icon: SiMysql},



    
]

//  { icon: FaReact, name: "React" },
//   { icon: SiFirebase, name: "Firebase" },
//   { icon: FaHtml5, name: "HTML5" },
//   { icon: FaCss3Alt, name: "CSS" },
//   { icon: FaJsSquare, name: "JavaScript" },
//   { icon: SiTypescript, name: "TypeScript" },
//   { icon: SiMysql, name: "MySQL" },
//   { icon: SiNodedotjs, name: "Express JS" },
//   { icon: SiTailwindcss, name: "Tailwind CSS" },
//   { icon: FaGitAlt, name: "Git" },
//   { icon: FaGithub, name: "GitHub" },
//   { icon: SiPostman, name: "Postman" },
//   { icon: SiCanva, name: "Canva" },
 const services: service[] = [
  {
    headline: "Website Development",
    subheadline: "Custom-built websites from the ground up — landing pages, portfolios, or business sites.",
    icon: FaLaptopCode,
  },
    {
    headline: "Website Optimization",
    subheadline: "Speed improvements, code clean-up, and SEO adjustments for better performance and ranking.",
    icon: TbRocket,
  },
  {
    headline: "Bug Fixing & Debugging",
    subheadline: "Fixing layout issues, broken features, or performance bugs in existing websites.",
    icon: BiBug,
  },
  {
    headline: "UI Enhancements",
    subheadline: "Improving visual design, user experience, and interaction to make your site more effective.",
    icon: HiOutlineSparkles,
  },
  {
    headline: "Responsive Conversion",
    subheadline: "Making your existing website mobile-friendly and fully responsive across all screen sizes.",
    icon: BiDevices,
  },

  {
    headline: "Site Maintenance & Updates",
    subheadline: "Regular updates, content changes, and tech fixes to keep your site running smoothly.",
    icon: MdUpdate,
  },
];
export const features : badgetype[] = [
  {
    text: "Optimized",
    icon: FaRocket,
  },
  {
    text: "SEO-Ready",
    icon: FaSearch,
  },
  {
    text: "Responsive",
    icon: BiDevices,
  },
  {
    text: "Accessible for All",
    icon: FaUniversalAccess,
  },
  
];




const projects : string [] = [Project1,Project2,Project3,Project4]
type process = {
  title: string;
  description: string;
  icon : IconType
};

const workflow: process[] = [
  {
    title: "Planning & Design",
    description:
      "Understand project goals, gather requirements, and create UI layouts to define the structure and visual direction.",
    icon: FaClipboardList,
  },
  {
    title: "Component Development",
    description:
      "Build modular, reusable components to ensure consistent design and efficient development.",
    icon: FaCubes,
  },
  {
    title: "Testing & Optimization",
    description:
      "Test across devices and browsers, fix bugs, and optimize performance using tools like Lighthouse.",
    icon: FaBug,
  },
  {
    title: "Deployment & SEO",
    description:
      "Deploy the project to platforms like Firebase or Vercel, and implement SEO best practices for visibility.",
    icon: FaRocket,
  },
];

type socials = {
  name : string
  link : string
  icon : IconType
}
const socials : socials[]= [
  {name : "Linkedin", link : "no yet", icon :FaLinkedin  },
  {name : "Facebook", link : "no yet", icon :FaFacebookSquare  },
  {name : "Instagram", link : "no yet", icon :AiFillInstagram  },
  {name : "Github", link : "no yet", icon :FaGithub   },


] 
export type testimony = {
    image : string
    name : string
    relation : string
    message : string
    date : string
}
const testimonies: testimony[] = [
  {
    image: profile,
    name: "Juan Dela Cruz",
    relation: "Capstone Project partner",
    message: "Anjo was incredibly reliable and took initiative throughout our entire project. He always delivered quality work on time and was great to collaborate with.",
    date: "March 2024"
  },
  {
    image: profile,
    name: "Maria Santos",
    relation: "Instructor",
    message: "John consistently showed a strong understanding of front-end development. His attention to detail and willingness to learn were impressive.",
    date: "January 2024"
  },
  {
    image: profile,
    name: "Leo Ramirez",
    relation: "Coworker",
    message: "Although we didn’t work on dev-related tasks, Anjo was always dependable, fast to learn, and great at solving problems under pressure.",
    date: "August 2023"
  },
];


export { badge,stacks, projects,services,workflow,socials,testimonies}