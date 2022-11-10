import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import FileUpload from './FileUpload';
import Modal from './Modal';
import notFoundData from '../../assets/image_notFoundsvg.svg'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const MediaLibrary = () => {
 const [user] = useAuthState(auth)
 console.log(user);
 return (
  <div className='mediaLibrary sections'>
   <div className="section-heading grid grid-cols-2 justify-items-center align-middle items-center ">
    <div className="left-heading">
     <h2>Media Library</h2>
     <p>0 Image</p>
    </div>
    <div className="right-heading ">
     {user ?
      <label htmlFor='upload-modal' className='btn w-48 h-11 bg-blue-200 rounded text-white-200 hover:bg-blue-100 flex items-center justify-center'><span className='pr-2'> <FaPlusCircle /></span> Upload Image</label>
      :
      <Link to='/login' className='btn w-48 h-11 bg-blue-200 rounded text-white-200 hover:bg-blue-100 flex items-center justify-center'>Login</Link>
     }

    </div>
   </div>
   <div className="section-img flex justify-center items-center pt-10">
    <div className="text-center">
     <img src={notFoundData} alt="" />
     <p className='py-10'>Click on 'Upload' to start adding images</p>
    </div>
   </div>
   <Modal></Modal>
  </div>
 );
};

export default MediaLibrary;