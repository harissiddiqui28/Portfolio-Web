import React from "react";


function Footer() {
    return(
        <>
      

       
<body className=" Foot ">
    <nav className=" px-8 py-4">
        <div className="flex mt-12 mb-8  items-center justify-between">
            <div className="text-white font-bold  ml-12 text-2xl">
                LOGO
            </div>
            <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-white hover:text-gray-300">Support</a>
                <a href="#" className="text-white hover:text-gray-300">Privacy Policy</a>
                <a href="#" className="text-white hover:text-gray-300">Terms and Conditions</a>
              
            </div>
            <a href="#" className="text-white mr-12  hover:text-gray-300"> © 2020 Enver, All Rights Reserved</a>
        </div>
    </nav>
</body>

        </>
    )
}


export default Footer;