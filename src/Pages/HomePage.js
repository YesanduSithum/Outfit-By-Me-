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

      {/* Welcome Text */}
      <div className="carousel-text">
        <h2>Welcome to Outfit By Me</h2>
        <p>
          Discover your unique style with our curated collection of fashion-forward designs.
          Whether you're dressing for comfort, confidence, or class — we've got something made just for you.
        </p>
      </div>

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
          <h3>🚚 Fast Delivery</h3>
          <p>Timely delivery with optional express tailoring available.</p>
        </div>
        <div className="feature-card">
          <h3>💬 Free Consultation</h3>
          <p>Book a free style consultation before you choose your design.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>“My Kandian saree was absolutely stunning – everyone loved it!”</p>
            <span>- Nuwani</span>
          </div>
          <div className="testimonial">
            <p>“Outfit By Me made my wedding dress dream come true.”</p>
            <span>- Tharushi</span>
          </div>
          <div className="testimonial">
            <p>“Great service, fast delivery, and perfect fitting.”</p>
            <span>- Dilani</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
