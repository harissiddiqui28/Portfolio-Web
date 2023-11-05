import React from "react";
import logo from '../assets/images/logo.png'

function Footer() {
    return(
        <>
      

       

<body className="Foot">
  <nav className="px-8 py-4">
    <div className="flex flex-col sm:flex-row mt-12 mb-8 items-center justify-center sm:justify-between">
      <div className="text-white font-bold text-center sm:text-left text-2xl sm:ml-12">
        <img src={logo} />
      </div>
      <div className="text-white text-center sm:text-left mt-4 sm:mt-0">
        <a href="#" className="text-white hover:text-gray-300 inline-block mx-4 mt-2 sm:mt-0">Support</a>
        <a href="#" className="text-white hover:text-gray-300 inline-block mx-4 mt-2 sm:mt-0">Privacy Policy</a>
        <a href="#" className="text-white hover:text-gray-300 inline-block mx-4 mt-2 sm:mt-0">Terms and Conditions</a>
      </div>
      <a href="#" className="text-white text-center mt-4 sm:mt-0 hover:text-gray-300">
        © 2020 Enver, All Rights Reserved
      </a>
    </div>
  </nav>
</body>


        </>
    )
}


export default Footer;