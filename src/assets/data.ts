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
    title: "Project Planning",
    description:
      "Understand project goals, gather requirements, and outline the overall structure before development begins.",
    icon: FaClipboardList,
  },
  {
    title: "UI Design & Layout",
    description:
      "Build responsive layouts using semantic HTML and Tailwind CSS, ensuring mobile-first and accessible design.",
    icon: FaPaintBrush,
  },
  {
    title: "Component Development",
    description:
      "Create modular, reusable components to speed up development and maintain code consistency.",
    icon: FaCubes,
  },
  {
    title: "Testing & Debugging",
    description:
      "Test across devices and browsers, debug issues, and validate performance and accessibility with tools like Lighthouse.",
    icon: FaBug,
  },
  {
    title: "Optimization & SEO",
    description:
      "Optimize assets and performance, add SEO meta tags, and ensure fast, search-friendly pages.",
    icon: FaRocket,
  },
  {
    title: "Deployment & Maintenance",
    description:
      "Deploy to platforms like Firebase or Vercel and monitor for updates, bugs, or future improvements.",
    icon: FaTools,
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

export { badge,stacks, projects,services,workflow,socials}