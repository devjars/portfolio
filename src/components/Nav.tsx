import { FaUser, FaLaptopCode, FaBriefcase } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import type { IconType } from 'react-icons';

type NavType = {
  name: string;
  icon: IconType;
  link: string;
};

const nav: NavType[] = [
  { name: 'About', icon: FaUser, link: '/' },
  { name: 'Works', icon: FaLaptopCode, link: '/works' },
  { name: 'Services', icon: FaBriefcase, link: '/services' },
];

function Nav() {
  const url = useLocation()
  return (
    <nav className='w-full bg-neutral/10 p-2 rounded-2xl '>
      <ul className="flex justify-between gap-2 max-[360px]:gap-1">
        {nav.map((item, index) => (
          <li key={index} className={`${url.pathname === item.link ? 'bg-secondary  ' : 'bg-neutral/90'} w-full  rounded-xl text-gray-200`}>
            <Link to={item.link} className="  flex justify-center items-center  gap-2 xs:p-2 xs:text-sm s:p-3 s:text-base">
              <item.icon className="" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
