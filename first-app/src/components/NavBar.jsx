import React from "react";
import { Moon } from "lucide-react";
const navItems = ["Home", "About", "Contact"];
const NavBar = () => {
  return (
    <>
      <nav className="font-poppins flex items-center justify-between p-4 text-white">
        <div className="nav-logo p-2 text-2xl font-bold">LOGO</div>
        <ul className="flex justify-around gap-8">
          {navItems.map((item, index) => (
            <li key={index} className="px-4 py-2">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <button className="border border-gray-400 p-3 rounded-md">
          <Moon />
        </button>
      </nav>
    </>
  );
};

export default NavBar;
