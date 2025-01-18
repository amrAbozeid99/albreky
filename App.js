import './App.css';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Articles from './Components/Articles'
import InspectionRequest from './Components/InspectionRequest';
import Opinios from './Components/Opinios';
import ServicesA from './Components/ServicesA';
import ServicesB from './Components/ServicesB';
import Prodict from './Components/Prodict';
import Contact from './Components/Contact';
import SwipeProdictA from './Components/slider/SwipeProdictes/SwipeProdictA';
import ProdictA from './Components/ProdictA';
import ProdictB from './Components/ProdictB';
import ProdictC from './Components/prodictC';
import ProdictD from './Components/ProdictD';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  
     




  return (

    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/Home' element={<Home/>} /> 
        <Route path='/About' element={<About/>} /> 
        <Route path='/Services' element={<Services/>} /> 
        <Route path='/Articles' element={<Articles/>} /> 
        <Route path='/InspectionRequest' element={<InspectionRequest/>} /> 
        <Route path='/Opinios' element={<Opinios/>} /> 
        <Route path='/ServicesA' element={<ServicesA/>} /> 
        <Route path='/ServicesB' element={<ServicesB/>} /> 
        <Route path='/Prodict' element={<Prodict/>} /> 
        <Route path='/Contact' element={<Contact/>} /> 
        <Route path='/ProdictA' element={<ProdictA/>} /> 
        <Route path='/ProdictB' element={<ProdictB/>} /> 
        <Route path='/ProdictC' element={<ProdictC/>} /> 
        <Route path='/ProdictD' element={<ProdictD/>} /> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
