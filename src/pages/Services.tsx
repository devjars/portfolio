import {  services } from "../assets/data";
import Box from "../components/Box"
import {FaFolder} from "react-icons/fa";

import Nav from "../components/Nav";
import Stack from "../components/Stack";
import Process from "../components/Process";
import Footer from "../components/Footer";
import { useEffect } from "react";
function Services() {
    useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'auto' }); 
}, []);
  return (
   <div className="w-full bg-neutral/10 px-3 lg:p-3 min-h-screen ">
<div className="w-full   mx-auto pt-3 flex flex-col-reverse md:flex-row-reverse md:justify-center gap-4  lg:max-w-[1024px]
        xl:max-h-[800px] xl:flex xl:max-w-[1440px]">
      
    <div className="w-full max-w-[500px] xl:max-w-full  md:col-start-1 md:row-start-1 flex mx-auto ">
         <Box icon={<FaFolder/>} label="Services" title="Web Solution">
      <div className="w-full grid grid-cols-1 gap-4 p-2 xl:grid-cols-2">
        {services.map((service,index)=>(
            <div key={index} className="card bg-neutral/10 text-primary-content ">
  <div className="card-body">
    <h2 className="card-title"><span className="p-3 bg-base-300 rounded-xl">{<service.icon className="text-2xl"/>}</span>  {service.headline}</h2>
    <p>{service.subheadline}</p>
    
  </div>
</div>
        ))}
</div>


   </Box>
    </div>
    <div className="md:col-start-2 w-full md:max-w-[500px] "> 
         <Nav/>
         <div className="mt-4 hidden md:grid grid-cols-1 gap-4 ">
          <Stack/>
       <div className="hidden lg:block xl:hidden">   <Stack/> </div> 
         <div className="xl:hidden"> <Process/></div>
          <Footer/>
         </div>
      </div>

  </div>
    </div>
  )
}

export default Services
