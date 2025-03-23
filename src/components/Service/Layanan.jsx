import Card from "./Card";
import PropTypes from "prop-types";

export default function Layanan({ categories }) {
  return (
    <div className="grid grid-cols-1 h-full bg-white w-full">
      <div className="md:my-4 my-2">
        <div className="mx-4 md:mx-20">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {categories.map((category, index) => (
              <Card
                key={index}
                img={`http://localhost:8000/storage/${category.img}`}
                name={category.kategori}
                slug={category.id.toString()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Layanan.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      kategori: PropTypes.string.isRequired,
    })
  ).isRequired,
};