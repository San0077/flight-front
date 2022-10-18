import './App.css';
import { Routes,Route,useNavigate } from 'react-router';
import React, { useEffect, useState, useContext,} from 'react';
import { Login } from './components/sign&login/login';
import { Signin } from './components/sign&login/sign';
import { Booking } from './Booking/booking';

function App() {

  return (
   <div>
    
    
    <Routes>
      <Route path="/" element={<Login/>} ></Route>
      <Route path="/signin" element={<Signin/>} ></Route>
      <Route path="/booking" element={<Booking/>} ></Route>
     </Routes>
 
   </div>

  );
}
   
export default App;