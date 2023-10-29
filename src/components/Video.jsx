import React from 'react';

const VideoPlayer = () => {
  return (
    <div className=" Video mb-12 bg- mt-12  max-w-screen-lg mx-auto">
    
      <iframe className='w-full' height={900} src="https://www.youtube.com/embed/GC80Dk7eg_A?si=HBHSPxh-Zw27NAgB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

     
    </div>
  );
};

export default VideoPlayer;
