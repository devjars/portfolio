import { projects } from "../assets/data";
import Box from "./Box"
import { IoExtensionPuzzle } from "react-icons/io5";
import Marquee from "react-fast-marquee";

function Projects() {
  return (
      <Box label="Projects" title="Works Gallery" icon={<IoExtensionPuzzle/>}>
          <div className="w-full h-full  flex flex-col justify-center items-center relative  ">
             <Marquee direction="left" autoFill={true} speed={15} >
             {projects.map((project,index)=>(
                <img key={index} src={project.image} alt={project.title} className="w-32 h-24 mr-2 rounded-xl" />
            ))}
           </Marquee>

          <button
  className="btn btn-primary absolute inset-y-[65%] z-20"
  onClick={() =>
    (document.getElementById('my_modal_3') as HTMLDialogElement)?.showModal()
  }
>
  View Works
</button>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box max-w-3xl">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Projects</h3>

    <div className=" flex  justify-center flex-wrap  gap-4 mt-4 xs:text-xs s:text-base xl:justify-start">
      {projects.map((pro, index) => (
        <div key={index} className=" max-w-[350px] bg-neutral/10 rounded-xl p-4 relative">
          <div className="flex  gap-2">
            <img src={pro.image} alt={pro.title} 
            className="w-[100px] lg:w-[150px] "/>
            <h2 className="font-medium">{pro.title}</h2>
          </div>
          <div className="">
            <p className="text-sm mt-2">{pro.description}</p>
            <ul className="p-2 flex items-center flex-wrap gap-2">
              {pro.tools.map((tool,index)=>(
                <li key={index} className=" flex items-center"><span><tool.icon/></span> <span>{tool.name}</span></li>
              ))}
            </ul>
            <button className="btn btn-primary mt-2 absolute right-0 bottom-0 m-2">Visit Link</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</dialog>

          </div>
      </Box>
  )
}

export default Projects
