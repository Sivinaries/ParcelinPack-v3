import PropTypes from "prop-types";

export default function Advantage({ image, title, desc, idx }) {
  return (
    <div className="grid grid-cols-1 h-fit bg-white w-full">
      <div className="mx-4 md:mx-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <div className={`w-full ${idx % 2 === 0 ? "" : "md:order-last"}`}>
            <img
              src={`http://localhost:8000/storage/${image}`}
              alt={title}
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="my-auto w-full md:w-3/4 mx-auto">
            <h1 className="text-gray-900 text-lg md:text-xl">{desc}</h1>
          </div>
      </div>
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