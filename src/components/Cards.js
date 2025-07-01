import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';     // NEW
import '../Css/Cards.css';


const cardData = [
  {
    title: 'Wedding Wear',
    image: '/Wedding.jpg',
    link: '/wedding-wear',                   // route already set up
  },
  {
    title: 'Party Wear',
    image: '/Party.jpg',
    link: '/party-wear',                     // add a route later
  },
  {
    title: 'Book an Appointment',
    image: '/Appoinment.jpg',
    link: '/appointment',                    // add a route later
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cardData.map(({ title, image, link }, index) => (
        <Link
          key={index}
          to={link}
          style={{ textDecoration: 'none', color: 'inherit' }} // keep default text colour
        >
          <motion.div
            className="card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={image} alt={title} />
            <h3>{title}</h3>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
