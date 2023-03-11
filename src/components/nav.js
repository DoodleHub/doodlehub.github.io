import { useState } from "react";
import { Menu } from "react-feather";

export const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="fixed h-12 w-full bg-gradient-to-l from-black via-gray-900 to-gray-800 sm:h-16">
        <div className="hidden h-full items-center justify-end gap-8 pr-10 text-lg font-medium text-teal-600 sm:flex">
          <a className="hover:text-white" href="#">
            Home
          </a>
          <a className="hover:text-white" href="#">
            Portfolio
          </a>
          <a className="hover:text-white" href="#">
            Blog
          </a>
        </div>
        <div className="flex h-full items-center justify-end pr-5 sm:hidden">
          <Menu className="text-white" onClick={() => setToggle(!toggle)} />
        </div>
        <div
          className={`${
            toggle ? "max-h-32 py-5" : "max-h-0"
          } absolute flex  w-full flex-col items-end justify-center gap-4 overflow-hidden bg-gray-900 pr-5 text-white transition-all duration-300 ease-linear`}
        >
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">Blog</a>
        </div>
      </div>
    </nav>
  );
};
