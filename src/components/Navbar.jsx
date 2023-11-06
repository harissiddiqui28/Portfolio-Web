import React from "react";

import Logo from '../assets/images/logo.png'

import { useState } from 'react'; 



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return(
        <>
    <body className="bg-black">
      <nav className="px-8 py-4">
        <div className="md:flex xl:flex 2xl:flex items-center justify-between">
          <div className="text-white font-bold text-2xl">
            <img className="w-16 md:w-32 lg:w-48 xl:w-48 2xl:w-48" src={Logo} alt="" />
          </div>
          <div className="md:hidden flex justify-end">
            <button
              className="text-white hover:text-gray-300"
              id="menu-toggle"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className={`flex  md:inline  flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row space-x-6 items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* <div className={`md:flex xl:flex 2xl:flex space-x-6 flex-col sm:flex-row${isMenuOpen ? 'block' : 'hidden'}`}> */}
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Our Projects
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About Us
            </a>
           
          </div> 
          <button className="hidden sm:hidden md:inline lg:inline xl:inline 2xl:inline text-white hover:text-gray-300 border border-solid border-white border-2 p-2">
            Contact Us
          </button>
        
        </div>
      </nav>
    </body>



        </>
    )
}


export default Navbar;