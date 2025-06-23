import { BsStack } from "react-icons/bs";
import Box from './Box'
import { stacks } from "../assets/data";
import Marquee from "react-fast-marquee"

const stackreverse = stacks.slice().reverse().map((stack,index)=>{
return (
    <div key={index} className=" flex  items-center p-2 pr-4 bg-base-100 gap-2 rounded-xl text-neutral/80 mr-2">
                <span className="p-2 bg-neutral/10 rounded-lg">
                    <stack.icon className="text-xl"/>
                </span>
                <p className="font-medium font-secondary">{stack.text}</p>
            </div>
          
)
})
const stack = stacks.map((Stack,index)=>{
    return (
        <div key={index} className=" flex  items-center p-2 pr-4 bg-base-100 gap-2 rounded-xl text-neutral/80 mr-2">
                <span className="p-2 bg-neutral/10 rounded-lg">
                    <Stack.icon className="text-xl"/>
                </span>
                <p className="font-medium font-secondary">{Stack.text}</p>
            </div>
    )
})

function Stack() {
  return (
    <Box label='My Stack'title='Tech Arsenal' icon={<BsStack/>} >
    <div className="w-full h-full  relative flex flex-col justify-center items-center pb-4  ">
        <Marquee direction="left" autoFill={true} speed={15} gradient={true} gradientColor="#FFFFFFCC" gradientWidth={20}>
        {stack}
         </Marquee>
          <Marquee direction="right" autoFill={true} speed={15} gradient={true} gradientColor="#FFFFFFCC" gradientWidth={20} className="mt-3">
            {stackreverse}
         </Marquee>
        <button
          className="btn btn-primary absolute inset-y-[60%] z-50 px-8"
          onClick={() =>(document.getElementById('my_modal_1') as HTMLDialogElement)?.showModal()}
        >
          View all
        </button>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Tools & Technologies</h3>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 xs:text-xs s:text-base">
                {stack}
            </div>
          </div>
        </dialog>
    </div>
    </Box>  
  )
}

export default Stack
