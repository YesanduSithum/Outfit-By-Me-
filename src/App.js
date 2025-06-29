import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePage from './Pages/HomePage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
        // Run animation only once
    });
  }, []);

  return <HomePage />;
}

export default App;
