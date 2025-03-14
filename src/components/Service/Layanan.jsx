import Card from "./Card";
import PropTypes from "prop-types";

export default function Layanan({ categories }) {
  return (
    <div className="p-6 sm:p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {categories.map((category, index) => (
          <Card
            key={index}
            img={`https://admin.parcelinpack.id/storage/${category.img}`}
            name={category.kategori}
            slug={category.id.toString()}
          />
        ))}
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