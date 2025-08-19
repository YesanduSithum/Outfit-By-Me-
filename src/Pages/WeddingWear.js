import React, { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/WeddingWear.css';
import Navbar from '../components/Navbar';

const WeddingWear = () => {
  const indianRef = useRef(null);
  const kandianRef = useRef(null);
  const westernRef = useRef(null);

  useEffect(() => {
    // Initialize AOS after a slight delay to ensure components are rendered
    setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 120 // This helps with scroll calculations
      });
    }, 100);

    // Only scroll to top if we're not coming from a hash link
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const scrollTo = (ref) => {
    if (ref.current) {
      const headerOffset = 120;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="weddingwear-page">
        {/* Scroll Buttons */}
        <div className="tab-buttons">
          <button onClick={() => scrollTo(indianRef)}>Indian</button>
          <button onClick={() => scrollTo(kandianRef)}>Kandian</button>
          <button onClick={() => scrollTo(westernRef)}>Western</button>
        </div>

        {/* Indian Section */}
        <section 
          className="wear-section" 
          ref={indianRef} 
          data-aos="fade-up"
          id="indian"
        >
          <div className="image-container">
            <img src="/indian.png" alt="Indian Saree" className="wear-img" />
          </div>
          <div className="text-container">
            <div className="wear-text">
              <h2>Indian Saree</h2>
              <h4>Timeless Elegance & Cultural Richness</h4>
              <p>
                The Indian bridal saree is a masterpiece of tradition. Made from rich fabrics like silk and brocade, it features elaborate embroidery and brilliant colors that capture the spirit of celebration.
              </p>
              <ul>
                <li>Traditional patterns: Kanjeevaram, Banarasi, Mysore</li>
                <li>Customizable blouses with embroidery and mirror work</li>
                <li>Options for different body types and preferences</li>
                <li>Matching jewellery and veils available</li>
              </ul>
              <p><strong>Tailoring Time:</strong> 2–4 weeks</p>
            </div>
          </div>
        </section>

        {/* Kandian Section */}
        <section 
          className="wear-section kandian-section" 
          ref={kandianRef} 
          data-aos="fade-up"
          id="kandian"
        >
          <div className="text-container">
            <div className="wear-text">
              <h2>Kandian Saree</h2>
              <h4>Graceful Sri Lankan Heritage</h4>
              <p>
                Known as the Osariya, the Kandian saree is the pride of Sri Lankan tradition. With its regal drape and structured jacket, this look brings a queen-like elegance to every bride.
              </p>
              <ul>
                <li>Peplum jacket design with lace or beadwork</li>
                <li>Unique shoulder pleats and waist wrap</li>
                <li>Option to include family heirlooms in the outfit</li>
                <li>Matching bridal jewelry sets available</li>
              </ul>
              <p><strong>Tailoring Time:</strong> 3–5 weeks</p>
            </div>
          </div>
          <div className="image-container">
            <img src="/kandian.png" alt="Kandian Saree" className="wear-img" />
          </div>
        </section>

        {/* Western Section */}
        <section 
          className="wear-section" 
          ref={westernRef} 
          data-aos="fade-up"
          id="western"
        >
          <div className="image-container">
            <img src="/western.png" alt="Western Gown" className="wear-img" />
          </div>
          <div className="text-container">
            <div className="wear-text">
              <h2>Western Bridal Gown</h2>
              <h4>Modern Elegance & Minimalist Charm</h4>
              <p>
                From flowing A-line gowns to fitted mermaid dresses, Western wedding wear offers stylish options for every modern bride. Choose from luxurious lace, satin, or chiffon with custom cuts and silhouettes.
              </p>
              <ul>
                <li>Custom necklines: sweetheart, off-shoulder, halter</li>
                <li>Available with long trains or minimalist designs</li>
                <li>Perfect for garden weddings, beach ceremonies, or receptions</li>
                <li>Veils and accessories can be matched</li>
              </ul>
              <p><strong>Tailoring Time:</strong> 2–6 weeks</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-us" data-aos="zoom-in">
          <h2>Why Choose <span>Outfit By Me</span>?</h2>
          <div className="reasons">
            <div className="reason">
              <h3>🧵 Expert Tailoring</h3>
              <p>Each design is custom-measured and handcrafted by bridal specialists.</p>
            </div>
            <div className="reason">
              <h3>🎨 Personalized Designs</h3>
              <p>Choose your fabric, color palette, accessories, and finishing style.</p>
            </div>
            <div className="reason">
              <h3>🚚 Fast & Reliable</h3>
              <p>Fast service for optional rush orders and fittings.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WeddingWear;