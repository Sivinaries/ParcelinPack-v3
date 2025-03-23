import { MdArrowOutward } from "react-icons/md";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"

export default function Card({ img, name, slug }) {
  return (
    <div className="flex flex-wrap h-full w-full border shadow-md rounded-3xl overflow-hidden p-2">
      <img
        className="w-full max-h-[200px] object-cover rounded-3xl"
        src={img}
        alt={name}
      />
      <div className="md:p-4 p-2 space-y-4 w-full">
        <div>
          <h1 className="text-xl font-semibold">{name}</h1>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-4 border-orange-500 border-2 hover:bg-gradient-to-r from-orange-400 to-orange-600 shadow-md w-full rounded-full"
        >
          <Link className="flex" to={slug}>
            <h1 className="text-black hover:underline transition-all duration-100 delay-100 text-center md:text-base w-full font-bold">Lihat Selengkapnya</h1>
            <MdArrowOutward className="text-black my-auto" size={24} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  slug: PropTypes.string.isRequired,
  minOrder: PropTypes.string,
};
