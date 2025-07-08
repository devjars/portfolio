import { projects } from "../assets/data";
import Box from "../components/Box"
import {FaFolder} from "react-icons/fa";

import Nav from "../components/Nav";
import Features from "../components/Features";
import Stack from "../components/Stack";
import Process from "../components/Process";
import Footer from "../components/Footer";
import Status from "../components/Status";
import { useEffect } from "react";
function Projects() {

 useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'auto' }); 
}, []);
return (
  <div className="w-full bg-neutral/10 px-3 lg:p-3 ">
<div className="w-full   mx-auto pt-3 flex flex-col md:flex-row-reverse md:justify-center gap-4  lg:max-w-[1024px]
        xl:max-h-[800px] xl:flex xl:max-w-[1440px]">
      <div className="md:col-start-2 w-full md:max-w-[500px] "> 
         <Nav/>
         <div className="mt-4 hidden md:grid grid-cols-1 gap-4 ">
          <Status/>
       <div className="hidden lg:block xl:hidden">   <Stack/> </div> 
          <Features/>
         <div className="xl:hidden"> <Process/></div>
          <Footer/>
         </div>
      </div>
    <div className="w-full max-w-[500px] xl:max-w-full  md:col-start-1 md:row-start-1 flex  ">
         <Box icon={<FaFolder/>} label="My Works" title="Personal Projects">
      <div className="w-full grid grid-cols-1 gap-4 p-2 xl:grid-cols-2">
  {projects.map((prod, index) => (
    <a
      key={index}
      href={prod.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card group bg-base-100 w-full shadow-sm hover:shadow-lg transform hover:scale-[1.015] transition-all duration-200 cursor-pointer"
    >
      <figure>
        <img src={prod.image} alt="Project Image" className="w-full" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-base font-medium transition-all duration-200 hover:underline group-hover:decoration-secondary">
          {prod.title}
        </h2>
        <ul className="flex flex-wrap gap-1">
          {prod.tools.map((tool, toolIndex) => (
            <li
              key={toolIndex}
              className={`badge ${prod.color} text-white text-xs font-medium flex items-center gap-1`}
            >
              <span>{<tool.icon />}</span>
              {tool.name}
            </li>
          ))}
        </ul>
      </div>
    </a>
  ))}
</div>


   </Box>
    </div>

  </div>
    </div>

  )
}

export default Projects
