import React from 'react'
import "./Main.scss";
import { Route, Routes } from "react-router-dom";

import About from '../../../pages/about/About';
import Contact from '../../../pages/contact/Contact';
import Home from '../../../pages/home/Home';
const Mains = () => {
  return (
    <div className='main_container '>
   <Routes>
   <Route path="/"  element={<Home/>} />
   <Route path="/home"  element={<Home/>} />
   <Route path="/about"  element={<About/>} />
   <Route path="/contact"  element={<Contact/>} />
   
   </Routes>
    </div>
  )
}

export default Mains
