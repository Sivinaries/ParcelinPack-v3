import background from "../../assets/images/about/hero.png";

function Hero() {
  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
      <img
        src={background}
        alt="Business desk with laptop and papers"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 h-full p-4 xl:p-8 my-32 md:my-64">
          <h1 className="text-white text-center text-4xl lg:text-7xl md:text-8xl font-light drop-shadow-md">
            About Us
          </h1>
      </div>
    </div>
  );
}

export default Hero;
