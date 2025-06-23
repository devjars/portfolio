import { project,experience } from "../assets/data"
import { IoExtensionPuzzle } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
function Status() {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-4 ">
         <div className="bg-neutral/10 p-4 rounded-xl flex flex-col items-center justify-center gap-4 shadow-md border border-neutral/10 ">
            <h2 className="flex items-center  text-5xl font-black">0{project}<GoPlus className="text-2xl"/></h2>
            <p className="w-full flex justify-center items-center gap-1  py-1 bg-neutral/10 rounded-full font-medium tracking-tight text-sm s:text-base"> <IoExtensionPuzzle/>Projects</p>
        </div>
          <div className="bg-neutral/10 p-4 rounded-xl flex flex-col items-center justify-center gap-4 shadow-md border border-neutral/10">
            <h2 className="flex items-center  text-5xl font-black">0{experience}<GoPlus className="text-2xl"/></h2>
            <p className="w-full flex justify-center items-center gap-1  py-1 bg-neutral/10 rounded-full font-medium tracking-tight text-sm s:text-base"> <FaUserTie/>Experience</p>
        </div>
    </div>
  )
}

export default Status
