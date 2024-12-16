import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import CartIcon from "../CartIcon";
import NavBar from "../NavBar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md relative">
      {/* Hamburger Menu Button */}
      <button
        className="text-xl md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      {/* NavBar Component */}
      <NavBar isMobile={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />

      {/* Cart Icon */}
      <CartIcon />
    </header>
  );
}
