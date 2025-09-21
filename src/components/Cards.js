import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Css/Cards.css';

const cardData = [
  {
    title: 'Wedding Wear',
    subtitle: 'Bridal sarees & gowns',
    image: '/Wedding.jpg',
    link: '/wedding-wear',
  },
  {
    title: 'Party Wear',
    subtitle: 'Cocktail & evening outfits',
    image: '/Party.jpg',
    link: '/party-wear',
  },
  {
    title: 'Book an Appointment',
    subtitle: 'Free consultation available',
    image: '/Appoinment.jpg',
    link: '/appointment',
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cardData.map(({ title, subtitle, image, link }, index) => (
        <Link
          key={index}
          to={link}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <motion.div
            className="card"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="card-image">
              <img src={image} alt={title} />
            </div>
            <div className="card-text">
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
