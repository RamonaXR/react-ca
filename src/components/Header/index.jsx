import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import CartIcon from "../CartIcon";
import NavBar from "../NavBar";

/**
 * Header Component.
 *
 * This component renders a header section that includes:
 * - A toggle button to open or close the mobile navigation menu.
 * - A navigation bar component that adapts to mobile view based on the menu state.
 * - A shopping cart icon component.
 *
 * The mobile menu's open state is managed with the useState hook.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md relative">
      <button
        className="text-xl md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      <NavBar isMobile={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />

      <CartIcon />
    </header>
  );
}
