import React from 'react';

import ImgOne from '../assets/images/PicThirds.png'



const ImageGrid = () => {
  return (
    <div className="flex Grid   p-12">
    
    
      <div className="w-1/3  border-0 sm:h-64 sm:w-64  justify-center relative mr-16">
        <img
          src={''}
          className=" w-full h-full  h-2/3  mb-16 ImgOne mt-16 rounded-t-lg"
        />
      </div>


      <div className="w-1/3  sm:h-64 sm:w-64 ml-16  relative mr-16 flex  items-center">
        <img
         
          className="w-full h-full l mt-16 h-2/3 ImgOne1 "
        />
      </div>


      <div className="w-1/3 sm:h-64 sm:w-64 ml-16  relative">
        <img
        
          className="w-full h-full  h-2/3 mt-16  ImgOne2  absolute bottom-0"
        />
      </div>
      
    </div>
  );
};

export default ImageGrid;
