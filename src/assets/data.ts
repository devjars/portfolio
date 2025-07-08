import type { IconType } from "react-icons"
import { FaSchool } from "react-icons/fa6";
import { IoSchoolSharp,IoLogoFirebase  } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { MdLocationPin,MdVerified ,MdUpdate} from "react-icons/md";
import { RiReactjsLine  } from "react-icons/ri";
import { BsFillLaptopFill } from "react-icons/bs";
  
import { HiOutlineSparkles } from 'react-icons/hi';
import { BiDevices,BiBug } from 'react-icons/bi';
import { TbRocket } from 'react-icons/tb';
import { AiFillInstagram } from "react-icons/ai";
import Project1 from "../assets/project1.webp"
import Project2 from "../assets/project2.webp"
import Project3 from "../assets/project3.webp"
import Project4 from "../assets/project4.webp"


// import Project3 from "../assets/project3.webp"
import Markgabriel from "../assets/markgabriel.webp"
import Villamero from "../assets/image (1).webp"
import Aziel from "../assets/azel.webp"


import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaLaptopCode,
  FaRocket,
  FaSearch,
  FaUniversalAccess,
  FaClipboardList,
  FaCubes,
  FaBug,
  FaLinkedin,
  FaFacebookSquare,
  FaUserAlt ,
  FaFolder 
} from "react-icons/fa";

import {
  SiFirebase,
  SiTypescript,
  SiMysql,
  SiPostman,
  SiCanva,
  SiTailwindcss,
} from "react-icons/si";




type badgetype = {
    text : string
    icon : IconType 
}
type service = {
    headline : string,
    subheadline : string,
    icon : IconType 
}
export type testimony = {
    image : string
    name : string
    relation : string
    message : string
    date : string
}
type socials = {
  name : string
  link : string
  icon : IconType
}
type navtype = {
  icon : IconType
  text : string
  link : string
}

export type projecttype = {
  image: string;
  title: string;
  description: string;
  link : string;
   color : string
  tools: {
    icon: IconType;
    name: string;
  }[];
};


const badge : badgetype[] = [
     {text : "Solid Human", icon : MdVerified },
    {text : "Philippines", icon : MdLocationPin },
    {text : "Filipino/English", icon :IoIosGlobe  },
    {text : "BS Information Tech", icon :IoSchoolSharp },
    {text : "Stratford International School", icon :FaSchool  }
   



]

export const experience:number = 1
export const project : number = 4

const nav :navtype [] = [
  {link : "/", text : "About", icon : FaUserAlt },
  {link : "/work" ,text : "Works", icon : FaFolder  },
  {link : "/services", text : "Services", icon : BsFillLaptopFill},


]

const stacks: badgetype[] = [
  { text: "React", icon: FaReact },
  { text: "Firebase", icon: SiFirebase },
  { text: "HTML", icon: FaHtml5 },
  { text: "CSS3", icon: FaCss3Alt },
  { text: "JavaScript", icon: FaJsSquare },
  { text: "TypeScript", icon: SiTypescript },
  { text: "MySQL", icon: SiMysql },
  { text: "Express JS", icon: FaNodeJs }, // or use SiNodedotjs if preferred
  { text: "Tailwind CSS", icon: SiTailwindcss },
  { text: "Git", icon: FaGitAlt },
  { text: "GitHub", icon: FaGithub },
  { text: "Postman", icon: SiPostman },
  { text: "Canva", icon: SiCanva },
];
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
    text: "Accessible ",
    icon: FaUniversalAccess,
  },
  
];




const projects : projecttype [] = [
 // Project 1
{
  image: Project1,
  title: "Jars Web Services Landing Page",
  description: "A professional landing page for Jars Web Services, showcasing the brand, services, and contact details. Designed to be fully responsive, visually appealing, and optimized for user engagement.",
  link: "https://jarswebservices.netlify.app/",
  color : "bg-blue-900",
  tools: [
    {
      icon: RiReactjsLine,
      name: "React",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind",
    }
  ]
},

// Project 2
{
  image: Project2,
  title: "Elle Power Electrical Contractor Website",
  description: "A professional business website for Elle Power, an electrical contractor, showcasing their services, past projects, and contact information.",
  link: "https://ellepower.netlify.app/",
  color : "bg-red-800/80",
  tools: [
    {
      icon: RiReactjsLine,
      name: "React",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
    }
  ]
},

  {
  image: Project3,
  title: "Genethink Thesis Title Generator",
  description: "A simple AI-powered thesis title generator for students. Users can select or type their course and instantly get relevant thesis ideas. No login required. Built with React and Express.",
  link: "https://jarsthesis-title-generator.vercel.app/",
  color: "bg-purple-700",
  tools: [
    {
      icon: RiReactjsLine,
      name: "React",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
    },
    {
      icon: FaNodeJs,
      name: "Express.js",
    }
  ]
},


   {
  image: Project4, 
  title: "Web based information management system", 
  description: "A dynamic school website that includes both public-facing features and a private admin dashboard for content management. Responsive, interactive, and secure platform for managing school content and enhancing user experience.",
  color : "bg-blue-900/90",
  link: "https://swbimssis.web.app/",
  tools: [
    {
      icon: IoLogoFirebase,
      name: "Firebase",
    },
    {
      icon: RiReactjsLine,
      name: "React",
    }
  ]
}

  
  
  
  
   
  ]

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
    title: "Development",
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
    "Prepare the project for deployment based on client preferences and integrate SEO best practices to ensure visibility and reach.",
  icon: FaRocket,
}

];


const socials : socials[]= [
  {name : "Linkedin", link : "https://www.linkedin.com/in/johnanthonysolana/", icon :FaLinkedin  },
  {name : "Facebook", link : "https://www.facebook.com/john.anthony.solana.2024/", icon :FaFacebookSquare  },
  {name : "Instagram", link : "https://www.instagram.com/anjo_solana/", icon :AiFillInstagram  },
  {name : "Github", link : "https://github.com/devjars", icon :FaGithub   },


] 

const testimonies: testimony[] = [
  {
    image: Villamero,
    name: "Joshua Villamero",
    relation: "Capstone Project partner",
    message: "Anjo was incredibly reliable and took initiative throughout our entire project. He always delivered quality work on time and was great to collaborate with.",
    date: "November 2024"
  },
  {
    image: Aziel,
    name: "Aziel Taruc",
    relation: "LPT,Computer Engineer  ",
    message: "John consistently showed a strong understanding of front-end development. His attention to detail and willingness to learn were impressive.",
    date: "January 2024"
  },
  {
    image: Markgabriel,
    name: "Mark Gabriel",
    relation: "Coworker",
    message: "Although we didn’t work on dev-related tasks, Anjo was always dependable, fast to learn, and great at solving problems under pressure.",
    date: "August 2023"
  },
];


export { badge,stacks, projects,services,workflow,socials,testimonies,nav}
