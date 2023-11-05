import React from 'react';

import ImgOne from '../assets/images/PicThirds.png'
import ImgTwo from '../assets/images/PicOne.png'
import ImgThree from '../assets/images/PicTwo.png'

const ImageGrid = () => {
  return (

    // <div className= "flex Grid  justify-center p-12">
    
    
    //   <div className="w-1/3  border-0 sm:h-64 sm:w-64  justify-center relative mr-16">
    //     <img
    //       src={ImgOne}
    //       className=" w-full h-full  h-2/3  mb-16 ImgOne mt-16 rounded-t-lg"
    //     />
    //   </div>


    //   <div className="w-1/3  sm:h-64 sm:w-64 ml-16  relative mr-16 flex  items-center">
    //     <img
    //      src={ImgTwo}
    //       className="w-full h-full l mt-16 h-2/3 ImgOne1 "
    //     />
    //   </div>


    //   <div className="w-1/3 sm:h-64 sm:w-64 ml-16  relative">
    //     <img
    //     src={ImgThree}
    //       className="w-full h-full  h-2/3 mt-16  ImgOne2  absolute bottom-0"
    //     />
    //   </div>
      
    // </div>


//     <div className="flex Grid justify-center p-12 flex-col items-center">
//   <div className="w-full sm:w-1/2 border-0 sm:h-64 sm:w-64 justify-center relative mt-4">
//     <img
//       src={ImgOne}
//       className="w-full h-full h-2/3 mt-4 rounded-t-lg"
//     />
//   </div>

//   <div className="w-full sm:w-1/2 border-0 sm:h-64 sm:w-64 justify-center relative mt-4">
//     <img
//       src={ImgTwo}
//       className="w-full h-full h-2/3 mt-4"
//     />
//   </div>

//   <div className="w-full sm:w-1/2 border-0 sm:h-64 sm:w-64 justify-center relative mt-4">
//     <img
//       src={ImgThree}
//       className="w-full h-full h-2/3 mt-4"
//     />
//   </div>
// </div>

<div className="flex Grid justify-center p-12 flex-col items-center sm:flex-row">
  <div className="w-full sm:w-1/3 border-0 sm:h-64 sm:w-64 justify-center relative mt-4 ">
    <img
      src={ImgOne}
      className="w-full h-full h-2/3 mt-4 rounded-t-lg"
    />
  </div>

  <div className="w-full sm:w-1/3 border-0 sm:h-64 sm:w-64 justify-center relative mt-4 lg:ml-16">
    <img
      src={ImgTwo}
      className="w-full h-full h-2/3 mt-4"
    />
  </div>

  <div className="w-full sm:w-1/3 border-0 sm:h-64 sm:w-64 justify-center relative mt-4  lg:ml-16">
    <img
      src={ImgThree}
      className="w-full h-full h-2/3 mt-4"
    />
  </div>
</div>

    

  );
};

export default ImageGrid;
