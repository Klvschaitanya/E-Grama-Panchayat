import React from 'react'
import OfficerLogin from './Officer_page';
import StaffLogin from './Staff_page';
import Register from './Register';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Mainpage from './Mainpage';


const Intro = () => {
  return (
    <div>
      <BrowserRouter>
    <Navbar />
    
    <Routes>
     <Route path='/' exact element={<Mainpage />} />  
    <Route path='/stafflogin' exact element={<StaffLogin />} />
    <Route path='/officerlogin'exact element={<OfficerLogin />} />
    <Route path='/register'exact element={<Register /> } />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Intro
