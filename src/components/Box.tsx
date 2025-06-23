
import {  type ReactNode } from "react"
  type props = {
        label : string
        title : string,
        icon : ReactNode,
        children? : ReactNode,
        classname? : string
    }
function Box({label,title,icon,children,classname} : props) {
  
  return (
    <div className="w-full h-full   bg-neutral/10 rounded-2xl flex flex-col  shadow-md border border-neutral/10 ">
      <div className="w-full flex flex-col  items-center  py-6  h-[30%] ">
       <span className="flex items-center justify-center gap-1 ">
        <span className="text-secondary">
            {icon}
        </span>
        <span>
        <p className="text-sm font-medium">{label}</p>
        </span>
        </span>
        <h2 className="text-lg font-secondary font-medium mt-1 px-4 text-center">{title}</h2>
      </div>
     <div className={`w-full flex-1 mt-2 ${classname}`}>
         {children}
     </div>
    </div>
  )
}

export default Box
