import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import FileUpload from './FileUpload';
import Modal from './Modal';

const MediaLibrary = () => {
 return (
  <div className='mediaLibrary sections'>
   <div className="section-heading grid grid-cols-2 justify-items-center align-middle items-center ">
    <div className="left-heading">
     <h2>Media Library</h2>
     <p>0 Image</p>
    </div>
    <div className="right-heading ">
     <label htmlFor='upload-modal' className='btn w-48 h-11 bg-blue-200 rounded text-white-200 flex items-center justify-center'><span className='pr-2'> <FaPlusCircle /></span> Upload Image</label>
    </div>
   </div>
   <Modal></Modal>
  </div>
 );
};

export default MediaLibrary;