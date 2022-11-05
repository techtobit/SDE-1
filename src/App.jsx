import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Login from './Components/Auth/Login'
import SingUp from './Components/Auth/SingUp';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/singup' element={<SingUp />}></Route>
      </Routes>
      {/* <Login />
      <SingUp></SingUp> */}
    </div>
  )
}

export default App
