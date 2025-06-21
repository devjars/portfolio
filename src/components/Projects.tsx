import { projects } from "../assets/data";
import Box from "./Box"
import { IoExtensionPuzzle } from "react-icons/io5";
import Marquee from "react-fast-marquee";

function Projects() {
  return (
      <Box label="Projects" title="Works Gallery" icon={<IoExtensionPuzzle/>}>
          <div className="full flex flex-col items-center relative  py-8 md:py-8">
             <Marquee direction="left" autoFill={true} speed={15} >
             {projects.map((project,index)=>(
                <img key={index} src={project} alt={project} className="w-32 h-24 mr-2 rounded-xl" />
            ))}
           </Marquee>

           <button className="btn btn-primary absolute inset-y-[60%] z-20">View Works</button>
          </div>
      </Box>
  )
}

export default Projects
