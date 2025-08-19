import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import 'swiper/css';
import 'swiper/css/pagination';
import '../Css/Carousel.css';

const slides = [
  {
    image: '/carousel.jpg',
    title: 'Wedding Collection',
    subtitle: 'We make your dream dress',
    buttonText: 'Visit Now',
    link: '/wedding-wear', 
  },
  {
    image: '/carousel2.jpg',
    title: 'Party Style Essentials',
    subtitle: 'Trendy. Comfortable. Bold.',
    buttonText: 'Explore',
  },
  {
    image: '/carousel3.jpg',
    title: 'Custom Tailoring',
    subtitle: 'Made Especially for You',
    buttonText: 'Get Started',
  },
];

const Carousel = () => {
  return (
    <Swiper
      loop
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="main-swiper"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div className="slide-content">
            <img src={slide.image} alt={slide.title} />
            {/* ---------- OPTIONAL OVERLAY ---------- */}
            <div className="overlay">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button>{slide.buttonText}</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
