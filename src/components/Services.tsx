import { FaCode } from "react-icons/fa";
import Box from './Box'
import { services } from "../assets/data";
import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom";

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
        <Link to="/services" className="btn btn-primary absolute inset-y-[50%] z-50 px-8">View all</Link>

      
    </div>
      </Box>
  )
}

export default Services
