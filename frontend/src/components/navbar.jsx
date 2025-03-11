import { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import { Menu, X } from "lucide-react"; // Icon library (install with npm install lucide-react)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          MyBrand
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 bg-blue-700 p-4">
          <li><Link to="/" className="block hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="block hover:text-gray-300">About</Link></li>
          <li><Link to="/services" className="block hover:text-gray-300">Services</Link></li>
          <li><Link to="/contact" className="block hover:text-gray-300">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
