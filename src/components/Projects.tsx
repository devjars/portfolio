import { projects } from "../assets/data";
import Box from "./Box"
import { IoExtensionPuzzle } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function Projects() {
  return (
      <Box label="Projects" title="Works Gallery" icon={<IoExtensionPuzzle/>}>
          <div className="w-full h-full  flex flex-col justify-center items-center relative  ">
             <Marquee direction="left" autoFill={true} speed={15} >
             {projects.map((project,index)=>(
                <img loading="lazy" key={index} src={project.image} alt={project.title} className="w-32 h-24 mr-2 rounded-xl" />
            ))}
           </Marquee>

          <Link to="/work" className="btn btn-primary absolute inset-y-[50%] z-20"> View Works</Link>




          </div>
      </Box>
  )
}

export default Projects
