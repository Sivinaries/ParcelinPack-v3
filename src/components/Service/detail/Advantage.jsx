import PropTypes from "prop-types";

export default function Advantage({ image, title, desc, path, idx }) {
  return (
    <div className="grid grid-cols-1 h-full bg-white w-full">
      <div className="md:my-20 my-8">
        <div className="">
          <div className="flex">
            <div className={`w-full ${idx % 2 === 0 ? "" : "md:order-last"}`}>
              <img
                src={`http://localhost:8000/storage/${image}`}
                alt={title}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4">
              <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
              <p className="text-gray-900">{desc}</p>
            </div>
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