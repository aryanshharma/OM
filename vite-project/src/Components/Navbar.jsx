import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



export default function Navbar() {
  const menudata = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Our Team", href: "/#team" },
    { name: "Contact", href: "/contact" },
  ];
   
const [toggle, settoggle] = useState(false);

return (
  <div className="bg-white w-full h-16 text-gray-800 flex justify-between items-center px-4 md:px-8 fixed top-0 left-0 z-50 shadow-md border-b border-blue-100">

    {/* Logo */}
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">
        H
      </div>

      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-blue-800 leading-none">
          Hospital
        </h1>
        <span className="text-xs text-red-600 font-medium">
          Healthcare & Care
        </span>
      </div>
    </div>

    {/* Desktop Menu */}
    <ul className="gap-6 hidden md:flex items-center">
      {
        menudata.map((v, i) => (
          <li
            key={i}
            className="font-semibold text-gray-700 hover:text-blue-700 transition-all duration-300 relative group"
          >
            <a href={v.href}>{v.name}</a>

            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))
      }
    </ul>

    {/* Appointment Button */}
    <div className="hidden md:block">
      <button className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full px-5 py-2 shadow-md hover:shadow-lg transition-all duration-300">
        Book Appointment
      </button>
    </div>

    {/* Mobile Menu Button */}
    <button
      onClick={() => settoggle(!toggle)}
      className="md:hidden text-blue-800 text-2xl p-2 hover:text-red-600 transition-colors"
    >
      {toggle ? <RxCross2 /> : <FaBars />}
    </button>

    {/* Mobile Menu */}
    {toggle && (
      <div className="absolute right-0 left-0 top-full bg-white shadow-lg border-t-2 border-blue-600 md:hidden">

        <ul className="flex flex-col p-4 gap-1">
          {
            menudata.map((v, i) => (
              <li
                key={i}
                className="font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300"
              >
                <a
                  href={v.href}
                  className="block px-4 py-3"
                  onClick={() => settoggle(false)}
                >
                  {v.name}
                </a>
              </li>
            ))
          }

          {/* Mobile Appointment Button */}
          <li className="pt-3">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg py-3 transition-all duration-300">
              Book Appointment
            </button>
          </li>
        </ul>

      </div>
    )}

  </div>
)}
