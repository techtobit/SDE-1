import React from 'react';
import '../../App.scss';

const FileUpload = () => {
 return (
  <div className='sections px-20 '>
   <div className="py-4">
    <p className="section-title py-4 border-b-2 border-white-100 font-bold">Upload New Image</p>
   </div>
   <div className="upload-container flex justify-center items-center flex-col ">
    <div className="file-inputs flex justify-center">
     <input type="file" className='input-field' />
     <div className="browse-input-btn flex justify-center items-center flex-col gap-1">
      <p>Drop file here</p>
      <p>or</p>
      <button className='brows-btn px-6 py-1 rounded-md cursor-pointer hover:bg-blue-100 hover:text-white-200'>Browse</button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default FileUpload;