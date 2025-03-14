import PropTypes from "prop-types";

export default function HeroProduct({ title, desc, img }) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <img
        src={`https://admin.parcelinpack.id/storage/${img}`}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 h-full p-4 md:p-8 text-white flex flex-col justify-end">
        <h1 className="text-2xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xs md:text-xl md:w-4/5">{desc}</p>
      </div>
    </div>
  );
}

HeroProduct.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};