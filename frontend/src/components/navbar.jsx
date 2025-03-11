import { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import { Menu, X } from "lucide-react"; // Icon library (install with npm install lucide-react)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#090909]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src="/images/logo.png" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-2 mr-[100px] pt-5">
          <li>
            <Link
              to="/"
              className="hover:text-[#E65B07] text-[#FFFFFF] text-[20px] font-sans no-underline hover:no-underline focus:no-underline"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-[#E65B07] text-[#FFFFFF] text-[20px] font-sans no-underline hover:no-underline focus:no-underline"
              style={{ textDecoration: "none" }}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-[#E65B07] text-[#FFFFFF] text-[20px] font-sans no-underline hover:no-underline focus:no-underline"
              style={{ textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
