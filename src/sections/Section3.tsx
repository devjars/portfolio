import Process from "../components/Process"
import Socials from "../components/Socials"
import { RiVipCrown2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Testimonials from "../components/Testimonials";

function Section3() {
  return (
   <section className="w-full rounded-2xl grid grid-cols-1 gap-2 max-w-[500px] md:col-span-2 md:max-w-full  md:grid-cols-2
    xl:w-[45%] xl:grid-rows-2 xl:grid-cols-1
     ">
     
     
    
     
<div className="w-full flex flex-col gap-4 md:gap-2 xl:flex-row  ">
  <article className="xl:w-[40%]">
      <Socials/>

   </article>
     <article className="xl:w-[60%] ">
          <Testimonials/>
      
    </article>

</div>
   
 <div className="w-full flex flex-col gap-4 md:max-h-[20vh] md:gap-2 xl:flex-row ">
   
   <article className="xl:w-[60%] ">
        <Process/>
     
    </article>

    <article className=" w-full bg-neutral/10 rounded-2xl p-12 flex flex-col items-center justify-center gap-14 md:p-8 md:gap-8
    xl:w-[40%]  xl:p-4">
    <div className="w-full flex flex-col items-center text-center">
        <RiVipCrown2Fill className="text-5xl text-secondary"/>
        <h2 className="mt-4 text-2xl font-bold font-secondary">Let's Work Together</h2>
        <p className="mt-2">Reach out and let’s build something that stands out.</p>
    </div>
    <button className="btn btn-primary btn-wide text-lg py-6 "><span><MdEmail size={24}/></span>Email me</button>
   </article>
 </div>
    
   


  
   </section>
  )
}

export default Section3
