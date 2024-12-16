/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

export default function NavBar({ isMobile, closeMenu }) {
  const commonClasses = "hover:underline text-lg p-2";

  return (
    <nav
      className={`${
        isMobile
          ? "absolute left-0 top-full w-full bg-gray-800 text-white flex flex-col p-4 z-10"
          : "hidden md:flex space-x-6"
      }`}
    >
      <ul
        className={`${isMobile ? "flex flex-col space-y-4" : "flex space-x-6"}`}
      >
        <li>
          <NavLink
            to="/"
            className={commonClasses}
            onClick={isMobile ? closeMenu : undefined}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={commonClasses}
            onClick={isMobile ? closeMenu : undefined}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
