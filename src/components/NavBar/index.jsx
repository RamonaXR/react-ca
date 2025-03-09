import { NavLink } from "react-router-dom";

/**
 * NavBar Component.
 *
 * Renders a navigation bar with links to "Home" and "Contact".
 * The layout adjusts based on the `isMobile` prop:
 * - In mobile view, the navigation is displayed as a vertically stacked menu.
 * - In desktop view, the navigation is hidden on smaller screens and displayed on medium and larger screens.
 *
 * The `closeMenu` callback is invoked when a link is clicked in mobile view, allowing the menu to be closed.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isMobile - Indicates if the mobile view is active.
 * @param {Function} props.closeMenu - Callback function to close the mobile menu.
 * @returns {JSX.Element} The rendered NavBar component.
 */
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
