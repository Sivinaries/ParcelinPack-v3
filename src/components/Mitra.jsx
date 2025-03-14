import { Link } from "react-router-dom";

export default function Mitra() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <div className="relative h-[200px] md:h-[300px] w-full">
        <img
          src="/images/mitra.png"
          alt="Customer service team with headsets"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-l md:text-4xl text-white">
            Good Packaging, Protect your Product.
          </h1>
          <h1 className="text-l md:text-4xl text-white mb-4">
            Parcelinpack, Protect your Brand
          </h1>
          <Link
            to="/contact"
            className="bg-[#FD9F59] hover:bg-[#f8944a] text-white font-medium px-6 py-3 rounded-full transition-colors"
          >
            Mari bermitra
          </Link>
        </div>
      </div>
    </div>
  );
}