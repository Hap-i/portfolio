/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [menu, setmenu] = useState(false);
  const navItems = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Skills",
    },
    {
      name: "Projects",
    },
    {
      name: "Blogs",
    },
    {
      name: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 bg-black text-white px-4 md:justify-around">
      <div>
        <h1 className="font-logo text-5xl">Suvendu</h1>
      </div>
      <ul className="hidden md:flex">
        {navItems.map((item, i) => {
          return (
            <li
              key={i}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
              {item.name}
            </li>
          );
        })}
      </ul>
      <div
        className="cursor-pointer pr-4 text-gray-500 z-10 md:hidden"
        onClick={() => setmenu(!menu)}>
        {menu ? <FaTimes size={20}></FaTimes> : <FaBars size={20}></FaBars>}
      </div>
      {menu && (
        <ul
          className="flex flex-col justify-center items-center 
      absolute top-0 left-0 w-full h-screen 
      bg-gradient-to-b from-black to-gray-800">
          {navItems.map((item, i) => {
            return (
              <li
                key={i}
                className="px-4 cursor-pointer capitalize py-4 text-2xl">
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
