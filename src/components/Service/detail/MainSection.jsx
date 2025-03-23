import Carousel from "./Carousel";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export default function MainSection({ name, minOrder, price, desc, tags, images, path }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 bg-white w-full">
      <div className="my-20 mx-4 md:mx-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <Carousel images={images} path={path} />
          </div>
          <div className="space-y-3 md:space-y-6 my-auto">
            <h1 className="text-lg font-light md:text-2xl">Min. {minOrder} Pcs</h1>
            <h1 className="font-extrabold text-2xl md:text-4xl">{name}</h1>
            <h1 className="font-semibold text-lg md:text-2xl text-orange-500">{price} /pcs</h1>
            <h1 className="text-gray-900 text-lg md:text-xl">{desc}</h1>

            <div className="flex flex-wrap justify-start md:justify-start gap-2">
            {tags.map((tag, i) => (
              <h1 key={i} className="bg-gray-100 text-gray-900 px-4 py-2 rounded-3xl text-base md:text-lg">
                {tag}
              </h1>
            ))}

            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-orange-400 to-orange-600 shadow-md text-lg text-white font-extrabold rounded-full p-2 px-6 relative z-40">
              Hubungi Untuk Pemesanan
            </motion.button>
          </div>

        </div>
      </div>
    </div>
  );
}

MainSection.propTypes = {
  name: PropTypes.string.isRequired,
  minOrder: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  path: PropTypes.string.isRequired,
};