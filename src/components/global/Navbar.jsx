import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full z-50 backdrop-blur-md bg-[#0a0a0a]/70 border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <img
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
            alt="Logo"
            className="w-8 h-8"
          /> */}
          <h1 className="text-white font-extrabold text-xl tracking-wide">
            Cryp<span className="text-[#f0ac10]">Lounge</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-gray-200 font-medium">
          {["News", "Markets", "Analysis", "Guides"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group transition"
            >
              {item}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#f0ac10] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/10 text-white px-4 py-2 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f0ac10]/60 w-40 transition-all duration-300 focus:w-56"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
          </div>

          {/* Subscribe Button */}
          <button className="bg-gradient-to-r from-[#f0ac10] to-[#ffcc00] text-black font-semibold px-4 py-2 rounded-full hover:shadow-[0_0_15px_#f0ac10] transition-all duration-300">
            Subscribe
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111]/95 border-t border-white/10 text-white px-6 py-4 space-y-4 animate-slideDown">
          {["News", "Markets", "Analysis", "Guides"].map((item) => (
            <a
              key={item}
              href="#"
              className="block hover:text-[#f0ac10] transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/10 text-white px-4 py-2 rounded-full text-sm placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-[#f0ac10] to-[#ffcc00] text-black font-semibold px-4 py-2 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
