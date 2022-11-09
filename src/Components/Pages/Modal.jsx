import React from 'react';
import FileUpload from './FileUpload';
import '../../App.scss'

const Modal = () => {
 return (
  <div>
   <input type="checkbox" id="upload-modal" className="modal-toggle" />
   <div className="modal  modal-bottom sm:modal-middle">
    <div className="modal-box section-modal">
     <div className=" pb-4">
      <div className=" flex justify-between items-center border-b-2 border-white-100">
       <p className="section-title font-bold">Upload New Image</p>
       <label htmlFor="upload-modal" className="btn btn-sm bg-white-200 text-black-200 border-0 hover:border-0 hover:bg-white-200">X</label>
      </div>
     </div>

     <div className="upload-container  flex justify-center items-center flex-col ">
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
   </div>
  </div>
 );
};

export default Modal;