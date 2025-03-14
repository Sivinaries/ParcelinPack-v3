import PropTypes from "prop-types";

export default function Advantage({ image, title, desc, path, idx }) {
  return (
    <div className="flex flex-col md:flex-row py-10 w-full h-full gap-6 md:gap-8 px-4 md:px-0">
      <div className={`w-full md:w-1/2 h-auto ${idx % 2 === 0 ? "" : "md:order-last"}`}>
        <img
          src={`https://admin.parcelinpack.id/storage/${image}`}
          alt={title}
          className="w-full h-auto rounded-xl"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
        <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
        <p className="text-gray-700">{desc}</p>
      </div>
    </div>
  );
}

Advantage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};