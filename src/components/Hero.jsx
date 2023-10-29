import React from "react";
import heroimg from "../assets/images/Heropic.png"

function Hero(){
return(

    <>
   <div className="bg-black Hero text-white p-4 pl-12  flex">
    <div className="lg:w-1/2 pr-4 p-4  secOne mt-12 mb-12">
        <h1 className="text-white text-4xl font-extrabold leading-snug ">Build Your </h1>
        <h1 className="text-white text-4xl font-extrabold leading-snug ">Awesome </h1>
        <h1 className="text-white text-4xl font-extrabold leading-snug "> Platform</h1>
        <p className="text-white mt-8">Enver studio is a digital studio that offers several
        <br/> services such as UI/UX Design to developers, 
        <br/>we will provide the best service 
         for those of you who use <br/>
         our services.</p>
        <button className="bg-white text-black  ServerBtn mt-8 px-4 py-2 rounded-full">Our Services</button>
    </div>
    <div className="lg:w-1/2 mt-4 flex-1p-4 mt-12 mb-12 secTwo">
       <img src={heroimg} alt="" />
    </div>
</div>


    </>
)


}

export default Hero;