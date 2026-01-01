// HomePage.js
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
      <Carousel />

      {/* Hero Section */}
      <section className="hero-intro">
        <h1>Outfit By Me</h1>
        <p>
          Elevate your style with tailor-made outfits designed for elegance and comfort. 
          From weddings to parties, we bring your dream look to life.
        </p>
        <a href="/appointment" className="btn-primary">Book Now</a>
      </section>

      {/* Cards Section */}
      <Cards />

      {/* Feature Highlights */}
      <section className="features">
        <div className="feature-card">
          <h3>🧵 Custom Tailoring</h3>
          <p>Each outfit is handmade by our expert designers to fit you perfectly.</p>
        </div>
        <div className="feature-card">
          <h3>🎉 Event Ready</h3>
          <p>Wedding, party, or casual – we’ve got collections for every occasion.</p>
        </div>
        <div className="feature-card">
          <h3>💬 Free Consultation</h3>
          <p>Book a free style consultation before you choose your design.</p>
        </div>
      </section>

      {/* Testimonials */}
      

      <Footer />
    </>
  );
};

export default HomePage;
