// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePage from './Pages/HomePage';
import WeddingWear from './Pages/WeddingWear';

function App() {
  // Initialise scroll‑animations (AOS) once
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation length (ms)
      once: true,       // animate only the first time you scroll to the element
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wedding-wear" element={<WeddingWear />} />
        {/* you can add more routes here, e.g. party‑wear, casual‑wear */}
      </Routes>
    </Router>
  );
}

export default App;
