import { SiProcesswire } from "react-icons/si";
import Box from './Box'
import { workflow } from "../assets/data";



function Process() {
  return (
      <Box label='Work Process' icon={<SiProcesswire/>} title="Workflow Highlights">
       <div className="w-full p-2 flex flex-col gap-2 xl:hidden ">
        
        {workflow.map((work,index)=>(
            <div key={index} className="collapse collapse-arrow bg-base-100 ">
  <input type="checkbox" />
  <div className="collapse-title p-3 ">
   <h2 className="flex gap-2 items-center font-medium max-s:text-sm"><span className="p-2 bg-neutral/5 rounded-lg">{<work.icon/>}</span>{work.title}</h2>
  </div>
  <div className="collapse-content">
    <p>{work.description}</p>
  </div>
</div>
        ))}

       

       </div>
  <ul className="hidden xl:flex flex-col gap-2 p-3 ">
  {workflow.map((work, index) => (
    <li
      key={index}
      className="tooltip tooltip-left flex items-center gap-2 p-2 bg-base-100 rounded-xl text-sm font-medium"
      data-tip={work.description}
      tabIndex={0} // Required for tooltip to show on hover/focus
    >
      <span className="p-2 rounded-lg bg-neutral/10 text-lg">
        <work.icon />
      </span>
      {work.title}
    </li>
  ))}
</ul>



      </Box>
  )
}

export default Process
