import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card({ img, name, slug }) {
  return (
    <div className="flex flex-wrap h-full w-full border shadow-lg rounded-xl overflow-hidden p-2">
      <img
        className="w-full max-h-[200px] object-cover rounded-lg"
        src={img}
        alt={name}
      />
      <div className="flex flex-col p-4 gap-y-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <Link
          to={slug}
          className="flex items-center justify-between px-4 py-2 mt-4 bg-white border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all"
        >
          <p>Lihat Selengkapnya</p>
          <MdArrowOutward className="w-6 h-6" />
        </Link>
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
