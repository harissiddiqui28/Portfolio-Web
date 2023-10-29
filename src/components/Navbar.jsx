import React from "react";

import Logo from '../assets/images/logo.png'


function Navbar() {
    return(
        <>
      

       
<body className="bg-black">
    <nav className=" px-8 py-4">
        <div className="flex items-center justify-between">
            <div className="text-white font-bold text-2xl">

            <img src={Logo} alt="" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-white hover:text-gray-300">Home</a>
                <a href="#" className="text-white hover:text-gray-300">Services</a>
                <a href="#" className="text-white hover:text-gray-300">Our Projects</a>
                <a href="#" className="text-white hover:text-gray-300">About Us</a>
            </div>
            <button className="hidden md:inline-flex items-center justify-center px-5 py-2 border border-[#fff] text-white hover:bg-[#fff] hover:text-[#19191B]">
                Contact Us
            </button>
        </div>
    </nav>
</body>

        </>
    )
}


export default Navbar;