import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sidebar from './components/Sidebar';
import Information from './pages/Information';
import Guide from './pages/Guide';
import Contact from './pages/Contact';


function App() {
  return (
    <div >
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/information" element={<Information />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
}

export default App;
