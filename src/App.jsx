import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Login from './Components/Auth/Login'
import RequireAuth from './Components/Auth/RequireAuth';
import SingUp from './Components/Auth/SingUp';
import MediaLibrary from './Components/Pages/MediaLibrary';

function App() {

  return (
    <div className="App">
      {/* <MediaLibrary /> */}
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/singup' element={<SingUp />}></Route>
        <Route path='/' element={
          <RequireAuth>
            <MediaLibrary />
          </RequireAuth>
        } />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
