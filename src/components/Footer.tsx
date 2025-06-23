import { RiVipCrown2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <footer 
         className=" w-full h-full  bg-neutral/10 rounded-2xl flex  flex-col  items-center text-center p-4 justify-center gap-8 flex-1/2">
    <div className=" flex flex-col items-center text-center">
        <RiVipCrown2Fill className="text-5xl text-secondary"/>
        <h2 className="mt-4 text-xl font-bold font-secondary">Let's Work Together</h2>
        <p className="mt-2">Reach out and let’s build something that stands out.</p>
    </div>
    <button className="btn btn-primary btn-wide "><span><MdEmail size={24}/></span>Email me</button>
   </footer>

  )
}

export default Footer
