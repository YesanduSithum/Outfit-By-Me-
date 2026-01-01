import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Css/WeddingWear.css';
import Navbar from '../components/Navbar';

const WeddingWear = () => {
  useEffect(() => {
    // Initialize AOS after a slight delay to ensure components are rendered
    setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 120
      });
    }, 100);

    // Only scroll to top if we're not coming from a hash link
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const weddingStyles = [
    {
      id: 'indian',
      title: 'Indian Saree',
      subtitle: 'Timeless Elegance & Cultural Richness',
      description: 'The Indian bridal saree is a masterpiece of tradition. Made from rich fabrics like silk and brocade, it features elaborate embroidery and brilliant colors that capture the spirit of celebration.',
      features: [
        'Traditional patterns: Kanjeevaram, Banarasi, Mysore',
        'Customizable blouses with embroidery and mirror work',
        'Options for different body types and preferences',
        'Matching jewellery and veils available'
      ],
      tailoring: '2–4 weeks',
      image: '/indian.png'
    },
    {
      id: 'kandian',
      title: 'Kandian Saree',
      subtitle: 'Graceful Sri Lankan Heritage',
      description: 'Known as the Osariya, the Kandian saree is the pride of Sri Lankan tradition. With its regal drape and structured jacket, this look brings a queen-like elegance to every bride.',
      features: [
        'Peplum jacket design with lace or beadwork',
        'Unique shoulder pleats and waist wrap',
        'Option to include family heirlooms in the outfit',
        'Matching bridal jewelry sets available'
      ],
      tailoring: '3–5 weeks',
      image: '/kandian.png'
    },
    {
      id: 'western',
      title: 'Western Bridal Gown',
      subtitle: 'Modern Elegance & Minimalist Charm',
      description: 'From flowing A-line gowns to fitted mermaid dresses, Western wedding wear offers stylish options for every modern bride. Choose from luxurious lace, satin, or chiffon with custom cuts and silhouettes.',
      features: [
        'Custom necklines: sweetheart, off-shoulder, halter',
        'Available with long trains or minimalist designs',
        'Perfect for garden weddings, beach ceremonies, or receptions',
        'Veils and accessories can be matched'
      ],
      tailoring: '2–6 weeks',
      image: '/western.png'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="weddingwear-page">
        <div className="page-header" data-aos="fade-down">
          <h1>Wedding Wear Collections</h1>
          <p>Choose from our elegant wedding wear styles designed for your special day</p>
        </div>

        <div className="wedding-cards-container">
          {weddingStyles.map((style, index) => (
            <div 
              key={style.id} 
              className="wedding-card" 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              id={style.id}
            >
              <div className="wedding-card-image">
                <img src={style.image} alt={style.title} />
              </div>
              <div className="wedding-card-content">
                <h2>{style.title}</h2>
                <h4>{style.subtitle}</h4>
                <p className="description">{style.description}</p>
                
                <div className="features-box">
                  <h5>Key Features:</h5>
                  <ul>
                    {style.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="tailoring-info">
                  <strong>Tailoring Time:</strong> {style.tailoring}
                </div>
              </div>
            </div>
          ))}
        </div>

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