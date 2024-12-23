import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const linkClass = ({isActive}) =>
    isActive
    ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
    : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";  

  return (
    <>
    <nav className="bg-slate-700 border-b border-slate-400">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-15 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  Portfolio
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={linkClass}>
                    Home
                  </NavLink>
                  <NavLink to="/projects" className={linkClass}>
                    Project Demos
                  </NavLink>
                  <NavLink to="/resume" className={linkClass}>
                    Get my resume
                  </NavLink>
                  <NavLink to="https://github.com/Merst" className={linkClass}>
                    <FaGithub size={28}/>
                  </NavLink>
                  <NavLink to="https://www.linkedin.com/in/stephane-verville-vohl/" className={linkClass}>
                    <FaLinkedin size={28}/>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>  
    </>
  )
}
export default Navbar
