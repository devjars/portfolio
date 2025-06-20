import { badge } from "../assets/data";

function Badge() {
  return (
    <div className=" bg-neutral/5 p-3 rounded-xl xs:mt-2 xs:mx-1">
          <ul className="flex flex-wrap gap-2">
            {badge.map((li,index)=>(
              <li key={index}
               className="flex items-center gap-1 text-neutral/80 text-sm py-1 px-2 rounded-full border border-white/5 shadow-sm tracking-tight">
                <li.icon className="text-secondary"/>
                {li.text}
              </li>
            ))}
          </ul>
        </div>
  )
}

export default Badge
