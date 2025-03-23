import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import PropTypes from "prop-types";

export default function MainSection({ name, minOrder, price, desc, tags, images, path }) {
  return (
    <div className="grid grid-cols-1 h-full bg-white w-full">
      <div className="md:my-20 my-8">
        <div className="mx-4 md:mx-20">
          <div className="flex">
            <div className="w-full md:w-1/2">
              <Carousel images={images} path={path} />
            </div>
            <div className="space-y-4 my-auto">
              <p className="text-lg md:text-xl">Min. {minOrder}</p>
              <h1 className="font-bold text-3xl md:text-4xl">{name}</h1>
              <p className="font-bold text-xl md:text-2xl text-[#AB6029]">{price}</p>
              <p className="text-gray-900">{desc}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {tags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gray-200 rounded-full text-sm md:text-base">
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <Link>
                  <button className="bg-orange-500 text-white py-2 px-4 rounded-full w-full md:w-auto">
                    Hubungi untuk pemesanan
                  </button>
                </Link>
              </div>
            </div>

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