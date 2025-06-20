import Process from "../components/Process"
import Socials from "../components/Socials"
import { RiVipCrown2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Section3() {
  return (
   <div className="w-full flex flex-col gap-4">
    <article className="w-full">
      <Process/>
    </article>

    <article className="w-full">
      <Socials/>
    </article>
   <article className="w-full bg-neutral/10 rounded-2xl p-12 flex flex-col items-center justify-center gap-12">
    <div className="w-full flex flex-col items-center text-center">
        <RiVipCrown2Fill className="text-5xl text-secondary"/>
        <h2 className="mt-4 text-2xl font-bold font-secondary">Let's Work Together</h2>
        <p className="mt-2">Reach out and let’s build something that stands out.</p>
    </div>
    <button className="btn btn-primary btn-wide text-lg py-6 "><span><MdEmail size={24}/></span>Email me</button>
   </article>
  
   </div>
  )
}

export default Section3
