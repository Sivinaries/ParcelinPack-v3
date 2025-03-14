import background from "../../assets/images/quote/background.png";
import { RiDoubleQuotesL } from "react-icons/ri";

function QuoteSection() {
  return (
    <div className="mx-auto p-4 md:p-12">
      <div className="relative rounded-lg flex items-center justify-center">
        <div className="flex flex-col justify-center p-4 md:p-12 min-h-[200px] md:min-h-[400px] z-10">
          <div className="w-full md:w-[700px] relative">
            <RiDoubleQuotesL
              color="#D4B4A2"
              size={80}
              className="absolute -top-12 -left-8 md:-top-12 md:-left-10 z-0"
            />
            <h1 className="text-3xl md:text-6xl z-10 relative">
              Packaging Can be Theatre, It Can Create Story
            </h1>
            <p className="ps-8 md:ps-16 text-4xl md:text-7xl font-bold text-[#D4B4A2] relative">
              -Steve Jobs
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 md:right-20 rounded-lg h-32 w-32 md:h-64 md:w-64 z-0">
          <img
            src={background}
            alt="Blue cosmetic packaging with beauty products"
            className="w-full h-full object-cover rounded-lg opacity-80"
          />
        </div>
      </div>
    </div>
  );
}

export default QuoteSection;