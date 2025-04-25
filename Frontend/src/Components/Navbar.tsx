import { Link } from 'react-scroll';

export function Navbar(){
  return (
    <nav className="fixed top-0 w-full shadow-lg z-50 border-b-1 border-slate-100 dark:border-gray-900 backdrop-blur-sm">
      <div className="flex justify-center space-x-5 md:space-x-20 p-3 md:p-4 justify-center">
        {["home", "about", "projects", "contact"].map((section) => (
          <li className="flex" key={section}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-60}
              className="cursor-pointer capitalize font-semibold text-gray-400 dark:text-yellow-600 hover:text-black hover:dark:text-white"
              activeClass="active-link"
            >
              {section}
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
};
