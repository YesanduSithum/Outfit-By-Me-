import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import '../Css/HomePage.css';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel   />
      <div className="carousel-text" >
         <h2>Welcome to Outfit By Me</h2>
           <p>
              Discover your unique style with our curated collection of fashion-forward designs.
              Whether you're dressing for comfort, confidence, or class — we've got something made just for you.
         </p></div>

      <Cards />
      <Footer />
    </>
  );
};

export default HomePage;
