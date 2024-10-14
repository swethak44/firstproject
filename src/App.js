import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './About';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
