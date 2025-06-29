import React from 'react';
import { motion } from 'framer-motion';
import '../Css/Cards.css';  // Adjusted path



const cardData = [
  { title: 'Wedding Wear', image: '/Wedding.jpg' },
  { title: 'Party Wear', image: '/Party.jpg' },
  { title: 'Book an Appointment', image: '/Appoinment.jpg' },
  
];

const Cards = () => {
  return (

    
    <div className="cards-container"  >
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={card.image} alt={card.title} />
          <h3>{card.title}</h3>
        </motion.div>
      ))}
    </div>
    
  );
};


export default Cards;
