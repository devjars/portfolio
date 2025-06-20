
import { Children, type ReactNode } from "react"
  type props = {
        label : string
        title : string,
        icon : ReactNode,
        children? : ReactNode
    }
function Box({label,title,icon,children} : props) {
  
  return (
    <div className="w-full bg-neutral/10 rounded-2xl   overflow-hidden shadow-md border border-neutral/10">
      <div className="w-full flex flex-col  items-center  py-6 ">
       <span className="flex items-center justify-center gap-1 ">
        <span className="text-secondary">
            {icon}
        </span>
        <span>
        <p className="text-sm font-medium">{label}</p>
        </span>
        </span>
        <h2 className="text-lg font-secondary font-medium mt-1">{title}</h2>
      </div>
     <div className="w-full">
         {children}
     </div>
    </div>
  )
}

export default Box
