import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Login from './Components/Auth/Login'
import SingUp from './Components/Auth/SingUp';
import MediaLibrary from './Components/Pages/MediaLibrary';

function App() {

  return (
    <div className="App">
      {/* <MediaLibrary /> */}
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/singup' element={<SingUp />}></Route>
        <Route path='/library' element={<MediaLibrary />} />
      </Routes>
      {/* <Login />
      <SingUp></SingUp> */}
    </div>
  )
}

export default App
