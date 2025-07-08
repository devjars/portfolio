import { nav } from "../assets/data"
import { Link, useLocation } from "react-router-dom"


function Nav() {

    const CurrLocation = useLocation()
  return (
    <nav className="w-full flex  justify-center items-center    " >
      <ul className="w-full  max-w-[500px] bg-neutral/10 flex items-center justify-between  gap-2 rounded-xl p-2 shadow-md border border-neutral/10">
        {nav.map((li, index) => (
          <li key={index} className={`w-full  rounded-lg ${CurrLocation.pathname === li.link ? 'transition-all duration-300 ease-in bg-primary ' : 'bg-base-200'} `}>
            <Link to={li.link} className="flex items-center justify-center font-medium text-sm  py-3 gap-2 ">
              <span>{ <li.icon />}</span>
              {li.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
