import { socials } from "../assets/data";
import { CgArrowTopRight } from "react-icons/cg";
import Box from "./Box"
import { FaShare } from "react-icons/fa";

function Socials() {
  return (
      <Box label="Follow Me" icon={<FaShare/>} title="Online Presence">
            <div className="w-full p-2 flex flex-col gap-2">
                {socials.map((social,index)=>(
                   <a 
                        href={social.link}
                         key={index} 
                          target="_blank"
                         rel="noopener noreferrer"
                         aria-label={`Visit my ${social.name}`} 
                         className="w-full  p-3  rounded-xl flex items-center justify-between bg-base-100">
                  <span className="flex items-center gap-2">  
                    <span className="p-3 bg-neutral/5 rounded-lg text-xl">{<social.icon/>}</span>
                    <span className="font-secondary font-medium">{social.name}</span>
                    </span>
                    <span className=" text-2xl">{<CgArrowTopRight/>}</span>
                   </a>
                ))}
            </div>
      </Box>
  )
}

export default Socials
