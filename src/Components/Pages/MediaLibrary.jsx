import React from 'react';

const MediaLibrary = () => {
 return (
  <div className='mediaLibrary sections'>
   <div className="section-heading grid grid-cols-2 justify-items-center align-middle items-center ">
    <div className="left-heading">
     <h2>Media Library</h2>
     <p>0 Image</p>
    </div>
    <div className="right-heading">
     <button className='w-48 h-11 bg-blue-200 rounded text-white-200'>Upload Image</button>
    </div>
   </div>
  </div>
 );
};

export default MediaLibrary;