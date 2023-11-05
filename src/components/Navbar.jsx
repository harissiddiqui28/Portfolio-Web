import React from "react";

import Logo from '../assets/images/logo.png'


function Navbar() {
    return(
        <>
<body className="bg-black">
    <nav className=" px-8 py-4">
        <div className=" md:flex xl:flex 2xl:flex items-center justify-between">
            <div className="text-white font-bold text-2xl">

            <img className="sm:item-center  w-16 md:w-32 lg:w-48 "src={Logo} alt="" />
            </div>
            <div class="flex flex-col sm:flex-row md:flex-row justify-center items-center space-x-6">
              <a href="#" class="text-white hover:text-gray-300">Home</a>
             <a href="#" class="text-white hover:text-gray-300">Services</a>
             <a href="#" class="text-white hover:text-gray-300">Our Projects</a>
             <a href="#" class="text-white hover:text-gray-300">About Us</a>
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