import { FaCode } from "react-icons/fa";
import Box from './Box'
import { services } from "../assets/data";
import Marquee from "react-fast-marquee"

const servicesrevese = services.slice().reverse().map((stack,index)=>{
return (
    <div key={index} className=" flex  items-center p-2 pr-4 bg-base-100 gap-2 rounded-xl text-neutral/80 mr-2">
                <span className="p-2 bg-neutral/10 rounded-lg">
                    <stack.icon className="text-xl"/>
                </span>
                <p className="font-medium font-secondary">{stack.headline}</p>
            </div>
          
)
})
const service = services.map((Stack,index)=>{
    return (
        <div key={index} className=" flex  items-center p-2 pr-4 bg-base-100 gap-2 rounded-xl text-neutral/80 mr-4">
                <span className="p-2 bg-neutral/10 rounded-lg">
                    <Stack.icon className="text-xl"/>
                </span>
                <p className="font-medium font-secondary">{Stack.headline}</p>
            </div>
    )
})
function Services() {

  return (
      <Box label='Services' icon={<FaCode/>} title="Web Solution">
<div className="w-full h-full relative flex flex-col justify-center items-center pb-4 gap-2 ">
        <Marquee direction="left" autoFill={true} speed={15} gradient={true} gradientColor="#FFFFFFCC" gradientWidth={20}>
        {service}
         </Marquee>
          <Marquee direction="right" autoFill={true} speed={15} gradient={true} gradientColor="#FFFFFFCC" gradientWidth={20} >
            {servicesrevese}
         </Marquee>
         {/* View More (opens modal) */}
        <button
          className="btn btn-primary absolute inset-y-[65%] z-50 px-8"
          onClick={() =>(document.getElementById('my_modal_2') as HTMLDialogElement)?.showModal()}
        >
          View all
        </button>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg"> web development services</h3>
            <div className="w-full flex flex-wrap gap-2 mt-4 xs:text-xs s:text-base">
                {service}
            </div>
          </div>
        </dialog>
    </div>
      </Box>
  )
}

export default Services
