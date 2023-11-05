import React from 'react';

const VideoPlayer = () => {
  return (
  //   <div className="Video mb-12 bg- mt-12 max-w-screen-lg mx-auto text-center">
  //   <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto">
  //     <iframe
  //       className="w-full"
  //       height="450"  
  //       src="https://www.youtube.com/embed/GC80Dk7eg_A?si=HBHSPxh-Zw27NAgB"
  //       title="YouTube video player"
  //       frameborder="0"
  //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  //       allowfullscreen
  //     ></iframe>
  //   </div>
  // </div>
  <div class="Video mb-12 bg- mt-12 max-w-screen-lg mx-auto text-center">
  <div class="w-full sm:w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 mx-auto">
    <iframe
      class="w-full"
      height="450" 
      src="https://www.youtube.com/embed/GC80Dk7eg_A?si=HBHSPxh-Zw27NAgB"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</div>
  );
};

export default VideoPlayer;
